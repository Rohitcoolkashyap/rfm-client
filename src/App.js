import React from "react";
import "./App.scss";
import {Helmet} from 'react-helmet';
import Header from "./components/header/Header";
import Main from "./components/mainContent/Main";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";

const TITLE = 'RFM Suite'


function App() {
  return (
    <div className="App">

      <Helmet>
        <title>{TITLE}</title>
      </Helmet>

      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Main />
            <Footer />
          </Route>
          <Route path="/signup" exact component={SignUp}></Route>
          <Route path="/signin" exact component={SignIn}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
