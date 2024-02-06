import React from 'react';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';

const FormSelect = ({ label, name, options, required, onChange }) => {
  return (
    <FormControl fullWidth margin="dense">
      <InputLabel>{label}</InputLabel>
      <Select
        label={label}
        name={name}
        required={required}
        onChange={onChange}
      >
        <MenuItem value="">Select an option</MenuItem>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
        ))}
      </Select>
      <FormHelperText>Required</FormHelperText>
    </FormControl>
  );
};

export default FormSelect;