/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  purge: [
    './src/**/*.html'
  ],
  plugins: [
        require('flowbite/plugin')
    ]
  // plugins: [require("taos/plugin")],
  // safelist: [
  //   "!duration-[0ms]",
  //   "!delay-[0ms]",
  //   'html.js :where([class*="taos:"]:not(.taos-init))',
  // ],
  // content: {
  //   relative: true,
  //   transform: (content) => content.replace(/taos:/g, ""),
  //   files: ["./src/*.{html,ts}"],
  // },
};
