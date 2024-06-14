// Function to create a single icon element with styles applied from args
export const createIconStory = (icon, args) => {
  const iconElement = document.createElement('div');
  iconElement.className = 'icon';
  iconElement.style.color = args.color;
  iconElement.style.fontSize = args.size;
  iconElement.setAttribute('data-icon', icon.unicode);
  iconElement.innerText = icon.name;
  return iconElement;
};
