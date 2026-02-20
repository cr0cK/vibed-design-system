import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./index-C4lZkr4h.js";import{s as l,b as i}from"./buildVariants-CfwgwYun.js";import{B as S}from"./Button-CXef72x6.js";import{I as y}from"./Inline-BWffa32P.js";import{S as j}from"./SearchBar-DsCuRwWO.js";import{S as B}from"./Select-CVKpz3xO.js";import"./variantValue-VCXXWlxS.js";const C=l.div(function(){return i({}).css({display:"flex",alignItems:"center",justifyContent:"space-between",gap:"var(--ds-space-sm)",width:"100%",boxSizing:"border-box",border:"1px solid var(--ds-color-border)",borderRadius:"var(--ds-radius-md)",padding:"var(--ds-space-sm)",backgroundColor:"var(--ds-color-surface)"}).end()}),R=l.div(function(){return i({}).css({display:"flex",alignItems:"center",gap:"var(--ds-space-xs)",flexWrap:"wrap",minWidth:0,flex:"1 1 auto"}).end()}),b=l.div(function(){return i({}).css({display:"flex",alignItems:"center",gap:"var(--ds-space-xs)",flexShrink:0}).end()});function s(n){return e.jsxs(C,{"data-attr-name":"FilterBar",className:n.className,children:[e.jsx(R,{children:n.controls}),e.jsx(b,{children:n.actions})]})}s.__docgenInfo={description:"Organism component that renders the FilterBar primitive.",methods:[],displayName:"FilterBar",props:{controls:{required:!1,tsType:{name:"ReactNode"},description:""},actions:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["HTMLAttributes"]};const Q={title:"Organisms/FilterBar",component:s,tags:["autodocs"]},t={render:function(){const[o,c]=p.useState(""),[A,u]=p.useState("all");return e.jsx(s,{controls:e.jsxs(y,{gap:"xs",children:[e.jsx(j,{placeholder:"Search automations",value:o,onChange:function(r){c(r.target.value)}}),e.jsxs(B,{value:A,onChange:function(r){u(r.target.value)},children:[e.jsx("option",{value:"all",children:"All status"}),e.jsx("option",{value:"active",children:"Active"}),e.jsx("option",{value:"paused",children:"Paused"})]})]}),actions:e.jsx(S,{tone:"neutral",onClick:function(){c(""),u("all")},children:"Reset"})})}},a={args:{showActions:!0},argTypes:{showActions:{control:"boolean"}},render:function(o){return e.jsx(s,{controls:e.jsxs(y,{gap:"xs",children:[e.jsx(j,{placeholder:"Search automations"}),e.jsxs(B,{defaultValue:"all",children:[e.jsx("option",{value:"all",children:"All status"}),e.jsx("option",{value:"active",children:"Active"}),e.jsx("option",{value:"paused",children:"Paused"})]})]}),actions:o.showActions?e.jsx(S,{tone:"neutral",children:"Reset"}):void 0})}};var m,h,v;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: function Render() {
    const [query, setQuery] = useState("");
    const [status, setStatus] = useState("all");
    return <FilterBar controls={<Inline gap="xs">
            <SearchBar placeholder="Search automations" value={query} onChange={function onChange(event) {
        setQuery(event.target.value);
      }} />
            <Select value={status} onChange={function onChange(event) {
        setStatus(event.target.value);
      }}>
              <option value="all">All status</option>
              <option value="active">Active</option>
              <option value="paused">Paused</option>
            </Select>
          </Inline>} actions={<Button tone="neutral" onClick={function onClick() {
      setQuery("");
      setStatus("all");
    }}>
            Reset
          </Button>} />;
  }
}`,...(v=(h=t.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var g,x,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    showActions: true
  },
  argTypes: {
    showActions: {
      control: "boolean"
    }
  },
  render: function Render(args: any) {
    return <FilterBar controls={<Inline gap="xs">
            <SearchBar placeholder="Search automations" />
            <Select defaultValue="all">
              <option value="all">All status</option>
              <option value="active">Active</option>
              <option value="paused">Paused</option>
            </Select>
          </Inline>} actions={args.showActions ? <Button tone="neutral">Reset</Button> : undefined} />;
  }
}`,...(f=(x=a.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const _=["Showcase","Playground"];export{a as Playground,t as Showcase,_ as __namedExportsOrder,Q as default};
