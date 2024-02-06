import React from "react";
import { useFormik } from "formik";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const validate = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid Email Format";
  }

  if (!values.channel) {
    errors.channel = "Required";
  }

  return errors;
};

const SimpleForm = () => {
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit,
    validate: validate,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}

        />
        {formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}

        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}

        />
        {formik.touched.email&&formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}

        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          id="channel"
          name="channel"
          onChange={formik.handleChange}
          value={formik.values.channel}
          onBlur={formik.handleBlur}
        />
        {formik.touched.channel&&formik.errors.channel ? <div className="error">{formik.errors.channel}</div> : null}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SimpleForm;
