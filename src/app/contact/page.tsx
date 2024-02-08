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
      <div className='bg-primary-green w-full py-2 rounded-lg flex flex-col md:flex-row'>
        <section>
          <p className='text-xl'>Follow Me</p>
          <ul>
            <li>
              <a href='https://github.com/cvalderrama1991?tab=repositories' target='_blank'>
                GitHub
              </a>
              <a href='https://www.linkedin.com/in/carlos-valderrama-b92376240/' target='_blank'>
                LinkedIN
              </a>
              <a href='https://codepen.io/valdeca' target='_blank'>
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
