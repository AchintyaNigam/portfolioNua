import { VideoText } from "@/components/magicui/video-text";
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
const Projects = () => {
  const projects = [
  {
    id: "proj1",
    title: "Dilithium on RP2350A",
    description: "This work demonstrates the feasibility of deploying CRYSTALS-Dilithium on resource-constrained dual-core microcontrollers using a lightweight multicore strategy on the RP2350A, achieving consistent speedups of up to 1.15× across operations while maintaining deterministic execution and strong security guarantees. Despite modest gains, the results validate coarse-grained parallelism under tight constraints, with secure zeroization adding no measurable overhead, and energy savings of ~5–13% driven purely by reduced runtime.",
    details: "Achieved significant speedup in verification using hardware-aware optimizations.",
    mediaType: "video", // "video" | "image"
    mediaSrc: "https://www.youtube.com/embed/mkNXWcg6hvk?si=H86NRIkKjlxulpSh",
  },
  {
    id: "proj2",
    title: "asda adam",
    description: "asdasdasdastemasddasdasdasjnksel aije iegvnaw",
    details: "asdsakdjaskleuwaknl",
    mediaType: "image",
    mediaSrc: "/metallicTexture.png",
  },
];
return (
    <div className="flex flex-col text-white mb-8 w-full lg:p-18 p-8 overflow-hidden">
      <Carousel className="w-full h-full">
        <CarouselContent >
          {projects.map((project) => (
            <CarouselItem className="cursor-grab " key={project.id}>
            <Backlight>
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
