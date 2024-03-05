import React, { useEffect, useState } from 'react';
import { LiaEditSolid } from 'react-icons/lia';
import { MdDelete } from 'react-icons/md';
import StudentModal from './StudentModal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Table } from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteStudent, getStudentImage, getStudents } from "../service/student.api";
// import { updateToken } from '../redux/token/tokenSlice';


const DashStudents = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [studentDetails, setStudentDetails] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
   const [openModal, setOpenModal] = useState(false);
  // const [imageFile, setImageFile] = useState(null);
  const dispatch = useDispatch();
  const token = currentUser?.message;

  const convertImageToBase64 = (imageBlob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(imageBlob);
    });
  };
  const fetchStudents = async(dispatch) => {
    console.log("dispatch",dispatch)
    try {
      const response = await getStudents(dispatch);
      const studentsWithImages = await Promise.all(
        response.student.map(async (student) => {
          const imageResponse = await getStudentImage(student.fileName)
          if (imageResponse instanceof Blob) {
            const base64Image = await convertImageToBase64(imageResponse);
            return { ...student, base64Image };
          } else {
            console.error("Invalid image data received:", imageResponse.data);
            return { ...student, base64Image: null };
          }
        })
      );
      setStudentDetails(studentsWithImages);
    } catch (error) {
      if (error.response?.status === 403) {
        // Token expired, refresh token
        // await dispatch(updateToken());
        // Retry fetching students
        await fetchStudents();
      } else {
        console.error("Error fetching students:", error.message);
      }
    }
  }

  useEffect(() => {
    fetchStudents(dispatch);
  }, [currentUser,token, dispatch]);

  const handleCreateStudent = () => {
    setIsEditing(false);
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setEditingStudent(null);
    setIsEditing(false);
    setOpenModal(false); 
  };
  const handleEditStudent = (student) => {
    setFormData(student);
    setIsEditing(true);
    setOpenModal(true);
    setEditingStudent(student);
  };
  const handleDeleteStudent = async(id) => {
    console.log("del", id)
    try {
      const res = await deleteStudent(id);
      console.log("res", res)
      if (res.message) {
        fetchStudents();
        // toast.success(res.message);
      } else {
        console.error("Failed to delete student");
        // toast.error(res.message);
      }
    } catch (error) {
      // toast.error("Failed to delete student");          
    }
  }
  return (
    <>
      <div className="md:flex-grow p-4">
        <div className="table-auto overflow-x md:mx-auto p-3">
          <Button onClick={()=>setOpenModal(true)}>Create Student</Button>
          <StudentModal
            fetchStudents={fetchStudents}
            isEditing={isEditing}
            editingStudent={editingStudent}
            openModal={openModal}
            handleCloseModal={handleCloseModal}
          />

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
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default DashStudents;
