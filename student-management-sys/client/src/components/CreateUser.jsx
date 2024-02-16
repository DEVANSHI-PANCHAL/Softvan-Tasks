import React, { useState } from 'react';
import { Alert, Button, Label, Modal, Spinner, TextInput } from "flowbite-react";
import axios from "axios";
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateUser = ({ fetchUsers }) => {
    const [openModal, setOpenModal] = useState(false);
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const { currentUser } = useSelector((state) => state.user);
    const token = currentUser?.data?.message;

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    };

    const handleSubmit = async(e) => {
      e.preventDefault();
      if (!formData.username || !formData.password) {
        return setErrorMessage('Please fill out all fields.');
      }
      try {
        setLoading(true);
        setErrorMessage(null);
        
        const config = {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        };
  
        const res = await axios.post('http://192.168.10.60:9090/register', formData, config);
        
        console.log(res.data);
        setFormData({}); // Clear form data after successful submission
        toast.success('User created successfully'); // Show toast message
        setOpenModal(false); // Close the modal upon successful creation
        fetchUsers(); 
      } catch (error) {
        console.log(error)
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    };
  
  return (
    <div>
        <Button onClick={() => setOpenModal(true)}>Create User</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Create User</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <form onSubmit={handleSubmit}>
              <div>
                <Label value="Username"/>
                <TextInput type="text" id="username" placeholder="Enter username" onChange={handleChange}/>
              </div>
              <div>
                <Label value='User password' />
                <TextInput
                  type='password'
                  placeholder='**********'
                  id='password'
                  onChange={handleChange}
                />
              </div>
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
      <ToastContainer /> {/* Toast container */}
    </div>
  )
}

export default CreateUser;
