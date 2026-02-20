import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{s as x,b as h}from"./buildVariants-CfwgwYun.js";import{S as u}from"./Stack-CeWigPj7.js";import{T as o}from"./Text-DDuTvIDd.js";import"./index-C4lZkr4h.js";const S=x.hr(function(a){return h(a).css({border:"none",margin:0,backgroundColor:"var(--ds-color-border)"}).variant("orientation",a.orientation??"horizontal",{horizontal:{height:"1px",width:"100%"},vertical:{height:"100%",width:"1px"}}).end()});function i(r){return e.jsx(S,{"data-attr-name":"Divider",...r})}i.__docgenInfo={description:"Atom component that renders the Divider primitive.",methods:[],displayName:"Divider",props:{orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:""}},composes:["HTMLAttributes"]};const D={title:"Atoms/Divider",component:i,tags:["autodocs"]},t={render:function(){return e.jsxs(u,{gap:"sm",children:[e.jsx(o,{children:"Section A"}),e.jsx(i,{}),e.jsx(o,{children:"Section B"})]})}},n={render:function(){return e.jsxs(u,{gap:"sm",children:[e.jsx(o,{children:"Section A"}),e.jsx(i,{}),e.jsx(o,{children:"Section B"})]})}};var s,c,d;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: function Render() {
    return <Stack gap="sm">
        <Text>Section A</Text>
        <Divider />
        <Text>Section B</Text>
      </Stack>;
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,l,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: function Render() {
    return <Stack gap="sm">
        <Text>Section A</Text>
        <Divider />
        <Text>Section B</Text>
      </Stack>;
  }
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const A=["Showcase","Playground"];export{n as Playground,t as Showcase,A as __namedExportsOrder,D as default};
