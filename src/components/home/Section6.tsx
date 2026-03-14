"use client";

import { memo, useMemo } from "react";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import ConstrainedBox from "@/components/core/constrained-box";
import GridBox from "@/components/core/GridBox";
import Column from "@/components/core/Column";
import SectionTitle from "@/components/common/SectionTitle";
import SocialButton from "./ui/SocialButton";
import socialLinks from "@/data/socialLinks";

const HomeSection6 = memo(({ id }: { id: string }) => {
  const socialButtons = useMemo(() =>
    socialLinks.map((link, index) => (
      <SocialButton
        key={`social-link-${index}`}
        text={link.text}
        icon={link.icon}
        url={link.url}
      />
    )), []
  );

  return (
    <ResponsiveBox
      classNames="dark:bg-[var(--dialogColor)] bg-[var(--dialogColor)] items-center justify-center dark:bg-dot-white/[0.15] bg-dot-white/[0.15] items-center justify-center py-12 md:py-16 lg:py-20"
      id={id}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle className="mb-8 md:mb-10">Get in Touch</SectionTitle>

        <Column classNames="w-full">
          <GridBox classNames="sm:grid-cols-2 w-full mx-auto gap-4 md:gap-6">
            {socialButtons}
          </GridBox>

          <p className="text-center mx-auto text-2xl/6 font-semibold">
            Thank you for visiting.
          </p>
        </Column>
      </div>
    </ResponsiveBox>
  );
});

export default HomeSection6;
