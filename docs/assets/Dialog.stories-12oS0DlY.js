import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as y}from"./index-C4lZkr4h.js";import{M as x}from"./Modal-m6ip1dIR.js";import{S as v}from"./Stack-CeWigPj7.js";import{T as c}from"./Text-DDuTvIDd.js";import{I as T}from"./Inline-BWffa32P.js";import{B as l}from"./Button-CXef72x6.js";import"./buildVariants-CfwgwYun.js";import"./Heading-arU6QW_P.js";import"./Portal-GQXdu2oJ.js";import"./index-D17WIwkg.js";import"./index-0li_wt_e.js";import"./FocusTrap-D7L6Nql6.js";import"./ClickOutside-Dk9E0MtN.js";import"./variantValue-VCXXWlxS.js";function a(e){const t=e.variant??"info",i=t==="destructive"?"danger":"primary",s=e.confirmLabel??(t==="confirm"?"Confirm":t==="destructive"?"Delete":"Done"),C=e.cancelLabel??"Cancel";return n.jsx(x,{"data-attr-name":"Dialog",open:e.open,title:e.title,onClose:e.onClose,children:n.jsxs(v,{gap:"sm",children:[e.description?n.jsx(c,{size:"sm",tone:"muted",children:e.description}):null,n.jsxs(T,{gap:"xs",justify:"end",children:[n.jsx(l,{tone:"neutral",size:"sm",onClick:function(){e.onCancel&&e.onCancel(),e.onClose()},children:C}),n.jsx(l,{tone:i,size:"sm",onClick:function(){e.onConfirm&&e.onConfirm(),e.onClose()},children:s})]})]})})}a.__docgenInfo={description:"Organism component that renders the Dialog primitive.",methods:[],displayName:"Dialog",props:{open:{required:!0,tsType:{name:"boolean"},description:""},title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"info" | "confirm" | "destructive"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"confirm"'},{name:"literal",value:'"destructive"'}]},description:""},confirmLabel:{required:!1,tsType:{name:"string"},description:""},cancelLabel:{required:!1,tsType:{name:"string"},description:""},onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["HTMLAttributes"]};const I={title:"Organisms/Dialog",component:a,tags:["autodocs"]},o={render:function(){const[t,i]=y.useState(!1);return n.jsxs(v,{gap:"sm",children:[n.jsx(l,{tone:"primary",onClick:function(){i(!0)},children:"Open dialog"}),n.jsx(a,{open:t,variant:"confirm",title:"Publish automation",description:n.jsx(c,{size:"sm",children:"This will activate all delivery channels."}),onClose:function(){i(!1)}})]})}},r={args:{variant:"confirm",title:"Publish automation",open:!0},argTypes:{variant:{control:"select",options:["confirm","danger","info"]},title:{control:"text"},open:{control:"boolean"}},render:function(t){return n.jsx(a,{open:t.open,variant:t.variant,title:t.title,description:n.jsx(c,{size:"sm",children:"This will activate all delivery channels."}),onClose:function(){}})}};var m,u,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    return <Stack gap="sm">
      <Button tone="primary" onClick={function onClick() {
        setOpen(true);
      }}>Open dialog</Button>
      <Dialog open={open} variant="confirm" title="Publish automation" description={<Text size="sm">This will activate all delivery channels.</Text>} onClose={function onClose() {
        setOpen(false);
      }} />
    </Stack>;
  }
}`,...(d=(u=o.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var p,f,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: "confirm",
    title: "Publish automation",
    open: true
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["confirm", "danger", "info"]
    },
    title: {
      control: "text"
    },
    open: {
      control: "boolean"
    }
  },
  render: function Render(args: any) {
    return <Dialog open={args.open} variant={args.variant} title={args.title} description={<Text size="sm">This will activate all delivery channels.</Text>} onClose={function onClose() {}} />;
  }
}`,...(g=(f=r.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const M=["Showcase","Playground"];export{r as Playground,o as Showcase,M as __namedExportsOrder,I as default};
