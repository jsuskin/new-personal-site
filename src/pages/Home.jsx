import React from "react";
import portrait from "../assets/img/portrait.jpg";

export default function Home() {
  return (
    <div>
      <h1 className='page-header'>About Me</h1>
      <hr />
      <div className='home'>
        <span>
          <img src={portrait} alt='Joshua Suskin portrait' />
        </span>
        <div className='about-me'>
          <p>
            Hi! My name is Joshua. I am a software engineer based in New York
            City. My first exposure to coding was a C++ class in college. About
            two years ago, I decided to go further and taught myself Javascript,
            HTML, and CSS and after building my first app, I knew that this was
            what I wanted to do and in May of 2019, I embarked on my journey
            with Flatiron School's Full Stack Web Development Bootcamp Prep
            course, where I strengthened my Javascript skills as well as having
            learned React, Ruby, Rails, and SQL. Since graduating in August of
            2019, I have continued to build on these foundations. I enjoy
            puzzle-solving and finding solutions to unique problems and I am
            eager to make my impact on the world!
          </p>
        </div>
      </div>
    </div>
  );
}
