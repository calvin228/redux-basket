import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Basket from "./components/Basket";
import Groceries from "./components/Groceries";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <FontAwesomeIcon icon="shopping-basket" size="6x" />
          <h1 className="App-title">Basket App</h1>
        </header>
        <main>
          <div className="container">
            <div className="row">
              <Groceries />
              <Basket />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
