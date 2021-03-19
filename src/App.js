import React from 'react';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Work from './pages/Work';
//Global Styles
import GlobalStyle from './styles/GlobalStyles';
//Router
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path="/" component={AboutUs}>
          <AboutUs />
        </Route>
        <Route exact path="/work" component={Work}>
          <Work />
        </Route>
        <Route exact path="/contact" component={ContactUs}>
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
