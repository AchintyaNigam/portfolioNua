'use client';

import React from 'react';
// import { motion } from 'motion/react';
// import Spline from '@splinetool/react-spline/next';


import Navbar from '@/components/Navbar';
import Content from '@/components/coding/Content';
import IconCloudDemo from '@/components/IconCloudComponent';

const Coding = () => {

  return (
    <div className='absolute h-screen w-screen bg-black overflow-hidden z-10'>

      <Navbar />
      <div className='flex h-full w-screen bg-black'>
        <Content />

        <div className='z-0 h-full w-[30vw] hidden lg:block'>
            {/* <Spline
              scene="https://prod.spline.design/5znZiJZDH3v7yC4z/scene.splinecode"
              /> */}
                {/* <iframe
                  src="https://my.spline.design/cutecomputerfollowcursor-1131d76a8f84ca1a1834ab81b0a25f2d/"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                ></iframe> */}
                {/* <iframe src='https://my.spline.design/cutecomputerfollowcursor-f38485a2f205d260281f2ab58fe2d2a9/' frameBorder='0' width='100%' height='100%'></iframe> */}

                  <div className='w-full h-full z-10'>
                    <IconCloudDemo />
                  </div>
        </div>
      </div>
        
    </div>

      
  );
}

export default Coding;
