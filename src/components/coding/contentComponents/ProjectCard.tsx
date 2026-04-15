import { useState } from 'react'
import SubHeading from "@/components/coding/SubHeading"
import { Backlight } from "@/components/ui/backlight"
import { motion } from "motion/react"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const ProjectCard = ({ project }: { project: any }) => {
  const [isActive, setIsActive] = useState(false);
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsActive(true);
  };
  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsActive(false);
  };
  return (
    <div
      className={`w-full lg:h-[70vh] h-[40vh] mb-10 ${isActive ? "cursor-grabbing" : "cursor-grab" }`} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}
    >
        <div className="absolute inset-0 backface-hidden rounded-2xl p-[2px] bg-gradient-to-r from-blue-800 via-blue-500 to-blue-400 animate-gradient">
          <div className="h-full w-full rounded-2xl p-6 flex flex-col">
            
            {/* Title */}
            <div>
             <h1 className="lg:text-6xl text-2xl text-white font-bold">
              {project.title}
              </h1>
              </div>


            <div className="flex items-center justify-center lg:flex-row flex-col gap-6 mt-4 h-full">
              
              {/* Media */}
            <div
              className="lg:w-2/3"
            >
             <Backlight className="w-full rounded-xl overflow-hidden">
               <div className="w-full lg:aspect-video aspect-video">
                 {project.mediaType === "video" ? (
                  <iframe
                    src={project.mediaSrc}
                    className="w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />                 ) : (
                   <img
                     src={project.mediaSrc}
                     className="w-full h-full object-cover"
                   />
                 )}
               </div>
             </Backlight>
            </div>
              
              {/* Description */}
              <div className="w-1/3 lg:flex hidden items-center text-white/70 text-sm bg-black rounded-xl p-8">
                {project.description}
              </div>
              <Dialog>
              <DialogTrigger className="lg:hidden block">Learn More</DialogTrigger>
                <DialogContent className="bg-blue-700 opacity-90 text-white">
                  <DialogHeader >
                    <DialogTitle >Info</DialogTitle>
                    <DialogDescription>
                      <div className="flex lg:hidden items-center text-white/70 text-sm bg-black rounded-xl p-8">
                        {project.description}
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>

            </div>
          </div>
        </div>

    </div>
  );
};

export default ProjectCard;
