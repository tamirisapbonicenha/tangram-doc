"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8793],{54479:(e,t,n)=>{n.d(t,{D:()=>u,Z:()=>l});var i=n(25773),a=n(27378),r=n(67468),o=n(45666);const s=r.ZP.div`
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
`;const l=function(e){let{children:t,columns:n=1,...r}=e;return a.createElement(o.Z,null,(()=>a.createElement(s,(0,i.Z)({$columns:n},r),t)))};var c=n(89620);const d=(0,r.ZP)(c.Z)`
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
`;const u=function(e){let{children:t,featured:n=!1,centered:i=!1,className:r}=e;return a.createElement(d,{$featured:n,$centered:i,className:r},t)}},17311:(e,t,n)=>{n.d(t,{Do:()=>v,pM:()=>w,ZP:()=>o});var i=n(25773),a=n(27378),r=n(54479);const o=function(e){let{children:t,columns:n=2,...o}=e;return a.createElement(r.Z,(0,i.Z)({columns:n},o),t)};var s=n(64723),l=n(67468),c=n(42900),d=n(28219);const u=l.ZP.p`
  margin-top: var(--size-spacing-02);
  margin-bottom: var(--size-spacing-05);
`;const h=function(e){return a.createElement(u,e)},m=(0,l.ZP)(r.D)`
  background-color: var(--neutral-surface-low-emphasis);
  border: 1px solid var(--success-border);
  padding: 0;
`,g=l.ZP.div`
  text-align: left;
  padding: var(--size-spacing-04);
  width: 100%;
  border-radius: 0 0 calc(var(--border-radius-md) + 2px)
    calc(var(--border-radius-md) + 2px);

  background-color: var(--neutral-surface);
`,p=l.ZP.div`
  width: 100%;
  text-align: center;
  padding: var(--size-spacing-04);

  p {
    font: var(--text-md-regular) !important;
  }
`;const v=function(e){let{title:t,children:n}=e;return a.createElement(m,{centered:!0},a.createElement(p,null,n),a.createElement(g,null,a.createElement(c.Z,{size:c.Z.sizes.md,kind:c.Z.kinds.success,icon:a.createElement(d.Z,{title:"Checkmark icon"})},a.createElement(s.Z,{id:"doanddont.do"},"Do")),t&&a.createElement(h,null,t)))};var f=n(4492);const k=(0,l.ZP)(r.D)`
  background-color: var(--neutral-surface-low-emphasis);
  border: 1px solid var(--danger-border);
  padding: 0;
`,b=l.ZP.div`
  text-align: left;
  padding: var(--size-spacing-04);
  width: 100%;
  border-radius: 0 0 calc(var(--border-radius-md) + 2px)
    calc(var(--border-radius-md) + 2px);

  background-color: var(--neutral-surface);
`,Z=l.ZP.div`
  width: 100%;
  text-align: center;
  padding: var(--size-spacing-04);

  p {
    font: var(--text-md-regular) !important;
  }
