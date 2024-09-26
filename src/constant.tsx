// import ProjectMobile1 from "~/assets/pro-1-mobile.svg";
// import Project1 from "~/assets/pro-1.svg";
import ProjectMobile2 from "~/assets/pro-2-mobile.svg";
import Project2 from "~/assets/pro-2.svg";
import { colors } from "~/theme";

type BgColorNames<T> = {
  [K in keyof T as `bg-${string & K}`]: T[K];
};

type MainProjectDetail = {
  title: string;
  desc: string;
  badges: string[];
  linkTo: string;
  img: { desktop: string; mobile: string };
  bgColor: keyof BgColorNames<typeof colors>;
};

export const mainProjects = [
  {
    title: "Please Assist Me",
    desc: "One app and one team for all your home management needs.\n\nSay goodbye to all of the headache with managing multiple apps, service providers, and arrival times.",
    badges: [
      "Firebase Auth",
      "Typescript",
      "NodeJS",
      "React Native",
      "GraphQL",
      "PostgreSQL",
    ],
    linkTo: "https://www.pleaseassistme.com/",
    bgColor: "bg-darker-blue",
    img: { desktop: Project2, mobile: ProjectMobile2 },
  },
  // {
  //   title: "Pick App",
  //   desc: "A School dismissal app.\n\nProviding a seamless, transparent, and secure experience, enhancing communication and efficiency during school dismissal.",
  //   badges: ["Typescript", "React Native", "Local First"],
  //   linkTo: "",
  //   bgColor: "bg-navy",
  //   img: { desktop: Project1, mobile: ProjectMobile1 },
  // },
] satisfies MainProjectDetail[];

export const honorableMentionList = [
  {
    heading: "Database Migration and Integration",
    body: "Led the migration of multiple applications to PostgreSQL, ensuring zero downtime, enhancing data integrity, and improving scalability across the organization.",
  },
  {
    heading: "Chrome Extension Development",
    body: "Created a Chrome extension to integrate with an existing system, improving usability for end users and increasing efficiency by 20%.",
  },
  {
    heading: "Exercise Tracking System",
    body: "Developed a dynamic exercise tracking feature using Ruby on Rails, boosting user engagement by 30% with advanced tracking and logging capabilities.",
  },
  {
    heading: "Process Automation",
    body: "Automated the calendar booking process, resulting in a 25% increase in operational efficiency and a 15% improvement in user experience.",
  },
  {
    heading: "Secure Data Processing Integration",
    body: "Implemented a secure Node.js webhook to handle sensitive data, reducing manual entry by 40% and ensuring compliance with data privacy standards.",
  },
];

export const skillList = [
  { title: "Language", list: ["TypeScript", "Python", "Node.js", "Go lang"] },
  {
    title: "Framework",
    list: ["React", "Next.js", "React Native", "Express", "Fastify.js"],
  },
  {
    title: "Tool",
    list: [
      "Redux",
      "Redux Toolkit",
      "Git",
      "GCP",
      "Cloud Run",
      "Firebase",
      "CI/CD pipelines",
      "Docker",
      "Docker-compose",
      "Message queues",
    ],
  },
  { title: "Database", list: ["NoSQL", "SQL", "MongoDB", "PostgreSQL"] },
  { title: "Testing", list: ["Cypress", "Unit testing"] },
];
