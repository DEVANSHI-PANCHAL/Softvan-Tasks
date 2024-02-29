import React from "react";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { ErrorMessage, Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import TextError from "../components/TextError";

const SignUp = () => {
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    password: "",
  };
  const validationSchema = Yup.object({
    username: Yup.string()
      .max(20, "Must be 20 characters or less")
      .matches(/^[a-zA-Z ]*$/, "Must contain only letters")
      .required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
  });
  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
      navigate("/sign-in");
    }, 400);
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
          <div to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Sign Up
            </span>
          </div>
          <p className="text-sm mt-5"></p>
        </div>
        <div className="flex-1">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form className="flex flex-col gap-4">
              <div>
                <Label value="Your username" />
                <TextInput
                  type="text"
                  placeholder="Username"
                  name="username"
                  id="username"
                />
                <ErrorMessage name="name" component={TextError} />
              </div>
             
              <div>
                <Label value="Your password" />
                <TextInput
                  type="password"
                  placeholder="Password"
                  name="password"
                 id="password"
                />
                             <ErrorMessage name="name" component={TextError} />

              </div>
              <Button
                gradientDuoTone="purpleToPink"
                type="submit"
                // disabled={formik.isSubmitting}
              >
                {/* {formik.isSubmitting ? (
                  <>
                    <Spinner size="sm" />
                    <span className="pl-3">Loading...</span>
                  </>
                ) : (
                  "Sign Up"
                )} */}'"sign up'
              </Button>
            </Form>
          </Formik>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
