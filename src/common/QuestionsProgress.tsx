import { Box } from "@mui/material";
import React from "react";

interface QuestionsProgressProps {
  currentQuestion: number;
  totalQuestions: number;
  isSubmitted?: boolean;
}

const QuestionsProgress: React.FC<QuestionsProgressProps> = ({
  currentQuestion,
  totalQuestions,
  isSubmitted = false,
}) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "primary.light",
          color: "inherit",
          padding: "0.2rem 1rem 0.2rem 1rem",
          borderRadius: "5px",
          fontSize: "0.8rem",
          lineHeight: "0.8rem",
          alignItems: "center",
        }}
      >
        {isSubmitted
          ? `Final Step`
          : `Question ${currentQuestion + 1} out of ${totalQuestions}`}
      </Box>
    </>
  );
};

export default QuestionsProgress;
