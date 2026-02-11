import { Suspense } from "react";
import BookingInterface from "@/components/resident/booking-interface";
import { Card } from "@/components/ui/card";

export default function BookPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight">Book an Amenity</h1>
          <p className="mt-2 text-muted-foreground">
            Quick, simple amenity booking in under 30 seconds
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Suspense
          fallback={
            <Card className="p-8">
              <p>Loading...</p>
            </Card>
          }
        >
          <BookingInterface />
        </Suspense>
      </main>
    </div>
  );
}
