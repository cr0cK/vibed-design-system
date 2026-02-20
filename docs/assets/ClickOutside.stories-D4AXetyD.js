import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-C4lZkr4h.js";import{C as a}from"./ClickOutside-Dk9E0MtN.js";import{S as l}from"./Stack-CeWigPj7.js";import{B as d}from"./Button-CXef72x6.js";import{B as m}from"./Box-Cmoc61Tl.js";import{T as p}from"./Text-DDuTvIDd.js";import"./buildVariants-CfwgwYun.js";import"./variantValue-VCXXWlxS.js";const b={title:"Utilities/ClickOutside",component:a,tags:["autodocs"]},t={render:function(){const[s,n]=u.useState(!1);return e.jsxs(l,{gap:"sm",children:[e.jsx(d,{tone:"neutral",size:"sm",onClick:function(){n(!s)},children:"Toggle panel"}),s?e.jsx(a,{onClickOutside:function(){n(!1)},children:e.jsx(m,{surface:"surface",padding:"sm",radius:"md",border:"subtle",children:e.jsx(p,{size:"sm",children:"Click outside this box to close it."})})}):null]})}};var o,r,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    return <Stack gap="sm">
      <Button tone="neutral" size="sm" onClick={function onClick() {
        setOpen(!open);
      }}>Toggle panel</Button>
      {open ? <ClickOutside onClickOutside={function onOutside() {
        setOpen(false);
      }}>
          <Box surface="surface" padding="sm" radius="md" border="subtle">
            <Text size="sm">Click outside this box to close it.</Text>
          </Box>
        </ClickOutside> : null}
    </Stack>;
  }
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const T=["Showcase"];export{t as Showcase,T as __namedExportsOrder,b as default};
