"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2032],{54479:(e,t,n)=>{n.d(t,{D:()=>m,Z:()=>d});var a=n(25773),r=n(27378),i=n(67468),o=n(45666);const s=i.ZP.div`
  margin-bottom: var(--size-spacing-09);

  & > * {
    margin-bottom: var(--size-spacing-05);
  }

  ${e=>{let{$columns:t}=e;return t>=2&&i.iv`
      display: grid;
      column-gap: var(--size-spacing-05);
      row-gap: var(--size-spacing-05);
      grid-template-columns: repeat(${t}, 1fr);

      & > * {
        margin-bottom: 0;
      }
    `}}
`;const d=function(e){let{children:t,columns:n=1,...i}=e;return r.createElement(o.Z,null,(()=>r.createElement(s,(0,a.Z)({$columns:n},i),t)))};var c=n(89620);const l=(0,i.ZP)(c.Z)`
  height: 100%;

  p {
    &:only-child,
    &:last-child {
      margin-bottom: 0;
    }
  }

  ${e=>{let{$featured:t}=e;return t&&i.iv`
      border-color: var(--highlight-border);
    `}}

  ${e=>{let{$centered:t}=e;return t&&i.iv`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    `}}
`;const m=function(e){let{children:t,featured:n=!1,centered:a=!1,className:i}=e;return r.createElement(l,{$featured:n,$centered:a,className:i},t)}},45666:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(27378),r=n(77524);function i(e){let{children:t,fallback:n}=e;return(0,r.Z)()?a.createElement(a.Fragment,null,t?.()):n??null}},88387:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(25773),r=n(30808),i=n(27378),o=(n(23615),n(67468)),s=n(10716),d=n(90496);const c=["children","shape","loading","done"],l=(0,o.F4)(["to{background-position:right -100px top 0;}"]),m=o.ZP.div.withConfig({displayName:"Skeleton__Root",componentId:"tg-1yZ__sc-67sgv5-0"})(["border-radius:var(--border-radius-md);background-color:rgba(227,229,232,1);background-image:linear-gradient( 90deg,rgba(241,243,245,0),rgba(241,243,245,1),rgba(241,243,245,0) );background-size:100px 100%;background-repeat:no-repeat;background-position:left -100px top 0;animation:"," 1s ease infinite;",";",";",";",";"],l,(e=>{let{$shape:t}=e;return(e=>{switch(e){case d.JZ.circle:return(0,o.iv)(["border-radius:var(--border-radius-circle);min-height:40px;min-width:40px;"]);case d.JZ.text:return(0,o.iv)(["width:100%;min-height:16px;"]);default:return(0,o.iv)(["width:100%;height:40px;"])}})(t)}),(e=>{let{children:t}=e;return t&&(0,o.iv)(["& *{visibility:hidden;},"])}),(e=>{let{width:t,children:n}=e;return n&&!t?(0,o.iv)(["width:fit-content;"]):t&&(0,o.iv)(["width:",";min-width:",";"],t,t)}),(e=>{let{height:t,children:n}=e;return n&&!t?(0,o.iv)(["height:auto;"]):t&&(0,o.iv)(["height:",";min-height:",";"],t,t)})),p=(0,i.forwardRef)(((e,t)=>{let{children:n=null,shape:o=p.shapes.rectangle,loading:d=!0,done:l=!1}=e,u=(0,r.Z)(e,c);const g=d&&!l;return(0,s.Z)({loading:!d||void 0,originName:"Skeleton",fallback:"Use `done` property instead"}),g?i.createElement(m,(0,a.Z)({ref:t,$shape:o},u,{"aria-busy":"true"}),n):n}));p.displayName="Skeleton",p.Style=m,p.shapes=d.JZ;const u=p},77111:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>m,toc:()=>u});var a=n(25773),r=(n(27378),n(35318)),i=n(80621),o=n(82544),s=n(54479),d=n(88387);const c={title:"Skeleton",description:"Skeleton \xe9 a vers\xe3o simplificada de componentes ou informa\xe7\xf5es de uma p\xe1gina que aparecem antes das informa\xe7\xf5es serem carregadas."},l=void 0,m={unversionedId:"components/skeleton",id:"components/skeleton",title:"Skeleton",description:"Skeleton \xe9 a vers\xe3o simplificada de componentes ou informa\xe7\xf5es de uma p\xe1gina que aparecem antes das informa\xe7\xf5es serem carregadas.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/components/skeleton.md",sourceDirName:"components",slug:"/components/skeleton",permalink:"/tangram-doc/docs/components/skeleton",draft:!1,editUrl:"https://github.com/ResultadosDigitais/tangram/edit/next/docusaurus/docs/components/skeleton.md",tags:[],version:"current",frontMatter:{title:"Skeleton",description:"Skeleton \xe9 a vers\xe3o simplificada de componentes ou informa\xe7\xf5es de uma p\xe1gina que aparecem antes das informa\xe7\xf5es serem carregadas."},sidebar:"mySidebar",previous:{title:"Sidebar",permalink:"/tangram-doc/docs/components/sidebar"},next:{title:"Slide",permalink:"/tangram-doc/docs/components/slide"}},p={},u=[{value:"Ret\xe2ngulos",id:"rectangle",level:2},{value:"Textos",id:"text",level:2},{value:"C\xedrculos",id:"circle",level:2},{value:"Feedback",id:"feedback",level:2}],g={toc:u};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{current:"docs",name:"skeleton",mdxType:"ComponentTab"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Skeleton")," \xe9 a vers\xe3o simplificada de componentes ou informa\xe7\xf5es de uma p\xe1gina que aparecem antes das informa\xe7\xf5es serem carregadas. Este modo substitui p\xe1ginas vazias e melhoram a experi\xeancia e percep\xe7\xe3o do tempo durante o carregamento. Pode ser aplicado de 3 maneiras:"),(0,r.kt)("h2",{id:"rectangle"},"Ret\xe2ngulos"),(0,r.kt)(s.Z,{mdxType:"CardGrid"},(0,r.kt)(s.D,{mdxType:"CardGridItem"},(0,r.kt)(d.Z,{shape:d.Z.shapes.rectangle,mdxType:"Skeleton"}))),(0,r.kt)("h2",{id:"text"},"Textos"),(0,r.kt)(s.Z,{mdxType:"CardGrid"},(0,r.kt)(s.D,{mdxType:"CardGridItem"},(0,r.kt)(d.Z,{shape:d.Z.shapes.text,mdxType:"Skeleton"}))),(0,r.kt)("h2",{id:"circle"},"C\xedrculos"),(0,r.kt)(s.Z,{mdxType:"CardGrid"},(0,r.kt)(s.D,{centered:!0,mdxType:"CardGridItem"},(0,r.kt)(d.Z,{shape:d.Z.shapes.circle,mdxType:"Skeleton"}))),(0,r.kt)("h2",{id:"feedback"},"Feedback"),(0,r.kt)(o.Z,{mdxType:"FeedbackBlock"}))}h.isMDXComponent=!0}}]);