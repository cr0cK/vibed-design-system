import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as N}from"./DesignSystemProvider-DUY45mW4.js";import{o as W,n as H}from"./neoMintTheme-fCNCX7GU.js";import{r as a}from"./index-C4lZkr4h.js";import{B as i}from"./Box-Cmoc61Tl.js";import{N as L}from"./Navbar-BEptgpyi.js";import{I as l}from"./Inline-BWffa32P.js";import{S as h}from"./Select-CVKpz3xO.js";import{G as x}from"./Grid-DxWJPjcd.js";import{S as V}from"./Sidebar-rNnY9jLA.js";import{S as t}from"./Stack-CeWigPj7.js";import{B as R}from"./Breadcrumb-Ce_xvkSF.js";import{P as G}from"./PageHeader-CeNntjqm.js";import{B as o}from"./Button-CXef72x6.js";import{A as Q}from"./Alert-NedfRil2.js";import{T as F}from"./Tabs-DqhEBpNn.js";import{C as f}from"./Card-CjDtNofe.js";import{T as n}from"./Text-DDuTvIDd.js";import{B as q}from"./Badge-5J7Jc_lu.js";import{S as p}from"./Stat-TT0nQhx_.js";import{T as J}from"./Table-D9XSuiKG.js";import{T as g}from"./Tag-Bn05qvo-.js";import{H as U}from"./Heading-arU6QW_P.js";import{I as v}from"./Input-CdteF-Kd.js";import{T as _}from"./Textarea-CE1dpb0F.js";import{S as K}from"./Switch-BXlsNIR0.js";import{C as X}from"./Checkbox-DP4YUIOk.js";import{D as Y}from"./Drawer-Cr1L8TeH.js";import{M as Z}from"./Modal-m6ip1dIR.js";import"./buildVariants-CfwgwYun.js";import"./DesignSystemContext-B42q4VCL.js";import"./Link-AUUY1_iE.js";import"./variantValue-VCXXWlxS.js";import"./Portal-GQXdu2oJ.js";import"./index-D17WIwkg.js";import"./index-0li_wt_e.js";import"./FocusTrap-D7L6Nql6.js";import"./ClickOutside-Dk9E0MtN.js";const He={title:"Showcase/Full Page Composition",component:i,parameters:{layout:"fullscreen",canvasMaxWidth:"full"}},u={render:function(){const[r,k]=a.useState("default-light"),[w,y]=a.useState("workspace"),[T,C]=a.useState("digest"),[B,D]=a.useState("overview"),[I,d]=a.useState(!1),[z,c]=a.useState(!1),[O,A]=a.useState(!0),[M,E]=a.useState(!0),P=typeof document>"u"?null:document.getElementById("full-page-shell");return e.jsx(N,{mode:r==="default-dark"?"dark":"light",theme:r==="orange-motion"?W:r==="neo-mint"?H:void 0,children:e.jsx(i,{id:"full-page-shell",position:"relative",children:e.jsxs(i,{surface:"background",minHeight:"screen",children:[e.jsxs(i,{children:[e.jsx(L,{brand:"Vibed Console",items:[{id:"workspace",label:"Workspace"},{id:"automation",label:"Automation"},{id:"insights",label:"Insights"}],activeItemId:w,onItemSelect:y,actions:e.jsx(l,{gap:"xs",align:"center",children:e.jsxs(h,{controlSize:"sm",value:r,onChange:function(m){k(m.target.value)},"aria-label":"Theme selector",children:[e.jsx("option",{value:"default-light",children:"Default Light"}),e.jsx("option",{value:"default-dark",children:"Default Dark"}),e.jsx("option",{value:"orange-motion",children:"Orange Motion"}),e.jsx("option",{value:"neo-mint",children:"Neo Mint"})]})})}),e.jsxs(x,{template:"app-shell",minHeight:"screen",children:[e.jsx(i,{as:"aside",surface:"surface",border:"subtle",borderSide:"right",minWidth:"zero",overflow:"hidden",children:e.jsx(V,{heading:"Control Center",activeItemId:T,onItemSelect:C,groups:[{id:"main",label:"Main",items:[{id:"overview",label:"Overview",icon:"◦"},{id:"digest",label:"Digest Builder",icon:"◦"},{id:"audience",label:"Audience",icon:"◦"}]},{id:"system",label:"System",items:[{id:"settings",label:"Settings",icon:"◦"},{id:"billing",label:"Billing",icon:"◦",disabled:!0}]}]})}),e.jsx(i,{as:"main",padding:"lg",border:"subtle",borderSide:"right",minWidth:"zero",children:e.jsxs(t,{gap:"md",children:[e.jsx(R,{items:[{label:"Workspace",href:"#"},{label:"Automations",href:"#"},{label:"Digest Builder"}]}),e.jsx(G,{heading:"Digest Builder",subtitle:"Compose, schedule, and monitor recurring digests.",actions:e.jsxs(l,{gap:"xs",children:[e.jsx(o,{tone:"neutral",controlSize:"sm",onClick:function(){d(!0)},children:"Open drawer"}),e.jsx(o,{controlSize:"sm",onClick:function(){c(!0)},children:"Open modal"})]})}),e.jsx(Q,{tone:"success",title:"Environment healthy",children:"Delivery workers are online and queue latency is below target."}),e.jsx(F,{items:[{id:"overview",label:"Overview"},{id:"automation",label:"Automation"},{id:"history",label:"History"}],value:B,onValueChange:D,panels:{overview:e.jsxs(t,{gap:"md",children:[e.jsxs(x,{columns:3,gap:"sm",children:[e.jsx(p,{label:"Active workflows",value:"24",trend:"+2 this week",tone:"success"}),e.jsx(p,{label:"Open issues",value:"3",trend:"-1 since yesterday",tone:"success"}),e.jsx(p,{label:"Escalations",value:"12",trend:"+4 today",tone:"danger"})]}),e.jsx(J,{columns:[{key:"name",header:"Automation"},{key:"owner",header:"Owner"},{key:"status",header:"Status",align:"right"}],rows:[{id:"r1",cells:{name:"Morning Pulse",owner:"Olivia",status:e.jsx(g,{tone:"success",children:"Active"})}},{id:"r2",cells:{name:"Ops Snapshot",owner:"Liam",status:e.jsx(g,{tone:"neutral",children:"Paused"})}},{id:"r3",cells:{name:"Weekly Brief",owner:"Emma",status:e.jsx(g,{tone:"danger",children:"Issue"})}}]})]}),automation:e.jsx(f,{title:"Automation summary",subtitle:"Current campaign",children:e.jsxs(t,{gap:"sm",children:[e.jsxs(l,{justify:"between",children:[e.jsx(n,{size:"sm",children:"Daily Digest"}),e.jsx(q,{tone:"success",children:"Live"})]}),e.jsx(n,{size:"sm",tone:"muted",children:"Runs every weekday at 9:00 AM ET"})]})}),history:e.jsx(f,{title:"Recent history",subtitle:"Last 7 days",children:e.jsxs(t,{gap:"xs",children:[e.jsx(n,{size:"sm",children:"Mon - Delivered (12,420)"}),e.jsx(n,{size:"sm",children:"Tue - Delivered (12,118)"}),e.jsx(n,{size:"sm",children:"Wed - Delayed (retry completed)"})]})})}})]})}),e.jsx(i,{as:"aside",padding:"lg",minWidth:"zero",overflow:"hidden",children:e.jsxs(t,{gap:"md",children:[e.jsx(U,{level:4,children:"Quick Setup"}),e.jsxs(t,{gap:"xs",children:[e.jsx(n,{size:"sm",weight:"semibold",children:"Name"}),e.jsx(v,{placeholder:"Daily executive digest"})]}),e.jsxs(t,{gap:"xs",children:[e.jsx(n,{size:"sm",weight:"semibold",children:"Audience"}),e.jsxs(h,{defaultValue:"leadership",children:[e.jsx("option",{value:"leadership",children:"Leadership"}),e.jsx("option",{value:"operations",children:"Operations"}),e.jsx("option",{value:"all",children:"All teams"})]})]}),e.jsxs(t,{gap:"xs",children:[e.jsx(n,{size:"sm",weight:"semibold",children:"Message"}),e.jsx(_,{rows:4,placeholder:"Share release, incidents, and key metrics."})]}),e.jsxs(t,{gap:"xs",children:[e.jsx(K,{checked:O,onCheckedChange:A,label:"Enable schedule"}),e.jsx(X,{checked:M,onChange:function(m){E(m.target.checked)},label:"Send digest notification"})]}),e.jsxs(l,{justify:"end",gap:"xs",children:[e.jsx(o,{tone:"neutral",children:"Cancel"}),e.jsx(o,{children:"Save"})]})]})})]}),e.jsx(i,{as:"footer",surface:"surface",border:"subtle",borderSide:"top",padding:"sm",children:e.jsxs(l,{justify:"between",align:"center",children:[e.jsx(n,{size:"sm",tone:"muted",children:"v0.1.0 • Vibed Design System demo workspace"}),e.jsx(n,{size:"sm",tone:"muted",children:"Status: synced 2 minutes ago"})]})})]}),e.jsx(Y,{open:I,side:"right",title:"Quick actions",overlayMode:"container",portalTarget:P,onClose:function(){d(!1)},children:e.jsxs(t,{gap:"sm",children:[e.jsx(n,{size:"sm",children:"Use this panel for contextual edits without leaving the page."}),e.jsxs(i,{children:[e.jsx(n,{size:"sm",weight:"semibold",children:"Priority"}),e.jsxs(h,{defaultValue:"normal",children:[e.jsx("option",{value:"low",children:"Low"}),e.jsx("option",{value:"normal",children:"Normal"}),e.jsx("option",{value:"high",children:"High"})]})]}),e.jsxs(i,{children:[e.jsx(n,{size:"sm",weight:"semibold",children:"Owner"}),e.jsx(v,{defaultValue:"Olivia Jones"})]}),e.jsxs(l,{justify:"end",gap:"xs",children:[e.jsx(o,{tone:"neutral",onClick:function(){d(!1)},children:"Cancel"}),e.jsx(o,{onClick:function(){d(!1)},children:"Save draft"})]})]})}),e.jsx(Z,{open:z,title:"Publish changes",onClose:function(){c(!1)},children:e.jsxs(t,{gap:"sm",children:[e.jsx(n,{size:"sm",children:"Ready to publish this automation setup to your workspace?"}),e.jsxs(l,{justify:"end",gap:"xs",children:[e.jsx(o,{tone:"neutral",onClick:function(){c(!1)},children:"Not now"}),e.jsx(o,{onClick:function(){c(!1)},children:"Publish"})]})]})})]})})})}};var b,S,j;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: function Render() {
    const [themeId, setThemeId] = useState("default-light");
    const [activeTopNav, setActiveTopNav] = useState("workspace");
    const [activeSidebar, setActiveSidebar] = useState("digest");
    const [activeTab, setActiveTab] = useState("overview");
    const [openDrawer, setOpenDrawer] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [scheduleEnabled, setScheduleEnabled] = useState(true);
    const [sendDigest, setSendDigest] = useState(true);
    const drawerTarget = typeof document === "undefined" ? null : document.getElementById("full-page-shell");
    return <DesignSystemProvider mode={themeId === "default-dark" ? "dark" : "light"} theme={themeId === "orange-motion" ? orangeMotionTheme : themeId === "neo-mint" ? neoMintTheme : undefined}>
        <Box id="full-page-shell" position="relative">
          <Box surface="background" minHeight="screen">
          <Box>
            <Navbar brand="Vibed Console" items={[{
              id: "workspace",
              label: "Workspace"
            }, {
              id: "automation",
              label: "Automation"
            }, {
              id: "insights",
              label: "Insights"
            }]} activeItemId={activeTopNav} onItemSelect={setActiveTopNav} actions={<Inline gap="xs" align="center">
                  <Select controlSize="sm" value={themeId} onChange={function onChange(event) {
                setThemeId(event.target.value);
              }} aria-label="Theme selector">
                    <option value="default-light">Default Light</option>
                    <option value="default-dark">Default Dark</option>
                    <option value="orange-motion">Orange Motion</option>
                    <option value="neo-mint">Neo Mint</option>
                  </Select>
                </Inline>} />

            <Grid template="app-shell" minHeight="screen">
              <Box as="aside" surface="surface" border="subtle" borderSide="right" minWidth="zero" overflow="hidden">
              <Sidebar heading="Control Center" activeItemId={activeSidebar} onItemSelect={setActiveSidebar} groups={[{
                  id: "main",
                  label: "Main",
                  items: [{
                    id: "overview",
                    label: "Overview",
                    icon: "◦"
                  }, {
                    id: "digest",
                    label: "Digest Builder",
                    icon: "◦"
                  }, {
                    id: "audience",
                    label: "Audience",
                    icon: "◦"
                  }]
                }, {
                  id: "system",
                  label: "System",
                  items: [{
                    id: "settings",
                    label: "Settings",
                    icon: "◦"
                  }, {
                    id: "billing",
                    label: "Billing",
                    icon: "◦",
                    disabled: true
                  }]
                }]} />
              </Box>

              <Box as="main" padding="lg" border="subtle" borderSide="right" minWidth="zero">
              <Stack gap="md">
                <Breadcrumb items={[{
                    label: "Workspace",
                    href: "#"
                  }, {
                    label: "Automations",
                    href: "#"
                  }, {
                    label: "Digest Builder"
                  }]} />

                <PageHeader heading="Digest Builder" subtitle="Compose, schedule, and monitor recurring digests." actions={<Inline gap="xs">
                      <Button tone="neutral" controlSize="sm" onClick={function onClick() {
                      setOpenDrawer(true);
                    }}>
                        Open drawer
                      </Button>
                      <Button controlSize="sm" onClick={function onClick() {
                      setOpenModal(true);
                    }}>
                        Open modal
                      </Button>
                    </Inline>} />

                <Alert tone="success" title="Environment healthy">
                  Delivery workers are online and queue latency is below target.
                </Alert>

                <Tabs items={[{
                    id: "overview",
                    label: "Overview"
                  }, {
                    id: "automation",
                    label: "Automation"
                  }, {
                    id: "history",
                    label: "History"
                  }]} value={activeTab} onValueChange={setActiveTab} panels={{
                    overview: <Stack gap="md">
                        <Grid columns={3} gap="sm">
                          <Stat label="Active workflows" value="24" trend="+2 this week" tone="success" />
                          <Stat label="Open issues" value="3" trend="-1 since yesterday" tone="success" />
                          <Stat label="Escalations" value="12" trend="+4 today" tone="danger" />
                        </Grid>
                        <Table columns={[{
                        key: "name",
                        header: "Automation"
                      }, {
                        key: "owner",
                        header: "Owner"
                      }, {
                        key: "status",
                        header: "Status",
                        align: "right"
                      }]} rows={[{
                        id: "r1",
                        cells: {
                          name: "Morning Pulse",
                          owner: "Olivia",
                          status: <Tag tone="success">Active</Tag>
                        }
                      }, {
                        id: "r2",
                        cells: {
                          name: "Ops Snapshot",
                          owner: "Liam",
                          status: <Tag tone="neutral">Paused</Tag>
                        }
                      }, {
                        id: "r3",
                        cells: {
                          name: "Weekly Brief",
                          owner: "Emma",
                          status: <Tag tone="danger">Issue</Tag>
                        }
                      }]} />
                      </Stack>,
                    automation: <Card title="Automation summary" subtitle="Current campaign">
                        <Stack gap="sm">
                          <Inline justify="between">
                            <Text size="sm">Daily Digest</Text>
                            <Badge tone="success">Live</Badge>
                          </Inline>
                          <Text size="sm" tone="muted">Runs every weekday at 9:00 AM ET</Text>
                        </Stack>
                      </Card>,
                    history: <Card title="Recent history" subtitle="Last 7 days">
                        <Stack gap="xs">
                          <Text size="sm">Mon - Delivered (12,420)</Text>
                          <Text size="sm">Tue - Delivered (12,118)</Text>
                          <Text size="sm">Wed - Delayed (retry completed)</Text>
                        </Stack>
                      </Card>
                  }} />

              </Stack>
              </Box>

              <Box as="aside" padding="lg" minWidth="zero" overflow="hidden">
              <Stack gap="md">
                <Heading level={4}>Quick Setup</Heading>

                <Stack gap="xs">
                  <Text size="sm" weight="semibold">Name</Text>
                  <Input placeholder="Daily executive digest" />
                </Stack>

                <Stack gap="xs">
                  <Text size="sm" weight="semibold">Audience</Text>
                  <Select defaultValue="leadership">
                    <option value="leadership">Leadership</option>
                    <option value="operations">Operations</option>
                    <option value="all">All teams</option>
                  </Select>
                </Stack>

                <Stack gap="xs">
                  <Text size="sm" weight="semibold">Message</Text>
                  <Textarea rows={4} placeholder="Share release, incidents, and key metrics." />
                </Stack>

                <Stack gap="xs">
                  <Switch checked={scheduleEnabled} onCheckedChange={setScheduleEnabled} label="Enable schedule" />
                  <Checkbox checked={sendDigest} onChange={function onChange(event) {
                      setSendDigest(event.target.checked);
                    }} label="Send digest notification" />
                </Stack>

                <Inline justify="end" gap="xs">
                  <Button tone="neutral">Cancel</Button>
                  <Button>Save</Button>
                </Inline>
              </Stack>
              </Box>
            </Grid>

            <Box as="footer" surface="surface" border="subtle" borderSide="top" padding="sm">
              <Inline justify="between" align="center">
                <Text size="sm" tone="muted">v0.1.0 • Vibed Design System demo workspace</Text>
                <Text size="sm" tone="muted">Status: synced 2 minutes ago</Text>
              </Inline>
            </Box>
          </Box>

          <Drawer open={openDrawer} side="right" title="Quick actions" overlayMode="container" portalTarget={drawerTarget} onClose={function onClose() {
            setOpenDrawer(false);
          }}>
            <Stack gap="sm">
              <Text size="sm">Use this panel for contextual edits without leaving the page.</Text>
              <Box>
                <Text size="sm" weight="semibold">Priority</Text>
                <Select defaultValue="normal">
                  <option value="low">Low</option>
                  <option value="normal">Normal</option>
                  <option value="high">High</option>
                </Select>
              </Box>
              <Box>
                <Text size="sm" weight="semibold">Owner</Text>
                <Input defaultValue="Olivia Jones" />
              </Box>
              <Inline justify="end" gap="xs">
                <Button tone="neutral" onClick={function onClick() {
                  setOpenDrawer(false);
                }}>Cancel</Button>
                <Button onClick={function onClick() {
                  setOpenDrawer(false);
                }}>Save draft</Button>
              </Inline>
            </Stack>
          </Drawer>

          <Modal open={openModal} title="Publish changes" onClose={function onClose() {
            setOpenModal(false);
          }}>
            <Stack gap="sm">
              <Text size="sm">Ready to publish this automation setup to your workspace?</Text>
              <Inline justify="end" gap="xs">
                <Button tone="neutral" onClick={function onClick() {
                  setOpenModal(false);
                }}>Not now</Button>
                <Button onClick={function onClick() {
                  setOpenModal(false);
                }}>Publish</Button>
              </Inline>
            </Stack>
          </Modal>
          </Box>
        </Box>
      </DesignSystemProvider>;
  }
}`,...(j=(S=u.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};const Le=["FullPage"];export{u as FullPage,Le as __namedExportsOrder,He as default};
