import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-C4lZkr4h.js";import{s as y,b as x}from"./buildVariants-CfwgwYun.js";import{B as L}from"./Button-CXef72x6.js";import{M}from"./Menu-QzA_xpiR.js";import{S as h}from"./Stack-CeWigPj7.js";import{T}from"./Text-DDuTvIDd.js";import"./variantValue-VCXXWlxS.js";const v=y.div(function(t){return x(t).css({position:"relative",display:"inline-block"}).variant("placement",t.placement??"start",{start:{width:"max-content",maxWidth:"100%"},end:{width:"max-content",maxWidth:"100%"}}).end()}),j=y.div(function(t){return x(t).css({position:"absolute",top:"calc(100% + 0.35rem)",minWidth:"13rem",zIndex:30}).variant("placement",t.placement??"start",{start:{left:0},end:{right:0}}).end()});function l(e){const[t,r]=i.useState(!1),d=i.useRef(null),m=e.placement??"start",w={id:e.id,role:e.role,style:e.style,title:e.title,tabIndex:e.tabIndex,onKeyDown:e.onKeyDown,onFocus:e.onFocus,onBlur:e.onBlur,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,"aria-label":e["aria-label"],"aria-labelledby":e["aria-labelledby"],"aria-describedby":e["aria-describedby"]};return i.useEffect(function(){function o(c){d.current&&c.target instanceof Node&&!d.current.contains(c.target)&&r(!1)}return document.addEventListener("mousedown",o),function(){document.removeEventListener("mousedown",o)}},[]),n.jsxs(v,{"data-attr-name":"DropdownMenu",ref:d,className:e.className,placement:m,...w,children:[n.jsx(L,{tone:"neutral",onClick:function(){r(!t)},children:e.triggerLabel}),t?n.jsx(j,{placement:m,children:n.jsx(M,{items:e.items,selectedId:e.selectedId,onItemSelect:function(o){e.onItemSelect&&e.onItemSelect(o),r(!1)}})}):null]})}l.__docgenInfo={description:"Organism component that renders the DropdownMenu primitive.",methods:[],displayName:"DropdownMenu",props:{triggerLabel:{required:!0,tsType:{name:"string"},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"MenuItem"}],raw:"MenuItem[]"},description:""},selectedId:{required:!1,tsType:{name:"string"},description:""},onItemSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},placement:{required:!1,tsType:{name:"union",raw:'"start" | "end"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"end"'}]},description:""}},composes:["HTMLAttributes"]};const N={title:"Organisms/DropdownMenu",component:l,tags:["autodocs"]},a={render:function(){const[t,r]=i.useState("profile");return n.jsxs(h,{gap:"sm",children:[n.jsx(l,{triggerLabel:"Open menu",selectedId:t,onItemSelect:r,items:[{id:"profile",label:"Profile"},{id:"team",label:"Team"},{id:"settings",label:"Settings"},{id:"logout",label:"Sign out"}]}),n.jsxs(T,{size:"sm",tone:"muted",children:["Selected: ",t]})]})}},s={args:{triggerLabel:"Open menu",selectedId:"profile"},argTypes:{triggerLabel:{control:"text"},selectedId:{control:"select",options:["profile","team","settings","logout"]}},render:function(t){return n.jsx(l,{triggerLabel:t.triggerLabel,selectedId:t.selectedId,onItemSelect:function(){},items:[{id:"profile",label:"Profile"},{id:"team",label:"Team"},{id:"settings",label:"Settings"},{id:"logout",label:"Sign out"}]})}};var g,f,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: function Render() {
    const [selectedId, setSelectedId] = useState("profile");
    return <Stack gap="sm">
      <DropdownMenu triggerLabel="Open menu" selectedId={selectedId} onItemSelect={setSelectedId} items={[{
        id: "profile",
        label: "Profile"
      }, {
        id: "team",
        label: "Team"
      }, {
        id: "settings",
        label: "Settings"
      }, {
        id: "logout",
        label: "Sign out"
      }]} />
      <Text size="sm" tone="muted">Selected: {selectedId}</Text>
    </Stack>;
  }
}`,...(b=(f=a.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var p,I,S;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    triggerLabel: "Open menu",
    selectedId: "profile"
  },
  argTypes: {
    triggerLabel: {
      control: "text"
    },
    selectedId: {
      control: "select",
      options: ["profile", "team", "settings", "logout"]
    }
  },
  render: function Render(args: any) {
    return <DropdownMenu triggerLabel={args.triggerLabel} selectedId={args.selectedId} onItemSelect={function onItemSelect() {}} items={[{
      id: "profile",
      label: "Profile"
    }, {
      id: "team",
      label: "Team"
    }, {
      id: "settings",
      label: "Settings"
    }, {
      id: "logout",
      label: "Sign out"
    }]} />;
  }
}`,...(S=(I=s.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};const _=["Showcase","Playground"];export{s as Playground,a as Showcase,_ as __namedExportsOrder,N as default};
