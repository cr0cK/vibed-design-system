import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{s as i,b as o}from"./buildVariants-CfwgwYun.js";import{u as j}from"./DesignSystemContext-B42q4VCL.js";import{c as v}from"./react-Dvl1T4fj.js";import{B as C}from"./Button-CXef72x6.js";import{T as r}from"./Text-DDuTvIDd.js";import{C as S}from"./Card-CjDtNofe.js";import{S as y}from"./Stack-CeWigPj7.js";import"./index-C4lZkr4h.js";import"./variantValue-VCXXWlxS.js";import"./Box-Cmoc61Tl.js";const p=v(n=>({sidePanelOpen:!0,setSidePanelOpen:t=>n({sidePanelOpen:t}),toggleSidePanel:()=>n(t=>({sidePanelOpen:!t.sidePanelOpen}))})),A=i.div(function(t){return o(t).css({display:"grid",minHeight:"100vh","@media (max-width: 860px)":{gridTemplateColumns:"minmax(0, 1fr)"}}).variant("density",t.density,{comfortable:{gridTemplateColumns:"260px 1fr"},compact:{gridTemplateColumns:"220px 1fr"}}).end()}),b=i.aside(function(){return o({}).css({borderRight:"1px solid var(--ds-color-border)",padding:"var(--ds-space-lg)",backgroundColor:"var(--ds-color-surface)","@media (max-width: 860px)":{borderRight:"none",borderBottom:"1px solid var(--ds-color-border)"}}).end()}),P=i.main(function(){return o({}).css({padding:"var(--ds-space-xl)",display:"grid",gap:"var(--ds-space-lg)",alignContent:"start",minWidth:0,"@media (max-width: 860px)":{padding:"var(--ds-space-lg)"}}).end()}),k=i.div(function(){return o({}).css({display:"flex",alignItems:"center",justifyContent:"space-between",gap:"var(--ds-space-md)",flexWrap:"wrap"}).end()});function d(n){const t=j(),c=p(l=>l.sidePanelOpen),T=p(l=>l.toggleSidePanel);return e.jsxs(A,{"data-attr-name":"AppShell",className:n.className,density:t.density,"data-density":t.density,children:[c?e.jsx(b,{children:n.navigation}):null,e.jsxs(P,{children:[e.jsxs(k,{children:[e.jsx(r,{as:"h1",size:"xl",weight:"bold",children:n.title}),e.jsx(C,{tone:"neutral",onClick:T,children:c?"Hide nav":"Show nav"})]}),n.children]})]})}d.__docgenInfo={description:"Organism component that renders the AppShell primitive.",methods:[],displayName:"AppShell",props:{title:{required:!0,tsType:{name:"string"},description:""},navigation:{required:!1,tsType:{name:"ReactNode"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["HTMLAttributes"]};const I={title:"Organisms/AppShell",component:d,tags:["autodocs"]},s={render:function(){return e.jsx(d,{title:"Workspace",navigation:e.jsxs(y,{gap:"xs",children:[e.jsx(r,{children:"Foundations"}),e.jsx(r,{children:"Components"})]}),children:e.jsx(S,{title:"Main content",children:e.jsx(r,{children:"App shell content area."})})})}},a={args:{title:"Workspace"},argTypes:{title:{control:"text"}},render:function(t){return e.jsx(d,{title:t.title,navigation:e.jsxs(y,{gap:"xs",children:[e.jsx(r,{children:"Foundations"}),e.jsx(r,{children:"Components"})]}),children:e.jsx(S,{title:"Main content",children:e.jsx(r,{children:"App shell content area."})})})}};var m,x,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: function Render() {
    return <AppShell title="Workspace" navigation={<Stack gap="xs"><Text>Foundations</Text><Text>Components</Text></Stack>}>
        <Card title="Main content"><Text>App shell content area.</Text></Card>
      </AppShell>;
  }
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var g,h,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: "Workspace"
  },
  argTypes: {
    title: {
      control: "text"
    }
  },
  render: function Render(args: any) {
    return <AppShell title={args.title} navigation={<Stack gap="xs"><Text>Foundations</Text><Text>Components</Text></Stack>}>
        <Card title="Main content"><Text>App shell content area.</Text></Card>
      </AppShell>;
  }
}`,...(f=(h=a.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const E=["Showcase","Playground"];export{a as Playground,s as Showcase,E as __namedExportsOrder,I as default};
