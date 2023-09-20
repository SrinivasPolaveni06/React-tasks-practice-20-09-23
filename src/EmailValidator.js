import React, { useState } from "react";
import * as EmailValidator from "email-validator";
import TextField from "@mui/material/TextField";
import Button from "@material-ui/core/Button";

// import { Button } from "material-ui";
const EmailValidators = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const handleEmailChange = (event) => {
    //console.log(event.target.value);
    setEmail(event.target.value);
  };
  const handleVerify = () => {
    const verify = EmailValidator.validate(email);
    setError(verify);
  };
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center py-3"
      style={{ width: "100%" }}
    >
      <h4 className="fst-italic my-2">Email Validator Practice</h4>
      <TextField
        id="outlined-basic"
        label="Enter Email"
        variant="outlined"
        type="email"
        value={email}
        onChange={(e) => handleEmailChange(e)}
        className="my-3"
        sx={{ minWidth: "30%", maxWidth: "95%" }}
      />

      <Button
        onClick={() => handleVerify()}
        variant="contained"
        color="primary"
        className="m-2"
        style={{ maxWidth: "160px" }}
      >
        Email Verify
      </Button>
      {error ? (
        <p className="text-success fw-bold">Email Verified Successfully</p>
      ) : null}
      {error === false ? (
        <p className="text-danger fw-bold">Please Enter Valid Email</p>
      ) : null}
    </div>
  );
};

export default EmailValidators;
