import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{I as s}from"./Inline-BWffa32P.js";import{B as e}from"./Button-CXef72x6.js";import"./buildVariants-CfwgwYun.js";import"./index-C4lZkr4h.js";import"./variantValue-VCXXWlxS.js";const B={title:"Atoms/Inline",component:s,tags:["autodocs"]},t={render:function(){return n.jsxs(s,{gap:"sm",children:[n.jsx(e,{tone:"neutral",children:"One"}),n.jsx(e,{tone:"neutral",children:"Two"}),n.jsx(e,{tone:"neutral",children:"Three"})]})}},r={args:{gap:"sm",justify:"start",align:"center"},argTypes:{gap:{control:"select",options:["xxs","xs","sm","md","lg"]},justify:{control:"select",options:["start","center","between","end"]},align:{control:"select",options:["start","center","end"]}},render:function(o){return n.jsxs(s,{gap:o.gap,justify:o.justify,align:o.align,children:[n.jsx(e,{tone:"neutral",children:"One"}),n.jsx(e,{tone:"neutral",children:"Two"}),n.jsx(e,{tone:"neutral",children:"Three"})]})}};var a,l,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: function Render() {
    return <Inline gap="sm">
        <Button tone="neutral">One</Button>
        <Button tone="neutral">Two</Button>
        <Button tone="neutral">Three</Button>
      </Inline>;
  }
}`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var u,c,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    gap: "sm",
    justify: "start",
    align: "center"
  },
  argTypes: {
    gap: {
      control: "select",
      options: ["xxs", "xs", "sm", "md", "lg"]
    },
    justify: {
      control: "select",
      options: ["start", "center", "between", "end"]
    },
    align: {
      control: "select",
      options: ["start", "center", "end"]
    }
  },
  render: function Render(args: any) {
    return <Inline gap={args.gap} justify={args.justify} align={args.align}>
        <Button tone="neutral">One</Button>
        <Button tone="neutral">Two</Button>
        <Button tone="neutral">Three</Button>
      </Inline>;
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const y=["Showcase","Playground"];export{r as Playground,t as Showcase,y as __namedExportsOrder,B as default};
