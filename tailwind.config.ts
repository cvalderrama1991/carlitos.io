import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'primary-green': 'var(--primary-green)',
        'light-green': 'var(--light-green)',
        'dark-green': 'var(--dark-green)'
      },
      fontFamily: {
        'poppins-regular': 'Poppins Regular',
        'poppins-italic': 'Poppins Italic',
        'poppins-medium': 'Poppins Medium',
        'poppins-semibold': 'Poppins SemiBold',
        'poppins-bold': 'Poppins Bold'
      }
    }
  },
  plugins: []
};
export default config;
