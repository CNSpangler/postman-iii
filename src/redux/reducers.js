import { SET_URL, SET_METHOD } from './actions';
const initialState = {
  url: '',
  method: 'GET',
  body: {},
  header: {},
  results: []
}

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case SET_URL:
      return { ...state, url: payload };
    case SET_METHOD:
      return { ...state, method: payload };

    default:
      return state;
  }
}