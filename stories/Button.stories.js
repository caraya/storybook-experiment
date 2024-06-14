import { fn } from '@storybook/test';
import { createButton } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Components/Button',
  tags: ['autodocs'],
  render: ({ label, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createButton({ label, ...args });
  },
  argTypes: {
    primary: {
      control: 'boolean',
      description: 'Is this a primary button?',
      defaultValue: true,
    },
    color: { 
      control: 'color',
      description: 'Color for text',
      defaultValue: 'rgba(255, 255, 255, 1)',
    },
    backgroundColor: {
      control: 'color',
      description: 'Color for the button background',
      defaultValue: 'rgba(52, 27, 218, 1)',
    },
    roundBorders: { 
      control: 'boolean',
      description: 'Does the button have rounded borders?',
      defaultValue: false,

    },
    hasBorders: { 
      control: 'boolean',
      description: 'Does the button have borders at all?',
      defaultValue: false,
    },
    isDisabled: { 
      control: 'boolean',
      description: 'Is the button disabled?',
      defaultValue: false,
    },
    label: { 
      control: 'text',
      description: 'Button text',
      defaultValue: 'The Button'
    },
    onClick: { 
      action: 'onClick' 
    },
    size: {
      defaultValue: 'extra-large',
      control: { type: 'select' },
      description: 'Size of the button',
      options: [
        'small',
        'medium',
        'large',
        'extra-large',
        'huge',
        'cta'
      ],
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    label: 'Button',
  },
};

export const BorderPrimary = {
  args: {
    primary: true,
    label: 'Button',
    roundBorders: true,
  },
}

export const BorderSecondary = {
  args: {
    label: 'Button',
    roundBorders: true,
  },
};

export const CTA = {
  args: {
    size: 'cta',
    label: 'Button',
  }
};

export const Huge = {
  args: {
    size: 'huge',
    label: 'Button',
  },
};

export const ExtraLarge = {
  args: {
    size: 'extra-large',
    label: 'Button',
  }
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};

export const CTARound = {
  args: {
    primary: true,
    size: 'cta',
    label: 'Button',
    roundBorders: true,
  }
};

export const HugeRound = {
  args: {
    primary: true,
    size: 'huge',
    label: 'Button',
    roundBorders: true,
  },
};

export const ExtraLargeRound = {
  args: {
    primary: true,
    size: 'extra-large',
    label: 'Button',
    roundBorders: true,
  }
};

export const LargeRound = {
  args: {
    primary: true,
    size: 'large',
    label: 'Button',
    roundBorders: true,
  },
};

export const SmallRound = {
  args: {
    primary: true,
    size: 'small',
    label: 'Button',
    roundBorders: true,
  },
};

export const Disabled = {
  args: {
    label: 'button',
    isDisabled: true,
  },
};