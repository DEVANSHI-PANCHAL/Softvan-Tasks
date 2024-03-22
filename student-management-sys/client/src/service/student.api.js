// student.api.js

import { imageRes, request, requestForm } from "./common.service";

export function createStudentApi(formData) {
    console.log("FORM DATA",formData)
  return requestForm({ url: "student", method: "POST", body: formData });
}

export const getStudentsApi = async () => {
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

  export const getStudentImageApi = async(imageName) => {
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
export const deleteStudentApi = async (userId) => {
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

export const updateStudentApi = async(userId,formData) => {
  console.log("update user")
  return requestForm({
        url: `student/${userId}`,
        method: 'PUT',
        body: formData
      });
}