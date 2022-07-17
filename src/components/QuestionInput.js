import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterQuestions,
  setUserQuestion,
  setSelectedQuestion,
} from "../actions/questions";

const QuestionInput = () => {
  const dispatch = useDispatch();
  const handleQuestionChange = (e) => {
    const userInput = e.target.value;
    dispatch(setSelectedQuestion(false));
    dispatch(setUserQuestion(userInput));
    dispatch(filterQuestions());
  };

  return (
    <input
      type="text"
      className="form-control shadow-lg"
      onChange={handleQuestionChange}
      style={{
        textAlign: "center",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: "200px",
      }}
      id="searchBox"
      aria-describedby="searchBox"
      placeholder="Ask"
    />
  );
};

export default QuestionInput;
