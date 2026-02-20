import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{H as n}from"./Heading-arU6QW_P.js";import{S as p}from"./Stack-CeWigPj7.js";import"./index-C4lZkr4h.js";import"./buildVariants-CfwgwYun.js";const x={title:"Atoms/Heading",component:n,tags:["autodocs"]},r={render:function(){return e.jsxs(p,{gap:"sm",children:[e.jsx(n,{level:1,children:"Heading 1"}),e.jsx(n,{level:2,children:"Heading 2"}),e.jsx(n,{level:3,children:"Heading 3"})]})}},a={args:{level:2,children:"Heading preview"},argTypes:{level:{control:"select",options:[1,2,3,4,5,6]},children:{control:"text"}},render:function(o){return e.jsx(n,{level:o.level,children:o.children})}};var s,t,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: function Render() {
    return <Stack gap="sm">
        <Heading level={1}>Heading 1</Heading>
        <Heading level={2}>Heading 2</Heading>
        <Heading level={3}>Heading 3</Heading>
      </Stack>;
  }
}`,...(l=(t=r.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};var d,i,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    level: 2,
    children: "Heading preview"
  },
  argTypes: {
    level: {
      control: "select",
      options: [1, 2, 3, 4, 5, 6]
    },
    children: {
      control: "text"
    }
  },
  render: function Render(args: any) {
    return <Heading level={args.level}>{args.children}</Heading>;
  }
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const f=["Showcase","Playground"];export{a as Playground,r as Showcase,f as __namedExportsOrder,x as default};
