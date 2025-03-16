import Option from "./Option";

function Question({ question, dispatch, answer }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Option
        options={question.options}
        answer={answer}
        dispatch={dispatch}
        correctOptionIndex={question.correctOption}
      />
    </div>
  );
}

export default Question;
