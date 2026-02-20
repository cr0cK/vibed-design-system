import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./index-C4lZkr4h.js";import{s as R,b as y}from"./buildVariants-CfwgwYun.js";import{D as g}from"./DatePicker-3F3JTMU6.js";import{S as z}from"./Stack-CeWigPj7.js";import{T as v}from"./Text-DDuTvIDd.js";import"./variantValue-VCXXWlxS.js";const E=R.div(function(t){return y(t).css({display:"grid",gridTemplateColumns:"1fr auto 1fr",alignItems:"center",gap:"var(--ds-space-xs)"}).variant("controlSize",t.controlSize??"md",{sm:{gap:"var(--ds-space-xxs)"},md:{gap:"var(--ds-space-xs)"},lg:{gap:"var(--ds-space-sm)"}}).end()}),T=R.span(function(t){return y(t).css({color:"var(--ds-color-text-muted)",fontFamily:"var(--ds-font-body)"}).variant("controlSize",t.controlSize??"md",{sm:{fontSize:"0.85rem"},md:{fontSize:"0.95rem"},lg:{fontSize:"1rem"}}).end()});function c(e){return n.jsxs(E,{"data-attr-name":"DateRangePicker",className:e.className,controlSize:e.controlSize,children:[n.jsx(g,{controlSize:e.controlSize,value:e.startValue,placeholder:e.startPlaceholder,onChange:function(a){e.onRangeChange&&e.onRangeChange(a.target.value,e.endValue??"")}}),n.jsx(T,{controlSize:e.controlSize,children:"to"}),n.jsx(g,{controlSize:e.controlSize,value:e.endValue,placeholder:e.endPlaceholder,onChange:function(a){e.onRangeChange&&e.onRangeChange(e.startValue??"",a.target.value)}})]})}c.__docgenInfo={description:"Molecule component that renders the DateRangePicker primitive.",methods:[],displayName:"DateRangePicker",props:{startValue:{required:!1,tsType:{name:"string"},description:""},endValue:{required:!1,tsType:{name:"string"},description:""},startPlaceholder:{required:!1,tsType:{name:"string"},description:""},endPlaceholder:{required:!1,tsType:{name:"string"},description:""},onRangeChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(nextStart: string, nextEnd: string) => void",signature:{arguments:[{type:{name:"string"},name:"nextStart"},{type:{name:"string"},name:"nextEnd"}],return:{name:"void"}}},description:""},controlSize:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:""}},composes:["HTMLAttributes"]};const _={title:"Molecules/DateRangePicker",component:c,tags:["autodocs"]},d={render:function(){const[t,a]=s.useState("2026-02-16"),[r,o]=s.useState("2026-02-23");return n.jsxs(z,{gap:"sm",children:[n.jsx(c,{startValue:t,endValue:r,onRangeChange:function(u,m){a(u),o(m)}}),n.jsxs(v,{size:"sm",tone:"muted",children:[t," to ",r]})]})}},l={args:{startValue:"2026-02-16",endValue:"2026-02-23"},argTypes:{startValue:{control:"text"},endValue:{control:"text"}},render:function(t){const[a,r]=s.useState(t.startValue),[o,i]=s.useState(t.endValue);return s.useEffect(function(){r(t.startValue),i(t.endValue)},[t.startValue,t.endValue]),n.jsxs(z,{gap:"sm",children:[n.jsx(c,{startValue:a,endValue:o,onRangeChange:function(m,C){r(m),i(C)}}),n.jsxs(v,{size:"sm",tone:"muted",children:[a," to ",o]})]})}};var S,f,x;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: function Render() {
    const [start, setStart] = useState("2026-02-16");
    const [end, setEnd] = useState("2026-02-23");
    return <Stack gap="sm">
      <DateRangePicker startValue={start} endValue={end} onRangeChange={function onRangeChange(nextStart, nextEnd) {
        setStart(nextStart);
        setEnd(nextEnd);
      }} />
      <Text size="sm" tone="muted">{start} to {end}</Text>
    </Stack>;
  }
}`,...(x=(f=d.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var V,h,p;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    startValue: "2026-02-16",
    endValue: "2026-02-23"
  },
  argTypes: {
    startValue: {
      control: "text"
    },
    endValue: {
      control: "text"
    }
  },
  render: function Render(args: any) {
    const [start, setStart] = useState(args.startValue);
    const [end, setEnd] = useState(args.endValue);
    useEffect(function syncArgs() {
      setStart(args.startValue);
      setEnd(args.endValue);
    }, [args.startValue, args.endValue]);
    return <Stack gap="sm">
        <DateRangePicker startValue={start} endValue={end} onRangeChange={function onRangeChange(nextStart, nextEnd) {
        setStart(nextStart);
        setEnd(nextEnd);
      }} />
        <Text size="sm" tone="muted">{start} to {end}</Text>
      </Stack>;
  }
}`,...(p=(h=l.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};const A=["Showcase","Playground"];export{l as Playground,d as Showcase,A as __namedExportsOrder,_ as default};
