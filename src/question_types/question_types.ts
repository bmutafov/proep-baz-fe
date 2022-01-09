export interface RatingQuestionType {
  question: string;
}

export interface FreeTextQuestionType {
  question: string;
}

export interface NumberQuestionType {
  question: string;
  maxValue?: number;
  minValue?: number;
}

export type MultipleChoiceOption = string;

export interface MultipleChoiceQuestionType {
  question: string;
  options: MultipleChoiceOption[];
}

export interface BooleanQuestionType {
  question: string;
  options?: {
    true: string;
    false: string;
  };
}

export enum QuestionType {
  MULTIPLE = "multiple",
  BOOLEAN = "boolean",
  FREE_TEXT = "free_text",
  RATING = "rating",
  INTEGER = "integer",
}

export type QuestionValue =
  | {
      type: QuestionType.MULTIPLE;
      value: MultipleChoiceQuestionType;
      answer: number | null;
      allowMultiple?: boolean;
    }
  | {
      type: QuestionType.BOOLEAN;
      value: BooleanQuestionType;
      answer: boolean;
    }
  | {
      type: QuestionType.FREE_TEXT;
      value: FreeTextQuestionType;
      answer: string;
    }
  | {
      type: QuestionType.RATING;
      value: RatingQuestionType;
      answer: number | null;
    }
  | {
      type: QuestionType.INTEGER;
      value: NumberQuestionType;
      answer: number | null;
    };
