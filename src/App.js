import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import QuestionList from "./components/QuestionList";
import { history } from "./helpers/history";
import { getQuestions } from "./actions/questions";
import "./App.css";
import QuestionInput from "./components/QuestionInput";
import Sidebar from "./components/Sidebar";
import SubmitQuestion from "./components/SubmitQuestion";
import QA from "./components/QA";
import AboutMe from "./components/AboutMe";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getQuestions());
  }, []);

  return (
    <Router>
      <div className="App min-vh-100 container-fluid row p-0">
        <div
          className="col-1 min-vh-100 shadow-lg"
          style={{ overflow: "hidden" }}
        >
          <Sidebar />
        </div>

        <div className="col-11">
          <Routes>
            <Route
              path={"/"}
              element={
                <>
                  <QuestionInput />
                  <QuestionList />
                </>
              }
            ></Route>
            <Route path={"/about_me"} element={<AboutMe />}></Route>
            <Route path={"/examples"}>hello</Route>
            <Route path={"/q_a"} element={<QA />}></Route>
            <Route
              path={"/submit_question"}
              element={<SubmitQuestion />}
            ></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
