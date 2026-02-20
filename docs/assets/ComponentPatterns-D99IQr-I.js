import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-Dd5juukg.js";import{M as s}from"./index-D4pmv5f2.js";import"./index-C4lZkr4h.js";import"./iframe-D6k5elsD.js";import"./index-D17WIwkg.js";import"./index-0li_wt_e.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function o(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...r(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Documentation/3. Patterns",parameters:{options:{showPanel:!1}}}),`
`,n.jsx(e.h1,{id:"patterns",children:"Patterns"}),`
`,n.jsx(e.h2,{id:"component-authoring-rules",children:"Component authoring rules"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Declare a full ",n.jsx(e.code,{children:"Props"})," interface for each component."]}),`
`,n.jsx(e.li,{children:"Do not destructure props in component signatures."}),`
`,n.jsx(e.li,{children:"Keep style declarations outside component render bodies."}),`
`,n.jsx(e.li,{children:"Prefer composition over deeply configurable single components."}),`
`,n.jsxs(e.li,{children:["Keep prop contracts honest: when using ",n.jsx(e.code,{children:"extends HTMLAttributes<...>"}),", forward supported props to the root node."]}),`
`]}),`
`,n.jsx(e.h2,{id:"consistency-rules",children:"Consistency rules"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Reuse existing tokens and variants before introducing new ones."}),`
`,n.jsxs(e.li,{children:["Favor ",n.jsx(e.code,{children:"controlSize"})," and semantic tone variants over inline one-off styling."]}),`
`,n.jsxs(e.li,{children:["Keep naming uniform across families (",n.jsx(e.code,{children:"open"}),", ",n.jsx(e.code,{children:"onClose"}),", ",n.jsx(e.code,{children:"tone"}),", ",n.jsx(e.code,{children:"controlSize"}),")."]}),`
`]}),`
`,n.jsx(e.h2,{id:"overlay-composition",children:"Overlay composition"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Reuse utility components for common behavior:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"Portal"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"FocusTrap"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"ClickOutside"})}),`
`]}),`
`]}),`
`,n.jsx(e.li,{children:"Add custom handling only for behavior unique to that component."}),`
`]}),`
`,n.jsx(e.h2,{id:"html-props-contract",children:"HTML props contract"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["If the component intentionally only supports ",n.jsx(e.code,{children:"className"}),", use a narrow interface instead of ",n.jsx(e.code,{children:"HTMLAttributes"}),"."]}),`
`,n.jsxs(e.li,{children:["If the component extends DOM attributes, forward ",n.jsx(e.code,{children:"id"}),", ",n.jsx(e.code,{children:"data-*"}),", ARIA attributes, and handlers to its root."]}),`
`,n.jsx(e.li,{children:"Avoid typing broad DOM props that are dropped at runtime."}),`
`]}),`
`,n.jsx(e.h2,{id:"component-template",children:"Component template"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import type { HTMLAttributes } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";

export interface ExampleProps extends HTMLAttributes<HTMLDivElement> {
  tone?: "default" | "muted";
}

const ExampleRoot = styled.div<ExampleProps>(props => {
  return buildVariants(props)
    .css({ display: "block" })
    .variant("tone", props.tone ?? "default", {
      default: { color: "var(--ds-color-text)" },
      muted: { color: "var(--ds-color-text-muted)" }
    })
    .end();
});

export function Example(props: ExampleProps) {
  return <ExampleRoot {...props} />;
}
`})}),`
`,n.jsx(e.h2,{id:"architecture-pattern",children:"Architecture pattern"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Atoms should stay generic and reusable."}),`
`,n.jsx(e.li,{children:"Molecules compose atoms with minimal behavior."}),`
`,n.jsx(e.li,{children:"Organisms may connect to context/store and orchestrate flows."}),`
`]}),`
`,n.jsx(e.h2,{id:"pattern-references",children:"Pattern references"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"Documentation/3. Patterns/Styling"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"Documentation/3. Patterns/State"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"Documentation/3. Patterns/Control Size"})}),`
`]})]})}function u(t={}){const{wrapper:e}={...r(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{u as default};
