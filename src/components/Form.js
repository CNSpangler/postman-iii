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
    <input id="POST" type="radio" name="POST" value="POST" />
    <label className={styles.radioButton} htmlFor="POST">"POST"</label>

      {/* {radioButtons} */}
    </div>

    <input type="text" className={styles.url} />
      <input type="textarea" placeholder="Raw JSON Body" className={styles.body} />
      <div className={styles.headers}>Placeholder for headers</div>
      <button className={styles.button}>Submit</button>

  </div>
);

export default Form;
