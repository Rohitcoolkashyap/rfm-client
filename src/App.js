import React from "react";
import "./App.scss";
import Header from "./components/header/Header";
import Main from "./components/mainContent/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
     
      <Header />
      <Main />
      <Footer/>
    </div>
  );
}

export default App;
