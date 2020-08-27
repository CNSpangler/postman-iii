import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './App/App.css';
import { setUrl, setResults, setMethod } from '../redux/actions';
import { getUrl } from '../redux/selectors';
import { fetchData } from '../../services';

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

  const handleUrlChange = ({target}) => {
    dispatch(setUrl(target.value));
  }

  const handleMethodChange = ({target}) => {
    dispatch(setMethod(target.value));
  }

  const handleBodyChange = ({target}) => {
    dispatch(setBody(target.value));
  }

  const handleClick = (url) => {
    fetchData(url)
      .then(res => dispatch(setResults(res)));
  }

  return (
    <div className={styles.Form}>
      <div className={styles.RadioGroup} onChange={handleMethodChange}>
        {RadioButtons}
      </div>

      <input type="text" className={styles.url} onChange={handleUrlChange} />
      <input type="textarea" placeholder="Raw JSON Body" className={styles.body} onChange={handleBodyChange} />
      <div className={styles.headers}>Placeholder for headers</div>
      <button className={styles.button} onClick={handleClick(url)}>Submit</button>
    </div>
  )
};

export default Form;
