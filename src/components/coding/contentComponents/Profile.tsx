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
      <div className=' lg:block hidden rounded-xl overflow-hidden w-90 h-90 justify-center items-center border-4 border-blue-300 shadow-photo-glow'>
        <Image src={MeCoding} width={1000} height={1000} alt='Me Coding' className='object-cover'/>
      </div>
    </div>
    <div className='flex lg:pl-18 flex-col lg:basis-2/3 text-white justify-center '>
      <div className="text-3xl font-mono mt-4 flex justify-between lg:w-28 w-32 lg:bg-blue-0 rounded-full  ">
                  <a className="hover:cursor-pointer image-button" href="https://www.instagram.com/achintya_nigam/?hl=en"><FaGithub size={40}/></a>
                  <a className="hover:cursor-pointer image-button" href="https://www.linkedin.com/in/achintya-nigam-5a1558251/"><FaLinkedin size={40}/></a>
                  
          </div>
      <h1 className='lg:text-7xl text-4xl font-bold pt-4'>Achintya Nigam</h1>
      <h2 className='py-4 lg:text-2xl text-xl text-gray-400'>Mumbai, India</h2>
        <ul className="font-mono text-white lg:text-xl text-sm'">
          <li>&#8226; Full-stack development (React, Spring Boot)</li>
          <li>&#8226; API & database design</li>
          <li>&#8226; Performance-focused UI/UX</li>
        </ul>
      <p className='font-mono lg:text-xl text-sm'>
        <br />
        I enjoy taking ideas all the way to completion and turning them into real, working solutions. 
Frontend feels like a creative flow state, while backend development challenges me with deep, logical problem solving.
      </p>
    </div>
  </div>
  );
}

export default Profile;
