import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as t}from"./Box-Cmoc61Tl.js";import{T as o}from"./Text-DDuTvIDd.js";import{S as p}from"./Stack-CeWigPj7.js";import"./buildVariants-CfwgwYun.js";import"./index-C4lZkr4h.js";const j={title:"Atoms/Box",component:t,tags:["autodocs"]},r={render:function(){return e.jsxs(p,{gap:"sm",children:[e.jsx(t,{padding:"sm",radius:"sm",surface:"muted",children:e.jsx(o,{size:"sm",children:"Muted"})}),e.jsx(t,{padding:"md",radius:"md",surface:"elevated",children:e.jsx(o,{size:"sm",children:"Elevated"})})]})}},s={args:{surface:"muted",padding:"md",radius:"md",border:"subtle",content:"Preview surface"},argTypes:{surface:{control:"select",options:["transparent","background","surface","muted","elevated","primary"]},padding:{control:"select",options:["none","xs","sm","md","lg","xl"]},radius:{control:"select",options:["none","sm","md","lg"]},border:{control:"select",options:["none","subtle"]},content:{control:"text"}},render:function(n){return e.jsx(t,{surface:n.surface,padding:n.padding,radius:n.radius,border:n.border,children:e.jsx(o,{children:n.content})})}};var d,a,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: function Render() {
    return <Stack gap="sm">
        <Box padding="sm" radius="sm" surface="muted"><Text size="sm">Muted</Text></Box>
        <Box padding="md" radius="md" surface="elevated"><Text size="sm">Elevated</Text></Box>
      </Stack>;
  }
}`,...(c=(a=r.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var i,u,m;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    surface: "muted",
    padding: "md",
    radius: "md",
    border: "subtle",
    content: "Preview surface"
  },
  argTypes: {
    surface: {
      control: "select",
      options: ["transparent", "background", "surface", "muted", "elevated", "primary"]
    },
    padding: {
      control: "select",
      options: ["none", "xs", "sm", "md", "lg", "xl"]
    },
    radius: {
      control: "select",
      options: ["none", "sm", "md", "lg"]
    },
    border: {
      control: "select",
      options: ["none", "subtle"]
    },
    content: {
      control: "text"
    }
  },
  render: function Render(args: any) {
    return <Box surface={args.surface} padding={args.padding} radius={args.radius} border={args.border}>
        <Text>{args.content}</Text>
      </Box>;
  }
}`,...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const B=["Showcase","Playground"];export{s as Playground,r as Showcase,B as __namedExportsOrder,j as default};
