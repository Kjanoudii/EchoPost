'use client'
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function Registration() {
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3).max(15).required(),
    password: Yup.string().min(4).max(20).required(),
  });

 const onSubmit = async (data: any) => {
  console.log(data)
   try {
     const response = await axios.post(
       "https://full-stack-api-janoudi-4dae713142ce.herokuapp.com/auth",
       data
     );
     console.log("Registration successful:", response.data);
   } catch (error) {
     if (axios.isAxiosError(error)) {
       console.error(
         "Error during registration:",
         error.response?.data || error.message
       );
     } else {
       console.error("Unexpected error during registration:", error);
     }
   }
 };

  return (
    <div className="flex justify-center items-center h-screen">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Username: </label>
          <ErrorMessage name="username" component="span" />
          <Field 
        
            autocomplete="off"
            id="inputCreatePost"
            name="username"
            placeholder="(Ex. John123...)"
          />

          <label>Password: </label>
          <ErrorMessage name="password" component="span" />
          <Field
            autocomplete="off"
            type="password"
            id="inputCreatePost"
            name="password"
            placeholder="Your Password..."
          />

          <button type="submit"> Register</button>
        </Form>
      </Formik>
    </div>
  );
}
export default Registration;
