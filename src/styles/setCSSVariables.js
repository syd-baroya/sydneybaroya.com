// styles/setCSSVariables.js

export function setCSSVariables(palette) {
  const root = document.documentElement;

  root.style.setProperty('--background-color', palette.background);
  root.style.setProperty('--primary-text', palette.primary);
  root.style.setProperty('--secondary-text', palette.secondary);
  root.style.setProperty('--tertiary-text', palette.tertiary);

}
