import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { setSelectedQuestion } from "../actions/questions";

const Question = ({ q, delay }) => {
  // console.log(delay);
  const dispatch = useDispatch();
  const inputRef = useRef();
  const [qClass, setQClass] = useState("answers hide");
  const [bClass, setBClass] = useState("btn btn-outline-dark h1 answers hide");
  const [inFocus, setInFocus] = useState(false);
  useEffect(() => {
    const timedClass = setTimeout(() => {
      setQClass("answers");
      setBClass("btn btn-outline-dark h1 answers");
    }, delay);
    return () => {
      clearTimeout(timedClass);
    };
  }, []);

  // useEffect(() => {
  //   if (inFocus) {
  //     console.log(inputRef.current.getBoundingClientRect());
  //   }
  // }, [inFocus]);

  return (
    <div
      className={bClass}
      ref={inputRef}
      onMouseEnter={() => {
        setInFocus(true);
      }}
      onMouseLeave={() => {
        setInFocus(false);
      }}
      onClick={() => {
        dispatch(setSelectedQuestion(q));
      }}
    >
      <h1 className={qClass}>{q.question}</h1>
    </div>
  );
};

export default Question;
