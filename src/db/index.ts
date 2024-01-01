import { StaticImageData } from "next/image";
import { IconType } from "react-icons";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiCsharp,
  SiReact,
  SiDotnet,
  SiFigma,
  SiVite,
  SiGit,
  SiGithub,
  SiReactquery,
  SiAxios,
  SiRedux,
  SiGraphql,
  SiPostgresql,
  SiSanity,
  SiTailwindcss,
  SiFirebase,
  SiNextdotjs,
  SiDjango,
  SiPython,
  SiMicrosoftsqlserver,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

import FortyGV from "../assets/40Graphville.png";
import LDTB2 from "../assets/ldtb2.png";
import NZWalks from "../assets/NZWalks.png";
import Farcry6 from "../assets/Farcry6.png";
import rapidrecall from "../assets/rapidrecall.png";
import MyContacts from "../assets/MyContacts.png";
import tickettribe from "../assets/tickettribe.png";

interface ITechStackItem {
  id: number;
  name: string;
  icon: IconType;
}

interface IProjectItem {
  id: number;
  title: string;
  about: string;
  stack: {
    id: number;
    icon: IconType;
  }[];
  link: string;
  img: StaticImageData;
}

interface IWorkExperience {
  title: string;
  company: string;
  about: string;
  duration: string;
  tools: string[];
}

// Tech Stack:
export const TechStackList: ITechStackItem[] = [
  {
    id: 1,
    name: "HTML",
    icon: SiHtml5,
  },
  {
    id: 2,
    name: "CSS",
    icon: SiCss3,
  },
  {
    id: 3,
    name: "JavaScript",
    icon: SiJavascript,
  },
  {
    id: 4,
    name: "TypeScript",
    icon: SiTypescript,
  },
  // {
  //   id: 5,
  //   name: "C#",
  //   icon: SiCsharp,
  // },
  {
    id: 6,
    name: "React",
    icon: SiReact,
  },
  // {
  //   id: 7,
  //   name: "NextJS",
  //   icon: SiNextdotjs,
  // },
  // {
  //   id: 8,
  //   name: ".NET",
  //   icon: SiDotnet,
  // },
  // {
  //   id: 9,
  //   name: "Figma",
  //   icon: SiFigma,
  // },
  {
    id: 10,
    name: "ViteJS",
    icon: SiVite,
  },
  {
    id: 11,
    name: "Github",
    icon: SiGithub,
  },
  {
    id: 12,
    name: "Git",
    icon: SiGit,
  },
  {
    id: 13,
    name: "React Query",
    icon: SiReactquery,
  },
  {
    id: 14,
    name: "Axios",
    icon: SiAxios,
  },
  // {
  //   id: 15,
  //   name: "Redux",
  //   icon: SiRedux,
  // },
  // {
  //   id: 16,
  //   name: "GraphQL",
  //   icon: SiGraphql,
  // },
  // {
  //   id: 17,
  //   name: "PostgreSQL",
  //   icon: SiPostgresql,
  // },
  {
    id: 18,
    name: "Sanity CMS",
    icon: SiSanity,
  },
  {
    id: 19,
    name: "TailwindCSS",
    icon: SiTailwindcss,
  },
  // {
  //   id: 20,
  //   name: "Firebase",
  //   icon: SiFirebase,
  // },
];

