import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{B as n}from"./Breadcrumb-Ce_xvkSF.js";import"./buildVariants-CfwgwYun.js";import"./index-C4lZkr4h.js";import"./Link-AUUY1_iE.js";import"./Text-DDuTvIDd.js";const B={title:"Molecules/Breadcrumb",component:n,tags:["autodocs"]},e={render:function(){return m.jsx(n,{items:[{label:"Home",href:"#"},{label:"Components",href:"#"},{label:"Breadcrumb"}]})}},r={args:{currentLabel:"Breadcrumb"},argTypes:{currentLabel:{control:"text"}},render:function(d){return m.jsx(n,{items:[{label:"Home",href:"#"},{label:"Components",href:"#"},{label:d.currentLabel}]})}};var a,o,t;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: function Render() {
    return <Breadcrumb items={[{
      label: "Home",
      href: "#"
    }, {
      label: "Components",
      href: "#"
    }, {
      label: "Breadcrumb"
    }]} />;
  }
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};var s,c,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    currentLabel: "Breadcrumb"
  },
  argTypes: {
    currentLabel: {
      control: "text"
    }
  },
  render: function Render(args: any) {
    return <Breadcrumb items={[{
      label: "Home",
      href: "#"
    }, {
      label: "Components",
      href: "#"
    }, {
      label: args.currentLabel
    }]} />;
  }
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const x=["Showcase","Playground"];export{r as Playground,e as Showcase,x as __namedExportsOrder,B as default};
