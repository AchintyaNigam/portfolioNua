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
              <div className="w-1/3 lg:flex flex-col hidden text-black text-sm bg-white/40 rounded-xl border border-white/10 p-6">
            <p className="text-black text-sm leading-relaxed pb-2">
              {project.description}
            </p>
            {project.details && (
              <div className="border-t border-white pt-4">
                <p className="text-xs font-bold uppercase tracking-widest text-blue-900 mb-1">
                  Details
                </p>
                <p className="text-black text-sm leading-relaxed">
                  {project.details}
                </p>
              </div>
            )}
              </div>
          {/* Mobile: Learn More dialog */}
          <Dialog>
            <DialogTrigger className="lg:hidden flex items-center justify-center rounded-xl border border-blue-500 bg-blue-500 text-black-300 text-sm font-medium px-4 py-2.5 hover:bg-blue-500/20 transition-colors">
              Learn More
            </DialogTrigger>
            <DialogContent className="bg-[#0d1525] border border-blue-500/30 text-white rounded-2xl">
              <DialogHeader>
                <DialogTitle className="text-white text-lg font-bold">
                  {project.title}
                </DialogTitle>
                <DialogDescription>
                  <div className="space-y-4 mt-2">
                    <p className="text-white/60 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    {project.details && (
                      <div className="border-t border-white/10 pt-4">
                        <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-1">
                          Important Details
                        </p>
                        <p className="text-white/50 text-sm leading-relaxed">
                          {project.details}
                        </p>
                      </div>
                    )}
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
