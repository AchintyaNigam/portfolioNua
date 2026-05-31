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
      details: "This project was made as part of my final year project for my bachelors,",
      mediaType: "video",
      mediaSrc: "https://www.youtube.com/embed/mkNXWcg6hvk?si=H86NRIkKjlxulpSh",
      link: "https://github.com/AchintyaNigam/DilithiumMulticore/tree/master/Version2"
    },
    {
      id: "proj2",
      title: "Kyber on RP2350A",
      description: "This project implements and evaluates single-core and multicore variants of Kyber on the Raspberry Pi Pico 2 W (RP2350A), with emphasis on runtime and energy efficiency. Across parameter sets, multicore key generation reduces runtime by approximately 26-28%, while encapsulation and decapsulation exhibit more modest improvements of up to 3-4%, with minor variance across security levels and sampling sizes. Power measurements indicate that total energy per operation decreases by 8.9-10.9%, despite a 1.3× increase in transient peak current, resulting in an overall energy-efficiency improvement of approximately 17% when normalized per unit time.",
      details: "This project was made as part of the final year project for my bachelors.",
      mediaType: "image",
      mediaSrc: "/ProjectPhotos/KyberFlow.png",
      link: "https://ieeexplore.ieee.org/document/11456492"
    },
        {
      id: "proj3",
      title: "BotaniQ",
      description: "botaniQ is an AI-powered, IoT-driven plant monitoring system designed for real-time tracking of soil health, temperature, humidity, and light exposure. Whether you're an urban gardener, a farmer, or a tech enthusiast, botaniQ ensures your plants thrive with automated insights and remote monitoring.",
      details: "This project was made for DEVSOC'25, the largest hacakthon in VIT. The team won the Environment and Sustainbility track prize.",
      mediaType: "image",
      mediaSrc: "/ProjectPhotos/BotaniQ.png",
      link: "https://github.com/SoumilB7/botaniQ"
    },
  ];

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
