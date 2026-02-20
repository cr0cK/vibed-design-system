import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as o}from"./Checkbox-DP4YUIOk.js";import{S as u}from"./Stack-CeWigPj7.js";import"./buildVariants-CfwgwYun.js";import"./index-C4lZkr4h.js";const h={title:"Atoms/Checkbox",component:o,tags:["autodocs"]},l={render:function(){return e.jsxs(u,{gap:"sm",children:[e.jsx(o,{controlSize:"sm",label:"Design updates (sm)",defaultChecked:!0}),e.jsx(o,{controlSize:"md",label:"Release notifications (md)"}),e.jsx(o,{controlSize:"lg",label:"Billing alerts (lg)"})]})}},t={args:{label:"Receive notifications",controlSize:"md",defaultChecked:!0,disabled:!1},argTypes:{label:{control:"text"},controlSize:{control:"select",options:["sm","md","lg"]},defaultChecked:{control:"boolean"},disabled:{control:"boolean"}},render:function(n){return e.jsx(o,{label:n.label,controlSize:n.controlSize,defaultChecked:n.defaultChecked,disabled:n.disabled})}};var r,a,s;l.parameters={...l.parameters,docs:{...(r=l.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: function Render() {
    return <Stack gap="sm">
        <Checkbox controlSize="sm" label="Design updates (sm)" defaultChecked />
        <Checkbox controlSize="md" label="Release notifications (md)" />
        <Checkbox controlSize="lg" label="Billing alerts (lg)" />
      </Stack>;
  }
}`,...(s=(a=l.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var c,d,i;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: "Receive notifications",
    controlSize: "md",
    defaultChecked: true,
    disabled: false
  },
  argTypes: {
    label: {
      control: "text"
    },
    controlSize: {
      control: "select",
      options: ["sm", "md", "lg"]
    },
    defaultChecked: {
      control: "boolean"
    },
    disabled: {
      control: "boolean"
    }
  },
  render: function Render(args: any) {
    return <Checkbox label={args.label} controlSize={args.controlSize} defaultChecked={args.defaultChecked} disabled={args.disabled} />;
  }
}`,...(i=(d=t.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const k=["Showcase","Playground"];export{t as Playground,l as Showcase,k as __namedExportsOrder,h as default};
