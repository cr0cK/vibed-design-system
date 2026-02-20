import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as n}from"./Avatar-DnOV1aJc.js";import{S as u}from"./Stack-CeWigPj7.js";import{I as s}from"./Inline-BWffa32P.js";import{T as h}from"./Text-DDuTvIDd.js";import"./buildVariants-CfwgwYun.js";import"./index-C4lZkr4h.js";const A={title:"Atoms/Avatar",component:n,tags:["autodocs"]},a={render:function(){return e.jsxs(u,{gap:"sm",children:[e.jsxs(s,{gap:"sm",align:"center",children:[e.jsx(n,{name:"Olivia Jones",controlSize:"sm"}),e.jsx(n,{name:"Olivia Jones",controlSize:"md"}),e.jsx(n,{name:"Olivia Jones",controlSize:"lg"})]}),e.jsxs(s,{gap:"sm",align:"center",children:[e.jsx(n,{name:"Liam Smith",shape:"circle"}),e.jsx(n,{name:"Liam Smith",shape:"rounded"}),e.jsx(n,{name:"Liam Smith",shape:"square"})]}),e.jsx(h,{size:"sm",tone:"muted",children:"Fallback initials are generated from the name."})]})}},r={args:{name:"Olivia Jones",shape:"circle",controlSize:"md"},argTypes:{shape:{control:"select",options:["circle","rounded","square"]},controlSize:{control:"select",options:["sm","md","lg"]}},render:function(o){return e.jsx(n,{name:o.name,shape:o.shape,controlSize:o.controlSize})}};var t,i,m;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: function Render() {
    return <Stack gap="sm">
        <Inline gap="sm" align="center">
          <Avatar name="Olivia Jones" controlSize="sm" />
          <Avatar name="Olivia Jones" controlSize="md" />
          <Avatar name="Olivia Jones" controlSize="lg" />
        </Inline>
        <Inline gap="sm" align="center">
          <Avatar name="Liam Smith" shape="circle" />
          <Avatar name="Liam Smith" shape="rounded" />
          <Avatar name="Liam Smith" shape="square" />
        </Inline>
        <Text size="sm" tone="muted">Fallback initials are generated from the name.</Text>
      </Stack>;
  }
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var c,l,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    name: "Olivia Jones",
    shape: "circle",
    controlSize: "md"
  },
  argTypes: {
    shape: {
      control: "select",
      options: ["circle", "rounded", "square"]
    },
    controlSize: {
      control: "select",
      options: ["sm", "md", "lg"]
    }
  },
  render: function Render(args: any) {
    return <Avatar name={args.name} shape={args.shape} controlSize={args.controlSize} />;
  }
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const O=["Showcase","Playground"];export{r as Playground,a as Showcase,O as __namedExportsOrder,A as default};
