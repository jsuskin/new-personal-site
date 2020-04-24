import React from "react";
import { Router } from "@reach/router";
import Contact from "./pages/Contact.jsx";
import Projects from "./pages/Projects.jsx";
import Skills from "./pages/Skills.jsx";
import Home from "./pages/Home.jsx";
import ResponsiveNavigation from "./components/ResponsiveNavigation";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const navLinks = [
    {
      text: "Home",
      path: "/",
      icon: "ion-ios-home",
      externalLink: false
    },
    {
      text: "Projects",
      path: "/projects",
      icon: "ion-ios-briefcase",
      externalLink: false
    },
    {
      text: "Skills",
      path: "/skills",
      icon: "ion-ios-flash",
      externalLink: false
    },
    {
      text: "GitHub",
      path: "https://www.github.com/jsuskin",
      icon: "ion-ios-git-branch",
      externalLink: true
    },
    {
      text: "Contact",
      path: "/contact",
      icon: "ion-ios-megaphone",
      externalLink: false
    }
  ];

  return (
    <div className='App'>
      <ResponsiveNavigation
        navLinks={navLinks}
        logo={logo}
        background='#333'
        hoverBackground='#ccc'
        linkColor='#eee'
      />
      <div className='spacer' />
      <div className='content'>
        <Router primary={false}>
          <Contact path='/contact' />
          <Home path='/' />
          <Projects path='/projects' />
          <Skills path='/skills' />
        </Router>
      </div>
    </div>
  );
}

export default App;
