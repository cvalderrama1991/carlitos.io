'use client';

import React from 'react';

export default function Contact() {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (formData.firstName.trim() === '') {
      setErrors((prev) => ({ ...prev, firstName: 'First name cannot be blank!' }));
    } else {
      setErrors((prev) => ({ ...prev, firstName: '' }));
    }
    if (formData.lastName.trim() === '') {
      setErrors((prev) => ({ ...prev, lastName: 'Last name cannot be blank!' }));
    } else {
      setErrors((prev) => ({ ...prev, lastName: '' }));
    }
    if (formData.email.trim() === '') {
      setErrors((prev) => ({ ...prev, email: 'Email cannot be blank!' }));
    } else {
      setErrors((prev) => ({ ...prev, email: '' }));
    }
    if (formData.message.trim() === '') {
      setErrors((prev) => ({ ...prev, message: 'Message cannot be blank!' }));
    } else {
      setErrors((prev) => ({ ...prev, message: '' }));
    }
  }

  return (
    <div>
      <section className='border-primary-border border w-full max-w-xs mx-auto p-2 my-2 rounded-lg'>
        <p className='text-lg text-center'>Message Me</p>
        <form action='' onSubmit={handleSubmit}>
          <div className='mb-1'>
            <label htmlFor='firstName' className='block mb-1'>
              First Name
            </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={formData.firstName}
              onChange={handleChange}
              onInput={handleInput}
              className='h-8 w-full px-1 text-black rounded-sm border border-black'
              placeholder='First Name...'
            />
            <p className='text-red-500 block text-center mt-1'>{errors.firstName}</p>
          </div>
          <div className='mb-1'>
            <label htmlFor='lastName' className='block mb-1'>
              Last Name
            </label>
            <input
              type='text'
              id='lastName'
              name='lastName'
              value={formData.lastName}
              onChange={handleChange}
              onInput={handleInput}
              className='h-8 w-full px-1 text-black rounded-sm border border-black'
              placeholder='Last Name...'
            />
            <p className='text-red-500 block text-center mt-1'>{errors.lastName}</p>
          </div>
          <div className='mb-1'>
            <label htmlFor='email' className='block mb-1'>
              Email
            </label>
            <input
              type='text'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              onInput={handleInput}
              className='h-8 w-full px-1 text-black rounded-sm border border-black'
              placeholder='Email Address...'
            />
            <p className='text-red-500 block text-center mt-1'>{errors.email}</p>
          </div>
          <div className='mb-1'>
            <label htmlFor='message' className='block mb-1 rounded-sm'>
              Message
            </label>
            <textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              // onInput={handleInput}
              onInput={() => setFormData((prev) => ({ ...prev, message: '' }))}
              className='block h-16 w-full p-1 text-black rounded-sm border border-black'
              placeholder='Message...'
            />
            <p className='text-red-500 block text-center mt-1'>{errors.message}</p>
          </div>
          <button type='submit' className='bg-primary-green h-8 w-full rounded-sm'>
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}
