import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as n}from"./Stat-TT0nQhx_.js";import{G as m}from"./Grid-DxWJPjcd.js";import"./buildVariants-CfwgwYun.js";import"./index-C4lZkr4h.js";import"./Text-DDuTvIDd.js";const S={title:"Molecules/Stat",component:n,tags:["autodocs"]},r={render:function(){return e.jsxs(m,{columns:3,gap:"sm",children:[e.jsx(n,{label:"Open rate",value:"42.8%",trend:"+2.4% vs last week",tone:"success"}),e.jsx(n,{label:"Automation errors",value:"3",trend:"-1 vs yesterday",tone:"success"}),e.jsx(n,{label:"Escalations",value:"12",trend:"+4 today",tone:"danger"})]})}},a={args:{label:"Open rate",value:"42.8%",trend:"+2.4% vs last week",tone:"success"},argTypes:{label:{control:"text"},value:{control:"text"},trend:{control:"text"},tone:{control:"select",options:["neutral","success","danger"]}},render:function(t){return e.jsx(n,{label:t.label,value:t.value,trend:t.trend,tone:t.tone})}};var s,o,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: function Render() {
    return <Grid columns={3} gap="sm">
        <Stat label="Open rate" value="42.8%" trend="+2.4% vs last week" tone="success" />
        <Stat label="Automation errors" value="3" trend="-1 vs yesterday" tone="success" />
        <Stat label="Escalations" value="12" trend="+4 today" tone="danger" />
      </Grid>;
  }
}`,...(l=(o=r.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var c,u,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: "Open rate",
    value: "42.8%",
    trend: "+2.4% vs last week",
    tone: "success"
  },
  argTypes: {
    label: {
      control: "text"
    },
    value: {
      control: "text"
    },
    trend: {
      control: "text"
    },
    tone: {
      control: "select",
      options: ["neutral", "success", "danger"]
    }
  },
  render: function Render(args: any) {
    return <Stat label={args.label} value={args.value} trend={args.trend} tone={args.tone} />;
  }
}`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const f=["Showcase","Playground"];export{a as Playground,r as Showcase,f as __namedExportsOrder,S as default};
