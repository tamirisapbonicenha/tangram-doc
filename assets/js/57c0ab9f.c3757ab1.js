"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8215],{54479:(e,t,n)=>{n.d(t,{D:()=>m,Z:()=>d});var o=n(25773),a=n(27378),s=n(67468),i=n(45666);const r=s.ZP.div`
  margin-bottom: var(--size-spacing-09);

  & > * {
    margin-bottom: var(--size-spacing-05);
  }

  ${e=>{let{$columns:t}=e;return t>=2&&s.iv`
      display: grid;
      column-gap: var(--size-spacing-05);
      row-gap: var(--size-spacing-05);
      grid-template-columns: repeat(${t}, 1fr);

      & > * {
        margin-bottom: 0;
      }
    `}}
`;const d=function(e){let{children:t,columns:n=1,...s}=e;return a.createElement(i.Z,null,(()=>a.createElement(r,(0,o.Z)({$columns:n},s),t)))};var c=n(89620);const l=(0,s.ZP)(c.Z)`
  height: 100%;

  p {
    &:only-child,
    &:last-child {
      margin-bottom: 0;
    }
  }

  ${e=>{let{$featured:t}=e;return t&&s.iv`
      border-color: var(--highlight-border);
    `}}

  ${e=>{let{$centered:t}=e;return t&&s.iv`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    `}}
`;const m=function(e){let{children:t,featured:n=!1,centered:o=!1,className:s}=e;return a.createElement(l,{$featured:n,$centered:o,className:s},t)}},23389:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(25773),a=n(27378),s=n(62957),i=n(85433);function r(e){let{children:t,...n}=e;return a.createElement(i.Z,(0,o.Z)({as:s.Z},n),t)}},45666:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(27378),a=n(77524);function s(e){let{children:t,fallback:n}=e;return(0,a.Z)()?o.createElement(o.Fragment,null,t?.()):n??null}},87954:(e,t,n)=>{n.d(t,{Z:()=>k});var o,a=n(25773),s=n(30808),i=n(27378),r=n(67468),d=(n(23615),n(63559)),c=n(75387),l=n(26503);const m=["disabled","as","children","type","kind","size","startIcon","endIcon","ia","loading","fluid"],p=(0,r.ZP)(c.Z).withConfig({displayName:"Button__Root",componentId:"tg-1yZ__sc-7cbhwm-0"})([""]),u=(0,i.forwardRef)(((e,t)=>{let{disabled:n,as:r,children:c,type:k=u.types.button,kind:h=u.kinds.primary,size:v=u.sizes.md,startIcon:g,endIcon:Z,ia:y=!1,loading:f=!1,fluid:b=!1}=e,T=(0,s.Z)(e,m);return i.createElement(p,(0,a.Z)({ref:t,loading:f,fluid:b,forwardedAs:r,size:v,disabled:n||f,kind:h,type:k,ia:y},T),f?i.createElement(l.Z,{size:l.Z.sizes.sm}):y?g||o||(o=i.createElement(d.Z,{title:"IA","aria-hidden":"true"})):g,c,Z)}));u.displayName="Button",u.sizes=c.Z.sizes,u.kinds=c.Z.kinds,u.types=c.Z.types;const k=u},108:(e,t,n)=>{n.d(t,{Z:()=>m});var o=n(25773),a=n(30808),s=n(27378),i=n(67468),r=(n(23615),n(75387));const d=["children"],c=i.ZP.div.withConfig({displayName:"ButtonGroup__Root",componentId:"tg-1yZ__sc-y8o0sr-0"})(["display:inline-flex;> "," + ",",> * + *{margin-left:var(--size-spacing-03);}"],r.Z.Style,r.Z.Style),l=(0,s.forwardRef)(((e,t)=>{let{children:n}=e,i=(0,a.Z)(e,d);const r=s.Children.toArray(n).map(((e,t)=>{const n={index:t,tabIndex:0,className:"".concat(e.props.className," button-group__child")};return s.cloneElement(e,Object.assign({},e.props,n,{key:e.key||t}))}));return s.createElement(c,(0,o.Z)({ref:t,role:"group"},i),r)}));l.displayName="ButtonGroup",l.Style=c;const m=l},7483:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>k,default:()=>y,frontMatter:()=>u,metadata:()=>h,toc:()=>g});var o=n(25773),a=(n(27378),n(35318)),s=n(80621),i=n(82544),r=n(23389),d=n(54479),c=n(93330),l=n(959),m=n(108),p=n(87954);const u={title:"Theme",description:"O componente Theme \xe9 usado para possibilitar o uso das vari\xe1veis CSS com os valores dispon\xedveis nos Design Tokens."},k=void 0,h={unversionedId:"components/theme",id:"components/theme",title:"Theme",description:"O componente Theme \xe9 usado para possibilitar o uso das vari\xe1veis CSS com os valores dispon\xedveis nos Design Tokens.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/components/theme.md",sourceDirName:"components",slug:"/components/theme",permalink:"/tangram-doc/docs/components/theme",draft:!1,editUrl:"https://github.com/ResultadosDigitais/tangram/edit/next/docusaurus/docs/components/theme.md",tags:[],version:"current",frontMatter:{title:"Theme",description:"O componente Theme \xe9 usado para possibilitar o uso das vari\xe1veis CSS com os valores dispon\xedveis nos Design Tokens."},sidebar:"mySidebar",previous:{title:"StickyBar",permalink:"/tangram-doc/docs/components/stickybar"},next:{title:"Accordion",permalink:"/tangram-doc/docs/components/accordion"}},v={},g=[{value:"Feedback",id:"feedback",level:2}],Z={toc:g};function y(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},Z,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(s.Z,{current:"docs",name:"theme",mdxType:"ComponentTab"}),(0,a.kt)("p",null,"O componente ",(0,a.kt)("inlineCode",{parentName:"p"},"Theme")," \xe9 usado para criar um elemento ",(0,a.kt)("em",{parentName:"p"},"HTML")," com o atributo ",(0,a.kt)("inlineCode",{parentName:"p"},'data-tangram-theme="{nome-do-tema}"'),", com o objetivo de encapsular sua aplica\xe7\xe3o e permitir o uso das vari\xe1veis CSS com os valores dispon\xedveis nos ",(0,a.kt)(r.Z,{href:"../../../docs/foundations/color",mdxType:"Link"},"Design Tokens"),"."),(0,a.kt)(d.Z,{mdxType:"CardGrid"},(0,a.kt)(d.D,{mdxType:"CardGridItem"},(0,a.kt)(c.Z,{value:c.Z.kinds.lina,mdxType:"Theme"},(0,a.kt)(l.Z,{textColor:"--primary-text",mdxType:"Text"},"Texto estilizado usando a vari\xe1vel CSS do tema."),(0,a.kt)(m.Z,{mdxType:"ButtonGroup"},(0,a.kt)(p.Z,{mdxType:"Button"},"A\xe7\xe3o prim\xe1ria"),(0,a.kt)(p.Z,{kind:p.Z.kinds.secondary,mdxType:"Button"},"A\xe7\xe3o secund\xe1ria"))))),(0,a.kt)("h2",{id:"feedback"},"Feedback"),(0,a.kt)(i.Z,{mdxType:"FeedbackBlock"}))}y.isMDXComponent=!0}}]);