import React from 'react'
import {Typography} from 'antd'
import Particles from 'react-particles-js'

const {Title,Paragraph} =Typography

const Home=()=>{
    return(
        <div style={{width:"100%",height:"100%",background:"black",display:"flex",justifyContent:"center",alignItems:"center",postiion:"relative",zIndex:-1}}>
        
        <Particles
            style={{position:"absolute",top:0,left:0}}
            params={{
                "particles": {
                    "number": {
                        "value": 160,
                        "density": {
                            "enable": false
                        }
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                            "speed": 4,
                            "size_min": 0.3
                        }
                    },
                    "line_linked": {
                        "enable": false
                    },
                    "move": {
                        "random": true,
                        "speed": 1,
                        "direction": "top",
                        "out_mode": "out"
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "bubble"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "repulse"
                        }
                    },
                    "modes": {
                        "bubble": {
                            "distance": 250,
                            "duration": 2,
                            "size": 0,
                            "opacity": 0
                        },
                        "repulse": {
                            "distance": 400,
                            "duration": 4
                        }
                    }
                }
            }}
        />

        <Typography style={{width:"50%"}}>
            <Title style={{color:"white"}}>
                Welcome to React Physics
            </Title>
            <Paragraph style={{textAlign:"justify",color:"red"}}>
            <span style={{color:"white",fontSize:20}}>Hello everyone,</span> this is a web application that would allow us to demonstrate
            different types of animation libarary available for React.js. The one that we 
            would start with is react-spring. As the webapp progresses, we will be adding 
            additional libraries as discovered. Enjoy the demos.
            </Paragraph>
        </Typography>
        </div>    
    )
}

export default Home