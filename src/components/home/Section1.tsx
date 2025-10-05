import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Column from "@/components/core/Column";
import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import Row from "@/components/core/Row";
import { FlipWords } from "@/components/common/FlipWords";
import socialLinks from "@/data/socialLinks";
import TalkButton from "./ui/TalkButton";
import Image from "next/image";
import profilePic from "@/public/images/profilePic.jpg";
import ResumeButton from "./ui/ResumeButton";
import SectionTitle from "../common/SectionTitle";

const aboutData = [
  "Software Engineer with 2+ years of experience in end-to-end full-stack development, delivering scalable and high-performance enterprise applications. Skilled in frontend frameworks (Angular, React, Next.js), backend systems (.NET Core, Java), and Azure cloud services (DevOps, Key Vault, Storage Account). Experienced in API development and integration, system performance optimization, reusable UI component design, and legacy modernization. Adept at CI/CD automation and Agile collaboration to deliver secure, timely, and impactful solutions."
];

const HomeSection1 = ({ id }: Readonly<{ id: string }>) => {
  return (
    <ResponsiveBox
      classNames="dark:bg-[var(--bgColor)] bg-[var(--bgColor)] dark:bg-grid-white/[0.1] bg-grid-white/[0.1] min-h-screen items-center justify-center relative overflow-hidden rounded-md"
      id={id}
    >
      <ConstrainedBox classNames="px-4 py-8 pt-16 z-20 items-center justify-center">
        <Column classNames="w-full items-center justify-center">
          <div className="inline-flex items-center">
            <p className="text-2xl/normal sm:text-3xl/normal md:text-5xl/normal lg:text-6xl/normal xl:text-7xl/normal dark:text-[var(--textColor)] text-[var(--textColor)] font-bold text-center">
              Hi there, I am
            </p>
            <FlipWords
              words={["Niranjan Panigrahi.", "a Software Engineer."]}
              className="text-2xl/normal sm:text-3xl/normal md:text-5xl/normal lg:text-6xl/normal xl:text-7xl/normal dark:text-[var(--primaryColor)] text-[var(--primaryColor)] font-bold text-center"
            />
          </div>
          <p className="text-sm/normal md:text-base/normal dark:text-[var(--textColorLight)] text-[var(--textColorLight)]">
            Full Stack Developer 💻
          </p>

          <div className="gap-4 mt-8 lg:mt-16 flex flex-col md:flex-row">
            <TalkButton />
          </div>
        </Column>
      </ConstrainedBox>

      {/* ----------- ABOUT SECTION ----------- */}
      <section
        id="about"
        className="w-full py-16 px-10 md:py-20 lg:px-20 dark:bg-transparent bg-transparent dark:text-[var(--textColor)] text-[var(--textColor)]"
      >
        <SectionTitle className="mb-16" >About</SectionTitle>

        <div className="flex flex-col-reverse items-center md:flex-row">
          {/* Image for larger screens */}
          <div className="hidden sm:flex items-center justify-center flex-1">
            <Image
              src="/images/profilePic.jpg"
              alt="Profile Picture"
              height={200}
              width={200}
              className="rounded-full object-cover w-48 h-48"
            />
          </div>

          {/* Image for smaller screens */}
          <div className="sm:hidden flex items-center justify-center flex-1 mt-8">
            <Image
              src="/images/profilePic.jpg"
              alt="Profile Picture"
              height={200}
              width={200}
              objectFit="cover"
              className="rounded-full object-cover w-40 h-40"
            />
          </div>
          {/* Text Area */}
          <div className="w-full mt-10 md:w-[60%] md:mt-0">
            <p className="text-base sm:text-lg text-[var(--textColorLight)] leading-relaxed">
              {aboutData}
            </p>

          </div>
          
        </div>
      </section>
    </ResponsiveBox>
  );
};

export default HomeSection1;
