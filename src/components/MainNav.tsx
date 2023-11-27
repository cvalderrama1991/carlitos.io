import React from 'react';
import Link from 'next/link';
import Hamburger from './Hamburger';

type Props = {
  setNav: React.Dispatch<React.SetStateAction<boolean>>;
  nav: boolean;
};

export default function MainNav({ setNav, nav }: Props) {
  return (
    <nav>
      <Hamburger setNav={setNav} nav={nav} />
      <ul
        className={`bg-primary-bg w-full flex flex-col absolute left-0 transition-transform md:gap-2 md:flex-row md:relative md:translate-y-0 ${
          nav ? 'translate-y-4 gap-0' : '-translate-y-48'
        }`}
      >
        <li>
          <Link
            href='/skills'
            className={`p-2 ${nav && 'border-b border-primary-border w-full flex items-center justify-center h-16'}`}
            onClick={() => setNav(false)}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            href='/projects'
            className={`p-2 ${nav && 'border-b border-primary-border w-full flex items-center justify-center h-16'}`}
            onClick={() => setNav(false)}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href='/contact'
            className={`p-2 ${nav && 'border-b border-primary-border w-full flex items-center justify-center h-16'}`}
            onClick={() => setNav(false)}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
