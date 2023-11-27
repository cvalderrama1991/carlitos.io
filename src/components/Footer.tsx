import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='w-full border-t border-primary-border'>
      <p className='text-center'>&copy; {currentYear} Carlitos.io</p>
    </footer>
  );
}
