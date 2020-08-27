import {fetchData} from '../../services';

export const SET_URL = 'SET_URL';
export const setUrl = (url) => dispatch => {
  dispatch({
    type: SET_URL,
    payload: url
  });
};

export const SET_METHOD = 'SET_METHOD';
export const setMethod = (method) => dispatch => {
  dispatch({
    type: SET_METHOD,
    payload: method
  });
};

export const SET_BODY = 'SET_BODY';
export const setBody = (body) => dispatch => {
  dispatch({
    type: SET_BODY,
    payload: body
  });
};

export const SET_HEADER = 'SET_HEADER';
export const setHeader = (header) => dispatch => {
  dispatch({
    type: SET_HEADER,
    payload: header
  });
};

export const SET_RESULTS = 'SET_RESULTS';
export const setResults = (results) => dispatch => {
  dispatch({
    type: SET_RESULTS,
    payload: results
  });
};
