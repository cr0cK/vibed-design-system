import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-Dd5juukg.js";import{M as i}from"./index-D4pmv5f2.js";import"./index-C4lZkr4h.js";import"./iframe-D6k5elsD.js";import"./index-D17WIwkg.js";import"./index-0li_wt_e.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function t(s){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Documentation/3. Patterns/Styling",parameters:{options:{showPanel:!1}}}),`
`,n.jsx(e.h1,{id:"styling-patterns",children:"Styling Patterns"}),`
`,n.jsx(e.h2,{id:"1-single-buildvariants-factory",children:"1. Single buildVariants factory"}),`
`,n.jsxs(e.p,{children:["Use ",n.jsx(e.code,{children:"packages/design-system/src/utils/buildVariants.ts"})," only."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import type { CSSObject } from "@emotion/react";
import { newBuildVariants } from "@productive-codebases/build-variants";

export function buildVariants<TProps extends object>(props: TProps) {
  return newBuildVariants<TProps, CSSObject>(props);
}
`})}),`
`,n.jsx(e.h2,{id:"2-styled-component-declaration",children:"2. Styled component declaration"}),`
`,n.jsx(e.p,{children:"Declare styles outside render functions."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";

interface StackProps {
  gap?: "sm" | "md";
}

const StackRoot = styled.div<StackProps>(props => {
  return buildVariants(props)
    .css({ display: "flex", flexDirection: "column" })
    .variant("gap", props.gap ?? "md", {
      sm: { gap: "var(--ds-space-sm)" },
      md: { gap: "var(--ds-space-md)" }
    })
    .end();
});
`})}),`
`,n.jsx(e.h2,{id:"3-boolean-variants",children:"3. Boolean variants"}),`
`,n.jsx(e.p,{children:"Map booleans to string-union values for predictable variant keys."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`function toBooleanVariant(value: boolean | undefined): "true" | "false" {
  return value ? "true" : "false";
}
`})}),`
`,n.jsx(e.h2,{id:"4-theming",children:"4. Theming"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Keep tokens in ",n.jsx(e.code,{children:"src/theme/tokens.ts"})]}),`
`,n.jsx(e.li,{children:"Resolve theme object in provider"}),`
`,n.jsxs(e.li,{children:["Expose CSS variables through ",n.jsx(e.code,{children:"toThemeCssVars"})]}),`
`]})]})}function x(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(t,{...s})}):t(s)}export{x as default};
