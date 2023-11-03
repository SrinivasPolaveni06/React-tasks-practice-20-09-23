// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import * as moment from "moment";
// import { v4 as uuidv4 } from 'uuid';
// import {
//   Container,
//   TextField,
//   Checkbox,
//   Button,
//   FormControlLabel,
// } from "@mui/material";

// function Index({ todoId }) {
//   const initialValue = {

//     title: "",
//     completed: false,
//     target: "",
//     createdAt: "",
//     updatedAt: "",
//   };



//   const [todoData, setTodoData] = useState(initialValue);



//   useEffect(() => {
//     if (todoId) {
//       axios
//         .get(`http://localhost:3004/todos/${todoId}`)
//         .then((res) => {
//           const Target = moment(res.data.target).format("YYYY-MM-DD");
//           setTodoData({ ...res.data, target: Target });

//           //console.log(res.data);
//         })
//         .catch((err) => console.log(err));
//     }
//   }, [todoId])

//   function onChangeInputData(event) {
//     console.log(todoData, 'todoData2')
//     const { name, value } = event.target;
//     if (name === "completed") {
//       setTodoData({ ...todoData, [name]: !todoData.completed });
//     } else {
//       setTodoData({ ...todoData, [name]: value });
//     }
//   }

//   console.log(todoData, 'todoData')

//   const formik = useFormik({
//     initialValues: todoData,
//     enableReinitialize: true,
//     validationSchema: Yup.object({
//       title: Yup.string()
//         .min(3, "Too Short!")
//         .max(50, "Too Long!")
//         .required("Required"),
//       target: Yup.string().min(3, "Too Short!").required("Required"),
//     }),
//     onSubmit: (values) => {
//       let finalDate = moment().format("YYYY-MM-DD h:mm:ss");

//       if (todoId) {
//         const Totaldata = {
//           ...values,
//           updatedAt: finalDate,
//         };

//         axios
//           .put(`http://localhost:3004/todos/${todoId}`, Totaldata)
//           .then((res) => {
//             console.log(res);
//             // navigate("/");
//             window.location.reload();
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//       } else {
//         const Totaldata = {
//           ...values,
//           createdAt: finalDate,
//           updatedAt: finalDate,
//         };

//         axios
//           .post("http://localhost:3004/todos", Totaldata)
//           .then((res) => {
//             //console.log(res);
//             // navigate("/");
//             window.location.reload();
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//       }
//     },
//   });

//   return (
//     <Container className=" my-5" sx={{ width: "50%" }}>
//       <h3 className="text-center mb-2">Todo Creation Form</h3>
//       <form className="" onSubmit={formik.handleSubmit}>
//         <TextField
//           fullWidth
//           id="title"
//           name="title"
//           label="Title"
//           variant="outlined"
//           className="my-2"
//           value={formik.values.title}
//           onChange={formik.handleChange}
//           error={formik.touched.title && Boolean(formik.errors.title)}
//           helperText={formik.touched.title && formik.errors.title}
//         />
//         <FormControlLabel
//           control={
//             <Checkbox
//               id="completed"
//               name="completed"
//               checked={todoData.completed}
//               onChange={(event) => onChangeInputData(event)}
//             />
//           }
//           label="Completed"
//         />
//         <TextField
//           fullWidth
//           id="target"
//           name="target"
//           // label="Target"
//           type="date"
//           variant="outlined"
//           placeholder=""
//           className="my-2"
//           value={formik.values.target}
//           onChange={formik.handleChange}
//           error={formik.touched.target && Boolean(formik.errors.target)}
//           helperText={formik.touched.target && formik.errors.target}
//         />
//         <Button variant="contained" color="primary" type="submit">
//           Submit
//         </Button>
//       </form>
//     </Container>
//   );
// }

// export default Index;