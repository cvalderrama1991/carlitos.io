'use client';
import React from 'react';

export default function ContactForm() {
  type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
  };

  const [formData, setFormData] = React.useState<FormData>({
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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const { firstName, lastName, email, message } = formData;

    let isValid = firstName.trim() !== '' && lastName.trim() !== '' && email.trim() !== '' && message.trim() !== '';

    if (isValid) {
      try {
        const response = await fetch('/contact/api/contact', {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify(formData)
        });

        const data = await response.json();
        if (response.ok) {
          console.log('Message sent successfully!');
        }
        return data;
      } catch (error) {
        console.log(error);
      }
    }

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
          className='h-8 w-full px-1 text-black rounded-sm border border-primary-border'
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
          className='h-8 w-full px-1 text-black rounded-sm border border-primary-border'
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
          className='h-8 w-full px-1 text-black rounded-sm border border-primary-border'
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
          onInput={() => setErrors((prev) => ({ ...prev, message: '' }))}
          className='block h-16 w-full p-1 text-black rounded-sm border border-primary-border'
          placeholder='Message...'
        />
        <p className='text-red-500 block text-center mt-1'>{errors.message}</p>
      </div>
      <button type='submit' className='bg-primary-green text-white h-8 w-full rounded-sm'>
        Submit
      </button>
    </form>
  );
}
