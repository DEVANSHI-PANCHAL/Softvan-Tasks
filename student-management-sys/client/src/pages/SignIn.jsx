import React from "react";
import { Button, Label, Spinner, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { signInStart, signInFailure } from "../redux/user/user1Slice";
import { loginReq } from "../service/login.api";
import WithToast from "../components/WithToast"; // Import your WithToast HOC
import { signIn } from "../redux/user/userThunks";
import { signInSuccess } from "../redux/user/userSlice";

const SignIn = ({ showToast }) => { // Receive showToast from props
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().max(20, "Must be 20 characters or less").required("Username is required"),
      password: Yup.string().max(20, "Must be 20 characters or less").required("Password is required"),
    }),
    onSubmit: async (values, { setSubmitting }, err) => {
      try {
        // dispatch(signInStart());
        // const res = await loginReq(values);
       const  {username, password} = values
        console.log("values",values)
        const res = await dispatch(signIn({username,password}))
        console.log("RES",res.payload)
        const token = res.payload.data.message;
        localStorage.setItem("token", token);
    
        if (res.payload.status === 200) {
          dispatch(signInSuccess(res));
          showToast('Sign-in successful', 'success'); // Show toast message
          navigate("/dashboard"); 
        } else if (res.status === 403) {
          dispatch(signInFailure(err?.message));
          toast.error(err?.message); 
        }
      } catch (error) {
        dispatch(signInFailure(error?.message));
        toast.error(error?.message); 
      }
      setSubmitting(false);
    },
    
  });

  return (
    <div className={`flex justify-center items-center h-screen ${theme === "light" ? "bg-gray-100" : "bg-slate-900 text-white"}`}>
      <div className={`bg-white p-8 rounded-lg shadow-md w-full max-w-md border border-gradient-purple-blue-green ${theme === "light" ? "" : "bg-slate-700 text-white"}`}>
        <div className="text-center mb-8">
          <h2 className={`font-bold text-4xl ${theme === "light" ? "text-purple-900" : "text-purple-600"}`}>Sign In</h2>
          <p className={`text-sm mt-2 ${theme === "light" ? "text-gray-600" : ""}`}>Enter your credentials to sign in</p>
        </div>
        <form className="space-y-4" onSubmit={formik.handleSubmit}>
          <div>
            <Label value="Your username" />
            <TextInput
              type="text"
              placeholder="Enter your username"
              id="username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
              className={theme === "light" ? "dark-mode-input" : ""}
            />
            {formik.touched.username && formik.errors.username && (
              <div className={`text-red-500 ${theme === "light" ? "dark-mode-text" : ""}`}>{formik.errors.username}</div>
            )}
          </div>
          <div>
            <Label value="Your password" />
            <TextInput
              type="password"
              placeholder="**********"
              id="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className={theme === "light" ? "dark-mode-input" : ""}
            />
            {formik.touched.password && formik.errors.password && (
              <div className={`text-red-500 ${theme === "light" ? "dark-mode-text" : ""}`}>{formik.errors.password}</div>
            )}
          </div>
          <Button gradientDuoTone="purpleToPink" type="submit" disabled={formik.isSubmitting} className={`w-full ${theme ? "dark-mode-btn" : ""}`}>
            {formik.isSubmitting ? (
              <>
                <Spinner size="sm" />
                <span className="pl-3">Loading...</span>
              </>
            ) : (
              "Sign In"
            )}
          </Button>
        </form>
        {formik.errors.errorMessage && <div className={`text-red-500 ${theme === "light" ? "dark-mode-text" : ""}`}>{formik.errors.errorMessage}</div>}
      </div>
    </div>
  );
};

export default WithToast(SignIn);
