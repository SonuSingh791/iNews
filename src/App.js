import "./App.css";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'
import React, { Component } from 'react'

export class App extends Component {
  state={progress:0};

  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    )
  }
}

export default App


