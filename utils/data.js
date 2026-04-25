import NaufalAboutImage from "../public/images/naufal.png";
import NaufalAbout3Image from "../public/images/ganteng.jpg";
import TodoListApp from "../public/images/laptop-todolist.png";
import DashboardMonitoring from "../public/images/monitoring (1).png";
import ExatchMatchMarketing from "../public/images/exacthmatchmarketing.png";
import { FaLinkedin, FaGithub, FaWhatsapp, FaSourcetree , FaReact, FaVuejs, FaGitAlt, FaDatabase  } from "react-icons/fa";
import { SiNextdotjs, SiRedux, SiTailwindcss, SiAntdesign, SiMysql, SiMongodb, SiPostman, SiTypescript, SiJavascript } from 'react-icons/si'
import { BsStars, BsCursorFill } from 'react-icons/bs'



export const dataRole = [
  {
    id: 1,
    title: "Web Developer",
  },
  {
    id: 2,
    title: "Software Engineer",
  },
  {
    id: 3,
    title: "User Interface",
  },
  {
    id: 4,
    title: "User Experience",
  },
];

export const dataRoleDivision = [
  {
    id: 1,
    title: "Front End Developer",
  },
  {
    id: 2,
    title: "Quality Assurance Specialist",
  },
];

export const dataScrollText = [
  {
    id: 1,
    text: "Code Eat Sleep Repeat",
    classStyle: "bg-white text-black",
  },
  {
    id: 2,
    text: "Code Eat Sleep Repeat",
    classStyle: "bg-white text-black",
  },
  {
    id: 3,
    text: "Code Eat Sleep Repeat",
    classStyle: "bg-white text-black",
  },
  {
    id: 4,
    text: "Code Eat Sleep Repeat",
    classStyle: "bg-black text-white",
  },
  {
    id: 5,
    text: "Code Eat Sleep Repeat",
    classStyle: "bg-black text-white",
  },
  {
    id: 6,
    text: "Code Eat Sleep Repeat",
    classStyle: "bg-black text-white",
  },
];

export const dataCarrerJouney = [
   {
    id: 1,
    company: "Zova Technology 🏢",
    position: "Quality Assurance Specialist ( Manual Testing )",
    date: "2025 January - Present",
  },
  {
    id: 2,
    company: "Cretivox Broadcasting Network 🏢",
    position: "Front End Developer",
    date: "2023 Desember - 2024 Mei",
  },
];

export const dataEducationJourney = [
  {
    id : 1 , 
    education : 'SMK SATRIA JAKARTA' , 
    role : 'Computer And Network Engineering',
    date : '2020 - 2023'
  },
  {
    id : 2 , 
    education : 'Terbuka University' , 
    role : 'Information System',
    date : '2023 - Present'
  },
]

export const dataProject = [
  {
    id: 1,
    name: "All Project",
  },
  {
    id: 2,
    name: "Personal Project",
  },
  {
    id: 3,
    name: "Work Project",
  },
];

export const AboutImage = [
  {
    id: 1,
    image: NaufalAboutImage,
  },
  {
    id: 2,
    image: NaufalAbout3Image,
  },
];

export const SkillsItem = [
  {
    FrontendRole: [
      { id: 1, name: 'Next.js', icon: SiNextdotjs },
      { id: 2, name: 'React.js', icon: FaReact },
      { id: 3, name: 'Vue.js', icon: FaVuejs },
      { id: 4, name: 'Redux Toolkit', icon: SiRedux },
      { id: 5, name: 'TailwindCSS', icon: SiTailwindcss },
      { id: 6, name: 'AntDesign', icon: SiAntdesign },
      { id: 7, name: 'CSS', icon: FaDatabase }
    ],

    QualityAssuranceRole: [
      { id: 1, name: 'Postman', icon: SiPostman },
      { id: 2, name: 'Manual Testing' },
      { id: 3, name: 'Jamdev' },
    ],

    Database: [
      { id: 1, name: 'MySQL', icon: SiMysql },
      { id: 2, name: 'MongoDB', icon: SiMongodb },
    ],

    VersionControlSystem: [
      { id: 1, name: 'Git', icon: FaGitAlt },
      { id: 2, name: 'Sourcetree' , icon : FaSourcetree },
    ],

    ProgrammingLanguange: [
      { id: 1, name: 'JavaScript', icon: SiJavascript },
      { id: 2, name: 'TypeScript', icon: SiTypescript },
    ],

    AIAndDevEnvironment: [
      { id: 1, name: 'Claude', icon: BsStars },
      { id: 2, name: 'Cursor', icon: BsCursorFill },
    ],
  }
]


export const dataFooter = [
  {
    id: 1,
    title: "linkedin",
    link: "https://www.linkedin.com/in/naufalaufa19/",
    icon: FaLinkedin,
  },
  {
    id: 2,
    title: "github",
    link: "https://github.com/naufalaufa",
    icon: FaGithub,
  },
  {
    id: 3,
    title: "whatsaap",
    link: "https://wa.me/6285156802452",
    icon: FaWhatsapp,
  },
];

export const projects = [
  {
    id: 1,
    name: "Todo List App",
    status: "Personal Project 🧑‍💻",
    statusLink: true,
    techstack: "",
    image: TodoListApp,
    description:
      "This is a simple Project TodoList Application , Project personal techstack using React.js for the frontend and Toastify to Alert Notification",
    href: "https://naufal-todo-ts.vercel.app/",
  },
  {
    id: 2,
    name: "Dashboard Admin Kuis Tipis Tipis Monitoring",
    status: "Work Project 🏢",
    statusLink: false,
    role: "Front End Developer",
    techstack: "",
    image: DashboardMonitoring,
    description:
      "This is a project internship in Cretivox Broadcasting Network company , A monitoring dashboard built with React.js, React Query, and Tailwind CSS to track user activity in the Kuis Tipis Tipis game. It shows total visitors, completion rate, shared links, and users who didn’t finish the game",
    href: "https://naufal-todo-ts.vercel.app/",
  },
  {
    id: 3,
    name: "Exatch Match Marketing",
    status: "Work Project 🏢",
    statusLink: false,
    techstack: "",
    role: "Quality Assurance Specialist",
    image: ExatchMatchMarketing,
    description:
      "This is a project in Zova Technology , Exact Match Marketing is a web-based platform designed to help businesses and marketing agencies identify and convert website visitors into sales leads in real-time It tracks internet search traffic for specific keywords, names, and URLs, and reveals useful visitor information like names, emails, phone numbers, or addresses ",
    href: "https://naufal-todo-ts.vercel.app/",
  },
];
