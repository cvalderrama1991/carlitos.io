'use client';
import React, { useState, useEffect } from 'react';

export default function ContactForm() {
  type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
  };

  type FormErrors = {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
  };

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [serverError, setServerError] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [loading, setLoading] = useState(false);

  // Auto-clear success message after 5 seconds
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(''), 5000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
    setServerError(''); // Clear server error on any input change
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setServerError('');
    setSuccessMessage('');

    const trimmedData = {
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const newErrors: FormErrors = {
      firstName: trimmedData.firstName ? '' : 'First name is required!',
      lastName: trimmedData.lastName ? '' : 'Last name is required!',
      email: trimmedData.email
        ? emailRegex.test(trimmedData.email)
          ? ''
          : 'Please enter a valid email address'
        : 'Email is required!',
      message: trimmedData.message ? '' : 'Message is required!',
    };

    setErrors(newErrors);

    const isValid = Object.values(newErrors).every((err) => err === '');

    if (!isValid) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(trimmedData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || `Server responded with ${res.status}`);
      }

      setSuccessMessage(data.message || 'Message sent successfully!');
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
      setErrors({ firstName: '', lastName: '', email: '', message: '' });
    } catch (err) {
      setLoading(false);
      const message =
        err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setServerError(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-primary-bg w-full border-2 border-primary-border rounded-md p-2">
      <p className="text-xl text-primary-text text-center my-2">Message Me</p>

      <form onSubmit={handleSubmit}>
        <div className="mb-1">
          <label htmlFor="firstName" className="block mb-1">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            onInput={handleInput}
            className="h-10 w-full px-1 text-black rounded-sm border border-primary-border"
            placeholder="First Name..."
          />
          <p className="text-red-500 block text-center mt-1">{errors.firstName}</p>
        </div>

        <div className="mb-1">
          <label htmlFor="lastName" className="block mb-1">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            onInput={handleInput}
            className="h-10 w-full px-1 text-black rounded-sm border border-primary-border"
            placeholder="Last Name..."
          />
          <p className="text-red-500 block text-center mt-1">{errors.lastName}</p>
        </div>

        <div className="mb-1">
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onInput={handleInput}
            className="h-10 w-full px-1 text-black rounded-sm border border-primary-border"
            placeholder="Email Address..."
          />
          <p className="text-red-500 block text-center mt-1">{errors.email}</p>
        </div>

        <div className="mb-1">
          <label htmlFor="message" className="block mb-1 rounded-sm">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onInput={() => setErrors((prev) => ({ ...prev, message: '' }))}
            className="block h-16 w-full p-1 text-black rounded-sm border border-primary-border"
            placeholder="Message..."
          />
          <p className="text-red-500 block text-center mt-1">{errors.message}</p>
        </div>

        <button
          type="submit"
          className="bg-primary-green text-secondary-text h-10 w-full rounded-md"
          disabled={loading}
        >
          {loading ? 'Sending Message...' : 'Send Message'}
        </button>

        {successMessage && (
          <p className="text-green-600 text-center mt-3 font-medium">
            {successMessage}
          </p>
        )}

        {serverError && (
          <p className="text-red-500 text-center mt-3">
            {serverError}
          </p>
        )}
      </form>
    </section>
  );
}
