import React from 'react';
import styles from './App/App.css';

const methods = ['POST', 'GET', 'PATCH', 'PUT', 'DELETE'];

const RadioButtons = methods.map(method => (
  <>
    <input id={method} type="radio" name={method} value={method} />
    <label className={styles.radioButton} htmlFor={method}>{method}</label>
  </>
  )
);

const Form = () => (
  <div className={styles.Form}>
    <div className={styles.radioButtonContainer}>
      {/* {radioButtons} */}
    </div>
  </div>
);

export default Form;
