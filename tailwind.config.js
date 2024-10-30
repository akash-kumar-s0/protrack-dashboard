/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(89.91deg, rgba(67, 24, 255, 0.25) -31.98%, #FEC6DF 66.33%)",
      },
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      fontSize: {
        'title': ['28px', { lineHeight: '36px', letterSpacing: '2%' }],
        'header-2': ['24px', { lineHeight: '32px', letterSpacing: '2%' }],
        'header-3': ['16px', { lineHeight: '24px', letterSpacing: '2%' }],
        'body': ['14px', { lineHeight: '20px', letterSpacing: '2%' }],
        'small': ['10px', { lineHeight: '16px', letterSpacing: '2%' }],
        'button': ['12px', { lineHeight: '16px', letterSpacing: '2%' }],
      },
      letterSpacing: {
        '2': '0.02em',
      },
    },
  },
  plugins: [],
};

