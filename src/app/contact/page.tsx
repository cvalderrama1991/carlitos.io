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
      <section className='border-primary-border border w-full max-w-sm mx-auto p-4 my-2 rounded-lg'>
        <p className='text-lg text-center'>Message Me</p>
        <ContactForm />
      </section>
    </div>
  );
}
