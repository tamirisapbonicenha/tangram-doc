"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3149],{54479:(e,t,n)=>{n.d(t,{D:()=>m,Z:()=>c});var a=n(25773),o=n(27378),i=n(67468),r=n(45666);const d=i.ZP.div`
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
`;const c=function(e){let{children:t,columns:n=1,...i}=e;return o.createElement(r.Z,null,(()=>o.createElement(d,(0,a.Z)({$columns:n},i),t)))};var s=n(89620);const l=(0,i.ZP)(s.Z)`
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
`;const m=function(e){let{children:t,featured:n=!1,centered:a=!1,className:i}=e;return o.createElement(l,{$featured:n,$centered:a,className:i},t)}},45666:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(27378),o=n(77524);function i(e){let{children:t,fallback:n}=e;return(0,o.Z)()?a.createElement(a.Fragment,null,t?.()):n??null}},87954:(e,t,n)=>{n.d(t,{Z:()=>f});var a,o=n(25773),i=n(30808),r=n(27378),d=n(67468),c=(n(23615),n(63559)),s=n(75387),l=n(26503);const m=["disabled","as","children","type","kind","size","startIcon","endIcon","ia","loading","fluid"],u=(0,d.ZP)(s.Z).withConfig({displayName:"Button__Root",componentId:"tg-1yZ__sc-7cbhwm-0"})([""]),p=(0,r.forwardRef)(((e,t)=>{let{disabled:n,as:d,children:s,type:f=p.types.button,kind:g=p.kinds.primary,size:y=p.sizes.md,startIcon:k,endIcon:Z,ia:b=!1,loading:h=!1,fluid:v=!1}=e,E=(0,i.Z)(e,m);return r.createElement(u,(0,o.Z)({ref:t,loading:h,fluid:v,forwardedAs:d,size:y,disabled:n||h,kind:g,type:f,ia:b},E),h?r.createElement(l.Z,{size:l.Z.sizes.sm}):b?k||a||(a=r.createElement(c.Z,{title:"IA","aria-hidden":"true"})):k,s,Z)}));p.displayName="Button",p.sizes=s.Z.sizes,p.kinds=s.Z.kinds,p.types=s.Z.types;const f=p},42260:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(25773),o=n(30808),i=n(27378),r=n(31542),d=(n(23615),n(24308)),c=n(50046),s=n(61855),l=n(90496),m=n(66644),u=n(10716);const p=["onStart","onEnd","style","children","duration","from","to","hiddenVisibility","keepMounted","unmount","in"],f=(0,i.forwardRef)(((e,t)=>{let{onStart:n,onEnd:l,style:g,children:y=null,duration:k=f.durations.normal,from:Z=0,to:b=1,hiddenVisibility:h=!1,keepMounted:v=!0,unmount:E=!1,in:x=!1}=e,F=(0,o.Z)(e,p);const z=v&&!E,w=(0,i.useRef)(null),C=(0,i.useCallback)((e=>{w.current=(0,r.findDOMNode)(e)}),[]),I=(0,m.Z)([C,y.ref,t]),N=()=>(0,c.Z)(l)&&l({target:w.current}),$=()=>(0,c.Z)(n)&&n({target:w.current}),S=(0,s.Z)(k,"ms"),T={willChange:"opacity",transition:"opacity ".concat(S,"ms var(--motion-timing-function-ease-in-out)"),opacity:Z};let D=S,M={entering:{opacity:b},entered:{opacity:b},exiting:{opacity:Z},exited:{opacity:Z}};z||(M={entering:{opacity:Z},entered:{opacity:b},exiting:{opacity:Z},exited:{opacity:Z}},D={enter:0,exit:S});const P=i.isValidElement(y)&&y.props?y.props.style:{};return(0,u.Z)({keepMounted:!v||void 0,originName:"Fade",fallback:"Use `unmount` property instead."}),i.createElement(d.ZP,(0,a.Z)({mountOnEnter:!z,unmountOnExit:!z,nodeRef:w,onEnter:$,onEntered:N,onExit:$,onExited:N,in:x,timeout:D,appear:!0},F),((e,t)=>i.cloneElement(y,Object.assign({ref:I,style:Object.assign({visibility:h&&"exited"===e&&!x?"hidden":void 0},g,T,P,M[e])},t))))}));f.displayName="Fade",f.durations={extraFast:l.lI.extraFast,fast:l.lI.fast,normal:l.lI.normal,slow:l.lI.slow,extraSlow:l.lI.extraSlow,ultraSlow:l.lI.ultraSlow};const g=f},91033:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>Z,default:()=>x,frontMatter:()=>k,metadata:()=>b,toc:()=>v});var a=n(25773),o=n(27378),i=n(35318),r=n(80621),d=n(82544),c=n(54479),s=n(67468),l=n(87954),m=n(42260),u=n(89620),p=n(959),f=n(64723);const g=(0,s.ZP)(l.Z)`
  margin-bottom: var(--size-spacing-04);
