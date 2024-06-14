import { createCard } from './Card';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Components/Card',
  tags: ['autodocs'],
  render: ({ ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createCard({ ...args });
  },
  argTypes: {
    cardTitle: {
      control: 'text',
      description: 'The title for the card',
      defaultValue: 'Card Title',
    }, 
    hasImage: {
      control: 'boolean',
      description: 'Does the card have an image?',
      defaultValue: true,
    },
    isAvatar: {
      control: 'boolean',
      description: 'Is the image an avatar image?',
      defaultValue: true,
    },
    imageURL: {
      control: 'text',
      description: 'The URL for the image',
      defaultValue: 'https://assets.codepen.io/32795/avif-test-image.avif',
    },
    type: {
      options: ['default', 'shadow'],
      control: { type: 'radio' },
    },
    size: {
      defaultValue: 'large',
      control: { type: 'select' },
      description: 'Size of the button',
      options: [
        'small',
        'medium',
        'large',
        'extra-large',
      ],
    },
    cardText: {
      control: 'text',
      description: 'Short text for the card',
      defaultValue: 'Short text for the card',
    },
    hasFooter: {
      control: 'boolean',
      description: 'Does the card have a footer',
      defaultValue: 'false',
    },
    footerText: {
      control: 'text',
      description: 'Text for the footer',
      defaultValue: 'This is the text for the footer',
    },

  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    type: 'default',
    size: 'medium',
    cardTitle: 'Demo Card',
    cardText: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    hasImage: true,
    imageURL: 'https://assets.codepen.io/32795/avif-test-image.avif',
    hasFooter: true,
    footerText: 'Demo footer for the card',
  },
};

export const PrimaryNoImage = {
  args: {
    type: 'default',
    size: 'medium',
    cardTitle: 'Demo Card',
    cardText: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    hasImage: false,
    hasFooter: true,
    footerText: 'Demo footer for the card',
  },
};

export const PrimaryNoFooter = {
  args: {
    type: 'default',
    size: 'medium',
    cardTitle: 'Demo Card',
    cardText: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    hasImage: true,
    imageURL: 'https://assets.codepen.io/32795/avif-test-image.avif',
    hasFooter: false,
  },
};

export const PrimaryAvatar = {
  args: {
    type: 'default',
    size: 'medium',
    cardTitle: 'Demo Card',
    cardText: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    hasImage: true,
    isAvatar: true,
    imageURL: 'https://assets.codepen.io/32795/avif-test-image.avif',
    hasFooter: true,
    footerText: 'Demo footer for the card',
  },
};

export const PrimaryAvatarNoFooter = {
  args: {
    type: 'default',
    size: 'medium',
    cardTitle: 'Demo Card',
    cardText: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    hasImage: true,
    isAvatar: true,
    imageURL: 'https://assets.codepen.io/32795/avif-test-image.avif',
    hasFooter: false,
  },
};

export const PrimaryTextOnly = {
  args: {
    type: 'default',
    size: 'medium',
    cardTitle: 'Demo Card',
    cardText: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    hasImage: false,
    hasFooter: false,
  },
};

export const Shadow = {
  args: {
    type: 'shadow',
    size: 'medium',
    cardTitle: 'Demo Card',
    cardText: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    hasImage: true,
    imageURL: 'https://assets.codepen.io/32795/avif-test-image.avif',
    hasFooter: true,
    footerText: 'Demo footer for the card',
  },
}

export const ShadowNoImage = {
  args: {
    type: 'shadow',
    size: 'medium',
    cardTitle: 'Demo Card',
    cardText: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    hasImage: false,
    hasFooter: true,
    footerText: 'Demo footer for the card',
  },
}

export const ShadowNoFooter = {
  args: {
    type: 'shadow',
    size: 'medium',
    cardTitle: 'Demo Card',
    cardText: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    hasImage: true,
    imageURL: 'https://assets.codepen.io/32795/avif-test-image.avif',
    hasFooter: false,
  },
}

export const ShadowAvatar = {
  args: {
    type: 'shadow',
    size: 'medium',
    cardTitle: 'Demo Card',
    cardText: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    hasImage: true,
    isAvatar: true,
    imageURL: 'https://assets.codepen.io/32795/avif-test-image.avif',
    hasFooter: true,
    footerText: 'Demo footer for the card',
  },
};

export const ShadowAvatarNoFooter = {
  args: {
    type: 'shadow',
    size: 'medium',
    cardTitle: 'Demo Card',
    cardText: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    hasImage: true,
    isAvatar: true,
    imageURL: 'https://assets.codepen.io/32795/avif-test-image.avif',
    hasFooter: false,
  },
};

export const ShadowTextOnly = {
  args: {
    type: 'shadow',
    size: 'medium',
    cardTitle: 'Demo Card',
    cardText: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    hasImage: false,
    hasFooter: false,
  },
}