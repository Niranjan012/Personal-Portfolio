"use client";

import { memo } from "react";
import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import SectionTitle from "@/components/common/SectionTitle";
import ProjectList from "./ui/ProjectList";
import projects from "@/data/projects";

const HomeSection5 = memo(({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="dark:bg-[var(--bgColor)] bg-[var(--bgColor)] dark:bg-grid-white/[0.1] bg-grid-white/[0.1] items-center justify-center py-12 md:py-16 lg:py-20"
      id={id}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle className="mb-8 md:mb-10">Recent Works</SectionTitle>

        <ProjectList projects={projects} />
      </div>
    </ResponsiveBox>
  );
});

export default HomeSection5;
