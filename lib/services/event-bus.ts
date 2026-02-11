type EventHandler = (data: any) => Promise<void> | void;

interface EventSubscription {
  unsubscribe: () => void;
}

export class EventBus {
  private listeners: Map<string, EventHandler[]> = new Map();

  subscribe(event: string, handler: EventHandler): EventSubscription {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event)!.push(handler);

    return {
      unsubscribe: () => {
        const handlers = this.listeners.get(event);
        if (handlers) {
          const index = handlers.indexOf(handler);
          if (index > -1) handlers.splice(index, 1);
        }
      },
    };
  }

  async emit(event: string, data: any = null): Promise<void> {
    const handlers = this.listeners.get(event) || [];
    await Promise.all(handlers.map((h) => Promise.resolve(h(data))));
  }
}

export const eventBus = new EventBus();
