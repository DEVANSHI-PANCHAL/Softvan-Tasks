// import { Alert, Button, Modal, TextInput } from 'flowbite-react';
// import { useSelector } from 'react-redux';
// import {
//   updateStart,
//   updateSuccess,
//   updateFailure,
//   deleteUserStart,
//   deleteUserSuccess,
//   deleteUserFailure,
//   signoutSuccess,
// } from '../redux/user/userSlice';
// import { useDispatch } from 'react-redux';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { HiOutlineExclamationCircle } from 'react-icons/hi';

// export default function DashProfile() {
//   const { currentUser, error } = useSelector((state) => state.user);
//   const [updateUserSuccess, setUpdateUserSuccess] = useState(null);
//   const [updateUserError, setUpdateUserError] = useState(null);
//   const [formData, setFormData] = useState({});
//   const [showModal, setShowModal] = useState(false);

//   const dispatch = useDispatch();

//   const ImageURL= "https://www.shutterstock.com/image-vector/user-icon-trendy-flat-style-600nw-418179856.jpg"
//   useEffect(() => {
//     // Initialize formData with user details when component mounts
//     if (currentUser) {
//         console.log("currentUser", currentUser.data.user
//         )
//       setFormData({
//         username: currentUser.data.user.username,
//         password: '', // Set an empty password field initially
//       });
//     }
//   }, [currentUser]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   setUpdateUserError(null);
//   //   setUpdateUserSuccess(null);
//   //   if (Object.keys(formData).length === 0) {
//   //     setUpdateUserError('No changes made');
//   //     return;
//   //   }

//   //   try {
//   //     dispatch(updateStart());
//   //     const _id = currentUser.data.user.id
//   //     const res = await axios.put(`/updateUser/${_id}`, formData, {
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //       },
//   //     });

//   //     if (!res.data.success) {
//   //       dispatch(updateFailure(res.data.message));
//   //       setUpdateUserError(res.data.message);
//   //     } else {
//   //       dispatch(updateSuccess(res.data));
//   //       setUpdateUserSuccess("User's profile updated successfully");
//   //     }
//   //   } catch (error) {
//   //     dispatch(updateFailure(error.message));
//   //     setUpdateUserError(error.message);
//   //   }
//   // };

//   // const handleDeleteUser = async () => {
//   //   setShowModal(false);
//   //   try {
//   //     dispatch(deleteUserStart());
//   //     const res = await axios.delete(`/deleteUser/${currentUser._id}`);
//   //     if (!res.data.success) {
//   //       dispatch(deleteUserFailure(res.data.message));
//   //     } else {
//   //       dispatch(deleteUserSuccess(res.data));
//   //     }
//   //   } catch (error) {
//   //     dispatch(deleteUserFailure(error.message));
//   //   }
//   // };

//   const handleSignout = () => {
//     dispatch(signoutSuccess());
//   };

//   return (
//     <div className='max-w-lg mx-auto p-3 w-full'>
//       <h1 className='my-7 text-center font-semibold text-3xl'>Profile</h1>
//       <form className='flex flex-col gap-4'>
//         <div className='w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full'>
//           <img
//             src={ImageURL}
//             alt='user'
//             className='rounded-full w-full h-full object-cover border-8 border-[lightgray]'
//           />
//         </div>
//         <TextInput
//           type='text'
//           id='username'
//           placeholder='username'
//           value={formData.username || ''}
//           onChange={handleChange}
//         />
//         {/* <TextInput
//           type='password'
//           id='password'
//           placeholder='password'
//           value={formData.password || ''}
//           onChange={handleChange}
//         />
//         <Button type='submit' gradientDuoTone='purpleToBlue' outline>
//           Update
//         </Button> */}
//       </form>
//       <div className="text-red-500 flex justify-between mt-5">
//         {/* <span onClick={() => setShowModal(true)} className='cursor-pointer'>
//           Delete Account
//         </span> */}
//         <span onClick={handleSignout} className='cursor-pointer'>
//           Sign Out
//         </span>
//       </div>
//       {updateUserSuccess && (
//         <Alert color='success' className='mt-5'>
//           {updateUserSuccess}
//         </Alert>
//       )}
//       {updateUserError && (
//         <Alert color='failure' className='mt-5'>
//           {updateUserError}
//         </Alert>
//       )}
//       {error && (
//         <Alert color='failure' className='mt-5'>
//           {error}
//         </Alert>
//       )}
//       <Modal
//         show={showModal}
//         onClose={() => setShowModal(false)}
//         popup
//         size='md'
//       >
//         <Modal.Header />
//         <Modal.Body>
//           <div className='text-center'>
//             <HiOutlineExclamationCircle className='h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto' />
//             <h3 className='mb-5 text-lg text-gray-500 dark:text-gray-400'>
//               Are you sure you want to delete your account?
//             </h3>
//             <div className='flex justify-center gap-4'>
//               <Button color='failure' onClick={handleDeleteUser}>
//                 Yes, I'm sure
//               </Button>
//               <Button color='gray' onClick={() => setShowModal(false)}>
//                 No, cancel
//               </Button>
//             </div>
//           </div>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// }

import React from 'react'

const DashProfile = () => {
  return (
    <div>
      
    </div>
  )
}

export default DashProfile

