import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as t}from"./Alert-NedfRil2.js";import{S as m}from"./Stack-CeWigPj7.js";import"./buildVariants-CfwgwYun.js";import"./index-C4lZkr4h.js";import"./Text-DDuTvIDd.js";const h={title:"Molecules/Alert",component:t,tags:["autodocs"]},r={render:function(){return e.jsxs(m,{gap:"sm",children:[e.jsx(t,{controlSize:"sm",tone:"neutral",title:"Info (sm)",children:"Neutral alert message."}),e.jsx(t,{controlSize:"sm",tone:"success",title:"Success (sm)",children:"Build completed successfully."}),e.jsx(t,{controlSize:"sm",tone:"danger",title:"Error (sm)",children:"Unable to publish package."}),e.jsx(t,{controlSize:"md",tone:"neutral",title:"Info (md)",children:"Neutral alert message."}),e.jsx(t,{controlSize:"md",tone:"success",title:"Success (md)",children:"Build completed successfully."}),e.jsx(t,{controlSize:"md",tone:"danger",title:"Error (md)",children:"Unable to publish package."}),e.jsx(t,{controlSize:"lg",tone:"neutral",title:"Info (lg)",children:"Neutral alert message."}),e.jsx(t,{controlSize:"lg",tone:"success",title:"Success (lg)",children:"Build completed successfully."}),e.jsx(t,{controlSize:"lg",tone:"danger",title:"Error (lg)",children:"Unable to publish package."})]})}},n={args:{title:"Build status",tone:"success",controlSize:"md",message:"Build completed successfully."},argTypes:{title:{control:"text"},tone:{control:"select",options:["neutral","success","danger"]},controlSize:{control:"select",options:["sm","md","lg"]},message:{control:"text"}},render:function(l){return e.jsx(t,{title:l.title,tone:l.tone,controlSize:l.controlSize,children:l.message})}};var s,o,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: function Render() {
    return <Stack gap="sm">
        <Alert controlSize="sm" tone="neutral" title="Info (sm)">Neutral alert message.</Alert>
        <Alert controlSize="sm" tone="success" title="Success (sm)">Build completed successfully.</Alert>
        <Alert controlSize="sm" tone="danger" title="Error (sm)">Unable to publish package.</Alert>
        <Alert controlSize="md" tone="neutral" title="Info (md)">Neutral alert message.</Alert>
        <Alert controlSize="md" tone="success" title="Success (md)">Build completed successfully.</Alert>
        <Alert controlSize="md" tone="danger" title="Error (md)">Unable to publish package.</Alert>
        <Alert controlSize="lg" tone="neutral" title="Info (lg)">Neutral alert message.</Alert>
        <Alert controlSize="lg" tone="success" title="Success (lg)">Build completed successfully.</Alert>
        <Alert controlSize="lg" tone="danger" title="Error (lg)">Unable to publish package.</Alert>
      </Stack>;
  }
}`,...(c=(o=r.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var a,i,u;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    title: "Build status",
    tone: "success",
    controlSize: "md",
    message: "Build completed successfully."
  },
  argTypes: {
    title: {
      control: "text"
    },
    tone: {
      control: "select",
      options: ["neutral", "success", "danger"]
    },
    controlSize: {
      control: "select",
      options: ["sm", "md", "lg"]
    },
    message: {
      control: "text"
    }
  },
  render: function Render(args: any) {
    return <Alert title={args.title} tone={args.tone} controlSize={args.controlSize}>{args.message}</Alert>;
  }
}`,...(u=(i=n.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const x=["Showcase","Playground"];export{n as Playground,r as Showcase,x as __namedExportsOrder,h as default};
