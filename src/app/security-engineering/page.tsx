'use client';

import {motion} from 'motion/react'

import Navbar from '@/components/Navbar';
import Content from '@/components/coding/Content';

const Coding = () => {
  return (
  <div className='absolute h-screen w-screen bg-black z-10 overflow-hidden'>
    
      <Navbar />

      <div className='flex h-full w-screen bg-black'>
        <Content />     
      </div>
        
    </div>

      
  );
}

export default Coding;
