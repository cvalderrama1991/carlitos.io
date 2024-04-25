import React from 'react';

type Props = {
  title: string;
  technologies: string;
  link: string;
  website: string;
};

export default function Card({ title, technologies, link, website }: Props) {
  const items = technologies.split(', ');

  return (
    <li className='border-primary-border border-4 rounded p-4 w-full max-w-xs'>
      <h4 className='font-poppins-semibold text-xl'>{title}</h4>
      <figure>
        <figcaption>Technologies used:</figcaption>
        <ul className='list-disc list-inside'>
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </figure>
      <a href={link} className='text-primary-green' target='_blank'>
        {website}
      </a>
    </li>
  );
}
