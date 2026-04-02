import React from "react";
import { VideoText } from "@/components/magicui/video-text";

const Projects = () => {
  return (
    <div className="flex flex-col text-white p-10">
      <h1 className="lg:text-8xl text-6xl text-white font-bold pb-0">
        Projects
        <div className="lg:block hidden ">
          <h1 className="relative lg:h-[10vh] h-[10vh] w-full overflow-visible lg:-ml-96 lg:-mt-12 -ml-24 -mt-8">
            <VideoText
              src="videos/abstractBlue.mp4"
              fontSize={12}
              dominantBaseline="none"
            >
              ________
            </VideoText>
          </h1>
        </div>
      </h1>
    </div>
  );
};

export default Projects;
