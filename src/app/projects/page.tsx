import React from 'react';
import { Metadata } from 'next';
import Card from '@/components/Card';

export const metadata: Metadata = {
  title: 'Carlitos.io | Projects',
  description: 'Personal Website Portfolio'
};

export default function Projects() {
  return (
    <div className='pt-16 px-4 min-h-screen flex items-center justify-center'>
      <section className='w-full max-w-4xl mx-auto'>
        <h3 className='font-poppins-bold text-center text-2xl my-2'>PROJECTS</h3>
        <ul className='flex flex-wrap gap-8'>
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
        </ul>
      </section>
    </div>
  );
}
