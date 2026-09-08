"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2864],{54479:(e,n,t)=>{t.d(n,{D:()=>m,Z:()=>c});var r=t(25773),a=t(27378),o=t(67468),s=t(45666);const i=o.ZP.div`
  margin-bottom: var(--size-spacing-09);

  & > * {
    margin-bottom: var(--size-spacing-05);
  }

  ${e=>{let{$columns:n}=e;return n>=2&&o.iv`
      display: grid;
      column-gap: var(--size-spacing-05);
      row-gap: var(--size-spacing-05);
      grid-template-columns: repeat(${n}, 1fr);

      & > * {
        margin-bottom: 0;
      }
    `}}
`;const c=function(e){let{children:n,columns:t=1,...o}=e;return a.createElement(s.Z,null,(()=>a.createElement(i,(0,r.Z)({$columns:t},o),n)))};var d=t(89620);const p=(0,o.ZP)(d.Z)`
  height: 100%;

  p {
    &:only-child,
    &:last-child {
      margin-bottom: 0;
    }
  }

  ${e=>{let{$featured:n}=e;return n&&o.iv`
      border-color: var(--highlight-border);
    `}}

  ${e=>{let{$centered:n}=e;return n&&o.iv`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    `}}
`;const m=function(e){let{children:n,featured:t=!1,centered:r=!1,className:o}=e;return a.createElement(p,{$featured:t,$centered:r,className:o},n)}},23389:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(25773),a=t(27378),o=t(62957),s=t(85433);function i(e){let{children:n,...t}=e;return a.createElement(s.Z,(0,r.Z)({as:o.Z},t),n)}},45666:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(27378),a=t(77524);function o(e){let{children:n,fallback:t}=e;return(0,a.Z)()?r.createElement(r.Fragment,null,n?.()):t??null}},19533:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>m,default:()=>f,frontMatter:()=>p,metadata:()=>l,toc:()=>g});var r=t(25773),a=(t(27378),t(35318)),o=t(80621),s=t(23389),i=t(82544),c=t(54479),d=t(26503);const p={title:"Spinner",description:"Spinners podem ser utilizados para indicar que o sistema est\xe1 processando alguma informa\xe7\xe3o."},m=void 0,l={unversionedId:"components/spinner",id:"components/spinner",title:"Spinner",description:"Spinners podem ser utilizados para indicar que o sistema est\xe1 processando alguma informa\xe7\xe3o.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/components/spinner.md",sourceDirName:"components",slug:"/components/spinner",permalink:"/tangram/docs/components/spinner",draft:!1,editUrl:"https://github.com/ResultadosDigitais/tangram/edit/next/docusaurus/docs/components/spinner.md",tags:[],version:"current",frontMatter:{title:"Spinner",description:"Spinners podem ser utilizados para indicar que o sistema est\xe1 processando alguma informa\xe7\xe3o."},sidebar:"mySidebar",previous:{title:"Snackbar",permalink:"/tangram/docs/components/snackbar"},next:{title:"Toast",permalink:"/tangram/docs/components/toast"}},u={},g=[{value:"Feedback",id:"feedback",level:2}],k={toc:g};function f(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{current:"docs",name:"spinner",mdxType:"ComponentTab"}),(0,a.kt)("p",null,"O ",(0,a.kt)("inlineCode",{parentName:"p"},"Spinner")," \xe9 usado para indicar que o sistema est\xe1 processando alguma informa\xe7\xe3o. Pode ser aplicado em diversos componentes, em inputs com a\xe7\xf5es ass\xedncronas, bot\xf5es, entre outros."),(0,a.kt)("p",null,"Evite usar o ",(0,a.kt)("inlineCode",{parentName:"p"},"Spinner")," para a\xe7\xf5es que levam muito tempo. Neste caso, \xe9 recomend\xe1vel o uso do componente ",(0,a.kt)(s.Z,{href:"../../../docs/components/progressbar",mdxType:"Link"},"ProgressBar"),"."),(0,a.kt)(c.Z,{mdxType:"CardGrid"},(0,a.kt)(c.D,{centered:!0,mdxType:"CardGridItem"},(0,a.kt)(d.Z,{mdxType:"Spinner"}))),(0,a.kt)("h2",{id:"feedback"},"Feedback"),(0,a.kt)(i.Z,{mdxType:"FeedbackBlock"}))}f.isMDXComponent=!0}}]);