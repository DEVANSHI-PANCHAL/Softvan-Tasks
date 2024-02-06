import { TextField } from '@mui/material'
import React from 'react'

const FormInputText = ( {label, name, type, required, onChange }) => {
  return (
    <div>
        <TextField
      label={label}
      name={name}
      type={type}
      required={required}
      onChange={onChange}
      fullWidth
      margin="dense"
    />
    </div>
  )
}

export default FormInputText
