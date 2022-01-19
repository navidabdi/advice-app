import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = {
    advice: "",
    id: "",
  };
  componentDidMount() {
    this.fetchAdvice();
  }
  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice, id } = response.data.slip;
        this.setState({ advice, id });
      })
      .catch((error) => {});
  };
  render() {
    return (
      <div className="app">
        <span className="slip-id">{this.state.id}</span>
        <div className="card">
          <h1 className="heading">{this.state.advice}</h1>
          <button onClick={() => this.fetchAdvice()} className="button">
            GIVE ME ADVICE!
          </button>
        </div>
      </div>
    );
  }
}

export default App;
