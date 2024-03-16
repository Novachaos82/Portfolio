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
    Description: "A fully functional instagram clone using firebase and react.",
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
    Description: "A project made for an organization",
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
    title: "Portfolio",
    Description:
      "The chat room works as a virtual room, where groups of people send messages that others can read instantaneously.",
    ImageURL: blogs,
    href: "https://chat-app-d3c99.web.app/",
    projectTags: [
      "React",
      "TailwindCSS",
      "Vite",
      "MongoDB",
      "Express",
      "Node.js",
      "Passport",
      "JWT",
    ],
  },
] as const;
