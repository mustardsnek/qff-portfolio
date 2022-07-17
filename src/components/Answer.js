import React from "react";

const Answer = ({ q }) => {
  return (
    <>
      <div className="h1 text-center">{q.question}</div>
      <div className="h3 text-center">{q.answer}</div>
    </>
  );
};

export default Answer;
