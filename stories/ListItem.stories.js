export default {
  title: 'Components/ListItem',
  argTypes: {
    content: { control: 'text' },
  },
};

const Template = ({ content }) => {
  const listItemHTML = `<li class="list-item">${content}</li>`;
  const template = document.createElement('template');
  template.innerHTML = listItemHTML;
  return template.content.cloneNode(true);
};

export const Default = Template.bind({});
Default.args = {
  content: 'Example item',
};
