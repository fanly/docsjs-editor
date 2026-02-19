export type BuiltinEditorType =
  | "tiptap"
  | "quill"
  | "ckeditor5"
  | "tinymce"
  | "toast-ui"
  | "wangeditor"
  | "prosemirror"
  | "lexical"
  | "slate";

export interface EditorAdapter {
  type: BuiltinEditorType | string;
  setHtml(html: string): Promise<void> | void;
  getHtml(): Promise<string> | string;
  focus?(): Promise<void> | void;
  destroy?(): Promise<void> | void;
}

export interface AdapterContext {
  type: BuiltinEditorType | string;
  instance: Record<string, unknown>;
}

export interface CreateAdapterOptions {
  fallbackGetHtml?: () => string;
  fallbackSetHtml?: (html: string) => void;
}

export interface SyncOptions {
  preserveCurrentContent?: boolean;
}

export interface DocsjsImportOptions {
  sanitizationProfile?: "strict" | "fidelity-first";
}
