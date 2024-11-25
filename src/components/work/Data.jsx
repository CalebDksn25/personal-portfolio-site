import greekGateLoginPage from "../../assets/greekGateLoginPage.png";
import orderlyIMG from "../../assets/orderlyIMG.jpeg";
import portfolioMainPage from "../../assets/portfolioMainPage.png";
import portfolio1 from "../../assets/portfolio1.png";
import greekGateChapterView from "../../assets/greekGateChapterView.png";
import greekGateChapterDetails from "../../assets/greekGateChapterDetails.png";
import greekGateFeed from "../../assets/greekGateFeed.png";
import greekGateSignUp from "../../assets/greekGateSignUp.png";
import greekGateSettings from "../../assets/greekGateSettings.png";
import port1cont from "../../assets/port1cont.png";
import port1ed from "../../assets/port1ed.png";
import port1proj from "../../assets/port1proj.png";
import port1skills from "../../assets/port1skills.png";
import orderlySpreadSheet from "../../assets/orderlySpreadSheet.png";

export const projectsData = [
  {
    id: 1,
    images: [orderlyIMG, orderlySpreadSheet], // Ensure images is an array
    title: "Orderly Site",
    category: "Web Development",
    description:
      "The Orderly website was made to showcase the Orderly Software, whilst still ensuring a clean and professional look for the users. The website was made using HTML, React.JS, CSS, and JavaScript. Currently in development for further use.",
  },
  {
    id: 2,
    images: [
      greekGateLoginPage,
      greekGateChapterView,
      greekGateChapterDetails,
      greekGateFeed,
      greekGateSignUp,
      greekGateSettings,
    ], // Ensure images is an array
    title: "Greek Gate",
    category: "Application Development",
    description:
      "Greek Gate is a mobile application designed to streamline the proccess of managing fraternity and sorority recruitment events. The app was made using SwiftUI and XCode, ensuring user privacy, as well as a clean and professional look, in order to keep users coming back. Currently In Development.",
  },
  {
    id: 3,
    images: [portfolioMainPage], // Ensure images is an array
    title: "Personal Portfolio",
    category: "Web Development",
    description:
      "This portfolio highlights my skills in web development, including responsive design, dynamic interactivity, and clean aesthetics. Built using React, CSS animations, and API integrations, it reflects my expertise in creating intuitive and visually engaging experiences.",
  },
  {
    id: 4,
    images: [portfolio1, port1cont, port1ed, port1proj, port1skills], // Ensure images is an array
    title: "First Personal Portfolio",
    category: "Web Development",
    description:
      "My first personal portfolio was a pivotal learning experience, where I honed my skills in web development and design. Through that process, I gained valuable insights into responsive layouts, user experience, and coding best practices. Using everything I learned, I built this new portfolio to better showcase my skills, projects, and growth as a developer, with a focus on clean design, interactivity, and functionality.",
  },
  {
    id: 5,
    images: [orderlySpreadSheet, orderlyIMG], // Ensure images is an array
    title: "Orderly Software",
    category: "Software Development",
    description:
      "This software automates email tracking and provides real-time spreadsheet updates for efficient inventory management. Designed to parse order details directly from emails, it simplifies data entry, improves accuracy, and streamlines workflows for sellers, making tasks like inventory tracking and tax preparation seamless and hassle-free. Software leverages several API's to provide real-time updates and notifications. Currently still in development.",
  },
];

export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "web development",
  },
  {
    name: "application development",
  },
  {
    name: "software development",
  },
];
