"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9820],{54479:(e,t,a)=>{a.d(t,{D:()=>u,Z:()=>l});var r=a(25773),n=a(27378),i=a(67468),o=a(45666);const s=i.ZP.div`
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
`;const l=function(e){let{children:t,columns:a=1,...i}=e;return n.createElement(o.Z,null,(()=>n.createElement(s,(0,r.Z)({$columns:a},i),t)))};var c=a(89620);const d=(0,i.ZP)(c.Z)`
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
`;const u=function(e){let{children:t,featured:a=!1,centered:r=!1,className:i}=e;return n.createElement(d,{$featured:a,$centered:r,className:i},t)}},17311:(e,t,a)=>{a.d(t,{Do:()=>h,pM:()=>x,ZP:()=>o});var r=a(25773),n=a(27378),i=a(54479);const o=function(e){let{children:t,columns:a=2,...o}=e;return n.createElement(i.Z,(0,r.Z)({columns:a},o),t)};var s=a(64723),l=a(67468),c=a(42900),d=a(28219);const u=l.ZP.p`
  margin-top: var(--size-spacing-02);
  margin-bottom: var(--size-spacing-05);
`;const p=function(e){return n.createElement(u,e)},m=(0,l.ZP)(i.D)`
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
`,v=l.ZP.div`
  width: 100%;
  text-align: center;
  padding: var(--size-spacing-04);

  p {
    font: var(--text-md-regular) !important;
  }
