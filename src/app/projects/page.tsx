import React from 'react';
import { Metadata } from 'next';
import Card from '@/components/Card';

export const metadata: Metadata = {
  title: 'Carlitos.io | Projects',
  description: 'Personal Website Portfolio',
};

export default function Projects() {
  return (
    <div className='pt-16 px-4 min-h-screen w-full max-w-7xl mx-auto'>
      <section>
        <h2 className='font-poppins-bold text-center text-2xl my-2'>
          PROJECTS
        </h2>
        <ul className='flex flex-wrap gap-8 justify-center'>
          <Card
            title='Carlitos (My Portfolio)'
            technologies='NextJS, ReactJS, NodeJS, TailwindCSS, AWS Amplify, AWS Lambda, AWS API Gateway, AWS Simple Email Service, Google Domain, Figma'
            link='https://carlitos.io/'
            website='www.carlitos.io'
          />
          <Card
            title='Southern Ridge Electric'
            technologies='ReactJS, Google Domain, AWS Route 53, AWS S3 Bucket, AWS Cloudfront, AWS Lambda, AWS API Gateway, AWS Simple Email Service'
            link='https://southernridgeelectric.com/'
            website='www.southernridgeelectric.com'
          />
          <Card
            title='ReactATX (Coming soon)'
            technologies='ReactJS, NextJS, CSS, PostgreSQL, Docker'
            link='https://carlitos.io/projects'
            website='www.reactatx.com'
          />
        </ul>
      </section>
      <section>
        <h3 className='font-poppins-bold text-center text-xl my-2'>
          My other projects
        </h3>
        <ul className='max-w-md mx-auto'>
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
              href='https://codepen.io/valdeca'
              target='_blank'
              className='bg-primary-green text-secondary-text p-2 my-1 block text-center rounded-sm'
            >
              CodePen
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
