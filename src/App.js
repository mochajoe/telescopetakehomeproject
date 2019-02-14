import React, { Component } from "react";
import "./App.css";
import ContestantRender from "./components/ContestantRender";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContestantRender />
      </div>
    );
  }
}

export default App;
