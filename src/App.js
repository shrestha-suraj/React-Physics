import React from 'react'
import './App.css';
import AnimatedLogo from './animated-components/fade-in-logo/logo.component'
import ToggleAnimation from './animated-components/toggle-animation/toggle-animation.jsx'
import Header from './animated-components/header/header.component';

const App=()=> {
  return (
    <div className="App">
      <Header/>
      <AnimatedLogo/>
      <ToggleAnimation/>
    </div>
  );
}

export default App;
