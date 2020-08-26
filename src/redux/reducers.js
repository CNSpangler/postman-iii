import {SET_URL} from './actions';
const initialState = {
  url: 'https://',
  method: '',
  body: {},
  header: {},
  results: {}
}

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    default:
      return state;
    case SET_URL:
      return { ...state,  url: payload };
  }
}