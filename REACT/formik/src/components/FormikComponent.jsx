import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "", // corrected field name
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers:['','']
};

const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  channel: Yup.string().required("Required"),
  comments: Yup.string(), // No validation for comments, can be optional
  address: Yup.string().required("Required"),
});

const FormikComponent = () => {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component={TextError} />
          </div>
          <div className="form-control">
            <label htmlFor="email">E-mail</label>
            <Field type="text" id="email" name="email" />
            <ErrorMessage name="email">
              {(errorMsg) => <div className="error">{errorMsg}</div>}
            </ErrorMessage>
          </div>

          <div className="form-control">
            <label htmlFor="channel">Channel</label>
            <Field type="text" id="channel" name="channel" />
            <ErrorMessage name="channel" component={TextError} />
          </div>

          <div className="form-control">
            <label htmlFor="comments">Comments</label>
            <Field as="textarea" id="comments" name="comments" />
            <ErrorMessage name="comments" component={TextError} />
          </div>

          <div className="form-control">
            <label htmlFor="address">Address</label>
            <Field name="address">
              {({ field, meta }) => (
                <div>
                  <input type="text" id="address" {...field} />
                  {meta.touched && meta.error && <div>{meta.error}</div>}
                </div>
              )}
            </Field>
          </div>

          <div className="form-control">
            <label htmlFor="facebook">Facebook Profile</label>
            <Field type="text" id="facebook" name="social.facebook" />
          </div>


          <div className="form-control">
            <label htmlFor="twitter">twitter Profile</label>
            <Field type="text" id="twitter" name="social.twitter" />
          </div>

          <div className="form-control">
            <label htmlFor="primaryPh">Primary phone number</label>
            <Field type='text' id='primaryPh' name='phoneNumbers[0]' />
          </div>

          <div className="form-control">
            <label htmlFor="secondaryPh">Secondary phone number</label>
            <Field type='text' id='secondaryPh' name='phoneNumbers[1]' />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikComponent;
