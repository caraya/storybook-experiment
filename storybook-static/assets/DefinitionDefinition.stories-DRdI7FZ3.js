const i={title:"Components/DefinitionDefinitionItem",argTypes:{content:{control:"text"}}},a=({content:c})=>{const s=`<dd>${c}</dd>`,t=document.createElement("template");return t.innerHTML=s,t.content.cloneNode(!0)},e=a.bind({});e.args={content:"Example item"};var n,o,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`({
  content
}) => {
  const listItemHTML = \`<dd>\${content}</dd>\`;
  const template = document.createElement('template');
  template.innerHTML = listItemHTML;
  return template.content.cloneNode(true);
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const m=["Default"];export{e as Default,m as __namedExportsOrder,i as default};
