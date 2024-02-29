import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  Button,
  TextField,
  Box,
  Typography,
  Grid,
  Snackbar,
  Alert,
} from '@mui/material';
import axios from 'axios';
import { signInFailure, signInStart, signInSuccess } from '../redux/user/userSlice';

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.userName || !formData.password) {
      return dispatch(signInFailure('Please fill all the fields'));
    }
    try {
      dispatch(signInStart());
      const res = await axios.post('/user/authenticate', formData);
      const token = res.data;
      localStorage.setItem('token', token);
      if (res.status === 200) {
        dispatch(signInSuccess(res));
        navigate('/dashboard');
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 400,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        mt: 8,
      }}
    >
      <Typography variant="h5" component="h1" gutterBottom sx={{ color: '#000000' }}>
        Sign In
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="userName"
          label="Username"
          name="userName"
          autoComplete="username"
          autoFocus
          onChange={handleChange}
          sx={{ '& label.Mui-focused': { color: '#000000' }, '& .MuiInput-underline:after': { borderBottomColor: '#000000' } }}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={handleChange}
          sx={{ '& label.Mui-focused': { color: '#000000' }, '& .MuiInput-underline:after': { borderBottomColor: '#000000' } }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, backgroundColor: '#000000', color: '#ffffff' }}
          disabled={loading}
        >
          {loading ? (
            <>
              {/* <Spinner size="sm" /> */}
              <span className="pl-3">Loading...</span>
            </>
          ) : (
            'Sign In'
          )}
        </Button>
      </Box>
  
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%', backgroundColor: '#000000', color: '#ffffff' }}>
          {errorMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SignIn;
