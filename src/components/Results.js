import React from 'react';
import ReactJson from 'react-json-view';
import styles from './App/App.css';
import { useSelector } from 'react-redux';
import { getResults } from '../redux/selectors';

const Results = () => {
  const results = useSelector(getResults);

  return (
    <div className={styles.Results}>
      {results ? <ReactJson src={results} /> : <div>Please make a request above</div>}
    </div>
  );
};

export default Results;