`;const h=function(e){let{title:t,children:a}=e;return n.createElement(m,{centered:!0},n.createElement(v,null,a),n.createElement(g,null,n.createElement(c.Z,{size:c.Z.sizes.md,kind:c.Z.kinds.success,icon:n.createElement(d.Z,{title:"Checkmark icon"})},n.createElement(s.Z,{id:"doanddont.do"},"Do")),t&&n.createElement(p,null,t)))};var f=a(4492);const k=(0,l.ZP)(i.D)`
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
`;const x=function(e){let{title:t,children:a}=e;return n.createElement(k,{centered:!0},n.createElement(Z,null,a),n.createElement(b,null,n.createElement(c.Z,{size:c.Z.sizes.md,kind:c.Z.kinds.danger,icon:n.createElement(f.Z,{title:"Times icon"})},n.createElement(s.Z,{id:"doanddont.dont"},"Don't")),t&&n.createElement(p,null,t)))}},45666:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(27378),n=a(77524);function i(e){let{children:t,fallback:a}=e;return(0,n.Z)()?r.createElement(r.Fragment,null,t?.()):a??null}},87954:(e,t,a)=>{a.d(t,{Z:()=>g});var r,n=a(25773),i=a(30808),o=a(27378),s=a(67468),l=(a(23615),a(63559)),c=a(75387),d=a(26503);const u=["disabled","as","children","type","kind","size","startIcon","endIcon","ia","loading","fluid"],p=(0,s.ZP)(c.Z).withConfig({displayName:"Button__Root",componentId:"tg-1yZ__sc-7cbhwm-0"})([""]),m=(0,o.forwardRef)(((e,t)=>{let{disabled:a,as:s,children:c,type:g=m.types.button,kind:v=m.kinds.primary,size:h=m.sizes.md,startIcon:f,endIcon:k,ia:b=!1,loading:Z=!1,fluid:x=!1}=e,z=(0,i.Z)(e,u);return o.createElement(p,(0,n.Z)({ref:t,loading:Z,fluid:x,forwardedAs:s,size:h,disabled:a||Z,kind:v,type:g,ia:b},z),Z?o.createElement(d.Z,{size:d.Z.sizes.sm}):b?f||r||(r=o.createElement(l.Z,{title:"IA","aria-hidden":"true"})):f,c,k)}));m.displayName="Button",m.sizes=c.Z.sizes,m.kinds=c.Z.kinds,m.types=c.Z.types;const g=m},42900:(e,t,a)=>{a.d(t,{Z:()=>x});var r=a(25773),n=a(30808),i=a(27378),o=a(4492),s=(a(23615),a(67468)),l=a(61380),c=a(90496),d=a(50046),u=a(10716),p=a(82985);const m={[c.$O.DEFAULT]:{background:"var(--neutral-surface-low-emphasis)",backgroundHover:"var(--neutral-surface-hover)",color:"var(--neutral-text-high-emphasis)",fill:"var(--neutral-icon-high-emphasis)"},[c.$O.PRIMARY]:{background:"var(--primary-surface-high-emphasis)",backgroundHover:"var(--primary-surface-hover)",color:"var(--neutral-text-high-emphasis)",fill:"var(--neutral-icon-high-emphasis)"},[c.$O.SUCCESS]:{background:"var(--success-surface-high-emphasis)",backgroundHover:"var(--success-surface-hover)",color:"var(--neutral-text-high-emphasis)",fill:"var(--neutral-icon-high-emphasis)"},[c.$O.DANGER]:{background:"var(--danger-surface-high-emphasis)",backgroundHover:"var(--danger-surface-hover)",color:"var(--neutral-text-inverse)",fill:"var(--neutral-icon-inverse)"},[c.$O.WARNING]:{background:"var(--warning-surface-high-emphasis)",backgroundHover:"var(--warning-surface-hover)",color:"var(--neutral-text-high-emphasis)",fill:"var(--neutral-icon-high-emphasis)"},[c.$O.HELP]:{background:"var(--highlight-surface-high-emphasis)",backgroundHover:"var(--highlight-surface-hover)",color:"var(--neutral-text-inverse)",fill:"var(--neutral-icon-inverse)"}},g=(0,s.iv)([""," "," &[data-tg-ia='true']{background-color:transparent;background-image:var(--tg-ia-surface);color:var(--neutral-text-high-emphasis);svg{fill:var(--neutral-icon-high-emphasis);}&:hover,&:active,&:focus-within{background-color:transparent;color:var(--neutral-text-high-emphasis);svg{fill:var(--neutral-icon-high-emphasis);}}&[role='button']{cursor:pointer;user-select:none;&:hover,&:active,&:focus-within{","}}}"],p.Z,(e=>{let{$tagKind:t,$isRemovable:a,onClick:r}=e;const n=m[a?c.$O.DEFAULT:t]||m[c.$O.DEFAULT],{background:i,color:o,fill:l,backgroundHover:d}=n;return(0,s.iv)(["background-color:",";color:",";svg{fill:",";}",""],i,o,l,(r||a)&&(e=>{let{backgroundHover:t,color:a,fill:r,onClick:n}=e;return(0,s.iv)([""," &:hover,&:active,&:focus-within{color:",";background-color:",";svg{fill:",";}}"],n&&(0,s.iv)(["cursor:pointer;user-select:none;"]),a,t,r)})({backgroundHover:d,color:o,fill:l,onClick:r}))}),p.Z.Hover),v=["children","startIcon","icon","removable","onDelete","onClick","kind","clickable","size","ia"],h={[c.zf.MD]:{height:"24px",font:"var(--text-xs-bold)",iconSize:"xs"},[c.zf.LG]:{height:"32px",font:"var(--text-sm-bold)",iconSize:"sm"},[c.zf.XL]:{height:"40px",font:"var(--text-md-bold)",iconSize:"md"}},f=s.ZP.div.withConfig({displayName:"Tag__Root",componentId:"tg-1yZ__sc-1q0hqb4-0"})(["--focus-border-radius:var(--border-radius-xs);"," gap:var(--size-spacing-01);border-radius:var(--border-radius-xs);padding:0 var(--size-spacing-02);display:inline-flex;align-items:center;width:max-content;"," "," ",""],l.Z,g,(e=>{let{$size:t}=e;const{height:a,font:r}=h[t]||h[c.zf.MD];return(0,s.iv)(["height:",";font:",";"],a,r)}),(e=>{let{$isRemovable:t}=e;return t&&(0,s.iv)(["gap:var(--size-spacing-02);"])})),k=s.ZP.span.withConfig({displayName:"Tag__Display",componentId:"tg-1yZ__sc-1q0hqb4-1"})(["white-space:nowrap;text-overflow:ellipsis;overflow:hidden;"]),b=s.ZP.div.withConfig({displayName:"Tag__CloseButton",componentId:"tg-1yZ__sc-1q0hqb4-2"})(["display:flex;align-items:center;cursor:pointer;"," svg{fill:var(--neutral-icon-low-emphasis);}&:hover:not([disabled]){background-color:transparent;svg{fill:var(--neutral-icon-high-emphasis);}}"],(e=>{let{$size:t}=e;const{height:a}=h[t]||h[c.zf.MD];return(0,s.iv)(["height:",";"],a)})),Z=(0,i.forwardRef)(((e,t)=>{let{children:a,startIcon:s,icon:l,removable:p,onDelete:m,onClick:g,kind:x=Z.kinds.default,clickable:z=!0,size:y=Z.sizes.md,ia:w=!1}=e,E=(0,n.Z)(e,v);const{iconSize:D}=h[y]||h[c.zf.MD],$=z&&(0,d.Z)(g),C=(0,d.Z)(m)||p,T=l||s,I=(0,i.useCallback)((()=>T?(0,i.isValidElement)(T)&&(0,i.cloneElement)(T,Object.assign({},T.props,{size:D})):null),[T,D]);return(0,i.useEffect)((()=>{x!==Z.kinds.default&&"string"==typeof a&&a.split(" ").length>2&&console.warn("Tangram: is not recommended to use more than two words")}),[x,a]),(0,u.Z)({removable:p,originName:"Tag",fallback:"Use `onDelete` property as callback to define automatically the display with delete icon button"}),(0,u.Z)({startIcon:s,originName:"Tag",fallback:"Replace by `icon` property"}),(0,u.Z)({clickable:!z||void 0,originName:"Tag",fallback:"Use `onClick` to automatically display the appropriate styles of hover, focus and active states"}),i.createElement(f,(0,r.Z)({$tagKind:x,$size:y,$isRemovable:C,"data-tg-ia":w||void 0,onClick:$?g:void 0,tabIndex:$?0:void 0,role:$?"button":void 0,onKeyDown:$?e=>{$&&("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),null==g||g(e)))}:void 0},E,{ref:t}),I(),a&&i.createElement(k,{$isRemovable:C},a),C&&i.createElement(b,{$size:y,onClick:e=>{e.stopPropagation(),m(e)},role:"button"},i.createElement(o.Z,{size:D,title:"Remove tag",titleId:"idIconCloseTag"})))}));Z.displayName="Tag",Z.Style=f,Z.kinds={default:c.$O.DEFAULT,primary:c.$O.PRIMARY,success:c.$O.SUCCESS,danger:c.$O.DANGER,warning:c.$O.WARNING,help:c.$O.HELP},Z.sizes={md:c.zf.MD,lg:c.zf.LG,xl:c.zf.XL};const x=Z},28219:(e,t,a)=>{a.d(t,{Z:()=>v});var r,n,i=a(25773),o=a(30808),s=a(27378),l=a(23615),c=a.n(l),d=a(33842),u=a(79804),p=a(20590);const m=["size","title","titleId"];function g(e){let{size:t=d.J.md,title:a,titleId:l}=e,c=(0,o.Z)(e,m);const{kind:g}=(0,p.a)(),v=d.d.get(t);return l=(0,u.Z)(l),"duotone"===g?s.createElement("svg",(0,i.Z)({width:v.width,height:v.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":l},c),a?s.createElement("title",{id:l},a):null,r||(r=s.createElement("path",{d:"M9.114 18.16l-5.85-5.85a.9.9 0 010-1.274l1.272-1.272a.9.9 0 011.273 0l3.941 3.94 8.44-8.44a.9.9 0 011.274 0l1.272 1.272a.9.9 0 010 1.273l-10.35 10.35a.9.9 0 01-1.272 0z"}))):s.createElement("svg",(0,i.Z)({width:v.width,height:v.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":l},c),a?s.createElement("title",{id:l},a):null,n||(n=s.createElement("path",{d:"M9.114 18.16l-5.85-5.85a.9.9 0 010-1.274l1.272-1.272a.9.9 0 011.273 0l3.941 3.94 8.44-8.44a.9.9 0 011.274 0l1.272 1.272a.9.9 0 010 1.273l-10.35 10.35a.9.9 0 01-1.272 0z"})))}g.sizes=d.J,g.propTypes={size:c().oneOf([g.sizes.xs,g.sizes.sm,g.sizes.md,g.sizes.lg,g.sizes.xl]),titleId:c().string,title:c().string.isRequired};const v=g},33852:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>p,default:()=>f,frontMatter:()=>u,metadata:()=>m,toc:()=>v});var r=a(25773),n=(a(27378),a(35318)),i=a(80621),o=a(82544),s=a(54479),l=a(17311),c=a(85433),d=a(87954);const u={title:"Link",description:"Link \xe9 usado para navega\xe7\xe3o entre p\xe1ginas - dentro ou fora do produto."},p=void 0,m={unversionedId:"components/link",id:"components/link",title:"Link",description:"Link \xe9 usado para navega\xe7\xe3o entre p\xe1ginas - dentro ou fora do produto.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/components/link.md",sourceDirName:"components",slug:"/components/link",permalink:"/tangram/docs/components/link",draft:!1,editUrl:"https://github.com/ResultadosDigitais/tangram/edit/next/docusaurus/docs/components/link.md",tags:[],version:"current",frontMatter:{title:"Link",description:"Link \xe9 usado para navega\xe7\xe3o entre p\xe1ginas - dentro ou fora do produto."},sidebar:"mySidebar",previous:{title:"Dropdown",permalink:"/tangram/docs/components/dropdown"},next:{title:"Text",permalink:"/tangram/docs/components/text"}},g={},v=[{value:"Boas pr\xe1ticas",id:"good-habits",level:2},{value:"Feedback",id:"feedback",level:2}],h={toc:v};function f(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(i.Z,{current:"docs",name:"link",mdxType:"ComponentTab"}),(0,n.kt)("p",null,"O link \xe9 usado para navega\xe7\xe3o entre p\xe1ginas - dentro ou fora do produto. Deve sempre ter texto clic\xe1vel, que pode estar acompanhado de um \xedcone na mesma cor."),(0,n.kt)("p",null,"Crie textos para links que deixem claro o que acontecer\xe1 quando a pessoa usu\xe1ria clicar nele. Evite textos gen\xe9ricos, como \u201dclique aqui\u201d, que n\xe3o informam o destino do clique."),(0,n.kt)(s.Z,{mdxType:"CardGrid"},(0,n.kt)(s.D,{centered:!0,mdxType:"CardGridItem"},(0,n.kt)(c.Z,{href:"#",mdxType:"Link"},"Link"))),(0,n.kt)("h2",{id:"good-habits"},"Boas pr\xe1ticas"),(0,n.kt)("p",null,"Evite o uso de links para a\xe7\xf5es que criam e manipulam informa\xe7\xf5es dentro do produto. Exemplo: links para criar Landing Pages ou outros assets, links para excluir informa\xe7\xf5es, entre outros."),(0,n.kt)("p",null,"Links devem sempre abrir na mesma aba, ",(0,n.kt)("strong",{parentName:"p"},"exceto quando a troca de p\xe1gina resultar na perda de informa\xe7\xf5es ou quando a p\xe1gina de destino for externa ao produto.")),(0,n.kt)(l.ZP,{mdxType:"DoAndDont"},(0,n.kt)(l.Do,{title:"Use bot\xf5es para realizar a\xe7\xf5es",mdxType:"Do"},(0,n.kt)(d.Z,{mdxType:"Button"},"Criar Landing Page")),(0,n.kt)(l.pM,{title:"N\xe3o use links para realizar a\xe7\xf5es",mdxType:"Dont"},(0,n.kt)(c.Z,{href:"#",mdxType:"Link"},"Criar Landing Page"))),(0,n.kt)("h2",{id:"feedback"},"Feedback"),(0,n.kt)(o.Z,{mdxType:"FeedbackBlock"}))}f.isMDXComponent=!0}}]);