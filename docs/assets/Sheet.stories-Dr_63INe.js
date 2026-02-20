import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-C4lZkr4h.js";import{s as M,b as C}from"./buildVariants-CfwgwYun.js";import{B as S}from"./Button-CXef72x6.js";import{H as T}from"./Heading-arU6QW_P.js";import{P as h}from"./Portal-GQXdu2oJ.js";import{F as j}from"./FocusTrap-D7L6Nql6.js";import{C as O}from"./ClickOutside-Dk9E0MtN.js";import{T as k}from"./Text-DDuTvIDd.js";import{S as E}from"./Stack-CeWigPj7.js";import{S as N}from"./Select-CVKpz3xO.js";import"./variantValue-VCXXWlxS.js";import"./index-D17WIwkg.js";import"./index-0li_wt_e.js";const R=M.div(function(t){return C(t).css({position:"fixed",inset:0,backgroundColor:"rgba(0,0,0,0.28)",zIndex:60,animation:"ds-sheet-backdrop-in .18s ease-out","@keyframes ds-sheet-backdrop-in":{from:{opacity:0},to:{opacity:1}},"@media (prefers-reduced-motion: reduce)":{animation:"none"}}).variant("overlayMode",t.overlayMode??"viewport",{viewport:{position:"fixed"},container:{position:"absolute"}}).end()}),L=M.div(function(t){const o=t.overlayMode??"viewport";return C(t).css({position:"fixed",backgroundColor:"var(--ds-color-surface)",border:"1px solid var(--ds-color-border)",boxShadow:"var(--ds-shadow-md)",zIndex:61,padding:"var(--ds-space-md)",display:"grid",gap:"var(--ds-space-sm)",alignContent:"start",overflowY:"auto",willChange:"transform, opacity",animationDuration:".24s",animationTimingFunction:"cubic-bezier(.2,.8,.2,1)",animationFillMode:"both","@keyframes ds-sheet-in-right":{from:{opacity:0,transform:"translateX(16px)"},to:{opacity:1,transform:"translateX(0)"}},"@keyframes ds-sheet-in-left":{from:{opacity:0,transform:"translateX(-16px)"},to:{opacity:1,transform:"translateX(0)"}},"@keyframes ds-sheet-in-top":{from:{opacity:0,transform:"translateY(-14px)"},to:{opacity:1,transform:"translateY(0)"}},"@keyframes ds-sheet-in-bottom":{from:{opacity:0,transform:"translateY(14px)"},to:{opacity:1,transform:"translateY(0)"}},"@media (prefers-reduced-motion: reduce)":{animation:"none"}}).variant("overlayMode",t.overlayMode??"viewport",{viewport:{position:"fixed",maxHeight:"100dvh"},container:{position:"absolute"}}).variant("side",t.side??"right",{right:{top:0,right:0,bottom:0,width:"min(26rem, 96vw)",height:o==="viewport"?"100dvh":"100%",animationName:"ds-sheet-in-right"},left:{top:0,left:0,bottom:0,width:"min(26rem, 96vw)",height:o==="viewport"?"100dvh":"100%",animationName:"ds-sheet-in-left"},top:{top:0,left:0,right:0,width:"100%",minHeight:"12rem",animationName:"ds-sheet-in-top"},bottom:{bottom:0,left:0,right:0,width:"100%",minHeight:"12rem",animationName:"ds-sheet-in-bottom"}}).end()});function c(e){const t=i.useRef(null),o=i.useRef(null),a=i.useId(),s=e.overlayMode??"viewport";if(i.useEffect(function(){if(!e.open)return;function p(m){var f;m.key==="Escape"&&(e.closeOnEscape??!0)&&((f=t.current)!=null&&f.contains(document.activeElement))&&(m.preventDefault(),e.onClose())}return document.addEventListener("keydown",p),function(){document.removeEventListener("keydown",p)}},[e.closeOnEscape,e.onClose,e.open]),!e.open)return null;const r=n.jsx(R,{overlayMode:s,children:n.jsx(O,{onClickOutside:e.onClose,children:n.jsx(j,{active:!0,initialFocusRef:o,children:n.jsxs(L,{"data-attr-name":"Sheet",ref:t,className:e.className,overlayMode:s,side:e.side,role:"dialog","aria-modal":"true","aria-labelledby":e.title?a:void 0,tabIndex:-1,id:e.id,style:e.style,"aria-label":e["aria-label"],"aria-describedby":e["aria-describedby"],children:[e.title?n.jsx(T,{id:a,level:4,children:e.title}):null,n.jsx(S,{ref:o,tone:"neutral",size:"sm",onClick:e.onClose,children:"Close"}),e.children]})})})});return s==="container"?e.portalTarget?n.jsx(h,{target:e.portalTarget,children:r}):r:n.jsx(h,{target:e.portalTarget,children:r})}c.__docgenInfo={description:"Organism component that renders the Sheet primitive.",methods:[],displayName:"Sheet",props:{open:{required:!0,tsType:{name:"boolean"},description:""},side:{required:!1,tsType:{name:"union",raw:'"left" | "right" | "top" | "bottom"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'}]},description:""},title:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:""},portalTarget:{required:!1,tsType:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]},description:""},overlayMode:{required:!1,tsType:{name:"union",raw:'"viewport" | "container"',elements:[{name:"literal",value:'"viewport"'},{name:"literal",value:'"container"'}]},description:""}},composes:["HTMLAttributes"]};const V={title:"Organisms/Sheet",component:c,tags:["autodocs"]},l={render:function(){const[t,o]=i.useState(!1),[a,s]=i.useState("container");return n.jsxs(E,{gap:"sm",children:[n.jsxs(N,{value:a,onChange:function(u){s(u.target.value)},children:[n.jsx("option",{value:"container",children:"container"}),n.jsx("option",{value:"viewport",children:"viewport"})]}),n.jsx(S,{tone:"neutral",onClick:function(){o(!0)},children:"Open sheet"}),n.jsx(c,{open:t,overlayMode:a,side:"right",title:"Quick settings",onClose:function(){o(!1)},children:n.jsx(k,{size:"sm",children:"Lightweight side surface for fast edits."})})]})}},d={args:{open:!0,side:"right",overlayMode:"container",title:"Quick settings"},argTypes:{open:{control:"boolean"},side:{control:"select",options:["left","right","top","bottom"]},overlayMode:{control:"select",options:["container","viewport"]},title:{control:"text"}},render:function(t){return n.jsx(c,{open:t.open,overlayMode:t.overlayMode,side:t.side,title:t.title,onClose:function(){},children:n.jsx(k,{size:"sm",children:"Lightweight side surface for fast edits."})})}};var v,g,y;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    const [overlayMode, setOverlayMode] = useState<NonNullable<SheetProps["overlayMode"]>>("container");
    return <Stack gap="sm">
      <Select value={overlayMode} onChange={function onChange(event) {
        setOverlayMode(event.target.value as NonNullable<SheetProps["overlayMode"]>);
      }}>
        <option value="container">container</option>
        <option value="viewport">viewport</option>
      </Select>
      <Button tone="neutral" onClick={function onClick() {
        setOpen(true);
      }}>Open sheet</Button>
      <Sheet open={open} overlayMode={overlayMode} side="right" title="Quick settings" onClose={function onClose() {
        setOpen(false);
      }}>
        <Text size="sm">Lightweight side surface for fast edits.</Text>
      </Sheet>
    </Stack>;
  }
}`,...(y=(g=l.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var x,b,w;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    open: true,
    side: "right",
    overlayMode: "container",
    title: "Quick settings"
  },
  argTypes: {
    open: {
      control: "boolean"
    },
    side: {
      control: "select",
      options: ["left", "right", "top", "bottom"]
    },
    overlayMode: {
      control: "select",
      options: ["container", "viewport"]
    },
    title: {
      control: "text"
    }
  },
  render: function Render(args: any) {
    return <Sheet open={args.open} overlayMode={args.overlayMode} side={args.side} title={args.title} onClose={function onClose() {}}>
        <Text size="sm">Lightweight side surface for fast edits.</Text>
      </Sheet>;
  }
}`,...(w=(b=d.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};const G=["Showcase","Playground"];export{d as Playground,l as Showcase,G as __namedExportsOrder,V as default};
