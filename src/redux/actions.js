import {fetchData} from '../../services';

export const SET_URL = 'SET_URL';
export const setUrl = (url) => dispatch => {
  dispatch({
    type: SET_URL,
    payload: url
  })
}
// export const setUrl = (url) => dispatch => {
//   return fetchData(url)
//     .then(resultData => {
//       dispatch({
//         type: SET_URL,
//         payload: resultData
//       })
//     })
// }