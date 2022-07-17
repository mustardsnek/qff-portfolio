import {
  FILTER_QUESTIONS,
  GET_QUESTIONS_FAILURE,
  GET_QUESTIONS_REQUEST,
  GET_QUESTIONS_SUCCESS,
  SET_USER_QUESTION,
  SET_SELECTED_QUESTION,
  SUBMIT_NEW_QUESTION_FAILURE,
  SUBMIT_NEW_QUESTION_REQUEST,
  SUBMIT_NEW_QUESTION_SUCCESS,
} from "../actions/types";

const initialState = {
  isLoading: false,
  isError: false,
  questions: [],
  filteredQuestions: [],
  userQuestion: "",
  startedTyping: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_QUESTIONS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case GET_QUESTIONS_SUCCESS: {
      return {
        ...state,
        questions: payload,
      };
    }
    case GET_QUESTIONS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case SET_USER_QUESTION: {
      return {
        ...state,
        userQuestion: payload,
        startedTyping: true,
      };
    }
    case FILTER_QUESTIONS: {
      return {
        ...state,
        filteredQuestions: payload,
      };
    }

    case SET_SELECTED_QUESTION: {
      return {
        ...state,
        selectedQuestion: payload,
      };
    }
    case SUBMIT_NEW_QUESTION_REQUEST: {
      return {
        ...state,
        submittingQuestion: true,
      };
    }
    case SUBMIT_NEW_QUESTION_SUCCESS: {
      return {
        ...state,
        submittedQuestionSuccess: true,
        submittingQuestion: false,
        submittedQuestionResponse: payload,
      };
    }

    case SUBMIT_NEW_QUESTION_FAILURE: {
      return {
        ...state,
        submittingQuestion: false,
        submittedQuestionSuccess: false,
      };
    }

    default:
      return state;
  }
}
