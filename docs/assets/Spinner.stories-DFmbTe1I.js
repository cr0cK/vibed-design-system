import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{s as c,b as u}from"./buildVariants-CfwgwYun.js";import{I as g}from"./Inline-BWffa32P.js";import"./index-C4lZkr4h.js";const h=c.div(function(s){return u(s).css({display:"inline-block",borderStyle:"solid",borderColor:"var(--ds-color-border)",borderTopColor:"var(--ds-color-primary)",borderRadius:"var(--ds-radius-full)",animation:"ds-spin 0.8s linear infinite","@keyframes ds-spin":{to:{transform:"rotate(360deg)"}}}).variant("size",s.size??"md",{sm:{width:"1rem",height:"1rem",borderWidth:"2px"},md:{width:"1.4rem",height:"1.4rem",borderWidth:"2px"},lg:{width:"2rem",height:"2rem",borderWidth:"3px"}}).end()});function r(n){return e.jsx(h,{"data-attr-name":"Spinner",...n,role:"status","aria-label":"Loading"})}r.__docgenInfo={description:"Atom component that renders the Spinner primitive.",methods:[],displayName:"Spinner",props:{size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:""}},composes:["HTMLAttributes"]};const x={title:"Atoms/Spinner",component:r,tags:["autodocs"]},i={render:function(){return e.jsxs(g,{gap:"sm",align:"center",children:[e.jsx(r,{size:"sm"}),e.jsx(r,{size:"md"}),e.jsx(r,{size:"lg"})]})}},t={args:{size:"md"},argTypes:{size:{control:"select",options:["sm","md","lg"]}},render:function(s){return e.jsx(r,{size:s.size})}};var o,a,d;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: function Render() {
    return <Inline gap="sm" align="center">
        <Spinner size="sm" />
        <Spinner size="md" />
        <Spinner size="lg" />
      </Inline>;
  }
}`,...(d=(a=i.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};var m,l,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: "md"
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"]
    }
  },
  render: function Render(args: any) {
    return <Spinner size={args.size} />;
  }
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const y=["Showcase","Playground"];export{t as Playground,i as Showcase,y as __namedExportsOrder,x as default};
