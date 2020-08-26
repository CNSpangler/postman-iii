import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './App/App.css';

// const url = useSelector(getUrl);
const methods = ['POST', 'GET', 'PATCH', 'PUT', 'DELETE'];
console.log(methods.map(method => method));

const RadioButtons = methods.map(method => (
  <div className={styles.radioButtonContainer} key={method}>
    <input id={method} type="radio" name={method} value={method} />
    <label className={styles.radioButton} htmlFor={method}>{method}</label>
  </div>
  )
);

const Form = () => (
  <div className={styles.Form}>
    <div className={styles.RadioGroup}>
      {RadioButtons}
    </div>

    <input type="text" className={styles.url} />
      <input type="textarea" placeholder="Raw JSON Body" className={styles.body} />
      <div className={styles.headers}>Placeholder for headers</div>
      <button className={styles.button}>Submit</button>

  </div>
);

export default Form;
