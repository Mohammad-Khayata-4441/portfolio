module.exports = {

  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#00B3EC",
        seconadry: "#D834FF",

        lightPurple:'#D834FF',
        lightBlue:'#00B3EC',

        
        dark: "#07071C",
        text: "#546192",
        "dark-overlay": "#423769",
        "dark-surface": "#161A29",


      },
      borderRadius: {
        "4xl": "2rem",
        max: "2.5rem",
        circle: "50%"
      },
    },
  },
  plugins: [],
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`,
  ],
};
