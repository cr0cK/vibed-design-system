import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-C4lZkr4h.js";import{s as b,b as f}from"./buildVariants-CfwgwYun.js";import{C as z}from"./Container-CqXCUMWa.js";import{S as C}from"./Stack-CeWigPj7.js";import{T as k}from"./Text-DDuTvIDd.js";const w=b.div(function(n){return f(n).css({width:"100%",minWidth:0,display:"grid",gridTemplateColumns:"auto 1fr auto",alignItems:"center",border:"1px solid var(--ds-color-border)",backgroundColor:"var(--ds-color-surface)",borderRadius:"var(--ds-radius-md)",transition:"border-color .16s ease, box-shadow .16s ease","&:focus-within":{borderColor:"var(--ds-color-primary)",boxShadow:"0 0 0 2px color-mix(in oklab, var(--ds-color-primary) 20%, transparent)"}}).variant("controlSize",n.controlSize??"md",{sm:{minHeight:"2rem"},md:{minHeight:"2.3rem"},lg:{minHeight:"2.7rem"}}).end()}),I=b.input(function(n){return f(n).css({border:"none",outline:"none",backgroundColor:"transparent",color:"var(--ds-color-text)",fontFamily:"var(--ds-font-body)",width:"100%",minWidth:0,textAlign:"center",appearance:"textfield","&::-webkit-outer-spin-button, &::-webkit-inner-spin-button":{appearance:"none",margin:0}}).variant("controlSize",n.controlSize??"md",{sm:{fontSize:"0.84rem",padding:"0.2rem 0.35rem"},md:{fontSize:"0.92rem",padding:"0.28rem 0.45rem"},lg:{fontSize:"1rem",padding:"0.36rem 0.5rem"}}).end()}),x=b.button(function(n){return f(n).css({border:"1px solid transparent",backgroundColor:"transparent",color:"var(--ds-color-text-muted)",cursor:"pointer",fontFamily:"var(--ds-font-body)",fontWeight:600,display:"inline-flex",alignItems:"center",justifyContent:"center",borderRadius:"0.45rem",marginInline:"0.3rem",marginBlock:"0.2rem",lineHeight:1,transition:"background-color .14s ease, border-color .14s ease, color .14s ease","&:hover":{backgroundColor:"color-mix(in oklab, var(--ds-color-primary) 8%, var(--ds-color-surface))",borderColor:"color-mix(in oklab, var(--ds-color-primary) 22%, var(--ds-color-border))",color:"var(--ds-color-text)"},"&:focus-visible":{outline:"none",borderColor:"var(--ds-color-primary)",boxShadow:"0 0 0 2px color-mix(in oklab, var(--ds-color-primary) 18%, transparent)"},"&:disabled":{cursor:"not-allowed",color:"var(--ds-color-text-muted)",borderColor:"transparent",backgroundColor:"transparent"}}).variant("controlSize",n.controlSize??"md",{sm:{width:"1.35rem",height:"1.35rem",fontSize:"0.9rem"},md:{width:"1.55rem",height:"1.55rem",fontSize:"1rem"},lg:{width:"1.75rem",height:"1.75rem",fontSize:"1.08rem"}}).end()});function j(e,n,t){let a=e;return n!==void 0&&(a=Math.max(n,a)),t!==void 0&&(a=Math.min(t,a)),a}function i(e){const n=e.controlSize??"md",t=e.step!==void 0?Number(e.step):1,[a,g]=c.useState(e.defaultValue!==void 0?Number(e.defaultValue):Number(e.min??0));c.useEffect(function(){if(e.value!==void 0){const o=Number(e.value);Number.isNaN(o)||g(o)}},[e.value]);const l=e.value!==void 0?Number(e.value):a;function d(m){const o=j(m,e.min!==void 0?Number(e.min):void 0,e.max!==void 0?Number(e.max):void 0);e.value===void 0&&g(o),e.onValueChange&&e.onValueChange(o)}return r.jsxs(w,{"data-attr-name":"NumberInput",className:e.className,controlSize:n,children:[r.jsx(x,{type:"button",controlSize:n,"aria-label":"Decrease value",onClick:function(){d((Number.isNaN(l)?0:l)-t)},disabled:e.disabled,children:"-"}),r.jsx(I,{...e,controlSize:n,type:"number",value:Number.isNaN(l)?"":String(l),onChange:function(o){e.onChange&&e.onChange(o);const v=Number(o.target.value);Number.isNaN(v)||d(v)}}),r.jsx(x,{type:"button",controlSize:n,"aria-label":"Increase value",onClick:function(){d((Number.isNaN(l)?0:l)+t)},disabled:e.disabled,children:"+"})]})}i.__docgenInfo={description:"Atom component that renders the NumberInput primitive.",methods:[],displayName:"NumberInput",props:{controlSize:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(nextValue: number) => void",signature:{arguments:[{type:{name:"number"},name:"nextValue"}],return:{name:"void"}}},description:""}},composes:["Omit"]};const W={title:"Atoms/NumberInput",component:i,tags:["autodocs"]},s={render:function(){const[n,t]=c.useState(5);return r.jsx(z,{width:"sm",children:r.jsxs(C,{gap:"sm",children:[r.jsx(i,{controlSize:"sm",min:0,max:10,defaultValue:2}),r.jsx(i,{controlSize:"md",min:0,max:10,defaultValue:4}),r.jsx(i,{controlSize:"lg",min:0,max:10,value:n,onValueChange:t}),r.jsxs(k,{size:"sm",tone:"muted",children:["Controlled value: ",n]})]})})}},u={args:{controlSize:"md",min:0,max:10,step:1,defaultValue:5,disabled:!1},argTypes:{controlSize:{control:"select",options:["sm","md","lg"]},min:{control:"number"},max:{control:"number"},step:{control:"number"},defaultValue:{control:"number"},disabled:{control:"boolean"}},render:function(n){return r.jsx(i,{controlSize:n.controlSize,min:n.min,max:n.max,step:n.step,defaultValue:n.defaultValue,disabled:n.disabled})}};var h,p,S;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState(5);
    return <Container width="sm">
      <Stack gap="sm">
        <NumberInput controlSize="sm" min={0} max={10} defaultValue={2} />
        <NumberInput controlSize="md" min={0} max={10} defaultValue={4} />
        <NumberInput controlSize="lg" min={0} max={10} value={value} onValueChange={setValue} />
        <Text size="sm" tone="muted">Controlled value: {value}</Text>
      </Stack>
    </Container>;
  }
}`,...(S=(p=s.parameters)==null?void 0:p.docs)==null?void 0:S.source}}};var N,V,y;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    controlSize: "md",
    min: 0,
    max: 10,
    step: 1,
    defaultValue: 5,
    disabled: false
  },
  argTypes: {
    controlSize: {
      control: "select",
      options: ["sm", "md", "lg"]
    },
    min: {
      control: "number"
    },
    max: {
      control: "number"
    },
    step: {
      control: "number"
    },
    defaultValue: {
      control: "number"
    },
    disabled: {
      control: "boolean"
    }
  },
  render: function Render(args: any) {
    return <NumberInput controlSize={args.controlSize} min={args.min} max={args.max} step={args.step} defaultValue={args.defaultValue} disabled={args.disabled} />;
  }
}`,...(y=(V=u.parameters)==null?void 0:V.docs)==null?void 0:y.source}}};const q=["Showcase","Playground"];export{u as Playground,s as Showcase,q as __namedExportsOrder,W as default};
