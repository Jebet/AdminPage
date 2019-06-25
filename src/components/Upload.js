import React from "react";
import { FilePond, File, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import "./Upload.css"

function Upload() {
  return (
    <div className="App">
      <FilePond
        allowMultiple={true}
        acceptedFileTypes={("application/*", "")}
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      />
    </div>
  );
}

export default Upload;
