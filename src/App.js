import React, { Component } from 'react';
import Navigation from "./components/navigation/navigation";
import Logo from "./components/logo/logo";
import FaceRecogonition from "./components/FaceRecogonition/faceRecogonition";
import ImageLinkForm from "./components/imagelinkform/imagelinkformComponent";
import Rank from "./components/rank/rack";
import SigninComponent from "./components/signIn/signinComponent";
import RegisterComponent from "./components/register/regitsterComponent";

import './App.css';
import "./index.css";
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: 'ff28ccedacd44bdb82894a87ad74ad98'
});

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
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      issignedIn: false,
      user: {
          id: '',
          email: '',
          name: '',
          entries: 0,
          joined: new Date()
      }
    }
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: new Date()
    }})
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value })
  }

  calculateFaceLocstion = (data) => {
    const clarifaiface = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiface.left_col * width,
      topRow: clarifaiface.top_row * height,
      rightCol: width - (clarifaiface.right_col * width),
      bottomRow: height - (clarifaiface.right_col * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({ box });
  }

  onButtonSubmit = () => {
    this.setState({
      imageUrl: this.state.input
    });
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => this.displayFaceBox(this.calculateFaceLocstion(response)))
      .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    if (route === 'signin') {
      this.setState({ issignedIn: false })
    }
    else if
    (route === 'home') {
      this.setState({ issignedIn: true })
    }
    this.setState({ route: route })
  }

  render() {
    const { issignedIn, imageUrl, route, box } = this.state;
    return (
      <div className='App'>
        <Particles className="particles"
          params={particlesOptions}
        />
        <Navigation onRouteChange={this.onRouteChange} issignedIn={issignedIn} />
        {route === 'home'
          ? <div>
            <Logo />
            <Rank />
            <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
            <FaceRecogonition imageUrl={imageUrl} box={box} />
          </div>
          : (
            route === 'signin'
              ? <SigninComponent onRouteChange={this.onRouteChange} />
              : <RegisterComponent loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
          )
        }
      </div>
    );
  }
}

export default App;
