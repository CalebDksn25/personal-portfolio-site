import portfolioMainPage from "../../assets/portfolioMainPage.png";
//import portfolio1 from "../../assets/portfolio1.png";
//import port1cont from "../../assets/port1cont.png";
//import port1ed from "../../assets/port1ed.png";
//import port1proj from "../../assets/port1proj.png";
//import port1skills from "../../assets/port1skills.png";
import orderlySpreadSheet from "../../assets/orderlySpreadSheet.png";
import nocrateHome from "../../assets/nocrateHome.png";
import nocrateLogin from "../../assets/nocrateLogin.png";
import nocrateProduct from "../../assets/nocrateProduct.png";
import nocrateShop from "../../assets/nocrateShop.png";
import nocrateCat from "../../assets/nocrateCat.png";
import nocrateContact from "../../assets/nocrateContact.png";
import orderly1 from "../../assets/orderlyArc.png";
import orderlyPic1 from "../../assets/orderlyPic1.png";
import orderlyPic2 from "../../assets/orderlyPic2.png";
import orderlyPic3 from "../../assets/orderlyPic3.png";
import orderlyPic4 from "../../assets/orderlyPic4.png";
import healthAdvisor1 from "../../assets/healthAdvisor1.png";
import healthAdvisor2 from "../../assets/healthAdvisor2.png";
import healthAdvisor3 from "../../assets/healthAdvisor3.png";
import healthAdvisor4 from "../../assets/healthAdvisor4.png";
import healthAdvisor5 from "../../assets/healthAdvisor5.png";
import healthAdvisor6 from "../../assets/healthAdvisor6.png";
import voodieshome from "../../assets/voodieshome.png";
import voodies1 from "../../assets/voodies1.png";
import voodies2 from "../../assets/voodies2.png";
import voodies3 from "../../assets/voodies3.png";
import voodies4 from "../../assets/voodies4.png";
import voodies5 from "../../assets/voodies5.png";
import voodies6 from "../../assets/voodies6.png";
import voodies7 from "../../assets/voodies7.png";
import leyva1 from "../../assets/leyva/leyva1.png";
import leyva2 from "../../assets/leyva/leyva2.png";
import leyva3 from "../../assets/leyva/leyva3.png";
import leyva4 from "../../assets/leyva/leyva4.png";
import leyva5 from "../../assets/leyva/leyva5.png";
import leyva6 from "../../assets/leyva/leyva6.png";
import leyva7 from "../../assets/leyva/leyva7.png";
import leyva8 from "../../assets/leyva/leyva8.png";
import leyva9 from "../../assets/leyva/leyva9.png";
import leyva10 from "../../assets/leyva/leyva10.png";

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
      voodieshome,
      voodies1,
      voodies2,
      voodies3,
      voodies4,
      voodies5,
      voodies6,
      voodies7,
    ], // Ensure images is an array
    title: "Voodies",
    category: "Application Development",
    description:
      "I have been working on Voodies, where I developed the registration and authentication system, ensuring a seamless user sign-up and login experience. Additionally, I designed and implemented the home scroll page, incorporating dynamic content loading and video interaction features. By leveraging Supabase for database management and backend functionalities, I have successfully integrated robust solutions to support real-time updates and efficient data handling for a smooth user experience.",
    techStack: [
      "Flutter",
      "Supabase",
      "PostgreSQL",
      "Supabase Authentication API",
      "XCode",
    ], // Add tech stack
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
    images: [
      healthAdvisor1,
      healthAdvisor2,
      healthAdvisor3,
      healthAdvisor4,
      healthAdvisor5,
      healthAdvisor6,
    ], // Ensure images is an array
    title: "Hackathon Project - Financial Health Advisor",
    category: "Web Development",
    description:
      "Developed a web-based financial health advisor prototype within 24 hours during a hackathon. The project utilized Python, JavaScript, HTML, CSS, AWS Bedrock, and Lambda to process and analyze bank statement uploads. Integrated Anthropic’s Claude 3.5 AI model with Retrieval-Augmented Generation (RAG) to provide tailored financial insights and actionable advice. Focused on optimizing API efficiency, ensuring secure file handling, and delivering a seamless user experience.",
    techStack: [
      "Python",
      "JavaScript",
      "AWS Bedrock",
      "AWS Lambda",
      "HTML",
      "CSS",
    ], // Add tech stack
  },
  {
    id: 5,
    images: [
      orderlyPic1,
      orderlyPic2,
      orderlyPic3,
      orderlyPic4,
      orderlySpreadSheet,
      orderly1,
    ], // Ensure images is an array
    title: "Orderly Software",
    category: "Software Development",
    description:
      "This software automates email tracking and provides real-time spreadsheet updates for efficient inventory management. Designed to parse order details directly from emails, it simplifies data entry, improves accuracy, and streamlines workflows for sellers, making tasks like inventory tracking and tax preparation seamless and hassle-free. Software leverages several API's to provide real-time updates and notifications. Currently still in development.",
    techStack: ["Python", "Google Sheets API", "SMTP"], // Add tech stack
  },
  {
    id: 6,
    images: [
      leyva1,
      leyva2,
      leyva3,
      leyva4,
      leyva5,
      leyva6,
      leyva7,
      leyva8,
      leyva9,
      leyva10,
    ], // Ensure images is an array
    title: "Leyva & Night Law Website",
    category: "Web Development",
    description:
      "This project involved redesigning the Leyva & Night Law website to create a modern, responsive, and professional online presence for the firm. The site highlights core legal services, improves navigation, and incorporates a clean UI tailored for accessibility and client engagement. Built with performance and usability in mind, the website streamlines how potential clients find information and contact the firm. The project is complete and live, serving as a polished digital front door for Leyva & Night Law.",
    techStack: ["React", "ResendAPI", "JavaScript", "CSS"], // Add tech stack
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
