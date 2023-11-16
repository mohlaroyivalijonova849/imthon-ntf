import React from "react";
import { Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";

function ErrorElement() {
  const error = useRouteError();
  return (
    <Typography variant="h4" className="font-bold">
      There was an error...
    </Typography>
  );
}

export default ErrorElement;
