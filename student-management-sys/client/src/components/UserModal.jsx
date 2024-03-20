import React, { useEffect, useState } from "react";
import { Modal, Spinner, Button, TextInput, Label, Alert } from "flowbite-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { createUser, getUsers, updateUser } from "../service/user.api";
import { successToast } from "./ToastMsgs";
import { useFetchUsers } from "../hooks/useFetchUsers";
import { useDispatch, useSelector } from "react-redux";

const UserModal = React.memo(
  ({
    isEditing,
    editingUser,
    openModal,
    handleCloseModal,
    page,
    setPage,
    userDetails,
    setUserDetails,
    setLoading,
    
  }) => {
    const initialValues = {
      username: editingUser ? editingUser.username : "",
      password: editingUser ? editingUser.password : "",
    };
    const [data, setData] = useState([])
    const currentUser = useSelector((state) => state.user.currentUser.payload.data.message);
    const dispatch = useDispatch();
    const validationSchema = Yup.object().shape({
      username: Yup.string().required("Username is required"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters"),
    });

    const fetchUsersData = async () => {
      setLoading(true);
      try {
        console.log("in fetch users data")
        const response = await getUsers(currentUser, dispatch);
        console.log("in fetch users data res",response)
        setData((prevUsers) => [...prevUsers, ...response.user]);
      } catch (error) {
        console.error("Error fetching users:", error.message);
        // setError(error);
      } finally {
        setLoading(false);
      }
    }
    useEffect(() => {
      if (!isEditing) {
        fetchUsersData();
      }
    }, [isEditing]);
    // useFetchUsers(page, setPage, userDetails, setUserDetails, setLoading);
    const {fetchUsers} = useFetchUsers(page, setPage, userDetails, setUserDetails, setLoading)

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
      let res = null;
      try {
        setSubmitting(true);
  
        if (isEditing) {
          const userId = editingUser.id;
          res = await updateUser(userId, values);
      //      setUserDetails((prevUsers) =>
      //   prevUsers.map((prevUser) => (prevUser.id === editingUser.id ? editingUser : prevUser))
      // );
      // fetchUsersData();
      // fetchUsers();
      if(res.message){
        console.log("hei")
        await getUsers(editingUser, dispatch).then(resp => {
          setUserDetails(resp.user)
        });
  
      }
        } else {
          res = await createUser(values);
        }
  
        successToast(res.message);
  
        handleCloseModal();
        resetForm();
        // fetchUsersData();
        
        // fetchUsers()
      } catch (error) {
        console.error(error);
      } finally {
        setSubmitting(false);
      }
    };
    
    // useFetchUsers(page, setPage, userDetails, setUserDetails, setLoading);

  
  

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
      </Modal>
    );
  }
);
UserModal.displayName = "UserModal";

export default UserModal;
