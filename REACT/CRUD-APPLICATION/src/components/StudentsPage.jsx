import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import DataTable from './DataTable';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  // Other rows...
];

const StudentsPage = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ firstName: '', lastName: '', age: '' });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form data:', formData);
    // Reset form data
    setFormData({ firstName: '', lastName: '', age: '' });
    // Close the modal
    handleClose();
  };

  return (
    <div style={{ height: 400, width: '100%' }}>
      <Button variant="contained" onClick={handleOpen}>Add Student</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Student</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="firstName"
            name="firstName"
            label="First Name"
            type="text"
            fullWidth
            value={formData.firstName}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            id="lastName"
            name="lastName"
            label="Last Name"
            type="text"
            fullWidth
            value={formData.lastName}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            id="age"
            name="age"
            label="Age"
            type="number"
            fullWidth
            value={formData.age}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
      <DataTable/>
    </div>
  );
};

export default StudentsPage;
