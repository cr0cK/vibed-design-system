import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./index-C4lZkr4h.js";import{s as x,b as y}from"./buildVariants-CfwgwYun.js";import{B as j}from"./Button-CXef72x6.js";import{S as C}from"./Stack-CeWigPj7.js";import{S}from"./Select-CVKpz3xO.js";import"./variantValue-VCXXWlxS.js";const T=x.span(function(){return y({}).css({position:"relative",display:"inline-flex"}).end()}),E=x.span(function(e){return y(e).css({position:"absolute",backgroundColor:"var(--ds-color-text)",color:"var(--ds-color-surface)",borderRadius:"var(--ds-radius-sm)",padding:"0.35rem 0.5rem",fontSize:"0.75rem",whiteSpace:"nowrap",zIndex:20,pointerEvents:"none",animation:"ds-tooltip-in .14s ease-out","@keyframes ds-tooltip-in":{from:{opacity:0},to:{opacity:1}},"@media (prefers-reduced-motion: reduce)":{animation:"none"}}).variant("placement",e.placement,{top:{bottom:"calc(100% + 8px)",left:"50%",transform:"translateX(-50%)"},"top-left":{bottom:"calc(100% + 8px)",left:0},"top-right":{bottom:"calc(100% + 8px)",right:0},bottom:{top:"calc(100% + 8px)",left:"50%",transform:"translateX(-50%)"},"bottom-left":{top:"calc(100% + 8px)",left:0},"bottom-right":{top:"calc(100% + 8px)",right:0},left:{right:"calc(100% + 8px)",top:"50%",transform:"translateY(-50%)"},right:{left:"calc(100% + 8px)",top:"50%",transform:"translateY(-50%)"}}).end()});function p(o){const[e,n]=s.useState(!1),c=s.useId(),m=o.placement??"top";return s.useEffect(function(){if(!e)return;function l(u){u.key==="Escape"&&n(!1)}return document.addEventListener("keydown",l),function(){document.removeEventListener("keydown",l)}},[e]),t.jsxs(T,{"data-attr-name":"Tooltip",className:o.className,onMouseEnter:function(){n(!0)},onMouseLeave:function(){n(!1)},onFocus:function(){n(!0)},onBlur:function(){n(!1)},onKeyDown:function(l){l.key==="Escape"&&(l.preventDefault(),n(!1))},"aria-describedby":e?c:void 0,children:[o.children,e?t.jsx(E,{id:c,role:"tooltip",placement:m,children:o.tooltipContent}):null]})}p.__docgenInfo={description:"Organism component that renders the Tooltip primitive.",methods:[],displayName:"Tooltip",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},tooltipContent:{required:!0,tsType:{name:"ReactNode"},description:""},placement:{required:!1,tsType:{name:"union",raw:`| "top"
| "top-left"
| "top-right"
| "bottom"
| "bottom-left"
| "bottom-right"
| "left"
| "right"`,elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"top-left"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:""}},composes:["HTMLAttributes"]};const L={title:"Organisms/Tooltip",component:p,tags:["autodocs"]},a={render:function(){const[e,n]=s.useState("top");return t.jsxs(C,{gap:"sm",align:"start",children:[t.jsxs(S,{value:e,onChange:function(m){n(m.target.value)},children:[t.jsx("option",{value:"top",children:"top"}),t.jsx("option",{value:"top-left",children:"top-left"}),t.jsx("option",{value:"top-right",children:"top-right"}),t.jsx("option",{value:"bottom",children:"bottom"}),t.jsx("option",{value:"bottom-left",children:"bottom-left"}),t.jsx("option",{value:"bottom-right",children:"bottom-right"}),t.jsx("option",{value:"left",children:"left"}),t.jsx("option",{value:"right",children:"right"})]}),t.jsx(p,{placement:e,tooltipContent:"Helpful hint",children:t.jsx(j,{tone:"neutral",size:"sm",children:"Hover me"})})]})}},i={args:{placement:"top",tooltipContent:"Helpful hint"},argTypes:{placement:{control:"select",options:["top","top-left","top-right","bottom","bottom-left","bottom-right","left","right"]},tooltipContent:{control:"text"}},render:function(e){return t.jsx(p,{placement:e.placement,tooltipContent:e.tooltipContent,children:t.jsx(j,{tone:"neutral",size:"sm",children:"Hover me"})})}};var d,f,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: function Render() {
    const [placement, setPlacement] = useState<TooltipPlacement>("top");
    return <Stack gap="sm" align="start">
        <Select value={placement} onChange={function onChange(event) {
        setPlacement(event.target.value as TooltipPlacement);
      }}>
          <option value="top">top</option>
          <option value="top-left">top-left</option>
          <option value="top-right">top-right</option>
          <option value="bottom">bottom</option>
          <option value="bottom-left">bottom-left</option>
          <option value="bottom-right">bottom-right</option>
          <option value="left">left</option>
          <option value="right">right</option>
        </Select>
        <Tooltip placement={placement} tooltipContent="Helpful hint">
          <Button tone="neutral" size="sm">Hover me</Button>
        </Tooltip>
      </Stack>;
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var g,v,b;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    placement: "top",
    tooltipContent: "Helpful hint"
  },
  argTypes: {
    placement: {
      control: "select",
      options: ["top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right", "left", "right"]
    },
    tooltipContent: {
      control: "text"
    }
  },
  render: function Render(args: any) {
    return <Tooltip placement={args.placement} tooltipContent={args.tooltipContent}>
        <Button tone="neutral" size="sm">Hover me</Button>
      </Tooltip>;
  }
}`,...(b=(v=i.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const M=["Showcase","Playground"];export{i as Playground,a as Showcase,M as __namedExportsOrder,L as default};
