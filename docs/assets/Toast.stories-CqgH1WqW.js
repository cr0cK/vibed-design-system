import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{T as r}from"./Toast-FZfz5Chn.js";import{S as g}from"./Stack-CeWigPj7.js";import"./buildVariants-CfwgwYun.js";import"./index-C4lZkr4h.js";import"./Button-CXef72x6.js";import"./variantValue-VCXXWlxS.js";const v={title:"Molecules/Toast",component:r,tags:["autodocs"]},e={render:function(){return s.jsxs(g,{gap:"sm",children:[s.jsx(r,{heading:"Saved",description:"Draft was saved successfully.",tone:"success"}),s.jsx(r,{heading:"Sync issue",description:"Last sync failed for one source.",tone:"danger"})]})}},n={args:{tone:"success",heading:"Saved",description:"Draft was saved successfully."},argTypes:{tone:{control:"select",options:["success","danger"]},heading:{control:"text"},description:{control:"text"}},render:function(o){return s.jsx(r,{heading:o.heading,description:o.description,tone:o.tone})}};var t,a,c;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: function Render() {
    return <Stack gap="sm">
        <Toast heading="Saved" description="Draft was saved successfully." tone="success" />
        <Toast heading="Sync issue" description="Last sync failed for one source." tone="danger" />
      </Stack>;
  }
}`,...(c=(a=e.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var i,d,u;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    tone: "success",
    heading: "Saved",
    description: "Draft was saved successfully."
  },
  argTypes: {
    tone: {
      control: "select",
      options: ["success", "danger"]
    },
    heading: {
      control: "text"
    },
    description: {
      control: "text"
    }
  },
  render: function Render(args: any) {
    return <Toast heading={args.heading} description={args.description} tone={args.tone} />;
  }
}`,...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const T=["Showcase","Playground"];export{n as Playground,e as Showcase,T as __namedExportsOrder,v as default};
