import React from 'react';
import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Carlitos.io | Contact',
  description: 'Personal Website Portfolio',
};

export default function Contact() {
  return (
    <div className='pt-16 px-4 min-h-screen w-full max-w-4xl mx-auto'>
      <h2 className='font-poppins-bold text-center text-2xl my-2'>CONTACT</h2>
      <ContactForm />
      <section>
        <p className='text-xl text-primary-text text-center my-4'>
          Or Lets Connect on
        </p>
        <a
          href='https://www.linkedin.com/in/carlos-valderrama-b92376240/'
          target='_blank'
          className='bg-primary-green text-secondary-text p-2 my-1 block text-center rounded-sm'
        >
          LinkedIn
        </a>
      </section>
    </div>
  );
}
