import CounterImg from "../images/counterSC1.PNG";
import PortfolioImg from "../images/portfolioSC.PNG";
import musicImg from "../images/music-app.PNG";

const portfolioData = [
  {
    title: "Item Counter",
    imgUrl: CounterImg,
    stack: [" HTML,", " Bootstrap,", " Javascript"],
    github: "https://github.com/JashawnRogers/counter",
    liveSite: "https://jashawnrogers.github.io/counter/",
    description:
      "This item counter was ultimately created to improve the workflow at my current job. More specifically, this application allows my team and I to easily track and manage completed work throughout our shift to increase our productivity.",
  },
  {
    title: "Personal Portfolio",
    imgUrl: PortfolioImg,
    stack: [" React,", " Tailwind CSS"],
    github: "https://github.com/JashawnRogers/personal-portfolio",
    liveSite: "https://jashawnrogers.com/",
    description:
      "In this application, I was able to get comfortable building with React.js. From using component based code, to props, rendering lists, forms, and hooks.  ",
  },
  {
    title: "Music Streaming App",
    imgUrl: musicImg,
    stack: [" React, Express.js, React Bootstrap"],
    github: "https://github.com/JashawnRogers/iheartmusic",
    liveSite: "",
    description:
      "This application allows you to stream music from Spotify and modify your library using Spotify's API. The tools used were express to manage api requests as well as multiple npm libraries such as spotify-web-api and lyrics-finder.",
  },
];

export default portfolioData;
