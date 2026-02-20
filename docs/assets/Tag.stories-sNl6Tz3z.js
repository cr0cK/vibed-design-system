import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as n}from"./Tag-Bn05qvo-.js";import{I as g}from"./Inline-BWffa32P.js";import"./buildVariants-CfwgwYun.js";import"./index-C4lZkr4h.js";const x={title:"Atoms/Tag",component:n,tags:["autodocs"]},r={render:function(){return e.jsxs(g,{gap:"sm",align:"center",children:[e.jsx(n,{tone:"neutral",children:"Neutral"}),e.jsx(n,{tone:"primary",children:"Primary"}),e.jsx(n,{tone:"success",children:"Healthy"}),e.jsx(n,{tone:"danger",children:"Blocked"})]})}},t={args:{tone:"neutral",children:"Neutral"},argTypes:{tone:{control:"select",options:["neutral","primary","success","danger"]},children:{control:"text"}},render:function(a){return e.jsx(n,{tone:a.tone,children:a.children})}};var o,s,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: function Render() {
    return <Inline gap="sm" align="center">
        <Tag tone="neutral">Neutral</Tag>
        <Tag tone="primary">Primary</Tag>
        <Tag tone="success">Healthy</Tag>
        <Tag tone="danger">Blocked</Tag>
      </Inline>;
  }
}`,...(c=(s=r.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var l,i,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    tone: "neutral",
    children: "Neutral"
  },
  argTypes: {
    tone: {
      control: "select",
      options: ["neutral", "primary", "success", "danger"]
    },
    children: {
      control: "text"
    }
  },
  render: function Render(args: any) {
    return <Tag tone={args.tone}>{args.children}</Tag>;
  }
}`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const f=["Showcase","Playground"];export{t as Playground,r as Showcase,f as __namedExportsOrder,x as default};
