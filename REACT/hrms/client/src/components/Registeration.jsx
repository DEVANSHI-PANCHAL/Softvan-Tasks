import React, { useState } from "react";
import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormSubmitButton from "./Form-Components/FormSubmitButton";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // Define validation schema using Yup
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().required("Password is required").min(8, "Password must be at least 8 characters"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    department: Yup.string().required("Department is required"),
  });

  // Handle form submission
  const handleSubmit = (values) => {
    // Store form data in local storage
    localStorage.setItem("userData", JSON.stringify(values));
    // Handle further logic (e.g., redirection, API calls) here
  };

  // Initialize Formik
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      department: "",
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div
      style={{
        backgroundColor: "#1976D2",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
          width: "50%",
          height: "50%",
          maxWidth: "400px",
          overflow: "hidden",
          "@media (max-width: 600px)": {
            width: "80%",
            height: "80%",
          },
          "@media (max-width: 400px)": {
            width: "90%",
            height: "90%",
          },
        }}
      >
        <TextField
          label="First Name"
          type="text"
          required
          {...formik.getFieldProps("firstName")}
          error={formik.touched.firstName && formik.errors.firstName}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <TextField
          label="Last Name"
          type="text"
          required
          {...formik.getFieldProps("lastName")}
          error={formik.touched.lastName && formik.errors.lastName}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
        <TextField
          label="Email"
          type="email"
          required
          {...formik.getFieldProps("email")}
          error={formik.touched.email && formik.errors.email}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          label="Password"
          type={showPassword ? "text" : "password"}
          required
          {...formik.getFieldProps("password")}
          error={formik.touched.password && formik.errors.password}
          helperText={formik.touched.password && formik.errors.password}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePasswordVisibility}>
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Confirm Password"
          type={showConfirmPassword ? "text" : "password"}
          required
          {...formik.getFieldProps("confirmPassword")}
          error={formik.touched.confirmPassword && formik.errors.confirmPassword}
          helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleToggleConfirmPasswordVisibility}>
                  {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <FormSubmitButton>Submit</FormSubmitButton>
        Already have an account?
        <Link to="/login" variant="body2">
          Login{" "}
        </Link>
      </Box>
    </div>
  );
};

export default Registration;
