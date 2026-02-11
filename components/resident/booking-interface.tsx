"use client";

import React from "react"

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";

const BUILDING_ID = "demo-building-1";
const DEMO_USER_ID = "user-1";

export default function BookingInterface() {
  const [amenities, setAmenities] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [booking, setBooking] = useState(false);

  const [formData, setFormData] = useState({
    amenityId: "",
    date: "",
    startTime: "",
    duration: "1",
  });

  useEffect(() => {
    loadAmenities();
  }, []);

  const loadAmenities = async () => {
    try {
      const res = await fetch(`/api/amenities?buildingId=${BUILDING_ID}`);
      if (res.ok) {
        setAmenities(await res.json());
      }
    } catch (error) {
      console.error("[v0] Failed to load amenities:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBooking(true);

    try {
      const startDate = new Date(`${formData.date}T${formData.startTime}`);
      const endDate = new Date(
        startDate.getTime() + parseInt(formData.duration) * 60 * 60 * 1000
      );

      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: DEMO_USER_ID,
          amenityId: formData.amenityId,
          buildingId: BUILDING_ID,
          startTime: startDate.toISOString(),
          endTime: endDate.toISOString(),
        }),
      });

      if (res.ok) {
        const newBooking = await res.json();
        setBookings([...bookings, newBooking]);
        setFormData({
          amenityId: "",
          date: "",
          startTime: "",
          duration: "1",
        });

        // Reset form
        const button = document.querySelector(
          'button[type="submit"]'
        ) as HTMLElement;
        if (button) {
          button.textContent = "Booking confirmed!";
          setTimeout(() => {
            button.textContent = "Book Now";
          }, 2000);
        }
      }
    } catch (error) {
      console.error("[v0] Failed to create booking:", error);
    } finally {
      setBooking(false);
    }
  };

  if (loading) {
    return <Card className="p-8 text-center"><p>Loading amenities...</p></Card>;
  }

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {/* Booking Form */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Booking</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="amenity">Select Amenity</Label>
              <Select
                value={formData.amenityId}
                onValueChange={(value) =>
                  setFormData({ ...formData, amenityId: value })
                }
              >
                <SelectTrigger id="amenity">
                  <SelectValue placeholder="Choose an amenity..." />
                </SelectTrigger>
                <SelectContent>
                  {amenities.map((a: any) => (
                    <SelectItem key={a.id} value={a.id}>
                      {a.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                min={format(new Date(), "yyyy-MM-dd")}
                required
              />
            </div>

            <div>
              <Label htmlFor="time">Start Time</Label>
              <Input
                id="time"
                type="time"
                value={formData.startTime}
                onChange={(e) =>
                  setFormData({ ...formData, startTime: e.target.value })
                }
                required
              />
            </div>

            <div>
              <Label htmlFor="duration">Duration (hours)</Label>
              <Select
                value={formData.duration}
                onValueChange={(value) =>
                  setFormData({ ...formData, duration: value })
                }
              >
                <SelectTrigger id="duration">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5].map((h) => (
                    <SelectItem key={h} value={h.toString()}>
                      {h} hour{h > 1 ? "s" : ""}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" disabled={booking} className="w-full">
              {booking ? "Booking..." : "Book Now"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* User Bookings */}
      <Card>
        <CardHeader>
          <CardTitle>Your Bookings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {bookings.length > 0 ? (
              bookings.map((b: any) => (
                <div key={b.id} className="p-3 border rounded-lg">
                  <p className="font-semibold text-sm">{b.amenity?.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {format(new Date(b.startTime), "PPpp")}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-sm text-muted-foreground">No bookings yet</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
