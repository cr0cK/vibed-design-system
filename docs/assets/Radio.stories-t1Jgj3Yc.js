import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./index-C4lZkr4h.js";import{s as d,b as i}from"./buildVariants-CfwgwYun.js";import{S as f}from"./Stack-CeWigPj7.js";const S=d.label(function(e){return i(e).css({display:"inline-flex",alignItems:"center",gap:"var(--ds-space-xs)",cursor:"pointer",userSelect:"none",minHeight:"1.375rem"}).variant("controlSize",e.controlSize??"md",{sm:{minHeight:"1.15rem",gap:"var(--ds-space-xxs)"},md:{minHeight:"1.375rem",gap:"var(--ds-space-xs)"},lg:{minHeight:"1.7rem",gap:"var(--ds-space-sm)"}}).end()}),v=d.input(function(e){return i(e).css({width:"1rem",height:"1rem",margin:0,borderRadius:"999px",border:"1px solid color-mix(in oklab, var(--ds-color-border) 95%, #d9d9d9)",appearance:"none",backgroundColor:"var(--ds-color-surface)",display:"inline-grid",placeContent:"center",cursor:"pointer",transition:"all .2s","&::before":{content:'""',width:"0.5rem",height:"0.5rem",borderRadius:"999px",transform:"scale(0)",transition:"transform .16s ease-in-out",backgroundColor:"var(--ds-color-primary)"},"&:hover":{borderColor:"color-mix(in oklab, var(--ds-color-primary) 55%, var(--ds-color-border))"},"&:checked":{borderColor:"var(--ds-color-primary)",backgroundColor:"var(--ds-color-surface)"},"&:checked::before":{transform:"scale(1)"},"&:focus-visible":{outline:"none",borderColor:"var(--ds-color-primary)",boxShadow:"0 0 0 2px color-mix(in oklab, var(--ds-color-primary) 20%, transparent)"},"&:disabled":{cursor:"not-allowed",borderColor:"color-mix(in oklab, var(--ds-color-border) 80%, var(--ds-color-surface-muted))",backgroundColor:"var(--ds-color-surface-muted)"},"&:disabled::before":{backgroundColor:"color-mix(in oklab, var(--ds-color-text-muted) 70%, var(--ds-color-surface-muted))"},"&:disabled + span":{color:"var(--ds-color-text-muted)"}}).variant("controlSize",e.controlSize??"md",{sm:{width:"0.875rem",height:"0.875rem","&::before":{width:"0.42rem",height:"0.42rem"}},md:{width:"1rem",height:"1rem","&::before":{width:"0.5rem",height:"0.5rem"}},lg:{width:"1.15rem",height:"1.15rem","&::before":{width:"0.58rem",height:"0.58rem"}}}).end()}),x=d.span(function(e){return i(e).css({color:"var(--ds-color-text)",fontFamily:"var(--ds-font-body)",fontSize:"0.875rem",lineHeight:1.45}).variant("controlSize",e.controlSize??"md",{sm:{fontSize:"0.82rem",lineHeight:1.35},md:{fontSize:"0.875rem",lineHeight:1.45},lg:{fontSize:"0.95rem",lineHeight:1.5}}).end()});function n(o){return r.jsxs(S,{"data-attr-name":"Radio",controlSize:o.controlSize,children:[r.jsx(v,{...o,type:"radio"}),r.jsx(x,{controlSize:o.controlSize,children:o.label})]})}n.__docgenInfo={description:"Atom component that renders the Radio primitive.",methods:[],displayName:"Radio",props:{label:{required:!1,tsType:{name:"ReactNode"},description:""},controlSize:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:""}},composes:["InputHTMLAttributes"]};const R={title:"Atoms/Radio",component:n,tags:["autodocs"]},a={render:function(){const[e,l]=p.useState("a");return r.jsxs(f,{gap:"sm",children:[r.jsx(n,{controlSize:"sm",name:"plan",label:"Starter (sm)",checked:e==="a",onChange:function(){l("a")}}),r.jsx(n,{controlSize:"md",name:"plan",label:"Pro (md)",checked:e==="b",onChange:function(){l("b")}}),r.jsx(n,{controlSize:"lg",name:"plan",label:"Enterprise (lg)",checked:e==="c",onChange:function(){l("c")}})]})}},t={args:{label:"Starter plan",controlSize:"md",defaultChecked:!0,disabled:!1},argTypes:{label:{control:"text"},controlSize:{control:"select",options:["sm","md","lg"]},defaultChecked:{control:"boolean"},disabled:{control:"boolean"}},render:function(e){return r.jsx(n,{name:"playground-radio",label:e.label,controlSize:e.controlSize,defaultChecked:e.defaultChecked,disabled:e.disabled})}};var c,m,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState("a");
    return <Stack gap="sm">
      <Radio controlSize="sm" name="plan" label="Starter (sm)" checked={value === "a"} onChange={function onChange() {
        setValue("a");
      }} />
      <Radio controlSize="md" name="plan" label="Pro (md)" checked={value === "b"} onChange={function onChange() {
        setValue("b");
      }} />
      <Radio controlSize="lg" name="plan" label="Enterprise (lg)" checked={value === "c"} onChange={function onChange() {
        setValue("c");
      }} />
    </Stack>;
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,b,g;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: "Starter plan",
    controlSize: "md",
    defaultChecked: true,
    disabled: false
  },
  argTypes: {
    label: {
      control: "text"
    },
    controlSize: {
      control: "select",
      options: ["sm", "md", "lg"]
    },
    defaultChecked: {
      control: "boolean"
    },
    disabled: {
      control: "boolean"
    }
  },
  render: function Render(args: any) {
    return <Radio name="playground-radio" label={args.label} controlSize={args.controlSize} defaultChecked={args.defaultChecked} disabled={args.disabled} />;
  }
}`,...(g=(b=t.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const w=["Showcase","Playground"];export{t as Playground,a as Showcase,w as __namedExportsOrder,R as default};
