import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{H as t}from"./HelperText-DaMXUXYw.js";import{S as r}from"./Stack-CeWigPj7.js";import"./buildVariants-CfwgwYun.js";import"./index-C4lZkr4h.js";const z={title:"Molecules/HelperText",component:t,tags:["autodocs"]},n={render:function(){return e.jsxs(r,{gap:"sm",children:[e.jsxs(r,{gap:"xs",children:[e.jsx(t,{controlSize:"sm",tone:"muted",children:"Muted helper text (sm)"}),e.jsx(t,{controlSize:"sm",tone:"success",children:"Success helper text (sm)"}),e.jsx(t,{controlSize:"sm",tone:"danger",children:"Error helper text (sm)"})]}),e.jsxs(r,{gap:"xs",children:[e.jsx(t,{controlSize:"md",tone:"muted",children:"Muted helper text (md)"}),e.jsx(t,{controlSize:"md",tone:"success",children:"Success helper text (md)"}),e.jsx(t,{controlSize:"md",tone:"danger",children:"Error helper text (md)"})]}),e.jsxs(r,{gap:"xs",children:[e.jsx(t,{controlSize:"lg",tone:"muted",children:"Muted helper text (lg)"}),e.jsx(t,{controlSize:"lg",tone:"success",children:"Success helper text (lg)"}),e.jsx(t,{controlSize:"lg",tone:"danger",children:"Error helper text (lg)"})]})]})}},o={args:{controlSize:"md",tone:"muted",children:"Muted helper text"},argTypes:{controlSize:{control:"select",options:["sm","md","lg"]},tone:{control:"select",options:["muted","success","danger"]},children:{control:"text"}},render:function(s){return e.jsx(t,{controlSize:s.controlSize,tone:s.tone,children:s.children})}};var l,c,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: function Render() {
    return <Stack gap="sm">
        <Stack gap="xs">
          <HelperText controlSize="sm" tone="muted">Muted helper text (sm)</HelperText>
          <HelperText controlSize="sm" tone="success">Success helper text (sm)</HelperText>
          <HelperText controlSize="sm" tone="danger">Error helper text (sm)</HelperText>
        </Stack>
        <Stack gap="xs">
          <HelperText controlSize="md" tone="muted">Muted helper text (md)</HelperText>
          <HelperText controlSize="md" tone="success">Success helper text (md)</HelperText>
          <HelperText controlSize="md" tone="danger">Error helper text (md)</HelperText>
        </Stack>
        <Stack gap="xs">
          <HelperText controlSize="lg" tone="muted">Muted helper text (lg)</HelperText>
          <HelperText controlSize="lg" tone="success">Success helper text (lg)</HelperText>
          <HelperText controlSize="lg" tone="danger">Error helper text (lg)</HelperText>
        </Stack>
      </Stack>;
  }
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,x,i;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    controlSize: "md",
    tone: "muted",
    children: "Muted helper text"
  },
  argTypes: {
    controlSize: {
      control: "select",
      options: ["sm", "md", "lg"]
    },
    tone: {
      control: "select",
      options: ["muted", "success", "danger"]
    },
    children: {
      control: "text"
    }
  },
  render: function Render(args: any) {
    return <HelperText controlSize={args.controlSize} tone={args.tone}>{args.children}</HelperText>;
  }
}`,...(i=(x=o.parameters)==null?void 0:x.docs)==null?void 0:i.source}}};const T=["Showcase","Playground"];export{o as Playground,n as Showcase,T as __namedExportsOrder,z as default};
