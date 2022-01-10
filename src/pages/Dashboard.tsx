import { Box } from "@mui/material";
import React from "react";

const Dashboard: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <iframe
        title="PowerBI - live_data - Numerical Data"
        src="https://app.powerbi.com/reportEmbed?reportId=5881575d-ac80-4c58-b3b8-0410eb93c16f&autoAuth=true&ctid=c66b6765-b794-4a2b-84ed-845b341c086a&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLW5vcnRoLWV1cm9wZS1mLXByaW1hcnktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D"
        frameBorder={0}
        allowFullScreen
        style={{ width: "100%", height: "100%" }}
      ></iframe>
    </Box>
  );
};

export default Dashboard;
