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
        <Router>
        <NavBar />
        {/* <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      /> */}
        <Routes>
          <Route  path="/" element={<News key="general" pageSize={6} country="in" category="general" />}>
            {/* // <News key="general" pageSize={6} country="in" category="general" /> */}
          </Route>
          <Route  path="/business" element = {<News key="business" pageSize={6} country="in" category="business" />}>
            {/* <News key="business" pageSize={6} country="in" category="business" /> */}
          </Route>
          <Route  path="/entertainment" element = {<News key="entertainment" pageSize={6} country="in" category="entertainment" />}>
            {/* <News key="entertainment" pageSize={6} country="in" category="entertainment" /> */}
          </Route>
          <Route  path="/general" element = {<News key="general" pageSize={6} country="in" category="general" />}>
            {/* <News key="general" pageSize={6} country="in" category="general" /> */}
          </Route>
          <Route  path="/health" element = {<News key="health" pageSize={6} country="in" category="health" />}>
            {/* <News key="health" pageSize={6} country="in" category="health" /> */}
          </Route>
          <Route  path="/science" element = {<News key="science" pageSize={6} country="in" category="science" />}>
            {/* <News key="science" pageSize={6} country="in" category="science" /> */}
          </Route>
          <Route  path="/sports" element = {<News key="sports" pageSize={6} country="in" category="sports" />}>
            {/* <News key="sports" pageSize={6} country="in" category="sports" /> */}
          </Route>
          <Route  path="/technology" element = {<News key="technology" pageSize={6} country="in" category="technology" />}>
            {/* <News key="technology" pageSize={6} country="in" category="technology" /> */}
          </Route>
        </Routes>
      </Router>
      </div>
    )
  }
}

export default App


