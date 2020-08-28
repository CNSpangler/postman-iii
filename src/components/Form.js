import React from 'react';
import styles from './App/App.css';
import { fetchData } from '../../services';
import { useSelector, useDispatch } from 'react-redux';
import { setUrl, setResults, setMethod, setBody, setHistory, setHeader } from '../redux/actions';
import { getUrl, getHistory } from '../redux/selectors';

const methods = ['POST', 'GET', 'PATCH', 'PUT', 'DELETE'];
const RadioButtons = methods.map(method => (
  <div className={styles.radioButtonContainer} key={method}>
    <input id={method} type="radio" name={method} value={method} />
    <label className={styles.radioButton} htmlFor={method}>{method}</label>
  </div>
  )
);

const Form = () => {
  const dispatch = useDispatch();
  const url = useSelector(getUrl);
  const history = useSelector(getHistory);

  const handleUrlChange = ({target}) => {
    dispatch(setUrl(target.value));
  }

  const handleMethodChange = ({target}) => {
    dispatch(setMethod(target.value));
  }

  const handleBodyChange = ({target}) => {
    dispatch(setBody(target.value));
  }

  const handleHeaderChange = ({target}) => {
    dispatch(setHeader(target.value));
  }

  const handleClick = (url, method, body) => {
    fetchData(url, method, body)
      .then(res => dispatch(setResults(res)))
      .then(res => dispatch(setHistory(res)));
  }

  return (
    <div className={styles.Form}>
      <div className={styles.RadioGroup} onChange={handleMethodChange}>
        {RadioButtons}
      </div>

      <input type="text" className={styles.url} onChange={handleUrlChange} />
      <input type="textarea" placeholder="Raw JSON Body" className={styles.body} onChange={handleBodyChange} />
      <input type="textarea" placeholder="Headers" className={styles.headers} onChange={handleHeaderChange} />
      <button className={styles.button} onClick={handleClick(url)}>Submit</button>
    </div>
  )
};

export default Form;
