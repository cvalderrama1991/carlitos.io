'use client';

import React from 'react';

export default function ThemeToggle() {
  React.useEffect(() => {
    const rootTag = document.documentElement;
    const theme = localStorage.getItem('theme');

    function setTheme(theme: string) {
      rootTag.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }
    const themeToggle = document.getElementById('theme-toggle') as HTMLInputElement;

    if (theme === 'light') {
      setTheme('light');
      if (!themeToggle.checked) {
        themeToggle.click();
      }
    } else {
      setTheme('dark');
    }

    function handleCheck(event: MouseEvent) {
      let isChecked = (event.target as HTMLInputElement).checked;
      isChecked ? setTheme('light') : setTheme('dark');
    }

    themeToggle.addEventListener('click', handleCheck);

    return () => themeToggle.removeEventListener('click', handleCheck);
  }, []);

  return (
    <>
      <label
        htmlFor='theme-toggle'
        className='relative flex h-8 w-16 cursor-pointer items-center rounded-2xl bg-secondary-bg'
      >
        <input type='checkbox' name='theme-toggle' id='theme-toggle' className='hidden peer' />
        <span className='h-6 w-6 translate-x-1 rounded-xl bg-primary-bg transition-transform peer-checked:translate-x-9'></span>
      </label>
    </>
  );
}
