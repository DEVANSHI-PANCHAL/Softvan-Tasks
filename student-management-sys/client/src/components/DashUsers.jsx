import { deleteUser, getUsers } from "../service/user.api";
import UserModal from "./UserModal";
import { Button, Table } from "flowbite-react";
import { useEffect, useState, useRef } from "react";
import { successToast } from "./ToastMsgs";
import {  useDispatch, useSelector } from "react-redux";
import { LiaEditSolid } from "react-icons/lia";
import { MdDelete } from "react-icons/md";
import { useFetchUsers, useIntersectionObserver } from "../hooks/useFetchUsers";

const DashUsers = () => {
  // const { currentUser } = useSelector((state) => state.user);
  const [userDetails, setUserDetails] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const loaderRef = useRef(null);
  const PAGE_SIZE = 10;



  useFetchUsers(page, setPage, userDetails, setUserDetails, setLoading);
  useIntersectionObserver(loaderRef, setPage);

 
 
  const handleDeleteUser = async (userId) => {
    try {
      await deleteUser(userId);
      setUserDetails((prevUsers) =>
        prevUsers.filter((user) => user.id !== userId)
      );
      successToast("User deleted successfully");
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
    setOpenModal(false); // Close the modal
  };

  const handleOpenModal = () => {
    setOpenModal(true); // Open the modal
  };

  return (
    <>
      <div className="md:flex-grow p-4">
        <div className="flex justify-between items-center mb-4">
          <Button onClick={handleOpenModal}>Create User</Button>
          {openModal && (
            <UserModal
              isEditing={isEditing}
              editingUser={editingUser}
              handleCloseModal={handleCloseModal}
              handleOpenModal={handleOpenModal}
              openModal={openModal}
              useFetchUsers={useFetchUsers}
              page={page}
              setPage={setPage}
              userDetails={userDetails}
              setUserDetails={setUserDetails}
              setLoading={setLoading}
              // fetchUsersData={fetchUsersData}
              // initialValues= {initialValues}
            />
          )}
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
            <div ref={loaderRef}></div>
          </Table.Body>
        </Table>
        {loading && <div>Loading...</div>}
      </div>
    </>
  );
};

export default DashUsers;
