import CounterImg from "../images/counterSC1.PNG";
import WeatherDashImg from "../images/weather-dash.PNG";
import MusicVideo from "../videos/musicAppVideo.mp4";

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
    title: "Weather Dashboard",
    imgUrl: WeatherDashImg,
    stack: [" React,", " Boostrap"],
    github: "https://github.com/JashawnRogers/react-weather-dash",
    liveSite: "https://rogersweatherdashboard.netlify.app",
    description:
      "Weather dashboard utilizing open-weather and Google Maps API. Displays various weather data to the user including a 5 day forecast.",
  },
  {
    title: "Music Streaming App",
    vidUrl: MusicVideo,
    stack: [" React, Express.js, React Bootstrap"],
    github: "https://github.com/JashawnRogers/iheartmusic",
    // liveSite: "",
    description:
      "This application allows you to stream music from Spotify and modify your library using Spotify's API. The tools used were express to manage api requests as well as multiple npm libraries such as spotify-web-api and lyrics-finder.",
  },
];

export default portfolioData;
