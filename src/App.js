import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {

  constructor(props) {
    super(props);
    this.json_data = require("./frases.json");
    this.state = {
      frase: "..."
    }

    this.gerarFrase();
  }

  geraNumeroInteiro(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  mudaFrase = event => {
    const fraseGenerator = this.todasFrases[this.geraNumeroInteiro(0, 11)];
    this.setState({
      frase: fraseGenerator
    });
  };

  gerarFrase = () => {
    const totalFrases = this.json_data;

    this.todasFrases = totalFrases.map(frases => frases.frase);
  };

  render() {
    return (
      <div>
        <p>{this.state.frase}</p>
        <button onClick={this.mudaFrase}>Gerar Frase</button>
      </div>
    );
  }
}

export default App;
