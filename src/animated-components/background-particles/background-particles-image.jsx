import React from "react";
import Particles,{HoverMode} from "react-particles-js";
import LogoOne from './image1.svg'
import LogoTwo from './image2.svg'

const BackgroundParticlesImage = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "red",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Particles
        style={{ position: "absolute", top: 0, left: 0 }}
        params= {{
            fps_limit: 28,
            particles: {
                collisions: {
                    enable: false
                },
                number: {
                    value: 200,
                    density: {
                        enable: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 30,
                    opacity: .4
                },
                move: {
                    speed: 1
                },
                opacity: {
                    anim: {
                        enable: true,
                        opacity_min: .05,
                        speed: 1,
                        sync: false,
                    },
                    value: .4
                }
            },
            polygon: {
                enable: true,
                scale: .5,
                move: {
                    radius: 10,
                },
                url: LogoOne,
                draw: {
                    enable: true,
                    stroke: {
                        color: 'rgba(255, 255, 255, .2)'
                    }
                }
            },
            retina_detect: false,
            interactivity: {
                events: {
                    onhover: {
                        enable: true,
                        mode: HoverMode.bubble
                    }
                },
                modes: {
                    bubble: {
                        size: 6,
                        distance: 40
                    }
                }
            }
        }}
      />
      <h1>This one has image as the background particle images</h1>
    </div>
  );
};

export default BackgroundParticlesImage;
