import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{s as u,b as g}from"./buildVariants-CfwgwYun.js";import{S as l}from"./Stack-CeWigPj7.js";import"./index-C4lZkr4h.js";const p=u.div(function(e){return g(e).css({width:e.width??"100%",height:e.height??"1rem",borderRadius:"var(--ds-radius-sm)",background:"linear-gradient(90deg, var(--ds-color-surface-muted), var(--ds-color-surface), var(--ds-color-surface-muted))",backgroundSize:"200% 100%",animation:"ds-skeleton 1.2s ease infinite","@keyframes ds-skeleton":{from:{backgroundPosition:"200% 0"},to:{backgroundPosition:"-200% 0"}}}).end()});function r(n){return t.jsx(p,{"data-attr-name":"Skeleton",...n,"aria-hidden":"true"})}r.__docgenInfo={description:"Atom component that renders the Skeleton primitive.",methods:[],displayName:"Skeleton",props:{width:{required:!1,tsType:{name:"string"},description:""},height:{required:!1,tsType:{name:"string"},description:""}},composes:["HTMLAttributes"]};const x={title:"Atoms/Skeleton",component:r,tags:["autodocs"]},o={render:function(){return t.jsxs(l,{gap:"sm",children:[t.jsx(r,{width:"12rem"}),t.jsx(r,{width:"100%",height:"2.4rem"})]})}},s={args:{width:"100%",height:"2.4rem"},argTypes:{width:{control:"text"},height:{control:"text"}},render:function(e){return t.jsx(r,{width:e.width,height:e.height})}};var i,a,d;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: function Render() {
    return <Stack gap="sm">
        <Skeleton width="12rem" />
        <Skeleton width="100%" height="2.4rem" />
      </Stack>;
  }
}`,...(d=(a=o.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};var c,h,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    width: "100%",
    height: "2.4rem"
  },
  argTypes: {
    width: {
      control: "text"
    },
    height: {
      control: "text"
    }
  },
  render: function Render(args: any) {
    return <Skeleton width={args.width} height={args.height} />;
  }
}`,...(m=(h=s.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};const y=["Showcase","Playground"];export{s as Playground,o as Showcase,y as __namedExportsOrder,x as default};
