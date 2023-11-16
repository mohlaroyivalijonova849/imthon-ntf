import React from "react";
import { Typography, Divider } from "@mui/material";

function SectionTitle({ text }) {
  return (
    <div>
      <Typography
        variant="h4"
        className="font-medium tracking-wider capitalize"
      >
        {text}
      </Typography>
      <Divider sx={{ mt: 1, mb: 3 }} />
    </div>
  );
}

export default SectionTitle;
