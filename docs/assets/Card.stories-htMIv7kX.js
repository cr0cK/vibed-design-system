import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as n}from"./Card-CjDtNofe.js";import{S as m}from"./Stack-CeWigPj7.js";import{T as r}from"./Text-DDuTvIDd.js";import"./buildVariants-CfwgwYun.js";import"./index-C4lZkr4h.js";import"./Box-Cmoc61Tl.js";const j={title:"Molecules/Card",component:n,tags:["autodocs"]},t={render:function(){return e.jsx(n,{title:"Release Notes",subtitle:"Latest updates",children:e.jsxs(m,{gap:"xs",children:[e.jsx(r,{size:"sm",children:"- Added Phase 1 components"}),e.jsx(r,{size:"sm",children:"- Updated Storybook organization"})]})})}},s={args:{title:"Release Notes",subtitle:"Latest updates"},argTypes:{title:{control:"text"},subtitle:{control:"text"}},render:function(o){return e.jsx(n,{title:o.title,subtitle:o.subtitle,children:e.jsxs(m,{gap:"xs",children:[e.jsx(r,{size:"sm",children:"- Added Phase 1 components"}),e.jsx(r,{size:"sm",children:"- Updated Storybook organization"})]})})}};var a,i,d;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: function Render() {
    return <Card title="Release Notes" subtitle="Latest updates">
        <Stack gap="xs">
          <Text size="sm">- Added Phase 1 components</Text>
          <Text size="sm">- Updated Storybook organization</Text>
        </Stack>
      </Card>;
  }
}`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var c,l,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: "Release Notes",
    subtitle: "Latest updates"
  },
  argTypes: {
    title: {
      control: "text"
    },
    subtitle: {
      control: "text"
    }
  },
  render: function Render(args: any) {
    return <Card title={args.title} subtitle={args.subtitle}>
        <Stack gap="xs">
          <Text size="sm">- Added Phase 1 components</Text>
          <Text size="sm">- Updated Storybook organization</Text>
        </Stack>
      </Card>;
  }
}`,...(p=(l=s.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const f=["Showcase","Playground"];export{s as Playground,t as Showcase,f as __namedExportsOrder,j as default};
