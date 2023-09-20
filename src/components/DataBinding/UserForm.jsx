import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import UserDetailsCard from "./UserDetailsCard";
import { useState } from "react";
import "./user.css";

const Form = () => {
  const [userData, setUserData] = useState({
    name: "",
    course: "",
    experience: "",
  });

  const onchangeUserData = (event) => {
    const { value, name } = event.target;
    //const name = event.target.name;
    setUserData((prevState) => ({ ...prevState, [name]: value }));
  };

  const onClearUserDetails = () => {
    setUserData({
      name: "",
      course: "",
      experience: "",
    });
  };
  return (
    <>
      <h3 className="text-center mt-4">Data Binding</h3>
      <Box className="d-md-flex justify-content-center my-md-5 ">
        <Box
          className="d-flex flex-column shadow rounded m-3 me-md-5"
          id="form-card"
        >
          <Typography variant="h6" className="text-center mb-3">
            User data Form
          </Typography>
          <TextField
            id="outlined-basic"
            label="Enter User Name"
            variant="outlined"
            className="my-2"
            name="name"
            value={userData.name}
            onChange={onchangeUserData}
            required
          />
          <TextField
            id="outlined-basic"
            label="Enter User Course Name"
            variant="outlined"
            name="course"
            className="my-2"
            value={userData.course}
            onChange={onchangeUserData}
            required
          />
          <TextField
            id="outlined-basic"
            label="Enter User Experience"
            variant="outlined"
            name="experience"
            className="my-2"
            value={userData.experience}
            onChange={onchangeUserData}
            required
          />
        </Box>
        <UserDetailsCard
          userData={userData}
          onClearUserDetails={onClearUserDetails}
        />
      </Box>
    </>
  );
};

export default Form;
