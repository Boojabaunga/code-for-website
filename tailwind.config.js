const plugin  = require('tailwindcss/plugin')
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
      extend: {
        zIndex: {
         '-10': '-10',
        },
        fontFamily: {
          'display': ['Oswald'],
          'body': ['Open Sans']
        },
        fontSize:{
          'extra-sm':'8px',
        }
      }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    plugin(function({addComponents, theme}){
      const add = ({
        '.text-black-current': {
            color: 'rgba(0,0,0,0.7)'
        },
        '.bg-nav':{
          backgroundColor:'rgba(249,250,251,255)'
        },
        '.title-color': {
          color: '#b2e03b'
        }
      })
      addComponents(add);
    })
  ],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}
