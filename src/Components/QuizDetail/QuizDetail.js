import React from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./QuizDetail.css";
import { EyeIcon } from "@heroicons/react/24/solid";

const QuizDetail = () => {
  const quizes = useLoaderData();

  const { name, questions } = quizes.data;

  const handleCorrectAnswer = () => {
    toast.success("Correct Answer!", { position: "top-center" });
  };

  const handleShowAnswer = (answer) => {
    toast.success(answer, { position: "top-center" });
  };

  const handleWrongAnswer = () => {
    toast.error("Wrong Answer!", { position: "top-center" });
  };

  return (
    <div className="container">
      <h1 className="quiz-heading-style">{name}</h1>
      <div className="full-style">
        {questions.map((question, index) => (
          <div key={question.id}>
            {" "}
            <h3 className="questions-style">
              {index + 1}.{question.question}
            </h3>
            <ul className="answer-style">
              <button
                onClick={() => handleShowAnswer(question.correctAnswer)}
                className="right-answer-style"
              >
                <EyeIcon className="icon-second-style" />
              </button>
              {question.options.map((item, index) => (
                <li
                  className="list-style"
                  key={index}
                  onClick={() =>
                    item === question.correctAnswer
                      ? handleCorrectAnswer()
                      : handleWrongAnswer()
                  }
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizDetail;
