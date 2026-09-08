"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4581],{54479:(e,t,a)=>{a.d(t,{D:()=>u,Z:()=>s});var i=a(25773),n=a(27378),r=a(67468),o=a(45666);const l=r.ZP.div`
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
`;const s=function(e){let{children:t,columns:a=1,...r}=e;return n.createElement(o.Z,null,(()=>n.createElement(l,(0,i.Z)({$columns:a},r),t)))};var c=a(89620);const d=(0,r.ZP)(c.Z)`
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
`;const u=function(e){let{children:t,featured:a=!1,centered:i=!1,className:r}=e;return n.createElement(d,{$featured:a,$centered:i,className:r},t)}},17311:(e,t,a)=>{a.d(t,{Do:()=>p,pM:()=>z,ZP:()=>o});var i=a(25773),n=a(27378),r=a(54479);const o=function(e){let{children:t,columns:a=2,...o}=e;return n.createElement(r.Z,(0,i.Z)({columns:a},o),t)};var l=a(64723),s=a(67468),c=a(42900),d=a(28219);const u=s.ZP.p`
  margin-top: var(--size-spacing-02);
  margin-bottom: var(--size-spacing-05);
`;const g=function(e){return n.createElement(u,e)},m=(0,s.ZP)(r.D)`
  background-color: var(--neutral-surface-low-emphasis);
  border: 1px solid var(--success-border);
  padding: 0;
`,h=s.ZP.div`
  text-align: left;
  padding: var(--size-spacing-04);
  width: 100%;
  border-radius: 0 0 calc(var(--border-radius-md) + 2px)
    calc(var(--border-radius-md) + 2px);

  background-color: var(--neutral-surface);
`,v=s.ZP.div`
  width: 100%;
  text-align: center;
  padding: var(--size-spacing-04);

  p {
    font: var(--text-md-regular) !important;
  }
`;const p=function(e){let{title:t,children:a}=e;return n.createElement(m,{centered:!0},n.createElement(v,null,a),n.createElement(h,null,n.createElement(c.Z,{size:c.Z.sizes.md,kind:c.Z.kinds.success,icon:n.createElement(d.Z,{title:"Checkmark icon"})},n.createElement(l.Z,{id:"doanddont.do"},"Do")),t&&n.createElement(g,null,t)))};var f=a(4492);const b=(0,s.ZP)(r.D)`
  background-color: var(--neutral-surface-low-emphasis);
  border: 1px solid var(--danger-border);
  padding: 0;
`,k=s.ZP.div`
  text-align: left;
  padding: var(--size-spacing-04);
  width: 100%;
  border-radius: 0 0 calc(var(--border-radius-md) + 2px)
    calc(var(--border-radius-md) + 2px);

  background-color: var(--neutral-surface);
`,x=s.ZP.div`
  width: 100%;
  text-align: center;
  padding: var(--size-spacing-04);

  p {
    font: var(--text-md-regular) !important;
  }
