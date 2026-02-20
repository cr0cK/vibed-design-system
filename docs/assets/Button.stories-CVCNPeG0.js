import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{B as e}from"./Button-CXef72x6.js";import{S as g}from"./Stack-CeWigPj7.js";import{I as l}from"./Inline-BWffa32P.js";import"./buildVariants-CfwgwYun.js";import"./index-C4lZkr4h.js";import"./variantValue-VCXXWlxS.js";const h={title:"Atoms/Button",component:e,tags:["autodocs"]},t={render:function(){return n.jsxs(g,{gap:"sm",children:[n.jsxs(l,{gap:"sm",children:[n.jsx(e,{controlSize:"sm",tone:"primary",children:"Primary (sm)"}),n.jsx(e,{controlSize:"sm",tone:"neutral",children:"Neutral (sm)"}),n.jsx(e,{controlSize:"sm",tone:"danger",children:"Danger (sm)"})]}),n.jsxs(l,{gap:"sm",children:[n.jsx(e,{controlSize:"md",tone:"primary",children:"Primary (md)"}),n.jsx(e,{controlSize:"md",tone:"neutral",children:"Neutral (md)"}),n.jsx(e,{controlSize:"md",tone:"danger",children:"Danger (md)"})]}),n.jsxs(l,{gap:"sm",children:[n.jsx(e,{controlSize:"lg",tone:"primary",children:"Primary (lg)"}),n.jsx(e,{controlSize:"lg",tone:"neutral",children:"Neutral (lg)"}),n.jsx(e,{controlSize:"lg",tone:"danger",children:"Danger (lg)"})]})]})}},o={args:{tone:"primary",controlSize:"md",disabled:!1,label:"Button"},argTypes:{tone:{control:"select",options:["primary","neutral","danger"]},controlSize:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"},label:{control:"text"}},render:function(r){return n.jsx(e,{tone:r.tone,controlSize:r.controlSize,disabled:r.disabled,children:r.label})}};var a,s,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: function Render() {
    return <Stack gap="sm">
        <Inline gap="sm">
          <Button controlSize="sm" tone="primary">Primary (sm)</Button>
          <Button controlSize="sm" tone="neutral">Neutral (sm)</Button>
          <Button controlSize="sm" tone="danger">Danger (sm)</Button>
        </Inline>
        <Inline gap="sm">
          <Button controlSize="md" tone="primary">Primary (md)</Button>
          <Button controlSize="md" tone="neutral">Neutral (md)</Button>
          <Button controlSize="md" tone="danger">Danger (md)</Button>
        </Inline>
        <Inline gap="sm">
          <Button controlSize="lg" tone="primary">Primary (lg)</Button>
          <Button controlSize="lg" tone="neutral">Neutral (lg)</Button>
          <Button controlSize="lg" tone="danger">Danger (lg)</Button>
        </Inline>
      </Stack>;
  }
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var c,m,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    tone: "primary",
    controlSize: "md",
    disabled: false,
    label: "Button"
  },
  argTypes: {
    tone: {
      control: "select",
      options: ["primary", "neutral", "danger"]
    },
    controlSize: {
      control: "select",
      options: ["sm", "md", "lg"]
    },
    disabled: {
      control: "boolean"
    },
    label: {
      control: "text"
    }
  },
  render: function Render(args: any) {
    return <Button tone={args.tone} controlSize={args.controlSize} disabled={args.disabled}>{args.label}</Button>;
  }
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const j=["Showcase","Playground"];export{o as Playground,t as Showcase,j as __namedExportsOrder,h as default};
