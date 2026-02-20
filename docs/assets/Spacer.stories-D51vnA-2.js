import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{S as n}from"./Spacer-D6vdM2BK.js";import{B as e}from"./Box-Cmoc61Tl.js";import{T as r}from"./Text-DDuTvIDd.js";import{S as m}from"./Stack-CeWigPj7.js";import"./buildVariants-CfwgwYun.js";import"./index-C4lZkr4h.js";const B={title:"Atoms/Spacer",component:n,tags:["autodocs"]},a={render:function(){return s.jsx(e,{surface:"elevated",padding:"md",radius:"md",border:"subtle",children:s.jsxs(m,{gap:"md",children:[s.jsx(r,{weight:"semibold",children:"Spacer sizes"}),s.jsx(e,{surface:"muted",padding:"sm",radius:"sm",children:s.jsxs(m,{gap:"sm",children:[s.jsx(r,{size:"sm",children:"`xs` (1px)"}),s.jsx(e,{surface:"primary",radius:"sm",children:s.jsx(n,{size:"xs"})}),s.jsx(r,{size:"sm",children:"`sm` (2px)"}),s.jsx(e,{surface:"primary",radius:"sm",children:s.jsx(n,{size:"sm"})}),s.jsx(r,{size:"sm",children:"`md` (3px)"}),s.jsx(e,{surface:"primary",radius:"sm",children:s.jsx(n,{size:"md"})}),s.jsx(r,{size:"sm",children:"`lg` (4px)"}),s.jsx(e,{surface:"primary",radius:"sm",children:s.jsx(n,{size:"lg"})}),s.jsx(r,{size:"sm",children:"`xl` (5px)"}),s.jsx(e,{surface:"primary",radius:"sm",children:s.jsx(n,{size:"xl"})})]})})]})})}},i={args:{size:"md"},argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"]}},render:function(l){return s.jsxs(e,{surface:"muted",padding:"sm",radius:"sm",children:[s.jsx(r,{size:"sm",children:"Top"}),s.jsx(n,{size:l.size}),s.jsx(r,{size:"sm",children:"Bottom"})]})}};var d,x,o;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: function Render() {
    return <Box surface="elevated" padding="md" radius="md" border="subtle">
        <Stack gap="md">
          <Text weight="semibold">Spacer sizes</Text>

          <Box surface="muted" padding="sm" radius="sm">
            <Stack gap="sm">
              <Text size="sm">\`xs\` (1px)</Text>
              <Box surface="primary" radius="sm">
                <Spacer size="xs" />
              </Box>
              <Text size="sm">\`sm\` (2px)</Text>
              <Box surface="primary" radius="sm">
                <Spacer size="sm" />
              </Box>
              <Text size="sm">\`md\` (3px)</Text>
              <Box surface="primary" radius="sm">
                <Spacer size="md" />
              </Box>
              <Text size="sm">\`lg\` (4px)</Text>
              <Box surface="primary" radius="sm">
                <Spacer size="lg" />
              </Box>
              <Text size="sm">\`xl\` (5px)</Text>
              <Box surface="primary" radius="sm">
                <Spacer size="xl" />
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>;
  }
}`,...(o=(x=a.parameters)==null?void 0:x.docs)==null?void 0:o.source}}};var t,c,p;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    size: "md"
  },
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"]
    }
  },
  render: function Render(args: any) {
    return <Box surface="muted" padding="sm" radius="sm">
        <Text size="sm">Top</Text>
        <Spacer size={args.size} />
        <Text size="sm">Bottom</Text>
      </Box>;
  }
}`,...(p=(c=i.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const y=["Showcase","Playground"];export{i as Playground,a as Showcase,y as __namedExportsOrder,B as default};
