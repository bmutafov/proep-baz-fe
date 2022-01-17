import {
  FreeTextQuestionType,
  QuestionType,
  QuestionValue,
} from "./../../question_types/question_types";

export interface IQuestion {
  id: number;
  choices_options: string;
  hint: string;
  integer_max: number | null;
  integer_min: number | null;
  isRequired: boolean;
  q_type: "TX" | "RD" | "SC" | "CB" | "IN";
  question: string;
}

export interface ISurvey {
  id: number;
  hello_text: string;
  bye_text: string;
  name: string;
  questions: IQuestion[];
}

const exportOptions = (choices: string) => {
  if(choices.includes("\r\n")) {
    return choices.split("\r\n");
  }
  
  return choices.split("\n");
};

export const parseQuestions = (surveyResponse: ISurvey): QuestionValue[] => {
  return surveyResponse.questions.map((q) => {
    if (q.q_type === "SC") {
      return {
        type: QuestionType.RATING,
        value: {
          question: q.question,
        },
        answer: null,
      };
    } else if (q.q_type === "RD") {
      return {
        type: QuestionType.MULTIPLE,
        value: {
          question: q.question,
          options: exportOptions(q.choices_options),
        },
        answer: null,
        allowMultiple: false,
      };
    } else if (q.q_type === "CB") {
      return {
        type: QuestionType.MULTIPLE,
        value: {
          question: q.question,
          options: exportOptions(q.choices_options),
        },
        answer: null,
        allowMultiple: true,
      };
    } else if (q.q_type === "TX") {
      return {
        type: QuestionType.FREE_TEXT,
        value: { question: q.question },
        answer: "",
      };
    } else if (q.q_type === "IN") {
      return {
        type: QuestionType.INTEGER,
        value: {
          question: q.question,
          minValue: q.integer_min || undefined,
          maxValue: q.integer_max || undefined,
        },
        answer: null,
      };
    } else {
      return {
        type: QuestionType.FREE_TEXT,
        value: { question: q.question },
        answer: "",
      };
    }
  });
};
