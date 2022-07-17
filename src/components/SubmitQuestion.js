import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitNewQuestion } from "../actions/questions";
const SubmitQuestion = () => {
  const dispatch = useDispatch();
  const [questionToSubmit, setQuestionToSubmit] = useState("");
  const submittedQuestionResponse = useSelector((state) => {
    return state.submittedQuestionResponse;
  });
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        right: "50%",
        transform: "translate(50%, -50%)",
      }}
    >
      <h5 className="text-center p-2">Ask a question!</h5>
      <input
        className="form-control p-2"
        style={{ textAlign: "center" }}
        onChange={(e) => {
          setQuestionToSubmit(e.target.value);
        }}
      ></input>
      <div className="text-center p-2">
        <button
          className="btn btn-primary"
          onClick={() => {
            dispatch(submitNewQuestion(questionToSubmit));
          }}
        >
          Submit
        </button>
      </div>
      <p className="text-center">
        Questions are reviewed programmatically and manually, website will not
        update until question has passed review.
      </p>
      <div>{submittedQuestionResponse}</div>
    </div>
  );
};

export default SubmitQuestion;
