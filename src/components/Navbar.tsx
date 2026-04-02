"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LogoImage from "../../public/Logo.png";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react"; // Icon from lucide-react or use any icon

const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full bg-gradient-to-r from-sky-600 to-sky-800 text-white shadow-black drop-shadow-2xl">
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        {/* Logo */}
        <Link href="/">
          <div className="p-0 bg-black rounded-full w-14 h-14 flex items-center justify-center m-1 overflow-hidden">
            <Image src={LogoImage} alt="logo" width={56} height={56} />
          </div>
        </Link>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Nav links (Desktop) */}
        <div className="hidden md:flex space-x-8 text-cyan-100 font-bold">
          <div className="text-button cursor-pointer">MUSIC</div>
          <div
            className="text-button cursor-pointer"
            onClick={() => router.push("/coding")}
          >
            CODING
          </div>
          <div className="text-button cursor-pointer">LITERATURE</div>
        </div>
      </div>

      {/* Nav links (Mobile dropdown) */}
      <AnimatePresence>
      {menuOpen && (
          <motion.div
            className="md:hidden flex flex-col items-start px-6 pb-4 space-y-3 font-bold text-cyan-100"
          >
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.1, delay: 0 }}
              className="text-button cursor-pointer"
            >
              MUSIC
            </motion.div>
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.1, delay: 0.1 }}
              className="text-button cursor-pointer"
              onClick={() => {
                router.push("/coding");
                setMenuOpen(false);
              }}
            >
              CODING
            </motion.div>
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.1, delay: 0.2 }}
              className="text-button cursor-pointer"
            >
              LITERATURE
            </motion.div>
          </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
