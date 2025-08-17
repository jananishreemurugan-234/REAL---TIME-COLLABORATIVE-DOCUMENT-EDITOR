import React from "react";
import Editor from "./Editor";

export default function App() {
  const documentId = "test-doc"; // Static document for now
  return <Editor documentId={documentId} />;
}