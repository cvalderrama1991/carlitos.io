import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Carlitos.io | Skills',
  description: 'Personal Website Portfolio'
};

export default function Skills() {
  return (
    <div className='pt-16 px-4 min-h-screen w-full max-w-xl mx-auto'>
      <h2 className='font-poppins-bold text-center text-2xl my-2'>SKILLS</h2>
      <section>
        <p>
          Hello, My name is Carlos and I&apos;m a passionate Full Stack Developer using web technologies to build
          amazing products and focusing on solving problems for different niches and different industries using the
          power of technology.
        </p>
        <p>
          I will love to hear from you. Whether it&apos;s a project, job opportunity, or just a chat. Feel free to
          contact me.
        </p>

        <a
          href='my-resume.pdf'
          target='_blank'
          className='flex items-center justify-center bg-primary-green h-12 w-full md:w-32 my-2 rounded text-white'
        >
          Resume
        </a>
      </section>
      <section>
        <p className='text-center font-poppins-semibold my-4 text-xl'>Languages and Tools</p>
        <ul className='flex flex-wrap gap-4'>
          <li className='bg-secondary-bg text-secondary-text p-2 rounded w-32 font-poppins-medium text-center'>HTML</li>
          <li className='bg-secondary-bg text-secondary-text p-2 rounded w-32 font-poppins-medium text-center'>CSS</li>
          <li className='bg-secondary-bg text-secondary-text p-2 rounded w-32 font-poppins-medium text-center'>
            JavaScript
          </li>
          <li className='bg-secondary-bg text-secondary-text p-2 rounded w-32 font-poppins-medium text-center'>
            Tailwind CSS
          </li>
          <li className='bg-secondary-bg text-secondary-text p-2 rounded w-32 font-poppins-medium text-center'>
            TypeScript
          </li>
          <li className='bg-secondary-bg text-secondary-text p-2 rounded w-32 font-poppins-medium text-center'>
            NodeJS
          </li>
          <li className='bg-secondary-bg text-secondary-text p-2 rounded w-32 font-poppins-medium text-center'>
            ReactJS
          </li>
          <li className='bg-secondary-bg text-secondary-text p-2 rounded w-32 font-poppins-medium text-center'>
            NextJS
          </li>
          <li className='bg-secondary-bg text-secondary-text p-2 rounded w-32 font-poppins-medium text-center'>
            Figma
          </li>
          <li className='bg-secondary-bg text-secondary-text p-2 rounded w-32 font-poppins-medium text-center'>
            AWS Services
          </li>
        </ul>
      </section>
    </div>
  );
}
