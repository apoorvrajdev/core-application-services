import { Plugin } from "../plugin-system";
import { EventBus } from "../event-bus";

export class NotificationPlugin implements Plugin {
  name = "notification";
  version = "1.0.0";

  async init(eventBus: EventBus): Promise<void> {
    eventBus.subscribe("booking:created", async (booking) => {
      await this.sendConfirmation(booking);
    });

    eventBus.subscribe("booking:cancelled", async (booking) => {
      await this.sendCancellation(booking);
    });
  }

  private async sendConfirmation(booking: any): Promise<void> {
    console.log(`[NotificationPlugin] Booking confirmed for ${booking.user?.name}`);
    console.log(`[NotificationPlugin] Amenity: ${booking.amenity?.name}`);
    console.log(`[NotificationPlugin] Time: ${booking.startTime}`);
    // In production: send email/SMS
  }

  private async sendCancellation(booking: any): Promise<void> {
    console.log(`[NotificationPlugin] Booking cancelled for ${booking.user?.name}`);
    // In production: send cancellation notification
  }

  async destroy(): Promise<void> {
    console.log("[NotificationPlugin] Notification service shutdown");
  }
}
