module.exports = {
  content: ["./public/**/*.{html,php,erb}"],

  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#1E40AF",
          "secondary": "#9333EA",
          "accent": "#F59E0B",
          "neutral": "#374151",
          "base-100": "#FFFFFF",
        },
      },
    ],
  },
};
