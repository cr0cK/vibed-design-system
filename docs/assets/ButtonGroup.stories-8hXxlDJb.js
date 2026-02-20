import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{s as m,b as g}from"./buildVariants-CfwgwYun.js";import{B as a}from"./Button-CXef72x6.js";import"./index-C4lZkr4h.js";import"./variantValue-VCXXWlxS.js";const B=m.div(function(n){return g(n).css({display:"inline-flex"}).variant("direction",n.direction??"row",{row:{flexDirection:"row"},column:{flexDirection:"column"}}).variant("gap",n.gap??"xs",{xs:{gap:"var(--ds-space-xs)"},sm:{gap:"var(--ds-space-sm)"},md:{gap:"var(--ds-space-md)"}}).end()});function s(r){return e.jsx(B,{"data-attr-name":"ButtonGroup",...r,children:r.children})}s.__docgenInfo={description:"Atom component that renders the ButtonGroup primitive.",methods:[],displayName:"ButtonGroup",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},direction:{required:!1,tsType:{name:"union",raw:'"row" | "column"',elements:[{name:"literal",value:'"row"'},{name:"literal",value:'"column"'}]},description:""},gap:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'}]},description:""}},composes:["HTMLAttributes"]};const w={title:"Atoms/ButtonGroup",component:s,tags:["autodocs"]},t={render:function(){return e.jsxs(s,{children:[e.jsx(a,{tone:"neutral",children:"Back"}),e.jsx(a,{tone:"primary",children:"Save"})]})}},o={args:{direction:"row",gap:"xs"},argTypes:{direction:{control:"select",options:["row","column"]},gap:{control:"select",options:["xs","sm","md"]}},render:function(n){return e.jsxs(s,{direction:n.direction,gap:n.gap,children:[e.jsx(a,{tone:"neutral",children:"Back"}),e.jsx(a,{tone:"primary",children:"Save"})]})}};var i,c,u;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: function Render() {
    return <ButtonGroup>
        <Button tone="neutral">Back</Button>
        <Button tone="primary">Save</Button>
      </ButtonGroup>;
  }
}`,...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var d,l,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    direction: "row",
    gap: "xs"
  },
  argTypes: {
    direction: {
      control: "select",
      options: ["row", "column"]
    },
    gap: {
      control: "select",
      options: ["xs", "sm", "md"]
    }
  },
  render: function Render(args: any) {
    return <ButtonGroup direction={args.direction} gap={args.gap}>
        <Button tone="neutral">Back</Button>
        <Button tone="primary">Save</Button>
      </ButtonGroup>;
  }
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const G=["Showcase","Playground"];export{o as Playground,t as Showcase,G as __namedExportsOrder,w as default};
