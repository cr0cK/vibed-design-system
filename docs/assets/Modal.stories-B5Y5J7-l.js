import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as C}from"./index-C4lZkr4h.js";import{M as s}from"./Modal-m6ip1dIR.js";import{T as u}from"./Text-DDuTvIDd.js";import{S as h}from"./Stack-CeWigPj7.js";import{B as x}from"./Button-CXef72x6.js";import"./buildVariants-CfwgwYun.js";import"./Heading-arU6QW_P.js";import"./Portal-GQXdu2oJ.js";import"./index-D17WIwkg.js";import"./index-0li_wt_e.js";import"./FocusTrap-D7L6Nql6.js";import"./ClickOutside-Dk9E0MtN.js";import"./variantValue-VCXXWlxS.js";const B={title:"Organisms/Modal",component:s,tags:["autodocs"]},n={render:function(){const[o,r]=C.useState(!1);return e.jsxs(h,{gap:"sm",children:[e.jsx(x,{tone:"primary",onClick:function(){r(!0)},children:"Open modal"}),e.jsx(s,{open:o,title:"Confirm release",onClose:function(){r(!1)},children:e.jsx(u,{size:"sm",children:"Promote this release to stable?"})})]})}},t={args:{open:!0,title:"Confirm release",showCloseIcon:!0},argTypes:{open:{control:"boolean"},title:{control:"text"},showCloseIcon:{control:"boolean"}},render:function(o){return e.jsx(s,{open:o.open,title:o.title,showCloseIcon:o.showCloseIcon,onClose:function(){},children:e.jsx(u,{size:"sm",children:"Promote this release to stable?"})})}};var a,l,i;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    return <Stack gap="sm">
      <Button tone="primary" onClick={function onClick() {
        setOpen(true);
      }}>Open modal</Button>
      <Modal open={open} title="Confirm release" onClose={function onClose() {
        setOpen(false);
      }}>
        <Text size="sm">Promote this release to stable?</Text>
      </Modal>
    </Stack>;
  }
}`,...(i=(l=n.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var c,m,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    open: true,
    title: "Confirm release",
    showCloseIcon: true
  },
  argTypes: {
    open: {
      control: "boolean"
    },
    title: {
      control: "text"
    },
    showCloseIcon: {
      control: "boolean"
    }
  },
  render: function Render(args: any) {
    return <Modal open={args.open} title={args.title} showCloseIcon={args.showCloseIcon} onClose={function onClose() {}}>
        <Text size="sm">Promote this release to stable?</Text>
      </Modal>;
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const E=["Showcase","Playground"];export{t as Playground,n as Showcase,E as __namedExportsOrder,B as default};
