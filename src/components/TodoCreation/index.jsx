import React, { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import * as moment from "moment";
import {
  Container,
  TextField,
  Checkbox,
  Button,
  FormControlLabel,
} from "@mui/material";

function Index() {
  const initialValue = {
    title: "",
    completed: false,
    target: "",
    createdAt: "",
    updatedAt: "",
  };

  const [todoData, setTodoData] = useState(initialValue);

  function onChangeInputData(event) {
    const { name, value } = event.target;
    if (name === "completed") {
      setTodoData({ ...todoData, [name]: !todoData.completed });
    } else {
      setTodoData({ ...todoData, [name]: value });
    }
  }

  const formik = useFormik({
    initialValues: todoData,
    enableReinitialize: true,
    validationSchema: Yup.object({
      title: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
      target: Yup.string().min(3, "Too Short!").required("Required"),
    }),
    onSubmit: (values) => {
      let finalDate = moment().format("YYYY-MM-DD h:mm:ss");
      const Totaldata = {
        ...values,
        createdAt: finalDate,
        updatedAt: finalDate,
      };

      axios
        .post("http://localhost:3004/todos", Totaldata)
        .then((res) => {
          console.log(res);
          // navigate("/");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  return (
    <Container className=" mb-4" sx={{ width: "50%" }}>
      <h3 className="text-center mb-2">Todo Creation Form</h3>
      <form className="" onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="title"
          name="title"
          label="Title"
          variant="outlined"
          className="my-2"
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />
        <FormControlLabel
          control={
            <Checkbox
              id="completed"
              name="completed"
              checked={todoData.completed}
              onChange={(event) => onChangeInputData(event)}
            />
          }
          label="Completed"
        />
        <TextField
          fullWidth
          id="target"
          name="target"
          // label="Target"
          type="date"
          variant="outlined"
          placeholder=""
          className="my-2"
          value={formik.values.target}
          onChange={formik.handleChange}
          error={formik.touched.target && Boolean(formik.errors.target)}
          helperText={formik.touched.target && formik.errors.target}
        />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default Index;
