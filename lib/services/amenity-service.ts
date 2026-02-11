import { prisma } from "@/lib/prisma";

export interface AmenityConfig {
  maxDuration?: number;
  minDuration?: number;
  peakHours?: { start: number; end: number }[];
  capacity?: number;
}

export class AmenityService {
  async createAmenity(
    buildingId: string,
    name: string,
    capacity: number,
    config?: AmenityConfig
  ): Promise<any> {
    return prisma.amenity.create({
      data: {
        buildingId,
        name,
        capacity,
        config: JSON.stringify(config || {}),
      },
    });
  }

  async getAmenity(amenityId: string): Promise<any> {
    return prisma.amenity.findUnique({
      where: { id: amenityId },
      include: { bookings: { where: { status: "confirmed" } } },
    });
  }

  async getAmenities(buildingId: string): Promise<any[]> {
    return prisma.amenity.findMany({
      where: { buildingId },
      include: { bookings: { where: { status: "confirmed" } } },
    });
  }

  async updateAmenity(
    amenityId: string,
    data: { name?: string; capacity?: number; config?: AmenityConfig }
  ): Promise<any> {
    return prisma.amenity.update({
      where: { id: amenityId },
      data: {
        ...(data.name && { name: data.name }),
        ...(data.capacity && { capacity: data.capacity }),
        ...(data.config && { config: JSON.stringify(data.config) }),
      },
    });
  }

  parseConfig(configJson: string): AmenityConfig {
    try {
      return JSON.parse(configJson);
    } catch {
      return {};
    }
  }

  validateBookingDuration(config: AmenityConfig, duration: number): boolean {
    if (config.maxDuration && duration > config.maxDuration) return false;
    if (config.minDuration && duration < config.minDuration) return false;
    return true;
  }
}

export const amenityService = new AmenityService();
