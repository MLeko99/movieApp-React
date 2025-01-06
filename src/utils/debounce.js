/**
 * Funkcija debounce odgađa izvršavanje funkcije dok se ne završi unos.
 * @param {Function} func - Funkcija koju želimo odgoditi.
 * @param {number} delay - Vrijeme (u milisekundama) prije nego što se funkcija izvrši.
 * @returns {Function} - Funkcija koja se može koristiti s debounce.
 */
const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export default debounce;
