import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{s as v,b as p}from"./buildVariants-CfwgwYun.js";import{S}from"./Stack-CeWigPj7.js";import"./index-C4lZkr4h.js";const y=v.div(function(e){return p(e).css({width:"100%",backgroundColor:"var(--ds-color-surface-muted)",borderRadius:"var(--ds-radius-full)",overflow:"hidden"}).variant("controlSize",e.controlSize??"md",{sm:{height:"0.35rem"},md:{height:"0.5rem"},lg:{height:"0.65rem"}}).end()}),h=v.div(function(e){return p(e).css({height:"100%",width:`${e.percent}%`,transition:"width .2s ease"}).variant("tone",e.tone??"primary",{primary:{backgroundColor:"var(--ds-color-primary)"},success:{backgroundColor:"var(--ds-color-success)"},danger:{backgroundColor:"var(--ds-color-danger)"}}).end()});function f(r,e){if(e<=0)return 0;const s=r/e*100;return Math.max(0,Math.min(100,s))}function o(r){const e=r.max??100,s=f(r.value,e),l=r.controlSize??r.size??"md";return n.jsx(y,{"data-attr-name":"Progress",className:r.className,role:"progressbar","aria-valuemin":0,"aria-valuemax":e,"aria-valuenow":Math.max(0,Math.min(e,r.value)),controlSize:l,tone:r.tone,children:n.jsx(h,{percent:s,tone:r.tone,controlSize:l})})}o.__docgenInfo={description:"Atom component that renders the Progress primitive.",methods:[],displayName:"Progress",props:{value:{required:!0,tsType:{name:"number"},description:""},max:{required:!1,tsType:{name:"number"},description:""},tone:{required:!1,tsType:{name:"union",raw:'"primary" | "success" | "danger"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"danger"'}]},description:""},controlSize:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:""}},composes:["HTMLAttributes"]};const w={title:"Atoms/Progress",component:o,tags:["autodocs"]},t={render:function(){return n.jsxs(S,{gap:"md",children:[n.jsx(o,{value:26,controlSize:"sm"}),n.jsx(o,{value:54,controlSize:"md",tone:"success"}),n.jsx(o,{value:78,controlSize:"lg",tone:"danger"})]})}},a={args:{value:54,tone:"primary",controlSize:"md"},argTypes:{value:{control:{type:"number",min:0,max:100,step:1}},tone:{control:"select",options:["primary","success","danger"]},controlSize:{control:"select",options:["sm","md","lg"]}},render:function(e){return n.jsx(o,{value:e.value,tone:e.tone,controlSize:e.controlSize})}};var i,c,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: function Render() {
    return <Stack gap="md">
        <Progress value={26} controlSize="sm" />
        <Progress value={54} controlSize="md" tone="success" />
        <Progress value={78} controlSize="lg" tone="danger" />
      </Stack>;
  }
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,d,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    value: 54,
    tone: "primary",
    controlSize: "md"
  },
  argTypes: {
    value: {
      control: {
        type: "number",
        min: 0,
        max: 100,
        step: 1
      }
    },
    tone: {
      control: "select",
      options: ["primary", "success", "danger"]
    },
    controlSize: {
      control: "select",
      options: ["sm", "md", "lg"]
    }
  },
  render: function Render(args: any) {
    return <Progress value={args.value} tone={args.tone} controlSize={args.controlSize} />;
  }
}`,...(g=(d=a.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};const j=["Showcase","Playground"];export{a as Playground,t as Showcase,j as __namedExportsOrder,w as default};
