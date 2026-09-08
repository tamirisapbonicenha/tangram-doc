"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8810],{54479:(e,t,n)=>{n.d(t,{D:()=>m,Z:()=>c});var i=n(25773),o=n(27378),r=n(67468),a=n(45666);const l=r.ZP.div`
  margin-bottom: var(--size-spacing-09);

  & > * {
    margin-bottom: var(--size-spacing-05);
  }

  ${e=>{let{$columns:t}=e;return t>=2&&r.iv`
      display: grid;
      column-gap: var(--size-spacing-05);
      row-gap: var(--size-spacing-05);
      grid-template-columns: repeat(${t}, 1fr);

      & > * {
        margin-bottom: 0;
      }
    `}}
`;const c=function(e){let{children:t,columns:n=1,...r}=e;return o.createElement(a.Z,null,(()=>o.createElement(l,(0,i.Z)({$columns:n},r),t)))};var d=n(89620);const s=(0,r.ZP)(d.Z)`
  height: 100%;

  p {
    &:only-child,
    &:last-child {
      margin-bottom: 0;
    }
  }

  ${e=>{let{$featured:t}=e;return t&&r.iv`
      border-color: var(--highlight-border);
    `}}

  ${e=>{let{$centered:t}=e;return t&&r.iv`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    `}}
`;const m=function(e){let{children:t,featured:n=!1,centered:i=!1,className:r}=e;return o.createElement(s,{$featured:n,$centered:i,className:r},t)}},45666:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(27378),o=n(77524);function r(e){let{children:t,fallback:n}=e;return(0,o.Z)()?i.createElement(i.Fragment,null,t?.()):n??null}},9003:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>y,frontMatter:()=>k,metadata:()=>v,toc:()=>f});var i=n(25773),o=n(27378),r=n(35318),a=n(80621),l=n(82544),c=n(54479),d=n(24003),s=n(89620),m=n(959),p=n(64723);const u=function(e){let{direction:t=d.Z.directions.horizontal}=e;const[n,i]=(0,o.useState)(!1),r=t===d.Z.directions.vertical?-24:-200,a=t===d.Z.directions.vertical?48:200;return o.createElement(d.Z,{in:n,from:r,to:a,direction:t},o.createElement(s.Z,{clickable:!0,onClick:()=>i((e=>!e))},o.createElement(m.Z,{token:m.Z.tokens.TEXT_MD_BOLD,as:"span"},o.createElement(p.Z,{id:"ExampleSlide.textCard"},"Click here!"))))},k={title:"Slide",description:"Slide is a component used to build animations that go from point A to point B, either horizontally or vertically."},h=void 0,v={unversionedId:"components/slide",id:"components/slide",title:"Slide",description:"Slide is a component used to build animations that go from point A to point B, either horizontally or vertically.",source:"@site/docs/components/slide.md",sourceDirName:"components",slug:"/components/slide",permalink:"/tangram/en/docs/components/slide",draft:!1,editUrl:"https://github.com/ResultadosDigitais/tangram/edit/next/docusaurus/docs/components/slide.md",tags:[],version:"current",frontMatter:{title:"Slide",description:"Slide is a component used to build animations that go from point A to point B, either horizontally or vertically."},sidebar:"mySidebar",previous:{title:"Skeleton",permalink:"/tangram/en/docs/components/skeleton"},next:{title:"StackGroup",permalink:"/tangram/en/docs/components/stackgroup"}},g={},f=[{value:"Horizontal",id:"horizontal",level:2},{value:"Vertical",id:"vertical",level:2},{value:"Feedback",id:"feedback",level:2}],b={toc:f};function y(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(a.Z,{current:"docs",name:"slide",mdxType:"ComponentTab"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Slide")," is a component used to build animations that go from point A to point B, in a horizontal or vertical direction."),(0,r.kt)("h2",{id:"horizontal"},"Horizontal"),(0,r.kt)(c.Z,{mdxType:"CardGrid"},(0,r.kt)(c.D,{centered:!0,mdxType:"CardGridItem"},(0,r.kt)(u,{mdxType:"ExampleSlide"}))),(0,r.kt)("h2",{id:"vertical"},"Vertical"),(0,r.kt)(c.Z,{style:{height:"148px"},mdxType:"CardGrid"},(0,r.kt)(c.D,{centered:!0,mdxType:"CardGridItem"},(0,r.kt)(u,{direction:d.Z.directions.vertical,mdxType:"ExampleSlide"}))),(0,r.kt)("h2",{id:"feedback"},"Feedback"),(0,r.kt)(l.Z,{mdxType:"FeedbackBlock"}))}y.isMDXComponent=!0}}]);