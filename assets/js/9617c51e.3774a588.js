"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7282],{54479:(e,a,t)=>{t.d(a,{D:()=>u,Z:()=>l});var r=t(25773),i=t(27378),o=t(67468),n=t(45666);const s=o.ZP.div`
  margin-bottom: var(--size-spacing-09);

  & > * {
    margin-bottom: var(--size-spacing-05);
  }

  ${e=>{let{$columns:a}=e;return a>=2&&o.iv`
      display: grid;
      column-gap: var(--size-spacing-05);
      row-gap: var(--size-spacing-05);
      grid-template-columns: repeat(${a}, 1fr);

      & > * {
        margin-bottom: 0;
      }
    `}}
`;const l=function(e){let{children:a,columns:t=1,...o}=e;return i.createElement(n.Z,null,(()=>i.createElement(s,(0,r.Z)({$columns:t},o),a)))};var d=t(89620);const c=(0,o.ZP)(d.Z)`
  height: 100%;

  p {
    &:only-child,
    &:last-child {
      margin-bottom: 0;
    }
  }

  ${e=>{let{$featured:a}=e;return a&&o.iv`
      border-color: var(--highlight-border);
    `}}

  ${e=>{let{$centered:a}=e;return a&&o.iv`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    `}}
`;const u=function(e){let{children:a,featured:t=!1,centered:r=!1,className:o}=e;return i.createElement(c,{$featured:t,$centered:r,className:o},a)}},17311:(e,a,t)=>{t.d(a,{Do:()=>h,pM:()=>z,ZP:()=>n});var r=t(25773),i=t(27378),o=t(54479);const n=function(e){let{children:a,columns:t=2,...n}=e;return i.createElement(o.Z,(0,r.Z)({columns:t},n),a)};var s=t(64723),l=t(67468),d=t(42900),c=t(28219);const u=l.ZP.p`
  margin-top: var(--size-spacing-02);
  margin-bottom: var(--size-spacing-05);
`;const m=function(e){return i.createElement(u,e)},p=(0,l.ZP)(o.D)`
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
`;const h=function(e){let{title:a,children:t}=e;return i.createElement(p,{centered:!0},i.createElement(v,null,t),i.createElement(g,null,i.createElement(d.Z,{size:d.Z.sizes.md,kind:d.Z.kinds.success,icon:i.createElement(c.Z,{title:"Checkmark icon"})},i.createElement(s.Z,{id:"doanddont.do"},"Do")),a&&i.createElement(m,null,a)))};var f=t(4492);const b=(0,l.ZP)(o.D)`
  background-color: var(--neutral-surface-low-emphasis);
  border: 1px solid var(--danger-border);
  padding: 0;
`,k=l.ZP.div`
  text-align: left;
  padding: var(--size-spacing-04);
  width: 100%;
  border-radius: 0 0 calc(var(--border-radius-md) + 2px)
    calc(var(--border-radius-md) + 2px);

  background-color: var(--neutral-surface);
`,x=l.ZP.div`
  width: 100%;
  text-align: center;
  padding: var(--size-spacing-04);

  p {
    font: var(--text-md-regular) !important;
  }
