// src/components/NumberedList.js

/**
 * Builds an HTML string for a numbered list.
 * @param {Array<string>} items - The items to include in the list.
 * @param {string} [className] - Optional class name for the <ol> element.
 * @returns {string} The HTML string representing the numbered list.
 */
export function buildNumberedList(items, className) {
  if (!Array.isArray(items) || items.length === 0) {
      return `<ol${className ? ` class="${className}"` : ''}></ol>`; // Return an empty <ol> if no items
  }

  const listItemsHTML = items.map(item => `<li class="list-item">${item}</li>`).join('');

  const classAttribute = className ? ` class="${className}"` : '';

  return `<ol${classAttribute}>${listItemsHTML}</ol>`;
}
