import React, { useState } from "react";
import Image from "next/image";

import DraggablePhoto from "../../../public/draggableMe.png";

const DraggableMe = () => {
  const [position, setPosition] = useState({ x: 100, y: 100 }); // Initial position
  const [isDragging, setIsDragging] = useState(false);
  const [dragCount, setDragCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if(!isDragging && dragCount === 0)
    {
        setDragCount(1);
        setIsDragging(true);
        setIsActive(true);
        // Store the initial mouse position relative to the element)
        setPosition({
            x: e.clientX - e.currentTarget.offsetLeft,
            y: e.clientY - e.currentTarget.offsetTop,
        });
    }
    if(!isDragging && dragCount === 1)
    {
        setIsDragging(true);
        setIsActive(true);
    }

  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    e.preventDefault();

    // Update the position of the element
    const newX = e.clientX - position.x;
    const newY = e.clientY - position.y;

    e.currentTarget.style.left = `${newX}px`;
    e.currentTarget.style.top = `${newY}px`;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsActive(false);
  };

  return (
    <div
        className={` absolute bg-transparent w-64 h-64 lg:flex border-8 border-transparent items-center justify-center rounded-full cursor-grab transition-transform duration-100 hover:border-8 hover:border-solid hover:border-blue-400 
                hidden    
          ${
        isActive ? "scale-125 cursor-grabbing shadow-draggable-me" : ""
      }`}
      onMouseDown={handleMouseDown}
      onMouseMove={isDragging ? handleMouseMove : undefined}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} // In case the mouse leaves the element
      style={{ left: `${position.x}px`, top: `${position.y}px` }} // Initial position styling
    >
      <Image
        src={DraggablePhoto}
        alt="DraggableMe"
        width={500}
        height={500}
        draggable={false} // Prevent default browser dragging of the image
        className="object-fill rounded-full"
      />
    </div>
  );
};

export default DraggableMe;
