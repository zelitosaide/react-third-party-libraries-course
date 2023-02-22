import { useState } from "react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Index() {
  const [value, setValue] = useState("<h2>Ola</h2>");

  return (
    <>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
      />
      <div dangerouslySetInnerHTML={{ __html: value }} />
    </>
  );
}
