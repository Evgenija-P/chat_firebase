/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#1F6BFF",
        lightBlue: "#BADAF4",
        lightBlueSecond: "#F4F9FD",
        main: "#222326",
        bgHero: "#DBEBF8",
        navy: "#050931",
        grey: "#767877",
        footerGrey: "#7A7B7D",
        formGrey: "#969696",
        text: "#647685",
        orange: "#FF8345",
        yellow: "#FFCA45",
        darkOrange: "#FE6B01",
        green: "#48B774",
        serviceTitle: "#1B1E1C",
      },
      fontFamily: {
        basic: "Syne, sans-serif",
        other: "Nunito, sans-serif",
      },
      boxShadow: {
        button: "0px 2px 19px 0px rgba(31,107,255,0.68)",
        buttonLoginGoogle: "0px 2px 19px 0px rgba(66,133,244,0.68)",
        buttonLoginFacebook: "0px 2px 19px 0px rgba(59,89,152,0.68)",
        login: "0px 2px 19px 0px rgba(59,89,152,0.68)",
      },
      backgroundImage: {
        login: "url('/images/login_background.jpg')",
      },
    },
  },
  plugins: [],
};
