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
  SiFirebase
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

interface ITechStackItem {
  id: number;
  name: string;
  icon: IconType;
}

// Tech Stack:
const TechStackList: ITechStackItem[] = [
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
  {
    id: 5,
    name: "C#",
    icon: SiCsharp,
  },
  {
    id: 6,
    name: "React",
    icon: SiReact,
  },
  {
    id: 7,
    name: "NextJS",
    icon: TbBrandNextjs,
  },
  {
    id: 8,
    name: ".NET",
    icon: SiDotnet,
  },
  {
    id: 9,
    name: "Figma",
    icon: SiFigma,
  },
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
  {
    id: 15,
    name: "Redux",
    icon: SiRedux,
  },
  {
    id: 16,
    name: "GraphQL",
    icon: SiGraphql,
  },
  {
    id: 17,
    name: "PostgreSQL",
    icon: SiPostgresql,
  },
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
  {
    id: 20,
    name: "Firebase",
    icon: SiFirebase,
  },
];

export default TechStackList;
