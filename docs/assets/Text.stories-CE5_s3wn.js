import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as t}from"./Text-DDuTvIDd.js";import{S as x}from"./Stack-CeWigPj7.js";import"./buildVariants-CfwgwYun.js";import"./index-C4lZkr4h.js";const T={title:"Atoms/Text",component:t,tags:["autodocs"]},r={render:function(){return e.jsxs(x,{gap:"sm",children:[e.jsx(t,{size:"xl",weight:"bold",children:"Display text"}),e.jsx(t,{size:"md",children:"Body text"}),e.jsx(t,{size:"sm",tone:"muted",children:"Helper text"})]})}},o={args:{size:"md",weight:"regular",tone:"default",children:"Body text"},argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"]},weight:{control:"select",options:["regular","semibold","bold"]},tone:{control:"select",options:["default","muted","danger","success"]},children:{control:"text"}},render:function(n){return e.jsx(t,{size:n.size,weight:n.weight,tone:n.tone,children:n.children})}};var s,i,d;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: function Render() {
    return <Stack gap="sm">
        <Text size="xl" weight="bold">Display text</Text>
        <Text size="md">Body text</Text>
        <Text size="sm" tone="muted">Helper text</Text>
      </Stack>;
  }
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var c,a,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    size: "md",
    weight: "regular",
    tone: "default",
    children: "Body text"
  },
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"]
    },
    weight: {
      control: "select",
      options: ["regular", "semibold", "bold"]
    },
    tone: {
      control: "select",
      options: ["default", "muted", "danger", "success"]
    },
    children: {
      control: "text"
    }
  },
  render: function Render(args: any) {
    return <Text size={args.size} weight={args.weight} tone={args.tone}>{args.children}</Text>;
  }
}`,...(l=(a=o.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const f=["Showcase","Playground"];export{o as Playground,r as Showcase,f as __namedExportsOrder,T as default};
