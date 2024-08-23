/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "gray-scales-white": "#fff",
        black: "#000",
        "gray-scales-black": "#272343",
        darkgray: "#9a9caa",
        gray: "rgba(39, 35, 67, 0.6)",
        "accents-accents": "#029fae",
        darkturquoise: "#1cbac7",
        "gray-scales-off-white": "#e1e3e6",
        "accents-dark-accents": "#007580",
        "gray-scales-dark-gray": "#636270",
        whitesmoke: "rgba(240, 242, 243, 0.7)",
        "gray-scales-off-white1": "#f0f2f3",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        "nav-links": "Inter",
        "dm-sans": "'DM Sans'",
      },
      borderRadius: {
        xl: "20px",
        "8xs": "5px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      "7xl": "26px",
      lgi: "19px",
      smi: "13px",
      inherit: "inherit",
    },
    screens: {
      mq1325: {
        raw: "screen and (max-width: 1325px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
