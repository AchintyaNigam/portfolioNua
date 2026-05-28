import React from 'react';
import Image from 'next/image';


import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import MeCoding from '../../../../public/MeCoding.jpg'
import LightningRod from '@/components/coding/LightningRod';

const Profile = () => {
  return (
    <div className='flex flex-row mb-26 items-center'>
    <div className='pt-8 flex'>
      <div className=' lg:block hidden rounded-xl overflow-hidden w-90 h-full justify-center items-center border-4 border-blue-300 shadow-photo-glow'>
        <Image src={MeCoding} width={1000} height={1000} alt='Me Coding' className='object-cover'/>
      </div>
    </div>
    <div className='flex lg:pl-18 flex-col text-white justify-center '>
      <div className="text-3xl font-mono mt-4 flex justify-between lg:w-28 w-32 lg:bg-blue-0 rounded-full  ">
                  <a className="hover:cursor-pointer image-button" href="https://www.instagram.com/achintya_nigam/?hl=en"><FaGithub size={40}/></a>
                  <a className="hover:cursor-pointer image-button" href="https://www.linkedin.com/in/achintya-nigam-5a1558251/"><FaLinkedin size={40}/></a>
                  
          </div>
      <h1 className='lg:text-7xl text-4xl font-bold pt-4'>Achintya Nigam</h1>
      <h2 className='py-4 lg:text-2xl text-xl text-gray-400'>Mumbai, India</h2>
        <ul className="font-mono text-white lg:text-xl text-sm'">
          <li>&#8226; Cybersecurity researcher and developer</li>
          <li>&#8226; IEEE Access published, post-quantum cryptography</li>
          <li>&#8226; Cloud security, SOC operations, full-stack development</li>
        </ul>
      <p className='font-mono lg:text-xl text-sm'>
        <br />
        I'm a cybersecurity professional heading to MTU Cork for my MSc, with a background that spans security research, software development, and hands-on threat detection. During my bachelors, I published research on post-quantum cryptography in IEEE Access and presented at Kaigi 25 hosted at IIT Bombay, work exploring how next-generation encryption can run efficiently on constrained devices. I've also worked as a developer at a Xlancr, which gave me a real appreciation for how systems are built and, more importantly, how they fail. These days I'm focused on cloud security and defensive operations, and I believe the best security professionals understand both how to build things and how to break them.      </p>
    </div>
  </div>
  );
}

export default Profile;
