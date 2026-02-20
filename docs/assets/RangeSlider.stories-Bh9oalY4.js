import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-C4lZkr4h.js";import{s as m,b as c}from"./buildVariants-CfwgwYun.js";import{T as M}from"./Text-DDuTvIDd.js";import{S as q}from"./Stack-CeWigPj7.js";const z=m.div(function(e){return c(e).css({display:"grid",gap:"var(--ds-space-xs)"}).variant("controlSize",e.controlSize??"md",{sm:{gap:"var(--ds-space-xxs)"},md:{gap:"var(--ds-space-xs)"},lg:{gap:"var(--ds-space-sm)"}}).end()}),P=m.div(function(){return c({}).css({position:"relative",height:"1.4rem",display:"grid",alignItems:"center"}).end()}),N=m.div(function(){return c({}).css({height:"0.42rem",borderRadius:"var(--ds-radius-full)",backgroundColor:"var(--ds-color-surface-muted)",width:"100%"}).end()}),I=m.div(function(e){return c(e).css({position:"absolute",height:"0.42rem",borderRadius:"var(--ds-radius-full)",backgroundColor:"var(--ds-color-primary)",left:`${e.startPercent}%`,width:`${Math.max(0,e.endPercent-e.startPercent)}%`}).end()}),y=m.input(function(){return c({}).css({position:"absolute",width:"100%",height:"1.4rem",pointerEvents:"none",appearance:"none",background:"transparent",margin:0,"&::-webkit-slider-thumb":{pointerEvents:"all",appearance:"none",width:"0.95rem",height:"0.95rem",borderRadius:"var(--ds-radius-full)",border:"2px solid var(--ds-color-surface)",backgroundColor:"var(--ds-color-primary)",boxShadow:"var(--ds-shadow-sm)"},"&::-moz-range-thumb":{pointerEvents:"all",width:"0.95rem",height:"0.95rem",borderRadius:"var(--ds-radius-full)",border:"2px solid var(--ds-color-surface)",backgroundColor:"var(--ds-color-primary)",boxShadow:"var(--ds-shadow-sm)"}}).end()});function b(n,e,a){return Math.min(a,Math.max(e,n))}function i(n){const e=n.min??0,a=n.max??100,s=n.step??1,[h,x]=d.useState(n.defaultValue??[e,a]);d.useEffect(function(){n.value&&x(n.value)},[n.value]);const f=n.value??h,u=b(Math.min(f[0],f[1]),e,a),l=b(Math.max(f[0],f[1]),e,a),j=(u-e)/(a-e||1)*100,k=(l-e)/(a-e||1)*100;function S(g,o){const r=[b(g,e,a),b(o,e,a)];n.value||x(r),n.onValueChange&&n.onValueChange(r)}return t.jsxs(z,{"data-attr-name":"RangeSlider",className:n.className,controlSize:n.controlSize,children:[t.jsxs(P,{children:[t.jsx(N,{}),t.jsx(I,{startPercent:j,endPercent:k}),t.jsx(y,{type:"range",min:e,max:a,step:s,value:u,onChange:function(o){const r=Math.min(Number(o.target.value),l);S(r,l)},"aria-label":"Minimum value"}),t.jsx(y,{type:"range",min:e,max:a,step:s,value:l,onChange:function(o){const r=Math.max(Number(o.target.value),u);S(u,r)},"aria-label":"Maximum value"})]}),t.jsxs(M,{size:"sm",tone:"muted",children:[u," - ",l]})]})}i.__docgenInfo={description:"Molecule component that renders the RangeSlider primitive.",methods:[],displayName:"RangeSlider",props:{min:{required:!1,tsType:{name:"number"},description:""},max:{required:!1,tsType:{name:"number"},description:""},step:{required:!1,tsType:{name:"number"},description:""},value:{required:!1,tsType:{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]},description:""},defaultValue:{required:!1,tsType:{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(nextValue: [number, number]) => void",signature:{arguments:[{type:{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]},name:"nextValue"}],return:{name:"void"}}},description:""},controlSize:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:""}},composes:["Omit"]};const F={title:"Molecules/RangeSlider",component:i,tags:["autodocs"]},p={render:function(){const[e,a]=d.useState([20,80]);return t.jsxs(q,{gap:"sm",children:[t.jsx(i,{defaultValue:[10,60]}),t.jsx(i,{value:e,onValueChange:a})]})}},v={args:{min:0,max:100,defaultStart:20,defaultEnd:80},argTypes:{min:{control:"number"},max:{control:"number"},defaultStart:{control:"number"},defaultEnd:{control:"number"}},render:function(e){const[a,s]=d.useState([e.defaultStart,e.defaultEnd]);return d.useEffect(function(){s([e.defaultStart,e.defaultEnd])},[e.defaultStart,e.defaultEnd]),t.jsx(i,{min:e.min,max:e.max,value:a,onValueChange:s})}};var V,R,E;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState<[number, number]>([20, 80]);
    return <Stack gap="sm">
      <RangeSlider defaultValue={[10, 60]} />
      <RangeSlider value={value} onValueChange={setValue} />
    </Stack>;
  }
}`,...(E=(R=p.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var w,C,T;v.parameters={...v.parameters,docs:{...(w=v.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    defaultStart: 20,
    defaultEnd: 80
  },
  argTypes: {
    min: {
      control: "number"
    },
    max: {
      control: "number"
    },
    defaultStart: {
      control: "number"
    },
    defaultEnd: {
      control: "number"
    }
  },
  render: function Render(args: any) {
    const [value, setValue] = useState<[number, number]>([args.defaultStart, args.defaultEnd]);
    useEffect(function syncArgs() {
      setValue([args.defaultStart, args.defaultEnd]);
    }, [args.defaultStart, args.defaultEnd]);
    return <RangeSlider min={args.min} max={args.max} value={value} onValueChange={setValue} />;
  }
}`,...(T=(C=v.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};const W=["Showcase","Playground"];export{v as Playground,p as Showcase,W as __namedExportsOrder,F as default};
