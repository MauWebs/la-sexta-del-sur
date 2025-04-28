/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",  // si usas carpeta 'app'
      "./pages/**/*.{js,ts,jsx,tsx}", // si usas carpeta 'pages'
      "./components/**/*.{js,ts,jsx,tsx}", // tus componentes
    ],
    theme: {
      extend: {},
    },
    plugins: [],
    
  }