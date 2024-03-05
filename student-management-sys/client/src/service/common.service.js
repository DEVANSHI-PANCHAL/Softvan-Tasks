import axios from "axios";
import { getAccessToken } from "./Token";
import { store } from "../redux/store";

const apiBaseURL = "http://192.168.10.60:9090/";

export const api = axios.create({ baseURL: apiBaseURL });

api.interceptors.request.use(async (config) => {
  const accessToken = await getAccessToken(store.getState().user.currentUser);
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

api.interceptors.response.use(
  (response) => {
    if (response) {
      return response.data;
    }
  },
  async (error) => {
    if (error.response?.status === 403) {
      // Redirect or handle unauthorized access
      window.location.href = "/";
    }
    return Promise.reject(error); 
  }
);

const LoginApi = axios.create({
  baseURL: "http://192.168.10.60:9090/",
});

const requestConfig = (options) => {
  const config = {
    headers: { "Content-Type": "application/json" },
    url: options.url,
    method: options.method,
  };
  if (options.headers) {
    config.headers = options.headers;
  }
  if (options.body) {
    config.data = options.body;
  }
  if (options.params) {
    config.params = options.params;
  }
  if (options.cancelToken) {
    config.cancelToken = options.cancelToken;
  }
  return config;
};

const requestConfigForm = (options) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    url: options.url,
    method: options.method,
  };

  if (options.body) {
    config.data = options.body;
  }
  if (options.params) {
    config.params = options.params;
  }
  if (options.cancelToken) {
    config.cancelToken = options.cancelToken;
  }
  return config;
};

const imageReqConfig = (options) => {
  const config = {
    headers: { "Content-Type": "multipart/form-data" },
    url: options.url,
    method: options.method,
    responseType: "blob",
  };
  return config;
};

export const request = (options) => {
  console.log("in request");
  const config = requestConfig(options);
  console.log("configg", config);
  return api.request(config);
};

export const requestLogin = (options) => {
  const config = requestConfig(options);
  return LoginApi.request(config);
};

export const requestForm = (options) => {
  const config = requestConfigForm(options);
  return api.request(config);
};

export const imageRes = (options) => {
  const config = imageReqConfig(options);
  return api.request(config);
};
