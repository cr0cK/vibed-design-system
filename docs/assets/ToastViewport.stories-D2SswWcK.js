import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{c as x}from"./react-Dvl1T4fj.js";import{r as D}from"./index-C4lZkr4h.js";import{s as M,b as k}from"./buildVariants-CfwgwYun.js";import{T as y}from"./Toast-FZfz5Chn.js";import{S}from"./Stack-CeWigPj7.js";import{B as p}from"./Button-CXef72x6.js";import"./variantValue-VCXXWlxS.js";function j(){return`${Date.now()}-${Math.round(Math.random()*1e5)}`}const c=x(s=>({items:[],pushToast:n=>{s(function(e){return{items:[{...n,id:j()},...e.items]}})},dismissToast:n=>{s(function(e){return{items:e.items.filter(function(a){return a.id!==n})}})},clearToasts:()=>{s({items:[]})}})),P=M.section(function(){return k({}).css({position:"fixed",bottom:"var(--ds-space-md)",right:"var(--ds-space-md)",display:"grid",gap:"var(--ds-space-sm)",zIndex:80}).end()});function d(s){const n=c(function(t){return t.items}),r=c(function(t){return t.dismissToast});return D.useEffect(function(){const t=n.map(function(l){const m=l.durationMs??s.defaultDurationMs??3500;return window.setTimeout(function(){r(l.id)},m)});return function(){t.forEach(function(m){window.clearTimeout(m)})}},[n,r,s.defaultDurationMs]),n.length===0?null:o.jsx(P,{"data-attr-name":"ToastViewport","aria-live":"polite","aria-atomic":"true",children:n.map(function(t){return o.jsx(y,{heading:t.title,description:t.description,tone:t.tone,onClose:function(){r(t.id)}},t.id)})})}d.__docgenInfo={description:"Organism component that renders the ToastViewport primitive.",methods:[],displayName:"ToastViewport",props:{defaultDurationMs:{required:!1,tsType:{name:"number"},description:""}}};const A={title:"Organisms/ToastViewport",component:d,tags:["autodocs"]},i={render:function(){const n=c(function(t){return t.pushToast}),r=c(function(t){return t.clearToasts});return o.jsxs(o.Fragment,{children:[o.jsxs(S,{gap:"sm",children:[o.jsx(p,{tone:"primary",onClick:function(){n({title:"Automation created",description:"Your digest automation is now live.",tone:"success"})},children:"Push success toast"}),o.jsx(p,{tone:"danger",onClick:function(){n({title:"Delivery failed",description:"SMTP connection timed out.",tone:"danger"})},children:"Push danger toast"}),o.jsx(p,{tone:"neutral",onClick:function(){r()},children:"Clear toasts"})]}),o.jsx(d,{})]})}},u={args:{defaultDurationMs:4500},argTypes:{defaultDurationMs:{control:"number"}},render:function(n){return o.jsx(d,{defaultDurationMs:n.defaultDurationMs})}};var f,T,g;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: function Render() {
    const pushToast = useToastStore(function getPush(state) {
      return state.pushToast;
    });
    const clearToasts = useToastStore(function getClear(state) {
      return state.clearToasts;
    });
    return <>
      <Stack gap="sm">
        <Button tone="primary" onClick={function onClick() {
          pushToast({
            title: "Automation created",
            description: "Your digest automation is now live.",
            tone: "success"
          });
        }}>
          Push success toast
        </Button>
        <Button tone="danger" onClick={function onClick() {
          pushToast({
            title: "Delivery failed",
            description: "SMTP connection timed out.",
            tone: "danger"
          });
        }}>
          Push danger toast
        </Button>
        <Button tone="neutral" onClick={function onClick() {
          clearToasts();
        }}>Clear toasts</Button>
      </Stack>
      <ToastViewport />
    </>;
  }
}`,...(g=(T=i.parameters)==null?void 0:T.docs)==null?void 0:g.source}}};var h,C,w;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    defaultDurationMs: 4500
  },
  argTypes: {
    defaultDurationMs: {
      control: "number"
    }
  },
  render: function Render(args: any) {
    return <ToastViewport defaultDurationMs={args.defaultDurationMs} />;
  }
}`,...(w=(C=u.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};const Y=["Showcase","Playground"];export{u as Playground,i as Showcase,Y as __namedExportsOrder,A as default};
