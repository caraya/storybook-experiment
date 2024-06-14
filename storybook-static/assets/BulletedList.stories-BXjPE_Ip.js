function L(t,e){if(!Array.isArray(t)||t.length===0)return`<ul${e?` class="${e}"`:""}></ul>`;const r=t.map(d=>`<li class="list-item">${d}</li>`).join("");return`<ul${e?` class="${e}"`:""}>${r}</ul>`}const T={title:"Components/Bulleted List",argTypes:{items:{control:"array"},className:{control:"text"}}},p=({items:t,className:e})=>{const r=L(t,e),a=document.createElement("template");return a.innerHTML=r,a.content.cloneNode(!0)},s=p.bind({});s.args={items:["Apple","Banana","Cherry"],className:""};const n=p.bind({});n.args={items:["Apple","Banana","Cherry"],className:"arrow-list"};var l,o,c;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`({
  items,
  className
}) => {
  const listHTML = buildBulletedList(items, className);
  const template = document.createElement('template');
  template.innerHTML = listHTML;
  return template.content.cloneNode(true);
}`,...(c=(o=s.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var i,m,u;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`({
  items,
  className
}) => {
  const listHTML = buildBulletedList(items, className);
  const template = document.createElement('template');
  template.innerHTML = listHTML;
  return template.content.cloneNode(true);
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const H=["Default","ArrowList"];export{n as ArrowList,s as Default,H as __namedExportsOrder,T as default};
