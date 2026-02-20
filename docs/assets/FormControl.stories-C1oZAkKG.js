import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{F as t}from"./FormControl-CHxtCmVJ.js";import{S as l}from"./Select-CVKpz3xO.js";import{S as u}from"./Stack-CeWigPj7.js";import"./index-C4lZkr4h.js";import"./buildVariants-CfwgwYun.js";import"./HelperText-DaMXUXYw.js";const F={title:"Molecules/FormControl",component:t,tags:["autodocs"]},r={render:function(){return o.jsxs(u,{gap:"sm",children:[o.jsx(t,{controlSize:"sm",label:"Plan (sm)",htmlFor:"plan-sm",hint:"Pick one option",children:o.jsxs(l,{controlSize:"sm",id:"plan-sm",defaultValue:"starter",children:[o.jsx("option",{value:"starter",children:"Starter"}),o.jsx("option",{value:"pro",children:"Pro"})]})}),o.jsx(t,{controlSize:"md",label:"Plan (md)",htmlFor:"plan-md",hint:"Pick one option",children:o.jsxs(l,{controlSize:"md",id:"plan-md",defaultValue:"starter",children:[o.jsx("option",{value:"starter",children:"Starter"}),o.jsx("option",{value:"pro",children:"Pro"})]})}),o.jsx(t,{controlSize:"lg",label:"Plan (lg)",htmlFor:"plan-lg",hint:"Pick one option",children:o.jsxs(l,{controlSize:"lg",id:"plan-lg",defaultValue:"starter",children:[o.jsx("option",{value:"starter",children:"Starter"}),o.jsx("option",{value:"pro",children:"Pro"})]})})]})}},e={args:{label:"Plan",hint:"Pick one option",controlSize:"md",value:"starter"},argTypes:{label:{control:"text"},hint:{control:"text"},controlSize:{control:"select",options:["sm","md","lg"]},value:{control:"select",options:["starter","pro"]}},render:function(n){return o.jsx(t,{controlSize:n.controlSize,label:n.label,htmlFor:"plan-playground",hint:n.hint,children:o.jsxs(l,{controlSize:n.controlSize,id:"plan-playground",value:n.value,onChange:function(){},children:[o.jsx("option",{value:"starter",children:"Starter"}),o.jsx("option",{value:"pro",children:"Pro"})]})})}};var a,i,s;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: function Render() {
    return <Stack gap="sm">
        <FormControl controlSize="sm" label="Plan (sm)" htmlFor="plan-sm" hint="Pick one option">
          <Select controlSize="sm" id="plan-sm" defaultValue="starter">
            <option value="starter">Starter</option>
            <option value="pro">Pro</option>
          </Select>
        </FormControl>
        <FormControl controlSize="md" label="Plan (md)" htmlFor="plan-md" hint="Pick one option">
          <Select controlSize="md" id="plan-md" defaultValue="starter">
            <option value="starter">Starter</option>
            <option value="pro">Pro</option>
          </Select>
        </FormControl>
        <FormControl controlSize="lg" label="Plan (lg)" htmlFor="plan-lg" hint="Pick one option">
          <Select controlSize="lg" id="plan-lg" defaultValue="starter">
            <option value="starter">Starter</option>
            <option value="pro">Pro</option>
          </Select>
        </FormControl>
      </Stack>;
  }
}`,...(s=(i=r.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var c,p,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: "Plan",
    hint: "Pick one option",
    controlSize: "md",
    value: "starter"
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
    value: {
      control: "select",
      options: ["starter", "pro"]
    }
  },
  render: function Render(args: any) {
    return <FormControl controlSize={args.controlSize} label={args.label} htmlFor="plan-playground" hint={args.hint}>
        <Select controlSize={args.controlSize} id="plan-playground" value={args.value} onChange={function onChange() {}}>
          <option value="starter">Starter</option>
          <option value="pro">Pro</option>
        </Select>
      </FormControl>;
  }
}`,...(d=(p=e.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const f=["Showcase","Playground"];export{e as Playground,r as Showcase,f as __namedExportsOrder,F as default};
