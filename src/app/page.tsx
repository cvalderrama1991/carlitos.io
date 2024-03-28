import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Carlitos.io | Home',
  description: 'Personal Website Portfolio'
};

export default function Home() {
  return (
    <div className="pt-16 px-4 min-h-screen flex items-center justify-center">
      <section className="w-full max-w-xl mx-auto">
        <h1 className="text-4xl font-poppins-bold my-2">
          Welcome to <span className="text-primary-green">Carlitos.io</span>
        </h1>
        <h2 className="text-2xl font-poppins-semibold my-2">
          My name is Carlos, I am a <span className="text-primary-green">FullStack Developer</span>.
        </h2>
        <p>I enjoy building web applications with modern technology.</p>
        <div className="flex gap-4 my-2">
          <Link
            href="/skills"
            className="flex items-center justify-center border-2 border-primary-border h-8 w-32 rounded"
          >
            My Skills
          </Link>
          <a
            href="my-resume.pdf"
            target="_blank"
            className="flex items-center justify-center bg-primary-green h-8 w-32 rounded text-secondary-text"
          >
            Resume
          </a>
        </div>
      </section>
    </div>
  );
}
