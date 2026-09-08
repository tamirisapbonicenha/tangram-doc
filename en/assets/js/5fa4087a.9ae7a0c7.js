"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2330],{54479:(e,t,n)=>{n.d(t,{D:()=>m,Z:()=>d});var a=n(25773),o=n(27378),i=n(67468),r=n(45666);const s=i.ZP.div`
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
`;const d=function(e){let{children:t,columns:n=1,...i}=e;return o.createElement(r.Z,null,(()=>o.createElement(s,(0,a.Z)({$columns:n},i),t)))};var l=n(89620);const c=(0,i.ZP)(l.Z)`
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
`;const m=function(e){let{children:t,featured:n=!1,centered:a=!1,className:i}=e;return o.createElement(c,{$featured:n,$centered:a,className:i},t)}},23389:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(25773),o=n(27378),i=n(62957),r=n(85433);function s(e){let{children:t,...n}=e;return o.createElement(r.Z,(0,a.Z)({as:i.Z},n),t)}},45666:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(27378),o=n(77524);function i(e){let{children:t,fallback:n}=e;return(0,o.Z)()?a.createElement(a.Fragment,null,t?.()):n??null}},87954:(e,t,n)=>{n.d(t,{Z:()=>h});var a,o=n(25773),i=n(30808),r=n(27378),s=n(67468),d=(n(23615),n(63559)),l=n(75387),c=n(26503);const m=["disabled","as","children","type","kind","size","startIcon","endIcon","ia","loading","fluid"],p=(0,s.ZP)(l.Z).withConfig({displayName:"Button__Root",componentId:"tg-1yZ__sc-7cbhwm-0"})([""]),u=(0,r.forwardRef)(((e,t)=>{let{disabled:n,as:s,children:l,type:h=u.types.button,kind:k=u.kinds.primary,size:y=u.sizes.md,startIcon:g,endIcon:Z,ia:f=!1,loading:b=!1,fluid:v=!1}=e,T=(0,i.Z)(e,m);return r.createElement(p,(0,o.Z)({ref:t,loading:b,fluid:v,forwardedAs:s,size:y,disabled:n||b,kind:k,type:h,ia:f},T),b?r.createElement(c.Z,{size:c.Z.sizes.sm}):f?g||a||(a=r.createElement(d.Z,{title:"IA","aria-hidden":"true"})):g,l,Z)}));u.displayName="Button",u.sizes=l.Z.sizes,u.kinds=l.Z.kinds,u.types=l.Z.types;const h=u},108:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(25773),o=n(30808),i=n(27378),r=n(67468),s=(n(23615),n(75387));const d=["children"],l=r.ZP.div.withConfig({displayName:"ButtonGroup__Root",componentId:"tg-1yZ__sc-y8o0sr-0"})(["display:inline-flex;> "," + ",",> * + *{margin-left:var(--size-spacing-03);}"],s.Z.Style,s.Z.Style),c=(0,i.forwardRef)(((e,t)=>{let{children:n}=e,r=(0,o.Z)(e,d);const s=i.Children.toArray(n).map(((e,t)=>{const n={index:t,tabIndex:0,className:"".concat(e.props.className," button-group__child")};return i.cloneElement(e,Object.assign({},e.props,n,{key:e.key||t}))}));return i.createElement(l,(0,a.Z)({ref:t,role:"group"},r),s)}));c.displayName="ButtonGroup",c.Style=l;const m=c},70827:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>h,default:()=>f,frontMatter:()=>u,metadata:()=>k,toc:()=>g});var a=n(25773),o=(n(27378),n(35318)),i=n(80621),r=n(82544),s=n(23389),d=n(54479),l=n(93330),c=n(959),m=n(108),p=n(87954);const u={title:"Theme",description:"The Theme component is used to enable the use of CSS variables with the values available in Design Tokens."},h=void 0,k={unversionedId:"components/theme",id:"components/theme",title:"Theme",description:"The Theme component is used to enable the use of CSS variables with the values available in Design Tokens.",source:"@site/docs/components/theme.md",sourceDirName:"components",slug:"/components/theme",permalink:"/tangram-doc/en/docs/components/theme",draft:!1,editUrl:"https://github.com/ResultadosDigitais/tangram/edit/next/docusaurus/docs/components/theme.md",tags:[],version:"current",frontMatter:{title:"Theme",description:"The Theme component is used to enable the use of CSS variables with the values available in Design Tokens."},sidebar:"mySidebar",previous:{title:"StickyBar",permalink:"/tangram-doc/en/docs/components/stickybar"},next:{title:"Accordion",permalink:"/tangram-doc/en/docs/components/accordion"}},y={},g=[{value:"Feedback",id:"feedback",level:2}],Z={toc:g};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},Z,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{current:"docs",name:"theme",mdxType:"ComponentTab"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Theme")," component is used to create an ",(0,o.kt)("em",{parentName:"p"},"HTML")," element with the ",(0,o.kt)("inlineCode",{parentName:"p"},'data-tangram-theme="{theme-name}"')," attribute, in order to encapsulate your application and allow the use of CSS variables with the values available in ",(0,o.kt)(s.Z,{href:"../../../docs/foundations/color",mdxType:"Link"},"Design Tokens"),"."),(0,o.kt)(d.Z,{mdxType:"CardGrid"},(0,o.kt)(d.D,{mdxType:"CardGridItem"},(0,o.kt)(l.Z,{value:l.Z.kinds.lina,mdxType:"Theme"},(0,o.kt)(c.Z,{textColor:"--primary-text",mdxType:"Text"},"Text styled using CSS variable from the theme."),(0,o.kt)(m.Z,{mdxType:"ButtonGroup"},(0,o.kt)(p.Z,{mdxType:"Button"},"Primary action"),(0,o.kt)(p.Z,{kind:p.Z.kinds.secondary,mdxType:"Button"},"Secondary action"))))),(0,o.kt)("h2",{id:"feedback"},"Feedback"),(0,o.kt)(r.Z,{mdxType:"FeedbackBlock"}))}f.isMDXComponent=!0}}]);