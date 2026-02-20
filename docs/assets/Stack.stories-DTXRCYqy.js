import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{S as t}from"./Stack-CeWigPj7.js";import{B as e}from"./Box-Cmoc61Tl.js";import{T as r}from"./Text-DDuTvIDd.js";import"./buildVariants-CfwgwYun.js";import"./index-C4lZkr4h.js";const B={title:"Atoms/Stack",component:t,tags:["autodocs"]},n={render:function(){return s.jsxs(t,{gap:"sm",children:[s.jsx(e,{padding:"sm",surface:"muted",radius:"sm",children:s.jsx(r,{size:"sm",children:"One"})}),s.jsx(e,{padding:"sm",surface:"muted",radius:"sm",children:s.jsx(r,{size:"sm",children:"Two"})}),s.jsx(e,{padding:"sm",surface:"muted",radius:"sm",children:s.jsx(r,{size:"sm",children:"Three"})})]})}},a={args:{gap:"sm",align:"stretch"},argTypes:{gap:{control:"select",options:["xxs","xs","sm","md","lg","xl"]},align:{control:"select",options:["stretch","start","center","end"]}},render:function(d){return s.jsxs(t,{gap:d.gap,align:d.align,children:[s.jsx(e,{padding:"sm",surface:"muted",radius:"sm",children:s.jsx(r,{size:"sm",children:"One"})}),s.jsx(e,{padding:"sm",surface:"muted",radius:"sm",children:s.jsx(r,{size:"sm",children:"Two"})}),s.jsx(e,{padding:"sm",surface:"muted",radius:"sm",children:s.jsx(r,{size:"sm",children:"Three"})})]})}};var m,i,o;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: function Render() {
    return <Stack gap="sm">
        <Box padding="sm" surface="muted" radius="sm"><Text size="sm">One</Text></Box>
        <Box padding="sm" surface="muted" radius="sm"><Text size="sm">Two</Text></Box>
        <Box padding="sm" surface="muted" radius="sm"><Text size="sm">Three</Text></Box>
      </Stack>;
  }
}`,...(o=(i=n.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var c,u,x;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    gap: "sm",
    align: "stretch"
  },
  argTypes: {
    gap: {
      control: "select",
      options: ["xxs", "xs", "sm", "md", "lg", "xl"]
    },
    align: {
      control: "select",
      options: ["stretch", "start", "center", "end"]
    }
  },
  render: function Render(args: any) {
    return <Stack gap={args.gap} align={args.align}>
        <Box padding="sm" surface="muted" radius="sm"><Text size="sm">One</Text></Box>
        <Box padding="sm" surface="muted" radius="sm"><Text size="sm">Two</Text></Box>
        <Box padding="sm" surface="muted" radius="sm"><Text size="sm">Three</Text></Box>
      </Stack>;
  }
}`,...(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const z=["Showcase","Playground"];export{a as Playground,n as Showcase,z as __namedExportsOrder,B as default};
