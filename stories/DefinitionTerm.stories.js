export default {
  title: 'Components/DefinitionTermItem',
  argTypes: {
    definition: { control: 'text' },
  },
};

const Template = ({ definition }) => {
  const listItemHTML = `<dt>${definition}</dt>`;
  const template = document.createElement('template');
  template.innerHTML = listItemHTML;
  return template.content.cloneNode(true);
};

export const Default = Template.bind({});
Default.args = {
  definition: 'term to define',
};
