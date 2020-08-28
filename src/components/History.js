import React from 'react';
import ReactJson from 'react-json-view';
import styles from './App/App.css';
import { useSelector } from 'react-redux';
import { getHistory } from '../redux/selectors';
// import { useHistory } from '../../hooks/StateProvider';

const History = () => {
  // const history = useHistory();
  const history = useSelector(getHistory);

  return (
    <div className={styles.History}>
      <h3>Search History:</h3>
      <ReactJson src={history} />
    </div>
  );
};

export default History;
