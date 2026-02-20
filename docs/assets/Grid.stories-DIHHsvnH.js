import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{G as d}from"./Grid-DxWJPjcd.js";import{B as e}from"./Box-Cmoc61Tl.js";import{T as r}from"./Text-DDuTvIDd.js";import"./buildVariants-CfwgwYun.js";import"./index-C4lZkr4h.js";const B={title:"Atoms/Grid",component:d,tags:["autodocs"]},n={render:function(){return s.jsxs(d,{columns:3,gap:"sm",children:[s.jsx(e,{padding:"sm",radius:"sm",surface:"muted",children:s.jsx(r,{size:"sm",children:"1"})}),s.jsx(e,{padding:"sm",radius:"sm",surface:"muted",children:s.jsx(r,{size:"sm",children:"2"})}),s.jsx(e,{padding:"sm",radius:"sm",surface:"muted",children:s.jsx(r,{size:"sm",children:"3"})})]})}},m={args:{columns:3,gap:"sm"},argTypes:{columns:{control:{type:"number",min:1,max:6,step:1}},gap:{control:"select",options:["xs","sm","md","lg"]}},render:function(a){return s.jsxs(d,{columns:a.columns,gap:a.gap,children:[s.jsx(e,{padding:"sm",radius:"sm",surface:"muted",children:s.jsx(r,{size:"sm",children:"1"})}),s.jsx(e,{padding:"sm",radius:"sm",surface:"muted",children:s.jsx(r,{size:"sm",children:"2"})}),s.jsx(e,{padding:"sm",radius:"sm",surface:"muted",children:s.jsx(r,{size:"sm",children:"3"})})]})}};var o,i,t;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: function Render() {
    return <Grid columns={3} gap="sm">
        <Box padding="sm" radius="sm" surface="muted"><Text size="sm">1</Text></Box>
        <Box padding="sm" radius="sm" surface="muted"><Text size="sm">2</Text></Box>
        <Box padding="sm" radius="sm" surface="muted"><Text size="sm">3</Text></Box>
      </Grid>;
  }
}`,...(t=(i=n.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};var u,c,p;m.parameters={...m.parameters,docs:{...(u=m.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    columns: 3,
    gap: "sm"
  },
  argTypes: {
    columns: {
      control: {
        type: "number",
        min: 1,
        max: 6,
        step: 1
      }
    },
    gap: {
      control: "select",
      options: ["xs", "sm", "md", "lg"]
    }
  },
  render: function Render(args: any) {
    return <Grid columns={args.columns} gap={args.gap}>
        <Box padding="sm" radius="sm" surface="muted"><Text size="sm">1</Text></Box>
        <Box padding="sm" radius="sm" surface="muted"><Text size="sm">2</Text></Box>
        <Box padding="sm" radius="sm" surface="muted"><Text size="sm">3</Text></Box>
      </Grid>;
  }
}`,...(p=(c=m.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const z=["Showcase","Playground"];export{m as Playground,n as Showcase,z as __namedExportsOrder,B as default};
