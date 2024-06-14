// MediaElement.stories.js
import './mediaElement.css';

export default {
  title: 'Components/MediaElement',
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    mediaStart: { control: 'boolean' },
    imagePath: { control: 'text' },
    videoPath: { control: 'text'},
    iframeSrc: { control: 'text'},
    content: { control: 'text'},
  },
};

const Template = ({ title, mediaStart, imagePath, videoPath, iframeSrc, content }) => `
<div class="media-element ${mediaStart ? `media-element--reverse` : ''}">
    
    <div class="media-element--content">
      <h2>${title}</h2>
      <p>${content}</p>
    </div>
    <div class="media-element--media">
        ${imagePath ? `<img src="${imagePath}" alt="Description of the image">` : ''}
        ${videoPath ? `<video controls><source src="${videoPath}" type="video/mp4">Your browser does not support the video tag.</video>` : ''}
        ${iframeSrc ? `<iframe width="560" height="315" src="${iframeSrc}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` : ''}
    </div>
</div>
`;

export const Image = Template.bind({});
Image.args = {
  title: 'Image Title',
  imagePath: '/stories/assets/avif-test-image.avif',
  content: 'This is a paragraph describing the content of the image media element.'
};

export const ImageReverse = Template.bind({});
ImageReverse.args = {
  title: 'Image Title',
  mediaStart: true,
  imagePath: '/stories/assets/avif-test-image.avif',
  content: 'This is a paragraph describing the content of the image media element.'
};

export const Video = Template.bind({});
Video.args = {
  title: 'Video Title',
  videoPath: 'https://assets.codepen.io/32795/flower.mp4',
  content: 'This is a paragraph describing the content of the video media element.'
};

export const VideoReverse = Template.bind({});
VideoReverse.args = {
  title: 'Video Title',
  mediaStart: true,
  videoPath: 'https://assets.codepen.io/32795/flower.mp4',
  content: 'This is a paragraph describing the content of the video media element.'
};

export const Iframe = Template.bind({});
Iframe.args = {
  title: 'HD CSS Color Guide',
  iframeSrc: 'https://www.youtube.com/embed/lv4iwnVqR-w',
  content: 'I just launched a huge article on Chrome Developers all about what\'s new in color. This stuff can get heavy real quick, so in this video I read the article and provide commentary, to help make things clear and expand upon details.'
};

export const IframeReverse = Template.bind({});
IframeReverse.args = {
  title: 'HD CSS Color Guide',
  mediaStart: true,
  iframeSrc: 'https://www.youtube.com/embed/lv4iwnVqR-w',
  content: 'I just launched a huge article on Chrome Developers all about what\'s new in color. This stuff can get heavy real quick, so in this video I read the article and provide commentary, to help make things clear and expand upon details.'
};

