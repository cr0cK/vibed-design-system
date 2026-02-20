import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./index-C4lZkr4h.js";import{F as a}from"./FocusTrap-D7L6Nql6.js";import{S as u}from"./Stack-CeWigPj7.js";import{B as e}from"./Button-CXef72x6.js";import{I as l}from"./Inline-BWffa32P.js";import{T as p}from"./Text-DDuTvIDd.js";import"./buildVariants-CfwgwYun.js";import"./variantValue-VCXXWlxS.js";const k={title:"Utilities/FocusTrap",component:a,tags:["autodocs"]},n={render:function(){const[s,c]=m.useState(!0);return t.jsxs(u,{gap:"sm",children:[t.jsxs(e,{tone:"neutral",size:"sm",onClick:function(){c(!s)},children:["Toggle trap: ",s?"on":"off"]}),t.jsx(a,{active:s,children:t.jsxs(l,{gap:"xs",children:[t.jsx(e,{tone:"primary",size:"sm",children:"First"}),t.jsx(e,{tone:"neutral",size:"sm",children:"Middle"}),t.jsx(e,{tone:"neutral",size:"sm",children:"Last"})]})}),t.jsx(p,{size:"sm",tone:"muted",children:"Use Tab / Shift+Tab to verify cycling while trap is active."})]})}};var r,o,i;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: function Render() {
    const [active, setActive] = useState(true);
    return <Stack gap="sm">
      <Button tone="neutral" size="sm" onClick={function onClick() {
        setActive(!active);
      }}>Toggle trap: {active ? "on" : "off"}</Button>
      <FocusTrap active={active}>
        <Inline gap="xs">
          <Button tone="primary" size="sm">First</Button>
          <Button tone="neutral" size="sm">Middle</Button>
          <Button tone="neutral" size="sm">Last</Button>
        </Inline>
      </FocusTrap>
      <Text size="sm" tone="muted">Use Tab / Shift+Tab to verify cycling while trap is active.</Text>
    </Stack>;
  }
}`,...(i=(o=n.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const F=["Showcase"];export{n as Showcase,F as __namedExportsOrder,k as default};
