import React from "react";
import "./App.scss";
import Header from "./components/header/Header";
import Main from "./components/mainContent/Main";
import Footer from "./components/Footer/Footer";
import cookie from "js-cookie";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import Dashboard from "./components/dashboard/Dashboard";
function App() {
  const userInfo = cookie.getJSON("token") || null;

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              userInfo ? (
                <Redirect to="/dashboard" />
              ) : (
                <>
                  <Header /> <Main /> <Footer />
                </>
              )
            }
          />
          <Route path="/dashboard" exact>
          <Dashboard/>
          </Route>

          <Route path="/signup" exact component={SignUp}></Route>
          <Route path="/signin" exact component={SignIn}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
