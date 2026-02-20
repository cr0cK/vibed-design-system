import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./index-C4lZkr4h.js";import{s as p,b as h}from"./buildVariants-CfwgwYun.js";import{S as T}from"./Stack-CeWigPj7.js";import{T as j}from"./Text-DDuTvIDd.js";const D=p.div(function(){return h({}).css({position:"relative",width:"100%",minWidth:0}).end()}),M=p.input(function(o){return h(o).css({width:"100%",minWidth:0,boxSizing:"border-box",border:"1px solid var(--ds-color-border)",borderRadius:"var(--ds-radius-sm)",backgroundColor:"var(--ds-color-surface)",color:"var(--ds-color-text)",outline:"none"}).variant("controlSize",o.controlSize??"md",{sm:{padding:"0.4rem 0.62rem",fontSize:"0.86rem",minHeight:"2rem"},md:{padding:"0.55rem 0.72rem",fontSize:"0.95rem",minHeight:"2.25rem"},lg:{padding:"0.68rem 0.86rem",fontSize:"1rem",minHeight:"2.5rem"}}).end()}),A=p.ul(function(){return h({}).css({listStyle:"none",margin:0,padding:"0.25rem",position:"absolute",top:"calc(100% + 0.25rem)",insetInline:0,maxHeight:"14rem",overflowY:"auto",border:"1px solid var(--ds-color-border)",borderRadius:"var(--ds-radius-sm)",backgroundColor:"var(--ds-color-surface)",boxShadow:"var(--ds-shadow-sm)",zIndex:20}).end()}),L=p.li(function(o){return h(o).css({padding:"0.45rem 0.5rem",borderRadius:"var(--ds-radius-sm)",cursor:"pointer",backgroundColor:o.highlighted?"color-mix(in oklab, var(--ds-color-primary) 12%, var(--ds-color-surface))":"transparent"}).end()});function v(n){const o=r.useRef(null),[s,l]=r.useState(!1),[u,m]=r.useState(0),b=n.options.find(function(e){return e.value===n.value}),[x,S]=r.useState((b==null?void 0:b.label)??"");r.useEffect(function(){const e=n.options.find(function(d){return d.value===n.value});n.value!==void 0&&S((e==null?void 0:e.label)??"")},[n.value,n.options]),r.useEffect(function(){function e(i){o.current&&i.target instanceof Node&&!o.current.contains(i.target)&&l(!1)}return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}},[]);const c=r.useMemo(function(){const e=x.toLowerCase().trim();return e?n.options.filter(function(d){return d.label.toLowerCase().includes(e)}):n.options},[n.options,x]);function y(t,e){S(e),l(!1),n.onValueChange&&n.onValueChange(t)}function R(t){if(!s&&(t.key==="ArrowDown"||t.key==="ArrowUp")){t.preventDefault(),l(!0);return}if(!(!s||c.length===0)){if(t.key==="ArrowDown"){t.preventDefault(),m(Math.min(c.length-1,u+1));return}if(t.key==="ArrowUp"){t.preventDefault(),m(Math.max(0,u-1));return}if(t.key==="Enter"){t.preventDefault();const e=c[u];e&&y(e.value,e.label);return}t.key==="Escape"&&l(!1)}}return a.jsxs(D,{"data-attr-name":"Combobox",ref:o,className:n.className,children:[a.jsx(M,{controlSize:n.controlSize,value:x,placeholder:n.placeholder,onFocus:function(){l(!0)},onChange:function(e){S(e.target.value),l(!0),m(0)},onKeyDown:R,role:"combobox","aria-expanded":s,"aria-autocomplete":"list"}),s&&c.length>0?a.jsx(A,{role:"listbox",children:c.map(function(e,i){return a.jsx(L,{role:"option",highlighted:i===u,onMouseEnter:function(){m(i)},onClick:function(){y(e.value,e.label)},children:e.label},e.value)})}):null]})}v.__docgenInfo={description:"Molecule component that renders the Combobox primitive.",methods:[],displayName:"Combobox",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"ComboboxOption"}],raw:"ComboboxOption[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(nextValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"nextValue"}],return:{name:"void"}}},description:""},controlSize:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:""}},composes:["HTMLAttributes"]};const P={title:"Molecules/Combobox",component:v,tags:["autodocs"]},O=[{value:"engineering",label:"Engineering"},{value:"design",label:"Design"},{value:"product",label:"Product"},{value:"ops",label:"Operations"}],f={render:function(){const[o,s]=r.useState("design");return a.jsxs(T,{gap:"sm",children:[a.jsx(v,{options:O,value:o,onValueChange:s,placeholder:"Select team"}),a.jsxs(j,{size:"sm",tone:"muted",children:["Selected: ",o]})]})}},g={args:{placeholder:"Select team",value:"design"},argTypes:{placeholder:{control:"text"},value:{control:"select",options:["engineering","design","product","ops"]}},render:function(o){const[s,l]=r.useState(o.value);return r.useEffect(function(){l(o.value)},[o.value]),a.jsxs(T,{gap:"sm",children:[a.jsx(v,{options:O,value:s,onValueChange:l,placeholder:o.placeholder}),a.jsxs(j,{size:"sm",tone:"muted",children:["Selected: ",s]})]})}};var C,w,V;f.parameters={...f.parameters,docs:{...(C=f.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState("design");
    return <Stack gap="sm">
      <Combobox options={options} value={value} onValueChange={setValue} placeholder="Select team" />
      <Text size="sm" tone="muted">Selected: {value}</Text>
    </Stack>;
  }
}`,...(V=(w=f.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};var k,z,E;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    placeholder: "Select team",
    value: "design"
  },
  argTypes: {
    placeholder: {
      control: "text"
    },
    value: {
      control: "select",
      options: ["engineering", "design", "product", "ops"]
    }
  },
  render: function Render(args: any) {
    const [value, setValue] = useState(args.value);
    useEffect(function syncArgs() {
      setValue(args.value);
    }, [args.value]);
    return <Stack gap="sm">
        <Combobox options={options} value={value} onValueChange={setValue} placeholder={args.placeholder} />
        <Text size="sm" tone="muted">Selected: {value}</Text>
      </Stack>;
  }
}`,...(E=(z=g.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};const F=["Showcase","Playground"];export{g as Playground,f as Showcase,F as __namedExportsOrder,P as default};
