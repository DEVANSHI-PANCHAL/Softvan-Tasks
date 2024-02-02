import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { addUser } from '../redux/userSlice'; // Import addUser action creator

export const FormComp = ({ onHide }) => {
  const dispatch = useDispatch(); // Get dispatch function
  const [formData, setFormData] = useState({ name: '', email: '' }); // State to hold form data

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); // Update form data state
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    dispatch(addUser(formData)); // Dispatch addUser action with form data
    onHide(); // Close modal
  };

  return (
    <Modal
      show={true}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create User
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              placeholder="Enter your name"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              placeholder="name@example.com"
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="success" type="submit">Save</Button>
          <Button variant="secondary" onClick={onHide}>Close</Button> {/* Close button */}
        </Form>
      </Modal.Body>
    </Modal>
  );
};
