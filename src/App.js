import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = {
    advice: "",
  };
  componentDidMount() {}
  fetchAdvice = () => {
    axios.get("https://api.adviceslip.com/advice");
  };
  render() {
    return (
      <div className="App">
        <h1>Hello React</h1>
      </div>
    );
  }
}

export default App;
