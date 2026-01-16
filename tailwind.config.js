/** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      // Desabilitar preflight para evitar erro de leitura de arquivo no WebContainer
      corePlugins: {
        preflight: false,
      },
      theme: {
        extend: {
          fontFamily: {
            serif: ['"Playfair Display"', 'serif'],
            sans: ['"Lato"', 'sans-serif'],
          },
          colors: {
            wedding: {
              black: '#1a1a1a',
              gray: '#666666',
              light: '#f4f4f4',
              gold: '#C5A059',
            }
          },
          spacing: {
            '18': '4.5rem',
            '22': '5.5rem',
          }
        },
      },
      plugins: [],
    }
