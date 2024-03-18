import { requestLogin } from "./common.service";
import { jwtDecode } from "jwt-decode";
// import { updateToken } from '../redux/token/tokenSlice';
import { store } from '../redux/store'; 
import { signInSuccess } from "../redux/user/user1Slice";

let accessToken = null; // Initialize accessToken variable

export const getAccessToken = async (currentUser) => { 
  if (accessToken) {
    // If accessToken is already available, return it immediately
    return accessToken;
  }

  let token = currentUser.data.message;
  console.log("tok", token)
  const decoded = jwtDecode(token);

  const accessTokenExpiration = new Date(decoded.exp * 1000);
  const isAccessTokenExpired = accessTokenExpiration < new Date() || Date.now() + 780000 >= accessTokenExpiration;
  // 300000 = 5 min
  // 600000 = 10 min
  // 780000 = 13 min
  console.log(accessTokenExpiration, isAccessTokenExpired)

  // if (timeUntilExpiration < 15 * 60 * 1000) { 
  if (isAccessTokenExpired) { 
    try {
      const formData = new FormData()
      formData.append("username", "admin")
      formData.append("password", "admin")
      const response = await requestLogin({ url: "login", method: "POST", body: formData });
      console.log("RES", response)
      token = response.data.message;
      store.dispatch(signInSuccess(response));
    } catch (error) {
      console.log("Error refreshing token:", error);
    }
  }

  // Update accessToken variable
  accessToken = token;
  return token;
};
