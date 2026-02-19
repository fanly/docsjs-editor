import { createBuiltinAdapter } from "../adapters/builtin";
import type { BuiltinEditorType, CreateAdapterOptions, EditorAdapter, SyncOptions } from "../types";

export class EditorSwitchboard {
  private adapter: EditorAdapter | null = null;

  connect(
    type: BuiltinEditorType | string,
    instance: Record<string, unknown>,
    options: CreateAdapterOptions = {}
  ): EditorAdapter {
    this.adapter = createBuiltinAdapter({ type, instance }, options);
    return this.adapter;
  }

  getCurrentAdapter(): EditorAdapter {
    if (!this.adapter) {
      throw new Error("[docsjs-editor] No adapter connected");
    }
    return this.adapter;
  }

  async setHtml(html: string): Promise<void> {
    const adapter = this.getCurrentAdapter();
    await adapter.setHtml(html);
  }

  async getHtml(): Promise<string> {
    const adapter = this.getCurrentAdapter();
    return await adapter.getHtml();
  }

  async switchTo(
    type: BuiltinEditorType | string,
    instance: Record<string, unknown>,
    options: SyncOptions & CreateAdapterOptions = {}
  ): Promise<EditorAdapter> {
    const currentHtml = options.preserveCurrentContent === false ? "" : await this.getHtml();
    const nextAdapter = this.connect(type, instance, options);

    if (currentHtml) {
      await nextAdapter.setHtml(currentHtml);
    }

    return nextAdapter;
  }
}
