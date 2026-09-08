"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8168],{54479:(e,t,r)=>{r.d(t,{D:()=>u,Z:()=>s});var a=r(25773),i=r(27378),o=r(67468),n=r(45666);const l=o.ZP.div`
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
`;const s=function(e){let{children:t,columns:r=1,...o}=e;return i.createElement(n.Z,null,(()=>i.createElement(l,(0,a.Z)({$columns:r},o),t)))};var c=r(89620);const d=(0,o.ZP)(c.Z)`
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
`;const u=function(e){let{children:t,featured:r=!1,centered:a=!1,className:o}=e;return i.createElement(d,{$featured:r,$centered:a,className:o},t)}},45666:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(27378),i=r(77524);function o(e){let{children:t,fallback:r}=e;return(0,i.Z)()?a.createElement(a.Fragment,null,t?.()):r??null}},74333:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r(27378).createContext({})},66677:(e,t,r)=>{r.d(t,{Z:()=>h});var a=r(25773),i=r(30808),o=r(27378),n=r(23615),l=r.n(n),s=r(67468),c=r(85901),d=r(959);const u=["children","inverted","disabled","error"],p=(0,s.ZP)(d.Z).withConfig({displayName:"FormControlLabel__Root",componentId:"tg-1yZ__sc-d76acl-0"})([""," color:var(--neutral-text-high-emphasis);margin-left:var(--size-spacing-03);&:hover{color:var(--neutral-text-high-emphasis);}"," "," ",""],c.Z,(e=>{let{$error:t}=e;return t&&(0,s.iv)(["&,&:hover{color:var(--danger-text);}"])}),(e=>{let{$disabled:t}=e;return t&&(0,s.iv)(["&,&:hover{color:var(--neutral-text-disabled);}"])}),(e=>{let{$inverted:t}=e;return t&&(0,s.iv)(["&,&:hover{color:var(--neutral-text-inverse);}"])})),m=(0,o.forwardRef)(((e,t)=>{let{children:r,inverted:n=!1,disabled:l=!1,error:s=!1}=e,c=(0,i.Z)(e,u);return o.createElement(p,(0,a.Z)({ref:t,$disabled:l,$inverted:n,$error:s,forwardedAs:"label"},c),r)}));m.displayName="FormControlLabel",m.Style=p,m.propTypes={children:l().node.isRequired,inverted:l().bool,disabled:l().bool,error:l().bool};const h=m},58649:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(27378),i=r(74333);const o=()=>a.useContext(i.Z)},54326:(e,t,r)=>{r.d(t,{Z:()=>k});var a=r(25773),i=r(30808),o=(r(23615),r(27378)),n=r(67468),l=r(61380),s=r(26703),c=r(66644),d=r(66677),u=r(58649);const p=["id","style","className","tabIndex","checked","defaultChecked","onChange","onFocus","onBlur","label","value","disabled","required","hideLabel","labelStart","rootRef"],m="24px",h="2px",b=n.ZP.span.withConfig({displayName:"Switch__Toggle",componentId:"tg-1yZ__sc-1kqx6wu-0"})(["position:relative;display:inline-flex;align-items:center;vertical-align:middle;width:calc(2 * ",");height:",";margin:0;border-radius:var(--border-radius-pill);border:0;padding:2px;background-color:var(--neutral-surface-high-emphasis);&:before{transition-duration:var(--motion-duration-extra-fast);transition-timing-function:var(--motion-timing-function-ease-in-out);transition-property:left;content:'';position:absolute;left:",";display:block;width:calc("," - 2 * ",");height:calc("," - 2 * ",");border-radius:var(--border-radius-circle);background-color:var(--neutral-surface);}&:hover{background-color:var(--neutral-surface-hover);}&:has(input:disabled){&,&:hover{background-color:var(--neutral-surface-disabled);}}&:has(input:checked){&,&:hover{background-color:var(--primary-surface-high-emphasis);}&:before{left:calc("," + ",");}}&:has(input:checked:disabled){&,&:hover{background-color:var(--primary-surface-low-emphasis);}}> input{cursor:inherit;position:absolute;opacity:0;top:0;left:0;}"],m,m,h,m,h,m,h,h,m),g=(0,n.ZP)(d.Z).withConfig({displayName:"Switch__Label",componentId:"tg-1yZ__sc-1kqx6wu-1"})(["margin:0;"]),v=n.ZP.label.withConfig({displayName:"Switch__Root",componentId:"tg-1yZ__sc-1kqx6wu-2"})([""," --focus-outline-offset:1px;cursor:pointer;display:inline-flex;gap:var(--size-spacing-03);align-items:start;justify-content:space-between;&:not(:has(",")){--focus-outline-offset:0;--focus-border-radius:var(--border-radius-pill);height:fit-content;","{margin-top:0;}}",""],l.Z,g,b,(e=>{let{$labelStart:t}=e;return t&&(0,n.iv)(["","{order:-1;}"],g)})),f=(0,o.forwardRef)(((e,t)=>{let{id:r,style:n,className:l,tabIndex:d,checked:m,defaultChecked:h,onChange:f,label:k,value:w,disabled:y=!1,required:Z=!1,hideLabel:x=!1,labelStart:C=!1,rootRef:S=null}=e,$=(0,i.Z)(e,p);const _=(0,o.useRef)(null),N=(0,u.Z)(),T=y||N.disabled,R=Z||N.required,[E,I]=(0,s.Z)({value:m,defaultValue:Boolean(h)}),q=(0,o.useCallback)((e=>{I(e.target.checked),null==f||f(e.target.checked)}),[f,I]);return o.createElement(v,{ref:S,style:n,className:l,tabIndex:d,"aria-disabled":T,$labelStart:C},o.createElement(b,null,o.createElement("input",(0,a.Z)({},$,{ref:(0,c.Z)([t,_]),id:r,type:"checkbox",value:w,checked:E,disabled:T,"aria-required":R,"aria-label":k,onChange:q}))),k&&!x&&o.createElement(g,{forwardedAs:"span",disabled:T},k))}));f.displayName="Switch",f.Style=v;const k=f},59023:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>b,frontMatter:()=>c,metadata:()=>u,toc:()=>m});var a=r(25773),i=(r(27378),r(35318)),o=r(80621),n=r(82544),l=r(54479),s=r(54326);const c={title:"Switch",description:"O Switch permite alternar entre dois estados poss\xedveis."},d=void 0,u={unversionedId:"components/switch",id:"components/switch",title:"Switch",description:"O Switch permite alternar entre dois estados poss\xedveis.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/components/switch.md",sourceDirName:"components",slug:"/components/switch",permalink:"/tangram-doc/docs/components/switch",draft:!1,editUrl:"https://github.com/ResultadosDigitais/tangram/edit/next/docusaurus/docs/components/switch.md",tags:[],version:"current",frontMatter:{title:"Switch",description:"O Switch permite alternar entre dois estados poss\xedveis."},sidebar:"mySidebar",previous:{title:"Slider",permalink:"/tangram-doc/docs/components/slider"},next:{title:"TextArea",permalink:"/tangram-doc/docs/components/textarea"}},p={},m=[{value:"Feedback",id:"feedback",level:2}],h={toc:m};function b(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.Z,{current:"docs",name:"switch",mdxType:"ComponentTab"}),(0,i.kt)("p",null,"O ",(0,i.kt)("inlineCode",{parentName:"p"},"Switch"),' permite alternar entre dois estados poss\xedveis. Normalmente \xe9 usado para \u201dligar/desligar\u201d ou "ativar/desativar" algo. ',(0,i.kt)("strong",{parentName:"p"},"Suas a\xe7\xf5es t\xeam efeito imediato"),"."),(0,i.kt)(l.Z,{mdxType:"CardGrid"},(0,i.kt)(l.D,{centered:!0,mdxType:"CardGridItem"},(0,i.kt)(s.Z,{mdxType:"Switch"}))),(0,i.kt)("h2",{id:"feedback"},"Feedback"),(0,i.kt)(n.Z,{mdxType:"FeedbackBlock"}))}b.isMDXComponent=!0}}]);