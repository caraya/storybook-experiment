export const createAccordion = ({
  isExclusive,
  name,
}) => {
  const accordion = document.createElement('div');
  accordion.className = ['accordion-wrapper'];
  
  
  if (hasImage) {
    if (!isAvatar) {
      const image = document.createElement('img');
      image.setAttribute('src', `${imageURL}`)
      image.setAttribute('class', 'card--image')
      card.append(image)
    } else {
      const image = document.createElement('img');
      image.setAttribute('src', `${imageURL}`)
      image.setAttribute('class', 'card--image-avatar')
      card.append(image)
    }
  }

  const bodyText = document.createElement('div');
  bodyText.setAttribute('class', 'card--body');
  bodyText.append(cardText);
  card.append(bodyText);

  if (hasFooter) {
    const footer = document.createElement('div')
    footer.setAttribute('class', 'card--footer');
    
    const FText = document.createElement('p')
    FText.append(footerText);

    footer.append(FText);

    card.append(footer);
  }

  card.className = [
    `card`,
    `card--${type}`,
    `card--${size}`,
  ].join(' ');
  return card;
};
