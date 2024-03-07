import { deleteUser, getUsers } from "../service/user.api";
import UserModal from "./UserModal";
import { Button, Table } from "flowbite-react";
import { useEffect, useState, useRef } from "react";
import { successToast } from "./ToastMsgs";
import { useDispatch, useSelector } from "react-redux";
import { LiaEditSolid } from "react-icons/lia";
import { MdDelete } from "react-icons/md";

const PAGE_SIZE = 10;

const DashUsers = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [userDetails, setUserDetails] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState(null);
  const token = currentUser?.message;
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const loaderRef = useRef(null); 

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await getUsers(page, PAGE_SIZE);
      setUserDetails((prevUsers) => [...prevUsers, ...response.user]);
    } catch (error) {
      console.error("Error fetching users:", error.message);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      const res = await deleteUser(userId);
      const updatedUsers = userDetails.filter((user) => user.id !== userId);
      setUserDetails(updatedUsers);
      successToast(res.message);
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
    fetchUsers();
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 1 } 
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, []); 

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
            <div ref={loaderRef}></div> 
          </Table.Body>
        </Table>
        {loading && <div>Loading...</div>}
      </div>
    </>
  );
};

export default DashUsers;
