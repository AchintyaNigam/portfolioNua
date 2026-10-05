"use client"
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
import { useEffect, useState, useRef } from "react"
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures"
import { type CarouselApi } from "@/components/ui/carousel"
import { projects } from "@/data/codingData";

const Projects = () => {
  const [api, setApi] = useState<CarouselApi>()
  const wheel = useRef(WheelGesturesPlugin())

  useEffect(() => {
    if (!api) return

    // Re-measure after everything (images, fonts) has loaded
    const handleLoad = () => api.reInit()

    if (document.readyState === "complete") {
      handleLoad()
    } else {
      window.addEventListener("load", handleLoad)
      return () => window.removeEventListener("load", handleLoad)
    }
  }, [api])
  return (
    <div className="flex flex-col text-white mb-8 w-full lg:p-18 p-6 lg:overflow-visible">
      <Carousel className="w-full" opts={{ align: "start" }} plugins={[wheel.current]} setApi={setApi}>
        <CarouselContent className="-ml-8 items-stretch">
          {projects.map((project) => (
            <CarouselItem
              key={project.id}
              className="pl-8 lg:h-[70vh] h-[40vh]"
            >
            <Backlight className="h-full w-full rounded-2xl">
                <ProjectCard project={project} />
            </Backlight>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="z-10" />
        <CarouselNext className="z-10"/>
      </Carousel>
    </div>
  );
};

export default Projects;
