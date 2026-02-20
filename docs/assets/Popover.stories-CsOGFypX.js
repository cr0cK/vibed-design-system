import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./index-C4lZkr4h.js";import{s as x,b as y}from"./buildVariants-CfwgwYun.js";import{B as S}from"./Button-CXef72x6.js";import{C}from"./ClickOutside-Dk9E0MtN.js";import{T as P}from"./Text-DDuTvIDd.js";import{S as O}from"./Stack-CeWigPj7.js";import{S as j}from"./Select-CVKpz3xO.js";import"./variantValue-VCXXWlxS.js";const L=x.div(function(e){return y(e).css({position:"relative",display:"inline-block",width:"max-content",maxWidth:"100%"}).end()}),k=x.div(function(e){return y(e).css({position:"absolute",minWidth:"14rem",border:"1px solid var(--ds-color-border)",borderRadius:"var(--ds-radius-md)",backgroundColor:"var(--ds-color-surface)",boxShadow:"var(--ds-shadow-sm)",padding:"var(--ds-space-sm)",zIndex:30,animation:"ds-popover-in .16s ease-out","@keyframes ds-popover-in":{from:{opacity:0,transform:"translateY(-4px) scale(0.985)"},to:{opacity:1,transform:"translateY(0) scale(1)"}},"@media (prefers-reduced-motion: reduce)":{animation:"none"}}).variant("placement",e.placement,{"bottom-left":{top:"calc(100% + 8px)",left:0,transformOrigin:"top left"},"bottom-right":{top:"calc(100% + 8px)",right:0,transformOrigin:"top right"},"top-left":{bottom:"calc(100% + 8px)",left:0,transformOrigin:"bottom left"},"top-right":{bottom:"calc(100% + 8px)",right:0,transformOrigin:"bottom right"}}).end()});function c(t){const[e,r]=a.useState(!1),p=a.useRef(null),i=a.useId(),d=t.placement??"bottom-left";return a.useEffect(function(){var n;e&&((n=p.current)==null||n.focus())},[e]),o.jsx(C,{enabled:e,onClickOutside:function(){r(!1)},children:o.jsxs(L,{"data-attr-name":"Popover",placement:d,className:t.className,id:t.id,style:t.style,onKeyDown:function(n){n.key==="Escape"&&(n.preventDefault(),r(!1)),t.onKeyDown&&t.onKeyDown(n)},"aria-label":t["aria-label"],"aria-labelledby":t["aria-labelledby"],"aria-describedby":t["aria-describedby"],children:[o.jsx(S,{tone:"neutral",size:"sm","aria-haspopup":"dialog","aria-expanded":e,"aria-controls":i,onClick:function(){r(!e)},children:t.triggerLabel}),e?o.jsx(k,{ref:p,id:i,role:"dialog",tabIndex:-1,placement:d,children:t.popoverContent}):null]})})}c.__docgenInfo={description:"Organism component that renders the Popover primitive.",methods:[],displayName:"Popover",props:{triggerLabel:{required:!0,tsType:{name:"string"},description:""},popoverContent:{required:!0,tsType:{name:"ReactNode"},description:""},placement:{required:!1,tsType:{name:"union",raw:'"bottom-left" | "bottom-right" | "top-left" | "top-right"',elements:[{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"top-left"'},{name:"literal",value:'"top-right"'}]},description:""}},composes:["HTMLAttributes"]};const _={title:"Organisms/Popover",component:c,tags:["autodocs"]},l={render:function(){const[e,r]=a.useState("bottom-left");return o.jsxs(O,{gap:"sm",align:"start",children:[o.jsxs(j,{value:e,onChange:function(i){r(i.target.value)},children:[o.jsx("option",{value:"bottom-left",children:"bottom-left"}),o.jsx("option",{value:"bottom-right",children:"bottom-right"}),o.jsx("option",{value:"top-left",children:"top-left"}),o.jsx("option",{value:"top-right",children:"top-right"})]}),o.jsx(c,{placement:e,triggerLabel:"Open popover",popoverContent:o.jsx(P,{size:"sm",children:"Popover content"})})]})}},s={args:{placement:"bottom-left",triggerLabel:"Open popover",content:"Popover content"},argTypes:{placement:{control:"select",options:["bottom-left","bottom-right","top-left","top-right"]},triggerLabel:{control:"text"},content:{control:"text"}},render:function(e){return o.jsx(c,{placement:e.placement,triggerLabel:e.triggerLabel,popoverContent:o.jsx(P,{size:"sm",children:e.content})})}};var u,g,f;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: function Render() {
    const [placement, setPlacement] = useState<PopoverPlacement>("bottom-left");
    return <Stack gap="sm" align="start">
        <Select value={placement} onChange={function onChange(event) {
        setPlacement(event.target.value as PopoverPlacement);
      }}>
          <option value="bottom-left">bottom-left</option>
          <option value="bottom-right">bottom-right</option>
          <option value="top-left">top-left</option>
          <option value="top-right">top-right</option>
        </Select>
        <Popover placement={placement} triggerLabel="Open popover" popoverContent={<Text size="sm">Popover content</Text>} />
      </Stack>;
  }
}`,...(f=(g=l.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var b,v,h;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    placement: "bottom-left",
    triggerLabel: "Open popover",
    content: "Popover content"
  },
  argTypes: {
    placement: {
      control: "select",
      options: ["bottom-left", "bottom-right", "top-left", "top-right"]
    },
    triggerLabel: {
      control: "text"
    },
    content: {
      control: "text"
    }
  },
  render: function Render(args: any) {
    return <Popover placement={args.placement} triggerLabel={args.triggerLabel} popoverContent={<Text size="sm">{args.content}</Text>} />;
  }
}`,...(h=(v=s.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const q=["Showcase","Playground"];export{s as Playground,l as Showcase,q as __namedExportsOrder,_ as default};
