import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as r}from"./SearchBar-DsCuRwWO.js";import{S as p}from"./Stack-CeWigPj7.js";import"./buildVariants-CfwgwYun.js";import"./index-C4lZkr4h.js";const x={title:"Molecules/SearchBar",component:r,tags:["autodocs"]},o={render:function(){return e.jsxs(p,{gap:"sm",children:[e.jsx(r,{controlSize:"sm",placeholder:"Search (sm)"}),e.jsx(r,{controlSize:"md",placeholder:"Search (md)"}),e.jsx(r,{controlSize:"lg",placeholder:"Search (lg)"})]})}},a={args:{controlSize:"md",placeholder:"Search automations",disabled:!1},argTypes:{controlSize:{control:"select",options:["sm","md","lg"]},placeholder:{control:"text"},disabled:{control:"boolean"}},render:function(n){return e.jsx(r,{controlSize:n.controlSize,placeholder:n.placeholder,disabled:n.disabled})}};var c,l,t;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: function Render() {
    return <Stack gap="sm">
        <SearchBar controlSize="sm" placeholder="Search (sm)" />
        <SearchBar controlSize="md" placeholder="Search (md)" />
        <SearchBar controlSize="lg" placeholder="Search (lg)" />
      </Stack>;
  }
}`,...(t=(l=o.parameters)==null?void 0:l.docs)==null?void 0:t.source}}};var s,d,i;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    controlSize: "md",
    placeholder: "Search automations",
    disabled: false
  },
  argTypes: {
    controlSize: {
      control: "select",
      options: ["sm", "md", "lg"]
    },
    placeholder: {
      control: "text"
    },
    disabled: {
      control: "boolean"
    }
  },
  render: function Render(args: any) {
    return <SearchBar controlSize={args.controlSize} placeholder={args.placeholder} disabled={args.disabled} />;
  }
}`,...(i=(d=a.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const b=["Showcase","Playground"];export{a as Playground,o as Showcase,b as __namedExportsOrder,x as default};
