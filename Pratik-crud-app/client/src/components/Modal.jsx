import React, { useState, useEffect } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import axios from 'axios';
import { useSelector } from 'react-redux';

const ModalComp = ({ fetchUsersData, editUserId, setEditUserId }) => {
    const { currentUser } = useSelector((state) => state.user);

    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', password: '', roles: "ROLE_USER" });
    const token = currentUser?.data;

    useEffect(() => {
        // Open the modal if editUserId is provided (for editing) or if it's null (for creating)
        setOpen(editUserId !== null);
        // If editUserId is provided, fetch the user data to populate the form
        if (editUserId !== null) {
            fetchUserData(editUserId);
        }
    }, [editUserId]);

    const fetchUserData = async (id) => {
        try {
            const config = {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              };
            const response = await axios.get(`/jwt/search/${id}`, config);
            const userData = response.data;
            setFormData(userData);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    const handleClickOpen = () => {
        setOpen(true);
        // Reset form data when opening the modal for creating a new user
        setFormData({ name: '', email: '', password: '', roles: "ROLE_USER" });
    };

    const handleClose = () => {
        setOpen(false);
        // Reset editUserId when closing the modal
        setEditUserId(null);
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editUserId !== null) {
                const config = {
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                  };
                // Update user
                const response = await axios.put(`/jwt/update/${editUserId}`, formData,config);
                console.log('User updated successfully:', response.data);
            } else {
                // Create user
                const response = await axios.post('/jwt/add', formData);
                console.log('User created successfully:', response.data);
            }
            // Close the modal and fetch updated user data
            handleClose();
            fetchUsersData();
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='container'>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                {editUserId !== null ? "Edit User" : "Create User"}
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{editUserId !== null ? "Edit User" : "Create User"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Fill in the form below to {editUserId !== null ? "edit" : "create"} the user
                    </DialogContentText>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Name"
                            type="text"
                            fullWidth
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <TextField
                            margin="dense"
                            id="email"
                            label="Email Address"
                            type="email"
                            fullWidth
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {!editUserId &&    <TextField
                            margin="dense"
                            id="password"
                            label="Password"
                            type="password"
                            fullWidth
                            value={formData.password}
                            onChange={handleChange}
                        />}
                     
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button type="submit" color="primary">
                                {editUserId !== null ? "Save" : "Create"}
                            </Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default ModalComp;
