import React from "react";
import { Modal, Spinner, Button, TextInput, Label, Alert } from "flowbite-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { createUser, updateUser } from "../service/user.api";

const UserModal = ({
  fetchUsers,
  isEditing,
  editingUser,
  openModal,
  handleCloseModal,
}) => {
  const initialValues = {
    username: editingUser ? editingUser.username : "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      setSubmitting(true);

      if (isEditing) {
        const userId = editingUser.id;
        const res = await updateUser(userId, values);
        toast.success("User updated successfully");
      } else {
        const res = await createUser(values);
        toast.success("User created successfully");
      }

      resetForm();
      handleCloseModal();
      fetchUsers();
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Modal show={openModal} onClose={handleCloseModal}>
      <Modal.Header>{isEditing ? "Edit User" : "Create User"}</Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="space-y-6">
                <div>
                  <Label value="Username" />
                  <Field
                    type="text"
                    name="username"
                    placeholder="Enter username"
                    as={TextInput}
                  />
                  <ErrorMessage name="username" component={Alert} />
                </div>
                {!isEditing && (
                  <div>
                    <Label value="User password" />
                    <Field
                      type="password"
                      name="password"
                      placeholder="**********"
                      as={TextInput}
                    />
                    <ErrorMessage name="password" component={Alert} />
                  </div>
                )}
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
      <ToastContainer />
    </Modal>
  );
};

export default UserModal;
