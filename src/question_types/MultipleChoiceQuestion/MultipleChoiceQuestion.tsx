import React from "react";
import QuestionContainer from "../../common/QuestionContainer";
import MultipleChoiceList from "./MultipleChoiceList";
import { MultipleChoiceQuestionType } from "../question_types";

interface MultipleChoiceProps {
  question: MultipleChoiceQuestionType;
  value: number | number[] | null;
  onSelect: (index: number) => void;
}

const MultipleChoiceQuestion: React.FC<MultipleChoiceProps> = ({
  question,
  value,
  onSelect,
}) => {
  return (
    <QuestionContainer title={question.question}>
      <MultipleChoiceList
        options={question.options}
        onSelect={onSelect}
        selected={value}
      />
    </QuestionContainer>
  );
};

export default MultipleChoiceQuestion;
