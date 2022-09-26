import JoditEditor from 'jodit-react';
import React, { useRef } from "react";

const TextEditor = ({ initialValue, getValue, config }) => {
  const editor = useRef(null);
  return (
    <JoditEditor
      ref={editor}
      value={initialValue}
          config={config}
      tabIndex={1}
        onBlur={(newContent) => getValue(newContent)}
      onChange={(newContent) => getValue(newContent)}
    />
  );
};

export default TextEditor