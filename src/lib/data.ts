export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "TailwindCSS",
  "Firebase",
  "Node.js",
  "Git",
  "Linux",
  "MongoDB",
  "Express",
  "Framer Motion",
] as const;

export const projectTags = [
  "React",
  "TailwindCSS",
  "Firebase",
  "Node.js",
  "MongoDB",
  "Express",
  "Framer Motion",
] as const;

import instaImage from "../assets/react-insta.png";
import chatAppImage from "../assets/chat-app.png";
import amos from "../assets/amos.png";
import portfolio from "../assets/portfolio.png";
import blogs from "../assets/blogs.png";

export const projectsData = [
  {
    title: "React Instagram",
    Description:
      "React Instagram is a comprehensive Instagram clone that replicates many of the core features and functionalities of the popular social media platform. Built using modern web technologies, this project demonstrates my proficiency in working with React.js, Tailwind CSS for styling, and Firebase for backend services such as authentication, real-time database, and file storage.",
    ImageURL: instaImage,
    href: "https://instagram-clone-e762b.web.app/",
    projectTags: [
      "React",
      "TailwindCSS",
      "Firebase",
      "Firestore",
      "FirebaseAuth",
      "Framer Motion",
    ],
  },
  {
    title: "Chat App",
    Description:
      "The chat room works as a virtual room, where groups of people send messages that others can read instantaneously.",
    ImageURL: chatAppImage,
    href: "https://chat-app-d3c99.web.app/",
    projectTags: [
      "React",
      "TailwindCSS",
      "Firebase",
      "FirebaseAuth",
      "Framer Motion",
    ],
  },
  {
    title: "AutomicroUAS",
    Description:
      "AutomicroUAS is a cutting-edge web application developed for a client organization. This project showcases my proficiency in modern web development technologies, with a focus on creating an engaging and visually appealing user interface and user experience.",
    ImageURL: amos,
    href: "https://beta.amosaerospace.com/",
    projectTags: [
      "NextJS",
      "TailwindCSS",
      "TailwindCSS",
      "Hygraph",
      "ShadCN/UI",
    ],
  },

  {
    title: "Portfolio",
    Description:
      "A portfolio website to showcase my work and projects. It is built with React, TailwindCSS, Typescript for typesafety and Framer-motion for the animations.",
    ImageURL: portfolio,
    href: "https://www.bhaveshdewangan.me/",
    projectTags: [
      "React",
      "TailwindCSS",
      "Vite",
      "Framer Motion",
      "TypeScript",
    ],
  },
  {
    title: "Blog Site",
    Description:
      "As part of The Odin Project curriculum, I developed a comprehensive blog site with authorization, posting capabilities, and a content management system (CMS). This project allowed me to gain hands-on experience in building a full-stack web application using the MERN stack.",
    ImageURL: blogs,
    href: "https://github.com/Novachaos82/blogs-client",
    projectTags: [
      "React",
      "TailwindCSS",
      "Vite",
      "MongoDB",
      "Express",
      "Node.js",
      "Passport",
      "JWT",
      "TypeScript",
    ],
  },
] as const;
