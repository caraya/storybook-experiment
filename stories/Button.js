import './button.css';

export const createButton = ({
  primary = false,
  size = 'medium',
  roundBorders = false,
  hasBorders = true,
  color,
  backgroundColor,
  label,
  onClick,
  isDisabled,
}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.addEventListener('click', onClick);

  // Only add onClick event if the button is not disabled
  if (!isDisabled) {
    btn.addEventListener('click', onClick);
  }

  // Setting disabled attribute and styling class
  if (isDisabled) {
    // btn.classList.add('storybook-button--disabled');  
    btn.setAttribute('disabled', 'disabled');  // Properly disable the button
    
  } else {
    // btn.classList.remove('storybook-button--disabled');
    btn.removeAttribute('disabled');    
  }
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const borderMode = hasBorders ? 'storybook-button--has-border' : 'storybook.button--no-border';
  const hasRoundBorders = roundBorders ? 'storybook-button--round-borders' : 'storybook-button--no-round-borders'
  btn.className = ['storybook-button', `storybook-button--${size}`, mode, hasRoundBorders, borderMode].join(' ');

  btn.style.color = color;
  btn.style.backgroundColor = backgroundColor;

  return btn;
};
