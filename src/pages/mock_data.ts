import {
  BooleanQuestionType,
  FreeTextQuestionType,
  QuestionType,
  QuestionValue,
  RatingQuestionType,
} from "./../question_types/question_types";
import { MultipleChoiceQuestionType } from "../question_types/question_types";

const multipleChoiceQuestion: MultipleChoiceQuestionType = {
  question: "This is a random mockup question, is this clear?",
  options: ["Yes, it is 👍", "No 👎", "What 🤔"],
};

const booleanQuestion: BooleanQuestionType = {
  question: "May be this is a boolean type of question, do you agree?",
  options: {
    true: "Yes",
    false: "No",
  },
};

const freeTextQuestion: FreeTextQuestionType = {
  question: "Can you explain in some thousands of paragraphs why?",
};

const ratingQuestion: RatingQuestionType = {
  question: "How satisfied are you with the sun?",
};

export const mockData: QuestionValue[] = [
  {
    type: QuestionType.BOOLEAN,
    value: booleanQuestion,
    answer: false,
  },
  {
    type: QuestionType.BOOLEAN,
    value: booleanQuestion,
    answer: false,
  },
  {
    type: QuestionType.FREE_TEXT,
    value: freeTextQuestion,
    answer: "",
  },
  {
    type: QuestionType.MULTIPLE,
    value: multipleChoiceQuestion,
    answer: null,
  },
  {
    type: QuestionType.RATING,
    value: ratingQuestion,
    answer: null,
  },
  {
    type: QuestionType.RATING,
    value: ratingQuestion,
    answer: null,
  },
];
