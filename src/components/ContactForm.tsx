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

    let isValid =
      formData.firstName.trim() !== '' &&
      formData.lastName.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.message.trim() !== '';

    if (isValid) {
      try {
        const res = await fetch(process.env.CONTACT_FORM_API, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            message: formData.message
          })
        });
        const data = await res.json();
        setFormData((prev) => ({ ...prev, firstName: '', lastName: '', email: '', message: '' }));
        setErrors((prev) => ({ ...prev, firstName: '', lastName: '', email: '', message: '' }));
        console.log(data);
        return data;
      } catch (err) {
        let message: string;
        if (err instanceof Error) {
          message = err.message;
        } else if (err && typeof err === 'object' && 'message' in err) {
          message = String(err.message);
        } else if (typeof err === 'string') {
          message = err;
        } else {
          message = 'Something went wrong';
        }
        return message;
      }
    } else {
      setErrors((prev) => ({ ...prev, firstName: 'First name cannot be blank!' }));
      setErrors((prev) => ({ ...prev, lastName: 'Last name cannot be blank!' }));
      setErrors((prev) => ({ ...prev, email: 'Email name cannot be blank!' }));
      setErrors((prev) => ({ ...prev, message: 'Message name cannot be blank!' }));
    }
  }
  return (
    <section className='bg-primary-bg border-primary-border border w-full max-w-sm mx-auto p-4 my-2 rounded-lg'>
      <p className='text-xl text-center'>Message Me</p>
      <form onSubmit={handleSubmit}>
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
    </section>
  );
}
