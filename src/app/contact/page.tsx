import React from 'react';
import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import ConnectLinks from '@/components/ConnectLinks';

export const metadata: Metadata = {
  title: 'Carlitos.io | Contact',
  description: 'Personal Website Portfolio'
};

export default function Contact() {
  return (
    <div className='pt-16 px-4 min-h-screen'>
      <h2 className='font-poppins-bold text-center text-2xl my-2'>CONTACT</h2>
      <div className='border-primary-border border-2 rounded-md w-full max-w-7xl mx-auto flex flex-wrap md:flex-nowrap gap-4'>
        <ConnectLinks />
        <ContactForm />
      </div>
    </div>
  );
}
