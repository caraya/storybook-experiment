export default {
  title: 'Components/Definition List',
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
      defaultValue: [
        { term: 'HTML', definitions: ['HyperText Markup Language', 'The standard markup language for creating web pages and web applications.'] },
        { term: 'CSS', definitions: ['Cascading Style Sheets', 'Style sheet language used for describing the presentation of a document written in a markup language like HTML.'] }
      ]
    },
  },
};

const Template = ({ items }) => {
  const listHTML = document.createElement('dl');

  items.forEach(item => {
    const termElement = document.createElement('dt');
    termElement.textContent = item.term;
    listHTML.appendChild(termElement);

    item.definitions.forEach((definition) => {
      const definitionElement = document.createElement('dd');
      definitionElement.textContent = definition;
      listHTML.appendChild(definitionElement);
    });
  });

  return listHTML;
};

export const Default = Template.bind({});
Default.args = {
  items: [
    { term: 'HTML', definitions: ['HyperText Markup Language', 'The standard markup language for creating web pages and web applications.'] },
    { term: 'CSS', definitions: ['Cascading Style Sheets', 'Style sheet language used for describing the presentation of a document written in a markup language like HTML.'] },
    { term: 'JS', definitions: ['Javascript', 'programing language to add interactivity to web pages', 'See also Typescript']},
    { term: 'TS', definitions: ['Typescript', 'Typed superset of Javascript', 'See also JS and Javascript']},
  ]
}