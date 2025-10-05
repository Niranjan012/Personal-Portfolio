import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Software Engineer",
    company: "INTO Education PVT LTD",
    startDate: "Oct 2024",
    isCurrentJob: true,
    location: "Bengaluru, India",
    description: [
      "Developed and enhanced microsites by implementing new UI components in a shared library (Storybook), improving code reusability and reducing development time.",
      "Delivered features such as dashboard development, authentication workflows, and third-party API integrations, enabling seamless data retrieval and boosting customer engagement.",
      "Optimized frontend performance through lazy loading, bundle minimization, and caching strategies, reducing page load times significantly.",
      "Actively participated in Agile ceremonies (Sprint Planning, Standups, Retrospectives) and collaborated with cross-functional teams to deliver value-driven solutions within deadlines.",
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
      "Contributed to React-based UI development, implementing modular components to accelerate development cycles.",
      "Collaborated with cross-functional teams to develop CMS-focused microservices and mobile app APIs, implementing scalable and resilient solutions using MongoDB, DynamoDB, React, and gRPC.",
      "Actively participated in agile sprints and code reviews while collaborating with cross-functional teams to align with OKRs and deliver sprint goals.",
    ],
  },
  {
    designation: "Software Engineer",
    company: "Eagle Technology Resources Pvt. Ltd",
    startDate: "May 2022",
    endDate: "Dec 2022",
    isCurrentJob: false,
    location: "Remote",
    description: [
      "Extracted sensitive data using advanced Python web scraping techniques, while ensuring compliance with ethical and legal standards for secure data handling.",
      "Analyzed and processed large datasets to detect anomalies and security risks, improving overall data quality by 90% and strengthening threat intelligence capabilities.",
      "Delivered automated data pipelines and reusable scripts, enhancing efficiency of cyber threat monitoring and intelligence reporting.",
    ],
  },
];

export default experiences;
