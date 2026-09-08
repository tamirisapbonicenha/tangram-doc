"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[182],{54479:(e,t,n)=>{n.d(t,{D:()=>p,Z:()=>i});var o=n(25773),r=n(27378),a=n(67468),s=n(45666);const c=a.ZP.div`
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
`;const i=function(e){let{children:t,columns:n=1,...a}=e;return r.createElement(s.Z,null,(()=>r.createElement(c,(0,o.Z)({$columns:n},a),t)))};var d=n(89620);const l=(0,a.ZP)(d.Z)`
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
`;const p=function(e){let{children:t,featured:n=!1,centered:o=!1,className:a}=e;return r.createElement(l,{$featured:n,$centered:o,className:a},t)}},23389:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(25773),r=n(27378),a=n(62957),s=n(85433);function c(e){let{children:t,...n}=e;return r.createElement(s.Z,(0,o.Z)({as:a.Z},n),t)}},45666:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(27378),r=n(77524);function a(e){let{children:t,fallback:n}=e;return(0,r.Z)()?o.createElement(o.Fragment,null,t?.()):n??null}},41995:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>g,frontMatter:()=>d,metadata:()=>p,toc:()=>u});var o=n(25773),r=(n(27378),n(35318)),a=n(80621),s=n(82544),c=n(54479),i=n(23389);const d={title:"Text",description:"Use the Text component when it is necessary to apply text."},l=void 0,p={unversionedId:"components/text",id:"components/text",title:"Text",description:"Use the Text component when it is necessary to apply text.",source:"@site/docs/components/text.md",sourceDirName:"components",slug:"/components/text",permalink:"/tangram/en/docs/components/text",draft:!1,editUrl:"https://github.com/ResultadosDigitais/tangram/edit/next/docusaurus/docs/components/text.md",tags:[],version:"current",frontMatter:{title:"Text",description:"Use the Text component when it is necessary to apply text."},sidebar:"mySidebar",previous:{title:"Link",permalink:"/tangram/en/docs/components/link"},next:{title:"EmptyState",permalink:"/tangram/en/docs/components/emptystate"}},m={},u=[{value:"Feedback",id:"feedback",level:2}],x=(h="Text",function(e){return console.warn("Component "+h+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var h;const k={toc:u};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(a.Z,{current:"docs",name:"text",mdxType:"ComponentTab"}),(0,r.kt)("p",null,"The component, by default, represents a ",(0,r.kt)("inlineCode",{parentName:"p"},"p")," element. So if you need to display text on screen or in stream, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Text")," component.."),(0,r.kt)(c.Z,{mdxType:"CardGrid"},(0,r.kt)(c.D,{centered:!0,mdxType:"CardGridItem"},(0,r.kt)(x,{mdxType:"Text"},"The quick brown fox jumps over the lazy dog."))),(0,r.kt)("p",null,"The component uses the typographic scale and standard typography of RD Station products. See the ",(0,r.kt)(i.Z,{href:"../../../examples/components/text",mdxType:"Link"},"examples page")," for more details."),(0,r.kt)("h2",{id:"feedback"},"Feedback"),(0,r.kt)(s.Z,{mdxType:"FeedbackBlock"}))}g.isMDXComponent=!0}}]);