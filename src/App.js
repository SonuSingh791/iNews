import "./App.css";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
        <Switch>
          <Route exact path="/">
            <News key="general" pageSize={6} country="in" category="general" />
          </Route>
          <Route exact path="/business">
            <News key="business" pageSize={6} country="in" category="business" />
          </Route>
          <Route exact path="/entertainment">
            <News key="entertainment" pageSize={6} country="in" category="entertainment" />
          </Route>
          <Route exact path="/general">
            <News key="general" pageSize={6} country="in" category="general" />
          </Route>
          <Route exact path="/health">
            <News key="health" pageSize={6} country="in" category="health" />
          </Route>
          <Route exact path="/science">
            <News key="science" pageSize={6} country="in" category="science" />
          </Route>
          <Route exact path="/sports">
            <News key="sports" pageSize={6} country="in" category="sports" />
          </Route>
          <Route exact path="/technology">
            <News key="technology" pageSize={6} country="in" category="technology" />
          </Route>
        </Switch>
      </Router>
      </div>
    )
  }
}

export default App


