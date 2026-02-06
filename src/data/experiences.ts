import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Software Engineer",
    company: "INTO University Partnerships",
    startDate: "Oct 2024",
    isCurrentJob: true,
    location: "Bengaluru, India",
    description: [
      "Led frontend modernization initiatives by upgrading Angular applications from v16 to v21, alongside Next.js 16, React 19, and Node.js upgrades, improving maintainability, performance, and long-term scalability of customer-facing B2B and B2C platforms.",
      "Designed and developed scalable RESTful APIs using ASP.NET Core, implementing authentication and authorization mechanisms to securely support multi-tenant business workflows across global education partners and direct student users.",
      "Built modular, component-driven Angular applications using TypeScript, RxJS, Reactive Forms, HTTP services, and NgRx (state management), ensuring high performance and consistent user experience across complex business flows.",
      "Implemented CI/CD pipelines using Azure DevOps, integrating Azure Repos, automated builds, and deployments, enabling faster release cycles and improved reliability across development and production environments.",
      "Worked extensively with Azure Cosmos DB (NoSQL) to design efficient data models and queries, optimizing API performance through caching strategies and reduced latency for high-traffic application endpoints.",
    ],
  },
  {
    designation: "Software Developer",
    company: "MagTapp",
    startDate: "Dec 2022",
    endDate: "Aug 2024",
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
