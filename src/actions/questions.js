import {
  GET_QUESTIONS_FAILURE,
  GET_QUESTIONS_SUCCESS,
  GET_QUESTIONS_REQUEST,
  SET_USER_QUESTION,
  FILTER_QUESTIONS,
  SET_SELECTED_QUESTION,
  SUBMIT_NEW_QUESTION_FAILURE,
  SUBMIT_NEW_QUESTION_SUCCESS,
  SUBMIT_NEW_QUESTION_REQUEST,
} from "./types";
import store from "../store";

import InformationService from "../services/information.service";

export const getQuestions = () => (dispatch) => {
  dispatch({
    type: GET_QUESTIONS_REQUEST,
  });
  return InformationService.getQuestions()
    .then((data) => {
      dispatch({
        type: GET_QUESTIONS_SUCCESS,
        payload: data.data,
      });
      // return Promise.resolve();
    })
    .catch((error) => {
      dispatch({
        type: GET_QUESTIONS_FAILURE,
      });
      // return Promise.reject();
    });
};

export const setUserQuestion = (userQuestion) => (dispatch) => {
  dispatch({
    type: SET_USER_QUESTION,
    payload: userQuestion,
  });
};

export const filterQuestions = () => (dispatch) => {
  const { questions } = store.getState();
  dispatch({
    type: FILTER_QUESTIONS,
    payload: questions.questions.filter((s) => {
      return (
        s.question.toLowerCase().indexOf(questions.userQuestion.toLowerCase()) >
        -1
      );
    }),
  });
};

export const setFilteredQuestions = (q) => (dispatch) => {
  dispatch({
    type: FILTER_QUESTIONS,
    payload: [q],
  });
};
export const setSelectedQuestion = (q) => (dispatch) => {
  dispatch({
    type: SET_SELECTED_QUESTION,
    payload: q,
  });
};

export const submitNewQuestion = (q) => (dispatch) => {
  dispatch({
    type: SUBMIT_NEW_QUESTION_REQUEST,
  });
  return InformationService.submitNewQuestion(q)
    .then((data) => {
      dispatch({
        type: SUBMIT_NEW_QUESTION_SUCCESS,
        payload: data,
      });

      return Promise.resolve();
    })
    .catch((error) => {
      dispatch({
        type: SUBMIT_NEW_QUESTION_FAILURE,
      });
      return Promise.reject();
    });
};
