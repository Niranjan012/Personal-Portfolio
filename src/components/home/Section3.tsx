"use client";

import { memo, useMemo } from "react";
import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import SectionTitle from "@/components/common/SectionTitle";
import { Timeline } from "@/components/common/timeline";
import ExperienceItem from "./ui/ExperienceItem";
import experiences from "@/data/experiences";

const HomeSection3 = memo(({ id }: { id: string }) => {
  const timelineData = useMemo(() =>
    experiences.map((exp, i) => ({
      title: exp.startDate + " - " + (exp.endDate || "Present"),
      content: <ExperienceItem key={`experience-${i}`} data={exp} />,
    })), []
  );

  return (
    <ResponsiveBox
      classNames="dark:bg-[var(--bgColor)] bg-[var(--bgColor)] dark:bg-grid-white/[0.1] bg-grid-white/[0.1] items-center justify-center py-12 md:py-16 lg:py-20"
      id={id}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle className="mb-8 md:mb-10">Experiences</SectionTitle>

        <Timeline data={timelineData} />
      </div>
    </ResponsiveBox>
  );
});

HomeSection3.displayName = 'HomeSection3';

export default HomeSection3;
