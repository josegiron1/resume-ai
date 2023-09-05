/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundColor: {
        'bg-0': '#14191E',
        'bg-1': '#2A3B4C',
        'bg-2': '#09111A',
      },
      textColor: {
        'text-main': '#FFFFFF',
      },
    },

  },
  plugins: [],
}

