import Link from 'next/link';

export default function Home() {
  return (
    <div className=''>
      <section className='w-full max-w-xl mx-auto'>
        <h1 className='text-4xl font-poppins-bold my-2'>
          Welcome to <span className='text-primary-green'>Carlitos.io</span>
        </h1>
        <h2 className='text-2xl font-poppins-semibold my-2'>My name is Carlos, I am Web Developer.</h2>
        <p>I enjoy building web applications with modern technology.</p>
        <div className='flex gap-4 my-2'>
          <Link
            href='/projects'
            className='flex items-center justify-center border border-primary-border h-8 w-32 rounded'
          >
            My Work
          </Link>
          <button
            type='button'
            className='flex items-center justify-center bg-primary-green h-8 w-32 rounded text-white'
          >
            Resume
          </button>
        </div>
      </section>
    </div>
  );
}
