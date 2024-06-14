function L(t,e){if(!Array.isArray(t)||t.length===0)return`<ol${e?` class="${e}"`:""}></ol>`;const n=t.map(p=>`<li class="list-item">${p}</li>`).join("");return`<ol${e?` class="${e}"`:""}>${n}</ol>`}const T={title:"Components/NumberedList",argTypes:{items:{control:"array"},className:{control:"text"}}},u=({items:t,className:e})=>{const n=L(t,e),o=document.createElement("template");return o.innerHTML=n,o.content.cloneNode(!0)},s=u.bind({});s.args={items:["First","Second","Third"],className:""};const r=u.bind({});r.args={items:["First","Second","Third"],className:"custom-ordered"};var a,c,l;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`({
  items,
  className
}) => {
  const listHTML = buildNumberedList(items, className);
  const template = document.createElement('template');
  template.innerHTML = listHTML;
  return template.content.cloneNode(true);
}`,...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,i,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`({
  items,
  className
}) => {
  const listHTML = buildNumberedList(items, className);
  const template = document.createElement('template');
  template.innerHTML = listHTML;
  return template.content.cloneNode(true);
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const b=["Default","CustomOrdered"];export{r as CustomOrdered,s as Default,b as __namedExportsOrder,T as default};
