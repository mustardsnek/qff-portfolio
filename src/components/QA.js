import React from "react";
import { useSelector } from "react-redux";
import Question from "./Question";
import Answer from "./Answer";

const QA = () => {
  const questions = useSelector((state) => {
    return state.questions.questions;
  });
  return (
    <>
      {questions.map((q) => {
        return (
          <div>
            <Answer q={q}></Answer>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default QA;
