import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-Dd5juukg.js";import{M as o}from"./index-D4pmv5f2.js";import"./index-C4lZkr4h.js";import"./iframe-D6k5elsD.js";import"./index-D17WIwkg.js";import"./index-0li_wt_e.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",li:"li",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Documentation/4. Features",parameters:{options:{showPanel:!1}}}),`
`,e.jsx(n.h1,{id:"features",children:"Features"}),`
`,e.jsx(n.h2,{id:"core-capabilities",children:"Core capabilities"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Themeable components with token-driven styling."}),`
`,e.jsx(n.li,{children:"Shared design tokens for color, spacing, radius, shadows, and typography."}),`
`,e.jsx(n.li,{children:"Composable atom/molecule/organism architecture."}),`
`,e.jsx(n.li,{children:"Context and Zustand support for local complex state."}),`
`,e.jsx(n.li,{children:"Storybook-first documentation and showcase coverage."}),`
`,e.jsx(n.li,{children:"Playwright E2E validation for critical interaction flows."}),`
`]}),`
`,e.jsx(n.h2,{id:"theming-and-tokens",children:"Theming and tokens"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Components consume semantic tokens instead of hard-coded colors."}),`
`,e.jsx(n.li,{children:"Themes can be swapped through provider context."}),`
`,e.jsxs(n.li,{children:["Variant styling remains consistent via ",e.jsx(n.code,{children:"buildVariants"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"accessibility-baseline",children:"Accessibility baseline"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Focus management utilities (",e.jsx(n.code,{children:"FocusTrap"}),", ",e.jsx(n.code,{children:"ClickOutside"}),", ",e.jsx(n.code,{children:"Portal"}),") reused by overlays."]}),`
`,e.jsx(n.li,{children:"Escape and outside-click behavior standardized in overlay patterns."}),`
`,e.jsx(n.li,{children:"Keyboard navigation implemented for interactive controls."}),`
`,e.jsx(n.li,{children:"Automated E2E checks include keyboard interaction and targeted axe assertions."}),`
`]}),`
`,e.jsx(n.h2,{id:"composition-model",children:"Composition model"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Atoms provide low-level reusable primitives."}),`
`,e.jsx(n.li,{children:"Molecules compose atoms into richer controls."}),`
`,e.jsx(n.li,{children:"Organisms orchestrate full UI flows with minimal ceremony."}),`
`]}),`
`,e.jsx(n.h2,{id:"engineering-quality",children:"Engineering quality"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Explicit props and stable APIs."}),`
`,e.jsx(n.li,{children:"Build and typecheck gates."}),`
`,e.jsx(n.li,{children:"Storybook static build as public artifact."}),`
`]})]})}function p(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{p as default};
