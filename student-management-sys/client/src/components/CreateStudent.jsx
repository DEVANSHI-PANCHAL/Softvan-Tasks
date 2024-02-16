import axios from "axios";
import { useState } from 'react';
import { Alert, Button, FileInput, Label, Modal, Spinner, TextInput } from "flowbite-react";
import { useDispatch, useSelector } from 'react-redux';
import { createStudent } from "../redux/student/studentSlice";
import { toast } from "react-toastify";

const CreateStudent = ({ fetchStudents }) => {
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({});
  const [imageFile, setImageFile] = useState(null); 
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.currentUser?.data?.message);

  const handleChange = (e) => {
    if (e.target.type === 'file') {
      setImageFile(e.target.files[0]);
    } else {
      setFormData({ ...formData, [e.target.id]: e.target.value }); 
    }
  };

  const handleBlur = (e) => {
    validateField(e.target.id, e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!validateForm()) {
        return;
      }
      setLoading(true);
      setErrorMessage(null);

      const formDataWithImage = new FormData();
      formDataWithImage.append('firstname', formData.firstname);
      formDataWithImage.append('lastname', formData.lastname);
      formDataWithImage.append('file', imageFile);
      formDataWithImage.append('age', formData.age);
      formDataWithImage.append('email', formData.email);
      formDataWithImage.append('phonenumber', formData.phonenumber);
      formDataWithImage.append('password', formData.password);

      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data' 
        }
      };

      const res = await axios.post('/student', formDataWithImage, config);
      console.log("ok", res.data);
      dispatch(createStudent(formData)); 
      toast.success('Student created successfully'); 
      setOpenModal(false); 
      fetchStudents();
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    // Validate each field
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        const value = formData[key];
        const error = validateField(key, value);
        if (error) {
          errors[key] = error;
          isValid = false;
        }
      }
    }

    setValidationErrors(errors);
    return isValid;
  };

  const validateField = (fieldName, value) => {
    let error = null;
    switch (fieldName) {
      case 'firstname':
        if (!value) {
          error = 'First name is required';
        }
        break;
      case 'lastname':
        if (!value) {
          error = 'Last name is required';
        }
        break;
      case 'age':
        if (!value) {
          error = 'Age is required';
        }
        break;
      case 'email':
        if (!value) {
          error = 'Email is required';
        } else if (!isValidEmail(value)) {
          error = 'Invalid email format';
        }
        break;
      case 'password':
        if (!value) {
          error = 'Password is required';
        }
        break;
      case 'phonenumber':
        if (!value) {
          error = 'Phone number is required';
        } else if (!isValidPhoneNumber(value)) {
          error = 'Invalid phone number format';
        }
        break;
      default:
        break;
    }
    return error;
  };

  const isValidEmail = (email) => {
    // Basic email format validation
    const emailPattern = /\S+@\S+\.\S+/;
    return emailPattern.test(email);
  };

  const isValidPhoneNumber = (phoneNumber) => {
    // Basic phone number format validation
    const phoneNumberPattern = /^\d{10}$/;
    return phoneNumberPattern.test(phoneNumber);
  };

  return (
    <div>
      <Button onClick={() => setOpenModal(true)}>Create Student</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Create Student</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <form onSubmit={handleSubmit}>
              <Label htmlFor='firstname'>First Name</Label>
              <TextInput
                type='text'
                placeholder='Enter first name'
                required
                id='firstname'
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {validationErrors.firstname && (
                <span className="text-red-500">{validationErrors.firstname}</span>
              )}
              <Label htmlFor='lastname'>Last Name</Label>
              <TextInput
                type='text'
                placeholder='Enter last name'
                required
                id='lastname'
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {validationErrors.lastname && (
                <span className="text-red-500">{validationErrors.lastname}</span>
              )}
              <Label htmlFor='age'>Age</Label>
              <TextInput
                type='number'
                placeholder='Enter age'
                required
                id='age'
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {validationErrors.age && (
                <span className="text-red-500">{validationErrors.age}</span>
              )}
              <Label htmlFor='email'>Email</Label>
              <TextInput
                type='email'
                placeholder='Enter email'
                required
                id='email'
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {validationErrors.email && (
                <span className="text-red-500">{validationErrors.email}</span>
              )}
              <Label htmlFor='password'>Password</Label>
              <TextInput
                type='password'
                placeholder='Enter password'
                required
                id='password'
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {validationErrors.password && (
                <span className="text-red-500">{validationErrors.password}</span>
              )}
              <Label htmlFor='phonenumber'>Contact Number</Label>
              <TextInput
                type='tel'
                placeholder='Enter contact number'
                required
                id='phonenumber'
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {validationErrors.phonenumber && (
                <span className="text-red-500">{validationErrors.phonenumber}</span>
              )}
              <Label htmlFor='image'>Image</Label>
              <FileInput
                id='image'
                accept='image/*'
                onChange={handleChange}
              />
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSubmit} gradientDuoTone='purpleToPink' type='submit' disabled={loading}>
            {loading ? (
              <>
                <Spinner size='sm' />
                <span className='pl-3'>Loading...</span>
              </>
            ) : (
              'Save'
            )}
          </Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>Cancel</Button>
        </Modal.Footer>
      </Modal>
      {errorMessage && (
        <Alert className='mt-5' color='failure'>
          {errorMessage}
        </Alert>
      )}
    </div>
  );
}

export default CreateStudent;
