import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import styles from './app.module.css';
import ReaderPage from '../../pages/ReaderPage';

const App = () => (
  <div className={styles.app}>
    <Switch>
      <Route path="/reader" component={ReaderPage} />
      <Redirect to="/reader" />
    </Switch>
  </div>
);

export default App;
