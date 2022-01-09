import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import React from "react";
import QuestionContainer from "../../common/QuestionContainer";
import { BooleanQuestionType } from "../question_types";

interface BooleanQuestionProps {
  value: boolean;
  question: BooleanQuestionType;
  onAnswer: (value: boolean) => void;
}

const BooleanQuestion: React.FC<BooleanQuestionProps> = ({
  question,
  onAnswer,
  value,
}) => {
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newValue: boolean | null
  ) => {
    onAnswer(!!newValue);
  };

  return (
    <QuestionContainer title={question.question}>
      <ToggleButtonGroup
        value={value}
        onChange={handleChange}
        exclusive
        aria-label="boolean question answer"
        color="secondary"
      >
        <ToggleButton
          value={true}
          sx={{
            minWidth: "150px",
            maxWidth: "300px",
          }}
        >
          {question.options?.true ?? "True"}
        </ToggleButton>
        <ToggleButton
          value={false}
          sx={{
            minWidth: "150px",
            maxWidth: "300px",
          }}
        >
          {question.options?.false ?? "False"}
        </ToggleButton>
      </ToggleButtonGroup>
    </QuestionContainer>
  );
};

export default BooleanQuestion;
