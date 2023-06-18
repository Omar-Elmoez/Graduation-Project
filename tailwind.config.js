/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'C2': '0px 2.98256px 7.4564px rgba(0, 0, 0, 0.1)',
        'C3': '0px 0px 0px 1px #F89300',
      },
      screens: {
        'mx-480': {'max': '480px'},
        'mx-800': {'max': '800px'},
      },
      width: {
        '7.5': '1.875rem',
        '42': '10.5rem',
        '175': '43.75rem',
      },
      colors: {
        'darkOrange': '#FE8A00',
        'awesome': '#F61B5A',
        'midGray': '#5B6871',
        'PaleSky': '#707B81',
        'Zeus': '#212121',
        'orangePeel': '#F89300',
        'darkGray': '#333333',
        'oldGold': '#D4AF37',
        'fadedBlue': '#6B9AC4',
        'Rose': '#e7b1a3',
        'Wheat': '#f5deb3',
        'hipBlue': '#5f9ea0',
        'Ghost': '#cccccc',
        'redPink': '#FF1055',
        'almostBlack': 'rgba(0, 0, 0, 0.749)',
        'halfBlack': 'rgba(0, 0, 0, 0.5)',
        'almostWhite': 'rgba(0, 0, 0, 0.055)',
      },
      fontFamily: {
        'Airbnb': "Airbnb",
        'Inter': "Inter",
        'OutFit': "Outfit",
        'Urbanist': "Urbanist",
      },
      fontSize: {
        '6.25': '1.563rem',
        '7': '1.75rem',
        '8': '2rem',
      },
      backgroundImage: {
        'heroImg': "url(/src/assets/heroIcons.png)",
      },
      animation: {
        'inOut': 'inOut 1.5s ease-in infinite alternate',
      },
      keyframes: {
        inOut: {
          'to': {
            color: '#5B6871',
            transform: 'scale(.7)',
          }
        } 
      }
    },
  },
  plugins: [],
}