`;const w=function(e){let{title:t,children:n}=e;return a.createElement(k,{centered:!0},a.createElement(Z,null,n),a.createElement(b,null,a.createElement(c.Z,{size:c.Z.sizes.md,kind:c.Z.kinds.danger,icon:a.createElement(f.Z,{title:"Times icon"})},a.createElement(s.Z,{id:"doanddont.dont"},"Don't")),t&&a.createElement(h,null,t)))}},45666:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(27378),a=n(77524);function r(e){let{children:t,fallback:n}=e;return(0,a.Z)()?i.createElement(i.Fragment,null,t?.()):n??null}},87954:(e,t,n)=>{n.d(t,{Z:()=>g});var i,a=n(25773),r=n(30808),o=n(27378),s=n(67468),l=(n(23615),n(63559)),c=n(75387),d=n(26503);const u=["disabled","as","children","type","kind","size","startIcon","endIcon","ia","loading","fluid"],h=(0,s.ZP)(c.Z).withConfig({displayName:"Button__Root",componentId:"tg-1yZ__sc-7cbhwm-0"})([""]),m=(0,o.forwardRef)(((e,t)=>{let{disabled:n,as:s,children:c,type:g=m.types.button,kind:p=m.kinds.primary,size:v=m.sizes.md,startIcon:f,endIcon:k,ia:b=!1,loading:Z=!1,fluid:w=!1}=e,x=(0,r.Z)(e,u);return o.createElement(h,(0,a.Z)({ref:t,loading:Z,fluid:w,forwardedAs:s,size:v,disabled:n||Z,kind:p,type:g,ia:b},x),Z?o.createElement(d.Z,{size:d.Z.sizes.sm}):b?f||i||(i=o.createElement(l.Z,{title:"IA","aria-hidden":"true"})):f,c,k)}));m.displayName="Button",m.sizes=c.Z.sizes,m.kinds=c.Z.kinds,m.types=c.Z.types;const g=m},42900:(e,t,n)=>{n.d(t,{Z:()=>w});var i=n(25773),a=n(30808),r=n(27378),o=n(4492),s=(n(23615),n(67468)),l=n(61380),c=n(90496),d=n(50046),u=n(10716),h=n(82985);const m={[c.$O.DEFAULT]:{background:"var(--neutral-surface-low-emphasis)",backgroundHover:"var(--neutral-surface-hover)",color:"var(--neutral-text-high-emphasis)",fill:"var(--neutral-icon-high-emphasis)"},[c.$O.PRIMARY]:{background:"var(--primary-surface-high-emphasis)",backgroundHover:"var(--primary-surface-hover)",color:"var(--neutral-text-high-emphasis)",fill:"var(--neutral-icon-high-emphasis)"},[c.$O.SUCCESS]:{background:"var(--success-surface-high-emphasis)",backgroundHover:"var(--success-surface-hover)",color:"var(--neutral-text-high-emphasis)",fill:"var(--neutral-icon-high-emphasis)"},[c.$O.DANGER]:{background:"var(--danger-surface-high-emphasis)",backgroundHover:"var(--danger-surface-hover)",color:"var(--neutral-text-inverse)",fill:"var(--neutral-icon-inverse)"},[c.$O.WARNING]:{background:"var(--warning-surface-high-emphasis)",backgroundHover:"var(--warning-surface-hover)",color:"var(--neutral-text-high-emphasis)",fill:"var(--neutral-icon-high-emphasis)"},[c.$O.HELP]:{background:"var(--highlight-surface-high-emphasis)",backgroundHover:"var(--highlight-surface-hover)",color:"var(--neutral-text-inverse)",fill:"var(--neutral-icon-inverse)"}},g=(0,s.iv)([""," "," &[data-tg-ia='true']{background-color:transparent;background-image:var(--tg-ia-surface);color:var(--neutral-text-high-emphasis);svg{fill:var(--neutral-icon-high-emphasis);}&:hover,&:active,&:focus-within{background-color:transparent;color:var(--neutral-text-high-emphasis);svg{fill:var(--neutral-icon-high-emphasis);}}&[role='button']{cursor:pointer;user-select:none;&:hover,&:active,&:focus-within{","}}}"],h.Z,(e=>{let{$tagKind:t,$isRemovable:n,onClick:i}=e;const a=m[n?c.$O.DEFAULT:t]||m[c.$O.DEFAULT],{background:r,color:o,fill:l,backgroundHover:d}=a;return(0,s.iv)(["background-color:",";color:",";svg{fill:",";}",""],r,o,l,(i||n)&&(e=>{let{backgroundHover:t,color:n,fill:i,onClick:a}=e;return(0,s.iv)([""," &:hover,&:active,&:focus-within{color:",";background-color:",";svg{fill:",";}}"],a&&(0,s.iv)(["cursor:pointer;user-select:none;"]),n,t,i)})({backgroundHover:d,color:o,fill:l,onClick:i}))}),h.Z.Hover),p=["children","startIcon","icon","removable","onDelete","onClick","kind","clickable","size","ia"],v={[c.zf.MD]:{height:"24px",font:"var(--text-xs-bold)",iconSize:"xs"},[c.zf.LG]:{height:"32px",font:"var(--text-sm-bold)",iconSize:"sm"},[c.zf.XL]:{height:"40px",font:"var(--text-md-bold)",iconSize:"md"}},f=s.ZP.div.withConfig({displayName:"Tag__Root",componentId:"tg-1yZ__sc-1q0hqb4-0"})(["--focus-border-radius:var(--border-radius-xs);"," gap:var(--size-spacing-01);border-radius:var(--border-radius-xs);padding:0 var(--size-spacing-02);display:inline-flex;align-items:center;width:max-content;"," "," ",""],l.Z,g,(e=>{let{$size:t}=e;const{height:n,font:i}=v[t]||v[c.zf.MD];return(0,s.iv)(["height:",";font:",";"],n,i)}),(e=>{let{$isRemovable:t}=e;return t&&(0,s.iv)(["gap:var(--size-spacing-02);"])})),k=s.ZP.span.withConfig({displayName:"Tag__Display",componentId:"tg-1yZ__sc-1q0hqb4-1"})(["white-space:nowrap;text-overflow:ellipsis;overflow:hidden;"]),b=s.ZP.div.withConfig({displayName:"Tag__CloseButton",componentId:"tg-1yZ__sc-1q0hqb4-2"})(["display:flex;align-items:center;cursor:pointer;"," svg{fill:var(--neutral-icon-low-emphasis);}&:hover:not([disabled]){background-color:transparent;svg{fill:var(--neutral-icon-high-emphasis);}}"],(e=>{let{$size:t}=e;const{height:n}=v[t]||v[c.zf.MD];return(0,s.iv)(["height:",";"],n)})),Z=(0,r.forwardRef)(((e,t)=>{let{children:n,startIcon:s,icon:l,removable:h,onDelete:m,onClick:g,kind:w=Z.kinds.default,clickable:x=!0,size:y=Z.sizes.md,ia:z=!1}=e,E=(0,a.Z)(e,p);const{iconSize:D}=v[y]||v[c.zf.MD],$=x&&(0,d.Z)(g),T=(0,d.Z)(m)||h,C=l||s,I=(0,r.useCallback)((()=>C?(0,r.isValidElement)(C)&&(0,r.cloneElement)(C,Object.assign({},C.props,{size:D})):null),[C,D]);return(0,r.useEffect)((()=>{w!==Z.kinds.default&&"string"==typeof n&&n.split(" ").length>2&&console.warn("Tangram: is not recommended to use more than two words")}),[w,n]),(0,u.Z)({removable:h,originName:"Tag",fallback:"Use `onDelete` property as callback to define automatically the display with delete icon button"}),(0,u.Z)({startIcon:s,originName:"Tag",fallback:"Replace by `icon` property"}),(0,u.Z)({clickable:!x||void 0,originName:"Tag",fallback:"Use `onClick` to automatically display the appropriate styles of hover, focus and active states"}),r.createElement(f,(0,i.Z)({$tagKind:w,$size:y,$isRemovable:T,"data-tg-ia":z||void 0,onClick:$?g:void 0,tabIndex:$?0:void 0,role:$?"button":void 0,onKeyDown:$?e=>{$&&("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),null==g||g(e)))}:void 0},E,{ref:t}),I(),n&&r.createElement(k,{$isRemovable:T},n),T&&r.createElement(b,{$size:y,onClick:e=>{e.stopPropagation(),m(e)},role:"button"},r.createElement(o.Z,{size:D,title:"Remove tag",titleId:"idIconCloseTag"})))}));Z.displayName="Tag",Z.Style=f,Z.kinds={default:c.$O.DEFAULT,primary:c.$O.PRIMARY,success:c.$O.SUCCESS,danger:c.$O.DANGER,warning:c.$O.WARNING,help:c.$O.HELP},Z.sizes={md:c.zf.MD,lg:c.zf.LG,xl:c.zf.XL};const w=Z},28219:(e,t,n)=>{n.d(t,{Z:()=>p});var i,a,r=n(25773),o=n(30808),s=n(27378),l=n(23615),c=n.n(l),d=n(33842),u=n(79804),h=n(20590);const m=["size","title","titleId"];function g(e){let{size:t=d.J.md,title:n,titleId:l}=e,c=(0,o.Z)(e,m);const{kind:g}=(0,h.a)(),p=d.d.get(t);return l=(0,u.Z)(l),"duotone"===g?s.createElement("svg",(0,r.Z)({width:p.width,height:p.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":l},c),n?s.createElement("title",{id:l},n):null,i||(i=s.createElement("path",{d:"M9.114 18.16l-5.85-5.85a.9.9 0 010-1.274l1.272-1.272a.9.9 0 011.273 0l3.941 3.94 8.44-8.44a.9.9 0 011.274 0l1.272 1.272a.9.9 0 010 1.273l-10.35 10.35a.9.9 0 01-1.272 0z"}))):s.createElement("svg",(0,r.Z)({width:p.width,height:p.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":l},c),n?s.createElement("title",{id:l},n):null,a||(a=s.createElement("path",{d:"M9.114 18.16l-5.85-5.85a.9.9 0 010-1.274l1.272-1.272a.9.9 0 011.273 0l3.941 3.94 8.44-8.44a.9.9 0 011.274 0l1.272 1.272a.9.9 0 010 1.273l-10.35 10.35a.9.9 0 01-1.272 0z"})))}g.sizes=d.J,g.propTypes={size:c().oneOf([g.sizes.xs,g.sizes.sm,g.sizes.md,g.sizes.lg,g.sizes.xl]),titleId:c().string,title:c().string.isRequired};const p=g},85651:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>f,frontMatter:()=>u,metadata:()=>m,toc:()=>p});var i=n(25773),a=(n(27378),n(35318)),r=n(80621),o=n(82544),s=n(54479),l=n(17311),c=n(85433),d=n(87954);const u={title:"Link",description:"Link is used for navigation between pages - inside or outside the product."},h=void 0,m={unversionedId:"components/link",id:"components/link",title:"Link",description:"Link is used for navigation between pages - inside or outside the product.",source:"@site/docs/components/link.md",sourceDirName:"components",slug:"/components/link",permalink:"/tangram-doc/en/docs/components/link",draft:!1,editUrl:"https://github.com/ResultadosDigitais/tangram/edit/next/docusaurus/docs/components/link.md",tags:[],version:"current",frontMatter:{title:"Link",description:"Link is used for navigation between pages - inside or outside the product."},sidebar:"mySidebar",previous:{title:"Dropdown",permalink:"/tangram-doc/en/docs/components/dropdown"},next:{title:"Text",permalink:"/tangram-doc/en/docs/components/text"}},g={},p=[{value:"Good habits",id:"good-habits",level:2},{value:"Feedback",id:"feedback",level:2}],v={toc:p};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(r.Z,{current:"docs",name:"link",mdxType:"ComponentTab"}),(0,a.kt)("p",null,"The link is used for navigation between pages - inside or outside the product. It should always have clickable text, which can be accompanied by an icon in the same color."),(0,a.kt)("p",null,"Create text for links that make it clear what will happen when the user clicks on it. Avoid generic texts, such as \u201cclick here\u201d, which do not inform the destination of the click."),(0,a.kt)(s.Z,{mdxType:"CardGrid"},(0,a.kt)(s.D,{centered:!0,mdxType:"CardGridItem"},(0,a.kt)(c.Z,{href:"#",mdxType:"Link"},"Link"))),(0,a.kt)("h2",{id:"good-habits"},"Good habits"),(0,a.kt)("p",null,"Avoid using links to actions that create and manipulate information within the product. Example: links to create Landing Pages or other assets, links to delete information, among others."),(0,a.kt)("p",null,"Links should always open in the same tab, ",(0,a.kt)("strong",{parentName:"p"},"except when switching pages results in the loss of information or when the landing page is external to the product.")),(0,a.kt)(l.ZP,{mdxType:"DoAndDont"},(0,a.kt)(l.Do,{title:"Use buttons to perform actions",mdxType:"Do"},(0,a.kt)(d.Z,{mdxType:"Button"},"Create Landing Page")),(0,a.kt)(l.pM,{title:"Don't use links to take actions",mdxType:"Dont"},(0,a.kt)(c.Z,{href:"#",mdxType:"Link"},"Create Landing Page"))),(0,a.kt)("h2",{id:"feedback"},"Feedback"),(0,a.kt)(o.Z,{mdxType:"FeedbackBlock"}))}f.isMDXComponent=!0}}]);