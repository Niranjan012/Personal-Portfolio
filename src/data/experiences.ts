import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Software Engineer",
    company: "INTO Education PVT LTD",
    startDate: "Oct 2024",
    isCurrentJob: true,
    location: "Bengaluru, India",
    description: [
      "Currently working on developing innovative software solutions.",
      "Contributing to large-scale projects with a focus on performance optimization.",
      "Collaborating closely with cross-functional teams to ensure product quality.",
      "Adhering to clean code practices and modern development techniques.",
    ],
  },
  {
    designation: "Software Developer",
    company: "MagTapp",
    startDate: "Dec 2022",
    endDate: "Jan 2024",
    isCurrentJob: false,
    location: "Bhubaneswar, India",
    description: [
      "Developed over 5 web applications with seamless backend API integration.",
      "Streamlined workflows by eliminating redundant data, boosting efficiency.",
      "Improved website loading time by 80% through image optimization, minimizing main-thread work, and implementing SEO strategies.",
      "Resolved 100+ bugs and conducted thorough code reviews.",
      "Demonstrated expertise in both backend and frontend development.",
    ],
  },
  {
    designation: "Full Stack Development Intern",
    company: "TECHOX LLP",
    startDate: "May 2021",
    endDate: "Jul 2022",
    isCurrentJob: false,
    location: "Remote",
    description: [
      "Revamped and enhanced 3+ mobile apps using Flutter.",
      "Deployed RESTful APIs for seamless app-server integration.",
      "Integrated Google AdMob to effectively monetize applications.",
      "Contributed to boosting app functionality and revenue generation.",
    ],
  },
];

export default experiences;
