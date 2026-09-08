"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4286],{54479:(e,t,n)=>{n.d(t,{D:()=>m,Z:()=>s});var a=n(25773),i=n(27378),o=n(67468),r=n(45666);const d=o.ZP.div`
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
`;const s=function(e){let{children:t,columns:n=1,...o}=e;return i.createElement(r.Z,null,(()=>i.createElement(d,(0,a.Z)({$columns:n},o),t)))};var l=n(89620);const c=(0,o.ZP)(l.Z)`
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
`;const m=function(e){let{children:t,featured:n=!1,centered:a=!1,className:o}=e;return i.createElement(c,{$featured:n,$centered:a,className:o},t)}},45666:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(27378),i=n(77524);function o(e){let{children:t,fallback:n}=e;return(0,i.Z)()?a.createElement(a.Fragment,null,t?.()):n??null}},87954:(e,t,n)=>{n.d(t,{Z:()=>f});var a,i=n(25773),o=n(30808),r=n(27378),d=n(67468),s=(n(23615),n(63559)),l=n(75387),c=n(26503);const m=["disabled","as","children","type","kind","size","startIcon","endIcon","ia","loading","fluid"],p=(0,d.ZP)(l.Z).withConfig({displayName:"Button__Root",componentId:"tg-1yZ__sc-7cbhwm-0"})([""]),u=(0,r.forwardRef)(((e,t)=>{let{disabled:n,as:d,children:l,type:f=u.types.button,kind:y=u.kinds.primary,size:k=u.sizes.md,startIcon:g,endIcon:h,ia:Z=!1,loading:b=!1,fluid:v=!1}=e,x=(0,o.Z)(e,m);return r.createElement(p,(0,i.Z)({ref:t,loading:b,fluid:v,forwardedAs:d,size:k,disabled:n||b,kind:y,type:f,ia:Z},x),b?r.createElement(c.Z,{size:c.Z.sizes.sm}):Z?g||a||(a=r.createElement(s.Z,{title:"IA","aria-hidden":"true"})):g,l,h)}));u.displayName="Button",u.sizes=l.Z.sizes,u.kinds=l.Z.kinds,u.types=l.Z.types;const f=u},42260:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(25773),i=n(30808),o=n(27378),r=n(31542),d=(n(23615),n(24308)),s=n(50046),l=n(61855),c=n(90496),m=n(66644),p=n(10716);const u=["onStart","onEnd","style","children","duration","from","to","hiddenVisibility","keepMounted","unmount","in"],f=(0,o.forwardRef)(((e,t)=>{let{onStart:n,onEnd:c,style:y,children:k=null,duration:g=f.durations.normal,from:h=0,to:Z=1,hiddenVisibility:b=!1,keepMounted:v=!0,unmount:x=!1,in:E=!1}=e,F=(0,i.Z)(e,u);const w=v&&!x,C=(0,o.useRef)(null),I=(0,o.useCallback)((e=>{C.current=(0,r.findDOMNode)(e)}),[]),z=(0,m.Z)([I,k.ref,t]),N=()=>(0,s.Z)(c)&&c({target:C.current}),T=()=>(0,s.Z)(n)&&n({target:C.current}),$=(0,l.Z)(g,"ms"),S={willChange:"opacity",transition:"opacity ".concat($,"ms var(--motion-timing-function-ease-in-out)"),opacity:h};let D=$,M={entering:{opacity:Z},entered:{opacity:Z},exiting:{opacity:h},exited:{opacity:h}};w||(M={entering:{opacity:h},entered:{opacity:Z},exiting:{opacity:h},exited:{opacity:h}},D={enter:0,exit:$});const R=o.isValidElement(k)&&k.props?k.props.style:{};return(0,p.Z)({keepMounted:!v||void 0,originName:"Fade",fallback:"Use `unmount` property instead."}),o.createElement(d.ZP,(0,a.Z)({mountOnEnter:!w,unmountOnExit:!w,nodeRef:C,onEnter:T,onEntered:N,onExit:T,onExited:N,in:E,timeout:D,appear:!0},F),((e,t)=>o.cloneElement(k,Object.assign({ref:z,style:Object.assign({visibility:b&&"exited"===e&&!E?"hidden":void 0},y,S,R,M[e])},t))))}));f.displayName="Fade",f.durations={extraFast:c.lI.extraFast,fast:c.lI.fast,normal:c.lI.normal,slow:c.lI.slow,extraSlow:c.lI.extraSlow,ultraSlow:c.lI.ultraSlow};const y=f},50895:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>h,default:()=>E,frontMatter:()=>g,metadata:()=>Z,toc:()=>v});var a=n(25773),i=n(27378),o=n(35318),r=n(80621),d=n(82544),s=n(54479),l=n(67468),c=n(87954),m=n(42260),p=n(89620),u=n(959),f=n(64723);const y=(0,l.ZP)(c.Z)`
  margin-bottom: var(--size-spacing-04);
`;const k=function(){const[e,t]=(0,i.useState)(!0);return i.createElement(i.Fragment,null,i.createElement(y,{kind:c.Z.kinds.secondary,onClick:()=>t((e=>!e))},e?"Fade out":"Fade in"),i.createElement(m.Z,{in:e},i.createElement(p.Z,null,i.createElement(u.Z,null,i.createElement(f.Z,{id:"FadeDefault.cardText"},"Click in the button to disappear this card.")))))},g={title:"Fade",description:"Fade is used to build animations on the opacity of an element."},h=void 0,Z={unversionedId:"components/fade",id:"components/fade",title:"Fade",description:"Fade is used to build animations on the opacity of an element.",source:"@site/docs/components/fade.md",sourceDirName:"components",slug:"/components/fade",permalink:"/tangram/en/docs/components/fade",draft:!1,editUrl:"https://github.com/ResultadosDigitais/tangram/edit/next/docusaurus/docs/components/fade.md",tags:[],version:"current",frontMatter:{title:"Fade",description:"Fade is used to build animations on the opacity of an element."},sidebar:"mySidebar",previous:{title:"EmptyState",permalink:"/tangram/en/docs/components/emptystate"},next:{title:"Grid (next)",permalink:"/tangram/en/docs/components/next/grid"}},b={},v=[{value:"Feedback",id:"feedback",level:2}],x={toc:v};function E(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},x,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.Z,{current:"docs",name:"fade",mdxType:"ComponentTab"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Fade")," is used to build opacity animations without removing the element from the canvas."),(0,o.kt)("p",null,"By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"Fade")," starts with normal opacity (100%). To make the element hidden, an opacity of 0% is applied. This effect is known as ",(0,o.kt)("inlineCode",{parentName:"p"},"Fade out"),"."),(0,o.kt)("p",null,"To make the element appear again, ",(0,o.kt)("inlineCode",{parentName:"p"},"Fade")," resets the opacity to 100%. This effect is known as ",(0,o.kt)("inlineCode",{parentName:"p"},"Fade in"),"."),(0,o.kt)(s.Z,{mdxType:"CardGrid"},(0,o.kt)(s.D,{centered:!0,mdxType:"CardGridItem"},(0,o.kt)(k,{mdxType:"FadeExample"}))),(0,o.kt)("h2",{id:"feedback"},"Feedback"),(0,o.kt)(d.Z,{mdxType:"FeedbackBlock"}))}E.isMDXComponent=!0}}]);