import { Config } from 'tailwindcss'
import { nextui } from "@nextui-org/react"

const config: Config = {

  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#00B3EC",
        seconadry: "#D834FF",

        lightPurple: '#D834FF',
        lightBlue: '#00B3EC',


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
  plugins: [nextui()],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};
export default config