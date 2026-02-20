import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-Dd5juukg.js";import{M as c}from"./index-D4pmv5f2.js";import"./index-C4lZkr4h.js";import"./iframe-D6k5elsD.js";import"./index-D17WIwkg.js";import"./index-0li_wt_e.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function s(i){const n={br:"br",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Documentation/5. Roadmap",parameters:{options:{showPanel:!1}}}),`
`,e.jsx(n.h1,{id:"design-system-roadmap",children:"Design System Roadmap"}),`
`,e.jsx(n.p,{children:"Last updated: 2026-02-17"}),`
`,e.jsx(n.p,{children:"Status note:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Phases 1 to 5 are completed."}),`
`]}),`
`,e.jsx(n.h2,{id:"objective",children:"Objective"}),`
`,e.jsx(n.p,{children:"Deliver a pragmatic, composable React design system with strong accessibility, clear APIs, and production-ready docs."}),`
`,e.jsx(n.h2,{id:"phase-1-core-system-hardening---done",children:"Phase 1: Core System Hardening - DONE"}),`
`,e.jsxs(n.p,{children:["Status: Completed",e.jsx(n.br,{}),`
`,"Target: Week of 2026-02-16"]}),`
`,e.jsx(n.p,{children:"Scope:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Foundations/layout: ",e.jsx(n.code,{children:"Grid"}),", ",e.jsx(n.code,{children:"Container"}),", ",e.jsx(n.code,{children:"Spacer"}),", ",e.jsx(n.code,{children:"Divider"}),", ",e.jsx(n.code,{children:"Heading"}),", ",e.jsx(n.code,{children:"Link"})]}),`
`,e.jsxs(n.li,{children:["Controls: ",e.jsx(n.code,{children:"ButtonGroup"}),", ",e.jsx(n.code,{children:"Checkbox"}),", ",e.jsx(n.code,{children:"Radio"}),", ",e.jsx(n.code,{children:"Switch"})]}),`
`,e.jsxs(n.li,{children:["Inputs/forms: ",e.jsx(n.code,{children:"Textarea"}),", ",e.jsx(n.code,{children:"Select"}),", ",e.jsx(n.code,{children:"FormControl"}),", ",e.jsx(n.code,{children:"HelperText"})]}),`
`,e.jsxs(n.li,{children:["Feedback: ",e.jsx(n.code,{children:"Badge"}),", ",e.jsx(n.code,{children:"Alert"}),", ",e.jsx(n.code,{children:"Spinner"}),", ",e.jsx(n.code,{children:"Skeleton"})]}),`
`,e.jsxs(n.li,{children:["Navigation: ",e.jsx(n.code,{children:"Tabs"}),", ",e.jsx(n.code,{children:"Breadcrumb"}),", ",e.jsx(n.code,{children:"Pagination"})]}),`
`,e.jsxs(n.li,{children:["Overlays: ",e.jsx(n.code,{children:"Modal"}),", ",e.jsx(n.code,{children:"Drawer"}),", ",e.jsx(n.code,{children:"Tooltip"}),", ",e.jsx(n.code,{children:"Popover"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Acceptance criteria:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"pnpm typecheck"})," passes at workspace level."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"pnpm build"})," succeeds for ",e.jsx(n.code,{children:"@vibed/design-system"}),"."]}),`
`,e.jsx(n.li,{children:"Storybook stories exist for each Phase 1 family."}),`
`,e.jsxs(n.li,{children:["Components follow patterns:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"explicit props interfaces"}),`
`,e.jsx(n.li,{children:"no prop destructuring in function signature"}),`
`,e.jsxs(n.li,{children:["styles declared outside renderer via ",e.jsx(n.code,{children:"styled.*"})]}),`
`,e.jsxs(n.li,{children:["style logic composed with ",e.jsx(n.code,{children:"buildVariants(props)"})]}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:"Basic accessibility in place for interactive components (roles, labels, focus states)."}),`
`]}),`
`,e.jsx(n.h2,{id:"phase-11-accessibility--interaction-pass---done",children:"Phase 1.1: Accessibility + Interaction Pass - DONE"}),`
`,e.jsxs(n.p,{children:["Status: Completed",e.jsx(n.br,{}),`
`,"Target: Week of 2026-02-23"]}),`
`,e.jsx(n.p,{children:"Scope:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Tabs keyboard behavior: arrow/home/end."}),`
`,e.jsx(n.li,{children:"Modal/drawer keyboard close and focus handling."}),`
`,e.jsx(n.li,{children:"Popover/tooltip keyboard triggers and escape behavior."}),`
`,e.jsxs(n.li,{children:["Form hint/error wiring (",e.jsx(n.code,{children:"aria-invalid"}),", ",e.jsx(n.code,{children:"aria-describedby"}),")."]}),`
`]}),`
`,e.jsx(n.p,{children:"Acceptance criteria:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Keyboard flows verified for overlays/tabs."}),`
`,e.jsx(n.li,{children:"Screen-reader labels and control relationships are present."}),`
`,e.jsx(n.li,{children:"No console a11y warnings in story examples."}),`
`]}),`
`,e.jsx(n.h2,{id:"phase-2-advanced-inputs--data---done",children:"Phase 2: Advanced Inputs + Data - DONE"}),`
`,e.jsxs(n.p,{children:["Status: Completed",e.jsx(n.br,{}),`
`,"Target: Weeks of 2026-03-02 and 2026-03-09"]}),`
`,e.jsx(n.p,{children:"Scope:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Inputs: ",e.jsx(n.code,{children:"NumberInput"}),", ",e.jsx(n.code,{children:"Slider"}),", ",e.jsx(n.code,{children:"RangeSlider"}),", ",e.jsx(n.code,{children:"DatePicker"}),", ",e.jsx(n.code,{children:"DateRangePicker"})]}),`
`,e.jsxs(n.li,{children:["Selection: ",e.jsx(n.code,{children:"Combobox"}),", ",e.jsx(n.code,{children:"Autocomplete"}),", ",e.jsx(n.code,{children:"MultiSelect"}),", ",e.jsx(n.code,{children:"CommandPalette"})]}),`
`,e.jsxs(n.li,{children:["Data display: ",e.jsx(n.code,{children:"Table"}),", ",e.jsx(n.code,{children:"DataList"}),", ",e.jsx(n.code,{children:"Stat"}),", ",e.jsx(n.code,{children:"Avatar"}),", ",e.jsx(n.code,{children:"AvatarGroup"}),", ",e.jsx(n.code,{children:"Tag"}),", ",e.jsx(n.code,{children:"Progress"})]}),`
`,e.jsxs(n.li,{children:["Feedback: ",e.jsx(n.code,{children:"Toast"}),", ",e.jsx(n.code,{children:"EmptyState"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Acceptance criteria:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Every new component has at least one story with real composition usage."}),`
`,e.jsx(n.li,{children:"Controlled + uncontrolled API behavior documented where relevant."}),`
`,e.jsx(n.li,{children:"State-heavy components include focused interaction tests."}),`
`]}),`
`,e.jsx(n.h2,{id:"phase-3-navigation--app-patterns---done",children:"Phase 3: Navigation + App Patterns - DONE"}),`
`,e.jsxs(n.p,{children:["Status: Completed",e.jsx(n.br,{}),`
`,"Target: Weeks of 2026-03-16 and 2026-03-23"]}),`
`,e.jsx(n.p,{children:"Scope:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Navigation: ",e.jsx(n.code,{children:"Menu"}),", ",e.jsx(n.code,{children:"DropdownMenu"}),", ",e.jsx(n.code,{children:"Navbar"}),", ",e.jsx(n.code,{children:"Sidebar"}),", ",e.jsx(n.code,{children:"StepIndicator"})]}),`
`,e.jsxs(n.li,{children:["Overlays advanced: ",e.jsx(n.code,{children:"Dialog"})," variants, ",e.jsx(n.code,{children:"Sheet"})]}),`
`,e.jsxs(n.li,{children:["App composition: ",e.jsx(n.code,{children:"PageHeader"}),", ",e.jsx(n.code,{children:"FilterBar"}),", ",e.jsx(n.code,{children:"SearchBar"}),", ",e.jsx(n.code,{children:"SettingsPanel"})]}),`
`,e.jsxs(n.li,{children:["Utilities: ",e.jsx(n.code,{children:"Portal"}),", ",e.jsx(n.code,{children:"VisuallyHidden"}),", ",e.jsx(n.code,{children:"FocusTrap"}),", ",e.jsx(n.code,{children:"ClickOutside"}),", transition helpers"]}),`
`]}),`
`,e.jsx(n.p,{children:"Acceptance criteria:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Pattern components compose existing atoms/molecules first."}),`
`,e.jsx(n.li,{children:"APIs stay minimal and consistent with existing naming."}),`
`,e.jsx(n.li,{children:"Storybook showcases realistic end-to-end UI flows."}),`
`]}),`
`,e.jsx(n.h2,{id:"phase-4-quality--distribution---done",children:"Phase 4: Quality + Distribution - DONE"}),`
`,e.jsxs(n.p,{children:["Status: Completed",e.jsx(n.br,{}),`
`,"Target: Weeks of 2026-03-30 and 2026-04-06"]}),`
`,e.jsx(n.p,{children:"Scope:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Expand interaction and accessibility tests."}),`
`,e.jsx(n.li,{children:"Finalize token/theming docs and examples."}),`
`,e.jsx(n.li,{children:"Add release/versioning workflow polish."}),`
`,e.jsx(n.li,{children:"Tighten changelog and migration guidance."}),`
`]}),`
`,e.jsx(n.p,{children:"Acceptance criteria:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"CI validates typecheck/build/storybook build."}),`
`,e.jsx(n.li,{children:"Publish flow is repeatable and documented."}),`
`,e.jsx(n.li,{children:"Consumers can adopt components with clear migration notes."}),`
`]}),`
`,e.jsx(n.h2,{id:"phase-5-first-class-system-maturity---done",children:"Phase 5: First-Class System Maturity - DONE"}),`
`,e.jsxs(n.p,{children:["Status: Completed",e.jsx(n.br,{}),`
`,"Target: Weeks of 2026-04-13 and 2026-04-20"]}),`
`,e.jsx(n.p,{children:"Objective:"}),`
`,e.jsx(n.p,{children:"Move from a strong component library to a first-class design system with production-grade accessibility, reliability, and governance."}),`
`,e.jsx(n.p,{children:"Scope:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Accessibility hardening:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["overlay parity (",e.jsx(n.code,{children:"Modal"}),", ",e.jsx(n.code,{children:"Drawer"}),", ",e.jsx(n.code,{children:"Sheet"}),", ",e.jsx(n.code,{children:"Popover"}),", ",e.jsx(n.code,{children:"CommandPalette"}),") with shared focus/outside-click/escape patterns"]}),`
`,e.jsx(n.li,{children:"keyboard and screen-reader behavior audit across interactive components"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Testing and quality gates:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["interaction tests for state-heavy components (",e.jsx(n.code,{children:"Select"}),", ",e.jsx(n.code,{children:"Combobox"}),", ",e.jsx(n.code,{children:"Autocomplete"}),", ",e.jsx(n.code,{children:"MultiSelect"}),", overlays)"]}),`
`,e.jsx(n.li,{children:"visual regression snapshots for theme + control-size permutations"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["API and consistency:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"standardized DOM props passthrough policy (forward attrs or narrow interfaces)"}),`
`,e.jsx(n.li,{children:"align naming and controlled/uncontrolled behavior docs across form primitives"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Theming and token robustness:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["semantic token tiers (",e.jsx(n.code,{children:"surface"}),", ",e.jsx(n.code,{children:"interactive"}),", ",e.jsx(n.code,{children:"feedback"}),", ",e.jsx(n.code,{children:"text"}),") with guidance and usage contracts"]}),`
`,e.jsx(n.li,{children:"dark/light parity checks and contrast validation for all shipped themes"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Distribution and governance:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"deprecation policy + compatibility matrix in docs"}),`
`,e.jsxs(n.li,{children:["component lifecycle states (",e.jsx(n.code,{children:"alpha"}),", ",e.jsx(n.code,{children:"beta"}),", ",e.jsx(n.code,{children:"stable"}),", ",e.jsx(n.code,{children:"deprecated"}),") surfaced in Storybook"]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"Acceptance criteria:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Critical interactive components have automated interaction + a11y tests in CI."}),`
`,e.jsx(n.li,{children:"Overlay components share a consistent behavior contract and utility composition."}),`
`,e.jsx(n.li,{children:"API consistency rules are documented and enforced for new components."}),`
`,e.jsx(n.li,{children:"Theme tokens pass contrast checks for key UI states (default/hover/focus/disabled/error)."}),`
`,e.jsx(n.li,{children:"Storybook clearly communicates component maturity and migration/deprecation paths."}),`
`]}),`
`,e.jsx(n.p,{children:"Delivered in this phase:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Overlay parity implemented using shared utilities (",e.jsx(n.code,{children:"Portal"}),", ",e.jsx(n.code,{children:"FocusTrap"}),", ",e.jsx(n.code,{children:"ClickOutside"}),") across ",e.jsx(n.code,{children:"Modal"}),", ",e.jsx(n.code,{children:"Drawer"}),", ",e.jsx(n.code,{children:"Sheet"}),", ",e.jsx(n.code,{children:"Popover"}),", and ",e.jsx(n.code,{children:"CommandPalette"}),"."]}),`
`,e.jsxs(n.li,{children:["Consistent close behavior for overlays:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"outside click close"}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Escape"})," close"]}),`
`,e.jsx(n.li,{children:"focus trap + focus return on close"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Overlay mounting strategy aligned:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["viewport overlays mount through ",e.jsx(n.code,{children:"Portal"})]}),`
`,e.jsxs(n.li,{children:["container overlays supported where needed (",e.jsx(n.code,{children:"Drawer"}),", ",e.jsx(n.code,{children:"Sheet"}),") via ",e.jsx(n.code,{children:"overlayMode"})]}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:"DOM attribute passthrough improved in shared utilities for better host integration."}),`
`,e.jsx(n.li,{children:"Storybook stories updated to demonstrate overlay behavior variants."}),`
`,e.jsxs(n.li,{children:["Playwright verification completed on built Storybook (",e.jsx(n.code,{children:"Modal"}),", ",e.jsx(n.code,{children:"Drawer"}),", ",e.jsx(n.code,{children:"Sheet"}),", ",e.jsx(n.code,{children:"Popover"}),", ",e.jsx(n.code,{children:"CommandPalette"}),") for open/close/focus interactions."]}),`
`,e.jsx(n.li,{children:"Automated Playwright E2E suite added for Phase 5 critical interactions and wired into CI."}),`
`,e.jsxs(n.li,{children:["Automated ",e.jsx(n.code,{children:"axe-core"})," checks added to Playwright flows, including dialog accessibility validation."]}),`
`]}),`
`,e.jsx(n.p,{children:"Carry-over to next phases:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Expand CI automation from current critical overlay/select flows to a full state-heavy component matrix (",e.jsx(n.code,{children:"Combobox"}),", ",e.jsx(n.code,{children:"Autocomplete"}),", ",e.jsx(n.code,{children:"MultiSelect"}),", ",e.jsx(n.code,{children:"Date*"}),", table interactions)."]}),`
`]}),`
`,e.jsx(n.h2,{id:"phase-6-adoption-and-scale",children:"Phase 6: Adoption and Scale"}),`
`,e.jsxs(n.p,{children:["Status: Planned",e.jsx(n.br,{}),`
`,"Target: Weeks of 2026-04-27 and 2026-05-04"]}),`
`,e.jsx(n.p,{children:"Scope:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Provide starter templates and reference app integrations."}),`
`,e.jsx(n.li,{children:"Add codemod support for common API migrations."}),`
`,e.jsx(n.li,{children:"Add telemetry-ready examples (optional instrumentation hooks)."}),`
`,e.jsx(n.li,{children:"Publish an adoption playbook for teams (rollout strategy, QA checklist, contribution workflow)."}),`
`]}),`
`,e.jsx(n.p,{children:"Acceptance criteria:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"New consumers can bootstrap with documented templates."}),`
`,e.jsx(n.li,{children:"Breaking migrations have codemod or script-assisted paths."}),`
`,e.jsx(n.li,{children:"Adoption playbook is available in Storybook docs."}),`
`]}),`
`,e.jsx(n.h2,{id:"phase-7-performance-and-runtime-guarantees",children:"Phase 7: Performance and Runtime Guarantees"}),`
`,e.jsxs(n.p,{children:["Status: Planned",e.jsx(n.br,{}),`
`,"Target: Weeks of 2026-05-11 and 2026-05-18"]}),`
`,e.jsx(n.p,{children:"Scope:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Establish component performance budgets for render cost and interaction latency."}),`
`,e.jsxs(n.li,{children:["Add bundle-size budgets and package-level tracking for ",e.jsx(n.code,{children:"@vibed/design-system"}),"."]}),`
`,e.jsxs(n.li,{children:["Reduce avoidable re-renders in stateful components (",e.jsx(n.code,{children:"Table"}),", ",e.jsx(n.code,{children:"MultiSelect"}),", ",e.jsx(n.code,{children:"Combobox"}),", overlays)."]}),`
`,e.jsx(n.li,{children:"Add runtime safety checks in development mode for invalid prop combinations."}),`
`]}),`
`,e.jsx(n.p,{children:"Acceptance criteria:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"CI enforces bundle-size thresholds with regression alerts."}),`
`,e.jsx(n.li,{children:"Interaction-heavy stories meet agreed latency budgets on baseline hardware."}),`
`,e.jsx(n.li,{children:"Perf-sensitive components include memoization and stable callback patterns where needed."}),`
`,e.jsx(n.li,{children:"Runtime invariant warnings exist for known invalid API combinations."}),`
`]}),`
`,e.jsx(n.h2,{id:"phase-8-token-pipeline-and-platform-readiness",children:"Phase 8: Token Pipeline and Platform Readiness"}),`
`,e.jsxs(n.p,{children:["Status: Planned",e.jsx(n.br,{}),`
`,"Target: Weeks of 2026-05-25 and 2026-06-01"]}),`
`,e.jsx(n.p,{children:"Scope:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Add token export pipeline for multiple targets (CSS vars, JSON, optional native/mobile format)."}),`
`,e.jsx(n.li,{children:"Define token versioning strategy and compatibility rules."}),`
`,e.jsx(n.li,{children:"Provide theme validation tooling (contrast checks + missing token detection)."}),`
`,e.jsx(n.li,{children:"Add integration guides for app frameworks and SSR environments."}),`
`]}),`
`,e.jsx(n.p,{children:"Acceptance criteria:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Token artifacts are generated from a single source of truth."}),`
`,e.jsx(n.li,{children:"Theme validation runs in CI and blocks invalid token sets."}),`
`,e.jsx(n.li,{children:"Consumers can adopt tokens independently from components."}),`
`,e.jsx(n.li,{children:"SSR/framework integration docs are published in Storybook."}),`
`]}),`
`,e.jsx(n.h2,{id:"working-rules-all-phases",children:"Working rules (all phases)"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Prefer composability over large all-in-one components."}),`
`,e.jsxs(n.li,{children:["Keep state slices small and local (",e.jsx(n.code,{children:"zustand"})," + context only where needed)."]}),`
`,e.jsx(n.li,{children:"Add docs/stories in the same PR as component changes."}),`
`,e.jsx(n.li,{children:"Keep visual language consistent with tokenized values."}),`
`]})]})}function m(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{m as default};
