import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-Dd5juukg.js";import{M as d}from"./index-D4pmv5f2.js";import"./index-C4lZkr4h.js";import"./iframe-D6k5elsD.js";import"./index-D17WIwkg.js";import"./index-0li_wt_e.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function l(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Documentation/3. Patterns/Control Size",parameters:{options:{showPanel:!1}}}),`
`,e.jsx(n.h1,{id:"control-size",children:"Control Size"}),`
`,e.jsx(n.p,{children:"This page defines the shared size contract for composable controls in the design system."}),`
`,e.jsx(n.h2,{id:"goal",children:"Goal"}),`
`,e.jsx(n.p,{children:"Use one semantic size prop across controls:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:'controlSize?: "sm" | "md" | "lg"'})}),`
`]}),`
`,e.jsx(n.p,{children:"This keeps layouts and forms visually consistent while still allowing pragmatic composition."}),`
`,e.jsx(n.h2,{id:"api-rules",children:"API Rules"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Prefer ",e.jsx(n.code,{children:"controlSize"})," for all control-like components."]}),`
`,e.jsxs(n.li,{children:["Default to ",e.jsx(n.code,{children:"md"}),"."]}),`
`,e.jsxs(n.li,{children:["Keep legacy ",e.jsx(n.code,{children:"size"})," only as a compatibility alias where it already exists."]}),`
`,e.jsx(n.li,{children:"Resolve once in implementation:"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const controlSize = props.controlSize ?? props.size ?? "md";
`})}),`
`,e.jsx(n.h2,{id:"coverage",children:"Coverage"}),`
`,e.jsx(n.h3,{id:"atoms",children:"Atoms"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Button"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"IconButton"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Switch"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Input"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Textarea"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Select"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Checkbox"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Radio"})}),`
`]}),`
`,e.jsx(n.h3,{id:"molecules",children:"Molecules"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Tabs"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Pagination"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Field"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"FormControl"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"HelperText"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Alert"})}),`
`]}),`
`,e.jsx(n.h2,{id:"implementation-pattern",children:"Implementation Pattern"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Add explicit props interface entries for ",e.jsx(n.code,{children:"controlSize"})," (and ",e.jsx(n.code,{children:"size"})," only if needed for compatibility)."]}),`
`,e.jsxs(n.li,{children:["Add ",e.jsx(n.code,{children:'buildVariants(...).variant("controlSize", ...)'})," near base styles."]}),`
`,e.jsxs(n.li,{children:["Forward ",e.jsx(n.code,{children:"controlSize"})," to internal controls and typography."]}),`
`,e.jsxs(n.li,{children:["Keep layout rhythm (gap, padding, min-height, text size) tied to ",e.jsx(n.code,{children:"controlSize"}),"."]}),`
`,e.jsxs(n.li,{children:["Add Storybook examples for ",e.jsx(n.code,{children:"sm"}),", ",e.jsx(n.code,{children:"md"}),", and ",e.jsx(n.code,{children:"lg"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"layout-rule",children:"Layout Rule"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Apply spacing on layout containers (",e.jsx(n.code,{children:"Stack"}),", ",e.jsx(n.code,{children:"Grid"}),", wrappers), not directly on individual fields."]}),`
`,e.jsx(n.li,{children:"Controls should expose size variants and avoid hard-coded external margins."}),`
`]}),`
`,e.jsx(n.h2,{id:"definition-of-done",children:"Definition Of Done"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Supports ",e.jsx(n.code,{children:"controlSize"})," with ",e.jsx(n.code,{children:"sm"}),", ",e.jsx(n.code,{children:"md"}),", ",e.jsx(n.code,{children:"lg"})]}),`
`,e.jsxs(n.li,{children:["Defaults to ",e.jsx(n.code,{children:"md"})]}),`
`,e.jsx(n.li,{children:"Propagates size to nested controls/text where relevant"}),`
`,e.jsxs(n.li,{children:["Storybook includes ",e.jsx(n.code,{children:"sm"}),"/",e.jsx(n.code,{children:"md"}),"/",e.jsx(n.code,{children:"lg"})," examples"]}),`
`,e.jsxs(n.li,{children:["Build passes:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pnpm --filter @vibed/design-system build"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pnpm --filter @vibed/storybook build"})}),`
`]}),`
`]}),`
`]})]})}function m(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(l,{...i})}):l(i)}export{m as default};
