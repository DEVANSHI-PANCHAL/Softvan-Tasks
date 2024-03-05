// user.api.js

import { useSelector } from "react-redux";
import { getAccessToken } from "./Token";
import { request, requestForm } from "./common.service";
import { errorToast, successToast } from "../components/ToastMsgs";


export function createUser(formData) {
    console.log("FORM DATA",formData)
  return request({ url: "register", method: "POST", body: formData })
  .then ((response)=>{
    console.log("response in promise",response)
    return response;
  })
  .catch((error) => {
    console.log("Error creating user:", error);
    throw error;
  });
}



export const getUsers = async (dispatch) => {
  try {
    // const { currentUser } = useSelector((state) => state.user);

    // await getAccessToken(currentUser, dispatch);

    const response = await request({
      url: "getUsers",
      method: "GET",
    });
    return response;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
  
// Function to delete a user
export const deleteUser = async (userId) => {
    try {
      const response = await request({
        url: `deleteUser/${userId}`, 
        method: 'DELETE'
      });
      return response;
    } catch (error) {
      console.error(`Error deleting user with ID ${userId}:`, error);
      throw error;
    }
  };

export const updateUser = async(userId,formData) => {
  console.log("update user")
  return request({
        url: `updateUser/${userId}`,
        method: 'PUT',
        body: formData
      });
}

