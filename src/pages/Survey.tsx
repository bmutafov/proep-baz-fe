import { Downgraded, none, useHookstate } from "@hookstate/core";
import {
  AppBar,
  Box,
  CircularProgress,
  Container,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { SurveyButton } from "../common/SurveyButton";
import useIsMobile from "../hooks/useIsMobile";
import BooleanQuestion from "../question_types/Boolean/BooleanQuestion";
import FreeText from "../question_types/FreeText/FreeText";
import MultipleChoiceQuestion from "../question_types/MultipleChoiceQuestion/MultipleChoiceQuestion";
import { QuestionType, QuestionValue } from "../question_types/question_types";
import RatingQuestion from "../question_types/Rating/RatingQuestion";
import { mockData } from "./mock_data";
import QuestionsProgress from "../common/QuestionsProgress";
import ThankYou from "../common/ThankYou";
import { useSurvey } from "../hooks/useSurvey/useSurvey";
import axios from "axios";
import SurveyName from "../common/SurveyName";
import NumberQuestion from "../question_types/Number/NumberQuestion";
import { ReactComponent as FaqSvg } from "../assets/faq.svg";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface SurveyProps {}

const Survey: React.FC = () => {
  const isMobile = useIsMobile();
  const survey = useSurvey();

  const currentQuestion = useHookstate(0);
  const isSubmitted = useHookstate(false);
  const answers = useHookstate<any[]>([]);

  console.log("🅰 ~ answers", answers);

  const questions = survey.questions;

  useEffect(() => {
    if (!survey.loading) {
      answers.set(new Array(survey.questions.length).fill(null));
    }
  }, [survey.loading]);

  const onAnswer = (
    questionIndex: number,
    questionType: QuestionType,
    value: unknown,
    allowMultiple = false
  ) => {
    if (questionType === QuestionType.BOOLEAN) {
      const _value = value as boolean;
      answers[questionIndex].set(_value);
    }

    if (questionType === QuestionType.FREE_TEXT) {
      const _value = value as string;
      answers[questionIndex].set(_value);
    }

    if (questionType === QuestionType.MULTIPLE) {
      const _value = value as number;

      if (allowMultiple) {
        const currentAnswers = answers[questionIndex].get() as number[] | null;
        const currentAnswerValueIndex = currentAnswers?.indexOf(_value);
        if (
          currentAnswerValueIndex !== undefined &&
          currentAnswerValueIndex > -1
        ) {
          answers[questionIndex].nested(currentAnswerValueIndex).set(none);
        } else if (!currentAnswers) {
          answers[questionIndex].set([_value]);
        } else {
          answers[questionIndex].merge([_value]);
        }
      } else {
        answers[questionIndex].set(_value);
      }
    }

    if (questionType === QuestionType.RATING) {
      const _value = value as number;
      answers[questionIndex].set(_value);
    }

    if (questionType === QuestionType.INTEGER) {
      const _value = value as number | null;

      answers[questionIndex].set(_value);
    }
  };

  const renderQuestion = (question: QuestionValue) => {
    const index = questions.indexOf(question);

    if (question.type === QuestionType.BOOLEAN) {
      return (
        <BooleanQuestion
          key={`${question.value.question}-${index}`}
          value={answers[index].get()}
          question={question.value}
          onAnswer={(value) => onAnswer(index, question.type, value)}
        />
      );
    }

    if (question.type === QuestionType.FREE_TEXT) {
      return (
        <FreeText
          key={`${question.value.question}-${index}`}
          question={question.value}
          value={answers[index].get()}
          onChange={(value) => onAnswer(index, question.type, value)}
        />
      );
    }

    if (question.type === QuestionType.INTEGER) {
      return (
        <NumberQuestion
          key={`${question.value.question}-${index}`}
          question={question.value}
          value={answers[index].get()}
          onChange={(value) => onAnswer(index, question.type, value)}
        />
      );
    }

    if (question.type === QuestionType.MULTIPLE) {
      return (
        <MultipleChoiceQuestion
          key={`${question.value.question}-${index}`}
          question={question.value}
          value={answers[index].get()}
          onSelect={(value) =>
            onAnswer(index, question.type, value, question.allowMultiple)
          }
        />
      );
    }

    if (question.type === QuestionType.RATING) {
      return (
        <RatingQuestion
          key={`${question.value.question}-${index}`}
          question={question.value}
          value={answers[index].get()}
          onChange={(value) => onAnswer(index, question.type, value)}
        />
      );
    }
  };

  const submit = async () => {
    isSubmitted.set(true);

    const submitJson = answers
      .attach(Downgraded)
      .get()
      .map((answer, i) => ({
        question: survey.raw.questions?.questions[i].id,
        value: answer,
      }));

    const payload = {
      questionnaire: survey.raw.questions?.id,
      answers: submitJson,
    };
    console.log("🚀 ~ submit ~ payload", payload);

    const response = await axios.post(
      "https://blijfaanz-demo.herokuapp.com/api/answerlist/",
      payload
    );
  };

  const renderButtons = () => (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: "1rem",
        padding: "1rem 3rem 2rem 3rem",
      }}
    >
      <SurveyButton.Previous
        visible={currentQuestion.get() > 0}
        onClick={() => currentQuestion.set((prevValue) => prevValue - 1)}
      />
      <QuestionsProgress
        currentQuestion={currentQuestion.get()}
        totalQuestions={questions.length}
        isSubmitted={isSubmitted.get()}
      />
      {currentQuestion.get() < questions.length - 1 && (
        <SurveyButton.Next
          onClick={() => currentQuestion.set((prevValue) => prevValue + 1)}
        />
      )}
      {currentQuestion.get() === questions.length - 1 && (
        <SurveyButton.Submit onClick={submit} />
      )}
    </Box>
  );

  const renderContent = () => (
    <>
      {!isSubmitted.get() ? (
        <Box>{renderQuestion(questions[currentQuestion.get()])}</Box>
      ) : (
        <ThankYou text={survey.texts.bye} />
      )}

      {!isSubmitted.get() && renderButtons()}
    </>
  );

  if (survey.loading) {
    return (
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (isMobile)
    return (
      <Box
        sx={{
          display: "flex",
          height: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <SurveyName title={survey.raw.questions?.name ?? ""} />
        {renderContent()}
      </Box>
    );

  return (
    <>
      <SurveyName title={survey.raw.questions?.name ?? ""} />
      <Container>
        <Paper
          sx={{
            margin: "4rem",
            backgroundColor: "rgba(0, 0, 0, 0.03)",
            height: "60%",
            overflow: "auto",
          }}
          elevation={0}
        >
          {renderContent()}
        </Paper>
        <Box sx={{ position: "absolute", bottom: 0, right: 0 }}>
          <FaqSvg />
        </Box>
      </Container>
    </>
  );
};

export default Survey;
