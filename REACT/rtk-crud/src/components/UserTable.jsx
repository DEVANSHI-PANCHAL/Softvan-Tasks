// components/UserTable.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from '../redux/userSlice'; // Import the deleteUser action creator from your user slice
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';
import { BsPencilSquare, BsTrash } from 'react-icons/bs';

const UserTable = () => {
  const users = useSelector(state => state.user.users); // Retrieve user data from Redux store
  const dispatch = useDispatch(); // Get dispatch function

  const handleDeleteUser = (id) => {
    // Dispatch the deleteUser action with the user ID as payload
    dispatch(deleteUser(id));
  };

  // Your pagination logic...
  // Ensure you update the user data based on the current page and itemsPerPage

  return (
    <div>
      <Table striped bordered hover>
        <thead className="table-heading">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th className="actions-column">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName} {user.lastName}</td>
              <td>{user.email}</td>
              <td className="actions-column">
                <Button variant="primary" size="sm" className="me-2">
                  <BsPencilSquare /> Edit
                </Button>
                <Button variant="danger" size="sm" onClick={() => handleDeleteUser(user.id)}>
                  <BsTrash /> Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* Pagination component here */}
    </div>
  );
};

export default UserTable;
