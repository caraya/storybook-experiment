// src/components/NumberedList.stories.js
import { buildNumberedList } from './NumberedList.js';

export default {
    title: 'Components/NumberedList',
    argTypes: {
        items: { control: 'array' },
        className: { control: 'text' }
    },
};

const Template = ({ items, className }) => {
    const listHTML = buildNumberedList(items, className);
    const template = document.createElement('template');
    template.innerHTML = listHTML;
    return template.content.cloneNode(true);
};

export const Default = Template.bind({});
Default.args = {
    items: [
      'First',
      'Second',
      'Third'
    ],
    className: ''  // Default is an empty string, indicating no class attribute
};

export const CustomOrdered = Template.bind({});
CustomOrdered.args = {
  items: [
    'First',
    'Second',
    'Third'
  ],
  className: 'custom-ordered',
}