import * as React from "react";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./user.css";

export default function NameCard(props) {
  const { name, course, experience } = props.userData;

  const onClearUserData = () => {
    props.onClearUserDetails();
  };
  return (
    <Box id="userdatacard" className="m-3 ms-md-5 shadow rounded">
      <Typography variant="h6" className="text-center mb-3">
        User details
      </Typography>
      <Box className="d-flex flex-column justify-content-center ps-md-4">
        <Typography color="" gutterBottom className="my-2">
          Name:{"  "} <b className=" fs-5">{name}</b>
        </Typography>

        <Typography color="" gutterBottom className="my-2">
          Course:{"  "} <b className=" fs-5">{course}</b>
        </Typography>
        <Typography color="" gutterBottom className="my-2">
          Experience:{"  "} <b className=" fs-5">{experience}</b>
        </Typography>
        <Box className=" text-center">
          <Button
            size="small"
            variant="contained"
            className="px-3 px-md-5 mt-4 "
            onClick={onClearUserData}
          >
            Clear Data
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