`;const z=function(e){let{title:t,children:a}=e;return n.createElement(b,{centered:!0},n.createElement(x,null,a),n.createElement(k,null,n.createElement(c.Z,{size:c.Z.sizes.md,kind:c.Z.kinds.danger,icon:n.createElement(f.Z,{title:"Times icon"})},n.createElement(l.Z,{id:"doanddont.dont"},"Don't")),t&&n.createElement(g,null,t)))}},45666:(e,t,a)=>{a.d(t,{Z:()=>r});var i=a(27378),n=a(77524);function r(e){let{children:t,fallback:a}=e;return(0,n.Z)()?i.createElement(i.Fragment,null,t?.()):a??null}},42900:(e,t,a)=>{a.d(t,{Z:()=>z});var i=a(25773),n=a(30808),r=a(27378),o=a(4492),l=(a(23615),a(67468)),s=a(61380),c=a(90496),d=a(50046),u=a(10716),g=a(82985);const m={[c.$O.DEFAULT]:{background:"var(--neutral-surface-low-emphasis)",backgroundHover:"var(--neutral-surface-hover)",color:"var(--neutral-text-high-emphasis)",fill:"var(--neutral-icon-high-emphasis)"},[c.$O.PRIMARY]:{background:"var(--primary-surface-high-emphasis)",backgroundHover:"var(--primary-surface-hover)",color:"var(--neutral-text-high-emphasis)",fill:"var(--neutral-icon-high-emphasis)"},[c.$O.SUCCESS]:{background:"var(--success-surface-high-emphasis)",backgroundHover:"var(--success-surface-hover)",color:"var(--neutral-text-high-emphasis)",fill:"var(--neutral-icon-high-emphasis)"},[c.$O.DANGER]:{background:"var(--danger-surface-high-emphasis)",backgroundHover:"var(--danger-surface-hover)",color:"var(--neutral-text-inverse)",fill:"var(--neutral-icon-inverse)"},[c.$O.WARNING]:{background:"var(--warning-surface-high-emphasis)",backgroundHover:"var(--warning-surface-hover)",color:"var(--neutral-text-high-emphasis)",fill:"var(--neutral-icon-high-emphasis)"},[c.$O.HELP]:{background:"var(--highlight-surface-high-emphasis)",backgroundHover:"var(--highlight-surface-hover)",color:"var(--neutral-text-inverse)",fill:"var(--neutral-icon-inverse)"}},h=(0,l.iv)([""," "," &[data-tg-ia='true']{background-color:transparent;background-image:var(--tg-ia-surface);color:var(--neutral-text-high-emphasis);svg{fill:var(--neutral-icon-high-emphasis);}&:hover,&:active,&:focus-within{background-color:transparent;color:var(--neutral-text-high-emphasis);svg{fill:var(--neutral-icon-high-emphasis);}}&[role='button']{cursor:pointer;user-select:none;&:hover,&:active,&:focus-within{","}}}"],g.Z,(e=>{let{$tagKind:t,$isRemovable:a,onClick:i}=e;const n=m[a?c.$O.DEFAULT:t]||m[c.$O.DEFAULT],{background:r,color:o,fill:s,backgroundHover:d}=n;return(0,l.iv)(["background-color:",";color:",";svg{fill:",";}",""],r,o,s,(i||a)&&(e=>{let{backgroundHover:t,color:a,fill:i,onClick:n}=e;return(0,l.iv)([""," &:hover,&:active,&:focus-within{color:",";background-color:",";svg{fill:",";}}"],n&&(0,l.iv)(["cursor:pointer;user-select:none;"]),a,t,i)})({backgroundHover:d,color:o,fill:s,onClick:i}))}),g.Z.Hover),v=["children","startIcon","icon","removable","onDelete","onClick","kind","clickable","size","ia"],p={[c.zf.MD]:{height:"24px",font:"var(--text-xs-bold)",iconSize:"xs"},[c.zf.LG]:{height:"32px",font:"var(--text-sm-bold)",iconSize:"sm"},[c.zf.XL]:{height:"40px",font:"var(--text-md-bold)",iconSize:"md"}},f=l.ZP.div.withConfig({displayName:"Tag__Root",componentId:"tg-1yZ__sc-1q0hqb4-0"})(["--focus-border-radius:var(--border-radius-xs);"," gap:var(--size-spacing-01);border-radius:var(--border-radius-xs);padding:0 var(--size-spacing-02);display:inline-flex;align-items:center;width:max-content;"," "," ",""],s.Z,h,(e=>{let{$size:t}=e;const{height:a,font:i}=p[t]||p[c.zf.MD];return(0,l.iv)(["height:",";font:",";"],a,i)}),(e=>{let{$isRemovable:t}=e;return t&&(0,l.iv)(["gap:var(--size-spacing-02);"])})),b=l.ZP.span.withConfig({displayName:"Tag__Display",componentId:"tg-1yZ__sc-1q0hqb4-1"})(["white-space:nowrap;text-overflow:ellipsis;overflow:hidden;"]),k=l.ZP.div.withConfig({displayName:"Tag__CloseButton",componentId:"tg-1yZ__sc-1q0hqb4-2"})(["display:flex;align-items:center;cursor:pointer;"," svg{fill:var(--neutral-icon-low-emphasis);}&:hover:not([disabled]){background-color:transparent;svg{fill:var(--neutral-icon-high-emphasis);}}"],(e=>{let{$size:t}=e;const{height:a}=p[t]||p[c.zf.MD];return(0,l.iv)(["height:",";"],a)})),x=(0,r.forwardRef)(((e,t)=>{let{children:a,startIcon:l,icon:s,removable:g,onDelete:m,onClick:h,kind:z=x.kinds.default,clickable:w=!0,size:y=x.sizes.md,ia:Z=!1}=e,E=(0,n.Z)(e,v);const{iconSize:T}=p[y]||p[c.zf.MD],$=w&&(0,d.Z)(h),D=(0,d.Z)(m)||g,C=s||l,R=(0,r.useCallback)((()=>C?(0,r.isValidElement)(C)&&(0,r.cloneElement)(C,Object.assign({},C.props,{size:T})):null),[C,T]);return(0,r.useEffect)((()=>{z!==x.kinds.default&&"string"==typeof a&&a.split(" ").length>2&&console.warn("Tangram: is not recommended to use more than two words")}),[z,a]),(0,u.Z)({removable:g,originName:"Tag",fallback:"Use `onDelete` property as callback to define automatically the display with delete icon button"}),(0,u.Z)({startIcon:l,originName:"Tag",fallback:"Replace by `icon` property"}),(0,u.Z)({clickable:!w||void 0,originName:"Tag",fallback:"Use `onClick` to automatically display the appropriate styles of hover, focus and active states"}),r.createElement(f,(0,i.Z)({$tagKind:z,$size:y,$isRemovable:D,"data-tg-ia":Z||void 0,onClick:$?h:void 0,tabIndex:$?0:void 0,role:$?"button":void 0,onKeyDown:$?e=>{$&&("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),null==h||h(e)))}:void 0},E,{ref:t}),R(),a&&r.createElement(b,{$isRemovable:D},a),D&&r.createElement(k,{$size:y,onClick:e=>{e.stopPropagation(),m(e)},role:"button"},r.createElement(o.Z,{size:T,title:"Remove tag",titleId:"idIconCloseTag"})))}));x.displayName="Tag",x.Style=f,x.kinds={default:c.$O.DEFAULT,primary:c.$O.PRIMARY,success:c.$O.SUCCESS,danger:c.$O.DANGER,warning:c.$O.WARNING,help:c.$O.HELP},x.sizes={md:c.zf.MD,lg:c.zf.LG,xl:c.zf.XL};const z=x},28219:(e,t,a)=>{a.d(t,{Z:()=>v});var i,n,r=a(25773),o=a(30808),l=a(27378),s=a(23615),c=a.n(s),d=a(33842),u=a(79804),g=a(20590);const m=["size","title","titleId"];function h(e){let{size:t=d.J.md,title:a,titleId:s}=e,c=(0,o.Z)(e,m);const{kind:h}=(0,g.a)(),v=d.d.get(t);return s=(0,u.Z)(s),"duotone"===h?l.createElement("svg",(0,r.Z)({width:v.width,height:v.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":s},c),a?l.createElement("title",{id:s},a):null,i||(i=l.createElement("path",{d:"M9.114 18.16l-5.85-5.85a.9.9 0 010-1.274l1.272-1.272a.9.9 0 011.273 0l3.941 3.94 8.44-8.44a.9.9 0 011.274 0l1.272 1.272a.9.9 0 010 1.273l-10.35 10.35a.9.9 0 01-1.272 0z"}))):l.createElement("svg",(0,r.Z)({width:v.width,height:v.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":s},c),a?l.createElement("title",{id:s},a):null,n||(n=l.createElement("path",{d:"M9.114 18.16l-5.85-5.85a.9.9 0 010-1.274l1.272-1.272a.9.9 0 011.273 0l3.941 3.94 8.44-8.44a.9.9 0 011.274 0l1.272 1.272a.9.9 0 010 1.273l-10.35 10.35a.9.9 0 01-1.272 0z"})))}h.sizes=d.J,h.propTypes={size:c().oneOf([h.sizes.xs,h.sizes.sm,h.sizes.md,h.sizes.lg,h.sizes.xl]),titleId:c().string,title:c().string.isRequired};const v=h},59235:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>g});var i=a(25773),n=(a(27378),a(35318)),r=a(17311),o=a(82544),l=a(959);const s={title:"Localization"},c="Localization",d={unversionedId:"guidelines/localization",id:"guidelines/localization",title:"Localization",description:"localization}",source:"@site/docs/guidelines/localization.md",sourceDirName:"guidelines",slug:"/guidelines/localization",permalink:"/tangram-doc/en/docs/guidelines/localization",draft:!1,editUrl:"https://github.com/ResultadosDigitais/tangram/edit/next/docusaurus/docs/guidelines/localization.md",tags:[],version:"current",frontMatter:{title:"Localization"},sidebar:"mySidebar",previous:{title:"Writing",permalink:"/tangram-doc/en/docs/guidelines/writing"},next:{title:"Colors",permalink:"/tangram-doc/en/docs/foundations/color"}},u={},g=[{value:"Cultural differences",id:"cultural-differences",level:2},{value:"Embedded text",id:"embedded-text",level:2},{value:"Spacing",id:"spacing",level:2},{value:"Coins, date and time",id:"coins-date-time",level:2},{value:"Feedback",id:"feedback",level:2}],m={toc:g};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"localization"},"Localization"),(0,n.kt)("p",null,"RD Station is committed to maintaining a high standard of quality and experience for all customers, regardless of country or language. Therefore, when designing or updating product interfaces, always keep in mind that they may change when translated."),(0,n.kt)("h2",{id:"cultural-differences"},"Cultural differences"),(0,n.kt)("p",null,'In Brazil, the \ud83d\udc4d\ud83c\udffd gesture is seen as an affirmation, positive, legal. In some countries in Africa and Southeast Asia, the famous "joinha" has a sexual connotation, making it an obscene gesture.'),(0,n.kt)("p",null,"That's why we think about every detail before publishing any visible changes to our tools."),(0,n.kt)("h2",{id:"embedded-text"},"Embedded text"),(0,n.kt)("p",null,"Avoid placing embedded text inside images as this makes translation difficult and even impossible in some cases. An alternative to this is to superimpose text elements on top of images using CSS."),(0,n.kt)("h2",{id:"spacing"},"Spacing"),(0,n.kt)("p",null,"Remember to always leave enough space already foreseeing translations in other languages, which may contain more characters than Portuguese."),(0,n.kt)("p",null,"In this sense, avoid texts in narrow columns, at the risk of breaking the design balance when translated."),(0,n.kt)("p",null,"This guidance is also valid for values, which when converted into foreign currencies, can grow."),(0,n.kt)("h2",{id:"coins-date-time"},"Coins, date and time"),(0,n.kt)("p",null,"To indicate monetary values, we always use ISO 4217, which defines a three-letter code for currency. For simple time indication, we use the format XX:XX (24 hours)."),(0,n.kt)(r.ZP,{mdxType:"DoAndDont"},(0,n.kt)(r.Do,{mdxType:"Do"},(0,n.kt)(l.Z,{mdxType:"Text"},"1.200 BRL"),(0,n.kt)(l.Z,{mdxType:"Text"},"54 USD"),(0,n.kt)(l.Z,{mdxType:"Text"},"19/09/2019"),(0,n.kt)(l.Z,{mdxType:"Text"},"14:30"),(0,n.kt)(l.Z,{mdxType:"Text"},"2:33")),(0,n.kt)(r.pM,{mdxType:"Dont"},(0,n.kt)(l.Z,{mdxType:"Text"},"R$ 300.00"),(0,n.kt)(l.Z,{mdxType:"Text"},"US$ 40,25"),(0,n.kt)(l.Z,{mdxType:"Text"},"19.09.2019"),(0,n.kt)(l.Z,{mdxType:"Text"},"2:30AM"),(0,n.kt)(l.Z,{mdxType:"Text"},"02h19"))),(0,n.kt)("h2",{id:"feedback"},"Feedback"),(0,n.kt)(o.Z,{mdxType:"FeedbackBlock"}))}h.isMDXComponent=!0}}]);