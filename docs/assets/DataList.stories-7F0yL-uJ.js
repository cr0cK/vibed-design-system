import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{s,b as i}from"./buildVariants-CfwgwYun.js";import{T as l}from"./Text-DDuTvIDd.js";import"./index-C4lZkr4h.js";const b=s.dl(function(d){return i(d).css({margin:0,padding:0,display:"grid",border:"1px solid var(--ds-color-border)",borderRadius:"var(--ds-radius-md)",backgroundColor:"var(--ds-color-surface)"}).variant("controlSize",d.controlSize??"md",{sm:{gap:"0"},md:{gap:"0"},lg:{gap:"0"}}).end()}),y=s.div(function(){return i({}).css({display:"grid",gridTemplateColumns:"minmax(8rem, 14rem) 1fr",gap:"var(--ds-space-sm)",padding:"0.7rem 0.85rem",borderBottom:"1px solid var(--ds-color-border)","&:last-of-type":{borderBottom:"none"}}).end()}),f=s.dt(function(){return i({}).css({margin:0}).end()}),x=s.dd(function(){return i({}).css({margin:0,display:"grid",gap:"0.2rem"}).end()});function o(e){return r.jsx(b,{"data-attr-name":"DataList",className:e.className,controlSize:e.controlSize,children:e.items.map(function(n){return r.jsxs(y,{children:[r.jsx(f,{children:r.jsx(l,{size:"sm",tone:"muted",children:n.label})}),r.jsxs(x,{children:[r.jsx(l,{size:"sm",weight:"medium",children:n.value}),n.description?r.jsx(l,{size:"sm",tone:"muted",children:n.description}):null]})]},n.id)})})}o.__docgenInfo={description:"Molecule component that renders the DataList primitive.",methods:[],displayName:"DataList",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"DataListItem"}],raw:"DataListItem[]"},description:""},controlSize:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:""}},composes:["HTMLAttributes"]};const j={title:"Molecules/DataList",component:o,tags:["autodocs"]},a={render:function(){return r.jsx(o,{items:[{id:"i1",label:"Workspace",value:"Orange Motion",description:"Primary workspace"},{id:"i2",label:"Region",value:"US-East",description:"Data residency"},{id:"i3",label:"Automation count",value:"14",description:"Across all teams"}]})}},t={render:function(){return r.jsx(o,{items:[{id:"i1",label:"Workspace",value:"Orange Motion",description:"Primary workspace"},{id:"i2",label:"Region",value:"US-East",description:"Data residency"},{id:"i3",label:"Automation count",value:"14",description:"Across all teams"}]})}};var c,m,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: function Render() {
    return <DataList items={[{
      id: "i1",
      label: "Workspace",
      value: "Orange Motion",
      description: "Primary workspace"
    }, {
      id: "i2",
      label: "Region",
      value: "US-East",
      description: "Data residency"
    }, {
      id: "i3",
      label: "Automation count",
      value: "14",
      description: "Across all teams"
    }]} />;
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,g,v;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: function Render() {
    return <DataList items={[{
      id: "i1",
      label: "Workspace",
      value: "Orange Motion",
      description: "Primary workspace"
    }, {
      id: "i2",
      label: "Region",
      value: "US-East",
      description: "Data residency"
    }, {
      id: "i3",
      label: "Automation count",
      value: "14",
      description: "Across all teams"
    }]} />;
  }
}`,...(v=(g=t.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const w=["Showcase","Playground"];export{t as Playground,a as Showcase,w as __namedExportsOrder,j as default};
