import LightningRod from "@/components/coding/LightningRod";
import { educationData } from "@/data/codingData";

const Education = () => {
  return (
    <section className="py-16 text-white flex ">
      <div className="flex items-stretch">
        <LightningRod />
      </div>
      <div className="space-y-8">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="
              relative
              lg:pl-8
              pl-4
              w-[82vw]
            "
          >
            <div
              className="
                border
                border-white/10
                rounded-xl
                p-6
                transition-all
                duration-300
              "
            >
              <div className="flex flex-col lg:flex-row lg:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-blue-300">
                    {edu.degree}
                  </h3>

                  <p className="text-lg text-gray-300">
                    {edu.institution}
                  </p>

                  <p className="text-gray-400">
                    {edu.location}
                  </p>
                </div>

                <div className="mt-2 lg:mt-0 text-gray-400">
                  {edu.duration}
                </div>
              </div>

              {edu.grade && (
                <div className="mt-3 inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm">
                  {edu.grade}
                </div>
              )}

              <p className="mt-4 text-gray-300 leading-relaxed">
                {edu.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
