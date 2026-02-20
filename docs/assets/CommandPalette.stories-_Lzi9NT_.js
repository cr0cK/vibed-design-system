import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./index-C4lZkr4h.js";import{s as c,b as u}from"./buildVariants-CfwgwYun.js";import{B as R}from"./Button-CXef72x6.js";import{P as D}from"./Portal-GQXdu2oJ.js";import{C as I}from"./ClickOutside-Dk9E0MtN.js";import{F as K}from"./FocusTrap-D7L6Nql6.js";import{S as F}from"./Stack-CeWigPj7.js";import{T as q}from"./Text-DDuTvIDd.js";import"./variantValue-VCXXWlxS.js";import"./index-D17WIwkg.js";import"./index-0li_wt_e.js";const z=c.div(function(o){return u(o).css({position:"fixed",inset:0,backgroundColor:o.entered?"rgba(0, 0, 0, 0.3)":"rgba(0, 0, 0, 0)",display:"grid",placeItems:"start center",paddingTop:"12vh",zIndex:70,transition:"background-color .18s ease"}).end()}),A=c.div(function(o){return u(o).css({width:"min(34rem, 92vw)",border:"1px solid var(--ds-color-border)",borderRadius:"var(--ds-radius-lg)",backgroundColor:"var(--ds-color-surface)",boxShadow:"var(--ds-shadow-md)",overflow:"hidden",opacity:o.entered?1:0,transform:o.entered?"translateY(0) scale(1)":"translateY(-8px) scale(0.985)",transition:"opacity .2s ease, transform .2s cubic-bezier(.2,.8,.2,1)","@media (prefers-reduced-motion: reduce)":{transition:"none",opacity:1,transform:"none"}}).end()}),M=c.input(function(){return u({}).css({width:"100%",border:"none",outline:"none",borderBottom:"1px solid var(--ds-color-border)",fontFamily:"var(--ds-font-body)",fontSize:"0.95rem",padding:"0.72rem 0.8rem"}).end()}),V=c.button(function(o){return u(o).css({width:"100%",textAlign:"left",border:"none",backgroundColor:o.highlighted?"var(--ds-color-surface-muted)":"transparent",color:"var(--ds-color-text)",padding:"0.65rem 0.8rem",cursor:"pointer"}).end()}),B=c.div(function(){return u({}).css({padding:"0.75rem 0.8rem",color:"var(--ds-color-text-muted)",fontSize:"0.88rem"}).end()});function y(r){const[o,d]=a.useState(!1),[w,h]=a.useState(!1),[b,k]=a.useState(""),[m,l]=a.useState(0),C=a.useRef(null),x=a.useRef(null);a.useEffect(function(){function e(n){const i=n.key.toLowerCase();(n.metaKey||n.ctrlKey)&&i==="k"&&(n.preventDefault(),d(!0)),n.key==="Escape"&&(r.closeOnEscape??!0)&&d(!1)}return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}},[r.closeOnEscape]);const f=r.commands.filter(function(e){const n=b.toLowerCase().trim();return!n||e.label.toLowerCase().includes(n)?!0:e.keywords?e.keywords.some(function(P){return P.toLowerCase().includes(n)}):!1});function v(s){const e=f[s];e&&(e.onSelect&&e.onSelect(),d(!1),k(""),l(0))}return a.useEffect(function(){if(!o){h(!1);return}const e=window.requestAnimationFrame(function(){h(!0)});return function(){window.cancelAnimationFrame(e)}},[o]),a.useEffect(function(){if(!o||r.closeOnEscape===!1)return;function e(n){var i;n.key==="Escape"&&((i=x.current)!=null&&i.contains(document.activeElement))&&(n.preventDefault(),d(!1))}return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}},[o,r.closeOnEscape]),t.jsxs(t.Fragment,{children:[t.jsx(R,{tone:"neutral",onClick:function(){d(!0)},children:r.triggerLabel??"Open command palette"}),o?t.jsx(D,{target:r.portalTarget,children:t.jsx(z,{entered:w,children:t.jsx(I,{onClickOutside:function(){d(!1)},children:t.jsx(K,{active:!0,initialFocusRef:C,children:t.jsxs(A,{"data-attr-name":"CommandPalette",ref:x,entered:w,role:"dialog","aria-modal":"true","aria-label":r.dialogLabel??"Command palette",children:[t.jsx(M,{ref:C,autoFocus:!0,value:b,placeholder:"Type a command...",onChange:function(e){k(e.target.value),l(0)},onKeyDown:function(e){if(e.key==="ArrowDown"){e.preventDefault(),l(Math.min(f.length-1,m+1));return}if(e.key==="ArrowUp"){e.preventDefault(),l(Math.max(0,m-1));return}e.key==="Enter"&&(e.preventDefault(),v(m))}}),f.length===0?t.jsx(B,{children:"No commands found"}):t.jsx("div",{children:f.map(function(e,n){return t.jsx(V,{highlighted:n===m,onMouseEnter:function(){l(n)},onClick:function(){v(n)},children:e.label},e.id)})})]})})})})}):null]})}y.__docgenInfo={description:"Organism component that renders the CommandPalette primitive.",methods:[],displayName:"CommandPalette",props:{commands:{required:!0,tsType:{name:"Array",elements:[{name:"CommandItem"}],raw:"CommandItem[]"},description:""},triggerLabel:{required:!1,tsType:{name:"string"},description:""},dialogLabel:{required:!1,tsType:{name:"string"},description:""},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:""},portalTarget:{required:!1,tsType:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]},description:""}},composes:["HTMLAttributes"]};const ee={title:"Organisms/CommandPalette",component:y,tags:["autodocs"]},p={render:function(){return t.jsxs(F,{gap:"sm",children:[t.jsx(q,{size:"sm",tone:"muted",children:"Tip: Press Ctrl+K / Cmd+K to open."}),t.jsx(y,{commands:[{id:"new-automation",label:"Create new automation",keywords:["new","create","digest"]},{id:"open-settings",label:"Open settings",keywords:["config","preferences"]},{id:"view-logs",label:"View delivery logs",keywords:["logs","history"]}]})]})}},g={render:function(){return t.jsx(y,{commands:[{id:"new-automation",label:"Create new automation",keywords:["new","create","digest"]},{id:"open-settings",label:"Open settings",keywords:["config","preferences"]},{id:"view-logs",label:"View delivery logs",keywords:["logs","history"]}]})}};var E,O,T;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: function Render() {
    return <Stack gap="sm">
        <Text size="sm" tone="muted">Tip: Press Ctrl+K / Cmd+K to open.</Text>
        <CommandPalette commands={[{
        id: "new-automation",
        label: "Create new automation",
        keywords: ["new", "create", "digest"]
      }, {
        id: "open-settings",
        label: "Open settings",
        keywords: ["config", "preferences"]
      }, {
        id: "view-logs",
        label: "View delivery logs",
        keywords: ["logs", "history"]
      }]} />
      </Stack>;
  }
}`,...(T=(O=p.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var S,j,L;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: function Render() {
    return <CommandPalette commands={[{
      id: "new-automation",
      label: "Create new automation",
      keywords: ["new", "create", "digest"]
    }, {
      id: "open-settings",
      label: "Open settings",
      keywords: ["config", "preferences"]
    }, {
      id: "view-logs",
      label: "View delivery logs",
      keywords: ["logs", "history"]
    }]} />;
  }
}`,...(L=(j=g.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};const ne=["Showcase","Playground"];export{g as Playground,p as Showcase,ne as __namedExportsOrder,ee as default};
