import { Box, Typography } from "@mui/material";
import React from "react";

const Page404: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h1" sx={{ fontSize: "12em" }}>
        ✖
      </Typography>
      <Typography variant="h1"> Page not found</Typography>
      <Typography variant="h6" sx={{ opacity: "0.5", fontWeight: 100, mt: 2 }}>
        The link you have does not exist or has expired{" "}
      </Typography>
    </Box>
  );
};

export default Page404;
