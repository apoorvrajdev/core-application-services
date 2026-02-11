import { EventBus } from "./event-bus";

export interface Plugin {
  name: string;
  version: string;
  init(eventBus: EventBus): Promise<void>;
  destroy?(): Promise<void>;
}

export interface PluginConfig {
  enabled: boolean;
  config?: Record<string, any>;
}

export class PluginRegistry {
  private plugins: Map<string, Plugin> = new Map();
  private configs: Map<string, PluginConfig> = new Map();
  private eventBus: EventBus;

  constructor(eventBus: EventBus) {
    this.eventBus = eventBus;
  }

  register(plugin: Plugin, config?: PluginConfig): void {
    if (this.plugins.has(plugin.name)) {
      throw new Error(`Plugin ${plugin.name} already registered`);
    }
    this.plugins.set(plugin.name, plugin);
    this.configs.set(plugin.name, config || { enabled: true });
  }

  async load(pluginName: string): Promise<void> {
    const plugin = this.plugins.get(pluginName);
    const config = this.configs.get(pluginName);

    if (!plugin) {
      throw new Error(`Plugin ${pluginName} not found`);
    }

    if (config && !config.enabled) {
      console.log(`[PluginRegistry] Plugin ${pluginName} disabled`);
      return;
    }

    try {
      await plugin.init(this.eventBus);
      console.log(`[PluginRegistry] Plugin ${pluginName} v${plugin.version} loaded`);
    } catch (error) {
      console.error(`[PluginRegistry] Failed to load plugin ${pluginName}:`, error);
      throw error;
    }
  }

  async loadAll(): Promise<void> {
    const promises = Array.from(this.plugins.keys()).map((name) =>
      this.load(name).catch((err) => {
        console.error(`[PluginRegistry] Error loading ${name}:`, err);
      })
    );
    await Promise.all(promises);
  }

  async unload(pluginName: string): Promise<void> {
    const plugin = this.plugins.get(pluginName);
    if (!plugin) {
      throw new Error(`Plugin ${pluginName} not found`);
    }

    if (plugin.destroy) {
      await plugin.destroy();
    }
    this.plugins.delete(pluginName);
    this.configs.delete(pluginName);
    console.log(`[PluginRegistry] Plugin ${pluginName} unloaded`);
  }

  getPlugin(name: string): Plugin | undefined {
    return this.plugins.get(name);
  }

  listPlugins(): string[] {
    return Array.from(this.plugins.keys());
  }
}
