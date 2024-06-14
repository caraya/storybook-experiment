import './Card.css'

export const createCard = ({
  type = 'default',
  size,
  cardTitle,
  hasImage,
  isAvatar,
  imageURL,
  cardText,
  hasFooter,
  footerText,
}) => {
  // We can use a string literal instead of 
  // creating all the elements manually like 
  // we did here
  const card = document.createElement('div');
  const cardTitleWrapper = document.createElement('div');
  cardTitleWrapper.className = ['card--title'];
  card.appendChild(cardTitleWrapper);

  const cardH2 = document.createElement('h2');
  const title = cardTitle;
  cardH2.append(title)

  cardTitleWrapper.append(cardH2);

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
