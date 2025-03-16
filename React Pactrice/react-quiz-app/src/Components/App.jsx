import { useEffect, useReducer } from "react";
import Header from "./Header.jsx";
import MainComponent from "./MainComponent.jsx";
import Loader from "./Loader.jsx";
import Error from "./Error.jsx";
import StartScreen from "./StartScreen.jsx";
import Question from "./Question.jsx";
import NextButton from "./NextButton.jsx";
import Progress from "./Progress.jsx";
import FinishScreen from "./FinishScreen.jsx";
import Timer from "./Timer.jsx";
import Footer from "./Footer.jsx";

const initialState = {
  questions: [],

  // Loading, Error, Ready, Active, Finish
  status: "loading",
  questionIndex: 0,
  answer: null,
  points: 0,
  highscore: 0,
  remainingSeconds: null,
};

const SECONDS_PER_QUESTION = 10;

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };

    case "dataFailed":
      return {
        ...state,
        status: "error",
      };

    case "startQuiz":
      return {
        ...state,
        status: "active",
        remainingSeconds: state.questions.length * SECONDS_PER_QUESTION,
      };

    case "newAnswer":
      const question = state.questions.at(state.questionIndex);

      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };

    case "nextQuestion":
      return { ...state, questionIndex: state.questionIndex + 1, answer: null };

    case "finishQuiz":
      return {
        ...state,
        status: "finish",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };

    case "resetQuiz":
      return {
        ...initialState,
        questions: state.questions,
        status: "ready",
        highscore: state.highscore,
      };

    case "tick":
      return {
        ...state,
        remainingSeconds: state.remainingSeconds - 1,
        status: state.remainingSeconds === 0 ? "finish" : state.status,
      };
    default:
      throw new Error("Action Unknown");
  }
}

function App() {
  const [
    {
      questions,
      status,
      questionIndex,
      answer,
      points,
      highscore,
      remainingSeconds,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numberOfQuestions = questions.length;
  const maximumPossiblePoints = questions.reduce(
    (previousValue, currentValue) => previousValue + currentValue.points,
    0
  );

  useEffect(function () {
    fetch("http://localhost:8088/questions")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Header />
      <MainComponent>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen
            numberOfQuestions={numberOfQuestions}
            dispatch={dispatch}
          />
        )}
        {status === "active" && (
          <>
            <Progress
              questionIndex={questionIndex}
              numberOfQuestions={numberOfQuestions}
              points={points}
              maximumPossiblePoints={maximumPossiblePoints}
              answer={answer}
            />
            <Question
              question={questions[questionIndex]}
              answer={answer}
              dispatch={dispatch}
            />
            <Footer>
              <Timer dispatch={dispatch} remainingSeconds={remainingSeconds} />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                numberOfQuestions={numberOfQuestions}
                questionIndex={questionIndex}
              />
            </Footer>
          </>
        )}
        {status === "finish" && (
          <FinishScreen
            points={points}
            maximumPossiblePoints={maximumPossiblePoints}
            highscore={highscore}
            dispatch={dispatch}
          />
        )}
      </MainComponent>
    </div>
  );
}

export default App;
