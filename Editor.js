// frontend/src/Editor.js
import React, { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { io } from "socket.io-client";

const SAVE_INTERVAL_MS = 2000;

export default function Editor({ documentId }) {
  const wrapperRef = useRef();
  const socketRef = useRef();
  const quillRef = useRef();

  useEffect(() => {
    socketRef.current = io("http://localhost:3001");

    const editorDiv = document.createElement("div");
    wrapperRef.current.append(editorDiv);
    quillRef.current = new Quill(editorDiv, { theme: "snow" });
    quillRef.current.disable();
    quillRef.current.setText("Loading document...");

    socketRef.current.once("load-document", document => {
      quillRef.current.setContents(document);
      quillRef.current.enable();
    });

    socketRef.current.emit("get-document", documentId);

    quillRef.current.on("text-change", (delta, oldDelta, source) => {
      if (source !== "user") return;
      socketRef.current.emit("send-changes", delta);
    });

    socketRef.current.on("receive-changes", delta => {
      quillRef.current.updateContents(delta);
    });

    const interval = setInterval(() => {
      socketRef.current.emit("save-document", quillRef.current.getContents());
    }, SAVE_INTERVAL_MS);

    return () => {
      clearInterval(interval);
      socketRef.current.disconnect();
    };
  }, [documentId]);

  return <div className="container" ref={wrapperRef} style={{ height: "100vh" }} />;
}