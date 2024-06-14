const a={title:"Components/ListItem",argTypes:{content:{control:"text"}}},l=({content:r})=>{const c=`<li class="list-item">${r}</li>`,e=document.createElement("template");return e.innerHTML=c,e.content.cloneNode(!0)},t=l.bind({});t.args={content:"Example item"};var n,s,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`({
  content
}) => {
  const listItemHTML = \`<li class="list-item">\${content}</li>\`;
  const template = document.createElement('template');
  template.innerHTML = listItemHTML;
  return template.content.cloneNode(true);
}`,...(o=(s=t.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const m=["Default"];export{t as Default,m as __namedExportsOrder,a as default};
