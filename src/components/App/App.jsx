import React from 'react';
import styles from './App.css';
import Header from '../Header.js'
import Form from '../Form.js';
import History from '../History';
import Results from '../Results';

export default function App() {
  return (
    <div className={styles.mainGrid}>
      <Header />
      <Form />
      <History />
      <Results />
    </div>
  );
}
