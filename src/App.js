import React, { Component } from 'react';
import Navigation from "./components/navigation/navigation";
import Logo from "./components/logo/logo";
import FaceRecogonition from "./components/FaceRecogonition/faceRecogonition";
import ImageLinkForm from "./components/imagelinkform/imagelinkformComponent";
import Rank from "./components/rank/rack";
import './App.css';
import "./index.css";
import Particles from 'react-particles-js';
import Clarifai from 'clarifai' ;

const app = new Clarifai.App({
  apiKey: 'ff28ccedacd44bdb82894a87ad74ad98'
 });

<script type="text/javascript" src="https://sdk.clarifai.com/js/clarifai-latest.js"></script>

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
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: ''
      }
    }
    onInputChange = (event)=>{
      this.setState({input: event.target.value})
  }

  onButtonSubmit = () =>{
    this.setState({
      imageUrl:this.state.input,
    })
    app.models.predict(Clarifai.GENERAL_MODEL, this.state.input).then(
  function(response) {
    console.log(response)
    // do something with response
  },
  function(err) {
    // there was an error
  }
);
  }

  render() {
    return (
      <div>
        <Particles className="particles"
              params={particlesOptions}
            />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange = {this.onInputChange} onButtonSubmit = {this.onButtonSubmit}/>
      <FaceRecogonition imageUrl = {this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
