import{j as e}from"./jsx-runtime-D_xMxKvB.js";import{u as r}from"./index-Vmd-o0lh.js";import{M as o}from"./index-8RRYiVhu.js";import"./iframe-k6bqA7lk.js";import"../sb-preview/runtime.js";import"./index-B5rfWaSj.js";import"./index-DXimoRZY.js";import"./index-DrFu-skq.js";function s(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Docs/Grid Research"}),`
`,e.jsx(n.h1,{id:"grid-research",children:"Grid research"}),`
`,e.jsx(n.p,{children:"I'm working on different Grid systems and models. The ideaa is that once we have the grids set up, we can create different layouts and styles for different designs and devices."}),`
`,e.jsx(n.p,{children:"The current grids versions are:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"4 columns"}),`
`,e.jsx(n.li,{children:"6 columns"}),`
`,e.jsx(n.li,{children:"8 columns"}),`
`,e.jsx(n.li,{children:"12 columns"}),`
`,e.jsx(n.li,{children:"15 columns"}),`
`]}),`
`,e.jsxs(n.p,{children:["All these columns use the ",e.jsx(n.code,{children:"fr"})," (flexible ratio) unit to create equal-width columns. We can also use absolute values for the different columns and we can mix and match different units to geet the reults we want."]}),`
`,e.jsx(n.h2,{id:"compound-grids",children:"Compound grids"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"2x3 Compound grid (2 + 1 + 1 + 2)"}),`
`,e.jsx(n.li,{children:"3x4 Compound grid (3 + 1 + 2 + 2 + 1 + 3)"}),`
`,e.jsx(n.li,{children:"4x6 Compound grid (2 + 1 + 1 + 2 + 2 + 1 + 1 + 2)"}),`
`]}),`
`,e.jsx(n.p,{children:"Compound grids make it easier to layout content in a grid. Because not all cells on the grid are equally sized we can play with positioning content in the bigger cells and leaving the smaller ones empty or viceversa depending on the design."}),`
`,e.jsx(n.h2,{id:"experiments",children:"Experiments"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"6 columns equivalent with a larger center column (1 + 4 + 1). This column positions content in a grid item"}),`
`]}),`
`,e.jsxs(n.p,{children:["For more information about compound grids see ",e.jsx(n.a,{href:"https://www.smashingmagazine.com/2019/07/inspired-design-decisions-pressing-matters/",rel:"nofollow",children:"Inspired Design Decisions: Pressing Matters"})," by ",e.jsx(n.a,{href:"https://www.smashingmagazine.com/author/andy-clarke/",rel:"nofollow",children:"Andrew Clarke"})]}),`
`,e.jsxs(n.p,{children:["To create your own compound grid, check Michelle Barker's ",e.jsx(n.a,{href:"https://codepen.io/michellebarker/full/zYOMYWv",rel:"nofollow",children:"Compoung Grid Generator"})]}),`
`,e.jsxs(n.p,{children:["A follow up is the positioning items in the grid. For an idea of how to do it, see this ",e.jsx(n.a,{href:"https://codepen.io/caraya/pen/poWdRwP",rel:"nofollow",children:"Codepen"})]})]})}function p(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{p as default};