`;const y=function(){const[e,t]=(0,o.useState)(!0);return o.createElement(o.Fragment,null,o.createElement(g,{kind:l.Z.kinds.secondary,onClick:()=>t((e=>!e))},e?"Fade out":"Fade in"),o.createElement(m.Z,{in:e},o.createElement(u.Z,null,o.createElement(p.Z,null,o.createElement(f.Z,{id:"FadeDefault.cardText"},"Click in the button to disappear this card.")))))},k={title:"Fade",description:"Fade \xe9 utilizado para construir anima\xe7\xf5es na opacidade em um elemento."},Z=void 0,b={unversionedId:"components/fade",id:"components/fade",title:"Fade",description:"Fade \xe9 utilizado para construir anima\xe7\xf5es na opacidade em um elemento.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/components/fade.md",sourceDirName:"components",slug:"/components/fade",permalink:"/tangram-doc/docs/components/fade",draft:!1,editUrl:"https://github.com/ResultadosDigitais/tangram/edit/next/docusaurus/docs/components/fade.md",tags:[],version:"current",frontMatter:{title:"Fade",description:"Fade \xe9 utilizado para construir anima\xe7\xf5es na opacidade em um elemento."},sidebar:"mySidebar",previous:{title:"EmptyState",permalink:"/tangram-doc/docs/components/emptystate"},next:{title:"Grid (next)",permalink:"/tangram-doc/docs/components/next/grid"}},h={},v=[{value:"Feedback",id:"feedback",level:2}],E={toc:v};function x(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},E,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r.Z,{current:"docs",name:"fade",mdxType:"ComponentTab"}),(0,i.kt)("p",null,"O ",(0,i.kt)("inlineCode",{parentName:"p"},"Fade")," \xe9 utilizado para construir anima\xe7\xf5es de opacidade sem remover o elemento da tela."),(0,i.kt)("p",null,"Por padr\xe3o, o ",(0,i.kt)("inlineCode",{parentName:"p"},"Fade")," come\xe7a com a opacidade normal (100%). Para fazer com que o elemento fique escondido, \xe9 aplicado uma opacidade de 0%. Esse efeito \xe9 conhecido como ",(0,i.kt)("inlineCode",{parentName:"p"},"Fade out"),"."),(0,i.kt)("p",null,"Para fazer com que o elemento apare\xe7a novamente, o ",(0,i.kt)("inlineCode",{parentName:"p"},"Fade")," faz com que a opacidade volte a ser 100%. Esse efeito \xe9 conhecido como ",(0,i.kt)("inlineCode",{parentName:"p"},"Fade in"),"."),(0,i.kt)(c.Z,{mdxType:"CardGrid"},(0,i.kt)(c.D,{centered:!0,mdxType:"CardGridItem"},(0,i.kt)(y,{mdxType:"FadeExample"}))),(0,i.kt)("h2",{id:"feedback"},"Feedback"),(0,i.kt)(d.Z,{mdxType:"FeedbackBlock"}))}x.isMDXComponent=!0}}]);