import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./index-C4lZkr4h.js";import{S as o}from"./Switch-BXlsNIR0.js";import{S as p}from"./Stack-CeWigPj7.js";import"./buildVariants-CfwgwYun.js";import"./variantValue-VCXXWlxS.js";const j={title:"Atoms/Switch",component:o,tags:["autodocs"]},n={render:function(){const[e,k]=s.useState(!1),[S,g]=s.useState(!0),[u,b]=s.useState(!1);return c.jsxs(p,{gap:"sm",children:[c.jsx(o,{controlSize:"sm",checked:e,onCheckedChange:k,label:"Release mode (sm)"}),c.jsx(o,{controlSize:"md",checked:S,onCheckedChange:g,label:"Release mode (md)"}),c.jsx(o,{controlSize:"lg",checked:u,onCheckedChange:b,label:"Release mode (lg)"})]})}},t={args:{controlSize:"md",label:"Enable schedule",checked:!0,disabled:!1},argTypes:{controlSize:{control:"select",options:["sm","md","lg"]},label:{control:"text"},checked:{control:"boolean"},disabled:{control:"boolean"}},render:function(e){return c.jsx(o,{controlSize:e.controlSize,label:e.label,checked:e.checked,disabled:e.disabled})}};var a,d,r;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: function Render() {
    const [checkedSm, setCheckedSm] = useState(false);
    const [checkedMd, setCheckedMd] = useState(true);
    const [checkedLg, setCheckedLg] = useState(false);
    return <Stack gap="sm">
      <Switch controlSize="sm" checked={checkedSm} onCheckedChange={setCheckedSm} label="Release mode (sm)" />
      <Switch controlSize="md" checked={checkedMd} onCheckedChange={setCheckedMd} label="Release mode (md)" />
      <Switch controlSize="lg" checked={checkedLg} onCheckedChange={setCheckedLg} label="Release mode (lg)" />
    </Stack>;
  }
}`,...(r=(d=n.parameters)==null?void 0:d.docs)==null?void 0:r.source}}};var l,h,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    controlSize: "md",
    label: "Enable schedule",
    checked: true,
    disabled: false
  },
  argTypes: {
    controlSize: {
      control: "select",
      options: ["sm", "md", "lg"]
    },
    label: {
      control: "text"
    },
    checked: {
      control: "boolean"
    },
    disabled: {
      control: "boolean"
    }
  },
  render: function Render(args: any) {
    return <Switch controlSize={args.controlSize} label={args.label} checked={args.checked} disabled={args.disabled} />;
  }
}`,...(m=(h=t.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};const L=["Showcase","Playground"];export{t as Playground,n as Showcase,L as __namedExportsOrder,j as default};
