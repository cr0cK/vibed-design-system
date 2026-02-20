import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as g}from"./index-C4lZkr4h.js";import{s as h,b as f}from"./buildVariants-CfwgwYun.js";import{H as i}from"./Heading-arU6QW_P.js";import{T as j}from"./Text-DDuTvIDd.js";import{S as y}from"./Stack-CeWigPj7.js";import{F as b}from"./FormControl-CHxtCmVJ.js";import{I as S}from"./Input-CdteF-Kd.js";import{B as k}from"./Button-CXef72x6.js";import{S as x}from"./Switch-BXlsNIR0.js";import"./HelperText-DaMXUXYw.js";import"./variantValue-VCXXWlxS.js";const C=h.section(function(){return f({}).css({display:"grid",gap:"var(--ds-space-md)",width:"100%"}).end()}),w=h.article(function(){return f({}).css({border:"1px solid var(--ds-color-border)",borderRadius:"var(--ds-radius-md)",padding:"var(--ds-space-md)",display:"grid",gap:"var(--ds-space-sm)",backgroundColor:"var(--ds-color-surface)"}).end()});function o(t){return e.jsxs(C,{"data-attr-name":"SettingsPanel",className:t.className,children:[t.heading?e.jsx(i,{level:3,children:t.heading}):null,t.sections.map(function(n){return e.jsxs(w,{children:[e.jsx(i,{level:5,children:n.title}),n.description?e.jsx(j,{size:"sm",tone:"muted",children:n.description}):null,e.jsx("div",{children:n.content})]},n.id)})]})}o.__docgenInfo={description:"Organism component that renders the SettingsPanel primitive.",methods:[],displayName:"SettingsPanel",props:{heading:{required:!1,tsType:{name:"ReactNode"},description:""},sections:{required:!0,tsType:{name:"Array",elements:[{name:"SettingsSection"}],raw:"SettingsSection[]"},description:""}},composes:["HTMLAttributes"]};const V={title:"Organisms/SettingsPanel",component:o,tags:["autodocs"]},s={render:function(){const[a,n]=g.useState(!0);return e.jsx(o,{heading:"Workspace settings",sections:[{id:"profile",title:"Profile",description:"Basic identity and display settings.",content:e.jsxs(y,{gap:"sm",children:[e.jsx(b,{label:"Workspace name",htmlFor:"workspace-name",children:e.jsx(S,{id:"workspace-name",defaultValue:"Orange Motion"})}),e.jsx(k,{tone:"primary",size:"sm",children:"Save profile"})]})},{id:"notifications",title:"Notifications",description:"Control automated delivery behavior.",content:e.jsx(x,{checked:a,onCheckedChange:n,label:"Enable system alerts"})}]})}},r={args:{heading:"Workspace settings"},argTypes:{heading:{control:"text"}},render:function(a){const[n,v]=g.useState(!0);return e.jsx(o,{heading:a.heading,sections:[{id:"profile",title:"Profile",description:"Basic identity and display settings.",content:e.jsxs(y,{gap:"sm",children:[e.jsx(b,{label:"Workspace name",htmlFor:"workspace-name-playground",children:e.jsx(S,{id:"workspace-name-playground",defaultValue:"Orange Motion"})}),e.jsx(k,{tone:"primary",size:"sm",children:"Save profile"})]})},{id:"notifications",title:"Notifications",description:"Control automated delivery behavior.",content:e.jsx(x,{checked:n,onCheckedChange:v,label:"Enable system alerts"})}]})}};var d,c,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: function Render() {
    const [enabled, setEnabled] = useState(true);
    return <SettingsPanel heading="Workspace settings" sections={[{
      id: "profile",
      title: "Profile",
      description: "Basic identity and display settings.",
      content: <Stack gap="sm">
              <FormControl label="Workspace name" htmlFor="workspace-name">
                <Input id="workspace-name" defaultValue="Orange Motion" />
              </FormControl>
              <Button tone="primary" size="sm">Save profile</Button>
            </Stack>
    }, {
      id: "notifications",
      title: "Notifications",
      description: "Control automated delivery behavior.",
      content: <Switch checked={enabled} onCheckedChange={setEnabled} label="Enable system alerts" />
    }]} />;
  }
}`,...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,p,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    heading: "Workspace settings"
  },
  argTypes: {
    heading: {
      control: "text"
    }
  },
  render: function Render(args: any) {
    const [enabled, setEnabled] = useState(true);
    return <SettingsPanel heading={args.heading} sections={[{
      id: "profile",
      title: "Profile",
      description: "Basic identity and display settings.",
      content: <Stack gap="sm">
                <FormControl label="Workspace name" htmlFor="workspace-name-playground">
                  <Input id="workspace-name-playground" defaultValue="Orange Motion" />
                </FormControl>
                <Button tone="primary" size="sm">Save profile</Button>
              </Stack>
    }, {
      id: "notifications",
      title: "Notifications",
      description: "Control automated delivery behavior.",
      content: <Switch checked={enabled} onCheckedChange={setEnabled} label="Enable system alerts" />
    }]} />;
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const _=["Showcase","Playground"];export{r as Playground,s as Showcase,_ as __namedExportsOrder,V as default};
