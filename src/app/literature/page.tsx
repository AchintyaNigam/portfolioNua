"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import StarField from "@/components/StarField";
import NovelSection from "@/components/literature/NovelSection";
import AcademicSection from "@/components/literature/AcademicSection";

export default function LiteraturePage() {
  return (
    <div className="absolute w-screen h-screen bg-black overflow-hidden z-10">
      <div className="flex h-full w-screen bg-black">
       <div className="relative w-full h-full bg-black text-white overflow-x-hidden selection:bg-sky-500/30">
         {/* Background StarField */}
         <div className="fixed inset-0 z-0">
           <StarField />
         </div>
         
         {/* Navbar overlay */}
         <div className="fixed top-0 left-0 right-0 z-50">
           <Navbar />
         </div>

         {/* Main Content */}
         <main className="relative z-10 w-full pt-20 flex flex-col">
           <NovelSection />
           <AcademicSection />
         </main>
       </div>
      </div>
    </div>
  );
}
