"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9039],{54479:(e,t,n)=>{n.d(t,{D:()=>m,Z:()=>s});var o=n(25773),r=n(27378),a=n(67468),i=n(45666);const c=a.ZP.div`
  margin-bottom: var(--size-spacing-09);

  & > * {
    margin-bottom: var(--size-spacing-05);
  }

  ${e=>{let{$columns:t}=e;return t>=2&&a.iv`
      display: grid;
      column-gap: var(--size-spacing-05);
      row-gap: var(--size-spacing-05);
      grid-template-columns: repeat(${t}, 1fr);

      & > * {
        margin-bottom: 0;
      }
    `}}
`;const s=function(e){let{children:t,columns:n=1,...a}=e;return r.createElement(i.Z,null,(()=>r.createElement(c,(0,o.Z)({$columns:n},a),t)))};var l=n(89620);const d=(0,a.ZP)(l.Z)`
  height: 100%;

  p {
    &:only-child,
    &:last-child {
      margin-bottom: 0;
    }
  }

  ${e=>{let{$featured:t}=e;return t&&a.iv`
      border-color: var(--highlight-border);
    `}}

  ${e=>{let{$centered:t}=e;return t&&a.iv`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    `}}
`;const m=function(e){let{children:t,featured:n=!1,centered:o=!1,className:a}=e;return r.createElement(d,{$featured:n,$centered:o,className:a},t)}},23389:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(25773),r=n(27378),a=n(62957),i=n(85433);function c(e){let{children:t,...n}=e;return r.createElement(i.Z,(0,o.Z)({as:a.Z},n),t)}},45666:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(27378),r=n(77524);function a(e){let{children:t,fallback:n}=e;return(0,r.Z)()?o.createElement(o.Fragment,null,t?.()):n??null}},81540:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>k,frontMatter:()=>l,metadata:()=>m,toc:()=>u});var o=n(25773),r=(n(27378),n(35318)),a=n(80621),i=n(82544),c=n(54479),s=n(23389);const l={title:"Text",description:"Utilize o componente Text quando for necess\xe1rio aplicar um texto."},d=void 0,m={unversionedId:"components/text",id:"components/text",title:"Text",description:"Utilize o componente Text quando for necess\xe1rio aplicar um texto.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/components/text.md",sourceDirName:"components",slug:"/components/text",permalink:"/tangram/docs/components/text",draft:!1,editUrl:"https://github.com/ResultadosDigitais/tangram/edit/next/docusaurus/docs/components/text.md",tags:[],version:"current",frontMatter:{title:"Text",description:"Utilize o componente Text quando for necess\xe1rio aplicar um texto."},sidebar:"mySidebar",previous:{title:"Link",permalink:"/tangram/docs/components/link"},next:{title:"EmptyState",permalink:"/tangram/docs/components/emptystate"}},p={},u=[{value:"Feedback",id:"feedback",level:2}],x=(f="Text",function(e){return console.warn("Component "+f+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var f;const g={toc:u};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(a.Z,{current:"docs",name:"text",mdxType:"ComponentTab"}),(0,r.kt)("p",null,"O componente, por padr\xe3o, representa um elemento ",(0,r.kt)("inlineCode",{parentName:"p"},"p"),". Ent\xe3o, se for necess\xe1rio exibir texto em tela ou em fluxo, use o componente ",(0,r.kt)("inlineCode",{parentName:"p"},"Text"),"."),(0,r.kt)(c.Z,{mdxType:"CardGrid"},(0,r.kt)(c.D,{centered:!0,mdxType:"CardGridItem"},(0,r.kt)(x,{mdxType:"Text"},"The quick brown fox jumps over the lazy dog."))),(0,r.kt)("p",null,"O componente usa a escala tipogr\xe1fica e a tipografia padr\xe3o dos produtos RD Station. Consulte a ",(0,r.kt)(s.Z,{href:"../../../examples/components/text",mdxType:"Link"},"p\xe1gina de exemplos")," para mais detalhes."),(0,r.kt)("h2",{id:"feedback"},"Feedback"),(0,r.kt)(i.Z,{mdxType:"FeedbackBlock"}))}k.isMDXComponent=!0}}]);