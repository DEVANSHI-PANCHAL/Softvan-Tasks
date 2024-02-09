import React, { useState } from 'react';
import { IconButton, Zoom, useScrollTrigger } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollTop = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" style={{ position: 'fixed', bottom: 16, right: 16 }}>
        {children}
      </div>
    </Zoom>
  );
};

const BackToTopButton = () => {
  return (
    <ScrollTop>
      <IconButton aria-label="back-to-top" color="primary">
        <KeyboardArrowUpIcon />
      </IconButton>
    </ScrollTop>
  );
};

export default BackToTopButton;
