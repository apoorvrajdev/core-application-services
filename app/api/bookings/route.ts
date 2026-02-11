import { NextRequest, NextResponse } from "next/server";
import { bookingService } from "@/lib/services/booking-service";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, amenityId, buildingId, startTime, endTime } = body;

    const booking = await bookingService.createBooking({
      userId,
      amenityId,
      buildingId,
      startTime: new Date(startTime),
      endTime: new Date(endTime),
    });

    return NextResponse.json(booking, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 400 }
    );
  }
}

export async function GET(request: NextRequest) {
  const userId = request.nextUrl.searchParams.get("userId");
  const amenityId = request.nextUrl.searchParams.get("amenityId");

  try {
    if (userId) {
      const bookings = await bookingService.getUserBookings(userId);
      return NextResponse.json(bookings);
    }

    if (amenityId) {
      const bookings = await bookingService.getAmenityBookings(amenityId);
      return NextResponse.json(bookings);
    }

    return NextResponse.json(
      { error: "userId or amenityId required" },
      { status: 400 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
