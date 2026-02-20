import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{P as r}from"./PageHeader-CeNntjqm.js";import{B as c}from"./Button-CXef72x6.js";import"./buildVariants-CfwgwYun.js";import"./index-C4lZkr4h.js";import"./Heading-arU6QW_P.js";import"./Text-DDuTvIDd.js";import"./variantValue-VCXXWlxS.js";const P={title:"Organisms/PageHeader",component:r,tags:["autodocs"]},e={render:function(){return n.jsx(r,{heading:"Automations",subtitle:"Create and manage workflow schedules",actions:n.jsx(c,{tone:"primary",children:"New automation"})})}},t={args:{heading:"Automations",subtitle:"Create and manage workflow schedules"},argTypes:{heading:{control:"text"},subtitle:{control:"text"}},render:function(a){return n.jsx(r,{heading:a.heading,subtitle:a.subtitle,actions:n.jsx(c,{tone:"primary",children:"New automation"})})}};var o,s,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: function Render() {
    return <PageHeader heading="Automations" subtitle="Create and manage workflow schedules" actions={<Button tone="primary">New automation</Button>} />;
  }
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var u,d,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    heading: "Automations",
    subtitle: "Create and manage workflow schedules"
  },
  argTypes: {
    heading: {
      control: "text"
    },
    subtitle: {
      control: "text"
    }
  },
  render: function Render(args: any) {
    return <PageHeader heading={args.heading} subtitle={args.subtitle} actions={<Button tone="primary">New automation</Button>} />;
  }
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const j=["Showcase","Playground"];export{t as Playground,e as Showcase,j as __namedExportsOrder,P as default};
