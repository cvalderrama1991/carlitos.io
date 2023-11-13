import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className='h-16 w-full border-b border-light-green'>
      <div className='h-full w-full max-w-7xl mx-auto px-4 flex items-center'>
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
      </div>
    </header>
  );
}
