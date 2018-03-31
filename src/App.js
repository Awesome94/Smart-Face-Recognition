import React, { Component } from 'react';
import Navigation from "./components/navigation/navigation";
import Logo from "./components/logo/logo";
import ImageLinkForm from "./components/imagelinkform/imagelinkformComponent";
import Rank from "./components/rank/rack";
import './App.css';
import "./index.css";
import Particles from 'react-particles-js';

const particlesOptions = {
    particles: {
      number: {
        value: 30,
        density: {
          enable: true,
          value_area: 800,
        }
      }
    }
  }

class App extends Component {
  render() {
    return (
      <div>
        <Particles className="particles"
              params={particlesOptions}
            />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
      {/* <FaceRecogonition />} */}
      </div>
    );
  }
}

export default App;
