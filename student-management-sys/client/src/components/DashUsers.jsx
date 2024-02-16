import { Button, Table, Modal, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import CreateUser from "./CreateUser";
import {
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
} from "../redux/user/userSlice";
import { MdDelete } from "react-icons/md";
import { LiaEditSolid } from "react-icons/lia";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DashUsers = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [userDetails, setUserDetails] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState(null);
  const token = currentUser?.data?.message;
  const dispatch = useDispatch();

  const fetchUsers = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(`/getUsers`, config);
      setUserDetails(response.data.user);
    } catch (error) {
      console.error("Error fetching users:", error.message);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      dispatch(deleteUserStart());
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      await axios.delete(`/deleteUser/${userId}`, config);
      fetchUsers();
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
    setIsEditing(true);
  };

  const handleUpdateUser = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.put(`/updateUser/${editingUser.id}`, editingUser, config);
      if (response.data && response.data.message) {
        fetchUsers();
        setIsEditing(false);
        toast.success(response.data.message, {
          // position: toast.POSITION.TOP_CENTER,
          autoClose: 2000, 
        });
      } else {
        setError('Failed to update user');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [currentUser, token]);

  return (
    <div className="table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500">
      <CreateUser fetchUsers={fetchUsers} />
      <Table hoverable className="shadow-md">
        <Table.Head>
          <Table.HeadCell>ID</Table.HeadCell>
          <Table.HeadCell>Username</Table.HeadCell>
          <Table.HeadCell>Role</Table.HeadCell>
          <Table.HeadCell>Delete</Table.HeadCell>
          <Table.HeadCell>Edit</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {userDetails.map((user) => (
            <Table.Row
              key={user._id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell>{user.id}</Table.Cell>
              <Table.Cell>{user.username}</Table.Cell>
              <Table.Cell>{user.role}</Table.Cell>
              <Table.Cell>
                <MdDelete
                  className="font-medium text-red-500 hover:underline cursor-pointer"
                  onClick={() => handleDeleteUser(user.id)}
                />
              </Table.Cell>
              <Table.Cell>
                <LiaEditSolid
                  className="text-teal-500 hover:underline cursor-pointer"
                  onClick={() => handleEditUser(user)}
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      {isEditing && (
        <Modal show={isEditing} onClose={() => setIsEditing(false)}>
          <Modal.Header>Edit User</Modal.Header>
          <Modal.Body>
            <TextInput
              name="username"
              value={editingUser.username}
              onChange={(e) => setEditingUser({ ...editingUser, username: e.target.value })}
              placeholder="Username"
            />
            <TextInput
              name="role"
              value={editingUser.role}
              onChange={(e) => setEditingUser({ ...editingUser, role: e.target.value })}
              placeholder="Role"
            />
            {error && <p className="text-red-500">{error}</p>}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleUpdateUser}>Save</Button>
            <Button onClick={() => setIsEditing(false)}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      )}
      <ToastContainer />
    </div>
  );
};

export default DashUsers;
