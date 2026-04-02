import React from 'react';
import Image from 'next/image';

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import MeCoding from '../../../../public/MeCoding.jpg'
import LightningRod from '@/components/coding/LightningRod';

const Profile = () => {
  return (
    <div className='flex flex-row'>
    <div className='pl-8 pt-8 flex lg:basis-1/3 '>
      <div className=' lg:block hidden rounded-full overflow-hidden w-64 h-64 justify-center items-center m-8 border-4 border-blue-300 shadow-photo-glow'>
        <Image src={MeCoding} width={1000} height={1000} alt='Me Coding' className='object-cover'/>
      </div>
        <div className='lg:hidden block h-full'>
            <LightningRod />
        </div>
    </div>
    <div className='flex flex-col lg:basis-2/3 text-white p-10 justify-center '>
      <div className="text-3xl font-mono mt-4 flex justify-between lg:w-28 w-32 lg:bg-blue-0 rounded-full  ">
                  <a className="hover:cursor-pointer image-button" href="https://www.instagram.com/achintya_nigam/?hl=en"><FaGithub size={40}/></a>
                  <a className="hover:cursor-pointer image-button" href="https://www.linkedin.com/in/achintya-nigam-5a1558251/"><FaLinkedin size={40}/></a>
                  
          </div>
      <h1 className='lg:text-7xl text-4xl font-bold pt-4'>Achintya Nigam</h1>
      <h2 className='py-4 lg:text-2xl text-xl text-gray-400'>Mumbai, India</h2>
      <p className='font-mono lg:text-xl text-sm'>I am a full-stack web developer who enjoys building applications from start to finish. 
        I work on both the backend and frontend, creating seamless experiences for users and ensuring the underlying systems run smoothly.
         My work involves developing APIs, managing databases, and implementing responsive interfaces that are easy to use. I focus on writing clean, efficient code and solving problems with practical solutions.</p>
    </div>
  </div>
  );
}

export default Profile;
