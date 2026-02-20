import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as b}from"./index-C4lZkr4h.js";import{M as a}from"./Menu-QzA_xpiR.js";import{S as g}from"./Stack-CeWigPj7.js";import{T as p}from"./Text-DDuTvIDd.js";import"./buildVariants-CfwgwYun.js";const M={title:"Molecules/Menu",component:a,tags:["autodocs"]},t={render:function(){const[e,d]=b.useState("dashboard");return s.jsxs(g,{gap:"sm",children:[s.jsx(a,{selectedId:e,onItemSelect:d,items:[{id:"dashboard",label:"Dashboard"},{id:"automations",label:"Automations"},{id:"settings",label:"Settings"},{id:"billing",label:"Billing",disabled:!0}]}),s.jsxs(p,{size:"sm",tone:"muted",children:["Selected: ",e]})]})}},n={args:{selectedId:"dashboard"},argTypes:{selectedId:{control:"select",options:["dashboard","automations","settings","billing"]}},render:function(e){return s.jsx(a,{selectedId:e.selectedId,onItemSelect:function(){},items:[{id:"dashboard",label:"Dashboard"},{id:"automations",label:"Automations"},{id:"settings",label:"Settings"},{id:"billing",label:"Billing",disabled:!0}]})}};var o,l,r;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: function Render() {
    const [selectedId, setSelectedId] = useState("dashboard");
    return <Stack gap="sm">
      <Menu selectedId={selectedId} onItemSelect={setSelectedId} items={[{
        id: "dashboard",
        label: "Dashboard"
      }, {
        id: "automations",
        label: "Automations"
      }, {
        id: "settings",
        label: "Settings"
      }, {
        id: "billing",
        label: "Billing",
        disabled: true
      }]} />
      <Text size="sm" tone="muted">Selected: {selectedId}</Text>
    </Stack>;
  }
}`,...(r=(l=t.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};var i,c,m;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    selectedId: "dashboard"
  },
  argTypes: {
    selectedId: {
      control: "select",
      options: ["dashboard", "automations", "settings", "billing"]
    }
  },
  render: function Render(args: any) {
    return <Menu selectedId={args.selectedId} onItemSelect={function onItemSelect() {}} items={[{
      id: "dashboard",
      label: "Dashboard"
    }, {
      id: "automations",
      label: "Automations"
    }, {
      id: "settings",
      label: "Settings"
    }, {
      id: "billing",
      label: "Billing",
      disabled: true
    }]} />;
  }
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const T=["Showcase","Playground"];export{n as Playground,t as Showcase,T as __namedExportsOrder,M as default};
