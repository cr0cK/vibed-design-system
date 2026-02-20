import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{s as o,b as s}from"./buildVariants-CfwgwYun.js";import{A as h}from"./Avatar-DnOV1aJc.js";import"./index-C4lZkr4h.js";const S=o.div(function(e){return s(e).css({display:"inline-flex",alignItems:"center"}).variant("controlSize",e.controlSize??"md",{sm:{marginInlineStart:"0.35rem"},md:{marginInlineStart:"0.45rem"},lg:{marginInlineStart:"0.55rem"}}).end()}),f=o.div(function(e){return s(e).css({border:"2px solid var(--ds-color-surface)",borderRadius:"var(--ds-radius-full)",marginInlineStart:"-0.45rem"}).variant("controlSize",e.controlSize??"md",{sm:{marginInlineStart:"-0.35rem"},md:{marginInlineStart:"-0.45rem"},lg:{marginInlineStart:"-0.55rem"}}).end()}),y=o.span(function(){return s({}).css({display:"inline-grid",placeItems:"center",width:"2.2rem",height:"2.2rem",borderRadius:"var(--ds-radius-full)",border:"1px solid var(--ds-color-border)",backgroundColor:"var(--ds-color-surface-muted)",fontSize:"0.8rem",fontWeight:600}).end()});function m(n){const e=n.max??n.items.length,l=n.items.slice(0,e),d=Math.max(0,n.items.length-l.length);return a.jsxs(S,{"data-attr-name":"AvatarGroup",className:n.className,controlSize:n.controlSize,children:[l.map(function(r){return a.jsx(f,{controlSize:n.controlSize,children:a.jsx(h,{controlSize:n.controlSize,name:r.name,src:r.src,alt:r.alt})},r.id)}),d>0?a.jsxs(y,{children:["+",d]}):null]})}m.__docgenInfo={description:"Molecule component that renders the AvatarGroup primitive.",methods:[],displayName:"AvatarGroup",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"AvatarGroupItem"}],raw:"AvatarGroupItem[]"},description:""},max:{required:!1,tsType:{name:"number"},description:""},controlSize:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:""}},composes:["HTMLAttributes"]};const G={title:"Molecules/AvatarGroup",component:m,tags:["autodocs"]},t={render:function(){return a.jsx(m,{max:4,items:[{id:"u1",name:"Olivia Jones"},{id:"u2",name:"Liam Smith"},{id:"u3",name:"Emma Brown"},{id:"u4",name:"Noah Johnson"},{id:"u5",name:"Ava Williams"}]})}},i={args:{max:4},argTypes:{max:{control:{type:"number",min:1,max:8,step:1}}},render:function(e){return a.jsx(m,{max:e.max,items:[{id:"u1",name:"Olivia Jones"},{id:"u2",name:"Liam Smith"},{id:"u3",name:"Emma Brown"},{id:"u4",name:"Noah Johnson"},{id:"u5",name:"Ava Williams"}]})}};var u,c,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: function Render() {
    return <AvatarGroup max={4} items={[{
      id: "u1",
      name: "Olivia Jones"
    }, {
      id: "u2",
      name: "Liam Smith"
    }, {
      id: "u3",
      name: "Emma Brown"
    }, {
      id: "u4",
      name: "Noah Johnson"
    }, {
      id: "u5",
      name: "Ava Williams"
    }]} />;
  }
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var v,g,x;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    max: 4
  },
  argTypes: {
    max: {
      control: {
        type: "number",
        min: 1,
        max: 8,
        step: 1
      }
    }
  },
  render: function Render(args: any) {
    return <AvatarGroup max={args.max} items={[{
      id: "u1",
      name: "Olivia Jones"
    }, {
      id: "u2",
      name: "Liam Smith"
    }, {
      id: "u3",
      name: "Emma Brown"
    }, {
      id: "u4",
      name: "Noah Johnson"
    }, {
      id: "u5",
      name: "Ava Williams"
    }]} />;
  }
}`,...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const j=["Showcase","Playground"];export{i as Playground,t as Showcase,j as __namedExportsOrder,G as default};
