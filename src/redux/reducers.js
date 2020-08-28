import { SET_URL, SET_METHOD, SET_HEADER, SET_RESULTS, SET_BODY, SET_HISTORY } from './actions';
const initialState = {
  url: '',
  method: 'GET',
  body: {},
  header: {},
  results: [],
  history: []
}

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case SET_URL:
      return { ...state, url: payload };
    case SET_METHOD:
      return { ...state, method: payload };
    case SET_BODY:
      return { ...state, body: payload };
    case SET_HEADER:
      return { ...state, header:payload };
    case SET_RESULTS:
      return { ...state, results: payload };
    case SET_HISTORY:
      return { ...state, history: payload };

    default:
      return state;
  }
}