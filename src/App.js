import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styles from './App.module.scss';
//components
import Header from './components/Header';
import Footer from './components/Footer';
//screens
import Home from './screens/Home';
import Search from './screens/Search';
//routes
import * as ROUTES from './constants/routes';

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Header />

        <Switch>
          <Route exact path={ROUTES.HOME} component={Home} />
          <Route path={ROUTES.SEARCH} component={Search} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
