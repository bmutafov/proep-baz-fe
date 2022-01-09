import { Box, Zoom } from "@mui/material";
import React from "react";
import QuestionTitle from "./QuestionTitle";

interface QuestionContainerProps {
  title: string;
}

const QuestionContainer: React.FC<QuestionContainerProps> = ({
  children,
  title,
}) => {
  return (
    <Box>
      <QuestionTitle title={title} />

      <Zoom in>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0 2rem 1rem 2rem",
          }}
        >
          {children}
        </Box>
      </Zoom>
    </Box>
  );
};

export default QuestionContainer;
