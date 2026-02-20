import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as n}from"./Badge-5J7Jc_lu.js";import{I as g}from"./Inline-BWffa32P.js";import"./buildVariants-CfwgwYun.js";import"./index-C4lZkr4h.js";const f={title:"Atoms/Badge",component:n,tags:["autodocs"]},r={render:function(){return e.jsxs(g,{gap:"sm",children:[e.jsx(n,{tone:"neutral",children:"Neutral"}),e.jsx(n,{tone:"primary",children:"Primary"}),e.jsx(n,{tone:"success",children:"Success"}),e.jsx(n,{tone:"danger",children:"Danger"})]})}},a={args:{tone:"neutral",label:"Neutral"},argTypes:{tone:{control:"select",options:["neutral","primary","success","danger"]},label:{control:"text"}},render:function(t){return e.jsx(n,{tone:t.tone,children:t.label})}};var o,s,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: function Render() {
    return <Inline gap="sm">
        <Badge tone="neutral">Neutral</Badge>
        <Badge tone="primary">Primary</Badge>
        <Badge tone="success">Success</Badge>
        <Badge tone="danger">Danger</Badge>
      </Inline>;
  }
}`,...(c=(s=r.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var l,d,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    tone: "neutral",
    label: "Neutral"
  },
  argTypes: {
    tone: {
      control: "select",
      options: ["neutral", "primary", "success", "danger"]
    },
    label: {
      control: "text"
    }
  },
  render: function Render(args: any) {
    return <Badge tone={args.tone}>{args.label}</Badge>;
  }
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const h=["Showcase","Playground"];export{a as Playground,r as Showcase,h as __namedExportsOrder,f as default};
