"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AmenityManager from "./amenity-manager";
import BookingsList from "./bookings-list";

const BUILDING_ID = "demo-building-1"; // Mock building

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<"amenities" | "bookings">(
    "amenities"
  );
  const [amenities, setAmenities] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const [amenRes, bookRes] = await Promise.all([
        fetch(`/api/amenities?buildingId=${BUILDING_ID}`),
        fetch(`/api/bookings?amenityId=all`),
      ]);

      if (amenRes.ok) setAmenities(await amenRes.json());
      if (bookRes.ok) setBookings(await bookRes.json());
    } catch (error) {
      console.error("[v0] Failed to load data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex gap-2">
        <Button
          variant={activeTab === "amenities" ? "default" : "outline"}
          onClick={() => setActiveTab("amenities")}
        >
          Amenities
        </Button>
        <Button
          variant={activeTab === "bookings" ? "default" : "outline"}
          onClick={() => setActiveTab("bookings")}
        >
          Bookings
        </Button>
      </div>

      {activeTab === "amenities" && (
        <AmenityManager
          buildingId={BUILDING_ID}
          amenities={amenities}
          onRefresh={loadData}
        />
      )}

      {activeTab === "bookings" && (
        <BookingsList bookings={bookings} onRefresh={loadData} />
      )}
    </div>
  );
}
