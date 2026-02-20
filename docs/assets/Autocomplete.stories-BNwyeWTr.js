import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-C4lZkr4h.js";import{s as f,b as h}from"./buildVariants-CfwgwYun.js";import{S as C}from"./Stack-CeWigPj7.js";import{T as z}from"./Text-DDuTvIDd.js";const R=f.div(function(){return h({}).css({position:"relative",width:"100%",minWidth:0}).end()}),j=f.input(function(t){return h(t).css({width:"100%",minWidth:0,boxSizing:"border-box",border:"1px solid var(--ds-color-border)",borderRadius:"var(--ds-radius-sm)",backgroundColor:"var(--ds-color-surface)",color:"var(--ds-color-text)",outline:"none"}).variant("controlSize",t.controlSize??"md",{sm:{padding:"0.4rem 0.62rem",fontSize:"0.86rem",minHeight:"2rem"},md:{padding:"0.55rem 0.72rem",fontSize:"0.95rem",minHeight:"2.25rem"},lg:{padding:"0.68rem 0.86rem",fontSize:"1rem",minHeight:"2.5rem"}}).end()}),M=f.ul(function(){return h({}).css({listStyle:"none",margin:0,padding:"0.25rem",position:"absolute",top:"calc(100% + 0.25rem)",insetInline:0,maxHeight:"12rem",overflowY:"auto",border:"1px solid var(--ds-color-border)",borderRadius:"var(--ds-radius-sm)",backgroundColor:"var(--ds-color-surface)",boxShadow:"var(--ds-shadow-sm)",zIndex:20}).end()}),E=f.li(function(t){return h(t).css({padding:"0.45rem 0.5rem",borderRadius:"var(--ds-radius-sm)",cursor:"pointer",backgroundColor:t.highlighted?"color-mix(in oklab, var(--ds-color-primary) 12%, var(--ds-color-surface))":"transparent"}).end()});function v(e){const[t,i]=l.useState(""),[a,s]=l.useState(!1),[c,d]=l.useState(0),y=e.value??t,u=l.useMemo(function(){const r=y.toLowerCase().trim();return r?e.suggestions.filter(function(S){return S.toLowerCase().includes(r)}):e.suggestions},[e.suggestions,y]);function x(n){e.value===void 0&&i(n),e.onValueChange&&e.onValueChange(n)}function A(n){if(!a&&(n.key==="ArrowDown"||n.key==="ArrowUp")){s(!0);return}if(!(!a||u.length===0)){if(n.key==="ArrowDown"){n.preventDefault(),d(Math.min(u.length-1,c+1));return}if(n.key==="ArrowUp"){n.preventDefault(),d(Math.max(0,c-1));return}if(n.key==="Enter"){n.preventDefault();const r=u[c];r&&(x(r),s(!1));return}n.key==="Escape"&&s(!1)}}return o.jsxs(R,{"data-attr-name":"Autocomplete",className:e.className,children:[o.jsx(j,{controlSize:e.controlSize,value:y,placeholder:e.placeholder,onFocus:function(){s(!0)},onChange:function(r){x(r.target.value),s(!0),d(0)},onKeyDown:A,role:"combobox","aria-expanded":a}),a&&u.length>0?o.jsx(M,{role:"listbox",children:u.map(function(r,m){return o.jsx(E,{role:"option",highlighted:m===c,onMouseEnter:function(){d(m)},onClick:function(){x(r),s(!1)},children:r},`${r}-${m}`)})}):null]})}v.__docgenInfo={description:"Molecule component that renders the Autocomplete primitive.",methods:[],displayName:"Autocomplete",props:{suggestions:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(nextValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"nextValue"}],return:{name:"void"}}},description:""},controlSize:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:""}},composes:["HTMLAttributes"]};const q={title:"Molecules/Autocomplete",component:v,tags:["autodocs"]},g={render:function(){const[t,i]=l.useState("");return o.jsxs(C,{gap:"sm",children:[o.jsx(v,{suggestions:["Daily Digest","Weekly Digest","Quarterly Review","Ops Snapshot","Morning Pulse"],value:t,onValueChange:i,placeholder:"Type automation name"}),o.jsxs(z,{size:"sm",tone:"muted",children:["Value: ",t||"-"]})]})}},p={args:{placeholder:"Type automation name",value:""},argTypes:{placeholder:{control:"text"},value:{control:"text"}},render:function(t){const[i,a]=l.useState(t.value);return l.useEffect(function(){a(t.value)},[t.value]),o.jsxs(C,{gap:"sm",children:[o.jsx(v,{suggestions:["Daily Digest","Weekly Digest","Quarterly Review","Ops Snapshot","Morning Pulse"],value:i,onValueChange:a,placeholder:t.placeholder}),o.jsxs(z,{size:"sm",tone:"muted",children:["Value: ",i||"-"]})]})}};var w,b,V;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState("");
    return <Stack gap="sm">
      <Autocomplete suggestions={["Daily Digest", "Weekly Digest", "Quarterly Review", "Ops Snapshot", "Morning Pulse"]} value={value} onValueChange={setValue} placeholder="Type automation name" />
      <Text size="sm" tone="muted">Value: {value || "-"}</Text>
    </Stack>;
  }
}`,...(V=(b=g.parameters)==null?void 0:b.docs)==null?void 0:V.source}}};var k,D,T;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    placeholder: "Type automation name",
    value: ""
  },
  argTypes: {
    placeholder: {
      control: "text"
    },
    value: {
      control: "text"
    }
  },
  render: function Render(args: any) {
    const [value, setValue] = useState(args.value);
    useEffect(function syncArgs() {
      setValue(args.value);
    }, [args.value]);
    return <Stack gap="sm">
        <Autocomplete suggestions={["Daily Digest", "Weekly Digest", "Quarterly Review", "Ops Snapshot", "Morning Pulse"]} value={value} onValueChange={setValue} placeholder={args.placeholder} />
        <Text size="sm" tone="muted">Value: {value || "-"}</Text>
      </Stack>;
  }
}`,...(T=(D=p.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};const L=["Showcase","Playground"];export{p as Playground,g as Showcase,L as __namedExportsOrder,q as default};
