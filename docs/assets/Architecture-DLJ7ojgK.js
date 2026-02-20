import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-Dd5juukg.js";import{M as c}from"./index-D4pmv5f2.js";import"./index-C4lZkr4h.js";import"./iframe-D6k5elsD.js";import"./index-D17WIwkg.js";import"./index-0li_wt_e.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function s(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"Documentation/2. Architecture",parameters:{options:{showPanel:!1}}}),`
`,n.jsx(e.h1,{id:"architecture",children:"Architecture"}),`
`,n.jsx(e.h2,{id:"initial-guidance-baseline",children:"Initial guidance baseline"}),`
`,n.jsx(e.p,{children:"The implementation follows these original constraints:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"latest React runtime"}),`
`,n.jsxs(e.li,{children:["CSS-in-JS with ",n.jsx(e.code,{children:"@emotion/styled"})," and ",n.jsx(e.code,{children:"@productive-codebases/build-variants"})]}),`
`,n.jsx(e.li,{children:"explicit props interfaces for each component"}),`
`,n.jsx(e.li,{children:"no prop destructuring in function signatures"}),`
`,n.jsx(e.li,{children:"context for cross-tree concerns, no unnecessary prop drilling"}),`
`,n.jsx(e.li,{children:"pragmatic atom/molecule/organism layering"}),`
`,n.jsxs(e.li,{children:["lightweight stores (",n.jsx(e.code,{children:"zustand"}),") for local complex state"]}),`
`]}),`
`,n.jsx(e.h2,{id:"workspace",children:"Workspace"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"packages/design-system"}),": reusable UI library"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"apps/storybook"}),": showcase and component documentation"]}),`
`]}),`
`,n.jsx(e.h2,{id:"layering",children:"Layering"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Atoms: small reusable primitives with focused APIs"}),`
`,n.jsx(e.li,{children:"Molecules: lightweight composition of atoms"}),`
`,n.jsx(e.li,{children:"Organisms: feature-level composition with state/context integration"}),`
`]}),`
`,n.jsx(e.h2,{id:"source-layout",children:"Source layout"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"src/atoms"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"src/molecules"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"src/organisms"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"src/utilities"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"src/context"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"src/stores"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"src/theme"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"src/utils"})}),`
`]}),`
`,n.jsx(e.h2,{id:"key-decisions",children:"Key decisions"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"React + TypeScript only"}),`
`,n.jsxs(e.li,{children:["CSS-in-JS through ",n.jsx(e.code,{children:"@emotion/styled"})]}),`
`,n.jsxs(e.li,{children:["Variants declared via ",n.jsx(e.code,{children:"buildVariants(props).css().variant().end()"})]}),`
`,n.jsx(e.li,{children:"Shared concerns via Context when appropriate"}),`
`,n.jsx(e.li,{children:"Local UI state with small Zustand stores"}),`
`,n.jsxs(e.li,{children:["Overlay behavior standardized via utility composition (",n.jsx(e.code,{children:"Portal"}),", ",n.jsx(e.code,{children:"FocusTrap"}),", ",n.jsx(e.code,{children:"ClickOutside"}),")"]}),`
`,n.jsx(e.li,{children:"Storybook is the public contract and verification surface"}),`
`]}),`
`,n.jsx(e.h2,{id:"engineering-constraints",children:"Engineering constraints"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"no styles created inside render functions"}),`
`,n.jsxs(e.li,{children:["one shared ",n.jsx(e.code,{children:"buildVariants"})," factory"]}),`
`,n.jsx(e.li,{children:"deterministic variants with string unions"}),`
`,n.jsx(e.li,{children:"controlled/uncontrolled semantics documented in stories"}),`
`,n.jsx(e.li,{children:"accessibility behavior validated through keyboard + E2E flows"}),`
`]})]})}function m(i={}){const{wrapper:e}={...r(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{m as default};
