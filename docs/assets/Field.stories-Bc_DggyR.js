import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-C4lZkr4h.js";import{s as m,b as u}from"./buildVariants-CfwgwYun.js";import{T as c}from"./Text-DDuTvIDd.js";import{I as l}from"./Input-CdteF-Kd.js";import{S as v}from"./Stack-CeWigPj7.js";import"./variantValue-VCXXWlxS.js";const T=m.div(function(n){return u(n).css({display:"grid",gap:"var(--ds-space-xs)"}).variant("controlSize",n.controlSize??"md",{sm:{gap:"var(--ds-space-xxs)"},md:{gap:"var(--ds-space-xs)"},lg:{gap:"var(--ds-space-sm)"}}).end()}),j=m.div(function(n){return u(n).css({display:"flex",alignItems:"center",justifyContent:"space-between",gap:"var(--ds-space-xs)"}).variant("controlSize",n.controlSize??"md",{sm:{gap:"var(--ds-space-xxs)"},md:{gap:"var(--ds-space-xs)"},lg:{gap:"var(--ds-space-sm)"}}).end()}),U=m.div(function(n){return u(n).css({minHeight:"1.2em"}).variant("controlSize",n.controlSize??"md",{sm:{minHeight:"1.1em"},md:{minHeight:"1.2em"},lg:{minHeight:"1.35em"}}).end()});function i(e){const n=e.controlSize??e.size??"md",o=n==="sm"?"sm":n==="lg"?"md":"sm",y=d.useId(),s=e.error||e.hint?y:void 0;let p=e.children;if(d.isValidElement(e.children)){const g=typeof e.children.props["aria-describedby"]=="string"?e.children.props["aria-describedby"]:void 0,I=s?[g,s].filter(Boolean).join(" "):g;p=d.cloneElement(e.children,{id:e.inputId,"aria-describedby":I||void 0,"aria-invalid":e.error?!0:e.children.props["aria-invalid"]})}return t.jsxs(T,{"data-attr-name":"Field",className:e.className,controlSize:n,children:[t.jsxs(j,{controlSize:n,children:[t.jsx("label",{htmlFor:e.inputId,children:t.jsxs(c,{as:"span",size:o,weight:"semibold",children:[e.label,e.required?" *":""]})}),e.action]}),p,t.jsx(U,{id:s,controlSize:n,children:e.error?t.jsx(c,{as:"span",size:o,tone:"danger",children:e.error}):t.jsx(c,{as:"span",size:o,tone:"muted",children:e.hint})})]})}i.__docgenInfo={description:"Molecule component that renders the Field primitive.",methods:[],displayName:"Field",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},inputId:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},hint:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},action:{required:!1,tsType:{name:"ReactNode"},description:""},controlSize:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:""}},composes:["HTMLAttributes"]};const H={title:"Molecules/Field",component:i,tags:["autodocs"]},a={render:function(){return t.jsxs(v,{gap:"sm",children:[t.jsx(i,{controlSize:"sm",inputId:"team-name-sm",label:"Team name (sm)",hint:"Used in release notifications",children:t.jsx(l,{controlSize:"sm",id:"team-name-sm",placeholder:"Core UI"})}),t.jsx(i,{controlSize:"md",inputId:"team-name-md",label:"Team name (md)",hint:"Used in release notifications",children:t.jsx(l,{controlSize:"md",id:"team-name-md",placeholder:"Core UI"})}),t.jsx(i,{controlSize:"lg",inputId:"team-name-lg",label:"Team name (lg)",hint:"Used in release notifications",children:t.jsx(l,{controlSize:"lg",id:"team-name-lg",placeholder:"Core UI"})})]})}},r={args:{label:"Team name",hint:"Used in release notifications",controlSize:"md",placeholder:"Core UI"},argTypes:{label:{control:"text"},hint:{control:"text"},controlSize:{control:"select",options:["sm","md","lg"]},placeholder:{control:"text"}},render:function(n){return t.jsx(i,{controlSize:n.controlSize,inputId:"team-name-playground",label:n.label,hint:n.hint,children:t.jsx(l,{controlSize:n.controlSize,id:"team-name-playground",placeholder:n.placeholder})})}};var h,S,z;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: function Render() {
    return <Stack gap="sm">
        <Field controlSize="sm" inputId="team-name-sm" label="Team name (sm)" hint="Used in release notifications">
          <Input controlSize="sm" id="team-name-sm" placeholder="Core UI" />
        </Field>
        <Field controlSize="md" inputId="team-name-md" label="Team name (md)" hint="Used in release notifications">
          <Input controlSize="md" id="team-name-md" placeholder="Core UI" />
        </Field>
        <Field controlSize="lg" inputId="team-name-lg" label="Team name (lg)" hint="Used in release notifications">
          <Input controlSize="lg" id="team-name-lg" placeholder="Core UI" />
        </Field>
      </Stack>;
  }
}`,...(z=(S=a.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var x,f,b;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: "Team name",
    hint: "Used in release notifications",
    controlSize: "md",
    placeholder: "Core UI"
  },
  argTypes: {
    label: {
      control: "text"
    },
    hint: {
      control: "text"
    },
    controlSize: {
      control: "select",
      options: ["sm", "md", "lg"]
    },
    placeholder: {
      control: "text"
    }
  },
  render: function Render(args: any) {
    return <Field controlSize={args.controlSize} inputId="team-name-playground" label={args.label} hint={args.hint}>
        <Input controlSize={args.controlSize} id="team-name-playground" placeholder={args.placeholder} />
      </Field>;
  }
}`,...(b=(f=r.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const B=["Showcase","Playground"];export{r as Playground,a as Showcase,B as __namedExportsOrder,H as default};
