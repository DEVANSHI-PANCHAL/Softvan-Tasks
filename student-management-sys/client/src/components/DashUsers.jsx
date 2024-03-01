import React, { useEffect, useState } from "react";
import { Table, Button } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { LiaEditSolid } from "react-icons/lia";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { deleteUser, getUsers } from "../service/user.api";
import UserModal from "./UserModal";

const DashUsers = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [userDetails, setUserDetails] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState(null);
  const token = currentUser?.message;
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);

  const fetchUsers = async (dispatch) => {
    try {
      const response = await getUsers(dispatch); 
      setUserDetails(response.user);
    } catch (error) {
      console.error("Error fetching users:", error.message);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await deleteUser(userId);
      fetchUsers(dispatch);
    } catch (error) {
      console.error("Error deleting user:", error.message);
    }
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
    setIsEditing(true);
    setOpenModal(true); 
  };

  const handleCloseModal = () => {
    setEditingUser(null);
    setIsEditing(false);
    setOpenModal(false); 
  };

  useEffect(() => {
    fetchUsers(dispatch); 
  }, [currentUser, token, dispatch]);

  return (
    <>
      <div className="md:flex-grow p-4">
        <div className="flex justify-between items-center mb-4">
          <Button onClick={() => setOpenModal(true)}>
            Create User
          </Button>
          <UserModal
            fetchUsers={fetchUsers}
            isEditing={isEditing}
            editingUser={editingUser}
            openModal={openModal}
            handleCloseModal={handleCloseModal}
          />
        </div>
        <Table hoverable className="shadow-md w-full mx-auto">
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
      </div>
      <ToastContainer />
    </>
  );
};

export default DashUsers;
