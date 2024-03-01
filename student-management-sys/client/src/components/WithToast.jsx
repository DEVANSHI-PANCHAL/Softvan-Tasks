import React from 'react';
import { toast } from 'react-toastify';

const WithToast = (WrappedComponent) => {
  const showToast = (message, type) => {
    if (type === 'success') {
         console.log("here")
      toast.success(message);
    } else if (type === 'error') {
      toast.error(message);
    } else {
      toast(message);
    }
  };

  return (props) => <WrappedComponent {...props} showToast={showToast} />;
};

export default WithToast;
