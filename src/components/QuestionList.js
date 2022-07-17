import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Question from "./Question";
import QuestionInput from "./QuestionInput";
import { setFilteredQuestions } from "../actions/questions";
import Answer from "./Answer";
const QuestionList = () => {
  console.log("rendered");
  const dispatch = useDispatch();
  const [radIncrement, setRadIncrement] = useState(Math.PI);
  const [overflow, setOverflow] = useState(false);
  const [questionsToShow, setQuestionsToShow] = useState(6);
  const filteredQuestions = useSelector((state) => {
    return state.questions.filteredQuestions;
  });

  const userQuestion = useSelector((state) => {
    return state.questions.userQuestion;
  });

  const selectedQuestion = useSelector((state) => {
    return state.questions.selectedQuestion;
  });

  useEffect(() => {
    if (filteredQuestions.length > 6) {
      setRadIncrement((2 * Math.PI) / 6);
      setOverflow(true);
    } else {
      setRadIncrement((2 * Math.PI) / filteredQuestions.length);
      setOverflow(false);
    }
  }, [filteredQuestions]);
  let angle = -Math.PI / 2;

  return (
    <div>
      {userQuestion === "" ? (
        ""
      ) : selectedQuestion ? (
        <div
          className="row justify-content-center"
          style={{
            position: "absolute",
            top: "calc(25%)",
            right: "calc(50%)",
            transform: "translate(50%, -50%)",
          }}
        >
          <Answer q={selectedQuestion} />
        </div>
      ) : (
        filteredQuestions.map((q, idx) => {
          const r = window.innerHeight / 3;
          const x = Math.cos(angle) * r;
          const y = Math.sin(angle) * r;
          angle = angle - radIncrement;
          if (overflow) {
            if (idx > 6) {
            }
          }
          return (
            <div
              key={q.id}
              className="row justify-content-center"
              style={{
                position: "absolute",
                top: "calc(50% + " + y + "px)",
                right: "calc(50% + " + x + "px)",
                transform: "translate(50%, -50%)",
              }}
            >
              <Question key={q.id} q={q} delay={500} />
            </div>
          );
        })
      )}
    </div>
  );
};
export default QuestionList;
