import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup'

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log(values);
};

// const validate = (values) => {
//   let errors = {};

//   if (!values.name) {
//     errors.name = "Required";
//   }

//   if (!values.email) {
//     errors.email = "Required";
//   } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid Email Format";
//   }

//   if (!values.channel) {
//     errors.channel = "Required";
//   }

//   return errors;
// };

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  channel: Yup.string().required('Required')
})

const RefactoredForm = () => {
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit,
    validationSchema: validationSchema,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          {...formik.getFieldProps('name')}
   

        />
        {formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}

        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          id="email"
          name="email"
          {...formik.getFieldProps('email')}

      

        />
        {formik.touched.email&&formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}

        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          id="channel"
          name="channel"
          {...formik.getFieldProps('channel')}

        />
        {formik.touched.channel&&formik.errors.channel ? <div className="error">{formik.errors.channel}</div> : null}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RefactoredForm;
