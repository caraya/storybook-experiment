export default {
  title: 'Effects/Mix Blend Modes',
  tags: ['autodocs'],
  argTypes: {
    // text: { control: 'text' },
    // color: { control: 'color' },
    bgColor: { control: 'color' },
    blendMode: { control: 'select', options: [ "darken", "multiple", "color-burn", "lighten", "screen", "color-dodge", "overlay", "soft-light", "hard-light", "difference", "exclusion", ] },
    image: { control: 'text' },
  },
};

const Template = ({ 
  // text,
  // color,
  bgColor,
  blendMode,
  image,
 }) => `
 <div style="width: 640px;background-color: ${bgColor};">
  <div 
    class="media--blended-content"
    style="
      width: 640px;
      aspect-ratio: 4 / 3;
      mix-blend-mode: ${blendMode};
      background: 50% 50% url(${image});
      ">
  </div>
 </div>
`;

export const DarkenMixBlend = Template.bind({});
DarkenMixBlend.args = {
  bgColor: '#663399',
  blendMode: 'darken',
  image: 'stories/assets/tea-ceremony.jpg',
};

// Blend Modes
// [ "darken", "multiple", "color-burn", "lighten", "screen", "color-dodge", "overlay", "soft-light", "hard-light", "difference", "exclusion", ]
// Attributes
// bgColor,
// blendMode,
// image,