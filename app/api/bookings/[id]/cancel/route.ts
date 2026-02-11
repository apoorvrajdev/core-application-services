import { NextRequest, NextResponse } from "next/server";
import { bookingService } from "@/lib/services/booking-service";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const booking = await bookingService.cancelBooking(id);
    return NextResponse.json(booking);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 400 }
    );
  }
}
