import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import useIsMobile from "../hooks/useIsMobile";

interface SurveyNameProps {
  title: string;
}

const SurveyName: React.FC<SurveyNameProps> = ({ title }) => {
  const isMobile = useIsMobile();

  return (
    <AppBar elevation={0} sx={{ marginBottom: "3rem" }} position="static">
      <Toolbar>
        <Typography
          variant={isMobile ? "h6" : "h4"}
          component="h1"
          textAlign="center"
          width="100%"
        >
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default SurveyName;
