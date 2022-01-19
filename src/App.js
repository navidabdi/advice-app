import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = {
    advice: "",
  };
  componentDidMount() {
    this.fetchAdvice();
  }
  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice });
      })
      .catch((error) => {});
  };
  render() {
    return (
      <div className="card">
        <h1 className="heading">{this.state.advice}</h1>
        <button className="button">GIVE ME ADVICE!</button>
      </div>
    );
  }
}

export default App;
