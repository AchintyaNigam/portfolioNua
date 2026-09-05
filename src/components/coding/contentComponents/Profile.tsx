import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { FaGithub, FaLinkedin, FaDownload, FaEnvelope } from "react-icons/fa";

import MeCoding from '../../../../public/MeCoding.jpg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2 },
  },
};

const Profile = () => {
  return (
    <motion.div 
      className='flex flex-row mb-26'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >

      {/* Profile Image */}
      <motion.div variants={itemVariants} className=''>
        <div className='lg:block hidden rounded-xl overflow-hidden w-90 h-full object-fill border-4 border-blue-300 shadow-photo-glow'>
          <Image
            src={MeCoding}
            width={1000}
            height={1000}
            alt='Me Coding'
            className='object-cover h-full w-full'
          />
        </div>
      </motion.div>

      {/* Content */}
      <div className='flex lg:pl-18 flex-col text-white justify-center'>
        {/*Social Links Mobile */}
        <motion.div variants={itemVariants} className="flex gap-5 mt-6 text-4xl lg:hidden block">
          <a
            href="https://www.linkedin.com/in/achintya-nigam-5a1558251/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/AchintyaNigam"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <FaGithub />
          </a>
        </motion.div>
        
        <motion.div variants={itemVariants} className='flex gap-5 justify-between'>
          <h1 className='lg:text-5xl text-3xl font-bold pt-4'>
            Achintya Nigam
          </h1>
          {/* Social Links Desktop */}
          <div className=" gap-5 mt-6 text-5xl lg:flex hidden">
            <a
              href="https://www.linkedin.com/in/achintya-nigam-5a1558251/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/AchintyaNigam"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <FaGithub />
            </a>
          </div>
        </motion.div>

        <motion.h2 variants={itemVariants} className='py-4 lg:text-2xl text-xl text-gray-400'>
          Mumbai, India
        </motion.h2>
  
        {/* Quick Stats */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-6 lg:block hidden">
          <span className="mr-2 px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm">
            IEEE Access Published
          </span>

          <span className="mr-2 px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm">
            Post-Quantum Cryptography
          </span>

          <span className="mr-2 px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm">
            Cloud Security
          </span>
        </motion.div>

        <motion.ul variants={itemVariants} className="font-mono text-white lg:text-xl text-sm">
          <li>&#8226; Cryptography researcher and developer</li>
          <li>&#8226; IEEE Access published, post-quantum cryptography</li>
          <li>&#8226; Cloud security, SOC operations, full-stack development</li>
        </motion.ul>

        <motion.p variants={itemVariants} className='font-mono lg:text-xl text-sm leading-relaxed'>
          <br />
          I'm a cryptography researcher and full-stack developer heading to
          MTU Cork for my MSc, with a background that spans security research,
          software development, and hands-on threat detection.

          During my bachelors, I published research on post-quantum cryptography
          in IEEE Access and presented at Kaigi 25 hosted at IIT Bombay, work
          exploring how next-generation encryption can run efficiently on
          constrained devices.

          I've also worked as a developer at Xlancr, which gave me a real
          appreciation for how systems are built and, more importantly, how
          they fail.

          These days I'm focused on cloud security and defensive operations,
          and I believe the best security professionals understand both how
          to build things and how to break them.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-8">

          <a
            href="mailto:achintyanigam2@example.com"
            className="
              flex items-center gap-3
              justify-center
              lg:w-60
              w-full
              px-6 py-3
              rounded-xl
              bg-blue-500
              shadow-photo-glow
              hover:scale-105
              transition-all duration-300
              font-semibold
            "
          >
            <FaEnvelope />
            Contact Me
          </a>

          <a
            href="/resume.pdf"
            download
            className="
              flex items-center gap-3
              justify-center
              lg:w-60
              w-full
              px-6 py-3
              rounded-xl
              border border-white/20
              bg-white/5
              backdrop-blur-sm
              hover:bg-white/10
              hover:scale-105
              transition-all duration-300
              font-semibold
            "
          >
            <FaDownload />
            Download Resume
          </a>

        </motion.div>

      </div>

    </motion.div>
  );
};

export default Profile;

