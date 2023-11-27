import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Carlitos.io | Projects',
  description: 'Personal Website Portfolio'
};

export default function Projects() {
  return (
    <div className='pt-16 px-4 min-h-screen flex items-center justify-center'>
      <section className='w-full max-w-4xl mx-auto'>
        <h3 className='font-poppins-bold text-center text-xl my-2'>Projects</h3>
        <ul className='flex flex-wrap gap-8'>
          <li className='bg-neutral-500 text-white block h-16 w-48'></li>
          <li className='bg-neutral-500 text-white block h-16 w-48'></li>
          <li className='bg-neutral-500 text-white block h-16 w-48'></li>
          <li className='bg-neutral-500 text-white block h-16 w-48'></li>
          <li className='bg-neutral-500 text-white block h-16 w-48'></li>
          <li className='bg-neutral-500 text-white block h-16 w-48'></li>
          <li className='bg-neutral-500 text-white block h-16 w-48'></li>
        </ul>
      </section>
    </div>
  );
}
