import React from "react";
import { useSpring, animated } from "react-spring";
import { StarOutlined } from "@ant-design/icons";

const ProgressAnimation = () => {
  const numberProgress = useSpring({config:{duration:1000}, x: 1, from: { x: 0 } })
  return (
    <React.Fragment>
        <animated.h1>{numberProgress.x}</animated.h1>
    </React.Fragment>
  );
};

export default ProgressAnimation;
