import React from 'react';

type Props = {
  nav: boolean;
  setNav: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Hamburger({ setNav, nav }: Props) {
  return (
    <>
      <button
        type='button'
        className='relative h-8 w-8 block md:hidden'
        onClick={() => setNav((prev) => !prev)}
        aria-label='mobile-nav'
      >
        <span
          className={`bg-secondary-bg w-full h-1 absolute left-0 rounded -translate-y-[3px] transition-all ${
            nav ? 'top-[16px] rotate-45' : 'top-2 rotate-0'
          }`}
        ></span>
        <span
          className={`w-full h-1 absolute left-0 rounded -translate-y-[3px] transition-colors ${
            nav ? 'bg-transparent' : 'top-4 bg-secondary-bg'
          }`}
        ></span>
        <span
          className={`bg-secondary-bg w-full h-1 absolute left-0 rounded -translate-y-[3px] transition-all ${
            nav ? 'top-[16px] -rotate-45' : 'top-6 rotate-0'
          }`}
        ></span>
      </button>
    </>
  );
}
