"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8806],{54479:(e,t,a)=>{a.d(t,{D:()=>m,Z:()=>d});var i=a(25773),r=a(27378),n=a(67468),o=a(45666);const s=n.ZP.div`
  margin-bottom: var(--size-spacing-09);

  & > * {
    margin-bottom: var(--size-spacing-05);
  }

  ${e=>{let{$columns:t}=e;return t>=2&&n.iv`
      display: grid;
      column-gap: var(--size-spacing-05);
      row-gap: var(--size-spacing-05);
      grid-template-columns: repeat(${t}, 1fr);

      & > * {
        margin-bottom: 0;
      }
    `}}
`;const d=function(e){let{children:t,columns:a=1,...n}=e;return r.createElement(o.Z,null,(()=>r.createElement(s,(0,i.Z)({$columns:a},n),t)))};var l=a(89620);const c=(0,n.ZP)(l.Z)`
  height: 100%;

  p {
    &:only-child,
    &:last-child {
      margin-bottom: 0;
    }
  }

  ${e=>{let{$featured:t}=e;return t&&n.iv`
      border-color: var(--highlight-border);
    `}}

  ${e=>{let{$centered:t}=e;return t&&n.iv`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    `}}
`;const m=function(e){let{children:t,featured:a=!1,centered:i=!1,className:n}=e;return r.createElement(c,{$featured:a,$centered:i,className:n},t)}},45666:(e,t,a)=>{a.d(t,{Z:()=>n});var i=a(27378),r=a(77524);function n(e){let{children:t,fallback:a}=e;return(0,r.Z)()?i.createElement(i.Fragment,null,t?.()):a??null}},9265:(e,t,a)=>{a.d(t,{Z:()=>g});var i=a(25773),r=a(30808),n=a(27378),o=a(23615),s=a.n(o),d=a(67468),l=a(90496),c=a(85433);const m=["children","kind","icon"],p=d.ZP.div.withConfig({displayName:"Alert__Root",componentId:"tg-1yZ__sc-592im0-0"})(["width:100%;padding:var(--size-spacing-02);font:var(--text-sm-bold);color:",";background-color:",";display:inline-flex;align-items:center;gap:var(--size-spacing-02);svg{fill:",";}","{&,&:hover{color:inherit;text-decoration:underline;}}"],(e=>{let{$kind:t}=e;return t===l.$O.DANGER?"var(--neutral-text-inverse)":"var(--neutral-text-high-emphasis)"}),(e=>{let{$kind:t}=e;return t===l.$O.DANGER?"var(--danger-surface-high-emphasis)":"var(--warning-surface-high-emphasis)"}),(e=>{let{$kind:t}=e;return t===l.$O.DANGER?"var(--neutral-icon-inverse)":"var(--neutral-icon-high-emphasis)"}),c.Z.Style),u=(0,n.forwardRef)(((e,t)=>{let{children:a=null,kind:o=u.kinds.danger,icon:s}=e,d=(0,r.Z)(e,m);return n.createElement(p,(0,i.Z)({ref:t,"aria-live":"polite",role:"alert",$kind:o},d),s,a)}));u.displayName="Alert",u.kinds={danger:l.$O.DANGER,warning:l.$O.WARNING},u.propTypes={children:s().node,icon:s().node,kind:s().oneOf([u.kinds.warning,u.kinds.danger])};const g=u},79543:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>k,frontMatter:()=>c,metadata:()=>p,toc:()=>g});var i=a(25773),r=(a(27378),a(35318)),n=a(80621),o=a(54479),s=a(82544),d=a(9265),l=a(61384);const c={title:"Alert",description:"S\xe3o notifica\xe7\xf5es geradas pelo sistema e com alto grau de criticidade. Devem ser utilizadas quando o sistema estiver inst\xe1vel ou existir risco de perda de dados e acesso a recursos."},m=void 0,p={unversionedId:"components/alert",id:"components/alert",title:"Alert",description:"S\xe3o notifica\xe7\xf5es geradas pelo sistema e com alto grau de criticidade. Devem ser utilizadas quando o sistema estiver inst\xe1vel ou existir risco de perda de dados e acesso a recursos.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/components/alert.md",sourceDirName:"components",slug:"/components/alert",permalink:"/tangram/docs/components/alert",draft:!1,editUrl:"https://github.com/ResultadosDigitais/tangram/edit/next/docusaurus/docs/components/alert.md",tags:[],version:"current",frontMatter:{title:"Alert",description:"S\xe3o notifica\xe7\xf5es geradas pelo sistema e com alto grau de criticidade. Devem ser utilizadas quando o sistema estiver inst\xe1vel ou existir risco de perda de dados e acesso a recursos."},sidebar:"mySidebar",previous:{title:"Tooltip",permalink:"/tangram/docs/components/tooltip"},next:{title:"Dialog",permalink:"/tangram/docs/components/dialog"}},u={},g=[{value:"Tipos",id:"tipos",level:2},{value:"Alerta de alto risco",id:"high-risk-alert",level:3},{value:"Alerta de m\xe9dio risco",id:"medium-risk-alert",level:3},{value:"Feedback",id:"feedback",level:2}],v={toc:g};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(n.Z,{current:"docs",name:"alert",mdxType:"ComponentTab"}),(0,r.kt)("p",null,"S\xe3o notifica\xe7\xf5es geradas pelo sistema e com alto grau de criticidade. Devem ser utilizadas quando o sistema estiver inst\xe1vel ou existir risco de perda de dados e acesso a recursos."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"O ",(0,r.kt)("inlineCode",{parentName:"li"},"Alert")," \xe9 uma mensagem e s\xf3 devem desaparecer quando a situa\xe7\xe3o estiver resolvida. O ",(0,r.kt)("inlineCode",{parentName:"li"},"Alert")," n\xe3o pode ser fechado"),(0,r.kt)("li",{parentName:"ul"},"Recomenda-se utilizar um link para mais explica\xe7\xf5es sobre a situa\xe7\xe3o, sempre que necess\xe1rio"),(0,r.kt)("li",{parentName:"ul"},"O ",(0,r.kt)("inlineCode",{parentName:"li"},"Alert")," \xe9 exibido no topo da tela, acima da ",(0,r.kt)("inlineCode",{parentName:"li"},"Navbar"))),(0,r.kt)("h2",{id:"tipos"},"Tipos"),(0,r.kt)("p",null,"Alertas podem ser de alto ou m\xe9dio risco, aparecendo nas cores vermelha e amarela, respectivamente."),(0,r.kt)("h3",{id:"high-risk-alert"},"Alerta de alto risco"),(0,r.kt)(o.Z,{mdxType:"CardGrid"},(0,r.kt)(o.D,{mdxType:"CardGridItem"},(0,r.kt)(d.Z,{icon:(0,r.kt)(l.Z,{title:"Exclamation triangle icon",mdxType:"ExclamationTriangle"}),mdxType:"Alert"},"O RD Station est\xe1 passando por instabilidade e algumas funcionalidades podem estar comprometidas."))),(0,r.kt)("h3",{id:"medium-risk-alert"},"Alerta de m\xe9dio risco"),(0,r.kt)(o.Z,{mdxType:"CardGrid"},(0,r.kt)(o.D,{mdxType:"CardGridItem"},(0,r.kt)(d.Z,{kind:d.Z.kinds.warning,icon:(0,r.kt)(l.Z,{title:"Exclamation triangle icon",mdxType:"ExclamationTriangle"}),mdxType:"Alert"},"O RD Station est\xe1 passando por instabilidade e algumas funcionalidades podem estar comprometidas."))),(0,r.kt)("h2",{id:"feedback"},"Feedback"),(0,r.kt)(s.Z,{mdxType:"FeedbackBlock"}))}k.isMDXComponent=!0}}]);