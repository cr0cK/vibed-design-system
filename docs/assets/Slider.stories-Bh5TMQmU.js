import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./index-C4lZkr4h.js";import{s as V,b as x}from"./buildVariants-CfwgwYun.js";import{T as w}from"./Text-DDuTvIDd.js";import{S as z}from"./Stack-CeWigPj7.js";const k=V.div(function(r){return x(r).css({display:"grid",gap:"var(--ds-space-xs)"}).variant("controlSize",r.controlSize??"md",{sm:{gap:"var(--ds-space-xxs)"},md:{gap:"var(--ds-space-xs)"},lg:{gap:"var(--ds-space-sm)"}}).end()}),y=V.input(function(r){return x(r).css({width:"100%",appearance:"none",background:"transparent",cursor:"pointer","&::-webkit-slider-runnable-track":{height:"0.4rem",backgroundColor:"color-mix(in oklab, var(--ds-color-primary) 18%, var(--ds-color-surface-muted))",borderRadius:"var(--ds-radius-full)"},"&::-webkit-slider-thumb":{appearance:"none",width:"1rem",height:"1rem",marginTop:"-0.3rem",borderRadius:"var(--ds-radius-full)",border:"2px solid var(--ds-color-surface)",backgroundColor:"var(--ds-color-primary)",boxShadow:"var(--ds-shadow-sm)"},"&::-moz-range-track":{height:"0.4rem",backgroundColor:"color-mix(in oklab, var(--ds-color-primary) 18%, var(--ds-color-surface-muted))",borderRadius:"var(--ds-radius-full)"},"&::-moz-range-thumb":{width:"1rem",height:"1rem",border:"2px solid var(--ds-color-surface)",borderRadius:"var(--ds-radius-full)",backgroundColor:"var(--ds-color-primary)",boxShadow:"var(--ds-shadow-sm)"},"&:focus-visible":{outline:"none"},"&:focus-visible::-webkit-slider-thumb":{boxShadow:"0 0 0 3px color-mix(in oklab, var(--ds-color-primary) 24%, transparent)"},"&:focus-visible::-moz-range-thumb":{boxShadow:"0 0 0 3px color-mix(in oklab, var(--ds-color-primary) 24%, transparent)"}}).variant("controlSize",r.controlSize??"md",{sm:{"&::-webkit-slider-runnable-track":{height:"0.3rem"},"&::-webkit-slider-thumb":{width:"0.85rem",height:"0.85rem",marginTop:"-0.28rem"},"&::-moz-range-track":{height:"0.3rem"},"&::-moz-range-thumb":{width:"0.85rem",height:"0.85rem"}},md:{"&::-webkit-slider-runnable-track":{height:"0.4rem"},"&::-webkit-slider-thumb":{width:"1rem",height:"1rem",marginTop:"-0.3rem"},"&::-moz-range-track":{height:"0.4rem"},"&::-moz-range-thumb":{width:"1rem",height:"1rem"}},lg:{"&::-webkit-slider-runnable-track":{height:"0.5rem"},"&::-webkit-slider-thumb":{width:"1.1rem",height:"1.1rem",marginTop:"-0.3rem"},"&::-moz-range-track":{height:"0.5rem"},"&::-moz-range-thumb":{width:"1.1rem",height:"1.1rem"}}}).end()});function n(e){const r=e.controlSize??"md",o=e.min!==void 0?Number(e.min):0,[S,d]=m.useState(e.defaultValue!==void 0?Number(e.defaultValue):o);m.useEffect(function(){if(e.value!==void 0){const t=Number(e.value);Number.isNaN(t)||d(t)}},[e.value]);const l=e.value!==void 0?Number(e.value):S;function p(i){e.value===void 0&&d(i),e.onValueChange&&e.onValueChange(i)}return a.jsxs(k,{"data-attr-name":"Slider",className:e.className,controlSize:r,children:[a.jsx(y,{...e,controlSize:r,type:"range",value:Number.isNaN(l)?o:l,onChange:function(t){e.onChange&&e.onChange(t),p(Number(t.target.value))}}),e.showValue?a.jsxs(w,{size:r==="lg"?"md":"sm",tone:"muted",children:["Value: ",Number.isNaN(l)?o:l]}):null]})}n.__docgenInfo={description:"Atom component that renders the Slider primitive.",methods:[],displayName:"Slider",props:{controlSize:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:""},showValue:{required:!1,tsType:{name:"boolean"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(nextValue: number) => void",signature:{arguments:[{type:{name:"number"},name:"nextValue"}],return:{name:"void"}}},description:""}},composes:["Omit"]};const E={title:"Atoms/Slider",component:n,tags:["autodocs"]},s={render:function(){const[r,o]=m.useState(35);return a.jsxs(z,{gap:"sm",children:[a.jsx(n,{controlSize:"sm",min:0,max:100,defaultValue:20,showValue:!0}),a.jsx(n,{controlSize:"md",min:0,max:100,defaultValue:50,showValue:!0}),a.jsx(n,{controlSize:"lg",min:0,max:100,value:r,onValueChange:o,showValue:!0})]})}},u={args:{controlSize:"md",min:0,max:100,step:1,defaultValue:35,showValue:!0},argTypes:{controlSize:{control:"select",options:["sm","md","lg"]},min:{control:"number"},max:{control:"number"},step:{control:"number"},defaultValue:{control:"number"},showValue:{control:"boolean"}},render:function(r){return a.jsx(n,{controlSize:r.controlSize,min:r.min,max:r.max,step:r.step,defaultValue:r.defaultValue,showValue:r.showValue})}};var c,h,g;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState(35);
    return <Stack gap="sm">
      <Slider controlSize="sm" min={0} max={100} defaultValue={20} showValue />
      <Slider controlSize="md" min={0} max={100} defaultValue={50} showValue />
      <Slider controlSize="lg" min={0} max={100} value={value} onValueChange={setValue} showValue />
    </Stack>;
  }
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var b,f,v;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    controlSize: "md",
    min: 0,
    max: 100,
    step: 1,
    defaultValue: 35,
    showValue: true
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
    showValue: {
      control: "boolean"
    }
  },
  render: function Render(args: any) {
    return <Slider controlSize={args.controlSize} min={args.min} max={args.max} step={args.step} defaultValue={args.defaultValue} showValue={args.showValue} />;
  }
}`,...(v=(f=u.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const _=["Showcase","Playground"];export{u as Playground,s as Showcase,_ as __namedExportsOrder,E as default};
