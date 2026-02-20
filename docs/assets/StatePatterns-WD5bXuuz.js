import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-Dd5juukg.js";import{M as o}from"./index-D4pmv5f2.js";import"./index-C4lZkr4h.js";import"./iframe-D6k5elsD.js";import"./index-D17WIwkg.js";import"./index-0li_wt_e.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function t(s){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...i(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Documentation/3. Patterns/State",parameters:{options:{showPanel:!1}}}),`
`,n.jsx(e.h1,{id:"state-patterns",children:"State Patterns"}),`
`,n.jsx(e.h2,{id:"context",children:"Context"}),`
`,n.jsx(e.p,{children:"Use context for cross-cutting design-system concerns."}),`
`,n.jsx(e.p,{children:"Current pattern:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"DesignSystemProvider"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"DesignSystemContext"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"useDesignSystemContext"})}),`
`]}),`
`,n.jsx(e.p,{children:"Use this for:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"density mode"}),`
`,n.jsx(e.li,{children:"theme mode"}),`
`,n.jsx(e.li,{children:"other global UI configuration concerns"}),`
`]}),`
`,n.jsx(e.h2,{id:"zustand-stores",children:"Zustand stores"}),`
`,n.jsx(e.p,{children:"Use small focused stores for local domain state."}),`
`,n.jsx(e.p,{children:"Current examples:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"useUIStore"}),": shell and panel toggles"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"useNotificationsStore"}),": notification list and actions"]}),`
`]}),`
`,n.jsx(e.p,{children:"Rules:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Keep store shape small and explicit."}),`
`,n.jsx(e.li,{children:"Keep actions inside store declaration."}),`
`,n.jsx(e.li,{children:"Avoid monolithic global stores."}),`
`]})]})}function p(s={}){const{wrapper:e}={...i(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(t,{...s})}):t(s)}export{p as default};
