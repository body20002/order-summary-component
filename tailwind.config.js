module.exports = {
  content: ["./src/**/*.{html,js}", "./dist/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'RedHatDisplay': ['Red Hat Display', 'sans-serif']
    },
    extend: {
      colors: {
        "pale-blue": 'hsl(225, 100%, 94%)' ,
        "Bright-blue": "hsl(245, 75%, 52%)",
        "Very-pale-blue": "hsl(225, 100%, 98%)",
        "Desaturated-blue":"hsl(224, 23%, 55%)", 
        "Dark-blue":"hsl(223, 47%, 23%)", 
      },
      backgroundImage: {
        "mobile": "url('/images/pattern-background-mobile.svg')",
        "desktop": "url('/images/pattern-background-desktop.svg')",
      },
      screens:{
        "mobile": "375px",
        "desktop": "1440px",
      },
    },
  },
  plugins: [],
}
