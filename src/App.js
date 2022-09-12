import React, { Component } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

class App extends Component {
  render() {
    return (
      <div className="todoapp">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}

export default App