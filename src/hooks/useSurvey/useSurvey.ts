import { QuestionValue } from "../../question_types/question_types";
import axios from "axios";
import { useEffect, useState } from "react";
import { parseQuestions, ISurvey } from "./useServey.utils";
import { useHistory, useParams } from "react-router";

const BASE_URL = `https://blijfaanz-demo.herokuapp.com`;

interface SurveyRouteParams {
  questionnaireId: string;
}

export const useSurvey = () => {
  const params = useParams<SurveyRouteParams>();
  const history = useHistory();

  const [loading, setLoading] = useState<boolean>(true);
  const [questions, setQuestions] = useState<QuestionValue[]>([]);
  const [byeText, setByeText] = useState<string>("");
  const [helloText, setHelloText] = useState<string>("");

  const [rawQuestions, setRawQuestions] = useState<ISurvey>();

  const fetch = async () => {
    try {
      const response = await axios.get<ISurvey>(
        `${BASE_URL}/api/questionnaire/${params.questionnaireId}`
      );
      const parsedQuestions = parseQuestions(response.data);

      setRawQuestions(response.data);
      setQuestions(parsedQuestions);
      setByeText(response.data.bye_text);
      setHelloText(response.data.hello_text);
      setLoading(false);
    } catch (e) {
      history.push("/404");
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return {
    loading,
    questions,
    texts: {
      bye: byeText,
      hello: helloText,
    },
    raw: {
      questions: rawQuestions,
    },
  };
};
