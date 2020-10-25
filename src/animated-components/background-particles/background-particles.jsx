import React from 'react'
import Particles from 'react-particles-js';

const BackgroundParticles=()=>{
    return(
      <div style={{width:"100%",height:"100%",background:"red",position:"relative"}}>
        <Particles 
        style={{position:"absolute"}}
        params={{
          "particles": {
              "number": {
                  "value": 160,
                  "density": {
                      "enable": false
                  }
              },
              "size": {
                  "value": 10,
                  "random": true
              },
              "move": {
                  "direction": "bottom",
                  "out_mode": "out"
              },
              "line_linked": {
                  "enable": false
              }
          },
          "interactivity": {
              "events": {
                  "onclick": {
                      "enable": true,
                      "mode": "remove"
                  }
              },
              "modes": {
                  "remove": {
                      "particles_nb": 10
                  }
              }
          }
      }} 
        />
        <h1>Hello World</h1>
        </div>
    )
}

export default BackgroundParticles