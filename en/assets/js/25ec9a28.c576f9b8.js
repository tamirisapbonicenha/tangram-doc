"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[36],{54479:(e,t,n)=>{n.d(t,{D:()=>p,Z:()=>d});var i=n(25773),r=n(27378),o=n(67468),a=n(45666);const s=o.ZP.div`
  margin-bottom: var(--size-spacing-09);

  & > * {
    margin-bottom: var(--size-spacing-05);
  }

  ${e=>{let{$columns:t}=e;return t>=2&&o.iv`
      display: grid;
      column-gap: var(--size-spacing-05);
      row-gap: var(--size-spacing-05);
      grid-template-columns: repeat(${t}, 1fr);

      & > * {
        margin-bottom: 0;
      }
    `}}
`;const d=function(e){let{children:t,columns:n=1,...o}=e;return r.createElement(a.Z,null,(()=>r.createElement(s,(0,i.Z)({$columns:n},o),t)))};var l=n(89620);const c=(0,o.ZP)(l.Z)`
  height: 100%;

  p {
    &:only-child,
    &:last-child {
      margin-bottom: 0;
    }
  }

  ${e=>{let{$featured:t}=e;return t&&o.iv`
      border-color: var(--highlight-border);
    `}}

  ${e=>{let{$centered:t}=e;return t&&o.iv`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    `}}
`;const p=function(e){let{children:t,featured:n=!1,centered:i=!1,className:o}=e;return r.createElement(c,{$featured:n,$centered:i,className:o},t)}},45666:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(27378),r=n(77524);function o(e){let{children:t,fallback:n}=e;return(0,r.Z)()?i.createElement(i.Fragment,null,t?.()):n??null}},88387:(e,t,n)=>{n.d(t,{Z:()=>h});var i=n(25773),r=n(30808),o=n(27378),a=(n(23615),n(67468)),s=n(10716),d=n(90496);const l=["children","shape","loading","done"],c=(0,a.F4)(["to{background-position:right -100px top 0;}"]),p=a.ZP.div.withConfig({displayName:"Skeleton__Root",componentId:"tg-1yZ__sc-67sgv5-0"})(["border-radius:var(--border-radius-md);background-color:rgba(227,229,232,1);background-image:linear-gradient( 90deg,rgba(241,243,245,0),rgba(241,243,245,1),rgba(241,243,245,0) );background-size:100px 100%;background-repeat:no-repeat;background-position:left -100px top 0;animation:"," 1s ease infinite;",";",";",";",";"],c,(e=>{let{$shape:t}=e;return(e=>{switch(e){case d.JZ.circle:return(0,a.iv)(["border-radius:var(--border-radius-circle);min-height:40px;min-width:40px;"]);case d.JZ.text:return(0,a.iv)(["width:100%;min-height:16px;"]);default:return(0,a.iv)(["width:100%;height:40px;"])}})(t)}),(e=>{let{children:t}=e;return t&&(0,a.iv)(["& *{visibility:hidden;},"])}),(e=>{let{width:t,children:n}=e;return n&&!t?(0,a.iv)(["width:fit-content;"]):t&&(0,a.iv)(["width:",";min-width:",";"],t,t)}),(e=>{let{height:t,children:n}=e;return n&&!t?(0,a.iv)(["height:auto;"]):t&&(0,a.iv)(["height:",";min-height:",";"],t,t)})),m=(0,o.forwardRef)(((e,t)=>{let{children:n=null,shape:a=m.shapes.rectangle,loading:d=!0,done:c=!1}=e,h=(0,r.Z)(e,l);const u=d&&!c;return(0,s.Z)({loading:!d||void 0,originName:"Skeleton",fallback:"Use `done` property instead"}),u?o.createElement(p,(0,i.Z)({ref:t,$shape:a},h,{"aria-busy":"true"}),n):n}));m.displayName="Skeleton",m.Style=p,m.shapes=d.JZ;const h=m},45564:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>h});var i=n(25773),r=(n(27378),n(35318)),o=n(80621),a=n(82544),s=n(54479),d=n(88387);const l={title:"Skeleton",description:"Skeleton is the simplified version of a page's components or information that appears before the information is loaded."},c=void 0,p={unversionedId:"components/skeleton",id:"components/skeleton",title:"Skeleton",description:"Skeleton is the simplified version of a page's components or information that appears before the information is loaded.",source:"@site/docs/components/skeleton.md",sourceDirName:"components",slug:"/components/skeleton",permalink:"/tangram/en/docs/components/skeleton",draft:!1,editUrl:"https://github.com/ResultadosDigitais/tangram/edit/next/docusaurus/docs/components/skeleton.md",tags:[],version:"current",frontMatter:{title:"Skeleton",description:"Skeleton is the simplified version of a page's components or information that appears before the information is loaded."},sidebar:"mySidebar",previous:{title:"Sidebar",permalink:"/tangram/en/docs/components/sidebar"},next:{title:"Slide",permalink:"/tangram/en/docs/components/slide"}},m={},h=[{value:"Rectangle",id:"rectangle",level:2},{value:"Text",id:"text",level:2},{value:"Circle",id:"circle",level:2},{value:"Feedback",id:"feedback",level:2}],u={toc:h};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{current:"docs",name:"skeleton",mdxType:"ComponentTab"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Skeleton")," is the simplified version of a page's components or information that appears before the information is loaded. This mode replaces empty pages and improves the experience and perception of time when loading. It can be applied in 3 ways:"),(0,r.kt)("h2",{id:"rectangle"},"Rectangle"),(0,r.kt)(s.Z,{mdxType:"CardGrid"},(0,r.kt)(s.D,{mdxType:"CardGridItem"},(0,r.kt)(d.Z,{shape:d.Z.shapes.rectangle,mdxType:"Skeleton"}))),(0,r.kt)("h2",{id:"text"},"Text"),(0,r.kt)(s.Z,{mdxType:"CardGrid"},(0,r.kt)(s.D,{mdxType:"CardGridItem"},(0,r.kt)(d.Z,{shape:d.Z.shapes.text,mdxType:"Skeleton"}))),(0,r.kt)("h2",{id:"circle"},"Circle"),(0,r.kt)(s.Z,{mdxType:"CardGrid"},(0,r.kt)(s.D,{centered:!0,mdxType:"CardGridItem"},(0,r.kt)(d.Z,{shape:d.Z.shapes.circle,mdxType:"Skeleton"}))),(0,r.kt)("h2",{id:"feedback"},"Feedback"),(0,r.kt)(a.Z,{mdxType:"FeedbackBlock"}))}g.isMDXComponent=!0}}]);