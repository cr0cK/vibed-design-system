import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./Input-CdteF-Kd.js";import{S as m}from"./Stack-CeWigPj7.js";import"./buildVariants-CfwgwYun.js";import"./index-C4lZkr4h.js";import"./variantValue-VCXXWlxS.js";const f={title:"Atoms/Input",component:n,tags:["autodocs"]},r={render:function(){return e.jsxs(m,{gap:"sm",children:[e.jsx(n,{controlSize:"sm",placeholder:"Email (sm)"}),e.jsx(n,{controlSize:"md",placeholder:"Email (md)"}),e.jsx(n,{controlSize:"lg",placeholder:"Email (lg)"}),e.jsx(n,{placeholder:"Invalid state",invalid:!0})]})}},l={args:{controlSize:"md",placeholder:"Email",invalid:!1,disabled:!1},argTypes:{controlSize:{control:"select",options:["sm","md","lg"]},placeholder:{control:"text"},invalid:{control:"boolean"},disabled:{control:"boolean"}},render:function(o){return e.jsx(n,{controlSize:o.controlSize,placeholder:o.placeholder,invalid:o.invalid,disabled:o.disabled})}};var a,t,d;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: function Render() {
    return <Stack gap="sm">
        <Input controlSize="sm" placeholder="Email (sm)" />
        <Input controlSize="md" placeholder="Email (md)" />
        <Input controlSize="lg" placeholder="Email (lg)" />
        <Input placeholder="Invalid state" invalid />
      </Stack>;
  }
}`,...(d=(t=r.parameters)==null?void 0:t.docs)==null?void 0:d.source}}};var s,i,c;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    controlSize: "md",
    placeholder: "Email",
    invalid: false,
    disabled: false
  },
  argTypes: {
    controlSize: {
      control: "select",
      options: ["sm", "md", "lg"]
    },
    placeholder: {
      control: "text"
    },
    invalid: {
      control: "boolean"
    },
    disabled: {
      control: "boolean"
    }
  },
  render: function Render(args: any) {
    return <Input controlSize={args.controlSize} placeholder={args.placeholder} invalid={args.invalid} disabled={args.disabled} />;
  }
}`,...(c=(i=l.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const v=["Showcase","Playground"];export{l as Playground,r as Showcase,v as __namedExportsOrder,f as default};
