"use client";

import { createRef, memo, useCallback, useMemo } from "react";
import { IProjectItem } from "@/types";
import Row from "@/components/core/Row";
import ProjectItem from "./ProjectItem";
import Column from "@/components/core/Column";

const ProjectList = memo(({ projects }: Readonly<{ projects: IProjectItem[] }>) => {
  const carouselRef = createRef<HTMLDivElement>();

  const _handleOnClickPrev = useCallback(() => {
    if (!carouselRef || carouselRef.current === null) return;

    let offset = 400;
    if (window.innerWidth < 480) offset = 280;

    carouselRef.current.scrollLeft -= offset;
  }, [carouselRef]);

  const _handleOnClickNext = useCallback(() => {
    if (!carouselRef || carouselRef.current === null) return;

    let offset = 400;
    if (window.innerWidth < 480) offset = 280;

    carouselRef.current.scrollLeft += offset;
  }, [carouselRef]);

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

export default ProjectList;
