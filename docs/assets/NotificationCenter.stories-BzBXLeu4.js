import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{c as C}from"./react-Dvl1T4fj.js";import{s as p,b as u}from"./buildVariants-CfwgwYun.js";import{B as T}from"./Button-CXef72x6.js";import{T as d}from"./Text-DDuTvIDd.js";import{S as j}from"./Stack-CeWigPj7.js";import"./index-C4lZkr4h.js";import"./variantValue-VCXXWlxS.js";function k(){return`${Date.now()}-${Math.round(Math.random()*1e5)}`}const m=C(e=>({items:[],pushNotification:t=>{e(i=>({items:[{...t,id:k()},...i.items]}))},dismissNotification:t=>{e(i=>({items:i.items.filter(o=>o.id!==t)}))},clearNotifications:()=>{e({items:[]})}})),f=p.div(function(){return u({}).css({display:"grid",gap:"var(--ds-space-sm)",width:"100%"}).end()}),v=p.article(function(t){return u(t).css({border:"1px solid var(--ds-color-border)",backgroundColor:"var(--ds-color-surface)",borderRadius:"var(--ds-radius-md)",padding:"var(--ds-space-md)",boxShadow:"var(--ds-shadow-sm)",display:"grid",gap:"var(--ds-space-xs)",opacity:0,transform:"translateY(8px) scale(0.995)",animationName:"ds-notification-in",animationDuration:".26s",animationTimingFunction:"cubic-bezier(.2,.8,.2,1)",animationFillMode:"forwards",animationDelay:`${Math.min(t.index,6)*45}ms`,willChange:"opacity, transform","@keyframes ds-notification-in":{from:{opacity:0,transform:"translateY(8px) scale(0.995)"},to:{opacity:1,transform:"translateY(0) scale(1)"}},"@media (prefers-reduced-motion: reduce)":{animation:"none",opacity:1,transform:"none"}}).end()}),S=p.div(function(){return u({}).css({display:"flex",alignItems:"center",justifyContent:"space-between",gap:"var(--ds-space-sm)"}).end()});function c(e){const t=m(o=>o.items),i=m(o=>o.dismissNotification);return t.length?n.jsx(f,{children:t.map(function(s,b){return n.jsxs(v,{index:b,children:[n.jsxs(S,{children:[n.jsx(d,{as:"h4",size:"md",weight:"semibold",tone:s.tone==="danger"?"danger":"default",children:s.title}),n.jsx(T,{tone:"neutral",size:"sm",onClick:function(){i(s.id)},children:"Dismiss"})]}),s.body?n.jsx(d,{tone:"muted",children:s.body}):null]},s.id)})}):n.jsx(f,{"data-attr-name":"NotificationCenter",children:n.jsx(d,{tone:"muted",children:e.emptyText??"No notifications"})})}c.__docgenInfo={description:"Organism component that renders the NotificationCenter primitive.",methods:[],displayName:"NotificationCenter",props:{emptyText:{required:!1,tsType:{name:"string"},description:""}}};const O={title:"Organisms/NotificationCenter",component:c,tags:["autodocs"]},r={render:function(){const t=m(i=>i.pushNotification);return n.jsxs(j,{gap:"sm",children:[n.jsx(T,{tone:"primary",onClick:function(){t({title:"Build done",body:"Artifacts published",tone:"success"})},children:"Push notification"}),n.jsx(c,{emptyText:"No notifications"})]})}},a={args:{emptyText:"No notifications"},argTypes:{emptyText:{control:"text"}},render:function(t){return n.jsx(c,{emptyText:t.emptyText})}};var l,y,x;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: function Render() {
    const pushNotification = useNotificationsStore(state => state.pushNotification);
    return <Stack gap="sm">
      <Button tone="primary" onClick={function onClick() {
        pushNotification({
          title: "Build done",
          body: "Artifacts published",
          tone: "success"
        });
      }}>
        Push notification
      </Button>
      <NotificationCenter emptyText="No notifications" />
    </Stack>;
  }
}`,...(x=(y=r.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var h,g,N;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    emptyText: "No notifications"
  },
  argTypes: {
    emptyText: {
      control: "text"
    }
  },
  render: function Render(args: any) {
    return <NotificationCenter emptyText={args.emptyText} />;
  }
}`,...(N=(g=a.parameters)==null?void 0:g.docs)==null?void 0:N.source}}};const Y=["Showcase","Playground"];export{a as Playground,r as Showcase,Y as __namedExportsOrder,O as default};
