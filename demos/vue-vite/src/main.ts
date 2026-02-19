import { createApp } from "vue";
import { EditorSwitchboard } from "@coding01/docsjs-editor/browser";

createApp({
  data() {
    return {
      source: "<h1>Vue Vite</h1><p>docsjs-editor quickstart.</p>",
      active: "quill",
      output: "",
      board: new EditorSwitchboard()
    };
  },
  methods: {
    async switchEditor(_next: string) {
      // Wire your editor instances and call:
      // await this.board.switchTo(next, instance)
    }
  },
  template: `
    <main style="padding:20px;font-family:Segoe UI;">
      <h2>docsjs-editor Vue Vite Demo (Template)</h2>
      <p>Wire real editor instances, keep business API stable via switchboard.</p>
      <textarea v-model="source" style="width:100%;min-height:120px;"></textarea>
      <div style="margin-top:10px;">
        <select v-model="active" @change="switchEditor(active)">
          <option value="quill">Quill</option>
          <option value="ckeditor5">CKEditor5</option>
        </select>
      </div>
      <pre>{{ output }}</pre>
    </main>
  `
}).mount("#app");
