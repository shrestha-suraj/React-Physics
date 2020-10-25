import React from 'react'
import logo from "../../logo.svg";
import { useSpring, animated,config } from "react-spring";

const App = () => {
  // Use spring hook takes an object with from and two that species the properties for the
  // element that is being animated by animated.xyz component
  // We change the width and opactity of css property to show pop up animation on the image
  // Refresh the image to see the change
  const logoAnimation = useSpring({
      config:config.molasses, 
      from: { opacity: 0,width:0 }, 
      to:{opacity: 1,width:500 }
    });
  return (
    // The animation is applied by creating the tag with animated addition and style
    // for the data that we get from the hook usage
    <React.Fragment>
      <animated.img
        src={logo}
        className="App-logo"
        alt="logo"
        style={logoAnimation}
      />
      <p>This logo is being animated in. Check the code for knowledge.</p>
    </React.Fragment>
  );
};

export default App;
