import React from 'react';

const ExperienceDescriptor = ({title, company, date, description} : {title: string, company: string, date: string, description: string}) => {
  return (
    <div className='flex flex-col p-4 ml-8'>
        <h1 className='lg:text-5xl text-2xl font-bold'>{title}</h1>
        <div className='lg:flex hidden flex-row justify-between py-4'>
            <h2 className='lg:text-3xl text-xl font-bold text-slate-400'>{company}</h2>
            <h2 className='lg:text-3xl text-xl font-bold'>{date}</h2>
        </div>
        <div className='lg:hidden flex flex-col justify-between py-4'>
            <h2 className='lg:text-3xl text-xl font-bold text-slate-400'>{company}</h2>
            <h2 className='lg:text-3xl text-xl font-bold'>{date}</h2>
        </div>
        <p className='font-mono lg:text-xl text-sm'>{description}</p>
    </div>
  );
}

export default ExperienceDescriptor;
