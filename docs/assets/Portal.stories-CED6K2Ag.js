import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-C4lZkr4h.js";import{P as a}from"./Portal-GQXdu2oJ.js";import{S as m}from"./Stack-CeWigPj7.js";import{B as d}from"./Button-CXef72x6.js";import{B as p}from"./Box-Cmoc61Tl.js";import{T as l}from"./Text-DDuTvIDd.js";import"./index-D17WIwkg.js";import"./index-0li_wt_e.js";import"./buildVariants-CfwgwYun.js";import"./variantValue-VCXXWlxS.js";const y={title:"Utilities/Portal",component:a,tags:["autodocs"]},o={render:function(){const[t,i]=c.useState(!1);return e.jsxs(m,{gap:"sm",children:[e.jsx(d,{tone:"primary",onClick:function(){i(!t)},children:"Toggle portal content"}),t?e.jsx(a,{children:e.jsx(p,{surface:"surface",padding:"md",radius:"md",border:"subtle",children:e.jsx(l,{size:"sm",children:"Rendered in document body via Portal."})})}):null]})}};var r,n,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    return <Stack gap="sm">
      <Button tone="primary" onClick={function onClick() {
        setOpen(!open);
      }}>
        Toggle portal content
      </Button>
      {open ? <Portal>
          <Box surface="surface" padding="md" radius="md" border="subtle">
            <Text size="sm">Rendered in document body via Portal.</Text>
          </Box>
        </Portal> : null}
    </Stack>;
  }
}`,...(s=(n=o.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const C=["Showcase"];export{o as Showcase,C as __namedExportsOrder,y as default};
