import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as o}from"./Textarea-CE1dpb0F.js";import{S as p}from"./Stack-CeWigPj7.js";import"./buildVariants-CfwgwYun.js";import"./index-C4lZkr4h.js";import"./variantValue-VCXXWlxS.js";const b={title:"Atoms/Textarea",component:o,tags:["autodocs"]},n={render:function(){return e.jsxs(p,{gap:"sm",children:[e.jsx(o,{controlSize:"sm",rows:3,placeholder:"Write a short summary (sm)"}),e.jsx(o,{controlSize:"md",rows:3,placeholder:"Write a short summary (md)"}),e.jsx(o,{controlSize:"lg",rows:3,placeholder:"Write a short summary (lg)"})]})}},a={args:{controlSize:"md",rows:3,placeholder:"Write a short summary",disabled:!1,invalid:!1},argTypes:{controlSize:{control:"select",options:["sm","md","lg"]},rows:{control:"number"},placeholder:{control:"text"},disabled:{control:"boolean"},invalid:{control:"boolean"}},render:function(r){return e.jsx(o,{controlSize:r.controlSize,rows:r.rows,placeholder:r.placeholder,disabled:r.disabled,invalid:r.invalid})}};var s,t,l;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: function Render() {
    return <Stack gap="sm">
        <Textarea controlSize="sm" rows={3} placeholder="Write a short summary (sm)" />
        <Textarea controlSize="md" rows={3} placeholder="Write a short summary (md)" />
        <Textarea controlSize="lg" rows={3} placeholder="Write a short summary (lg)" />
      </Stack>;
  }
}`,...(l=(t=n.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};var c,d,i;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    controlSize: "md",
    rows: 3,
    placeholder: "Write a short summary",
    disabled: false,
    invalid: false
  },
  argTypes: {
    controlSize: {
      control: "select",
      options: ["sm", "md", "lg"]
    },
    rows: {
      control: "number"
    },
    placeholder: {
      control: "text"
    },
    disabled: {
      control: "boolean"
    },
    invalid: {
      control: "boolean"
    }
  },
  render: function Render(args: any) {
    return <Textarea controlSize={args.controlSize} rows={args.rows} placeholder={args.placeholder} disabled={args.disabled} invalid={args.invalid} />;
  }
}`,...(i=(d=a.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const z=["Showcase","Playground"];export{a as Playground,n as Showcase,z as __namedExportsOrder,b as default};
