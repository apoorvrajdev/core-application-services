import { prisma } from "@/lib/prisma";
import { eventBus } from "./event-bus";
import { initializePlugins } from "./init-plugins";

export interface BookingRequest {
  userId: string;
  amenityId: string;
  buildingId: string;
  startTime: Date;
  endTime: Date;
}

let pluginsInitialized = false;

export class BookingService {
  constructor() {
    if (!pluginsInitialized) {
      initializePlugins().catch((err) =>
        console.error("[BookingService] Plugin initialization failed:", err)
      );
      pluginsInitialized = true;
    }
  }
  async checkAvailability(
    amenityId: string,
    startTime: Date,
    endTime: Date
  ): Promise<boolean> {
    const conflicts = await prisma.booking.findMany({
      where: {
        amenityId,
        status: "confirmed",
        OR: [
          {
            startTime: { lt: endTime },
            endTime: { gt: startTime },
          },
        ],
      },
    });
    return conflicts.length === 0;
  }

  async createBooking(request: BookingRequest): Promise<any> {
    const isAvailable = await this.checkAvailability(
      request.amenityId,
      request.startTime,
      request.endTime
    );

    if (!isAvailable) {
      throw new Error("Amenity not available for requested time");
    }

    const booking = await prisma.booking.create({
      data: {
        userId: request.userId,
        amenityId: request.amenityId,
        buildingId: request.buildingId,
        startTime: request.startTime,
        endTime: request.endTime,
        status: "confirmed",
      },
      include: { amenity: true, user: true },
    });

    await eventBus.emit("booking:created", booking);
    return booking;
  }

  async cancelBooking(bookingId: string): Promise<any> {
    const booking = await prisma.booking.update({
      where: { id: bookingId },
      data: { status: "cancelled" },
      include: { amenity: true, user: true },
    });

    await eventBus.emit("booking:cancelled", booking);
    return booking;
  }

  async getUserBookings(userId: string): Promise<any[]> {
    return prisma.booking.findMany({
      where: { userId, status: "confirmed" },
      include: { amenity: true },
      orderBy: { startTime: "asc" },
    });
  }

  async getAmenityBookings(amenityId: string): Promise<any[]> {
    return prisma.booking.findMany({
      where: { amenityId, status: "confirmed" },
      include: { user: true },
      orderBy: { startTime: "asc" },
    });
  }
}

export const bookingService = (() => {
  const instance = new BookingService();
  return instance;
})();
