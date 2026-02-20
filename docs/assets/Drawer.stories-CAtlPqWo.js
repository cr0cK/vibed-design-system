import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./index-C4lZkr4h.js";import{D as c}from"./Drawer-Cr1L8TeH.js";import{S as i}from"./Stack-CeWigPj7.js";import{T as r}from"./Text-DDuTvIDd.js";import{I as w}from"./Input-CdteF-Kd.js";import{B as l}from"./Button-CXef72x6.js";import{S as d}from"./Select-CVKpz3xO.js";import{B as m}from"./Box-Cmoc61Tl.js";import{S as D}from"./Switch-BXlsNIR0.js";import"./buildVariants-CfwgwYun.js";import"./Heading-arU6QW_P.js";import"./Portal-GQXdu2oJ.js";import"./index-D17WIwkg.js";import"./index-0li_wt_e.js";import"./FocusTrap-D7L6Nql6.js";import"./ClickOutside-Dk9E0MtN.js";import"./variantValue-VCXXWlxS.js";const J={title:"Organisms/Drawer",component:c,tags:["autodocs"]},o={render:function(){const[n,s]=a.useState(!1),[p,j]=a.useState("viewport"),[k,C]=a.useState(!0);return e.jsxs(i,{gap:"sm",children:[e.jsxs(d,{value:p,onChange:function(M){j(M.target.value)},children:[e.jsx("option",{value:"viewport",children:"viewport"}),e.jsx("option",{value:"container",children:"container"})]}),e.jsx(l,{tone:"neutral",onClick:function(){s(!0)},children:"Open drawer"}),e.jsx(c,{open:n,overlayMode:p,onClose:function(){s(!1)},children:e.jsxs(i,{gap:"sm",children:[e.jsx(r,{size:"sm",children:"Quick preferences for this workspace."}),e.jsxs(m,{children:[e.jsx(r,{size:"sm",weight:"semibold",children:"Channel"}),e.jsxs(d,{defaultValue:"ops",children:[e.jsx("option",{value:"ops",children:"Operations"}),e.jsx("option",{value:"exec",children:"Executive"}),e.jsx("option",{value:"all",children:"All teams"})]})]}),e.jsxs(m,{children:[e.jsx(r,{size:"sm",weight:"semibold",children:"Digest title"}),e.jsx(w,{defaultValue:"Daily summary"})]}),e.jsx(D,{checked:k,onCheckedChange:C,label:"Send notifications"}),e.jsx(l,{tone:"primary",children:"Apply changes"})]})})]})}},t={args:{open:!0,side:"right",overlayMode:"container"},argTypes:{open:{control:"boolean"},side:{control:"select",options:["left","right"]},overlayMode:{control:"select",options:["container","viewport"]}},render:function(n){return e.jsx(c,{open:n.open,side:n.side,overlayMode:n.overlayMode,title:"Quick preferences",onClose:function(){},children:e.jsxs(i,{gap:"sm",children:[e.jsx(r,{size:"sm",children:"Quick preferences for this workspace."}),e.jsx(w,{defaultValue:"Daily summary"}),e.jsx(l,{tone:"primary",children:"Apply changes"})]})})}};var f,h,x;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    const [overlayMode, setOverlayMode] = useState<NonNullable<DrawerProps["overlayMode"]>>("viewport");
    const [notifications, setNotifications] = useState(true);
    return <Stack gap="sm">
      <Select value={overlayMode} onChange={function onChange(event) {
        setOverlayMode(event.target.value as NonNullable<DrawerProps["overlayMode"]>);
      }}>
        <option value="viewport">viewport</option>
        <option value="container">container</option>
      </Select>
      <Button tone="neutral" onClick={function onClick() {
        setOpen(true);
      }}>Open drawer</Button>
      <Drawer open={open} overlayMode={overlayMode} onClose={function onClose() {
        setOpen(false);
      }}>
        <Stack gap="sm">
          <Text size="sm">Quick preferences for this workspace.</Text>
          <Box>
            <Text size="sm" weight="semibold">Channel</Text>
            <Select defaultValue="ops">
              <option value="ops">Operations</option>
              <option value="exec">Executive</option>
              <option value="all">All teams</option>
            </Select>
          </Box>
          <Box>
            <Text size="sm" weight="semibold">Digest title</Text>
            <Input defaultValue="Daily summary" />
          </Box>
          <Switch checked={notifications} onCheckedChange={setNotifications} label="Send notifications" />
          <Button tone="primary">Apply changes</Button>
        </Stack>
      </Drawer>
    </Stack>;
  }
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var v,g,y;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    open: true,
    side: "right",
    overlayMode: "container"
  },
  argTypes: {
    open: {
      control: "boolean"
    },
    side: {
      control: "select",
      options: ["left", "right"]
    },
    overlayMode: {
      control: "select",
      options: ["container", "viewport"]
    }
  },
  render: function Render(args: any) {
    return <Drawer open={args.open} side={args.side} overlayMode={args.overlayMode} title="Quick preferences" onClose={function onClose() {}}>
        <Stack gap="sm">
          <Text size="sm">Quick preferences for this workspace.</Text>
          <Input defaultValue="Daily summary" />
          <Button tone="primary">Apply changes</Button>
        </Stack>
      </Drawer>;
  }
}`,...(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const K=["Showcase","Playground"];export{t as Playground,o as Showcase,K as __namedExportsOrder,J as default};
