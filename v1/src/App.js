import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div id="title">valerie lui</div>
        <header className="App-header">
          <a href="#intro" id="scroll-button">
            hello,
          </a>
        </header>
        <div className="intro" id="intro">
          <NavBar />
          <Switch>
            <Route exact path="/" component={About} />
          </Switch>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
