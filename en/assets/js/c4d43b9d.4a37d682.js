"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1978],{54479:(e,t,n)=>{n.d(t,{D:()=>p,Z:()=>l});var i=n(25773),r=n(27378),o=n(67468),a=n(45666);const s=o.ZP.div`
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
`;const l=function(e){let{children:t,columns:n=1,...o}=e;return r.createElement(a.Z,null,(()=>r.createElement(s,(0,i.Z)({$columns:n},o),t)))};var d=n(89620);const c=(0,o.ZP)(d.Z)`
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
`;const p=function(e){let{children:t,featured:n=!1,centered:i=!1,className:o}=e;return r.createElement(c,{$featured:n,$centered:i,className:o},t)}},45666:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(27378),r=n(77524);function o(e){let{children:t,fallback:n}=e;return(0,r.Z)()?i.createElement(i.Fragment,null,t?.()):n??null}},97412:(e,t,n)=>{n.d(t,{Sj:()=>v,ZP:()=>h,aA:()=>m,c1:()=>p,tC:()=>u});var i,r=n(50669),o=n(67468),a=n(90496),s=n(61855),l=n(1070),d=n(58190);const c=Object.values(a.Uc),p=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c;return t.map((t=>f.media[t](i||(i=(0,r.Z)(["",""])),e(t))))},m=e=>{if(e)return"object"==typeof e?p((t=>e[t]&&(0,o.iv)(["align-items:",";"],e[t]))):(0,o.iv)(["align-items:",";"],e)},u=e=>{if(e)return"object"==typeof e?p((t=>e[t]&&(0,o.iv)(["justify-content:",";"],e[t]))):(0,o.iv)(["justify-content:",";"],e)},b={columns:{smallMobile:12,mobile:12,tablet:12,desktop:12,largeDesktop:12},gutterWidth:{smallMobile:d.sizeSpacing04,mobile:d.sizeSpacing04,tablet:d.sizeSpacing05,desktop:d.sizeSpacing05,largeDesktop:d.sizeSpacing05},paddingWidth:{smallMobile:d.sizeSpacing04,mobile:d.sizeSpacing06,tablet:d.sizeSpacing08,desktop:d.sizeSpacing08,largeDesktop:d.sizeSpacing08},container:{smallMobile:"full",mobile:"full",tablet:"full",desktop:d.breakpointLg,largeDesktop:d.breakpointXl},breakpoints:{smallMobile:0,mobile:d.breakpointXs,tablet:d.breakpointSm,desktop:d.breakpointMd,largeDesktop:d.breakpointLg}},g=Object.keys(b.breakpoints).reduce(((e,t)=>{const n=b.breakpoints[t],i=e;return i[t]=function(e){return function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];if(n)return e?(0,o.iv)(["@media ","{","}"],e,(0,o.iv)(...n)):(0,o.iv)(...n)}}(n&&"(min-width: ".concat(n,")")),i}),{}),k=Object.entries(b.breakpoints).reduce(((e,t,n,i)=>{const r=[],[o,a]=t,l=i[n+1];if(a&&r.push("(min-width: ".concat(a,")")),l){const[,e]=l;e&&r.push("(max-width: ".concat((0,s.Z)(e)-1,"px)"))}const d=r.join(" and ");return Object.assign({},e,{[o]:"@media ".concat(d)})}),{}),v=()=>{let e;for(let t in k)(0,l.Z)(k[t])&&(e=t);return e},f=Object.assign({},b,{media:g,mediaQuery:k}),h=f},36590:(e,t,n)=>{n.d(t,{Z:()=>d});var i=n(27378),r=n(23615),o=n.n(r),a=n(90496),s=n(97412);const l=e=>{let{children:t=null,only:n=null}=e;const r=(0,s.Sj)();if(!n)return null;let o=!0;if(Array.isArray(n))for(let i=0;i<n.length;i++)r===n[i]&&(o=!1);else n===r&&(o=!1);return o?i.createElement(i.Fragment,null,t):null};l.displayName="Hidden",l.viewports={smallMobile:a.Uc.smallMobile,mobile:a.Uc.mobile,tablet:a.Uc.tablet,desktop:a.Uc.desktop,largeDesktop:a.Uc.largeDesktop},l.propTypes={only:o().oneOfType([o().oneOf([l.viewports.smallMobile,l.viewports.mobile,l.viewports.tablet,l.viewports.desktop,l.viewports.largeDesktop]),o().arrayOf(o().oneOf([l.viewports.smallMobile,l.viewports.mobile,l.viewports.tablet,l.viewports.desktop,l.viewports.largeDesktop]))]),children:o().node};const d=l},1070:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(27378);const r=e=>{const t=e?e.replace(/^@media( ?)/m,""):"",n="undefined"!==window?window.matchMedia:null,[r,o]=(0,i.useState)((()=>!!n&&n(t).matches));return(0,i.useEffect)((()=>{if(!n)return;let e=!0;const i=n(t),r=()=>e&&o(i.matches);return r(),i.addListener(r),()=>{e=!1,i.removeListener(r)}}),[t,n]),r}},87074:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>k,frontMatter:()=>c,metadata:()=>m,toc:()=>b});var i=n(25773),r=(n(27378),n(35318)),o=n(80621),a=n(82544),s=n(54479),l=n(36590),d=n(89620);const c={title:"Hidden",description:"Hidden is responsible for hiding elements in the render tree, according to the viewport."},p=void 0,m={unversionedId:"components/hidden",id:"components/hidden",title:"Hidden",description:"Hidden is responsible for hiding elements in the render tree, according to the viewport.",source:"@site/docs/components/hidden.md",sourceDirName:"components",slug:"/components/hidden",permalink:"/tangram/en/docs/components/hidden",draft:!1,editUrl:"https://github.com/ResultadosDigitais/tangram/edit/next/docusaurus/docs/components/hidden.md",tags:[],version:"current",frontMatter:{title:"Hidden",description:"Hidden is responsible for hiding elements in the render tree, according to the viewport."},sidebar:"mySidebar",previous:{title:"Grid",permalink:"/tangram/en/docs/components/grid"},next:{title:"InlineGroup",permalink:"/tangram/en/docs/components/inlinegroup"}},u={},b=[{value:"Feedback",id:"feedback",level:2}],g={toc:b};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{current:"docs",name:"hidden",mdxType:"ComponentTab"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Hidden")," is responsible for hiding elements in the render tree, according to the ",(0,r.kt)("inlineCode",{parentName:"p"},"viewport"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To test the examples below, use the Device Toolbar, available in developer tools, or resize your browser window.")),(0,r.kt)(s.Z,{mdxType:"CardGrid"},(0,r.kt)(s.D,{mdxType:"CardGridItem"},(0,r.kt)(l.Z,{only:l.Z.viewports.mobile,mdxType:"Hidden"},(0,r.kt)(d.Z,{style:{marginBottom:"var(--size-spacing-02)"},mdxType:"Card"},"Hidden in mobile viewport")),(0,r.kt)(l.Z,{only:l.Z.viewports.tablet,mdxType:"Hidden"},(0,r.kt)(d.Z,{style:{marginBottom:"var(--size-spacing-02)"},mdxType:"Card"},"Hidden in tablet viewport")),(0,r.kt)(d.Z,{mdxType:"Card"},"Always visible"))),(0,r.kt)("h2",{id:"feedback"},"Feedback"),(0,r.kt)(a.Z,{mdxType:"FeedbackBlock"}))}k.isMDXComponent=!0},50669:(e,t,n)=>{function i(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,{Z:()=>i})}}]);