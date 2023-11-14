import Link from 'next/link';
import React from 'react';

export default function About() {
  return (
    <div>
      <h2 className='font-poppins-bold text-center text-xl'>About</h2>
      <section>
        <p>
          Hello, My name is Carlos Valderrama and I&apos;m a passionate Front End Web Developer using web technologies
          to build amazing products and focusing on solving problems for different niches and different industries using
          the power of technology.
        </p>
        <p>
          I will love to hear from you. Whether it&apos;s a project, job opportunity, or just a chat. Feel free to
          contact me.
        </p>
        <Link href='/about/resume'>Resume</Link>
      </section>
      <section>
        <h3>My Languages</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>ReactJS</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>NodeJS</li>
          <li>NextJS</li>
        </ul>
        <ul>
          <li>Figma</li>
          <li>Figma</li>
          <li>Figma</li>
          <li>Figma</li>
          <li>Figma</li>
        </ul>
      </section>
    </div>
  );
}
