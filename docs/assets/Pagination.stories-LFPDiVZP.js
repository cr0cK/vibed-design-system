import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-C4lZkr4h.js";import{s as z,b as f}from"./buildVariants-CfwgwYun.js";import{B as l}from"./Button-CXef72x6.js";import{T as y}from"./Text-DDuTvIDd.js";import{S as C}from"./Stack-CeWigPj7.js";import"./variantValue-VCXXWlxS.js";const v=z.div(function(a){return f(a).css({display:"inline-flex",alignItems:"center",gap:"var(--ds-space-sm)"}).variant("controlSize",a.controlSize??"md",{sm:{gap:"var(--ds-space-xs)"},md:{gap:"var(--ds-space-sm)"},lg:{gap:"var(--ds-space-md)"}}).end()});function t(e){const a=e.controlSize??e.size??"md",o=a==="sm"?"sm":a==="lg"?"lg":"md";return n.jsxs(v,{"data-attr-name":"Pagination",className:e.className,controlSize:a,children:[n.jsx(l,{controlSize:a,tone:"neutral",disabled:e.page<=1,onClick:function(){e.onPageChange(e.page-1)},children:"Previous"}),n.jsxs(y,{as:"span",size:o,children:[e.page," / ",e.totalPages]}),n.jsx(l,{controlSize:a,tone:"neutral",disabled:e.page>=e.totalPages,onClick:function(){e.onPageChange(e.page+1)},children:"Next"})]})}t.__docgenInfo={description:"Molecule component that renders the Pagination primitive.",methods:[],displayName:"Pagination",props:{page:{required:!0,tsType:{name:"number"},description:""},totalPages:{required:!0,tsType:{name:"number"},description:""},onPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(nextPage: number) => void",signature:{arguments:[{type:{name:"number"},name:"nextPage"}],return:{name:"void"}}},description:""},controlSize:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:""}},composes:["HTMLAttributes"]};const q={title:"Molecules/Pagination",component:t,tags:["autodocs"]},s={render:function(){const[a,o]=i.useState(2),[g,S]=i.useState(4),[x,h]=i.useState(6);return n.jsxs(C,{gap:"sm",children:[n.jsx(t,{controlSize:"sm",page:a,totalPages:8,onPageChange:o}),n.jsx(t,{controlSize:"md",page:g,totalPages:8,onPageChange:S}),n.jsx(t,{controlSize:"lg",page:x,totalPages:8,onPageChange:h})]})}},r={args:{controlSize:"md",page:4,totalPages:8},argTypes:{controlSize:{control:"select",options:["sm","md","lg"]},page:{control:{type:"number",min:1,max:20,step:1}},totalPages:{control:{type:"number",min:1,max:50,step:1}}},render:function(a){return n.jsx(t,{controlSize:a.controlSize,page:a.page,totalPages:a.totalPages,onPageChange:function(){}})}};var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: function Render() {
    const [pageSm, setPageSm] = useState(2);
    const [pageMd, setPageMd] = useState(4);
    const [pageLg, setPageLg] = useState(6);
    return <Stack gap="sm">
      <Pagination controlSize="sm" page={pageSm} totalPages={8} onPageChange={setPageSm} />
      <Pagination controlSize="md" page={pageMd} totalPages={8} onPageChange={setPageMd} />
      <Pagination controlSize="lg" page={pageLg} totalPages={8} onPageChange={setPageLg} />
    </Stack>;
  }
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,p,P;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    controlSize: "md",
    page: 4,
    totalPages: 8
  },
  argTypes: {
    controlSize: {
      control: "select",
      options: ["sm", "md", "lg"]
    },
    page: {
      control: {
        type: "number",
        min: 1,
        max: 20,
        step: 1
      }
    },
    totalPages: {
      control: {
        type: "number",
        min: 1,
        max: 50,
        step: 1
      }
    }
  },
  render: function Render(args: any) {
    return <Pagination controlSize={args.controlSize} page={args.page} totalPages={args.totalPages} onPageChange={function onPageChange() {}} />;
  }
}`,...(P=(p=r.parameters)==null?void 0:p.docs)==null?void 0:P.source}}};const w=["Showcase","Playground"];export{r as Playground,s as Showcase,w as __namedExportsOrder,q as default};
