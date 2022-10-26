module.exports = {
  
  darkMode:'class',
  theme: {
    extend: {
      colors: {
        primary: "#715DE9",
        seconadry:"#4BCAFE",
        dark:"#101010",
        text:"#546192",
        'dark-overlay':"#423769",
        "dark-surface":"#161A29"
      },
      borderRadius: {
        "4xl": "2rem",
        max: "2.5rem",
        circle:"50%"
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
