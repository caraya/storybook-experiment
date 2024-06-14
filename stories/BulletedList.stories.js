// src/components/BulletedList.stories.js
import { buildBulletedList } from './BulletedList.js';

export default {
    title: 'Components/Bulleted List',
    argTypes: {
        items: { control: 'array' },
        className: { control: 'text' }
    },
};

const Template = ({ items, className }) => {
    const listHTML = buildBulletedList(items, className);
    const template = document.createElement('template');
    template.innerHTML = listHTML;
    return template.content.cloneNode(true);
};

export const Default = Template.bind({});
Default.args = {
    items: ['Apple', 'Banana', 'Cherry'],
    className: ''  // Default is an empty string, indicating no class attribute
};

export const ArrowList = Template.bind({});
ArrowList.args = {
  items: ['Apple', 'Banana', 'Cherry'],
  className: 'arrow-list'
}