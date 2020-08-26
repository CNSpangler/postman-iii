import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './App/App.css';
import { setUrl } from '../redux/actions';
import { getUrl } from '../redux/selectors';

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
  const handleUrlChange = ({target}) => {
    console.log(target.value);
    dispatch(setUrl(target.value));
  }

  const handleClick = () => {
    const url = useSelector(getUrl);
    console.log('submitted url', url)
  }

  return (
    <div className={styles.Form}>
      <div className={styles.RadioGroup}>
        {RadioButtons}
      </div>

      <input type="text" className={styles.url} onChange={handleUrlChange} />
      <input type="textarea" placeholder="Raw JSON Body" className={styles.body} />
      <div className={styles.headers}>Placeholder for headers</div>
      <button className={styles.button}>Submit</button>
    </div>
  )
};

export default Form;
