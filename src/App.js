import React, { Component } from 'react';
import Navigation from "./components/navigation/navigation";
import Logo from "./components/logo/logo";

import './App.css';
import "./index.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Logo />
       {/* <ImageLinkForm />
        <FaceRecogonition />} */}
      </div>
    );
  }
}

export default App;
