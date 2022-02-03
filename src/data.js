import witwScreenshot from "./assets/img/project-screenshots/where-in-the-world.png";
import scalarScreenshot from "./assets/img/project-screenshots/scalar.png";
import jpsScreenshot from "./assets/img/project-screenshots/josh-paper-scissors.png";
import mammoriesScreenshot from "./assets/img/project-screenshots/mammories.png";
import rtcChatScreenshot from "./assets/img/project-screenshots/web-rtc-video-chat.png";
import worabcdefghijklmnopqrstuvwxyzdleScreenshot from "./assets/img/project-screenshots/worabcdefghijklmnopqrstuvwxyzdle.png";

export const projects = [
  {
    name: "Wor/[a-z]/le",
    description: "Wordle clone built with React.",
    url: "https://worabcdefghijklmnopqrstuvwxyzdle.netlify.app/",
    github: "https://github.com/jsuskin/wordle-clone-client",
    demo: "",
    screenshot: worabcdefghijklmnopqrstuvwxyzdleScreenshot,
  },
  {
    name: "Web RTC Video Chat App",
    description:
      "Full-stack, responsive video chat app built with React on the frontend and NodeJS on the backend utilizing ExpressJS and Socket.io.",
    url: "https://dazzling-perlman-5fe0e6.netlify.app/",
    github: {
      frontend: "https://github.com/jsuskin/web-rtc-chat-app-client",
      backend: "https://github.com/jsuskin/web-rtc-chat-app-server",
    },
    demo: "",
    screenshot: rtcChatScreenshot,
  },
  {
    name: "Where In The World",
    description:
      "Responsive REST Countries API frontend project with search functionality and color theme switcher.",
    url: "https://keen-jepsen-6a3830.netlify.app/",
    github: "https://github.com/jsuskin/where-in-the-world",
    demo: "",
    screenshot: witwScreenshot,
  },
  {
    name: "Josh, Paper, Scissors",
    description:
      "Responsive Rock, Paper, Scissors front-end application built with CRA according to specs provided by frontendmentor.io.",
    url: "https://josh-paper-scissors.netlify.app/",
    github: "https://github.com/jsuskin/josh-paper-scissors",
    demo: "",
    screenshot: jpsScreenshot,
  },
  {
    name: "Memories App",
    description:
      "Full-Stack responsive MERN CRUD app with photo upload capability.",
    url: "https://gifted-lamarr-4d5555.netlify.app/",
    github: {
      frontend: "https://github.com/jsuskin/memories-frontend",
      backend: "https://github.com/jsuskin/memories-backend",
    },
    demo: "",
    screenshot: mammoriesScreenshot,
  },
  {
    name: "Scalar",
    description:
      "A guitar scale generator application for guitarists to use as a reference tool when practicing or writing songs.",
    url: "http://scalar.netlify.com",
    github: {
      frontend: "https://github.com/jsuskin/scalar-app",
      backend: "https://github.com/jsuskin/scalar",
    },
    demo: "",
    screenshot: scalarScreenshot,
  },
  {
    name: "Shapebox",
    description:
      "A full CRUD (Create, Read, Update, Delete) application which utilizes p5.js to generate shapes, the position and dimensions of which can be manipulated, via mouse actions or direct input, and then persisted to a database",
    url: "",
    github: {
      frontend: "https://github.com/jsuskin/shapebox-app",
      backend: "https://github.com/jsuskin/shapebox",
    },
    demo: "https://youtu.be/IEsGCYRMgsQ",
    screenshot: "",
  },
  {
    name: "Duodenarium",
    description:
      "A music discovery app with a custom player built with react-player",
    url: "https://duodenarium-app.herokuapp.com/",
    github: {
      frontend: "https://github.com/jsuskin/Duodenarium-app",
      backend: "https://github.com/jsuskin/Duodenarium",
    },
    demo: "",
    screenshot: "",
  },
  {
    name: "JamBuddy",
    description:
      "An application which utilizes the Google Maps API to connect musicians with each other based on availability and location.",
    url: "",
    github: "https://github.com/jsuskin/jambuddy",
    demo: "https://youtu.be/0-YzlOUU1Ro",
    screenshot: "",
  },
  {
    name: "Stenographer",
    description:
      "A full CRUD (Create, Read, Update, Delete) note-taking application.",
    url: "",
    github: "https://github.com/occipudding/the-stenographer-app",
    demo: "https://youtu.be/GPBs9Tct6HA",
    screenshot: "",
  },
];
