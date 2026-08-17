import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ProjectCard from "@/components/coding/contentComponents/ProjectCard"
import { Backlight } from "@/components/ui/backlight"
import SubHeading from "@/components/coding/SubHeading";

import { projects } from "@/data/codingData";

const Projects = () => {

  return (
    <div className="flex flex-col text-white mb-8 w-full lg:p-18 p-6 lg:overflow-visible">
      <Carousel className="w-full">
        <CarouselContent className="items-stretch">
          {projects.map((project) => (
            <CarouselItem
              key={project.id}
              className="not-first:ml-8 lg:h-[70vh] h-[40vh]"
            >
              <Backlight className="h-full w-full rounded-2xl">
                <ProjectCard project={project} />
              </Backlight>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Projects;
