const a={title:"Effects/Mix Blend Modes",tags:["autodocs"],argTypes:{bgColor:{control:"color"},blendMode:{control:"select",options:["darken","multiple","color-burn","lighten","screen","color-dodge","overlay","soft-light","hard-light","difference","exclusion"]},image:{control:"text"}}},s=({bgColor:r,blendMode:t,image:l})=>`
 <div style="width: 640px;background-color: ${r};">
  <div 
    class="media--blended-content"
    style="
      width: 640px;
      aspect-ratio: 4 / 3;
      mix-blend-mode: ${t};
      background: 50% 50% url(${l});
      ">
  </div>
 </div>
`,e=s.bind({});e.args={bgColor:"#663399",blendMode:"darken",image:"stories/assets/tea-ceremony.jpg"};var o,n,d;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`({
  // text,
  // color,
  bgColor,
  blendMode,
  image
}) => \`
 <div style="width: 640px;background-color: \${bgColor};">
  <div 
    class="media--blended-content"
    style="
      width: 640px;
      aspect-ratio: 4 / 3;
      mix-blend-mode: \${blendMode};
      background: 50% 50% url(\${image});
      ">
  </div>
 </div>
\``,...(d=(n=e.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};const i=["DarkenMixBlend"];export{e as DarkenMixBlend,i as __namedExportsOrder,a as default};
