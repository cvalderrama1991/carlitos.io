import React from 'react';
import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Carlitos.io | Contact',
  description: 'Personal Website Portfolio'
};

export default function Contact() {
  return (
    <div className='pt-16 px-4 min-h-screen flex items-center justify-center'>
      <div className='w-full max-w-xl mx-auto border-2 border-primary-border py-2 rounded-lg flex flex-col md:flex-row'>
        <section className='max-w-sm mx-auto w-full p-4'>
          <p className='text-xl text-primary-text text-center'>Follow Me</p>
          <ul>
            <li>
              <a
                href='https://github.com/cvalderrama1991'
                target='_blank'
                className='bg-primary-green text-secondary-text p-2 mt-1 mx-2 block text-center rounded-md'
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/carlos-valderrama-b92376240/'
                target='_blank'
                className='bg-primary-green text-secondary-text p-2 mt-1 mx-2 block text-center rounded-md'
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href='https://codepen.io/valdeca'
                target='_blank'
                className='bg-primary-green text-secondary-text p-2 mt-1 mx-2 block text-center rounded-md'
              >
                CodePen
              </a>
            </li>
          </ul>
        </section>
        <ContactForm />
      </div>
    </div>
  );
}
