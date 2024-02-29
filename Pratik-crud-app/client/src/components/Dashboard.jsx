import { DataGrid } from "@mui/x-data-grid";
import ModalComp from "./Modal";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

const Dashboard = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [users, setUsers] = useState([]);
  const [editUserId, setEditUserId] = useState(null); // State to store the ID of the user being edited
  const token = currentUser?.data;

  const fetchUsersData = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        `http://192.168.10.57:9091/jwt/search`,
        config
      );
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error.message);
    }
  };

  const handleEdit = (id) => {
    // Set the ID of the user being edited
    setEditUserId(id);
  };

  const handleDelete = (id) => {
    // Handle delete action
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    console.log("Delete user with id:", id);
    axios
      .delete(`jwt/delete/${id}`, config)
      .then((response) => {
        // Handle successful deletion
        console.log("User deleted successfully:", response);
        // Call fetchUsersData to refresh the user list
        fetchUsersData();
      })
      .catch((error) => {
        // Handle error
        console.error("Error deleting user:", error);
      });
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 130 },
    { field: "email", headerName: "Email", width: 130 },
    { field: "roles", headerName: "Role", width: 200 },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <>
          <IconButton onClick={() => handleEdit(params.row.id)} color="primary">
            <Edit />
          </IconButton>
          <IconButton
            onClick={() => handleDelete(params.row.id)}
            color="secondary"
          >
            <Delete />
          </IconButton>
        </>
      ),
    },
  ];

  useEffect(() => {
    fetchUsersData();
  }, [token]); // Run effect whenever token changes

  return (
    <div className="dashboard-container">
      <ModalComp
        fetchUsersData={fetchUsersData}
        editUserId={editUserId}
        setEditUserId={setEditUserId}
      />
      <div className="table-container">
        <div className="datagrid-container">
          <DataGrid
            rows={users}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
