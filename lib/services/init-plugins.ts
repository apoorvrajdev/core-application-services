import { eventBus } from "./event-bus";
import { PluginRegistry } from "./plugin-system";
import { NotificationPlugin } from "./plugins/notification-plugin";
import { AnalyticsPlugin } from "./plugins/analytics-plugin";

let pluginRegistry: PluginRegistry | null = null;

export function getPluginRegistry(): PluginRegistry {
  if (!pluginRegistry) {
    throw new Error("Plugin registry not initialized. Call initializePlugins first.");
  }
  return pluginRegistry;
}

export async function initializePlugins(): Promise<void> {
  pluginRegistry = new PluginRegistry(eventBus);

  // Register plugins
  pluginRegistry.register(new NotificationPlugin(), {
    enabled: true,
  });

  pluginRegistry.register(new AnalyticsPlugin(), {
    enabled: true,
  });

  // Load all plugins
  await pluginRegistry.loadAll();
  console.log("[PluginLoader] All plugins initialized successfully");
}

export async function shutdownPlugins(): Promise<void> {
  if (!pluginRegistry) return;

  const plugins = pluginRegistry.listPlugins();
  for (const pluginName of plugins) {
    await pluginRegistry.unload(pluginName);
  }
  console.log("[PluginLoader] All plugins shutdown");
}
