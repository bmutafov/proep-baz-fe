import { Typography, Zoom } from "@mui/material";
import React from "react";
import useIsMobile from "../hooks/useIsMobile";

interface QuestionTitleProps {
  title: string;
}

const QuestionTitle: React.FC<QuestionTitleProps> = ({ title }) => {
  const isMobile = useIsMobile();
  const variant = isMobile ? "h6" : "h4";

  return (
    <Zoom in>
      <Typography
        variant={variant}
        gutterBottom
        component="div"
        sx={{ padding: "2rem 2rem 1rem 2rem" }}
        textAlign="center"
      >
        {title}
      </Typography>
    </Zoom>
  );
};

export default QuestionTitle;
