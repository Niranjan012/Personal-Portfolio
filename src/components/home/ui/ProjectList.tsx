"use client";

import { memo, useCallback, useMemo, useRef } from "react";
import { IProjectItem } from "@/types";
import Row from "@/components/core/Row";
import ProjectItem from "./ProjectItem";
import Column from "@/components/core/Column";

const ProjectList = memo(({ projects }: Readonly<{ projects: IProjectItem[] }>) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const _handleOnClickPrev = useCallback(() => {
    if (!carouselRef || carouselRef.current === null) return;

    let offset = 400;
    if (window.innerWidth < 480) offset = 280;

    carouselRef.current.scrollLeft -= offset;
  }, []);

  const _handleOnClickNext = useCallback(() => {
    if (!carouselRef || carouselRef.current === null) return;

    let offset = 400;
    if (window.innerWidth < 480) offset = 280;

    carouselRef.current.scrollLeft += offset;
  }, []);

  const projectItems = useMemo(() =>
    projects.map((item, index) => (
      <ProjectItem key={`project-item-${index}`} project={item} />
    )), [projects]
  );

  return (
    <Column classNames="w-full">
      <Row
        classNames="w-full gap-4 overflow-x-auto no-scrollbar"
        elementRef={carouselRef}
      >
        {projectItems}
      </Row>
    </Column>
  );
});

ProjectList.displayName = 'ProjectList';

export default ProjectList;
