import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{C as r}from"./Container-CqXCUMWa.js";import{B as u}from"./Box-Cmoc61Tl.js";import{T as l}from"./Text-DDuTvIDd.js";import"./buildVariants-CfwgwYun.js";import"./index-C4lZkr4h.js";const j={title:"Atoms/Container",component:r,tags:["autodocs"]},e={render:function(){return n.jsx(r,{width:"md",children:n.jsx(u,{padding:"md",surface:"elevated",radius:"md",children:n.jsx(l,{children:"Centered constrained content."})})})}},t={args:{width:"md",content:"Centered constrained content."},argTypes:{width:{control:"select",options:["sm","md","lg","xl"]},content:{control:"text"}},render:function(o){return n.jsx(r,{width:o.width,children:n.jsx(u,{padding:"md",surface:"elevated",radius:"md",children:n.jsx(l,{children:o.content})})})}};var d,a,s;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: function Render() {
    return <Container width="md">
        <Box padding="md" surface="elevated" radius="md">
          <Text>Centered constrained content.</Text>
        </Box>
      </Container>;
  }
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var c,i,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    width: "md",
    content: "Centered constrained content."
  },
  argTypes: {
    width: {
      control: "select",
      options: ["sm", "md", "lg", "xl"]
    },
    content: {
      control: "text"
    }
  },
  render: function Render(args: any) {
    return <Container width={args.width}>
        <Box padding="md" surface="elevated" radius="md">
          <Text>{args.content}</Text>
        </Box>
      </Container>;
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const T=["Showcase","Playground"];export{t as Playground,e as Showcase,T as __namedExportsOrder,j as default};
