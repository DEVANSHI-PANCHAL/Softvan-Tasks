import { Modal, Button, TextInput } from "flowbite-react";
import { useState } from "react";
import axios from "axios";

const EditUserModal = ({ user, fetchUsers, onClose }) => {
  console.log(user)
  const [formData, setFormData] = useState({
    // username: user.username || "",
    // role: user.role || "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.put(`/updateUser/${user.id}`, formData);
      console.log("User updated:", response.data);
      fetchUsers();
      onClose(); // Close the modal after successful update
    } catch (error) {
      console.error("Error updating user:", error.message);
    }
    setLoading(false);
  };

  return (
    <Modal show={!!user} onClose={onClose}>
      <Modal.Header>Edit User</Modal.Header>
      <Modal.Body>
        <div className="mb-4">
          <TextInput
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            required
          />
        </div>
        <div className="mb-4">
          <TextInput
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="Role"
            required
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSubmit} disabled={loading}>
          {loading ? "Updating..." : "Update"}
        </Button>
        <Button onClick={onClose}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditUserModal;
