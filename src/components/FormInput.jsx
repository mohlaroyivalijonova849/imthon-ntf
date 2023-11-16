import React from "react";
import { TextField } from "@mui/material";

function FormInput({ label, name, type, defaultValue, size }) {
  return (
    <TextField
      label={label}
      name={name}
      type={type}
      defaultValue={defaultValue}
      variant="outlined"
      fullWidth
      size={size}
      margin="normal"
    />
  );
}

export default FormInput;
