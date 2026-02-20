import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{S as m}from"./Stack-CeWigPj7.js";import{T as n}from"./Text-DDuTvIDd.js";import{B as d}from"./Box-Cmoc61Tl.js";import"./buildVariants-CfwgwYun.js";import"./index-C4lZkr4h.js";const c={durationMs:160,easing:"ease"},u={durationMs:180,easing:"cubic-bezier(.2,.8,.2,1)"};function r(t){return`transition: all ${t.durationMs}ms ${t.easing};`}const h={title:"Utilities/Transitions",tags:["autodocs"]},e={render:function(){return s.jsxs(m,{gap:"sm",children:[s.jsxs(n,{size:"sm",children:["fade transition: ",r(c)]}),s.jsxs(n,{size:"sm",children:["scale transition: ",r(u)]}),s.jsx(d,{surface:"muted",padding:"sm",radius:"md",border:"subtle",children:s.jsx(n,{size:"sm",tone:"muted",children:"Transition presets are utility tokens for component motion."})})]})}};var i,o,a;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: function Render() {
    return <Stack gap="sm">
        <Text size="sm">fade transition: {getTransitionCss(fadeTransition)}</Text>
        <Text size="sm">scale transition: {getTransitionCss(scaleTransition)}</Text>
        <Box surface="muted" padding="sm" radius="md" border="subtle">
          <Text size="sm" tone="muted">Transition presets are utility tokens for component motion.</Text>
        </Box>
      </Stack>;
  }
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const j=["Showcase"];export{e as Showcase,j as __namedExportsOrder,h as default};
