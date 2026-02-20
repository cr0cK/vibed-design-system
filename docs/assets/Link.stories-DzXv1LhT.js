import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{L as t}from"./Link-AUUY1_iE.js";import{S as m}from"./Stack-CeWigPj7.js";import"./buildVariants-CfwgwYun.js";import"./index-C4lZkr4h.js";const x={title:"Atoms/Link",component:t,tags:["autodocs"]},e={render:function(){return r.jsxs(m,{gap:"sm",children:[r.jsx(t,{href:"#",children:"Default link"}),r.jsx(t,{href:"#",tone:"muted",children:"Muted link"})]})}},n={args:{tone:"default",children:"Visit details"},argTypes:{tone:{control:"select",options:["default","muted"]},children:{control:"text"}},render:function(o){return r.jsx(t,{href:"#",tone:o.tone,children:o.children})}};var s,a,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: function Render() {
    return <Stack gap="sm">
        <Link href="#">Default link</Link>
        <Link href="#" tone="muted">Muted link</Link>
      </Stack>;
  }
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var c,d,l;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    tone: "default",
    children: "Visit details"
  },
  argTypes: {
    tone: {
      control: "select",
      options: ["default", "muted"]
    },
    children: {
      control: "text"
    }
  },
  render: function Render(args: any) {
    return <Link href="#" tone={args.tone}>{args.children}</Link>;
  }
}`,...(l=(d=n.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const L=["Showcase","Playground"];export{n as Playground,e as Showcase,L as __namedExportsOrder,x as default};
