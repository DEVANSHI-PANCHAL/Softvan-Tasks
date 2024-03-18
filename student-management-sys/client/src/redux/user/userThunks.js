import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginApi, api } from '../../service/api';

export const signIn = createAsyncThunk(
  'user/signIn',
  async ({ username, password }) => {
    try {
        console.log("hi")
      const response = await LoginApi.post('login', { username, password });
      return response;
    } catch (error) {
      throw new Error(error.response.data);
    }
  }
);

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (userData) => {
    try {
      const response = await api.put('/users/me', userData);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  'user/deleteUser',
  async () => {
    try {
      const response = await api.delete('/users/me');
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const signOut = createAsyncThunk(
  'user/signOut',
  async () => {
    try {
      const response = await api.post('/auth/signout');
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);