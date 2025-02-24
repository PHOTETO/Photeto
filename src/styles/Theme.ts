export const light = {
  background: '#ffffff',
  // sectionBackground: '#ECECEC',
  sectionBackground: '#fff',
  text: '#000000',
  button: {
    toggleThemeButtonColor: '#fff',
    toggleThemeButtonHoverColor: '#333',
  },
};

export const dark = {
  background: '#181818',
  sectionBackground: '#181818',
  text: '#ffffff',
  button: {
    toggleThemeButtonColor: '#181818',
    toggleThemeButtonHoverColor: '#ECECEC',
  },
};

export type Theme = typeof light;
