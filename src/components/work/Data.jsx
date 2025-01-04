import greekGateLoginPage from "../../assets/greekGateLoginPage.png";
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
import nocrateHome from "../../assets/nocrateHome.png";
import nocrateLogin from "../../assets/nocrateLogin.png";
import nocrateProduct from "../../assets/nocrateProduct.png";
import nocrateShop from "../../assets/nocrateShop.png";
import nocrateCat from "../../assets/nocrateCat.png";
import nocrateContact from "../../assets/nocrateContact.png";
import orderlyDash1 from "../../assets/orderlyDash1.png";
import orderlyDash2 from "../../assets/orderlyDash2.png";
import orderlyDash3 from "../../assets/orderlyDash3.png";

export const projectsData = [
  {
    id: 1,
    images: [
      nocrateHome,
      nocrateShop,
      nocrateProduct,
      nocrateCat,
      nocrateLogin,
      nocrateContact,
    ], // Ensure images is an array
    title: "Nocrate Website",
    category: "Web Development",
    description:
      "I created a modern and visually engaging e-commerce website for Nocrate, a streetwear and vintage clothing brand. The site features a minimalist design with a clean homepage and intuitive navigation, allowing users to easily explore shop categories. It includes a custom login and sign-up system with Google and Shopify integration for secure and seamless user authentication. The interactive shop page showcases products on a unique “clothing rack” layout with hover animations that enhance user engagement. Each product page provides detailed descriptions, size options, and an “Add to Cart” feature, ensuring a smooth shopping experience. Fully responsive across desktop and mobile devices, this website highlights my ability to design functional, creative, and brand-focused digital platforms.",
    techStack: ["React", "CSS", "JavaScript", "Shopify API", "Google API"], // Add tech stack
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
    techStack: ["SwiftUI", "XCode"], // Add tech stack
  },
  {
    id: 3,
    images: [portfolioMainPage], // Ensure images is an array
    title: "Personal Portfolio",
    category: "Web Development",
    description:
      "This portfolio highlights my skills in web development, including responsive design, dynamic interactivity, and clean aesthetics. Built using React, CSS animations, and API integrations, it reflects my expertise in creating intuitive and visually engaging experiences.",
    techStack: ["React", "CSS", "JavaScript"], // Add tech stack
  },
  {
    id: 4,
    images: [portfolio1, port1cont, port1ed, port1proj, port1skills], // Ensure images is an array
    title: "First Personal Portfolio",
    category: "Web Development",
    description:
      "My first personal portfolio was a pivotal learning experience, where I honed my skills in web development and design. Through that process, I gained valuable insights into responsive layouts, user experience, and coding best practices. Using everything I learned, I built this new portfolio to better showcase my skills, projects, and growth as a developer, with a focus on clean design, interactivity, and functionality.",
    techStack: ["HTML", "CSS", "JavaScript"], // Add tech stack
  },
  {
    id: 5,
    images: [orderlyDash1, orderlyDash2, orderlyDash3, orderlySpreadSheet], // Ensure images is an array
    title: "Orderly Software",
    category: "Software Development",
    description:
      "This software automates email tracking and provides real-time spreadsheet updates for efficient inventory management. Designed to parse order details directly from emails, it simplifies data entry, improves accuracy, and streamlines workflows for sellers, making tasks like inventory tracking and tax preparation seamless and hassle-free. Software leverages several API's to provide real-time updates and notifications. Currently still in development.",
    techStack: ["Python", "Google Sheets API", "SMTP"], // Add tech stack
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