`;const z=function(e){let{title:a,children:t}=e;return i.createElement(b,{centered:!0},i.createElement(x,null,t),i.createElement(k,null,i.createElement(d.Z,{size:d.Z.sizes.md,kind:d.Z.kinds.danger,icon:i.createElement(f.Z,{title:"Times icon"})},i.createElement(s.Z,{id:"doanddont.dont"},"Don't")),a&&i.createElement(m,null,a)))}},45666:(e,a,t)=>{t.d(a,{Z:()=>o});var r=t(27378),i=t(77524);function o(e){let{children:a,fallback:t}=e;return(0,i.Z)()?r.createElement(r.Fragment,null,a?.()):t??null}},42900:(e,a,t)=>{t.d(a,{Z:()=>z});var r=t(25773),i=t(30808),o=t(27378),n=t(4492),s=(t(23615),t(67468)),l=t(61380),d=t(90496),c=t(50046),u=t(10716),m=t(82985);const p={[d.$O.DEFAULT]:{background:"var(--neutral-surface-low-emphasis)",backgroundHover:"var(--neutral-surface-hover)",color:"var(--neutral-text-high-emphasis)",fill:"var(--neutral-icon-high-emphasis)"},[d.$O.PRIMARY]:{background:"var(--primary-surface-high-emphasis)",backgroundHover:"var(--primary-surface-hover)",color:"var(--neutral-text-high-emphasis)",fill:"var(--neutral-icon-high-emphasis)"},[d.$O.SUCCESS]:{background:"var(--success-surface-high-emphasis)",backgroundHover:"var(--success-surface-hover)",color:"var(--neutral-text-high-emphasis)",fill:"var(--neutral-icon-high-emphasis)"},[d.$O.DANGER]:{background:"var(--danger-surface-high-emphasis)",backgroundHover:"var(--danger-surface-hover)",color:"var(--neutral-text-inverse)",fill:"var(--neutral-icon-inverse)"},[d.$O.WARNING]:{background:"var(--warning-surface-high-emphasis)",backgroundHover:"var(--warning-surface-hover)",color:"var(--neutral-text-high-emphasis)",fill:"var(--neutral-icon-high-emphasis)"},[d.$O.HELP]:{background:"var(--highlight-surface-high-emphasis)",backgroundHover:"var(--highlight-surface-hover)",color:"var(--neutral-text-inverse)",fill:"var(--neutral-icon-inverse)"}},g=(0,s.iv)([""," "," &[data-tg-ia='true']{background-color:transparent;background-image:var(--tg-ia-surface);color:var(--neutral-text-high-emphasis);svg{fill:var(--neutral-icon-high-emphasis);}&:hover,&:active,&:focus-within{background-color:transparent;color:var(--neutral-text-high-emphasis);svg{fill:var(--neutral-icon-high-emphasis);}}&[role='button']{cursor:pointer;user-select:none;&:hover,&:active,&:focus-within{","}}}"],m.Z,(e=>{let{$tagKind:a,$isRemovable:t,onClick:r}=e;const i=p[t?d.$O.DEFAULT:a]||p[d.$O.DEFAULT],{background:o,color:n,fill:l,backgroundHover:c}=i;return(0,s.iv)(["background-color:",";color:",";svg{fill:",";}",""],o,n,l,(r||t)&&(e=>{let{backgroundHover:a,color:t,fill:r,onClick:i}=e;return(0,s.iv)([""," &:hover,&:active,&:focus-within{color:",";background-color:",";svg{fill:",";}}"],i&&(0,s.iv)(["cursor:pointer;user-select:none;"]),t,a,r)})({backgroundHover:c,color:n,fill:l,onClick:r}))}),m.Z.Hover),v=["children","startIcon","icon","removable","onDelete","onClick","kind","clickable","size","ia"],h={[d.zf.MD]:{height:"24px",font:"var(--text-xs-bold)",iconSize:"xs"},[d.zf.LG]:{height:"32px",font:"var(--text-sm-bold)",iconSize:"sm"},[d.zf.XL]:{height:"40px",font:"var(--text-md-bold)",iconSize:"md"}},f=s.ZP.div.withConfig({displayName:"Tag__Root",componentId:"tg-1yZ__sc-1q0hqb4-0"})(["--focus-border-radius:var(--border-radius-xs);"," gap:var(--size-spacing-01);border-radius:var(--border-radius-xs);padding:0 var(--size-spacing-02);display:inline-flex;align-items:center;width:max-content;"," "," ",""],l.Z,g,(e=>{let{$size:a}=e;const{height:t,font:r}=h[a]||h[d.zf.MD];return(0,s.iv)(["height:",";font:",";"],t,r)}),(e=>{let{$isRemovable:a}=e;return a&&(0,s.iv)(["gap:var(--size-spacing-02);"])})),b=s.ZP.span.withConfig({displayName:"Tag__Display",componentId:"tg-1yZ__sc-1q0hqb4-1"})(["white-space:nowrap;text-overflow:ellipsis;overflow:hidden;"]),k=s.ZP.div.withConfig({displayName:"Tag__CloseButton",componentId:"tg-1yZ__sc-1q0hqb4-2"})(["display:flex;align-items:center;cursor:pointer;"," svg{fill:var(--neutral-icon-low-emphasis);}&:hover:not([disabled]){background-color:transparent;svg{fill:var(--neutral-icon-high-emphasis);}}"],(e=>{let{$size:a}=e;const{height:t}=h[a]||h[d.zf.MD];return(0,s.iv)(["height:",";"],t)})),x=(0,o.forwardRef)(((e,a)=>{let{children:t,startIcon:s,icon:l,removable:m,onDelete:p,onClick:g,kind:z=x.kinds.default,clickable:Z=!0,size:y=x.sizes.md,ia:E=!1}=e,w=(0,i.Z)(e,v);const{iconSize:T}=h[y]||h[d.zf.MD],D=Z&&(0,c.Z)(g),$=(0,c.Z)(p)||m,C=l||s,P=(0,o.useCallback)((()=>C?(0,o.isValidElement)(C)&&(0,o.cloneElement)(C,Object.assign({},C.props,{size:T})):null),[C,T]);return(0,o.useEffect)((()=>{z!==x.kinds.default&&"string"==typeof t&&t.split(" ").length>2&&console.warn("Tangram: is not recommended to use more than two words")}),[z,t]),(0,u.Z)({removable:m,originName:"Tag",fallback:"Use `onDelete` property as callback to define automatically the display with delete icon button"}),(0,u.Z)({startIcon:s,originName:"Tag",fallback:"Replace by `icon` property"}),(0,u.Z)({clickable:!Z||void 0,originName:"Tag",fallback:"Use `onClick` to automatically display the appropriate styles of hover, focus and active states"}),o.createElement(f,(0,r.Z)({$tagKind:z,$size:y,$isRemovable:$,"data-tg-ia":E||void 0,onClick:D?g:void 0,tabIndex:D?0:void 0,role:D?"button":void 0,onKeyDown:D?e=>{D&&("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),null==g||g(e)))}:void 0},w,{ref:a}),P(),t&&o.createElement(b,{$isRemovable:$},t),$&&o.createElement(k,{$size:y,onClick:e=>{e.stopPropagation(),p(e)},role:"button"},o.createElement(n.Z,{size:T,title:"Remove tag",titleId:"idIconCloseTag"})))}));x.displayName="Tag",x.Style=f,x.kinds={default:d.$O.DEFAULT,primary:d.$O.PRIMARY,success:d.$O.SUCCESS,danger:d.$O.DANGER,warning:d.$O.WARNING,help:d.$O.HELP},x.sizes={md:d.zf.MD,lg:d.zf.LG,xl:d.zf.XL};const z=x},28219:(e,a,t)=>{t.d(a,{Z:()=>v});var r,i,o=t(25773),n=t(30808),s=t(27378),l=t(23615),d=t.n(l),c=t(33842),u=t(79804),m=t(20590);const p=["size","title","titleId"];function g(e){let{size:a=c.J.md,title:t,titleId:l}=e,d=(0,n.Z)(e,p);const{kind:g}=(0,m.a)(),v=c.d.get(a);return l=(0,u.Z)(l),"duotone"===g?s.createElement("svg",(0,o.Z)({width:v.width,height:v.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":l},d),t?s.createElement("title",{id:l},t):null,r||(r=s.createElement("path",{d:"M9.114 18.16l-5.85-5.85a.9.9 0 010-1.274l1.272-1.272a.9.9 0 011.273 0l3.941 3.94 8.44-8.44a.9.9 0 011.274 0l1.272 1.272a.9.9 0 010 1.273l-10.35 10.35a.9.9 0 01-1.272 0z"}))):s.createElement("svg",(0,o.Z)({width:v.width,height:v.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":l},d),t?s.createElement("title",{id:l},t):null,i||(i=s.createElement("path",{d:"M9.114 18.16l-5.85-5.85a.9.9 0 010-1.274l1.272-1.272a.9.9 0 011.273 0l3.941 3.94 8.44-8.44a.9.9 0 011.274 0l1.272 1.272a.9.9 0 010 1.273l-10.35 10.35a.9.9 0 01-1.272 0z"})))}g.sizes=c.J,g.propTypes={size:d().oneOf([g.sizes.xs,g.sizes.sm,g.sizes.md,g.sizes.lg,g.sizes.xl]),titleId:d().string,title:d().string.isRequired};const v=g},71221:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>d,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var r=t(25773),i=(t(27378),t(35318)),o=t(17311),n=t(82544),s=t(959);const l={title:"Localiza\xe7\xe3o"},d=void 0,c={unversionedId:"guidelines/localization",id:"guidelines/localization",title:"Localiza\xe7\xe3o",description:"A RD Station tem o compromisso de manter um alto padr\xe3o de qualidade e experi\xeancia para todos os clientes, independente do pa\xeds ou idioma. Por isso, ao desenhar ou atualizar interfaces dos produtos, tenha sempre em mente que elas podem mudar ao serem traduzidas.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/guidelines/localization.md",sourceDirName:"guidelines",slug:"/guidelines/localization",permalink:"/tangram/docs/guidelines/localization",draft:!1,editUrl:"https://github.com/ResultadosDigitais/tangram/edit/next/docusaurus/docs/guidelines/localization.md",tags:[],version:"current",frontMatter:{title:"Localiza\xe7\xe3o"},sidebar:"mySidebar",previous:{title:"Escrita",permalink:"/tangram/docs/guidelines/writing"},next:{title:"Cores",permalink:"/tangram/docs/foundations/color"}},u={},m=[{value:"Diferen\xe7as culturais",id:"cultural-differences",level:2},{value:"Texto embedado",id:"embedded-text",level:2},{value:"Espa\xe7amento",id:"spacing",level:2},{value:"Moedas, data e hora",id:"coins-date-time",level:2},{value:"Feedback",id:"feedback",level:2}],p={toc:m};function g(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A RD Station tem o compromisso de manter um alto padr\xe3o de qualidade e experi\xeancia para todos os clientes, independente do pa\xeds ou idioma. Por isso, ao desenhar ou atualizar interfaces dos produtos, tenha sempre em mente que elas podem mudar ao serem traduzidas."),(0,i.kt)("h2",{id:"cultural-differences"},"Diferen\xe7as culturais"),(0,i.kt)("p",null,'No Brasil, o gesto \ud83d\udc4d\ud83c\udffd  \xe9 visto como afirma\xe7\xe3o, positivo, legal. J\xe1 em alguns pa\xedses da \xc1frica e do Sudeste Asi\xe1tico, o famoso "joinha" possui uma conota\xe7\xe3o sexual, tornando-o um gesto obsceno.'),(0,i.kt)("p",null,"Por isso, pensamos em cada detalhe antes de publicar qualquer altera\xe7\xe3o vis\xedvel em nossas ferramentas."),(0,i.kt)("h2",{id:"embedded-text"},"Texto embedado"),(0,i.kt)("p",null,"Evite colocar texto embedado dentro de imagens porque isso dificulta, e at\xe9 mesmo impossibilita a tradu\xe7\xe3o em alguns casos. Uma alternativa para isso \xe9 sobrepor elementos de texto em cima de imagens utilizando CSS."),(0,i.kt)("h2",{id:"spacing"},"Espa\xe7amento"),(0,i.kt)("p",null,"Lembre-se de sempre deixar espa\xe7o suficiente j\xe1 prevendo tradu\xe7\xf5es em outros idiomas, que possam conter mais caracteres do que o portugu\xeas."),(0,i.kt)("p",null,"Nesse sentido, evite textos em colunas estreitas, correndo risco de ao serem traduzidos quebrarem o equil\xedbrio do design."),(0,i.kt)("p",null,"Essa orienta\xe7\xe3o tamb\xe9m \xe9 v\xe1lida para valores, que ao serem convertidos em moedas estrangeiras, podem crescer."),(0,i.kt)("h2",{id:"coins-date-time"},"Moedas, data e hora"),(0,i.kt)("p",null,"Para indicar valores monet\xe1rios, usamos sempre a ISO 4217, que define um c\xf3digos de tr\xeas letras para as moedas correntes. Para indica\xe7\xe3o simples de hora, utilizamos a formata\xe7\xe3o XX:XX (24 horas)."),(0,i.kt)(o.ZP,{mdxType:"DoAndDont"},(0,i.kt)(o.Do,{mdxType:"Do"},(0,i.kt)(s.Z,{mdxType:"Text"},"1.200 BRL"),(0,i.kt)(s.Z,{mdxType:"Text"},"54 USD"),(0,i.kt)(s.Z,{mdxType:"Text"},"19/09/2019"),(0,i.kt)(s.Z,{mdxType:"Text"},"14:30"),(0,i.kt)(s.Z,{mdxType:"Text"},"2:33")),(0,i.kt)(o.pM,{mdxType:"Dont"},(0,i.kt)(s.Z,{mdxType:"Text"},"R$ 300.00"),(0,i.kt)(s.Z,{mdxType:"Text"},"US$ 40,25"),(0,i.kt)(s.Z,{mdxType:"Text"},"19.09.2019"),(0,i.kt)(s.Z,{mdxType:"Text"},"2:30AM"),(0,i.kt)(s.Z,{mdxType:"Text"},"02h19"))),(0,i.kt)("h2",{id:"feedback"},"Feedback"),(0,i.kt)(n.Z,{mdxType:"FeedbackBlock"}))}g.isMDXComponent=!0}}]);