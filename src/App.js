import React from "react";
import "./App.scss";
import Header from "./components/header/Header";
import Main from "./components/mainContent/Main";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Main />
            <Footer />
          </Route>
          <Route path="/signup" exact component={SignUp}></Route>
          <Route path="/signip" exact component={SignIn}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
