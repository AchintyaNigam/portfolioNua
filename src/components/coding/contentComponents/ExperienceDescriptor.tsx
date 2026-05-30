import React from 'react';

interface ExperienceDescriptorProps {
  title: string;
  company: string;
  date: string;
  description: string;
}

const ExperienceDescriptor = ({
  title,
  company,
  date,
  description,
}: ExperienceDescriptorProps) => {
  return (
    <div
      className="
        p-6
        rounded-2xl
        hover:shadow-blue-500/10
        transition-all
        duration-300
      "
    >
      {/* Title */}
      <h1 className="text-2xl lg:text-3xl font-bold text-blue-300">
        {title}
      </h1>

      {/* Company + Date */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-3 gap-2">
        <h2 className="text-lg lg:text-xl font-semibold text-slate-300">
          {company}
        </h2>

        <span
          className="
            w-fit
            px-3 py-1
            rounded-full
            text-sm
            border
            border-blue-400/20
            bg-blue-500/10
            text-blue-300
          "
        >
          {date}
        </span>
      </div>

      {/* Description */}
      <p className="mt-5 text-sm lg:text-lg font-mono text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ExperienceDescriptor;
