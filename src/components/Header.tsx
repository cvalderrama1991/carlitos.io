'use client';
import Link from 'next/link';
import React from 'react';
import ThemeToggle from './ThemeToggle';
import MainNav from './MainNav';

export default function Header() {
  const [nav, setNav] = React.useState(false);

  return (
    <header className='bg-bg-primary h-16 w-full border-b border-primary-border fixed top-0 left-0 z-10'>
      <div className='h-full w-full max-w-7xl mx-auto px-4 flex items-center gap-2'>
        <div className='mr-auto'>
          <Link href='/' className='font-poppins-bold text-xl text-primary-green' onClick={() => setNav(false)}>
            Carlitos
          </Link>
        </div>
        <MainNav setNav={setNav} nav={nav} />
        <ThemeToggle />
      </div>
    </header>
  );
}
