import dynamic from "next/dynamic";
import { Suspense } from "react";

const PageBox = dynamic(() => import("@/components/core/PageBox"));
const HomeSection1 = dynamic(() => import("@/components/home/Section1"));
const HomeSection2 = dynamic(() => import("@/components/home/Section2"));
const HomeSection3 = dynamic(() => import("@/components/home/Section3"));
const HomeSection4 = dynamic(() => import("@/components/home/Section4"));
const HomeSection5 = dynamic(() => import("@/components/home/Section5"));
const HomeSection6 = dynamic(() => import("@/components/home/Section6"));

const Home = () => {
  return (
    <PageBox>
      <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading hero...</div>}>
        <HomeSection1 id="hero" />
      </Suspense>
      <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading experiences...</div>}>
        <HomeSection3 id="experiences" />
      </Suspense>
      <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading skills...</div>}>
        <HomeSection4 id="skills" />
      </Suspense>
      <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading projects...</div>}>
        <HomeSection5 id="projects" />
      </Suspense>
      <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading contact...</div>}>
        <HomeSection6 id="contact" />
      </Suspense>
    </PageBox>
  );
};

export default Home;
