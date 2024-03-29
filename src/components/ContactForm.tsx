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
    message: '',
  });

  const [loading, setLoading] = React.useState(false);

  const [errors, setErrors] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
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
        setLoading(true);
        const res = await fetch('api/contact', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            message: formData.message,
          }),
        });
        const data = await res.json();
        setLoading(false);
        setFormData((prev) => ({
          ...prev,
          firstName: '',
          lastName: '',
          email: '',
          message: '',
        }));
        setErrors((prev) => ({
          ...prev,
          firstName: '',
          lastName: '',
          email: '',
          message: '',
        }));
        return data;
      } catch (err) {
        setLoading(false);
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
      setErrors((prev) => ({ ...prev, firstName: 'First name is required!' }));
      setErrors((prev) => ({ ...prev, lastName: 'Last name is required!' }));
      setErrors((prev) => ({ ...prev, email: 'Email name is required!' }));
      setErrors((prev) => ({ ...prev, message: 'Message name is required!' }));
      setLoading(false);
    }
  }
  return (
    <section className='bg-primary-bg w-full border-2 border-primary-border rounded-md p-2'>
      <p className='text-xl text-primary-text text-center my-2'>Message Me</p>
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
            className='h-10 w-full px-1 text-black rounded-sm border border-primary-border'
            placeholder='First Name...'
          />
          <p className='text-red-500 block text-center mt-1'>
            {errors.firstName}
          </p>
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
            className='h-10 w-full px-1 text-black rounded-sm border border-primary-border'
            placeholder='Last Name...'
          />
          <p className='text-red-500 block text-center mt-1'>
            {errors.lastName}
          </p>
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
            className='h-10 w-full px-1 text-black rounded-sm border border-primary-border'
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
          <p className='text-red-500 block text-center mt-1'>
            {errors.message}
          </p>
        </div>
        <button
          type='submit'
          className='bg-primary-green text-secondary-text h-10 w-full rounded-md'
          disabled={loading}
        >
          {loading ? 'Sending Message...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
}
