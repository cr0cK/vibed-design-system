import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{s as u,b as p}from"./buildVariants-CfwgwYun.js";import{H as y}from"./Heading-arU6QW_P.js";import{T as f}from"./Text-DDuTvIDd.js";import{B as g}from"./Button-CXef72x6.js";import"./index-C4lZkr4h.js";import"./variantValue-VCXXWlxS.js";const v=u.section(function(t){return p(t).css({border:"1px dashed var(--ds-color-border)",borderRadius:"var(--ds-radius-md)",backgroundColor:"var(--ds-color-surface)",textAlign:"center",display:"grid",justifyItems:"center"}).variant("controlSize",t.controlSize??"md",{sm:{gap:"var(--ds-space-xs)",padding:"var(--ds-space-md)"},md:{gap:"var(--ds-space-sm)",padding:"var(--ds-space-lg)"},lg:{gap:"var(--ds-space-md)",padding:"var(--ds-space-xl)"}}).end()}),x=u.div(function(t){return p(t).css({display:"grid",placeItems:"center",borderRadius:"var(--ds-radius-full)",color:"var(--ds-color-primary)",backgroundColor:"color-mix(in oklab, var(--ds-color-primary) 12%, transparent)"}).variant("controlSize",t.controlSize??"md",{sm:{width:"2rem",height:"2rem",fontSize:"1rem"},md:{width:"2.6rem",height:"2.6rem",fontSize:"1.3rem"},lg:{width:"3.2rem",height:"3.2rem",fontSize:"1.6rem"}}).end()});function o(e){const t=e.controlSize??e.size??"md";return r.jsxs(v,{"data-attr-name":"EmptyState",className:e.className,controlSize:t,children:[e.icon?r.jsx(x,{controlSize:t,"aria-hidden":"true",children:e.icon}):null,r.jsx(y,{level:t==="lg"?3:4,children:e.title}),e.description?r.jsx(f,{tone:"muted",size:t==="lg"?"md":"sm",children:e.description}):null,e.action?e.action:null]})}o.__docgenInfo={description:"Molecule component that renders the EmptyState primitive.",methods:[],displayName:"EmptyState",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},action:{required:!1,tsType:{name:"ReactNode"},description:""},controlSize:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:""}},composes:["HTMLAttributes"]};const R={title:"Molecules/EmptyState",component:o,tags:["autodocs"]},n={render:function(){return r.jsx(o,{title:"No automations yet",description:"Create your first automation to start receiving digest summaries.",icon:"✦",action:r.jsx(g,{tone:"primary",children:"Create automation"})})}},i={args:{title:"No automations yet",description:"Create your first automation to start receiving digest summaries.",icon:"✦"},argTypes:{title:{control:"text"},description:{control:"text"},icon:{control:"text"}},render:function(t){return r.jsx(o,{title:t.title,description:t.description,icon:t.icon,action:r.jsx(g,{tone:"primary",children:"Create automation"})})}};var a,s,c;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: function Render() {
    return <EmptyState title="No automations yet" description="Create your first automation to start receiving digest summaries." icon="✦" action={<Button tone="primary">Create automation</Button>} />;
  }
}`,...(c=(s=n.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var d,m,l;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: "No automations yet",
    description: "Create your first automation to start receiving digest summaries.",
    icon: "✦"
  },
  argTypes: {
    title: {
      control: "text"
    },
    description: {
      control: "text"
    },
    icon: {
      control: "text"
    }
  },
  render: function Render(args: any) {
    return <EmptyState title={args.title} description={args.description} icon={args.icon} action={<Button tone="primary">Create automation</Button>} />;
  }
}`,...(l=(m=i.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const E=["Showcase","Playground"];export{i as Playground,n as Showcase,E as __namedExportsOrder,R as default};
