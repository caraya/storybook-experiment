export default {
  title: 'Components/DefinitionDefinitionItem',
  argTypes: {
    content: { control: 'text' },
  },
};

const Template = ({ content }) => {
  const listItemHTML = `<dd>${content}</dd>`;
  const template = document.createElement('template');
  template.innerHTML = listItemHTML;
  return template.content.cloneNode(true);
};

export const Default = Template.bind({});
Default.args = {
  content: 'Example item',
};