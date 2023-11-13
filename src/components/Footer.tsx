import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='w-full max-w-3xl mx-auto'>
      <p className='text-center'>&copy; {currentYear} Carlitos.io</p>
    </footer>
  );
}
