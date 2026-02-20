import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as t}from"./index-C4lZkr4h.js";import{T as s}from"./Tabs-DqhEBpNn.js";import{T as n}from"./Text-DDuTvIDd.js";import{S as k}from"./Stack-CeWigPj7.js";import"./buildVariants-CfwgwYun.js";import"./Button-CXef72x6.js";import"./variantValue-VCXXWlxS.js";const f={title:"Molecules/Tabs",component:s,tags:["autodocs"]},l={render:function(){const[a,r]=t.useState("overview"),[p,T]=t.useState("overview"),[x,w]=t.useState("overview");return e.jsxs(k,{gap:"sm",children:[e.jsx(s,{controlSize:"sm",items:[{id:"overview",label:"Overview"},{id:"tokens",label:"Tokens"},{id:"usage",label:"Usage"}],value:a,onValueChange:r,panels:{overview:e.jsx(n,{size:"sm",children:"Overview panel (sm)"}),tokens:e.jsx(n,{size:"sm",children:"Tokens panel (sm)"}),usage:e.jsx(n,{size:"sm",children:"Usage panel (sm)"})}}),e.jsx(s,{controlSize:"md",items:[{id:"overview",label:"Overview"},{id:"tokens",label:"Tokens"},{id:"usage",label:"Usage"}],value:p,onValueChange:T,panels:{overview:e.jsx(n,{children:"Overview panel (md)"}),tokens:e.jsx(n,{children:"Tokens panel (md)"}),usage:e.jsx(n,{children:"Usage panel (md)"})}}),e.jsx(s,{controlSize:"lg",items:[{id:"overview",label:"Overview"},{id:"tokens",label:"Tokens"},{id:"usage",label:"Usage"}],value:x,onValueChange:w,panels:{overview:e.jsx(n,{size:"lg",children:"Overview panel (lg)"}),tokens:e.jsx(n,{size:"lg",children:"Tokens panel (lg)"}),usage:e.jsx(n,{size:"lg",children:"Usage panel (lg)"})}})]})}},o={args:{controlSize:"md",value:"overview"},argTypes:{controlSize:{control:"select",options:["sm","md","lg"]},value:{control:"select",options:["overview","tokens","usage"]}},render:function(a){return e.jsx(s,{controlSize:a.controlSize,items:[{id:"overview",label:"Overview"},{id:"tokens",label:"Tokens"},{id:"usage",label:"Usage"}],value:a.value,onValueChange:function(){},panels:{overview:e.jsx(n,{children:"Overview panel"}),tokens:e.jsx(n,{children:"Tokens panel"}),usage:e.jsx(n,{children:"Usage panel"})}})}};var i,v,u;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: function Render() {
    const [valueSm, setValueSm] = useState("overview");
    const [valueMd, setValueMd] = useState("overview");
    const [valueLg, setValueLg] = useState("overview");
    return <Stack gap="sm">
      <Tabs controlSize="sm" items={[{
        id: "overview",
        label: "Overview"
      }, {
        id: "tokens",
        label: "Tokens"
      }, {
        id: "usage",
        label: "Usage"
      }]} value={valueSm} onValueChange={setValueSm} panels={{
        overview: <Text size="sm">Overview panel (sm)</Text>,
        tokens: <Text size="sm">Tokens panel (sm)</Text>,
        usage: <Text size="sm">Usage panel (sm)</Text>
      }} />
      <Tabs controlSize="md" items={[{
        id: "overview",
        label: "Overview"
      }, {
        id: "tokens",
        label: "Tokens"
      }, {
        id: "usage",
        label: "Usage"
      }]} value={valueMd} onValueChange={setValueMd} panels={{
        overview: <Text>Overview panel (md)</Text>,
        tokens: <Text>Tokens panel (md)</Text>,
        usage: <Text>Usage panel (md)</Text>
      }} />
      <Tabs controlSize="lg" items={[{
        id: "overview",
        label: "Overview"
      }, {
        id: "tokens",
        label: "Tokens"
      }, {
        id: "usage",
        label: "Usage"
      }]} value={valueLg} onValueChange={setValueLg} panels={{
        overview: <Text size="lg">Overview panel (lg)</Text>,
        tokens: <Text size="lg">Tokens panel (lg)</Text>,
        usage: <Text size="lg">Usage panel (lg)</Text>
      }} />
    </Stack>;
  }
}`,...(u=(v=l.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var g,d,c;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    controlSize: "md",
    value: "overview"
  },
  argTypes: {
    controlSize: {
      control: "select",
      options: ["sm", "md", "lg"]
    },
    value: {
      control: "select",
      options: ["overview", "tokens", "usage"]
    }
  },
  render: function Render(args: any) {
    return <Tabs controlSize={args.controlSize} items={[{
      id: "overview",
      label: "Overview"
    }, {
      id: "tokens",
      label: "Tokens"
    }, {
      id: "usage",
      label: "Usage"
    }]} value={args.value} onValueChange={function onValueChange() {}} panels={{
      overview: <Text>Overview panel</Text>,
      tokens: <Text>Tokens panel</Text>,
      usage: <Text>Usage panel</Text>
    }} />;
  }
}`,...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const C=["Showcase","Playground"];export{o as Playground,l as Showcase,C as __namedExportsOrder,f as default};
