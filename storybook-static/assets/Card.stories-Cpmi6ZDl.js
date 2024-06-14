const ce=({type:f="default",size:te,cardTitle:re,hasImage:oe,isAvatar:se,imageURL:y,cardText:ie,hasFooter:ne,footerText:me})=>{const a=document.createElement("div"),h=document.createElement("div");h.className=["card--title"],a.appendChild(h);const v=document.createElement("h2"),de=re;if(v.append(de),h.append(v),oe)if(se){const e=document.createElement("img");e.setAttribute("src",`${y}`),e.setAttribute("class","card--image-avatar"),a.append(e)}else{const e=document.createElement("img");e.setAttribute("src",`${y}`),e.setAttribute("class","card--image"),a.append(e)}const g=document.createElement("div");if(g.setAttribute("class","card--body"),g.append(ie),a.append(g),ne){const e=document.createElement("div");e.setAttribute("class","card--footer");const x=document.createElement("p");x.append(me),e.append(x),a.append(e)}return a.className=["card",`card--${f}`,`card--${te}`].join(" "),a},le={title:"Components/Card",tags:["autodocs"],render:({...f})=>ce({...f}),argTypes:{cardTitle:{control:"text",description:"The title for the card",defaultValue:"Card Title"},hasImage:{control:"boolean",description:"Does the card have an image?",defaultValue:!0},isAvatar:{control:"boolean",description:"Is the image an avatar image?",defaultValue:!0},imageURL:{control:"text",description:"The URL for the image",defaultValue:"https://assets.codepen.io/32795/avif-test-image.avif"},type:{options:["default","shadow"],control:{type:"radio"}},size:{defaultValue:"large",control:{type:"select"},description:"Size of the button",options:["small","medium","large","extra-large"]},cardText:{control:"text",description:"Short text for the card",defaultValue:"Short text for the card"},hasFooter:{control:"boolean",description:"Does the card have a footer",defaultValue:"false"},footerText:{control:"text",description:"Text for the footer",defaultValue:"This is the text for the footer"}}},t={args:{type:"default",size:"medium",cardTitle:"Demo Card",cardText:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",hasImage:!0,imageURL:"https://assets.codepen.io/32795/avif-test-image.avif",hasFooter:!0,footerText:"Demo footer for the card"}},r={args:{type:"default",size:"medium",cardTitle:"Demo Card",cardText:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",hasImage:!1,hasFooter:!0,footerText:"Demo footer for the card"}},o={args:{type:"default",size:"medium",cardTitle:"Demo Card",cardText:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",hasImage:!0,imageURL:"https://assets.codepen.io/32795/avif-test-image.avif",hasFooter:!1}},s={args:{type:"default",size:"medium",cardTitle:"Demo Card",cardText:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",hasImage:!0,isAvatar:!0,imageURL:"https://assets.codepen.io/32795/avif-test-image.avif",hasFooter:!0,footerText:"Demo footer for the card"}},i={args:{type:"default",size:"medium",cardTitle:"Demo Card",cardText:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",hasImage:!0,isAvatar:!0,imageURL:"https://assets.codepen.io/32795/avif-test-image.avif",hasFooter:!1}},n={args:{type:"default",size:"medium",cardTitle:"Demo Card",cardText:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",hasImage:!1,hasFooter:!1}},m={args:{type:"shadow",size:"medium",cardTitle:"Demo Card",cardText:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",hasImage:!0,imageURL:"https://assets.codepen.io/32795/avif-test-image.avif",hasFooter:!0,footerText:"Demo footer for the card"}},d={args:{type:"shadow",size:"medium",cardTitle:"Demo Card",cardText:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",hasImage:!1,hasFooter:!0,footerText:"Demo footer for the card"}},c={args:{type:"shadow",size:"medium",cardTitle:"Demo Card",cardText:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",hasImage:!0,imageURL:"https://assets.codepen.io/32795/avif-test-image.avif",hasFooter:!1}},l={args:{type:"shadow",size:"medium",cardTitle:"Demo Card",cardText:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",hasImage:!0,isAvatar:!0,imageURL:"https://assets.codepen.io/32795/avif-test-image.avif",hasFooter:!0,footerText:"Demo footer for the card"}},p={args:{type:"shadow",size:"medium",cardTitle:"Demo Card",cardText:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",hasImage:!0,isAvatar:!0,imageURL:"https://assets.codepen.io/32795/avif-test-image.avif",hasFooter:!1}},u={args:{type:"shadow",size:"medium",cardTitle:"Demo Card",cardText:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",hasImage:!1,hasFooter:!1}};var C,I,T;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    type: 'default',
    size: 'medium',
    cardTitle: 'Demo Card',
    cardText: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    hasImage: true,
    imageURL: 'https://assets.codepen.io/32795/avif-test-image.avif',
    hasFooter: true,
    footerText: 'Demo footer for the card'
  }
}`,...(T=(I=t.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var L,D,b;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    type: 'default',
    size: 'medium',
    cardTitle: 'Demo Card',
    cardText: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    hasImage: false,
    hasFooter: true,
    footerText: 'Demo footer for the card'
  }
}`,...(b=(D=r.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};var F,S,z;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    type: 'default',
    size: 'medium',
    cardTitle: 'Demo Card',
    cardText: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    hasImage: true,
    imageURL: 'https://assets.codepen.io/32795/avif-test-image.avif',
    hasFooter: false
  }
}`,...(z=(S=o.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var w,k,B;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    type: 'default',
    size: 'medium',
    cardTitle: 'Demo Card',
    cardText: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    hasImage: true,
    isAvatar: true,
    imageURL: 'https://assets.codepen.io/32795/avif-test-image.avif',
    hasFooter: true,
    footerText: 'Demo footer for the card'
  }
}`,...(B=(k=s.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var A,R,U;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    type: 'default',
    size: 'medium',
    cardTitle: 'Demo Card',
    cardText: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    hasImage: true,
    isAvatar: true,
    imageURL: 'https://assets.codepen.io/32795/avif-test-image.avif',
    hasFooter: false
  }
}`,...(U=(R=i.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var N,P,E;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    type: 'default',
    size: 'medium',
    cardTitle: 'Demo Card',
    cardText: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    hasImage: false,
    hasFooter: false
  }
}`,...(E=(P=n.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var V,O,$;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    type: 'shadow',
    size: 'medium',
    cardTitle: 'Demo Card',
    cardText: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    hasImage: true,
    imageURL: 'https://assets.codepen.io/32795/avif-test-image.avif',
    hasFooter: true,
    footerText: 'Demo footer for the card'
  }
}`,...($=(O=m.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var _,j,H;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    type: 'shadow',
    size: 'medium',
    cardTitle: 'Demo Card',
    cardText: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    hasImage: false,
    hasFooter: true,
    footerText: 'Demo footer for the card'
  }
}`,...(H=(j=d.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};var W,q,G;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    type: 'shadow',
    size: 'medium',
    cardTitle: 'Demo Card',
    cardText: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    hasImage: true,
    imageURL: 'https://assets.codepen.io/32795/avif-test-image.avif',
    hasFooter: false
  }
}`,...(G=(q=c.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,K,M;l.parameters={...l.parameters,docs:{...(J=l.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    type: 'shadow',
    size: 'medium',
    cardTitle: 'Demo Card',
    cardText: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    hasImage: true,
    isAvatar: true,
    imageURL: 'https://assets.codepen.io/32795/avif-test-image.avif',
    hasFooter: true,
    footerText: 'Demo footer for the card'
  }
}`,...(M=(K=l.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var Q,X,Y;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    type: 'shadow',
    size: 'medium',
    cardTitle: 'Demo Card',
    cardText: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    hasImage: true,
    isAvatar: true,
    imageURL: 'https://assets.codepen.io/32795/avif-test-image.avif',
    hasFooter: false
  }
}`,...(Y=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    type: 'shadow',
    size: 'medium',
    cardTitle: 'Demo Card',
    cardText: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    hasImage: false,
    hasFooter: false
  }
}`,...(ae=(ee=u.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};const pe=["Primary","PrimaryNoImage","PrimaryNoFooter","PrimaryAvatar","PrimaryAvatarNoFooter","PrimaryTextOnly","Shadow","ShadowNoImage","ShadowNoFooter","ShadowAvatar","ShadowAvatarNoFooter","ShadowTextOnly"];export{t as Primary,s as PrimaryAvatar,i as PrimaryAvatarNoFooter,o as PrimaryNoFooter,r as PrimaryNoImage,n as PrimaryTextOnly,m as Shadow,l as ShadowAvatar,p as ShadowAvatarNoFooter,c as ShadowNoFooter,d as ShadowNoImage,u as ShadowTextOnly,pe as __namedExportsOrder,le as default};
