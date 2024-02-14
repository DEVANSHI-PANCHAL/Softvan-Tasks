import React from 'react'
import { Alert, Button, Label, Modal, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import axios from "axios";

const CreateUser = () => {
    const [openModal, setOpenModal] = useState(false);
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
  
  
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
        
        const token = localStorage.getItem('token');
  
        const config = {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        };
  
        const res = await axios.post('http://192.168.10.60:8080/register', formData, config);
        
        console.log(res.data);
  
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
          {errorMessage && (
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default CreateUser
