import WeatherDashImg from "../images/weather-dash.PNG";
import VRRMTrackerImg from "../images/verraTaskTracker.PNG";
import MusicVideo from "../videos/musicAppVideo.mp4";

const portfolioData = [
  {
    title: "Verra Task Tracker",
    imgUrl: VRRMTrackerImg,
    stack: [" HTML,", " CSS,", " Javascript,", "Google Firebase"],
    github: "https://github.com/JashawnRogers/counterV2",
    liveSite: "https://verratasktracker.com/",
    description: `Verra Task Tracker is an online application designed for employees to conveniently record the volume of completed work. Users can create an account to manage their tasks, through adding and deleting records that are stored via Google Firebase.\nUsername: admin \nPassword: Password123`,
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
