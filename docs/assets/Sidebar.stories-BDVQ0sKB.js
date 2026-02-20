import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{r as g}from"./index-C4lZkr4h.js";import{S as o}from"./Sidebar-rNnY9jLA.js";import{T as u}from"./Text-DDuTvIDd.js";import"./buildVariants-CfwgwYun.js";const f={title:"Organisms/Sidebar",component:o,tags:["autodocs"]},e={render:function(){const[n,a]=g.useState("inbox");return i.jsx(o,{heading:"Orange Motion",activeItemId:n,onItemSelect:a,groups:[{id:"main",label:"Main",items:[{id:"inbox",label:"Inbox",icon:"✉"},{id:"automations",label:"Automations",icon:"⚙"},{id:"contacts",label:"Contacts",icon:"👥"}]},{id:"admin",label:"Admin",items:[{id:"settings",label:"Settings",icon:"⋯"},{id:"billing",label:"Billing",icon:"$",disabled:!0}]}],footer:i.jsx(u,{size:"sm",tone:"muted",children:"v0.1.0"})})}},t={args:{heading:"Orange Motion",activeItemId:"inbox"},argTypes:{heading:{control:"text"},activeItemId:{control:"select",options:["inbox","automations","contacts","settings","billing"]}},render:function(n){return i.jsx(o,{heading:n.heading,activeItemId:n.activeItemId,onItemSelect:function(){},groups:[{id:"main",label:"Main",items:[{id:"inbox",label:"Inbox",icon:"✉"},{id:"automations",label:"Automations",icon:"⚙"},{id:"contacts",label:"Contacts",icon:"👥"}]},{id:"admin",label:"Admin",items:[{id:"settings",label:"Settings",icon:"⋯"},{id:"billing",label:"Billing",icon:"$",disabled:!0}]}]})}};var s,l,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: function Render() {
    const [active, setActive] = useState("inbox");
    return <Sidebar heading="Orange Motion" activeItemId={active} onItemSelect={setActive} groups={[{
      id: "main",
      label: "Main",
      items: [{
        id: "inbox",
        label: "Inbox",
        icon: "✉"
      }, {
        id: "automations",
        label: "Automations",
        icon: "⚙"
      }, {
        id: "contacts",
        label: "Contacts",
        icon: "👥"
      }]
    }, {
      id: "admin",
      label: "Admin",
      items: [{
        id: "settings",
        label: "Settings",
        icon: "⋯"
      }, {
        id: "billing",
        label: "Billing",
        icon: "$",
        disabled: true
      }]
    }]} footer={<Text size="sm" tone="muted">v0.1.0</Text>} />;
  }
}`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var r,d,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    heading: "Orange Motion",
    activeItemId: "inbox"
  },
  argTypes: {
    heading: {
      control: "text"
    },
    activeItemId: {
      control: "select",
      options: ["inbox", "automations", "contacts", "settings", "billing"]
    }
  },
  render: function Render(args: any) {
    return <Sidebar heading={args.heading} activeItemId={args.activeItemId} onItemSelect={function onItemSelect() {}} groups={[{
      id: "main",
      label: "Main",
      items: [{
        id: "inbox",
        label: "Inbox",
        icon: "✉"
      }, {
        id: "automations",
        label: "Automations",
        icon: "⚙"
      }, {
        id: "contacts",
        label: "Contacts",
        icon: "👥"
      }]
    }, {
      id: "admin",
      label: "Admin",
      items: [{
        id: "settings",
        label: "Settings",
        icon: "⋯"
      }, {
        id: "billing",
        label: "Billing",
        icon: "$",
        disabled: true
      }]
    }]} />;
  }
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const h=["Showcase","Playground"];export{t as Playground,e as Showcase,h as __namedExportsOrder,f as default};
