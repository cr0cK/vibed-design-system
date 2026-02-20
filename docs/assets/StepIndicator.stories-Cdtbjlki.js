import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as I}from"./index-C4lZkr4h.js";import{s as c,b as l}from"./buildVariants-CfwgwYun.js";import{T as m}from"./Text-DDuTvIDd.js";import{S as y}from"./Stack-CeWigPj7.js";import{B as x}from"./Button-CXef72x6.js";import"./variantValue-VCXXWlxS.js";const w=c.ol(function(){return l({}).css({margin:0,padding:0,listStyle:"none",display:"grid",gap:"var(--ds-space-sm)"}).end()}),C=c.li(function(){return l({}).css({display:"grid",gridTemplateColumns:"auto 1fr",gap:"var(--ds-space-sm)",alignItems:"start"}).end()}),j=c.span(function(t){return l(t).css({marginTop:"0.18rem",width:"1rem",height:"1rem",borderRadius:"var(--ds-radius-full)",border:"2px solid var(--ds-color-border)",display:"inline-grid",placeItems:"center",color:"var(--ds-color-surface)",position:"relative"}).variant("status",t.status??"pending",{pending:{borderColor:"var(--ds-color-border)",backgroundColor:"var(--ds-color-surface)"},active:{borderColor:"var(--ds-color-primary)",backgroundColor:"var(--ds-color-primary)"},done:{borderColor:"var(--ds-color-success)",backgroundColor:"var(--ds-color-success)"}}).end()}),R=c.span(function(){return l({}).css({width:"0.34rem",height:"0.18rem",borderLeft:"2px solid currentColor",borderBottom:"2px solid currentColor",position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -44%) rotate(-45deg)"}).end()});function k(e,t){const s=e.findIndex(function(o){return o.id===t}),n={};return e.forEach(function(o,u){u<s?n[o.id]="done":u===s?n[o.id]="active":n[o.id]="pending"}),n}function p(e){const t=k(e.steps,e.activeStepId);return r.jsx(w,{"data-attr-name":"StepIndicator",className:e.className,children:e.steps.map(function(n){const i=t[n.id]??"pending";return r.jsxs(C,{children:[r.jsx(j,{status:i,children:i==="done"?r.jsx(R,{"aria-hidden":"true"}):null}),r.jsxs("div",{children:[r.jsx(m,{size:"sm",weight:i==="active"?"semibold":"regular",children:n.label}),n.description?r.jsx(m,{size:"sm",tone:"muted",children:n.description}):null]})]},n.id)})})}p.__docgenInfo={description:"Molecule component that renders the StepIndicator primitive.",methods:[],displayName:"StepIndicator",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"StepItem"}],raw:"StepItem[]"},description:""},activeStepId:{required:!0,tsType:{name:"string"},description:""}},composes:["HTMLAttributes"]};const E={title:"Molecules/StepIndicator",component:p,tags:["autodocs"]},a={render:function(){const[t,s]=I.useState("schedule");return r.jsxs(y,{gap:"sm",children:[r.jsx(p,{activeStepId:t,steps:[{id:"setup",label:"Setup",description:"Define title and recipients"},{id:"schedule",label:"Schedule",description:"Choose date and frequency"},{id:"review",label:"Review",description:"Validate and publish"}]}),r.jsx(x,{tone:"neutral",size:"sm",onClick:function(){s(t==="schedule"?"review":"schedule")},children:"Toggle active step"})]})}},d={args:{activeStepId:"schedule"},argTypes:{activeStepId:{control:"select",options:["setup","schedule","review"]}},render:function(t){return r.jsx(p,{activeStepId:t.activeStepId,steps:[{id:"setup",label:"Setup",description:"Define title and recipients"},{id:"schedule",label:"Schedule",description:"Choose date and frequency"},{id:"review",label:"Review",description:"Validate and publish"}]})}};var v,S,h;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: function Render() {
    const [activeStep, setActiveStep] = useState("schedule");
    return <Stack gap="sm">
      <StepIndicator activeStepId={activeStep} steps={[{
        id: "setup",
        label: "Setup",
        description: "Define title and recipients"
      }, {
        id: "schedule",
        label: "Schedule",
        description: "Choose date and frequency"
      }, {
        id: "review",
        label: "Review",
        description: "Validate and publish"
      }]} />
      <Button tone="neutral" size="sm" onClick={function onClick() {
        setActiveStep(activeStep === "schedule" ? "review" : "schedule");
      }}>
        Toggle active step
      </Button>
    </Stack>;
  }
}`,...(h=(S=a.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var f,g,b;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    activeStepId: "schedule"
  },
  argTypes: {
    activeStepId: {
      control: "select",
      options: ["setup", "schedule", "review"]
    }
  },
  render: function Render(args: any) {
    return <StepIndicator activeStepId={args.activeStepId} steps={[{
      id: "setup",
      label: "Setup",
      description: "Define title and recipients"
    }, {
      id: "schedule",
      label: "Schedule",
      description: "Choose date and frequency"
    }, {
      id: "review",
      label: "Review",
      description: "Validate and publish"
    }]} />;
  }
}`,...(b=(g=d.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const _=["Showcase","Playground"];export{d as Playground,a as Showcase,_ as __namedExportsOrder,E as default};
