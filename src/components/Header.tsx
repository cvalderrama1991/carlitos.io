import Link from 'next/link';
import React from 'react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className='h-16 w-full border-b border-primary-border'>
      <div className='h-full w-full max-w-7xl mx-auto px-4 flex items-center gap-2'>
        <div className='mr-auto'>
          <Link href='/' className='font-poppins-bold text-xl text-primary-green'>
            Carlitos
          </Link>
        </div>
        <nav>
          <ul className='flex gap-4'>
            <li>
              <Link href='/about'>About</Link>
            </li>
            <li>
              <Link href='/projects'>Projects</Link>
            </li>
            <li>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
