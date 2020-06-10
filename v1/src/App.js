import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <p>Hello,</p>
          <button>
            <a href="#intro">click me!</a>
          </button>
        </header>
        <div className="intro" id="intro">
          <NavBar />
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/projects" component={Projects} />
            {/* <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" /> */}
          </Switch>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
