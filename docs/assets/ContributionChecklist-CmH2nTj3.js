import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-Dd5juukg.js";import{M as r}from"./index-D4pmv5f2.js";import"./index-C4lZkr4h.js";import"./iframe-D6k5elsD.js";import"./index-D17WIwkg.js";import"./index-0li_wt_e.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function t(i){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Documentation/6. Contributions",parameters:{options:{showPanel:!1}}}),`
`,e.jsx(n.h1,{id:"contributions",children:"Contributions"}),`
`,e.jsx(n.h2,{id:"contribution-model",children:"Contribution model"}),`
`,e.jsx(n.p,{children:"This project is not currently open to direct external code contributions."}),`
`,e.jsx(n.p,{children:"Preferred flow:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Open an issue with the problem."}),`
`,e.jsxs(n.li,{children:["Provide concrete context:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"what component/story is affected"}),`
`,e.jsx(n.li,{children:"expected vs actual behavior"}),`
`,e.jsx(n.li,{children:"screenshots or recordings when relevant"}),`
`,e.jsx(n.li,{children:"reproduction steps"}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:"Include clear acceptance criteria."}),`
`,e.jsx(n.li,{children:"The issue is then handled in dedicated LLM implementation sessions with validation and traceable commits."}),`
`]}),`
`,e.jsx(n.h2,{id:"issue-quality-checklist",children:"Issue quality checklist"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Scope is narrow and actionable."}),`
`,e.jsx(n.li,{children:"Reproduction is deterministic."}),`
`,e.jsx(n.li,{children:"Impact and priority are explicit."}),`
`,e.jsx(n.li,{children:"Constraints are stated (design, API, accessibility, backward compatibility)."}),`
`]}),`
`,e.jsx(n.h2,{id:"internal-implementation-checklist",children:"Internal implementation checklist"}),`
`,e.jsx(n.p,{children:"When an issue is picked up for implementation, the session validates:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pnpm typecheck"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pnpm --filter @vibed/design-system build"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pnpm --filter @vibed/storybook build"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pnpm test:e2e"})}),`
`]})]})}function j(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{j as default};
