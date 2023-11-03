import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "@mui/material/Button";
// import { visuallyHidden } from '@mui/utils';

function App() {
  const options = {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  };
  const notify = (text) => {
    //console.log("hello");
    toast[text.toLowerCase()](`${text} Message!`, options);
  };




  return (
    <>
      <h4 className="fst-italic my-2 text-center">React Toastify Practice</h4>
      <div className="d-flex justify-content-center mt-4">
        <Button
          onClick={() => notify("Success")}
          variant="contained"
          color="success"
          className="m-2"
        >
          Success Notify!
        </Button>
        <Button
          onClick={() => notify("Error")}
          variant="contained"
          color="error"
          className="m-2"
        >
          Error Notify!
        </Button>
        <Button
          onClick={() => notify("Warning")}
          variant="contained"
          color="warning"
          className="m-2"
        >
          Warning Notify!
        </Button>

        <Button
          onClick={() => notify("Info")}
          variant="contained"
          color="info"
          className="m-2"
        >
          Info Notify!
        </Button>

        <ToastContainer />
      </div>


    </>
  );
}
export default App;
