const l={title:"Components/Definition List",tags:["autodocs"],argTypes:{items:{control:"object",defaultValue:[{term:"HTML",definitions:["HyperText Markup Language","The standard markup language for creating web pages and web applications."]},{term:"CSS",definitions:["Cascading Style Sheets","Style sheet language used for describing the presentation of a document written in a markup language like HTML."]}]}}},c=({items:d})=>{const t=document.createElement("dl");return d.forEach(n=>{const i=document.createElement("dt");i.textContent=n.term,t.appendChild(i),n.definitions.forEach(m=>{const a=document.createElement("dd");a.textContent=m,t.appendChild(a)})}),t},e=c.bind({});e.args={items:[{term:"HTML",definitions:["HyperText Markup Language","The standard markup language for creating web pages and web applications."]},{term:"CSS",definitions:["Cascading Style Sheets","Style sheet language used for describing the presentation of a document written in a markup language like HTML."]},{term:"JS",definitions:["Javascript","programing language to add interactivity to web pages","See also Typescript"]},{term:"TS",definitions:["Typescript","Typed superset of Javascript","See also JS and Javascript"]}]};var r,o,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`({
  items
}) => {
  const listHTML = document.createElement('dl');
  items.forEach(item => {
    const termElement = document.createElement('dt');
    termElement.textContent = item.term;
    listHTML.appendChild(termElement);
    item.definitions.forEach(definition => {
      const definitionElement = document.createElement('dd');
      definitionElement.textContent = definition;
      listHTML.appendChild(definitionElement);
    });
  });
  return listHTML;
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const p=["Default"];export{e as Default,p as __namedExportsOrder,l as default};
