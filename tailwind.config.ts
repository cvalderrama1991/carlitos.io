import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundColor: {
        'primary-bg': 'var(--bg-primary)',
        'secondary-bg': 'var(--bg-secondary)',
        'primary-green': 'var(--primary-green)',
        'light-green': 'var(--light-green)',
        'dark-green': 'var(--dark-green)'
      },
      colors: {
        'primary-text': 'var(--text-primary)',
        'secondary-text': 'var(--text-secondary)',
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
      },
      borderColor: {
        'primary-border': 'var(--border-color)'
      }
    }
  },
  plugins: []
};
export default config;
