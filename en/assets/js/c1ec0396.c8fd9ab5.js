"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9767],{54479:(e,n,t)=>{t.d(n,{D:()=>p,Z:()=>c});var r=t(25773),s=t(27378),i=t(67468),o=t(45666);const a=i.ZP.div`
  margin-bottom: var(--size-spacing-09);

  & > * {
    margin-bottom: var(--size-spacing-05);
  }

  ${e=>{let{$columns:n}=e;return n>=2&&i.iv`
      display: grid;
      column-gap: var(--size-spacing-05);
      row-gap: var(--size-spacing-05);
      grid-template-columns: repeat(${n}, 1fr);

      & > * {
        margin-bottom: 0;
      }
    `}}
`;const c=function(e){let{children:n,columns:t=1,...i}=e;return s.createElement(o.Z,null,(()=>s.createElement(a,(0,r.Z)({$columns:t},i),n)))};var d=t(89620);const m=(0,i.ZP)(d.Z)`
  height: 100%;

  p {
    &:only-child,
    &:last-child {
      margin-bottom: 0;
    }
  }

  ${e=>{let{$featured:n}=e;return n&&i.iv`
      border-color: var(--highlight-border);
    `}}

  ${e=>{let{$centered:n}=e;return n&&i.iv`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    `}}
`;const p=function(e){let{children:n,featured:t=!1,centered:r=!1,className:i}=e;return s.createElement(m,{$featured:t,$centered:r,className:i},n)}},23389:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(25773),s=t(27378),i=t(62957),o=t(85433);function a(e){let{children:n,...t}=e;return s.createElement(o.Z,(0,r.Z)({as:i.Z},t),n)}},45666:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(27378),s=t(77524);function i(e){let{children:n,fallback:t}=e;return(0,s.Z)()?r.createElement(r.Fragment,null,n?.()):t??null}},5489:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>p,default:()=>k,frontMatter:()=>m,metadata:()=>l,toc:()=>g});var r=t(25773),s=(t(27378),t(35318)),i=t(80621),o=t(82544),a=t(23389),c=t(54479),d=t(26503);const m={title:"Spinner",description:"Spinners can be used to indicate that the system is processing some information."},p=void 0,l={unversionedId:"components/spinner",id:"components/spinner",title:"Spinner",description:"Spinners can be used to indicate that the system is processing some information.",source:"@site/docs/components/spinner.md",sourceDirName:"components",slug:"/components/spinner",permalink:"/tangram/en/docs/components/spinner",draft:!1,editUrl:"https://github.com/ResultadosDigitais/tangram/edit/next/docusaurus/docs/components/spinner.md",tags:[],version:"current",frontMatter:{title:"Spinner",description:"Spinners can be used to indicate that the system is processing some information."},sidebar:"mySidebar",previous:{title:"Snackbar",permalink:"/tangram/en/docs/components/snackbar"},next:{title:"Toast",permalink:"/tangram/en/docs/components/toast"}},u={},g=[{value:"Feedback",id:"feedback",level:2}],h={toc:g};function k(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)(i.Z,{current:"docs",name:"spinner",mdxType:"ComponentTab"}),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"Spinner")," is used to indicate that the system is processing some information. It can be applied to several components, inputs with asynchronous actions, buttons, among others."),(0,s.kt)("p",null,"Avoid using ",(0,s.kt)("inlineCode",{parentName:"p"},"Spinner")," for actions that take a long time. In this case, it is recommended to use the ",(0,s.kt)(a.Z,{href:"../../../docs/components/progressbar",mdxType:"Link"},"ProgressBar")," component."),(0,s.kt)(c.Z,{mdxType:"CardGrid"},(0,s.kt)(c.D,{centered:!0,mdxType:"CardGridItem"},(0,s.kt)(d.Z,{mdxType:"Spinner"}))),(0,s.kt)("h2",{id:"feedback"},"Feedback"),(0,s.kt)(o.Z,{mdxType:"FeedbackBlock"}))}k.isMDXComponent=!0}}]);