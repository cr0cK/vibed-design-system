import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{s as g,b as x}from"./buildVariants-CfwgwYun.js";import{S as h}from"./Stack-CeWigPj7.js";import{I as s}from"./Inline-BWffa32P.js";import"./index-C4lZkr4h.js";const v=g.button(function(r){return x(r).css({display:"inline-flex",alignItems:"center",justifyContent:"center",border:"1px solid var(--ds-color-border)",backgroundColor:"var(--ds-color-surface)",color:"var(--ds-color-text)",borderRadius:"var(--ds-radius-full)",cursor:"pointer",boxShadow:"0 1px 2px rgba(17, 24, 39, 0.05)",transition:"transform .16s ease, border-color .16s ease, box-shadow .16s ease, background-color .16s ease, color .16s ease","&:hover":{transform:"translateY(-1px)",boxShadow:"0 6px 16px rgba(17, 24, 39, 0.12)"},"&:active":{transform:"translateY(0)",boxShadow:"0 2px 6px rgba(17, 24, 39, 0.1)"},"&:focus-visible":{outline:"none",boxShadow:"0 0 0 2px color-mix(in oklab, var(--ds-color-primary) 18%, transparent), 0 4px 12px rgba(17, 24, 39, 0.12)"},"&:disabled":{opacity:.55,cursor:"not-allowed",transform:"none",boxShadow:"none"},"@media (prefers-reduced-motion: reduce)":{transition:"border-color .16s ease, box-shadow .16s ease, background-color .16s ease, color .16s ease","&:hover":{transform:"none"},"&:active":{transform:"none"}}}).variant("controlSize",r.controlSize??r.size??"md",{sm:{width:"2rem",height:"2rem",fontSize:"0.8rem"},md:{width:"2.35rem",height:"2.35rem",fontSize:"0.92rem"},lg:{width:"2.75rem",height:"2.75rem",fontSize:"1.02rem"}}).variant("tone",r.tone??"neutral",{neutral:{borderColor:"color-mix(in oklab, var(--ds-color-border) 92%, #cfd6df)",color:"var(--ds-color-text-muted)","&:hover":{borderColor:"color-mix(in oklab, var(--ds-color-primary) 34%, var(--ds-color-border))",color:"var(--ds-color-text)"}},primary:{borderColor:"color-mix(in oklab, var(--ds-color-primary) 48%, var(--ds-color-border))",color:"var(--ds-color-primary)",backgroundColor:"color-mix(in oklab, var(--ds-color-primary) 4%, var(--ds-color-surface))","&:hover":{borderColor:"var(--ds-color-primary)",backgroundColor:"color-mix(in oklab, var(--ds-color-primary) 10%, var(--ds-color-surface))"}},danger:{borderColor:"color-mix(in oklab, var(--ds-color-danger) 42%, var(--ds-color-border))",color:"var(--ds-color-danger)",backgroundColor:"color-mix(in oklab, var(--ds-color-danger) 4%, var(--ds-color-surface))","&:hover":{borderColor:"var(--ds-color-danger)",backgroundColor:"color-mix(in oklab, var(--ds-color-danger) 10%, var(--ds-color-surface))"}}}).end()}),f=g.span(function(){return x({}).css({display:"inline-flex",alignItems:"center",justifyContent:"center",width:"1em",height:"1em",lineHeight:1,"& > svg":{width:"1em",height:"1em",display:"block"}}).end()});function o(n){const r=n.children??n.icon;return e.jsx(v,{"data-attr-name":"IconButton",...n,type:n.type??"button","aria-label":n.label,title:n.label,children:e.jsx(f,{children:r})})}o.__docgenInfo={description:"Atom component that renders the IconButton primitive.",methods:[],displayName:"IconButton",props:{icon:{required:!1,tsType:{name:"ReactNode"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},label:{required:!0,tsType:{name:"string"},description:""},controlSize:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:""},tone:{required:!1,tsType:{name:"union",raw:'"neutral" | "primary" | "danger"',elements:[{name:"literal",value:'"neutral"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"danger"'}]},description:""}},composes:["ButtonHTMLAttributes"]};const k={title:"Atoms/IconButton",component:o,tags:["autodocs"]};function l(){return e.jsx("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M10 4.25V15.75M4.25 10H15.75",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})}function i(){return e.jsx("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M5.25 5.25L14.75 14.75M14.75 5.25L5.25 14.75",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})}const t={render:function(){return e.jsxs(h,{gap:"sm",children:[e.jsxs(s,{gap:"sm",children:[e.jsx(o,{controlSize:"sm",label:"Add",icon:e.jsx(l,{}),tone:"primary"}),e.jsx(o,{controlSize:"sm",label:"Delete",icon:e.jsx(i,{}),tone:"danger"}),e.jsx(o,{controlSize:"sm",label:"More",tone:"neutral",children:e.jsx("span",{"aria-hidden":"true",children:"•••"})})]}),e.jsxs(s,{gap:"sm",children:[e.jsx(o,{controlSize:"md",label:"Add",icon:e.jsx(l,{}),tone:"primary"}),e.jsx(o,{controlSize:"md",label:"Delete",icon:e.jsx(i,{}),tone:"danger"}),e.jsx(o,{controlSize:"md",label:"More",tone:"neutral",children:e.jsx("span",{"aria-hidden":"true",children:"•••"})})]}),e.jsxs(s,{gap:"sm",children:[e.jsx(o,{controlSize:"lg",label:"Add",icon:e.jsx(l,{}),tone:"primary"}),e.jsx(o,{controlSize:"lg",label:"Delete",icon:e.jsx(i,{}),tone:"danger"}),e.jsx(o,{controlSize:"lg",label:"More",tone:"neutral",children:e.jsx("span",{"aria-hidden":"true",children:"•••"})})]})]})}},a={args:{tone:"primary",controlSize:"md",disabled:!1,label:"Add"},argTypes:{tone:{control:"select",options:["primary","neutral","danger"]},controlSize:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"},label:{control:"text"}},render:function(r){return e.jsx(o,{tone:r.tone,controlSize:r.controlSize,disabled:r.disabled,label:r.label,icon:e.jsx(l,{})})}};var c,d,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: function Render() {
    return <Stack gap="sm">
        <Inline gap="sm">
          <IconButton controlSize="sm" label="Add" icon={<PlusIcon />} tone="primary" />
          <IconButton controlSize="sm" label="Delete" icon={<CloseIcon />} tone="danger" />
          <IconButton controlSize="sm" label="More" tone="neutral">
            <span aria-hidden="true">•••</span>
          </IconButton>
        </Inline>
        <Inline gap="sm">
          <IconButton controlSize="md" label="Add" icon={<PlusIcon />} tone="primary" />
          <IconButton controlSize="md" label="Delete" icon={<CloseIcon />} tone="danger" />
          <IconButton controlSize="md" label="More" tone="neutral">
            <span aria-hidden="true">•••</span>
          </IconButton>
        </Inline>
        <Inline gap="sm">
          <IconButton controlSize="lg" label="Add" icon={<PlusIcon />} tone="primary" />
          <IconButton controlSize="lg" label="Delete" icon={<CloseIcon />} tone="danger" />
          <IconButton controlSize="lg" label="More" tone="neutral">
            <span aria-hidden="true">•••</span>
          </IconButton>
        </Inline>
      </Stack>;
  }
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,b,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    tone: "primary",
    controlSize: "md",
    disabled: false,
    label: "Add"
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
    return <IconButton tone={args.tone} controlSize={args.controlSize} disabled={args.disabled} label={args.label} icon={<PlusIcon />} />;
  }
}`,...(p=(b=a.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};const B=["Showcase","Playground"];export{a as Playground,t as Showcase,B as __namedExportsOrder,k as default};
