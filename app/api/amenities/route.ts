import { NextRequest, NextResponse } from "next/server";
import { amenityService } from "@/lib/services/amenity-service";

export async function GET(request: NextRequest) {
  const buildingId = request.nextUrl.searchParams.get("buildingId");

  if (!buildingId) {
    return NextResponse.json(
      { error: "buildingId required" },
      { status: 400 }
    );
  }

  try {
    const amenities = await amenityService.getAmenities(buildingId);
    return NextResponse.json(amenities);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { buildingId, name, capacity, config } = body;

    const amenity = await amenityService.createAmenity(
      buildingId,
      name,
      capacity,
      config
    );

    return NextResponse.json(amenity, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 400 }
    );
  }
}
