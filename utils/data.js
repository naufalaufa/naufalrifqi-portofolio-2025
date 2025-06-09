import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import NaufalAboutImage from "../public/images/naufal.png";
import NaufalAbout2Image from "../public/images/w.jpg";
import NaufalAbout3Image from "../public/images/ganteng.jpg";
import NaufalAbout4Image from "../public/images/me.jpg";
import NaufalAbout5Image from "../public/images/naufalrifqi-1.jpg";
import NaufalAbout6Image from "../public/images/naufalculture.jpg";
import NaufalAbout7Image from "../public/images/naufal-pap.jpg";
import TodoListApp from "../public/images/laptop-todolist.png";
import DashboardMonitoring from "../public/images/monitoring (1).png";
import ExatchMatchMarketing from "../public/images/exacthmatchmarketing.png";
import LandingPageInternship from "../public/images/landing-page-internship.png";
import CretivoxCompany from "../public/images/Cretivox Intern.png";
// data for navbar

export const data = [
  {
    id: "home",
    title: "Home",
    path: "/",
  },
  {
    id: "blog",
    title: "Blog",
    path: "/blog",
  },
];

// data for role main
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

// data scroll text
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
    company: "Cretivox Broadcasting Network",
    position: "Front End Developer",
    date: "2023 Desember - 2024 Mei",
  },
  {
    id: 2,
    company: "Zova Technology",
    position: "Quality Assurance Specialist ( Manual Testing )",
    date: "2024 Desember - Present",
  },
];

// data for project
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
    image: NaufalAbout2Image,
  },
  {
    id: 3,
    image: NaufalAbout3Image,
  },
  {
    id: 4,
    image: NaufalAbout4Image,
  },
  {
    id: 5,
    image: NaufalAbout5Image,
  },
  {
    id: 6,
    image: NaufalAbout6Image,
  },
  {
    id: 7,
    image: NaufalAbout7Image,
  },
];

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
    status: "Personal Project",
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
    status: "Work Project",
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
    status: "Work Project",
    statusLink: false,
    techstack: "",
    role: "Quality Assurance Specialist",
    image: ExatchMatchMarketing,
    description:
      "This is a project in Zova Technology , Exact Match Marketing is a web-based platform designed to help businesses and marketing agencies identify and convert website visitors into sales leads in real-time It tracks internet search traffic for specific keywords, names, and URLs, and reveals useful visitor information like names, emails, phone numbers, or addresses ",
    href: "https://naufal-todo-ts.vercel.app/",
  },
  {
    id: 4,
    name: "Landing Page Internship",
    status: "Work Project",
    statusLink: true,
    techstack: "",
    role: "Front End Developer ",
    image: LandingPageInternship,
    description:
      "This is a project in Cretivox Broadcasting Network Company, landing page website from design to code , using techstack such as React.js for the frontend and GSAP for animation.",
    href: "https://batchse.vercel.app/",
  },
  {
    id: 5,
    name: "Cretivox Company Landing Page",
    status: "Work Project ",
    statusLink: true,
    techstack: "",
    role: "Front End Developer",
    image: CretivoxCompany,
    description:
      "This is a project in Cretivox Broadcasting Network Company, project internship landing page website , slicing from design to code FIGMA using techstack such as React.js for the frontend and GSAP for animation.",
    href: "https://cretivox-company.vercel.app/",
  },
];
