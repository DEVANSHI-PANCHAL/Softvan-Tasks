import React from 'react';
import { Button } from '@mui/material';

const FormSubmitButton = ({ children, onClick }) => {
  return (
    <Button type="submit" onClick={onClick} variant="contained" color="primary" fullWidth>
      {children}
    </Button>
  );
};

export default FormSubmitButton;