"use client";
import React from "react";
import { VideoText } from "@/components/magicui/video-text";

import SubHeading from "@/components/coding/SubHeading";
import LightningRod from "@/components/coding/LightningRod";
import ExperienceDescriptor from "@/components/coding/contentComponents/ExperienceDescriptor";

import { experiences } from "@/data/codingData";

  
const Experience = () => {
  return (
    <div className="flex flex-col text-white mb-8">
      <div className="flex flex-row mt-8">
        <div className="flex items-stretch">
          <LightningRod />
        </div>
        <div className="lg:pl-12 pl-4 flex flex-col">
        {experiences.map((experience) => (
          <ExperienceDescriptor
            key = {experience.id}
            title = {experience.title}
            company = {experience.company}
            date = {experience.date}
            description = {experience.description}
          />))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
