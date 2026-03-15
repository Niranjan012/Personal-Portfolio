"use client";

import { memo, useMemo } from "react";
import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import GridBox from "@/components/core/GridBox";
import SectionTitle from "@/components/common/SectionTitle";
import SkillItem from "./ui/SkillItem";
import skills from "@/data/skills";

const HomeSection4 = memo(({ id }: { id: string }) => {
  const skillItems = useMemo(() =>
    skills.map((skill, index) => (
      <SkillItem key={`skill-${index}`} data={skill} />
    )), []
  );

  return (
    <ResponsiveBox
      classNames="dark:bg-[var(--dialogColor)] bg-[var(--dialogColor)] items-center justify-center dark:bg-dot-white/[0.15] bg-dot-white/[0.15] py-12 md:py-16 lg:py-20"
      id={id}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle className="mb-8 md:mb-10">Skills</SectionTitle>

        <GridBox classNames="justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skillItems}
        </GridBox>
      </div>
    </ResponsiveBox>
  );
});

HomeSection4.displayName = 'HomeSection4';

export default HomeSection4;
