import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// Function to display success toast
export const successToast = (message) => {
    console.log(message)
  toast.success(message, {
    position: "top-right", // Use POSITION from react-toastify
    autoClose: 3000, // Close after 3 seconds
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

// Function to display error toast
export const errorToast = (message) => {
  toast.error(message, {
    position: POSITION.TOP_RIGHT, // Use POSITION from react-toastify
    autoClose: 5000, // Close after 5 seconds
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

// Function to display warning toast
export const warningToast = (message) => {
  toast.warning(message, {
    position: POSITION.TOP_RIGHT, // Use POSITION from react-toastify
    autoClose: 4000, // Close after 4 seconds
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

// Function to display info toast
export const infoToast = (message) => {
  toast.info(message, {
    position: POSITION.TOP_RIGHT, // Use POSITION from react-toastify
    autoClose: 4000, // Close after 4 seconds
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
