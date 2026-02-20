import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-C4lZkr4h.js";import{s as c,b as d}from"./buildVariants-CfwgwYun.js";import{T as M}from"./Tag-Bn05qvo-.js";import{S as b}from"./Stack-CeWigPj7.js";import{T as k}from"./Text-DDuTvIDd.js";const A=c.div(function(){return d({}).css({position:"relative",width:"100%",minWidth:0}).end()}),R=c.button(function(e){return d(e).css({width:"100%",minWidth:0,border:"1px solid var(--ds-color-border)",borderRadius:"var(--ds-radius-sm)",backgroundColor:"var(--ds-color-surface)",color:"var(--ds-color-text)",textAlign:"left",display:"grid",gap:"var(--ds-space-xs)",padding:"0.5rem 0.65rem",cursor:"pointer"}).variant("controlSize",e.controlSize??"md",{sm:{minHeight:"2rem",fontSize:"0.86rem",padding:"0.35rem 0.55rem"},md:{minHeight:"2.3rem",fontSize:"0.92rem",padding:"0.5rem 0.65rem"},lg:{minHeight:"2.6rem",fontSize:"1rem",padding:"0.62rem 0.78rem"}}).end()}),O=c.div(function(e){return d(e).css({display:"flex",flexWrap:"wrap",gap:"var(--ds-space-xxs)"}).variant("controlSize",e.controlSize??"md",{sm:{gap:"0.2rem"},md:{gap:"var(--ds-space-xxs)"},lg:{gap:"var(--ds-space-xs)"}}).end()}),I=c.ul(function(e){return d(e).css({listStyle:"none",margin:0,padding:"0.25rem",position:"absolute",top:"calc(100% + 0.25rem)",insetInline:0,border:"1px solid var(--ds-color-border)",borderRadius:"var(--ds-radius-sm)",backgroundColor:"var(--ds-color-surface)",boxShadow:"var(--ds-shadow-sm)",zIndex:20,maxHeight:"14rem",overflowY:"auto"}).variant("controlSize",e.controlSize??"md",{sm:{top:"calc(100% + 0.2rem)"},md:{top:"calc(100% + 0.25rem)"},lg:{top:"calc(100% + 0.3rem)"}}).end()}),E=c.li(function(e){return d(e).css({display:"flex",alignItems:"center",gap:"var(--ds-space-xs)",padding:"0.45rem 0.5rem",borderRadius:"var(--ds-radius-sm)",cursor:"pointer","&:hover":{backgroundColor:"var(--ds-color-surface-muted)"}}).variant("controlSize",e.controlSize??"md",{sm:{padding:"0.34rem 0.4rem",fontSize:"0.84rem"},md:{padding:"0.45rem 0.5rem",fontSize:"0.9rem"},lg:{padding:"0.56rem 0.62rem",fontSize:"0.98rem"}}).end()}),q=c.input(function(e){return d(e).css({margin:0}).variant("controlSize",e.controlSize??"md",{sm:{width:"0.75rem",height:"0.75rem"},md:{width:"0.85rem",height:"0.85rem"},lg:{width:"1rem",height:"1rem"}}).end()});function p(t){const[e,o]=i.useState(!1),[u,S]=i.useState([]),s=t.value??u,h=i.useMemo(function(){return t.options.filter(function(l){return s.includes(l.value)})},[t.options,s]);function T(a){const l=s.includes(a)?s.filter(function(C){return C!==a}):[...s,a];t.value===void 0&&S(l),t.onValueChange&&t.onValueChange(l)}return n.jsxs(A,{"data-attr-name":"MultiSelect",className:t.className,children:[n.jsx(R,{controlSize:t.controlSize,type:"button",onClick:function(){o(!e)},children:h.length===0?n.jsx("span",{children:t.placeholder??"Select options"}):n.jsx(O,{controlSize:t.controlSize,children:h.map(function(r){return n.jsx(M,{tone:"primary",controlSize:t.controlSize,children:r.label},r.value)})})}),e?n.jsx(I,{controlSize:t.controlSize,role:"listbox","aria-multiselectable":"true",children:t.options.map(function(r){const l=s.includes(r.value);return n.jsxs(E,{controlSize:t.controlSize,role:"option","aria-selected":l,onClick:function(){T(r.value)},children:[n.jsx(q,{controlSize:t.controlSize,type:"checkbox",checked:l,readOnly:!0}),r.label]},r.value)})}):null]})}p.__docgenInfo={description:"Molecule component that renders the MultiSelect primitive.",methods:[],displayName:"MultiSelect",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"MultiSelectOption"}],raw:"MultiSelectOption[]"},description:""},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(nextValue: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"nextValue"}],return:{name:"void"}}},description:""},controlSize:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:""}},composes:["HTMLAttributes"]};const Y={title:"Molecules/MultiSelect",component:p,tags:["autodocs"]},j=[{value:"email",label:"Email"},{value:"slack",label:"Slack"},{value:"sms",label:"SMS"},{value:"webhook",label:"Webhook"}],m={render:function(){const[e,o]=i.useState(["email","slack"]);return n.jsxs(b,{gap:"sm",children:[n.jsx(p,{options:j,value:e,onValueChange:o}),n.jsxs(k,{size:"sm",tone:"muted",children:["Selected: ",e.join(", ")||"none"]})]})}},g={args:{placeholder:"Select channels",selectedValues:["email","slack"],controlSize:"md"},argTypes:{placeholder:{control:"text"},selectedValues:{control:"object"},controlSize:{control:"select",options:["sm","md","lg"]}},render:function(e){const[o,u]=i.useState(e.selectedValues);return i.useEffect(function(){u(Array.isArray(e.selectedValues)?e.selectedValues:[])},[e.selectedValues]),n.jsxs(b,{gap:"sm",children:[n.jsx(p,{options:j,value:o,onValueChange:u,placeholder:e.placeholder,controlSize:e.controlSize}),n.jsxs(k,{size:"sm",tone:"muted",children:["Selected: ",o.join(", ")||"none"]})]})}};var f,v,x;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState<string[]>(["email", "slack"]);
    return <Stack gap="sm">
      <MultiSelect options={options} value={value} onValueChange={setValue} />
      <Text size="sm" tone="muted">Selected: {value.join(", ") || "none"}</Text>
    </Stack>;
  }
}`,...(x=(v=m.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var z,y,V;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    placeholder: "Select channels",
    selectedValues: ["email", "slack"],
    controlSize: "md"
  },
  argTypes: {
    placeholder: {
      control: "text"
    },
    selectedValues: {
      control: "object"
    },
    controlSize: {
      control: "select",
      options: ["sm", "md", "lg"]
    }
  },
  render: function Render(args: any) {
    const [value, setValue] = useState<string[]>(args.selectedValues);
    useEffect(function syncArgs() {
      setValue(Array.isArray(args.selectedValues) ? args.selectedValues : []);
    }, [args.selectedValues]);
    return <Stack gap="sm">
        <MultiSelect options={options} value={value} onValueChange={setValue} placeholder={args.placeholder} controlSize={args.controlSize} />
        <Text size="sm" tone="muted">Selected: {value.join(", ") || "none"}</Text>
      </Stack>;
  }
}`,...(V=(y=g.parameters)==null?void 0:y.docs)==null?void 0:V.source}}};const B=["Showcase","Playground"];export{g as Playground,m as Showcase,B as __namedExportsOrder,Y as default};
