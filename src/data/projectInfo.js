import CounterImg from "../images/counterSC1.PNG";
import PortfolioImg from "../images/portfolioSC.PNG";
import ConstructionImg from "../images/under-construction.jpg";

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
    liveSite: " ",
    description:
      "In this application, I was able to get comfortable building with React.js. From using component based code, to props, rendering lists, forms, and hooks.  ",
  },
  {
    title: "D.B. Consulting",
    imgUrl: ConstructionImg,
    stack: [" React.js,"],
    github: "",
    liveSite: "",
    description: "Currently creating Web App for client with backend support.",
  },
];

export default portfolioData;
