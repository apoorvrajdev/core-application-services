import { Plugin } from "../plugin-system";
import { EventBus } from "../event-bus";

interface BookingEvent {
  id: string;
  userId: string;
  amenityId: string;
  startTime: Date;
  endTime: Date;
}

export class AnalyticsPlugin implements Plugin {
  name = "analytics";
  version = "1.0.0";
  private events: BookingEvent[] = [];

  async init(eventBus: EventBus): Promise<void> {
    eventBus.subscribe("booking:created", async (booking) => {
      this.trackEvent(booking);
    });

    eventBus.subscribe("booking:cancelled", async (booking) => {
      this.trackCancellation(booking);
    });
  }

  private trackEvent(booking: BookingEvent): void {
    this.events.push(booking);
    console.log(
      `[AnalyticsPlugin] Booking tracked - Total: ${this.events.length}`
    );
  }

  private trackCancellation(booking: BookingEvent): void {
    console.log(`[AnalyticsPlugin] Booking cancelled - ID: ${booking.id}`);
  }

  getStats() {
    return {
      totalBookings: this.events.length,
      events: this.events,
    };
  }

  async destroy(): Promise<void> {
    console.log(`[AnalyticsPlugin] Analytics shutdown - Total events: ${this.events.length}`);
  }
}
