import React, { useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { EditorSwitchboard } from "@coding01/docsjs-editor/browser";

function App() {
  const [source, setSource] = useState("<h1>React Vite</h1><p>docsjs-editor quickstart.</p>");
  const [active, setActive] = useState("quill");
  const [output, setOutput] = useState("");
  const board = useMemo(() => new EditorSwitchboard(), []);
  const refs = useRef<{ quill: any; ckeditor5: any }>({ quill: null, ckeditor5: null });

  useEffect(() => {
    // Integrate your Quill and CKEditor5 instances here, then connect:
    // board.connect("quill", quillInstance)
    // await board.setHtml(source)
  }, [board, source]);

  async function onSwitch(next: string) {
    if (!refs.current[next as keyof typeof refs.current]) return;
    await board.switchTo(next, refs.current[next as keyof typeof refs.current]);
    setActive(next);
  }

  return (
    <main style={{ padding: 20, fontFamily: "Segoe UI" }}>
      <h2>docsjs-editor React Vite Demo (Template)</h2>
      <p>Wire your real editor instances, keep business API unchanged via switchboard.</p>
      <textarea value={source} onChange={(e) => setSource(e.target.value)} style={{ width: "100%", minHeight: 120 }} />
      <div style={{ marginTop: 10 }}>
        <select value={active} onChange={(e) => onSwitch(e.target.value)}>
          <option value="quill">Quill</option>
          <option value="ckeditor5">CKEditor5</option>
        </select>
      </div>
      <pre>{output}</pre>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
