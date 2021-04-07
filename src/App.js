import React from 'react';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Projects from './pages/Projects';
//Global Styles
import GlobalStyle from './styles/GlobalStyles';
//Router
import { Switch, Route, useLocation } from 'react-router-dom';
import MovieDetail from './pages/MovieDetail';
//Animation
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={AboutUs}>
            <AboutUs />
          </Route>
          <Route exact path="/projects" component={Projects}>
            <Projects />
          </Route>
          <Route path="/projects/:id">
            <MovieDetail />
          </Route>
          <Route exact path="/contact" component={ContactUs}>
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
