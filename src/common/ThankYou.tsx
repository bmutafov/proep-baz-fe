import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { FcApproval } from "react-icons/fc";

interface ThankYouProps {
  text?: string;
}

const ThankYou: React.FC<ThankYouProps> = ({ text }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        padding: "5rem 0",
        flexDirection: "column",
      }}
    >
      <Typography variant="h3" textAlign="center">
        Thank you!
      </Typography>
      <FcApproval style={{ width: "20%", height: "20%", margin: "2rem 0" }} />
      <div>{text}</div>
      <div>You may close this page now.</div>
    </Box>
  );
};

export default ThankYou;
