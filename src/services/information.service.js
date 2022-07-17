import axios from "axios";
import { API_URL } from "../common/constant";

const getQuestions = () => {
  const resp = axios.get(API_URL + "getQuestions");
  const dataPromise = resp
    .then((resp) => {
      return resp.data;
    })
    .catch((error) => {
      console.log(error);
    });
  return dataPromise;
};

const submitNewQuestion = (q) => {
  const resp = axios.post(API_URL + "submitNewQuestion", { question: q });
  const dataPromise = resp
    .then((resp) => {
      return resp.data;
    })
    .catch((error) => {
      console.log(error);
    });
  return dataPromise;
};

export default {
  getQuestions,
  submitNewQuestion,
};
