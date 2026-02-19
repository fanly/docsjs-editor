# docsjs-editor Roadmap

## Vision

Build a production-grade, open-source editor integration layer for docsjs where teams can switch mainstream editors at runtime without changing business logic.

## Phase 1 (Done in this commit)

- Project scaffold aligned with docsjs-markdown structure
- Unified adapter contract and switchboard runtime
- Built-in adapters for mainstream editors and extension hooks
- docsjs bridge (`docsjs-change`, DOCX import)
- Unit tests and verify gate
- CI / npm publish / Pages / GitHub Packages workflows
- Bilingual README and landing page

## Phase 2 (Next)

- Add adapter-specific smoke demos:
  - Tiptap
  - Quill
  - CKEditor5
  - TinyMCE
- Add adapter compliance test suite:
  - set/get idempotence
  - switch round-trip fidelity
  - whitespace / list / table retention checks
- Add typed helper packages for Lexical / Slate / ProseMirror HTML bridge

## Phase 3

- Add plugin capability matrix per editor:
  - comments
  - tables
  - heading model
  - markdown support
  - collaborative support
- Add fallback policy engine (when editor cannot represent specific HTML blocks)
- Add conversion report API for editor-specific unsupported blocks

## Phase 4

- Add end-to-end benchmark harness:
  - import latency
  - switch latency
  - memory footprint
  - output drift score
- Add production telemetry hooks (optional)
- Add advanced docsjs integration for partial updates and incremental sync

## Parallel Upgrades for docsjs Core

- Stabilize parser output contracts for editor bridges
- Add richer semantic marks for editor mapping
- Expose optional incremental patch stream in addition to full snapshots
- Add media asset hydration metadata standard shared by all plugins
