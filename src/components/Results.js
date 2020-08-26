import React from 'react';
import ReactJson from 'react-json-view';
import styles from './App/App.css';

const Results = () => {

  return (
    <div className={styles.Results}>
      {/* {results ? <ReactJson src={results} /> : <div>Please make a request above</div>} */}
      <h1>RESULTS</h1>
    </div>
  );
};

export default Results;
