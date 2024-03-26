import React, { useState } from "react";
import {
  Modal,
  Spinner,
  Button,
  TextInput,
  Label,
  Alert,
  FileInput,
} from "flowbite-react";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { createStudentApi, updateStudentApi } from "../service/student.api";
import WithToast from "./WithToast";

const StudentModal = ({
  fetchStudents,
  isEditing,
  editingStudent,
  openModal,
  handleCloseModal,
  showToast,
}) => {
  const [selectedImage, setSelectedImage] = useState(
    editingStudent ? editingStudent.base64Image : null
  );

  const initialValues = {
    firstname: editingStudent ? editingStudent.firstname : "",
    lastname: editingStudent ? editingStudent.lastname : "",
    age: editingStudent ? editingStudent.age : "",
    email: editingStudent ? editingStudent.email : "",
    password: editingStudent ? editingStudent.password : "",
    phonenumber: editingStudent ? editingStudent.phonenumber : "",
    file: editingStudent ? editingStudent.file : "",
    // fileName: editingStudent ? editingStudent.fileName : null,
    // fileURL: editingStudent ? editingStudent.fileURL : null,
  };

  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required("First name is required"),
    lastname: Yup.string().required("Last name is required"),
    age: Yup.number()
      .typeError("Age must be a number")
      .required("Age is required")
      .min(25, "Age must be at least 25")
      .max(50, "Age must be at most 50"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
    phonenumber: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    file: isEditing
      ? Yup.mixed()
      : Yup.mixed().test("fileType", "Unsupported file format", (value) => {
          if (value) {
            return value && ["image/jpeg", "image/png"].includes(value.type);
          }
          return true;
        }),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      setSubmitting(true);
      console.log("values", values);
      const imageFile = values.file;
      const formData = new FormData();
      formData.append("firstname", values.firstname);
      formData.append("lastname", values.lastname);
      formData.append("age", values.age);
      formData.append("email", values.email);
      formData.append("password", values.password);
      formData.append("phonenumber", values.phonenumber);
      if (imageFile) formData.append("file", imageFile);
      let res = null;
      if (isEditing) {
        const studentId = editingStudent.id;
        res = await updateStudentApi(studentId, formData);
      } else {
        console.log("in create");
        console.log("form data in create", formData);
        res = await createStudentApi(formData);
      }
      console.log("ressss",res)
      resetForm();
      handleCloseModal();
      showToast(res.message, "success");
      fetchStudents();
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Modal show={openModal} onClose={handleCloseModal}>
        <Modal.Header>
          {isEditing ? "Edit Student" : "Create Student"}
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, setFieldValue }) => (
              <Form>
                <div className="space-y-2 flex flex-col gap-4">
                  <div>
                    <Label htmlFor="file" title="click to upload image">
                      <div className="w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full">
                        {isEditing ? (
                          <img
                            src={selectedImage || editingStudent?.base64Image}
                            alt="image"
                            className="rounded-full w-full h-full object-cover border-8 border-[lightgray]"
                          />
                        ) : (
                          <img
                            src={
                              "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
                            }
                            alt="image"
                            className="rounded-full w-full h-full object-cover border-8 border-[lightgray]"
                          />
                        )}
                      </div>
                    </Label>
                    <Field name="file" style={{ display: "none" }}>
                      {({ field, form }) => (
                        <div className="hidden">
                          <FileInput
                            imageFile
                            id="file"
                            accept="image/*"
                            onChange={(event) => {
                              const file = event.currentTarget.files[0];
                              if (file) {
                                const fileURL = URL.createObjectURL(file);
                                form.setFieldValue("file", file);
                                form.setFieldValue("fileName", file.name);
                                form.setFieldValue("fileURL", fileURL);
                                setSelectedImage(fileURL);
                              }
                            }}
                          />
                        </div>
                      )}
                    </Field>
                    <ErrorMessage name="file" component={Alert} />
                  </div>
                  <div>
                    <Label htmlFor="firstname">First Name</Label>
                    <Field
                      type="text"
                      name="firstname"
                      placeholder="Enter first name"
                      as={TextInput}
                    />
                    <ErrorMessage name="firstname" component={Alert} />
                  </div>
                  <div>
                    <Label htmlFor="lastname">Last Name</Label>
                    <Field
                      type="text"
                      name="lastname"
                      placeholder="Enter last name"
                      as={TextInput}
                    />
                    <ErrorMessage name="lastname" component={Alert} />
                  </div>
                  <div>
                    <Label htmlFor="age">Age</Label>
                    <Field
                      type="number"
                      name="age"
                      placeholder="Enter age"
                      as={TextInput}
                    />
                    <ErrorMessage name="age" component={Alert} />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      as={TextInput}
                    />
                    <ErrorMessage name="email" component={Alert} />
                  </div>
                  <div>
                    <Label htmlFor="password">Password</Label>
                    <Field
                      type="password"
                      name="password"
                      placeholder="**********"
                      as={TextInput}
                    />
                    <ErrorMessage name="password" component={Alert} />
                  </div>
                  <div>
                    <Label htmlFor="phonenumber">Phone Number</Label>
                    <Field
                      type="tel"
                      name="phonenumber"
                      placeholder="Enter phone number"
                      as={TextInput}
                    />
                    <ErrorMessage name="phonenumber" component={Alert} />
                  </div>
                </div>
                <Modal.Footer>
                  <Button
                    gradientDuoTone="purpleToPink"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Spinner size="sm" />
                        <span className="pl-3">Loading...</span>
                      </>
                    ) : (
                      "Save"
                    )}
                  </Button>
                  <Button color="gray" onClick={handleCloseModal}>
                    Cancel
                  </Button>
                </Modal.Footer>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default WithToast(StudentModal); 
