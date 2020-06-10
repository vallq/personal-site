import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./components/About";
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
            {/* <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects}/>
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" /> */}
          </Switch>
        </div>
        <div className="project-header">Here are some of my projects</div>
      </div>
    </BrowserRouter>
  );
}

export default App;
