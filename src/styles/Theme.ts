export const light = {
  background: "#fff",
  // sectionBackground: '#ECECEC',
  sectionBackground: "#fff",
  hoverBackground: "#F0F0F0",
  text: '#000000',
  button: {
    toggleThemeButtonColor: '#fff',
    toggleThemeButtonHoverColor: '#333',
  },
  shadow: `0px 0px 30px rgba(0, 0, 0, 0.25)`
};

export const dark = {
  background: '#181818',
  sectionBackground: '#181818',
  hoverBackground: "#2D2D2D",
  text: '#ffffff',
  button: {
    toggleThemeButtonColor: '#181818',
    toggleThemeButtonHoverColor: '#ECECEC',
  },
  shadow: `0px 0px 30px rgba(255, 255, 255, 0.25)`
};

export type Theme = typeof light;
