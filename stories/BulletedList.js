// src/components/BulletedList.js

/**
 * Builds an HTML string for a bulleted list.
 * @param {Array<string>} items - The items to include in the list.
 * @param {string} [className] - Optional class name for the <ul> element.
 * @returns {string} The HTML string representing the bulleted list.
 */
export function buildBulletedList(items, className) {
  // Check if items is an array and has elements; otherwise, return an empty list
  if (!Array.isArray(items) || items.length === 0) {
      return `<ul${className ? ` class="${className}"` : ''}></ul>`; // Return an empty <ul> if no items
  }

  // Maps each item in the array to an HTML list item element
  const listItemsHTML = items.map(item => `<li class="list-item">${item}</li>`).join('');

  // Adds the class attribute only if className is provided
  const classAttribute = className ? ` class="${className}"` : '';

  // Returns the complete HTML string for the bulleted list
  return `<ul${classAttribute}>${listItemsHTML}</ul>`;
}
