"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo, useCallback, useMemo } from "react";
import Column from "@/components/core/Column";
import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import Row from "@/components/core/Row";
import { CyclingTypewriter } from "@/components/common/CyclingTypewriter";
import socialLinks from "@/data/socialLinks";
import aboutData from "@/data/about";
import { siteConfig } from "@/config/site.config";
import Image from "next/image";
import SectionTitle from "../common/SectionTitle";
import ViewWorkButton from "./ui/ViewWorkButton";
import ConnectButton from "./ui/ConnectButton";
import { motion } from "framer-motion";

const HomeSection1 = memo<React.FC<{ id: string }>>(({ id }: Readonly<{ id: string }>) => {
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  }), []);

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }), []);

  const handleScrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <ResponsiveBox
      classNames="dark:bg-[var(--bgColor)] bg-[var(--bgColor)] dark:bg-grid-white/[0.1] bg-grid-white/[0.1] items-center justify-center relative overflow-hidden rounded-md py-12 md:py-16 lg:py-20"
      id={id}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-20 items-center justify-center">
        <motion.div
          className="w-full items-center justify-center flex flex-col"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="text-center mb-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Hi there, I am{" "}
              <span className="text-[var(--primaryColor)]">
                {siteConfig.name}
              </span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center mb-4">
            <CyclingTypewriter
              words={[
                "Senior Full Stack Engineer",
                ".NET & Azure Developer",
                "Angular & React Specialist",
              ]}
              className="text-xl sm:text-2xl md:text-3xl text-[var(--primaryColor)] font-bold"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="text-center mb-8">
            <p className="text-lg md:text-xl text-[var(--textColorLight)] font-medium">
              I build software that scales
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="gap-4 mt-8 lg:mt-16 flex flex-col sm:flex-row"
          >
            <ViewWorkButton />
            <ConnectButton />
          </motion.div>
        </motion.div>
      </div>

      {/* ----------- ABOUT SECTION ----------- */}
      <section
        id="about"
        className="w-full py-12 md:py-16 lg:py-20 dark:bg-transparent bg-transparent dark:text-[var(--textColor)] text-[var(--textColor)]"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle className="mb-8 md:mb-10" >About</SectionTitle>

        <div className="flex flex-col-reverse items-center md:flex-row">
          {/* Image for larger screens */}
          <div className="hidden sm:flex items-center justify-center flex-1">
            <Image
              src="/images/profilePic.png"
              alt="Profile Picture"
              height={200}
              width={200}
              sizes="192px"
              className="rounded-full object-cover w-48 h-48"
            />
          </div>

          {/* Image for smaller screens */}
          <div className="sm:hidden flex items-center justify-center flex-1 mt-8">
            <Image
              src="/images/profilePic.png"
              alt="Profile Picture"
              height={200}
              width={200}
              sizes="160px"
              objectFit="cover"
              className="rounded-full object-cover w-40 h-40"
            />
          </div>
          {/* Text Area */}
          <div className="w-full mt-10 md:w-[60%] md:mt-0">
            <p className="text-base leading-relaxed space-y-4">
              {aboutData}
            </p>

          </div>
          
        </div>
        </div>
      </section>
    </ResponsiveBox>
  );
});

export default HomeSection1;
HomeSection1.displayName = 'HomeSection1'; // ✅ add this line