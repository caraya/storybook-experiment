const m={title:"Components/DefinitionTermItem",argTypes:{definition:{control:"text"}}},a=({definition:i})=>{const s=`<dt>${i}</dt>`,t=document.createElement("template");return t.innerHTML=s,t.content.cloneNode(!0)},e=a.bind({});e.args={definition:"term to define"};var n,o,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`({
  definition
}) => {
  const listItemHTML = \`<dt>\${definition}</dt>\`;
  const template = document.createElement('template');
  template.innerHTML = listItemHTML;
  return template.content.cloneNode(true);
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const c=["Default"];export{e as Default,c as __namedExportsOrder,m as default};
