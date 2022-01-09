import { Rating } from "@mui/material";
import React from "react";
import QuestionContainer from "../../common/QuestionContainer";
import { RatingQuestionType } from "../question_types";
import { IconContainer } from "./IconContainer";

interface RatingQuestionProps {
  question: RatingQuestionType;
  onChange: (index: number | null) => void;
  value: number;
}

const RatingQuestion: React.FC<RatingQuestionProps> = ({
  question,
  onChange,
  value,
}) => {
  const _onChange = (e: React.SyntheticEvent, newValue: number | null) => {
    onChange(newValue);
  };

  return (
    <QuestionContainer title={question.question}>
      <Rating
        name="highlight-selected-only"
        defaultValue={value}
        IconContainerComponent={IconContainer}
        highlightSelectedOnly
        size="large"
        onChange={_onChange}
      />
    </QuestionContainer>
  );
};

export default RatingQuestion;
