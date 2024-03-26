import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const jsonServerApi = createApi({
  reducerPath: 'jsonServerApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5173' }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users',
    }),
    getUserById: builder.query({
      query: (id) => `/users/${id}`,
    }),
    addUser: builder.mutation({
      query: (user) => ({
        url: '/users',
        method: 'POST',
        body: user,
      }),
    }),
    updateUser: builder.mutation({
      query: (user) => ({
        url: `/users/${user.id}`,
        method: 'PUT',
        body: user,
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = jsonServerApi;