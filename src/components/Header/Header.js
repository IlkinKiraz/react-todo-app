import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useTodo } from "../../context/TodoContext";
import { useFormik } from "formik";
import * as yup from 'yup';


const validationSchema = yup.object({
  text: yup
    .string()
    .required('This place is required'),

});


function Header() {
  const { addTodo } = useTodo();

  const formik = useFormik({
    initialValues: {
      text: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, bag) => {
      console.log(JSON.stringify(values));
      addTodo(values.text)
      bag.resetForm();
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
      <Box
        sx={{
            width: "50%",
            m:"auto",
            mt:13,
          }}
        noValidate
        autoComplete="off"
      >
        <TextField
          fullWidth
          focused
          id="text"
          name="text"
          label="T O D O"
          color="secondary"
          value={formik.values.text}
          onChange={formik.handleChange}
         
          error={formik.touched.text && Boolean(formik.errors.text)}
          helperText={formik.touched.text && formik.errors.text}
        />
      </Box>
      </form>
    </div>
  );
}

export default Header;
