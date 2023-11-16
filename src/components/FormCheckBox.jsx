import React from "react";
import { FormControlLabel, Checkbox } from "@mui/material";

function FormCheckBox({ name, label, defaultValue, size }) {
  return (
    <FormControlLabel
      control={<Checkbox defaultChecked={defaultValue} />}
      label={label}
    />
  );
}

export default FormCheckBox;
