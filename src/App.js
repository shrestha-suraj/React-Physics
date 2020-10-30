import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Componets imported
import Header from "./animated-components/header/header.component";
import Home from "./components/home.component.jsx";
import AnimatedLogo from "./animated-components/fade-in-logo/logo.component";
import ToggleAnimation from "./animated-components/toggle-animation/toggle-animation.jsx";
import ProgressAnimation from './animated-components/progress-animation/progress-animation.jsx'
import BackgroundParticles from "./animated-components/background-particles/background-particles";
import BackgroundParticlesImage from "./animated-components/background-particles/background-particles-image";
const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <div className="component-div">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/fade-in" component={AnimatedLogo} />
            <Route exact path="/toggle" component={ToggleAnimation} />
            <Route exact path="/progress" component={ProgressAnimation} />
            <Route exact path="/bg-particles" component={BackgroundParticles} />
            <Route exact path="/bg-particles-image" component={BackgroundParticlesImage} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
