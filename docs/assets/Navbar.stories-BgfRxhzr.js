import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-C4lZkr4h.js";import{N as o}from"./Navbar-BEptgpyi.js";import{S as b}from"./Stack-CeWigPj7.js";import{B as I}from"./Button-CXef72x6.js";import{T as v}from"./Text-DDuTvIDd.js";import"./buildVariants-CfwgwYun.js";import"./Inline-BWffa32P.js";import"./Heading-arU6QW_P.js";import"./variantValue-VCXXWlxS.js";const O={title:"Organisms/Navbar",component:o,tags:["autodocs"]},a={render:function(){const[t,r]=u.useState("workspace");return e.jsxs(b,{gap:"sm",children:[e.jsx(o,{brand:"Orange Motion",items:[{id:"workspace",label:"Workspace"},{id:"automations",label:"Automations"},{id:"analytics",label:"Analytics"}],activeItemId:t,onItemSelect:r,actions:e.jsx(I,{tone:"primary",size:"sm",children:"New automation"})}),e.jsxs(v,{size:"sm",tone:"muted",children:["Active: ",t]})]})}},n={args:{brand:"Orange Motion",activeItemId:"workspace"},argTypes:{brand:{control:"text"},activeItemId:{control:"select",options:["workspace","automations","analytics"]}},render:function(t){return e.jsx(o,{brand:t.brand,items:[{id:"workspace",label:"Workspace"},{id:"automations",label:"Automations"},{id:"analytics",label:"Analytics"}],activeItemId:t.activeItemId,onItemSelect:function(){}})}};var s,i,c;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: function Render() {
    const [active, setActive] = useState("workspace");
    return <Stack gap="sm">
      <Navbar brand="Orange Motion" items={[{
        id: "workspace",
        label: "Workspace"
      }, {
        id: "automations",
        label: "Automations"
      }, {
        id: "analytics",
        label: "Analytics"
      }]} activeItemId={active} onItemSelect={setActive} actions={<Button tone="primary" size="sm">New automation</Button>} />
      <Text size="sm" tone="muted">Active: {active}</Text>
    </Stack>;
  }
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var m,d,l;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    brand: "Orange Motion",
    activeItemId: "workspace"
  },
  argTypes: {
    brand: {
      control: "text"
    },
    activeItemId: {
      control: "select",
      options: ["workspace", "automations", "analytics"]
    }
  },
  render: function Render(args: any) {
    return <Navbar brand={args.brand} items={[{
      id: "workspace",
      label: "Workspace"
    }, {
      id: "automations",
      label: "Automations"
    }, {
      id: "analytics",
      label: "Analytics"
    }]} activeItemId={args.activeItemId} onItemSelect={function onItemSelect() {}} />;
  }
}`,...(l=(d=n.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const T=["Showcase","Playground"];export{n as Playground,a as Showcase,T as __namedExportsOrder,O as default};
