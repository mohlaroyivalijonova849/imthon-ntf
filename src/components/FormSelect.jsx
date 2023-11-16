import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

function FormSelect({ label, name, list, defaultValue, size, onSelectChange }) {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  useEffect(() => {
    setSelectedValue(defaultValue);
  }, [defaultValue]);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    onSelectChange(name, newValue); // Notify the parent component
  };

  return (
    <FormControl variant="outlined" fullWidth size={size}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Select
        label={label}
        name={name}
        id={name}
        value={selectedValue}
        className="select select-bordered"
        onChange={handleChange}
      >
        {list.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default FormSelect;
