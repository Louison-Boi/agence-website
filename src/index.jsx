import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Navbar from './components/Navbar';
import './index.scss';
import StudyCase from './pages/StudyCase';

const App = () => {
  const getInitialMode = () => {
    const savedMode = JSON.parse(localStorage.getItem('dark'));
    return savedMode || false;
  };

  const [darkMode, setDarkMode] = React.useState(getInitialMode());

  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Router>
        <Navbar handleChange={setDarkMode} />
        <div className="screen">
          <main>
            <body>
              <Switch>
                <Route path="/" exact>
                  <Home />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/work" exact>
                  <Work />
                </Route>
                <Route path="/work/:slug">
                  <StudyCase />
                </Route>
              </Switch>
            </body>
          </main>
        </div>
      </Router>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
