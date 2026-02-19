import type { BuiltinEditorType } from "../types";

export type FallbackAction = "keep" | "strip" | "replace-with-paragraph" | "replace-with-code";

export interface UnsupportedBlock {
  tag: string;
  count: number;
  reason: string;
  action: FallbackAction;
}

export interface CompatibilityReport {
  editor: BuiltinEditorType | string;
  score: number;
  unsupported: UnsupportedBlock[];
}

export interface FallbackPolicyConfig {
  defaultActions?: Partial<Record<string, FallbackAction>>;
  editorOverrides?: Record<string, Partial<Record<string, FallbackAction>>>;
}

const COMMON_UNSUPPORTED: Record<string, string> = {
  table: "Complex table semantics may lose fidelity in some editors",
  math: "MathML/OMML blocks usually require plugin support",
  svg: "Vector content may not be editable in rich text models",
  iframe: "Embedded frame is often blocked by editor sanitizers",
  video: "Video nodes may be converted to links or placeholders"
};

const EDITOR_OVERRIDES: Record<string, Partial<Record<string, FallbackAction>>> = {
  quill: {
    table: "replace-with-paragraph",
    math: "replace-with-code",
    iframe: "strip",
    video: "replace-with-paragraph"
  },
  ckeditor5: {
    math: "replace-with-code",
    iframe: "strip"
  },
  tinymce: {
    iframe: "strip"
  },
  "toast-ui": {
    iframe: "strip",
    svg: "replace-with-code"
  },
  tiptap: {
    math: "replace-with-code"
  }
};

const DEFAULT_ACTIONS: Record<string, FallbackAction> = {
  iframe: "strip",
  math: "replace-with-code",
  svg: "replace-with-code",
  table: "replace-with-paragraph",
  video: "replace-with-paragraph"
};

function countTag(html: string, tag: string): number {
  const regex = new RegExp(`<${tag}\\b`, "gi");
  const matches = html.match(regex);
  return matches ? matches.length : 0;
}

function resolveAction(editor: string, tag: string, config: FallbackPolicyConfig = {}): FallbackAction {
  const mergedOverrides = {
    ...EDITOR_OVERRIDES,
    ...(config.editorOverrides ?? {})
  };
  const mergedDefaults = {
    ...DEFAULT_ACTIONS,
    ...(config.defaultActions ?? {})
  };

  const override = mergedOverrides[editor]?.[tag];
  if (override) return override;

  return mergedDefaults[tag] ?? "keep";
}

export function buildCompatibilityReport(
  html: string,
  editor: BuiltinEditorType | string,
  config: FallbackPolicyConfig = {}
): CompatibilityReport {
  const unsupported: UnsupportedBlock[] = [];

  for (const [tag, reason] of Object.entries(COMMON_UNSUPPORTED)) {
    const count = countTag(html, tag);
    if (count > 0) {
      unsupported.push({
        tag,
        count,
        reason,
        action: resolveAction(editor, tag, config)
      });
    }
  }

  const penalty = unsupported.reduce((acc, item) => acc + Math.min(item.count * 4, 20), 0);
  const score = Math.max(0, 100 - penalty);

  return {
    editor,
    score,
    unsupported
  };
}

export function applyFallbackPolicy(
  html: string,
  report: CompatibilityReport
): string {
  let output = html;

  for (const item of report.unsupported) {
    if (item.action === "keep") continue;

    if (item.action === "strip") {
      const stripRegex = new RegExp(`<${item.tag}[^>]*>[\\s\\S]*?<\\/${item.tag}>`, "gi");
      output = output.replace(stripRegex, "");
      continue;
    }

    if (item.action === "replace-with-paragraph") {
      const replaceRegex = new RegExp(`<${item.tag}[^>]*>[\\s\\S]*?<\\/${item.tag}>`, "gi");
      output = output.replace(replaceRegex, `<p>[${item.tag} omitted for editor compatibility]</p>`);
      continue;
    }

    if (item.action === "replace-with-code") {
      const replaceRegex = new RegExp(`<${item.tag}[^>]*>[\\s\\S]*?<\\/${item.tag}>`, "gi");
      output = output.replace(replaceRegex, `<pre><code>[${item.tag} content omitted for editor compatibility]</code></pre>`);
    }
  }

  return output;
}
