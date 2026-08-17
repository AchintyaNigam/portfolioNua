import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useRouter } from "next/navigation";

import { columns } from "@/data/homeData";

const MainMenu = () => {
const router = useRouter();
const [hoveredColumn, setHoveredColumn] = useState<number | null>(null);

  const getColumnWidth = (columnId: number) => {
    if (hoveredColumn === null) {
      return '33.333%';
    }
    return hoveredColumn === columnId ? '60%' : '20%';
  };

  return (
    <div>
    <div className="lg:block hidden">
      <div className="flex h-screen w-screen overflow-hidden">
        {columns.map((column) => (
          <motion.div
            key={column.id}
            className={`relative flex p-12 items-end overflow-hidden cursor-pointer`}
            initial={false}
            animate={{
              width: getColumnWidth(column.id)
            }}
            transition={{
              duration: 0.5,
              ease: [0.32, 0.72, 0, 1]
            }}
            onMouseEnter={() => setHoveredColumn(column.id)}
            onMouseLeave={() => setHoveredColumn(null)}
            onClick={() => router.push(column.link)}
          >
            {/* Background GIF */}
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${column.gif})` }}
            />
  
            {/* Darkening Overlay */}
            <motion.div
              className="absolute inset-0 bg-black"
              animate={{
                opacity: hoveredColumn === column.id ? 0 : 0.5
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Content */}
            <motion.div
              className="relative z-10 text-white font-outline-2 text-shadow-lg"
              animate={{
                scale: hoveredColumn === column.id ? 1.1 : 1,
                opacity: 1
              }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-4xl font-bold mb-2 tracking-widest">{column.title}</h2>
              <motion.p
                className="text-xl"
                animate={{
                  opacity: hoveredColumn === column.id ? 1 : 0.9
                }}
              >
                {column.subtitle}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
    {/*Mobile View*/}
    <div className="lg:hidden block">
      <div className="flex h-screen w-screen overflow-hidden">
        <div className="flex flex-col w-screen">
          {columns.map(column => (
            <div className = "relative flex h-full w-full items-end p-12 overflow-hidden cursor-pointer border-b-10 border-red-900" onClick={() => router.push(column.link)}>
              <div 
                 className="absolute inset-0 w-full h-full bg-cover bg-center"
                 style={{ backgroundImage: `url(${column.gif})` }}
              />
              <div className="absolute inset-0 bg-black opacity-50">
              </div>
              <div className="relative z-10 text-white text-shadow-lg">
                <h2 className="text-4xl font-bold mb-2 tracking-widest">{column.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default MainMenu;
