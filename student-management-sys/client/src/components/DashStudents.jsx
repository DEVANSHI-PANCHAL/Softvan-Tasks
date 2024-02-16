import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, FileInput, Label, Modal, Table, TextInput } from "flowbite-react";
import { LiaEditSolid } from "react-icons/lia";
import { MdDelete } from "react-icons/md";
import CreateStudent from "./CreateStudent";

const DashStudents = () => {
  const { currentUser } = useSelector((state) => state.user);
  const token = currentUser?.data?.message;
  const dispatch = useDispatch();
  const [studentDetails, setStudentDetails] = useState([]);
  const [formData, setFormData] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [imageFile, setImageFile] = useState(null);

  const fetchStudents = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(`/student`, config);
      const studentsWithImages = await Promise.all(
        response.data.student.map(async (student) => {
          const imageResponse = await axios.get(`http://192.168.10.60:9090/student/download/${student.fileName}`, {
            ...config,
            responseType: 'blob' // Ensure the response type is set to 'blob'
          });

          // Check if the image data is available and it's a Blob object
          if (imageResponse.data instanceof Blob) {
            // Convert image to base64 string
            const base64Image = await convertImageToBase64(imageResponse.data);
            return { ...student, base64Image };
          } else {
            console.error("Invalid image data received:", imageResponse.data);
            return { ...student, base64Image: null };
          }
        })
      );
      setStudentDetails(studentsWithImages);
    } catch (error) {
      console.error("Error fetching users:", error.message);
    }
  };

  const convertImageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const handleEditStudent = (student) => {
    setFormData(student);
    setOpenModal(true);
    handleEditSubmit(student.id);
  };

  const handleEditSubmit = async (id) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  
      const formDataWithImage = new FormData();
      formDataWithImage.append('file', imageFile);
      for (const key in formData) {
        formDataWithImage.append(key, formData[key]);
      }
      
      const res = await axios.put(`/student/${formData.id}`, formDataWithImage, config);
      console.log(res);
      console.log("updated");
      setOpenModal(false);
      setFormData({}); 
      fetchStudents();
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    setImageFile(event.target.files[0]);
  };

  const handleDeleteStudent = async (id) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  
      const res = await axios.delete(`/student/${id}`, config);
      console.log(res);
      console.log("deleted");
      fetchStudents();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, [currentUser, token]);

  return (
    <div className="table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500">
      <CreateStudent fetchStudents={fetchStudents} />

      <div className="w-full max-w-6xl mx-auto min-h-[300px]">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Roll No</Table.HeadCell>
            <Table.HeadCell>First Name</Table.HeadCell>
            <Table.HeadCell>Last Name</Table.HeadCell>
            <Table.HeadCell>Image</Table.HeadCell>
            <Table.HeadCell>Age</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>Contact</Table.HeadCell>
            <Table.HeadCell>Actions</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {studentDetails.map((student) => (
              <Table.Row
                key={student.id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell>{student.id}</Table.Cell>
                <Table.Cell>{student.firstname}</Table.Cell>
                <Table.Cell>{student.lastname}</Table.Cell>
                <Table.Cell>
                  {student.base64Image && (
                    <img src={student.base64Image} alt={`${student.firstname} ${student.lastname}`} className="h-10 w-10 rounded-full" />
                  )}
                </Table.Cell>
                <Table.Cell>{student.age}</Table.Cell>
                <Table.Cell>{student.email}</Table.Cell>
                <Table.Cell>{student.phonenumber}</Table.Cell>
                <Table.Cell>
                  <MdDelete
                    className="font-medium text-red-500 hover:underline cursor-pointer"
                    onClick={() => handleDeleteStudent(student.id)}
                  />
                </Table.Cell>
                <Table.Cell>
                  <LiaEditSolid
                    className="text-teal-500 hover:underline cursor-pointer"
                    onClick={() => handleEditStudent(student)}
                  />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>

      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Edit Student</Modal.Header>
        <Modal.Body>
          <TextInput
            type="text"
            placeholder="First Name"
            value={formData.firstname}
            onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
          />
          <TextInput
            type="text"
            placeholder="Last Name"
            value={formData.lastname}
            onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
          />
          <TextInput
            type="number"
            placeholder="Age"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          />
          <TextInput
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <TextInput
            type="tel"
            placeholder="Contact Number"
            value={formData.phonenumber}
            onChange={(e) => setFormData({ ...formData, phonenumber: e.target.value })}
          />
          <Label htmlFor='image'>Select Image</Label>
          <FileInput
            id='image'
            accept='image/*'
            onChange={handleChange}
          />
          
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleEditSubmit}>Save</Button>
          <Button onClick={() => setOpenModal(false)}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DashStudents;
