// src/app/page.tsx
import dynamic from 'next/dynamic';

// AFTER — dynamic imports load only when needed
const HomeSection1 = dynamic(() => import('@/components/home/Section1'), {
  loading: () => <SectionSkeleton />,
});
const HomeSection2 = dynamic(() => import('@/components/home/Section2'), {
  loading: () => <SectionSkeleton />,
});
const HomeSection3 = dynamic(() => import('@/components/home/Section3'), {
  loading: () => <SectionSkeleton />,
});
const HomeSection4 = dynamic(() => import('@/components/home/Section4'), {
  loading: () => <SectionSkeleton />,
});
const HomeSection5 = dynamic(() => import('@/components/home/Section5'), {
  loading: () => <SectionSkeleton />,
});
const HomeSection6 = dynamic(() => import('@/components/home/Section6'), {
  loading: () => <SectionSkeleton />,
});

// Reusable skeleton
const SectionSkeleton = () => (
  <div className="w-full h-48 bg-gray-100 animate-pulse rounded" />
);
SectionSkeleton.displayName = 'SectionSkeleton';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center w-full">
      <HomeSection1 id="home" />
      <HomeSection2 id="about" />
      <HomeSection3 id="experiences" />
      <HomeSection4 id="skills" />
      <HomeSection5 id="projects" />
      <HomeSection6 id="contact" />
    </main>
  );
}