export const ProjectsList: IProjectItem[] = [
  {
    id: 1,
    title: "40GraphVille",
    about: "Offical Website for 40GraphVille Photography + CMS for updating photos.",
    stack: [
      {
        id: 1,
        icon: SiReact,
      },
      {
        id: 2,
        icon: SiNextdotjs,
      },
      {
        id: 3,
        icon: SiSanity,
      },
      {
        id: 4,
        icon: SiReactquery,
      },
      {
        id: 5,
        icon: SiTailwindcss,
      },
      {
        id: 5,
        icon: SiJavascript,
      },
    ],
    link: "40graphville.com",
    img: FortyGV,
  },
  {
    id: 2,
    title: "TicketTribe (WIP)",
    about: "Full Stack Event Ticketing System. Create Events, Buy and Sell Tickets!",
    stack: [
      {
        id: 1,
        icon: SiReact,
      },
      {
        id: 2,
        icon: SiNextdotjs,
      },
      {
        id: 3,
        icon: SiNodedotjs,
      },
      {
        id: 4,
        icon: SiReactquery,
      },
      {
        id: 5,
        icon: SiTailwindcss,
      },
      {
        id: 6,
        icon: SiTypescript,
      },
      {
        id: 7,
        icon: SiExpress,
      },
      {
        id: 8,
        icon: SiMongodb,
      },
    ],
    link: "tickettribe.vercel.app",
    img: tickettribe,
  },
  {
    id: 3,
    title: "MyContacts",
    about: "Full-Stack Contacts Management System with Calling & Email Functionalities.",
    stack: [
      {
        id: 1,
        icon: SiReact,
      },
      {
        id: 2,
        icon: SiVite,
      },
      {
        id: 3,
        icon: SiNodedotjs,
      },
      {
        id: 4,
        icon: SiReactquery,
      },
      {
        id: 5,
        icon: SiTailwindcss,
      },
      {
        id: 6,
        icon: SiTypescript,
      },
      {
        id: 7,
        icon: SiExpress,
      },
      {
        id: 8,
        icon: SiMongodb,
      },
    ],
    link: "nkscontacts.vercel.app",
    img: MyContacts,
  },
  {
    id: 4,
    title: "Laundry DirtToBright",
    about: "Full-Stack Laundry System. Place a booking and have your laundry taken in no time!",
    stack: [
      {
        id: 1,
        icon: SiReact,
      },
      {
        id: 2,
        icon: SiVite,
      },
      {
        id: 3,
        icon: SiPython,
      },
      {
        id: 4,
        icon: SiReactquery,
      },
      {
        id: 5,
        icon: SiTailwindcss,
      },
      {
        id: 6,
        icon: SiTypescript,
      },
      {
        id: 7,
        icon: SiDjango,
      },
    ],
    link: "nkscontacts.vercel.app",
    img: LDTB2,
  },
  {
    id: 5,
    title: "RapidRecall",
    about: "Simple Notes App. Long press notes to pin them!",
    stack: [
      {
        id: 1,
        icon: SiReact,
      },
      {
        id: 5,
        icon: SiTailwindcss,
      },
      {
        id: 6,
        icon: SiJavascript,
      },
    ],
    link: "github.com/topboyasante/rapidrecall",
    img: rapidrecall,
  },
];

export const workExprience: IWorkExperience[] = [
  {
    title: "UI/UX & Frontend Engineer",
    company: "Slightly Techie Community",
    about: `At Slightly Techie, we're part of a collaborative team working on various projects, including a laundry booking app. I'm actively contributing to its development using React, TypeScript, and TailwindCSS for the frontend, while our backend experts use Django. Our goal is to create a streamlined and robust system that enhances the laundry booking experience for users, meeting our client's specific needs with dedication and expertise.`,
    duration: "May 2023 - Present",
    tools: [
      "React",
      "TypeScript",
      "Next JS",
      "Vite JS",
      "TailwindCSS",
      "Figma",
    ],
  },
  {
    title: "Frontend Engineer",
    company: "Zomujo Foundation",
    about: `
    I collaborated on a contract project aimed at building the web frontend for Zomujo Foundation. Using Next.js, TailwindCSS, and TypeScript, we enhanced the performance and functionality of their web application. Leveraging Next.js, we delivered an optimized and responsive frontend experience that aligns with the organization's goals.`,
    duration: "May 2023 - June 2023",
    tools: ["React", "TypeScript", "Next JS", "TailwindCSS"],
  },
  {
    title: "Frontend Engineer Intern",
    company: "Axon Information Systems",
    about: `
    I had the pleasure of collaborating with an exceptional team to create a cutting-edge Blood Bank System. We used JavaScript, React, and TailwindCSS for the frontend, while our skilled backend developers employed C# for the robust backend. Our combined efforts resulted in a reliable and highly efficient frontend.`,
    duration: "Sep. 2022 - Jan. 2023",
    tools: [
      "React",
      "JavaScript",
      "Redux",
      "TailwindCSS",
      "Axios",
      "HeadlessUI",
    ],
  },
];
