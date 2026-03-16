import React from "react";
import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import SectionTitle from "@/components/common/SectionTitle";
import { HoverLayoutGrid } from "@/components/common/HoverLayoutGrid";
import services from "@/data/services";

const HomeSection2: React.FC<{ id: string }> = ({ id }) => {
  return (
    <ResponsiveBox
      classNames="dark:bg-[var(--dialogColor)] bg-[var(--dialogColor)] items-center justify-center dark:bg-dot-white/[0.15] bg-dot-white/[0.15] rounded-md py-12 md:py-16 lg:py-20"
      id={id}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <SectionTitle className="mb-8 md:mb-10">Services</SectionTitle>
        <HoverLayoutGrid cards={services} />
      </div>
    </ResponsiveBox>
  );
};

export default HomeSection2;
