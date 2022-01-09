import { TextField } from "@mui/material";
import React, { useState } from "react";
import QuestionContainer from "../../common/QuestionContainer";
import { NumberQuestionType } from "../question_types";

interface NumberQuestionProps {
  question: NumberQuestionType;
  onChange: (text: number | null) => void;
  value: string;
}

const NumberQuestion: React.FC<NumberQuestionProps> = ({
  question,
  onChange,
  value,
}) => {
  const [hasError, setHasError] = useState(false);
  const [errorText, setErrorText] = useState("");

  const handleChange = (value: string) => {
    const _intValue = parseInt(value);

    if (!value) {
      onChange(null);
      return;
    }

    if (value && isNaN(_intValue)) {
      setHasError(true);
      setErrorText("Please enter a number");
      onChange(null);
      return;
    }

    if (question.minValue && question.maxValue) {
      // satisfying typescript with double-if
      if (_intValue < question.minValue || _intValue > question.maxValue) {
        setHasError(true);
        setErrorText(
          `Please enter a number between the range of ${question.minValue} to ${question.maxValue}`
        );
        onChange(null);
        return;
      }
    }

    setHasError(false);
    onChange(_intValue);
  };

  return (
    <QuestionContainer title={question.question}>
      <TextField
        id="outlined-adornment-weight"
        defaultValue={value}
        onChange={(e) => handleChange(e.target.value)}
        aria-describedby="outlined-weight-helper-text"
        placeholder="Number input"
        type="number"
        inputProps={{ min: "0", max: "10", step: "0.01" }}
        error={hasError}
        helperText={hasError && errorText}
        sx={{ width: "200px" }}
      />
    </QuestionContainer>
  );
};

export default NumberQuestion;
