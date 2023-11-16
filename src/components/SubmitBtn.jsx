import React from "react";
import { Button, CircularProgress } from "@mui/material";
import { useNavigation } from "react-router-dom";

function SubmitBtn({ text }) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      fullWidth
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <CircularProgress size={24} sx={{ marginRight: 1 }} />
          Sending...
        </>
      ) : (
        text || "Submit"
      )}
    </Button>
  );
}

export default SubmitBtn;
