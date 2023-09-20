import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { DropzoneDialog } from "material-ui-dropzone";
import "./App.css";

function DropzoneDialogExample() {
  const [open, setOpen] = useState(false);
  const [files, setFiles] = useState([]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = (newFiles) => {
    // Saving files to state for further use and closing Modal.
    setFiles(newFiles);
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "60px",
      }}
    >
      <h4 className="fst-italic mb-4">React Mui Dropzone Practice</h4>
      <Button onClick={handleOpen} variant="contained" color="primary">
        Add Image
      </Button>
      <DropzoneDialog
        open={open}
        onSave={handleSave}
        acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
        showPreviews={true}
        maxFileSize={5000000}
        onClose={handleClose}
        sx={{ width: "100%", overflowX: "hidden" }}
      />
    </div>
  );
}

export default DropzoneDialogExample;
