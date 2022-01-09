import { TextField } from "@mui/material";
import React, { useRef } from "react";
import QuestionContainer from "../../common/QuestionContainer";
import { FreeTextQuestionType } from "../question_types";

interface FreeTextProps {
  question: FreeTextQuestionType;
  onChange: (text: string) => void;
  value: string;
}

const FreeText: React.FC<FreeTextProps> = ({ question, onChange, value }) => {
  const textAreaRef = useRef<HTMLInputElement>(null);

  const _onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <QuestionContainer title={question.question}>
      <TextField
        defaultValue={value}
        ref={textAreaRef}
        id="free-text-question-answer"
        label="Your answer here"
        multiline
        rows={10}
        variant="outlined"
        sx={{
          width: "100%",
        }}
        onChange={_onChange}
      />
    </QuestionContainer>
  );
};

export default FreeText;
