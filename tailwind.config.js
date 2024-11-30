/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        fondoPG: '#f7ecee',
        fondoEX: '#f6f1f1',
        salmonColor:'#ff9b70',
        naranjaLogo:'#fe8f46',
        colorIcons:'#f6e1dc',
        imagenCamuflaje:'#f7f5e1'
      },
    },
    fontSize: {
      'h1': '61.04px', 
      'h2': '48.83px',
      'h3': '39.06px', 
      'h4': '31.25px', 
      'h5': '25px', 
      'h6': '20px',  
      'p': '16px',  
      'navText': '18px',   
    }, 
  },
  plugins: [],
};
