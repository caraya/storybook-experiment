const C={title:"Components/MediaElement",tags:["autodocs"],argTypes:{title:{control:"text"},mediaStart:{control:"boolean"},imagePath:{control:"text"},videoPath:{control:"text"},iframeSrc:{control:"text"},content:{control:"text"}}},e=({title:x,mediaStart:R,imagePath:s,videoPath:d,iframeSrc:c,content:V})=>`
<div class="media-element ${R?"media-element--reverse":""}">
    
    <div class="media-element--content">
      <h2>${x}</h2>
      <p>${V}</p>
    </div>
    <div class="media-element--media">
        ${s?`<img src="${s}" alt="Description of the image">`:""}
        ${d?`<video controls><source src="${d}" type="video/mp4">Your browser does not support the video tag.</video>`:""}
        ${c?`<iframe width="560" height="315" src="${c}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`:""}
    </div>
</div>
`,t=e.bind({});t.args={title:"Image Title",imagePath:"/stories/assets/avif-test-image.avif",content:"This is a paragraph describing the content of the image media element."};const a=e.bind({});a.args={title:"Image Title",mediaStart:!0,imagePath:"/stories/assets/avif-test-image.avif",content:"This is a paragraph describing the content of the image media element."};const i=e.bind({});i.args={title:"Video Title",videoPath:"https://assets.codepen.io/32795/flower.mp4",content:"This is a paragraph describing the content of the video media element."};const r=e.bind({});r.args={title:"Video Title",mediaStart:!0,videoPath:"https://assets.codepen.io/32795/flower.mp4",content:"This is a paragraph describing the content of the video media element."};const o=e.bind({});o.args={title:"HD CSS Color Guide",iframeSrc:"https://www.youtube.com/embed/lv4iwnVqR-w",content:"I just launched a huge article on Chrome Developers all about what's new in color. This stuff can get heavy real quick, so in this video I read the article and provide commentary, to help make things clear and expand upon details."};const n=e.bind({});n.args={title:"HD CSS Color Guide",mediaStart:!0,iframeSrc:"https://www.youtube.com/embed/lv4iwnVqR-w",content:"I just launched a huge article on Chrome Developers all about what's new in color. This stuff can get heavy real quick, so in this video I read the article and provide commentary, to help make things clear and expand upon details."};var m,l,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`({
  title,
  mediaStart,
  imagePath,
  videoPath,
  iframeSrc,
  content
}) => \`
<div class="media-element \${mediaStart ? \`media-element--reverse\` : ''}">
    
    <div class="media-element--content">
      <h2>\${title}</h2>
      <p>\${content}</p>
    </div>
    <div class="media-element--media">
        \${imagePath ? \`<img src="\${imagePath}" alt="Description of the image">\` : ''}
        \${videoPath ? \`<video controls><source src="\${videoPath}" type="video/mp4">Your browser does not support the video tag.</video>\` : ''}
        \${iframeSrc ? \`<iframe width="560" height="315" src="\${iframeSrc}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\` : ''}
    </div>
</div>
\``,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var h,v,u;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`({
  title,
  mediaStart,
  imagePath,
  videoPath,
  iframeSrc,
  content
}) => \`
<div class="media-element \${mediaStart ? \`media-element--reverse\` : ''}">
    
    <div class="media-element--content">
      <h2>\${title}</h2>
      <p>\${content}</p>
    </div>
    <div class="media-element--media">
        \${imagePath ? \`<img src="\${imagePath}" alt="Description of the image">\` : ''}
        \${videoPath ? \`<video controls><source src="\${videoPath}" type="video/mp4">Your browser does not support the video tag.</video>\` : ''}
        \${iframeSrc ? \`<iframe width="560" height="315" src="\${iframeSrc}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\` : ''}
    </div>
</div>
\``,...(u=(v=a.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var g,f,$;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`({
  title,
  mediaStart,
  imagePath,
  videoPath,
  iframeSrc,
  content
}) => \`
<div class="media-element \${mediaStart ? \`media-element--reverse\` : ''}">
    
    <div class="media-element--content">
      <h2>\${title}</h2>
      <p>\${content}</p>
    </div>
    <div class="media-element--media">
        \${imagePath ? \`<img src="\${imagePath}" alt="Description of the image">\` : ''}
        \${videoPath ? \`<video controls><source src="\${videoPath}" type="video/mp4">Your browser does not support the video tag.</video>\` : ''}
        \${iframeSrc ? \`<iframe width="560" height="315" src="\${iframeSrc}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\` : ''}
    </div>
</div>
\``,...($=(f=i.parameters)==null?void 0:f.docs)==null?void 0:$.source}}};var w,S,b;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`({
  title,
  mediaStart,
  imagePath,
  videoPath,
  iframeSrc,
  content
}) => \`
<div class="media-element \${mediaStart ? \`media-element--reverse\` : ''}">
    
    <div class="media-element--content">
      <h2>\${title}</h2>
      <p>\${content}</p>
    </div>
    <div class="media-element--media">
        \${imagePath ? \`<img src="\${imagePath}" alt="Description of the image">\` : ''}
        \${videoPath ? \`<video controls><source src="\${videoPath}" type="video/mp4">Your browser does not support the video tag.</video>\` : ''}
        \${iframeSrc ? \`<iframe width="560" height="315" src="\${iframeSrc}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\` : ''}
    </div>
</div>
\``,...(b=(S=r.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var y,P,T;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`({
  title,
  mediaStart,
  imagePath,
  videoPath,
  iframeSrc,
  content
}) => \`
<div class="media-element \${mediaStart ? \`media-element--reverse\` : ''}">
    
    <div class="media-element--content">
      <h2>\${title}</h2>
      <p>\${content}</p>
    </div>
    <div class="media-element--media">
        \${imagePath ? \`<img src="\${imagePath}" alt="Description of the image">\` : ''}
        \${videoPath ? \`<video controls><source src="\${videoPath}" type="video/mp4">Your browser does not support the video tag.</video>\` : ''}
        \${iframeSrc ? \`<iframe width="560" height="315" src="\${iframeSrc}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\` : ''}
    </div>
</div>
\``,...(T=(P=o.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var I,Y,D;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`({
  title,
  mediaStart,
  imagePath,
  videoPath,
  iframeSrc,
  content
}) => \`
<div class="media-element \${mediaStart ? \`media-element--reverse\` : ''}">
    
    <div class="media-element--content">
      <h2>\${title}</h2>
      <p>\${content}</p>
    </div>
    <div class="media-element--media">
        \${imagePath ? \`<img src="\${imagePath}" alt="Description of the image">\` : ''}
        \${videoPath ? \`<video controls><source src="\${videoPath}" type="video/mp4">Your browser does not support the video tag.</video>\` : ''}
        \${iframeSrc ? \`<iframe width="560" height="315" src="\${iframeSrc}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\` : ''}
    </div>
</div>
\``,...(D=(Y=n.parameters)==null?void 0:Y.docs)==null?void 0:D.source}}};const k=["Image","ImageReverse","Video","VideoReverse","Iframe","IframeReverse"];export{o as Iframe,n as IframeReverse,t as Image,a as ImageReverse,i as Video,r as VideoReverse,k as __namedExportsOrder,C as default};
