"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

interface BookingsListProps {
  bookings: any[];
  onRefresh: () => void;
}

export default function BookingsList({
  bookings,
  onRefresh,
}: BookingsListProps) {
  const handleCancel = async (bookingId: string) => {
    try {
      const res = await fetch(`/api/bookings/${bookingId}/cancel`, {
        method: "POST",
      });

      if (res.ok) {
        onRefresh();
      }
    } catch (error) {
      console.error("[v0] Failed to cancel booking:", error);
    }
  };

  const confirmedBookings = bookings.filter((b) => b.status === "confirmed");

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Bookings</h2>

      <div className="space-y-2">
        {confirmedBookings.length > 0 ? (
          confirmedBookings.map((booking) => (
            <Card key={booking.id}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <p className="font-semibold">{booking.amenity?.name}</p>
                    <p className="text-sm text-muted-foreground">
                      User: {booking.user?.name || booking.userId}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {format(new Date(booking.startTime), "PPpp")} -{" "}
                      {format(new Date(booking.endTime), "p")}
                    </p>
                  </div>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleCancel(booking.id)}
                  >
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <Card className="p-8 text-center">
            <p className="text-muted-foreground">No bookings</p>
          </Card>
        )}
      </div>
    </div>
  );
}
