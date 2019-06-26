import React, { Component } from "react";
import Admin from "./adminDashboard";
import "../components/App.css";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Admin />
      </div>
    );
  }
}

export default App;
