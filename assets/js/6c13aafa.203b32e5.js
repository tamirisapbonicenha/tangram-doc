"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5808],{67899:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>m,contentTitle:()=>d,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var o=n(25773),t=(n(27378),n(35318)),l=n(80621),i=n(82544);n(23389),n(54479);const r={title:"Radio",description:"O componente de Radio permite selecionar apenas uma op\xe7\xe3o de uma lista de algumas poucas op\xe7\xf5es."},d=void 0,s={unversionedId:"components/radio",id:"components/radio",title:"Radio",description:"O componente de Radio permite selecionar apenas uma op\xe7\xe3o de uma lista de algumas poucas op\xe7\xf5es.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs-examples/current/components/radio.md",sourceDirName:"components",slug:"/components/radio",permalink:"/tangram-doc/examples/components/radio",draft:!1,tags:[],version:"current",frontMatter:{title:"Radio",description:"O componente de Radio permite selecionar apenas uma op\xe7\xe3o de uma lista de algumas poucas op\xe7\xf5es."},sidebar:"mySidebar",previous:{title:"Phone",permalink:"/tangram-doc/examples/components/phone"},next:{title:"Search",permalink:"/tangram-doc/examples/components/search"}},m={},u=[{value:"Base",id:"base",level:2},{value:"Label",id:"label",level:2},{value:"Desabilitado",id:"disabled",level:2},{value:"Com texto em duas ou mais linhas",id:"large-text",level:2},{value:"Agrupados",id:"grouped",level:2},{value:"Controlado",id:"controlled",level:2},{value:"Feedback",id:"feedback",level:2}],c={toc:u};function p(e){let{components:a,...n}=e;return(0,t.kt)("wrapper",(0,o.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)(l.Z,{current:"examples",name:"radio",mdxType:"ComponentTab"}),(0,t.kt)("h2",{id:"base"},"Base"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Radio id="radioId" name="radioName" value="radioValue" />\n')),(0,t.kt)("h2",{id:"label"},"Label"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Radio\n  label="Label do radio button"\n  id="radioId"\n  name="radioName"\n  value="radioValue"\n/>\n')),(0,t.kt)("h2",{id:"disabled"},"Desabilitado"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Radio\n  label="Label do radio button"\n  id="radioId"\n  name="radioName"\n  value="radioValue"\n  disabled\n/>\n')),(0,t.kt)("h2",{id:"large-text"},"Com texto em duas ou mais linhas"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Radio\n  label="Aplica\xe7\xe3o de um texto maior que o container em que o Checkbox est\xe1 aplicado e isso faz com que o texto acabe quebrando em duas ou mais linhas."\n  id="radioId"\n  name="radioName"\n  value="radioValue"\n/>\n')),(0,t.kt)("h2",{id:"grouped"},"Agrupados"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<RadioGroup>\n  <Radio label="Label do radio button 1" id="1" name="radioName1" value="1" />\n  <Radio label="Label do radio button 2" id="2" name="radioName2" value="2" />\n  <Radio label="Label do radio button 3" id="3" name="radioName3" value="3" />\n</RadioGroup>\n')),(0,t.kt)("h2",{id:"controlled"},"Controlado"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function ExampleControlled () {\n  const [value, setValue] = useState(\'Item01\');\n\n  const handleChange = event => {\n    setValue(event.target.value);\n  };\n\n  return (\n    <FormControl>\n      <FormLabel htmlFor="item">Escolha um item</FormLabel>\n      <RadioGroup\n        value={value}\n        onChange={handleChange}\n        aria-label="item"\n        name="item"\n      >\n        <Radio value="Item01" label="Label do radio button 1" />\n        <Radio value="Item02" label="Label do radio button 2" />\n        <Radio value="Item03" label="Label do radio button 3" />\n      </RadioGroup>\n    </FormControl>\n  );\n}\n')),(0,t.kt)("h2",{id:"feedback"},"Feedback"),(0,t.kt)(i.Z,{mdxType:"FeedbackBlock"}))}p.isMDXComponent=!0},54479:(e,a,n)=>{n.d(a,{D:()=>u,Z:()=>d});var o=n(25773),t=n(27378),l=n(67468),i=n(45666);const r=l.ZP.div`
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
`;const d=function(e){let{children:a,columns:n=1,...l}=e;return t.createElement(i.Z,null,(()=>t.createElement(r,(0,o.Z)({$columns:n},l),a)))};var s=n(89620);const m=(0,l.ZP)(s.Z)`
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
`;const u=function(e){let{children:a,featured:n=!1,centered:o=!1,className:l}=e;return t.createElement(m,{$featured:n,$centered:o,className:l},a)}},23389:(e,a,n)=>{n.d(a,{Z:()=>r});var o=n(25773),t=n(27378),l=n(62957),i=n(85433);function r(e){let{children:a,...n}=e;return t.createElement(i.Z,(0,o.Z)({as:l.Z},n),a)}},45666:(e,a,n)=>{n.d(a,{Z:()=>l});var o=n(27378),t=n(77524);function l(e){let{children:a,fallback:n}=e;return(0,t.Z)()?o.createElement(o.Fragment,null,a?.()):n??null}}}]);