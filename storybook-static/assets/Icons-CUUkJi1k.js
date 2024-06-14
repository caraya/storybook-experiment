import{j as n}from"./jsx-runtime-D_xMxKvB.js";import{u as r}from"./index-Vmd-o0lh.js";import{M as s}from"./index-8RRYiVhu.js";import"./iframe-k6bqA7lk.js";import"../sb-preview/runtime.js";import"./index-B5rfWaSj.js";import"./index-DXimoRZY.js";import"./index-DrFu-skq.js";function t(o){const e={code:"code",p:"p",pre:"pre",...r(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Docs/Icons"}),`
`,n.jsx(e.p,{children:"This is the second attempt. It almost works; it doesn't let you manipulate the color (the color control doesn't work)."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`export default {
  title: 'Foundations/Icons',
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
    size: { control: 'range', min: 10, max: 100, step: 1 }
  },
  parameters: {
    layout: 'centered',
  },
};


const IconsTemplate = ({ color, size, icons }) => {
  const container = document.createElement('div');
  container.classList.add('icon-container');

  icons.forEach(icon => {
    const iconWrapper = document.createElement('div');
    iconWrapper.classList.add('icon-wrapper');
    iconWrapper.style.width = \`\${size}px\`;    iconWrapper.style.fill = \`\${color}\`;

    const img = document.createElement('img');
    img.src = \`stories/assets/icons/\${icon.filename}\`;
    img.style.width = '100%';
    img.style.height = 'auto';
    img.style.fill = \`\${color}\`;
    
    const nameLabel = document.createElement('div');
    nameLabel.textContent = icon.name;
    nameLabel.style.marginTop = '8px';  // Space between the icon and its label

    iconWrapper.appendChild(img);
    iconWrapper.appendChild(nameLabel);
    container.appendChild(iconWrapper);
  });

  return container;
};

export const Browsers = IconsTemplate.bind({});
Browsers.args = {
  size: 48,
  icons: [
    { name: 'Chrome Browser', filename: 'browser-chrome.svg' },
    { name: 'Edge Browser', filename: 'browser-edge.svg' },
    { name: 'Firefox Browser', filename: 'browser-firefox.svg' },
    { name: 'Safari Browser', filename: 'browser-safari.svg' },
  ]
};
`})}),`
`,n.jsxs(e.p,{children:["The way to get the code to work showing the change of colors. However, because we're loading the icons and inserting the content dynamically, the code doesn't appear when you click on Storybook's ",n.jsx(e.code,{children:"show code"})," button"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`export default {
  title: 'Foundations/Icons',
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
    size: { control: 'range', min: 10, max: 100, step: 1 }
  },
  parameters: {
    layout: 'centered',
  },
};

const IconsTemplate = ({ color, size, icons }, onComplete) => {
  const container = document.createElement('div');
  container.classList.add('icon-container')

  const promises = icons.map(async (icon) => {
    const iconWrapper = document.createElement('div');
    iconWrapper.style.display = 'flex';
    iconWrapper.style.flexDirection = 'column';
    iconWrapper.style.alignItems = 'center';
    iconWrapper.style.width = \`\${size}px\`;

    const response = await fetch(\`stories/assets/icons/\${icon.filename}\`);
    const svgContent = await response.text();

    const svgContainer = document.createElement('div');
    svgContainer.innerHTML = svgContent;
    svgContainer.querySelector('svg').style.fill = color;
    svgContainer.querySelector('svg').setAttribute('width', \`\${size}px\`);
    svgContainer.querySelector('svg').setAttribute('height', \`\${size}px\`);
    iconWrapper.appendChild(svgContainer);

    const nameLabel = document.createElement('div');
    nameLabel.textContent = icon.name;
    nameLabel.style.marginTop = '8px';
    iconWrapper.appendChild(nameLabel);


    // Adding the download link
    const downloadLink = document.createElement('a');
    downloadLink.href = \`stories/assets/icons/\${icon.filename}\`;
    downloadLink.textContent = 'Download';
    downloadLink.style.marginTop = '1rem';
    downloadLink.style.color = color;  // Optionally style the link with the icon color
    iconWrapper.appendChild(downloadLink);

    return iconWrapper;
  });

  Promise.all(promises).then(iconWrappers => {
    iconWrappers.forEach(wrapper => container.appendChild(wrapper));
    onComplete(container);  // Callback to attach the completed DOM to the story
  });
};


export const Browsers = (args) => {
  const storyElement = document.createElement('div');
  IconsTemplate(args, (content) => {
    storyElement.appendChild(content);
  });
  return storyElement;
};

Browsers.args = {
  size: 48,
  icons: [
    { name: 'Chrome Browser', filename: 'browser-chrome.svg' },
    { name: 'Edge Browser', filename: 'browser-edge.svg' },
    { name: 'Firefox Browser', filename: 'browser-firefox.svg' },
    { name: 'Safari Browser', filename: 'browser-safari.svg' },
  ]
};
`})})]})}function h(o={}){const{wrapper:e}={...r(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t(o)}export{h as default};
