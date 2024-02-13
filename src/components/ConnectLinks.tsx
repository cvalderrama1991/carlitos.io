import React from 'react';

export default function ConnectLinks() {
  return (
    <section className='w-full'>
      <p className='text-xl text-primary-text text-center my-4'>Let&apos;s Connect</p>
      <ul>
        <li>
          <a
            href='https://github.com/cvalderrama1991'
            target='_blank'
            className='bg-primary-green text-secondary-text p-2 my-1 block text-center rounded-sm'
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/carlos-valderrama-b92376240/'
            target='_blank'
            className='bg-primary-green text-secondary-text p-2 my-1 block text-center rounded-sm'
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href='https://codepen.io/valdeca'
            target='_blank'
            className='bg-primary-green text-secondary-text p-2 my-1 block text-center rounded-sm'
          >
            CodePen
          </a>
        </li>
      </ul>
    </section>
  );
}
