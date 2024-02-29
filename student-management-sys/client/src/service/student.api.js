// user.api.js

import { imageRes, request, requestForm } from "./common.service";

export function createStudent(formData) {
    console.log("FORM DATA",formData)
  return requestForm({ url: "student", method: "POST", body: formData });
}

export const getStudents = async () => {
    try {
      const response = await request({
        url: 'student', 
        method: 'GET'
      });
      return response;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error; 
    }
  };

  export const getStudentImage = async(imageName) => {
    try {
      const response = await imageRes({
        url: `student/download/${imageName}`, 
        method: 'GET'
      });
      return response;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error; 
    }
  }
  
// Function to delete a user
export const deleteStudent = async (userId) => {
    try {
      const response = await request({
        url: `student/${userId}`, 
        method: 'DELETE'
      });
      return response;
    } catch (error) {
      console.error(`Error deleting user with ID ${userId}:`, error);
      throw error;
    }
  };

export const updateStudent = async(userId,formData) => {
  console.log("update user")
  return requestForm({
        url: `student/${userId}`,
        method: 'PUT',
        body: formData
      });
}