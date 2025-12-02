import React, { useState } from "react";
import "./FlashCard.css";

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: " JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React.",
    answer: "JSX",
  },
  {
    id: 3458,
    question: "What language is React based on?",
    answer: " JavaScript",
  },
  {
    id: 7337,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8831,
    question: "What's the name of the syntax we use to describe a UI in React.",
    answer: "JSX",
  },
  {
    id: 3460,
    question: "What language is React based on?",
    answer: " JavaScript",
  },
  {
    id: 7340,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8830,
    question: "What's the name of the syntax we use to describe a UI in React.",
    answer: "JSX",
  },
];

export default function FlashCard() {
  return (
    <div>
      <ul className="cardboard">
        {questions.map((question) => (
          <Card question={question} key={question.id} />
        ))}
      </ul>
    </div>
  );
}

function Card({ question }) {
  const [clicked, setClicked] = useState(false);

  return (
    <li
      className={"box" + (clicked ? " clicked" : "")}
      onClick={() => setClicked((clicked) => !clicked)}
    >
      <span>{clicked ? question.answer : question.question}</span>
    </li>
  );
}
