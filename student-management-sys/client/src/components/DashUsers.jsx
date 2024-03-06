import React, { useEffect, useState, useCallback, lazy, Suspense } from "react";
import { Button } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { LiaEditSolid } from "react-icons/lia";
import "react-toastify/dist/ReactToastify.css";
import { deleteUser, getUsers } from "../service/user.api";
import { successToast } from "./ToastMsgs";
import { FixedSizeList as List } from "react-window";

const PAGE_SIZE = 10;

const UserModal = lazy(() => import("./UserModal"));

const DashUsers = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [userDetails, setUserDetails] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const token = currentUser?.message;
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getUsers(dispatch, page, PAGE_SIZE);
      setUserDetails((prevUsers) => [...prevUsers, ...response.user]);
    } catch (error) {
      console.error("Error fetching users:", error.message);
    } finally {
      setLoading(false);
    }
  }, [dispatch, page]);

  const handleDeleteUser = useCallback(
    async (userId) => {
      try {
        const res = await deleteUser(userId);
        successToast(res.message);
        setUserDetails((prevUsers) =>
          prevUsers.filter((user) => user.id !== userId)
        );
      } catch (error) {
        console.error("Error deleting user:", error.message);
      }
    },
    []
  );

  const handleEditUser = useCallback(
    (user) => {
      setEditingUser(user);
      setIsEditing(true);
      setOpenModal(true);
    },
    [setEditingUser, setIsEditing, setOpenModal]
  );

  const handleCloseModal = useCallback(() => {
    setEditingUser(null);
    setIsEditing(false);
    setOpenModal(false);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const Row = ({ index, style }) => {
    const user = userDetails[index];
    return (
      <div style={style}>
        <TableRow
          user={user}
          handleDeleteUser={handleDeleteUser}
          handleEditUser={handleEditUser}
        />
      </div>
    );
  };

  return (
    <>
      <div className="md:flex-grow p-4">
        <div className="flex justify-between items-center mb-4">
          <Suspense fallback={<div>Loading...</div>}>
            <Button onClick={() => setOpenModal(true)}>Create User</Button>
            <Suspense fallback={<div>Loading...</div>}>
              <UserModal
                fetchUsers={fetchUsers}
                isEditing={isEditing}
                editingUser={editingUser}
                openModal={openModal}
                handleCloseModal={handleCloseModal}
              />
            </Suspense>
          </Suspense>
        </div>
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <List
              height={400}
              itemCount={userDetails.length}
              itemSize={50}
              width={"100%"}
            >
              {Row}
            </List>
          </tbody>
        </table>
        {loading && <div>Loading...</div>}
      </div>
    </>
  );
};

const TableRow = ({ user, handleDeleteUser, handleEditUser }) => (
  <tr>
    <td>{user.id}</td>
    <td>{user.username}</td>
    <td>{user.role}</td>
    <td>
      <MdDelete
        className="action-icon delete"
        onClick={() => handleDeleteUser(user.id)}
      />
      <LiaEditSolid
        className="action-icon edit"
        onClick={() => handleEditUser(user)}
      />
    </td>
  </tr>
);

export default DashUsers;
