"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8604],{88140:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>d,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=t(25773),o=(t(27378),t(35318)),l=t(80621),i=t(82544);t(23389),t(54479);const r={title:"Radio",description:"The Radio component lets you select just one option from a list of a few options."},d=void 0,s={unversionedId:"components/radio",id:"components/radio",title:"Radio",description:"The Radio component lets you select just one option from a list of a few options.",source:"@site/examples/components/radio.md",sourceDirName:"components",slug:"/components/radio",permalink:"/tangram-doc/en/examples/components/radio",draft:!1,tags:[],version:"current",frontMatter:{title:"Radio",description:"The Radio component lets you select just one option from a list of a few options."},sidebar:"mySidebar",previous:{title:"Phone",permalink:"/tangram-doc/en/examples/components/phone"},next:{title:"Search",permalink:"/tangram-doc/en/examples/components/search"}},m={},c=[{value:"Base",id:"base",level:2},{value:"Label",id:"label",level:2},{value:"Disabled",id:"disabled",level:2},{value:"With large text",id:"large-text",level:2},{value:"Grouped",id:"grouped",level:2},{value:"Controlled",id:"controlled",level:2},{value:"Feedback",id:"feedback",level:2}],u={toc:c};function p(e){let{components:a,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{current:"examples",name:"radio",mdxType:"ComponentTab"}),(0,o.kt)("h2",{id:"base"},"Base"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Radio id="radioId" name="radioName" value="radioValue" />\n')),(0,o.kt)("h2",{id:"label"},"Label"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Radio\n  label="Radio button text"\n  id="radioId"\n  name="radioName"\n  value="radioValue"\n/>\n')),(0,o.kt)("h2",{id:"disabled"},"Disabled"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Radio\n  label="Radio button text"\n  id="radioId"\n  name="radioName"\n  value="radioValue"\n  disabled\n/>\n')),(0,o.kt)("h2",{id:"large-text"},"With large text"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Radio\n  label="Application of a text larger than the container in which the Checkbox is applied and this causes the text to end up breaking into two or more lines."\n  id="radioId"\n  name="radioName"\n  value="radioValue"\n/>\n')),(0,o.kt)("h2",{id:"grouped"},"Grouped"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<RadioGroup>\n  <Radio label="Radio button text 1" id="1" name="radioName1" value="1" />\n  <Radio label="Radio button text 2" id="2" name="radioName2" value="2" />\n  <Radio label="Radio button text 3" id="3" name="radioName3" value="3" />\n</RadioGroup>\n')),(0,o.kt)("h2",{id:"controlled"},"Controlled"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function ExampleControlled () {\n  const [value, setValue] = useState(\'Item01\');\n\n  const handleChange = event => {\n    setValue(event.target.value);\n  };\n\n  return (\n    <FormControl>\n      <FormLabel htmlFor="item">Choose item</FormLabel>\n      <RadioGroup\n        value={value}\n        onChange={handleChange}\n        aria-label="item"\n        name="item"\n      >\n        <Radio value="Item01" label="Radio button text 1" />\n        <Radio value="Item02" label="Radio button text 2" />\n        <Radio value="Item03" label="Radio button text 3" />\n      </RadioGroup>\n    </FormControl>\n  );\n}\n')),(0,o.kt)("h2",{id:"feedback"},"Feedback"),(0,o.kt)(i.Z,{mdxType:"FeedbackBlock"}))}p.isMDXComponent=!0},54479:(e,a,t)=>{t.d(a,{D:()=>c,Z:()=>d});var n=t(25773),o=t(27378),l=t(67468),i=t(45666);const r=l.ZP.div`
  margin-bottom: var(--size-spacing-09);

  & > * {
    margin-bottom: var(--size-spacing-05);
  }

  ${e=>{let{$columns:a}=e;return a>=2&&l.iv`
      display: grid;
      column-gap: var(--size-spacing-05);
      row-gap: var(--size-spacing-05);
      grid-template-columns: repeat(${a}, 1fr);

      & > * {
        margin-bottom: 0;
      }
    `}}
`;const d=function(e){let{children:a,columns:t=1,...l}=e;return o.createElement(i.Z,null,(()=>o.createElement(r,(0,n.Z)({$columns:t},l),a)))};var s=t(89620);const m=(0,l.ZP)(s.Z)`
  height: 100%;

  p {
    &:only-child,
    &:last-child {
      margin-bottom: 0;
    }
  }

  ${e=>{let{$featured:a}=e;return a&&l.iv`
      border-color: var(--highlight-border);
    `}}

  ${e=>{let{$centered:a}=e;return a&&l.iv`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    `}}
`;const c=function(e){let{children:a,featured:t=!1,centered:n=!1,className:l}=e;return o.createElement(m,{$featured:t,$centered:n,className:l},a)}},23389:(e,a,t)=>{t.d(a,{Z:()=>r});var n=t(25773),o=t(27378),l=t(62957),i=t(85433);function r(e){let{children:a,...t}=e;return o.createElement(i.Z,(0,n.Z)({as:l.Z},t),a)}},45666:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(27378),o=t(77524);function l(e){let{children:a,fallback:t}=e;return(0,o.Z)()?n.createElement(n.Fragment,null,a?.()):t??null}}}]);