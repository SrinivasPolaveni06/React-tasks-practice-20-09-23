import React, { useState } from "react";
import { DropzoneArea } from "material-ui-dropzone";
import "./App.css";

const SimpleDragAndDrop = () => {
  const [files, setFiles] = useState([]);

  const handleChange = (newFiles) => {
    setFiles(newFiles);
  };

  return (
    <div
      style={{
        width: "70%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        margin: "auto",
        paddingBottom: "60px",
      }}
      id="simple-drag"
    >
      {" "}
      <DropzoneArea onChange={handleChange} />
    </div>
  );
};

export default SimpleDragAndDrop;
