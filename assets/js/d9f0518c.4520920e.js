"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2768],{54479:(e,t,a)=>{a.d(t,{D:()=>m,Z:()=>s});var r=a(25773),n=a(27378),i=a(67468),o=a(45666);const l=i.ZP.div`
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
`;const s=function(e){let{children:t,columns:a=1,...i}=e;return n.createElement(o.Z,null,(()=>n.createElement(l,(0,r.Z)({$columns:a},i),t)))};var d=a(89620);const c=(0,i.ZP)(d.Z)`
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
`;const m=function(e){let{children:t,featured:a=!1,centered:r=!1,className:i}=e;return n.createElement(c,{$featured:a,$centered:r,className:i},t)}},17311:(e,t,a)=>{a.d(t,{Do:()=>v,pM:()=>w,ZP:()=>o});var r=a(25773),n=a(27378),i=a(54479);const o=function(e){let{children:t,columns:a=2,...o}=e;return n.createElement(i.Z,(0,r.Z)({columns:a},o),t)};var l=a(64723),s=a(67468),d=a(42900),c=a(28219);const m=s.ZP.p`
  margin-top: var(--size-spacing-02);
  margin-bottom: var(--size-spacing-05);
`;const u=function(e){return n.createElement(m,e)},p=(0,s.ZP)(i.D)`
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
`,g=s.ZP.div`
  width: 100%;
  text-align: center;
  padding: var(--size-spacing-04);

  p {
    font: var(--text-md-regular) !important;
  }
`;const v=function(e){let{title:t,children:a}=e;return n.createElement(p,{centered:!0},n.createElement(g,null,a),n.createElement(h,null,n.createElement(d.Z,{size:d.Z.sizes.md,kind:d.Z.kinds.success,icon:n.createElement(c.Z,{title:"Checkmark icon"})},n.createElement(l.Z,{id:"doanddont.do"},"Do")),t&&n.createElement(u,null,t)))};var f=a(4492);const y=(0,s.ZP)(i.D)`
  background-color: var(--neutral-surface-low-emphasis);
  border: 1px solid var(--danger-border);
  padding: 0;
`,b=s.ZP.div`
  text-align: left;
  padding: var(--size-spacing-04);
  width: 100%;
  border-radius: 0 0 calc(var(--border-radius-md) + 2px)
    calc(var(--border-radius-md) + 2px);

  background-color: var(--neutral-surface);
`,Z=s.ZP.div`
  width: 100%;
  text-align: center;
  padding: var(--size-spacing-04);

  p {
    font: var(--text-md-regular) !important;
  }
`;const w=function(e){let{title:t,children:a}=e;return n.createElement(y,{centered:!0},n.createElement(Z,null,a),n.createElement(b,null,n.createElement(d.Z,{size:d.Z.sizes.md,kind:d.Z.kinds.danger,icon:n.createElement(f.Z,{title:"Times icon"})},n.createElement(l.Z,{id:"doanddont.dont"},"Don't")),t&&n.createElement(u,null,t)))}},96350:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(27378),n=a(79011),i=a(8205),o=a(99876),l=a(18225);function s(){return r.createElement(r.Fragment,null,r.createElement(n.Z.Control,null,r.createElement(n.Z.Label,{htmlFor:"enUS"},"enUS"),r.createElement(i.Z,{id:"enUS",name:"enUS",locale:o.Z,dateFormat:"MM/dd/yyyy",placeholder:"Select a date"})),r.createElement(n.Z.Control,null,r.createElement(n.Z.Label,{htmlFor:"ptBR"},"ptBR (default)"),r.createElement(i.Z,{id:"ptBR",name:"ptBR",placeholder:"Selecione uma data"})),r.createElement(n.Z.Control,null,r.createElement(n.Z.Label,{htmlFor:"es"},"es"),r.createElement(i.Z,{id:"es",name:"es",locale:l.Z,placeholder:"Seleccione una fecha"})))}},23389:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(25773),n=a(27378),i=a(62957),o=a(85433);function l(e){let{children:t,...a}=e;return n.createElement(o.Z,(0,r.Z)({as:i.Z},a),t)}},87954:(e,t,a)=>{a.d(t,{Z:()=>h});var r,n=a(25773),i=a(30808),o=a(27378),l=a(67468),s=(a(23615),a(63559)),d=a(75387),c=a(26503);const m=["disabled","as","children","type","kind","size","startIcon","endIcon","ia","loading","fluid"],u=(0,l.ZP)(d.Z).withConfig({displayName:"Button__Root",componentId:"tg-1yZ__sc-7cbhwm-0"})([""]),p=(0,o.forwardRef)(((e,t)=>{let{disabled:a,as:l,children:d,type:h=p.types.button,kind:g=p.kinds.primary,size:v=p.sizes.md,startIcon:f,endIcon:y,ia:b=!1,loading:Z=!1,fluid:w=!1}=e,k=(0,i.Z)(e,m);return o.createElement(u,(0,n.Z)({ref:t,loading:Z,fluid:w,forwardedAs:l,size:v,disabled:a||Z,kind:g,type:h,ia:b},k),Z?o.createElement(c.Z,{size:c.Z.sizes.sm}):b?f||r||(r=o.createElement(s.Z,{title:"IA","aria-hidden":"true"})):f,d,y)}));p.displayName="Button",p.sizes=d.Z.sizes,p.kinds=d.Z.kinds,p.types=d.Z.types;const h=p},79011:(e,t,a)=>{a.d(t,{Z:()=>h});var r=a(25773),n=a(27378),i=a(67468),o=a(85901),l=a(17717),s=a(66677),d=a(29478),c=a(61778),m=a(24338);const u=i.ZP.form.withConfig({displayName:"Form__Root",componentId:"tg-1yZ__sc-d5k6eq-0"})([""," display:block;margin:0;padding:0;"],o.Z),p=(0,n.forwardRef)(((e,t)=>n.createElement(u,(0,r.Z)({},e,{ref:t}))));p.displayName="Form",p.Style=u,p.Control=l.Z,p.ControlLabel=s.Z,p.Label=d.Z,p.Group=c.Z,p.Feedback=m.Z;const h=p},17717:(e,t,a)=>{a.d(t,{Z:()=>u});var r=a(25773),n=a(30808),i=a(27378),o=(a(23615),a(67468)),l=a(85901),s=a(74333);const d=["children","disabled","error","success","required","inline"],c=o.ZP.div.withConfig({displayName:"FormControl__Root",componentId:"tg-1yZ__sc-11hy1kc-0"})([""," border:none;padding:0;margin:0 0 var(--size-spacing-04) 0;",""],l.Z,(e=>{let{$inline:t}=e;return t&&(0,o.iv)(["display:inline-flex;align-items:center;margin-bottom:0;margin-right:var(--size-spacing-04);"])})),m=(0,i.forwardRef)(((e,t)=>{let{children:a=null,disabled:o=!1,error:l=!1,success:m=!1,required:u=!1,inline:p=!1}=e,h=(0,n.Z)(e,d);const g=(0,i.useMemo)((()=>({inline:p,required:u,disabled:o,error:l,success:m})),[p,u,o,l,m]);return i.createElement(s.Z.Provider,{value:g},i.createElement(c,(0,r.Z)({ref:t,$inline:p},h),a))}));m.displayName="FormControl",m.Context=s.Z,m.Style=c;const u=m},74333:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a(27378).createContext({})},66677:(e,t,a)=>{a.d(t,{Z:()=>h});var r=a(25773),n=a(30808),i=a(27378),o=a(23615),l=a.n(o),s=a(67468),d=a(85901),c=a(959);const m=["children","inverted","disabled","error"],u=(0,s.ZP)(c.Z).withConfig({displayName:"FormControlLabel__Root",componentId:"tg-1yZ__sc-d76acl-0"})([""," color:var(--neutral-text-high-emphasis);margin-left:var(--size-spacing-03);&:hover{color:var(--neutral-text-high-emphasis);}"," "," ",""],d.Z,(e=>{let{$error:t}=e;return t&&(0,s.iv)(["&,&:hover{color:var(--danger-text);}"])}),(e=>{let{$disabled:t}=e;return t&&(0,s.iv)(["&,&:hover{color:var(--neutral-text-disabled);}"])}),(e=>{let{$inverted:t}=e;return t&&(0,s.iv)(["&,&:hover{color:var(--neutral-text-inverse);}"])})),p=(0,i.forwardRef)(((e,t)=>{let{children:a,inverted:o=!1,disabled:l=!1,error:s=!1}=e,d=(0,n.Z)(e,m);return i.createElement(u,(0,r.Z)({ref:t,$disabled:l,$inverted:o,$error:s,forwardedAs:"label"},d),a)}));p.displayName="FormControlLabel",p.Style=u,p.propTypes={children:l().node.isRequired,inverted:l().bool,disabled:l().bool,error:l().bool};const h=p},24338:(e,t,a)=>{a.d(t,{Z:()=>p});var r=a(25773),n=a(30808),i=a(27378),o=(a(23615),a(67468)),l=a(85901),s=a(58649),d=a(959);const c=["children","as","error","success"],m=(0,o.ZP)(d.Z).withConfig({displayName:"FormFeedback__Root",componentId:"tg-1yZ__sc-7iulb-0"})([""," display:block;color:var(--neutral-text-low-emphasis);margin-top:var(--size-spacing-02);"," ",""],l.Z,(e=>{let{$success:t}=e;return t&&(0,o.iv)(["color:var(--success-text);"])}),(e=>{let{$error:t}=e;return t&&(0,o.iv)(["color:var(--danger-text);"])})),u=(0,i.forwardRef)(((e,t)=>{let{children:a=null,as:o="span",error:l=!1,success:u=!1}=e,p=(0,n.Z)(e,c);const{error:h,success:g}=(0,s.Z)(),v=h||l,f=g||u;return a&&i.createElement(m,(0,r.Z)({ref:t,forwardedAs:o,token:d.Z.tokens.TEXT_SM_REGULAR,$error:v,$success:f},p),a)}));u.displayName="FormFeedback",u.Style=m;const p=u},61778:(e,t,a)=>{a.d(t,{Z:()=>p});var r=a(25773),n=a(30808),i=a(27378),o=a(23615),l=a.n(o),s=a(67468),d=a(85901);const c=["children","row"],m=s.ZP.div.withConfig({displayName:"FormGroup__Root",componentId:"tg-1yZ__sc-bue639-0"})([""," display:flex;flex-wrap:wrap;flex-direction:column;> label:not(:last-child){margin:0 0 var(--size-spacing-02) 0;}",""],d.Z,(e=>{let{$row:t}=e;return t&&(0,s.iv)(["flex-direction:row;> label:not(:last-child){margin:0 var(--size-spacing-04) 0 0;}"])})),u=(0,i.forwardRef)(((e,t)=>{let{children:a,row:o=!1}=e,l=(0,n.Z)(e,c);return i.createElement(m,(0,r.Z)({ref:t,$row:o},l),a)}));u.displayName="FormGroup",u.propTypes={children:l().node.isRequired,row:l().bool};const p=u},29478:(e,t,a)=>{a.d(t,{Z:()=>v});var r,n=a(25773),i=a(30808),o=a(82769),l=a(27378),s=a(67468),d=(a(23615),a(85901)),c=a(58649),m=a(959);const u=["children","as","disabled","required"],p=(0,s.ZP)(m.Z).withConfig({displayName:"FormLabel__Root",componentId:"tg-1yZ__sc-162zhfs-0"})([""," display:block;margin:0 0 var(--size-spacing-02) 0;color:var(--neutral-text-high-emphasis);&:hover{color:var(--neutral-text-high-emphasis);}"," "," ",""],d.Z,(e=>{let{forwardedAs:t}=e;return"legend"===t&&(0,s.iv)(["margin-bottom:var(--size-spacing-03);"])}),(e=>{let{disabled:t}=e;return t&&(0,s.iv)(["&,&:hover{color:var(--neutral-text-disabled);}"])}),(e=>{let{$inline:t}=e;return t&&(0,s.iv)(["margin-bottom:0;margin-right:var(--size-spacing-02);"])})),h=(0,s.ZP)((e=>{let t=Object.assign({},((0,o.Z)(e),e));return l.createElement("span",t," *")})).withConfig({displayName:"FormLabel__Required",componentId:"tg-1yZ__sc-162zhfs-1"})(["color:var(--danger-text);"]),g=(0,l.forwardRef)(((e,t)=>{let{children:a,as:o="label",disabled:s=!1,required:d=!1}=e,g=(0,i.Z)(e,u);const{inline:v,disabled:f,required:y}=(0,c.Z)();return l.createElement(p,(0,n.Z)({ref:t},g,{$inline:v,token:m.Z.tokens.TEXT_MD_BOLD,forwardedAs:o,disabled:s||f}),a,(d||y)&&(r||(r=l.createElement(h,null))))}));g.displayName="FormLabel";const v=g},58649:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(27378),n=a(74333);const i=()=>r.useContext(n.Z)},38095:(e,t,a)=>{a.d(t,{Z:()=>p});var r=a(25773),n=a(30808),i=a(27378),o=(a(23615),a(67468)),l=a(34822),s=a(89679);const d=["children","lineBreak","gap","inline","verticalAlign","horizontalAlign","as"];function c(e){return"string"==typeof e?e:"var(--size-spacing-".concat(e.toString().padStart(2,"0"),")")}const m=o.ZP.div.withConfig({displayName:"InlineGroup__Root",componentId:"tg-1yZ__sc-1n0xm5v-0"})(["display:flex;flex-direction:row;gap:",";"," ",";"," ",""],(e=>{let{$gap:t}=e;return Array.isArray(t)?t.map(c).join(" "):c(t)}),(e=>{let{$inline:t}=e;return t&&(0,o.iv)(["display:inline-flex;"])}),(e=>{let{$horizontalAlign:t}=e;return t&&(0,o.iv)(["justify-content:",";"],t)}),(e=>{let{$verticalAlign:t}=e;return t&&(0,o.iv)(["align-items:",";"],t)}),(e=>{let{$lineBreak:t}=e;return t&&(0,o.iv)(["flex-wrap:wrap;"])})),u=(0,i.forwardRef)(((e,t)=>{let{children:a,lineBreak:o=!1,gap:l="var(--size-spacing-02)",inline:s=!1,verticalAlign:c=u.verticalAlignments.top,horizontalAlign:p=u.horizontalAlignments.left,as:h="div"}=e,g=(0,n.Z)(e,d);return i.createElement(m,(0,r.Z)({ref:t,as:h,$gap:l,$inline:s,$lineBreak:o,$horizontalAlign:p,$verticalAlign:c},g),a)}));u.displayName="InlineGroup",u.Style=m,u.Item=s.Z,u.horizontalAlignments=l.T,u.verticalAlignments=l.n;const p=u},89679:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(25773),n=a(30808),i=a(27378),o=(a(23615),a(67468)),l=a(34822);const s=["children","verticalAlign","fluid","as"],d=o.ZP.div.withConfig({displayName:"InlineGroupItem__Root",componentId:"tg-1yZ__sc-1r2n1hz-0"})(["",";",""],(e=>{let{$verticalAlign:t}=e;return t&&(0,o.iv)(["align-self:",";"],t)}),(e=>{let{$fluid:t}=e;return t&&(0,o.iv)(["flex:1;min-width:0;"])})),c=(0,i.forwardRef)(((e,t)=>{let{children:a,verticalAlign:o,fluid:l=!1,as:c="div"}=e,m=(0,n.Z)(e,s);return i.createElement(d,(0,r.Z)({ref:t,as:c,$verticalAlign:o,$fluid:l},m),a)}));c.displayName="InlineGroupItem",c.Style=d,c.verticalAlignments=l.n;const m=c},34822:(e,t,a)=>{a.d(t,{T:()=>r,n:()=>n});const r={left:"flex-start",center:"center",right:"flex-end",spaceBetween:"space-between"},n={top:"start",center:"center",bottom:"end",baseline:"baseline",stretch:"stretch"}},55575:(e,t,a)=>{a.d(t,{Z:()=>p});var r=a(25773),n=a(30808),i=a(27378),o=(a(23615),a(67468)),l=a(66644),s=a(58649),d=a(19201);const c=["rootRef","className","style","value","defaultValue","prefix","suffix","width","disabled","required","error","success","aria-invalid"],m=(0,o.ZP)(d.Z).withConfig({displayName:"Input__Root",componentId:"tg-1yZ__sc-2oktpa-0"})([""]),u=(0,i.forwardRef)(((e,t)=>{let{rootRef:a,className:o,style:d,value:u,defaultValue:p,prefix:h,suffix:g,width:v,disabled:f=!1,required:y=!1,error:b=!1,success:Z=!1}=e,w=(0,n.Z)(e,c);const k=(0,i.useRef)(null),x=(0,s.Z)(),_=x.required||y,z=x.success||Z,E=x.error||b,C=Object.assign({},z||E?{"aria-invalid":E||!z}:{}),$=(0,i.useCallback)((()=>{k.current.focus()}),[]);return i.createElement(m,{ref:a,className:o,style:d,disabled:f,prefix:h,suffix:g,width:v,onClick:$},i.createElement("input",(0,r.Z)({},w,{ref:(0,l.Z)([k,t]),disabled:f,value:u,defaultValue:p,"aria-required":_},C)))}));u.displayName="Input",u.Style=m;const p=u},19201:(e,t,a)=>{a.d(t,{Z:()=>v});var r=a(25773),n=a(30808),i=a(27378),o=a(67468),l=a(61380),s=a(75387),d=a(26503),c=a(38095);const m=["disabled","prefix","suffix","width","children"],u=(0,o.ZP)(c.Z).attrs({gap:1,verticalAlign:c.Z.verticalAlignments.center}).withConfig({displayName:"InputControl__Prefix",componentId:"tg-1yZ__sc-1bx7dgp-0"})(["height:calc(var(--input-height) - 2px);> svg{--custom-icon-color:var(--input-icon-color);}","{"," --focus-outline-offset:calc(-1 * var(--size-spacing-01) - 1px);&:hover,&:focus,&:active{&:not(:disabled),&:not([disabled]),&:not([aria-disabled='true']){background-color:transparent;}}}& > ",":first-child,& > ",":first-child{margin-left:calc(-1 * (var(--size-spacing-03) - var(--size-spacing-01)));}"],s.Z.Style,s.Z.SmallStyle,s.Z.Style,d.Z.Style),p=(0,o.ZP)(u).withConfig({displayName:"InputControl__Suffix",componentId:"tg-1yZ__sc-1bx7dgp-1"})(["& > ",":last-child,& > ",":last-child{margin-right:calc(-1 * (var(--size-spacing-03) - var(--size-spacing-01)));}"],s.Z.Style,d.Z.Style),h=o.ZP.div.withConfig({displayName:"InputControl__Root",componentId:"tg-1yZ__sc-1bx7dgp-2"})(["--focus-border-radius:var(--border-radius-md);--input-height:",";--input-border-color:var(--neutral-border-interactive);--input-background-color:var(--neutral-surface);--input-text-color:var(--neutral-text-low-emphasis);--input-value-color:var(--neutral-text-high-emphasis);--input-placeholder-color:var(--neutral-text-low-emphasis);--input-icon-color:var(--neutral-icon-low-emphasis);--input-line-height:calc( var(--input-height) - 2px - (2 * var(--size-spacing-02)) );"," display:flex;gap:var(--size-spacing-02);align-items:center;height:var(--input-height);width:",";border-radius:var(--border-radius-md);border:1px solid var(--input-border-color);padding:0 var(--size-spacing-03);color:var(--neutral-text-low-emphasis);background-color:var(--input-background-color);box-shadow:none;&,> input,> input::placeholder,> textarea,> textarea::placeholder{font:var(--text-md-regular);line-height:var(--input-line-height);letter-spacing:-0.01em;}input{height:var(--input-line-height);}input,textarea{display:block;flex:1;margin:0;min-width:0;border:0;padding:0;outline:0;color:var(--input-value-color);background-color:transparent;&::placeholder{color:var(--input-placeholder-color);}::-ms-clear{display:none;width:0;height:0;}::-ms-reveal{display:none;width:0;height:0;}::-webkit-search-decoration,::-webkit-search-cancel-button,::-webkit-search-results-button,::-webkit-search-results-decoration{display:none;}}&:hover,&:focus-within{--input-border-color:var(--neutral-border-interactive-hover);}&[aria-invalid='true'],&:has(*[aria-invalid='true']){&,&:hover{--input-border-color:var(--danger-border);}&:focus-within,&:hover:focus-within{--input-border-color:var(--neutral-border-interactive-hover);}}&[aria-invalid='false'],&:has(*[aria-invalid='false']){&,&:hover{--input-border-color:var(--success-border);}&:focus-within,&:hover:focus-within{--input-border-color:var(--neutral-border-interactive-hover);}}&[aria-disabled='true']{--input-background-color:var(--neutral-surface-disabled);--input-value-color:var(--neutral-text-disabled);--input-placeholder-color:var(--neutral-text-disabled);&,&:hover,&:focus,&:focus-within,&:hover:focus,&:hover:focus-within{--input-border-color:var(--neutral-border-interactive-disabled);}}"],"40px",l.Z,(e=>{let{$width:t}=e;return t||"100%"})),g=(0,i.forwardRef)(((e,t)=>{let{disabled:a,prefix:o,suffix:l,width:s,children:d}=e,c=(0,n.Z)(e,m);return i.createElement(h,(0,r.Z)({},c,{ref:t,"aria-disabled":a,$width:s}),o&&i.createElement(u,null,o),d,l&&i.createElement(p,null,l))}));g.displayName="InputControl",g.Style=h;const v=g},5662:(e,t,a)=>{a.d(t,{Z:()=>b});var r=a(25773),n=a(30808),i=a(27378),o=(a(23615),a(67468)),l=a(8925),s=a(61994),d=a(29163),c=a(84227),m=a(79226),u=a(90496),p=a(79778),h=a(85689);const g=["forwardedAs","children","as","size","listStyleType","alignment","bordered"],v=["$listStyleType","as"],f=o.ZP.ul.withConfig({displayName:"List__Root",componentId:"tg-1yZ__sc-4hzzzr-0"})(["padding:0;margin:0;list-style-position:inside;list-style-type:",";background-color:var(--neutral-surface);width:100%;"],(e=>{let{$listStyleType:t}=e;return t})),y=(0,i.forwardRef)(((e,t)=>{let{forwardedAs:a,children:o,as:l=y.as.ul,size:s=y.sizes.md,listStyleType:d="none",alignment:c=y.alignments.center,bordered:m=!1}=e,u=(0,n.Z)(e,g);const b={size:s,alignment:c,bordered:m},Z=i.Children.toArray(o).filter((e=>i.isValidElement(e))).filter((e=>{let{props:t}=e;return t.clickable})).length?p.R.div:null,w=l!==p.R.ul&&l!==p.R.ol&&l!==p.R.menu?p.R.div:null,k=i.Children.map(o,(e=>{if(!i.isValidElement(e))return e;const t=e.props,a=(0,n.Z)(t,v);return(0,i.cloneElement)(e,Object.assign({size:s,listStyleType:d,alignment:c,forwardedAs:Z||w},a))}));return i.createElement(h.Z.Provider,{value:b},i.createElement(f,(0,r.Z)({role:"list",as:Z||l||a,$listStyleType:d,ref:t,$size:s,$alignment:c,$bordered:m},u),k))}));y.displayName="List",y.Item=l.Z,y.Header=s.Z,y.Divider=d.Z,y.Style=f,y.ItemContent=c.Z,y.ItemExtra=m.Z,y.sizes={sm:u.zf.SM,md:u.zf.MD},y.as=p.R,y.alignments=p.d;const b=y},85689:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a(27378).createContext({})},29163:(e,t,a)=>{a.d(t,{Z:()=>u});var r=a(25773),n=a(30808),i=a(27378),o=a(23615),l=a.n(o),s=a(67468);const d=["forwardedAs","as"],c=s.ZP.li.withConfig({displayName:"ListDivider__Root",componentId:"tg-1yZ__sc-1ueoufh-0"})(["height:1px;border:none;background-color:var(--neutral-border);margin:var(--size-spacing-02) 0;list-style:none;"]),m=(0,i.forwardRef)(((e,t)=>{let{forwardedAs:a,as:o}=e,l=(0,n.Z)(e,d);return i.createElement(c,(0,r.Z)({as:a||o,ref:t},l,{role:"separator"}))}));m.displayName="ListDivider",m.Style=c,m.propTypes={as:l().oneOfType([l().node,l().string]),forwardedAs:l().oneOfType([l().node,l().string])};const u=m},61994:(e,t,a)=>{a.d(t,{Z:()=>g});var r=a(25773),n=a(30808),i=a(27378),o=a(23615),l=a.n(o),s=a(67468),d=a(85901),c=a(959);const m=["children","forwardedAs","as"],u=s.ZP.li.withConfig({displayName:"ListHeader__Root",componentId:"tg-1yZ__sc-19u7u4r-0"})([""," padding:var(--size-spacing-04) var(--size-spacing-03) var(--size-spacing-02);position:relative;align-items:center;display:inline-flex;width:100%;list-style:none;"],d.Z),p=(0,s.ZP)(c.Z).withConfig({displayName:"ListHeader__StyledText",componentId:"tg-1yZ__sc-19u7u4r-1"})(["margin:0;"]),h=(0,i.forwardRef)(((e,t)=>{let{children:a,forwardedAs:o,as:l}=e,s=(0,n.Z)(e,m);return i.createElement(u,(0,r.Z)({ref:t,as:o||l},s),i.createElement(p,{textColor:"--neutral-text-low-emphasis",token:c.Z.tokens.TEXT_XS_BOLD},a.toUpperCase()))}));h.displayName="ListHeader",h.Style=u,h.propTypes={children:l().string.isRequired,as:l().oneOfType([l().node,l().string]),forwardedAs:l().oneOfType([l().node,l().string])};const g=h},8925:(e,t,a)=>{a.d(t,{Z:()=>b});var r=a(25773),n=a(30808),i=a(27378),o=(a(23615),a(67468)),l=a(50046),s=a(90496),d=a(79778),c=a(85689),m=a(84227),u=a(79226),p=a(59942),h=a(95778),g=a(76548);const v=["children","size","onClick","forwardedAs","as","disabled","active","clickable","listStyleType"],f=o.ZP.li.withConfig({displayName:"ListItem__Root",componentId:"tg-1yZ__sc-ygn4xa-0"})(["outline:none;position:relative;padding:var(--size-spacing-03) var(--size-spacing-04);width:100%;display:",";align-items:",";",";",";",";",";",";"],(e=>{let{$listStyleType:t}=e;return t&&"none"!==t?"list-item":"flex"}),(e=>{let{$alignment:t}=e;return t===d.d.top?"flex-start":"center"}),(e=>{let{$childrenNumber:t}=e;return t&&(0,o.iv)(["","{order:",";}"],g.Z.Style,t)}),(e=>{let{$bordered:t}=e;return t&&(0,o.iv)(["border-bottom:1px solid var(--neutral-border);"])}),(e=>{let{$clickable:t}=e;return t&&(0,o.iv)(["cursor:pointer;&:hover{background-color:var(--neutral-surface-hover);}"])}),(e=>{let{$active:t}=e;return t&&(0,o.iv)(["&,&:hover,&:focus{background-color:var(--neutral-surface-low-emphasis);}"])}),(e=>{let{$disabled:t}=e;return t&&(0,o.iv)(["pointer-events:none;background-color:transparent;& *,&:hover *,&:focus *{pointer-events:none;color:var(--neutral-text-disabled);","{svg{--custom-icon-color:var(--neutral-icon-disabled);}}}"],h.Z.Style)})),y=(0,i.forwardRef)(((e,t)=>{let{children:a,onClick:o,forwardedAs:s,as:d,disabled:m=!1,active:u=!1,clickable:p=!1,listStyleType:h="none"}=e,g=(0,n.Z)(e,v);const{alignment:y,bordered:b}=i.useContext(c.Z);let Z;(p&&o||p)&&(Z={role:"button","aria-pressed":u,tabIndex:0,as:"div","aria-disabled":m,$disabled:m});const w=a?i.Children.count(a):0;return i.createElement(f,(0,r.Z)({ref:t,onClick:e=>{m||(0,l.Z)(o)&&o(e)},$clickable:p,$active:u,as:s||d,$listStyleType:h},Z,g,{$childrenNumber:w,$alignment:y,$bordered:b}),a)}));y.displayName="ListItem",y.Selector=p.Z,y.Image=h.Z,y.Action=g.Z,y.Content=m.Z,y.Style=f,y.Extra=u.Z,y.sizes={sm:s.zf.SM,md:s.zf.MD};const b=y},76548:(e,t,a)=>{a.d(t,{Z:()=>d});var r=a(30808),n=a(27378),i=(a(23615),a(67468));const o=["children"],l=i.ZP.div.withConfig({displayName:"ListItemAction__Root",componentId:"tg-1yZ__sc-1uq8xv6-0"})(["display:inline-flex;flex-shrink:0;margin-left:var(--size-spacing-04);"]),s=e=>{let{children:t}=e,a=(0,r.Z)(e,o);return n.createElement(l,a,t)};s.displayName="ListItemAction",s.style=l,s.Style=l;const d=s},84227:(e,t,a)=>{a.d(t,{Z:()=>h});var r=a(25773),n=a(30808),i=a(27378),o=(a(23615),a(67468)),l=a(959),s=a(90496),d=a(85689),c=a(79778);const m=["children","mainText","secondaryText","mainColor","secondaryColor"],u=o.ZP.div.withConfig({displayName:"ListItemContent__Root",componentId:"tg-1yZ__sc-1ffisao-0"})(["flex:1 1 auto;min-width:0;",""],(e=>{let{$alignment:t}=e;return t&&t===c.d.top&&(0,o.iv)(["margin-top:var(--size-spacing-02);"])})),p=(0,i.forwardRef)(((e,t)=>{let{children:a,mainText:o,secondaryText:c="",mainColor:p="--neutral-text-high-emphasis",secondaryColor:h="--neutral-text-low-emphasis"}=e,g=(0,n.Z)(e,m);const{size:v,alignment:f}=i.useContext(d.Z);return a?i.createElement(u,(0,r.Z)({ref:t},g,{$alignment:f}),a):(console.warn("Tangram: the props `mainText`, `secondaryText`, `mainColor`, `secondaryColor` is deprecated and will be removed soon!"),i.createElement(u,(0,r.Z)({ref:t},g,{$alignment:f}),i.createElement(l.Z,{as:"div",textColor:p,token:v===s.zf.SM?l.Z.tokens.TEXT_SM_REGULAR:l.Z.tokens.TEXT_MD_REGULAR},o),i.createElement(l.Z,{as:"div",textColor:h,token:v===s.zf.SM?l.Z.tokens.TEXT_XS_REGULAR:l.Z.tokens.TEXT_SM_REGULAR},c)))}));p.displayName="ListItemContent",p.Style=u;const h=p},79226:(e,t,a)=>{a.d(t,{Z:()=>c});var r=a(25773),n=a(30808),i=a(27378),o=(a(23615),a(67468));const l=["children","left","right"],s=o.ZP.div.withConfig({displayName:"ListItemExtra__Root",componentId:"tg-1yZ__sc-9uqjkk-0"})(["align-items:center;display:inline-flex;svg{fill:var(--neutral-icon-low-emphasis);}"," ",""],(e=>{let{$left:t}=e;return t&&(0,o.iv)(["padding-right:var(--size-spacing-03);"])}),(e=>{let{$right:t}=e;return t&&(0,o.iv)(["padding-left:var(--size-spacing-03);"])})),d=(0,i.forwardRef)(((e,t)=>{let{children:a,left:o=!1,right:d=!1}=e,c=(0,n.Z)(e,l);return i.createElement(s,(0,r.Z)({ref:t,$left:o,$right:d},c),a)}));d.displayName="ListItemExtra",d.Style=s;const c=d},95778:(e,t,a)=>{a.d(t,{Z:()=>d});var r=a(30808),n=a(27378),i=(a(23615),a(67468));const o=["children"],l=i.ZP.div.withConfig({displayName:"ListItemImage__Root",componentId:"tg-1yZ__sc-hdtxtx-0"})(["display:inline-flex;flex-shrink:0;margin-right:var(--size-spacing-03);"]),s=e=>{let{children:t}=e,a=(0,r.Z)(e,o);return n.createElement(l,a,t)};s.displayName="ListItemImage",s.Style=l;const d=s},59942:(e,t,a)=>{a.d(t,{Z:()=>u});var r=a(25773),n=a(30808),i=a(27378),o=(a(23615),a(67468)),l=a(85689),s=a(79778);const d=["children"],c=o.ZP.div.withConfig({displayName:"ListItemSelector__Root",componentId:"tg-1yZ__sc-ranr7f-0"})(["display:inline-flex;flex-shrink:0;margin-right:var(--size-spacing-03);",""],(e=>{let{$alignment:t}=e;return t&&t===s.d.top&&(0,o.iv)(["margin-top:11px;"])})),m=e=>{let{children:t}=e,a=(0,n.Z)(e,d);const{alignment:o}=i.useContext(l.Z);return i.createElement(c,(0,r.Z)({$alignment:o},a),t)};m.displayName="ListItemSelector",m.Style=c;const u=m},79778:(e,t,a)=>{a.d(t,{R:()=>n,d:()=>r});const r={top:"top",center:"center"},n={ul:"ul",ol:"ol",div:"div",nav:"nav",menu:"menu"}},42900:(e,t,a)=>{a.d(t,{Z:()=>w});var r=a(25773),n=a(30808),i=a(27378),o=a(4492),l=(a(23615),a(67468)),s=a(61380),d=a(90496),c=a(50046),m=a(10716),u=a(82985);const p={[d.$O.DEFAULT]:{background:"var(--neutral-surface-low-emphasis)",backgroundHover:"var(--neutral-surface-hover)",color:"var(--neutral-text-high-emphasis)",fill:"var(--neutral-icon-high-emphasis)"},[d.$O.PRIMARY]:{background:"var(--primary-surface-high-emphasis)",backgroundHover:"var(--primary-surface-hover)",color:"var(--neutral-text-high-emphasis)",fill:"var(--neutral-icon-high-emphasis)"},[d.$O.SUCCESS]:{background:"var(--success-surface-high-emphasis)",backgroundHover:"var(--success-surface-hover)",color:"var(--neutral-text-high-emphasis)",fill:"var(--neutral-icon-high-emphasis)"},[d.$O.DANGER]:{background:"var(--danger-surface-high-emphasis)",backgroundHover:"var(--danger-surface-hover)",color:"var(--neutral-text-inverse)",fill:"var(--neutral-icon-inverse)"},[d.$O.WARNING]:{background:"var(--warning-surface-high-emphasis)",backgroundHover:"var(--warning-surface-hover)",color:"var(--neutral-text-high-emphasis)",fill:"var(--neutral-icon-high-emphasis)"},[d.$O.HELP]:{background:"var(--highlight-surface-high-emphasis)",backgroundHover:"var(--highlight-surface-hover)",color:"var(--neutral-text-inverse)",fill:"var(--neutral-icon-inverse)"}},h=(0,l.iv)([""," "," &[data-tg-ia='true']{background-color:transparent;background-image:var(--tg-ia-surface);color:var(--neutral-text-high-emphasis);svg{fill:var(--neutral-icon-high-emphasis);}&:hover,&:active,&:focus-within{background-color:transparent;color:var(--neutral-text-high-emphasis);svg{fill:var(--neutral-icon-high-emphasis);}}&[role='button']{cursor:pointer;user-select:none;&:hover,&:active,&:focus-within{","}}}"],u.Z,(e=>{let{$tagKind:t,$isRemovable:a,onClick:r}=e;const n=p[a?d.$O.DEFAULT:t]||p[d.$O.DEFAULT],{background:i,color:o,fill:s,backgroundHover:c}=n;return(0,l.iv)(["background-color:",";color:",";svg{fill:",";}",""],i,o,s,(r||a)&&(e=>{let{backgroundHover:t,color:a,fill:r,onClick:n}=e;return(0,l.iv)([""," &:hover,&:active,&:focus-within{color:",";background-color:",";svg{fill:",";}}"],n&&(0,l.iv)(["cursor:pointer;user-select:none;"]),a,t,r)})({backgroundHover:c,color:o,fill:s,onClick:r}))}),u.Z.Hover),g=["children","startIcon","icon","removable","onDelete","onClick","kind","clickable","size","ia"],v={[d.zf.MD]:{height:"24px",font:"var(--text-xs-bold)",iconSize:"xs"},[d.zf.LG]:{height:"32px",font:"var(--text-sm-bold)",iconSize:"sm"},[d.zf.XL]:{height:"40px",font:"var(--text-md-bold)",iconSize:"md"}},f=l.ZP.div.withConfig({displayName:"Tag__Root",componentId:"tg-1yZ__sc-1q0hqb4-0"})(["--focus-border-radius:var(--border-radius-xs);"," gap:var(--size-spacing-01);border-radius:var(--border-radius-xs);padding:0 var(--size-spacing-02);display:inline-flex;align-items:center;width:max-content;"," "," ",""],s.Z,h,(e=>{let{$size:t}=e;const{height:a,font:r}=v[t]||v[d.zf.MD];return(0,l.iv)(["height:",";font:",";"],a,r)}),(e=>{let{$isRemovable:t}=e;return t&&(0,l.iv)(["gap:var(--size-spacing-02);"])})),y=l.ZP.span.withConfig({displayName:"Tag__Display",componentId:"tg-1yZ__sc-1q0hqb4-1"})(["white-space:nowrap;text-overflow:ellipsis;overflow:hidden;"]),b=l.ZP.div.withConfig({displayName:"Tag__CloseButton",componentId:"tg-1yZ__sc-1q0hqb4-2"})(["display:flex;align-items:center;cursor:pointer;"," svg{fill:var(--neutral-icon-low-emphasis);}&:hover:not([disabled]){background-color:transparent;svg{fill:var(--neutral-icon-high-emphasis);}}"],(e=>{let{$size:t}=e;const{height:a}=v[t]||v[d.zf.MD];return(0,l.iv)(["height:",";"],a)})),Z=(0,i.forwardRef)(((e,t)=>{let{children:a,startIcon:l,icon:s,removable:u,onDelete:p,onClick:h,kind:w=Z.kinds.default,clickable:k=!0,size:x=Z.sizes.md,ia:_=!1}=e,z=(0,n.Z)(e,g);const{iconSize:E}=v[x]||v[d.zf.MD],C=k&&(0,c.Z)(h),$=(0,c.Z)(p)||u,P=s||l,R=(0,i.useCallback)((()=>P?(0,i.isValidElement)(P)&&(0,i.cloneElement)(P,Object.assign({},P.props,{size:E})):null),[P,E]);return(0,i.useEffect)((()=>{w!==Z.kinds.default&&"string"==typeof a&&a.split(" ").length>2&&console.warn("Tangram: is not recommended to use more than two words")}),[w,a]),(0,m.Z)({removable:u,originName:"Tag",fallback:"Use `onDelete` property as callback to define automatically the display with delete icon button"}),(0,m.Z)({startIcon:l,originName:"Tag",fallback:"Replace by `icon` property"}),(0,m.Z)({clickable:!k||void 0,originName:"Tag",fallback:"Use `onClick` to automatically display the appropriate styles of hover, focus and active states"}),i.createElement(f,(0,r.Z)({$tagKind:w,$size:x,$isRemovable:$,"data-tg-ia":_||void 0,onClick:C?h:void 0,tabIndex:C?0:void 0,role:C?"button":void 0,onKeyDown:C?e=>{C&&("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),null==h||h(e)))}:void 0},z,{ref:t}),R(),a&&i.createElement(y,{$isRemovable:$},a),$&&i.createElement(b,{$size:x,onClick:e=>{e.stopPropagation(),p(e)},role:"button"},i.createElement(o.Z,{size:E,title:"Remove tag",titleId:"idIconCloseTag"})))}));Z.displayName="Tag",Z.Style=f,Z.kinds={default:d.$O.DEFAULT,primary:d.$O.PRIMARY,success:d.$O.SUCCESS,danger:d.$O.DANGER,warning:d.$O.WARNING,help:d.$O.HELP},Z.sizes={md:d.zf.MD,lg:d.zf.LG,xl:d.zf.XL};const w=Z},3859:(e,t,a)=>{a.d(t,{Z:()=>r});const r=(e,t)=>!e||e.trim().length<t},8205:(e,t,a)=>{a.d(t,{Z:()=>u});var r=a(25773),n=a(27378),i=a(23615),o=a.n(i),l=a(45908),s=a(11504),d=a(81583),c=a(26703);const m=(0,n.forwardRef)(((e,t)=>{let{value:a,defaultValue:i,position:o=m.positions.bottom,width:u,onChange:p=(()=>{}),locale:h=l.Z,dateFormat:g="dd/MM/yyyy",double:v=!1,yearlyView:f=!1,...y}=e;const[b,Z]=c.Z({value:a,defaultValue:i}),w=(0,n.useCallback)(((e,t)=>{Z(e),p(t,e)}),[p,Z]);return n.createElement(s.Z,(0,r.Z)({selected:b,width:u,onChange:w,popperPlacement:o,ref:t,customInput:n.createElement(d.Z,{width:"100%"}),locale:h,dateFormat:g,double:v,yearlyView:f},y))}));m.displayName="DatePicker",m.positions=s.Z.positions,m.propTypes={dateFormat:o().string,defaultValue:o().instanceOf(Date),double:o().bool,inline:o().bool,width:o().string,locale:o().object,onChange:o().func,placeholder:o().string,position:o().oneOf([m.positions.top,m.positions.bottom]),value:o().instanceOf(Date),shouldCloseOnSelect:o().bool,titleAction:o().func,yearlyView:o().bool};const u=m},11504:(e,t,a)=>{a.d(t,{Z:()=>q});var r=a(25773),n=a(27378),i=a(23615),o=a.n(i),l=a(67468),s=a(22648),d=a.n(s),c=a(45908),m=a(60701),u=a(33065),p=a(959),h=a(87954),g=a(4263),v=a(66101);const f=l.ZP.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: calc(100% - (var(--size-spacing-04) * 2));
  flex-flow: column;
`,y=l.ZP.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--size-spacing-01) 0;
  margin-bottom: var(--size-spacing-01);
`,b=(0,l.ZP)(u.Z)`
  z-index: 1;
`,Z=(0,l.ZP)(p.Z)`
  margin: var(--size-spacing-02) 0;
  font: var(--text-md-bold);
  color: var(--neutral-text-low-emphasis);
  text-align: center;
  cursor: default;
  position: absolute;
  left: 0;
  width: 280px;
`,w=(0,n.forwardRef)(((e,t)=>{let{locale:a=c.Z,...i}=e;const{date:o,changeYear:l}=i;let s=o;return n.createElement(f,(0,r.Z)({ref:t},i),n.createElement(y,null,n.createElement(b,{kind:u.Z.kinds.tertiary,size:h.Z.sizes.sm,onClick:()=>l((0,m.default)(s)-1),"aria-controls":"headerNavigation"},n.createElement(g.Z,{id:"previous-year",title:"go to previous year",titleId:"previous-year"})),n.createElement(Z,{id:"headerNavigation","aria-live":"assertive"},(0,m.default)(s)),n.createElement(b,{kind:u.Z.kinds.tertiary,size:h.Z.sizes.sm,onClick:()=>l((0,m.default)(s)+1),"aria-controls":"headerNavigation"},n.createElement(v.Z,{id:"next-year",title:"go to next year",titleId:"next-year"}))))}));w.displayName="DatePicker.YearlyHeader",w.propTypes={locale:o().object};const k=w;var x=a(54571),_=a(64083),z=a(87926),E=a(37811),C=a(17752),$=a(5662),P=a(50046),R=a(38095),T=a(2793);const I="48px",N=l.ZP.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: calc(100% - (var(--size-spacing-04) * 2));
  flex-flow: column;
`,D=l.ZP.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,S=(0,l.ZP)(u.Z)`
  --button-border-radius: var(--border-radius-md);
  --button-size: var(--size-spacing-05);

  margin-bottom: var(--size-spacing-04);
  z-index: 1;
`,A=(0,l.ZP)(h.Z)`
  --button-size: var(--size-spacing-05);

  margin: auto;
  text-align: center;
  text-transform: inherit;
  width: calc(
    ${"312px"} - 2 * ${I} - (2 * var(--size-spacing-04))
  );
  padding: 0;
  margin-bottom: var(--size-spacing-04);
  color: var(--neutral-text-low-emphasis);
  cursor: pointer;

  &:active:not([disabled]),
  &:hover:not([disabled]) {
    background-color: var(--neutral-surface);
  }

  ${e=>{let{onClick:t}=e;return!t&&l.iv`
      point-events: none;
      outline: none;
      cursor: default;
      color: var(--neutral-text-low-emphasis);

      &:hover:not([disabled]) {
        color: var(--neutral-text-low-emphasis);
      }
    `}}

  ${e=>{let{second:t}=e;return t&&l.iv`
      margin-left: calc(var(--size-spacing-06) + 2 * ${I});
    `}}
`,M=(0,l.ZP)($.Z)`
  margin: 0;
  padding: 0;
  li {
    padding: var(--size-spacing-01) 0 var(--size-spacing-04);
  }
`,L=(0,n.forwardRef)(((e,t)=>{let{locale:a=c.Z,...i}=e;const{monthsShown:o,date:l,decreaseMonth:s,increaseMonth:d,prevMonthButtonDisabled:f,nextMonthButtonDisabled:y,titleAction:b}=i,Z=!P.Z(b)&&{forwardedAs:"div",tabindex:"-1"},w=Array(o).fill(0);let k=document.getElementsByClassName("react-datepicker__month"),I=l;if(o>1&&k.length){const e=k[0].getAttribute("aria-label").replace("month","").trim().split("-").join("/");I=new Date(`${e}/01`)}return n.createElement(N,(0,r.Z)({ref:t},i),n.createElement(D,null,n.createElement(S,{kind:u.Z.kinds.tertiary,onClick:s,disabled:f,"aria-controls":"headerNavigation"},n.createElement(g.Z,{id:"previous-month",title:"go to previous month",titleId:"previous-month"})),n.createElement(R.Z,{id:"headerNavigation","aria-live":"assertive"},w.map(((e,t)=>n.createElement(A,(0,r.Z)({key:`header-${t}`,second:!!t,token:p.Z.tokens.TEXT_MD_BOLD,onClick:b,kind:h.Z.kinds.tertiary,size:h.Z.sizes.md},Z),`${(0,T.G4)(a)[(0,E.default)((0,z.default)(I,t))]} ${(0,m.default)(I)}`)))),n.createElement(S,{kind:u.Z.kinds.tertiary,onClick:d,disabled:y,"aria-controls":"headerNavigation"},n.createElement(v.Z,{id:"next-month",title:"go to next month",titleId:"next-month"}))),n.createElement(D,null,w.map(((e,t)=>n.createElement(M,{as:$.Z.as.ul,key:`weekdays-${t}`},((e,t)=>{const a=(0,x.default)(t,{locale:e});return[].concat([0,1,2,3,4,5,6].map((t=>{const r=(0,_.default)(a,t),i=e.localize.day((0,C.default)(r),{width:"short"});return n.createElement("li",{key:t,className:"react-datepicker__day-name"},i)})))})(a,(0,z.default)(I,t)))))))}));L.displayName="DatePicker.MonthlyHeader",L.propTypes={locale:o().object,titleAction:o().func};const j=L,F="40px",O=l.ZP.div`
  width: ${e=>{let{$width:t}=e;return t||"fit-content"}};
  max-width: 100%;

  .react-datepicker-popper {
    z-index: var(--zindex-1);
  }

  .react-datepicker {
    display: flex;
    position: relative;
    font: var(--text-sm-bold);
    color: var(--neutral-text-high-emphasis);
    text-transform: capitalize;
    background-color: var(--neutral-surface);
    border-radius: var(--border-radius-md);
    padding: var(--size-spacing-04);
    margin-top: calc(${"var(--size-spacing-01)"} + 1px);
    width: ${"312px"};
    box-shadow: ${e=>{let{$inline:t}=e;return t?"none":"var(--shadow-sm)"}};

    &__month-container {
      float: left;
    }

    &__month-text,
    &__day,
    &__day-name {
      outline: none;
      display: inline-block;
      line-height: ${F};
      color: var(--neutral-text-high-emphasis);
      text-align: center;
    }

    &__day,
    &__day-name {
      width: ${F};
    }

    &__day-name {
      color: var(--neutral-text-low-emphasis);
    }

    &__month-text,
    &__day {
      cursor: pointer;

      &--today {
        color: var(--primary-text);
        background-color: var(--neutral-surface-low-emphasis);
      }

      &--outside-month,
      &--disabled {
        color: var(--neutral-text-disabled);

        &:hover {
          background-color: transparent;
        }
      }

      &--disabled:hover {
        cursor: not-allowed;
        color: var(--neutral-text-disabled);
      }
    }

    &__month {
      &--selected {
        background-color: var(--primary-surface-high-emphasis);
        color: var(--neutral-text-high-emphasis);
      }
    }

    &__month {
      &--disabled {
        cursor: not-allowed;
        color: var(--neutral-text-disabled);
      }
    }

    &__month-text:hover:not(.react-datepicker__month-text--keyboard-selected),
    /*This isnt a good practice but we need to add a lot of :not to match with Tangram definitioins*/
    &__day:hover:not(.react-datepicker__day--disabled):not(.react-datepicker__day--selected):not(.react-datepicker__day--range-start):not(.react-datepicker__day--range-end) {
      color: var(--neutral-text-high-emphasis);
      background-color: var(--neutral-surface-hover);
    }

    &__day--keyboard-selected:focus.react-datepicker__day--range-start,
    &__day--keyboard-selected:focus.react-datepicker__day--range-end,
    &__day--keyboard-selected.react-datepicker__day--selected,
    &__day--selected:not(.react-datepicker__day--disabled),
    &__day--selected:hover:not(.react-datepicker__day--disabled),
    &__month-text--keyboard-selected {
      background-color: var(--primary-surface-high-emphasis);
      color: var(--neutral-text-high-emphasis);
    }

    &__day-name {
      font: var(--text-xs-bold);
    }

    &__day-names {
      margin: var(--size-spacing-04) auto var(--size-spacing-03) auto;
    }

    &__monthPicker {
      display: grid;
      grid-template-rows: repeat(3, 1fr);
      row-gap: var(--size-spacing-04);
    }

    &__month-wrapper {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: var(--size-spacing-02);
    }

    &__month-text {
      width: 64px;
      line-height: 64px;
    }

    ${e=>{let{$yearlyView:t}=e;return t?l.iv`
          height: 308px;
          overflow: hidden;
          &__month {
            padding-top: calc(
              24px + var(--size-spacing-05)
            ); /** 24px is the size of custom header for year view */
          }
        `:l.iv`
        &__month {
          padding-top: 76px; /** 76px is the size of custom header for month view */
        }
      `}}

    ${e=>{let{$monthsShown:t}=e;return t&&l.iv`
        width: calc(
          (40px * 14) + var(--size-spacing-06) + (2 * var(--size-spacing-04)) +
            2px
        );
        &__month-container:last-child {
          margin-left: var(--size-spacing-06);
        }
      `}}

    &__day-names {
      display: none;
    }
  }
`,H=(0,n.forwardRef)(((e,t)=>{let{range:a,className:i,titleAction:o,placeholder:l,position:m=H.positions.bottom,selected:u=null,locale:p=c.Z,double:h=!1,yearlyView:g=!1,inline:v=!1,startDate:f=null,endDate:y=null,onChange:b=(()=>{}),dateFormat:Z="dd/MM/yyyy",width:w,...x}=e;(0,s.registerLocale)("locale",p);const _=(0,n.useRef)(t),[z,E]=(0,n.useState)(!1),C=(0,n.useRef)(!0),$=(0,n.useRef)(),P=(0,n.useRef)(),R=(0,n.useRef)(),T=h?2:1;return(0,n.useLayoutEffect)((()=>{if(C.current)return $.current=u,P.current=f,R.current=y,void(C.current=!1);const e=$.current&&!u,t=P.current&&!f,a=R.current&&!y;if(!_.current?.calendar?.componentNode)return;if(e||t||a){_.current.calendar.componentNode.querySelectorAll(".react-datepicker__day--selected, .react-datepicker__day--keyboard-selected").forEach((e=>{e.classList.remove("react-datepicker__day--selected"),e.classList.remove("react-datepicker__day--keyboard-selected")}))}const r=_.current.calendar.componentNode.querySelector(".react-datepicker__day--keyboard-selected"),n=_.current.calendar.componentNode.querySelector(".react-datepicker__day--selected");r&&n&&(r.classList.remove("react-datepicker__day--keyboard-selected"),n.classList.add("react-datepicker__day--keyboard-selected")),$.current=u,P.current=f,R.current=y}),[u,f,y,v]),(0,n.useLayoutEffect)((()=>{if(g&&(z||v)){if(!_.current?.calendar?.componentNode)return;const e=Array.from(_.current.calendar.componentNode.querySelectorAll(".react-datepicker__month-text"));_.current.calendar.componentNode.querySelectorAll(".react-datepicker__month-wrapper").forEach((t=>{const a=e.splice(0,4);if(a.length)return a.map((e=>t.appendChild(e)));t.style.display="none"}))}}),[g,z,v]),n.createElement(O,{$monthsShown:h,$yearlyView:g,className:i,$inline:v,$width:w},n.createElement(d(),(0,r.Z)({selected:u,onCalendarClose:()=>E(!1),onCalendarOpen:()=>E(!0),renderCustomHeader:e=>(e=>g?n.createElement(k,(0,r.Z)({locale:p},e)):n.createElement(j,(0,r.Z)({titleAction:o,monthsShown:T,locale:p},e)))(e),locale:"locale",monthsShown:T,popperPlacement:m,showPopperArrow:!1,showMonthYearPicker:g,inline:v,ref:_,placeholderText:l,startDate:f,endDate:y,onChange:b,dateFormat:Z},x)))}));H.displayName="DatePickerBase",H.positions={top:"top-start",bottom:"bottom-start"},H.propTypes={position:o().oneOf([H.positions.top,H.positions.bottom]),selected:o().instanceOf(Date),startDate:o().instanceOf(Date),endDate:o().instanceOf(Date),inline:o().bool,onChange:o().func,locale:o().object,dateFormat:o().string,double:o().bool,yearlyView:o().bool,titleAction:o().func,placeholder:o().string};const q=H},81583:(e,t,a)=>{a.d(t,{Z:()=>y});var r=a(25773),n=a(27378),i=a(23615),o=a.n(i),l=a(67468),s=a(45908),d=a(55575),c=a(3859),m=a(73647),u=a(41703),p=a(2793);const h=(0,l.ZP)(d.Z)``,g=l.ZP.span`
  display: inline-flex;
  align-items: center;
  font: var(--text-md-bold);
  background-color: var(--neutral-surface);
`,v=l.ZP.div`
  display: inline-flex;
  align-items: center;
  width: 100%;
  border-radius: var(--border-radius-md);
  background-color: var(--neutral-surface);
`,f=(0,n.forwardRef)(((e,t)=>{let{value:a,className:i,startDate:o="",endDate:l="",onStartChange:d=(()=>{}),onEndChange:f=(()=>{}),onChange:y=(()=>{}),firstInputRef:b=null,secondInputRef:Z=null,dateFormat:w="dd/MM/yyyy",locale:k=s.Z,double:x=!1,..._}=e;const[z,E]=(0,n.useState)(o),[C,$]=(0,n.useState)(l);let P=(0,n.useRef)(null),R=(0,n.useRef)(null);(0,n.useEffect)((()=>{E(o)}),[o]),(0,n.useEffect)((()=>{$(l)}),[l]);const T=e=>{const t=!c.Z(e.target.value,w.length);m.Z(e.target,[P.current])&&(E(e.target.value),t&&(d((0,p.sG)(e.target.value,w,k)),y(e))),m.Z(e.target,[R.current])&&($(e.target.value),t&&(f((0,p.sG)(e.target.value,w,k)),y(e)))};return n.createElement(v,{ref:t},x?n.createElement(n.Fragment,null,n.createElement(h,(0,r.Z)({prefix:n.createElement(u.Z,{title:"Datepicker",titleId:"datepicker-input"}),rootRef:P,ref:b,className:`range-start datepicker-input ${i}`,type:"text",value:z,onChange:T},_)),n.createElement(g,null,"-"),n.createElement(h,(0,r.Z)({rootRef:R,ref:Z,className:`range-end datepicker-input ${i}`,type:"text",value:C,onChange:T},_))):n.createElement(h,(0,r.Z)({prefix:n.createElement(u.Z,{title:"Datepicker",titleId:"datepicker-input"}),value:a,onChange:y,className:`datepicker-input ${i}`},_,{ref:t})))}));f.displayName="DatePickerInput",f.propTypes={placeholder:o().string,startDate:o().string,endDate:o().string,onStartChange:o().func,onEndChange:o().func,locale:o().object,dateFormat:o().string,double:o().bool,firstInputRef:o().oneOfType([o().func,o().shape({current:o().any})]),secondInputRef:o().oneOfType([o().func,o().shape({current:o().any})])};const y=f},2793:(e,t,a)=>{a.d(t,{G4:()=>o,VR:()=>s,sG:()=>l});var r=a(2345),n=a(44720),i=a(52993);const o=e=>{const t=[];for(let a=0;a<12;a++)t.push(e.localize.month(a));return t};function l(e,t,a){let r=(0,i.default)(e,t,new Date,{locale:a});return(0,n.default)(r)?r:null}function s(e,t){let{dateFormat:a,locale:n}=t;return e&&function(e,t,a){return(0,r.default)(e,t,{locale:a||null,awareOfUnicodeTokens:!0})}(e,Array.isArray(a)?a[0]:a,n)||""}},41703:(e,t,a)=>{a.d(t,{Z:()=>g});var r,n,i=a(25773),o=a(30808),l=a(27378),s=a(23615),d=a.n(s),c=a(33842),m=a(79804),u=a(20590);const p=["size","title","titleId"];function h(e){let{size:t=c.J.md,title:a,titleId:s}=e,d=(0,o.Z)(e,p);const{kind:h}=(0,u.a)(),g=c.d.get(t);return s=(0,m.Z)(s),"duotone"===h?l.createElement("svg",(0,i.Z)({width:g.width,height:g.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":s},d),a?l.createElement("title",{id:s},a):null,r||(r=l.createElement("path",{d:"M4 19.313C4 20.244 4.768 21 5.714 21h12.572c.946 0 1.714-.756 1.714-1.688V9.75H4v9.563zm2.286-6.75c0-.31.257-.563.571-.563h3.429c.314 0 .571.253.571.563v3.374c0 .31-.257.563-.571.563H6.857a.569.569 0 01-.571-.563v-3.374zm12-7.313H16.57V3.562A.569.569 0 0016 3h-1.143a.569.569 0 00-.571.563V5.25H9.714V3.562A.569.569 0 009.143 3H8a.569.569 0 00-.571.563V5.25H5.714C4.768 5.25 4 6.006 4 6.938v1.687h16V6.937c0-.931-.768-1.687-1.714-1.687z"}))):l.createElement("svg",(0,i.Z)({width:g.width,height:g.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":s},d),a?l.createElement("title",{id:s},a):null,n||(n=l.createElement("path",{d:"M4 19.313C4 20.244 4.768 21 5.714 21h12.572c.946 0 1.714-.756 1.714-1.688V9.75H4v9.563zm2.286-6.75c0-.31.257-.563.571-.563h3.429c.314 0 .571.253.571.563v3.374c0 .31-.257.563-.571.563H6.857a.569.569 0 01-.571-.563v-3.374zm12-7.313H16.57V3.562A.569.569 0 0016 3h-1.143a.569.569 0 00-.571.563V5.25H9.714V3.562A.569.569 0 009.143 3H8a.569.569 0 00-.571.563V5.25H5.714C4.768 5.25 4 6.006 4 6.938v1.687h16V6.937c0-.931-.768-1.687-1.714-1.687z"})))}h.sizes=c.J,h.propTypes={size:d().oneOf([h.sizes.xs,h.sizes.sm,h.sizes.md,h.sizes.lg,h.sizes.xl]),titleId:d().string,title:d().string.isRequired};const g=h},28219:(e,t,a)=>{a.d(t,{Z:()=>g});var r,n,i=a(25773),o=a(30808),l=a(27378),s=a(23615),d=a.n(s),c=a(33842),m=a(79804),u=a(20590);const p=["size","title","titleId"];function h(e){let{size:t=c.J.md,title:a,titleId:s}=e,d=(0,o.Z)(e,p);const{kind:h}=(0,u.a)(),g=c.d.get(t);return s=(0,m.Z)(s),"duotone"===h?l.createElement("svg",(0,i.Z)({width:g.width,height:g.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":s},d),a?l.createElement("title",{id:s},a):null,r||(r=l.createElement("path",{d:"M9.114 18.16l-5.85-5.85a.9.9 0 010-1.274l1.272-1.272a.9.9 0 011.273 0l3.941 3.94 8.44-8.44a.9.9 0 011.274 0l1.272 1.272a.9.9 0 010 1.273l-10.35 10.35a.9.9 0 01-1.272 0z"}))):l.createElement("svg",(0,i.Z)({width:g.width,height:g.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":s},d),a?l.createElement("title",{id:s},a):null,n||(n=l.createElement("path",{d:"M9.114 18.16l-5.85-5.85a.9.9 0 010-1.274l1.272-1.272a.9.9 0 011.273 0l3.941 3.94 8.44-8.44a.9.9 0 011.274 0l1.272 1.272a.9.9 0 010 1.273l-10.35 10.35a.9.9 0 01-1.272 0z"})))}h.sizes=c.J,h.propTypes={size:d().oneOf([h.sizes.xs,h.sizes.sm,h.sizes.md,h.sizes.lg,h.sizes.xl]),titleId:d().string,title:d().string.isRequired};const g=h},4263:(e,t,a)=>{a.d(t,{Z:()=>g});var r,n,i=a(25773),o=a(30808),l=a(27378),s=a(23615),d=a.n(s),c=a(33842),m=a(79804),u=a(20590);const p=["size","title","titleId"];function h(e){let{size:t=c.J.md,title:a,titleId:s}=e,d=(0,o.Z)(e,p);const{kind:h}=(0,u.a)(),g=c.d.get(t);return s=(0,m.Z)(s),"duotone"===h?l.createElement("svg",(0,i.Z)({width:g.width,height:g.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":s},d),a?l.createElement("title",{id:s},a):null,r||(r=l.createElement("path",{d:"M7.91 12.466l5.341 5.34a.66.66 0 00.933 0l.623-.622a.66.66 0 000-.932L10.576 12l4.233-4.252a.66.66 0 00-.001-.932l-.623-.623a.66.66 0 00-.933 0l-5.34 5.34a.66.66 0 000 .933z"}))):l.createElement("svg",(0,i.Z)({width:g.width,height:g.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":s},d),a?l.createElement("title",{id:s},a):null,n||(n=l.createElement("path",{d:"M7.91 12.466l5.341 5.34a.66.66 0 00.933 0l.623-.622a.66.66 0 000-.932L10.576 12l4.233-4.252a.66.66 0 00-.001-.932l-.623-.623a.66.66 0 00-.933 0l-5.34 5.34a.66.66 0 000 .933z"})))}h.sizes=c.J,h.propTypes={size:d().oneOf([h.sizes.xs,h.sizes.sm,h.sizes.md,h.sizes.lg,h.sizes.xl]),titleId:d().string,title:d().string.isRequired};const g=h},66101:(e,t,a)=>{a.d(t,{Z:()=>g});var r,n,i=a(25773),o=a(30808),l=a(27378),s=a(23615),d=a.n(s),c=a(33842),m=a(79804),u=a(20590);const p=["size","title","titleId"];function h(e){let{size:t=c.J.md,title:a,titleId:s}=e,d=(0,o.Z)(e,p);const{kind:h}=(0,u.a)(),g=c.d.get(t);return s=(0,m.Z)(s),"duotone"===h?l.createElement("svg",(0,i.Z)({width:g.width,height:g.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":s},d),a?l.createElement("title",{id:s},a):null,r||(r=l.createElement("path",{d:"M15.09 12.466l-5.341 5.34a.66.66 0 01-.933 0l-.623-.622a.66.66 0 010-.932L12.424 12 8.192 7.748a.66.66 0 01.001-.932l.623-.623a.66.66 0 01.933 0l5.34 5.34a.66.66 0 010 .933z"}))):l.createElement("svg",(0,i.Z)({width:g.width,height:g.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":s},d),a?l.createElement("title",{id:s},a):null,n||(n=l.createElement("path",{d:"M15.09 12.466l-5.341 5.34a.66.66 0 01-.933 0l-.623-.622a.66.66 0 010-.932L12.424 12 8.192 7.748a.66.66 0 01.001-.932l.623-.623a.66.66 0 01.933 0l5.34 5.34a.66.66 0 010 .933z"})))}h.sizes=c.J,h.propTypes={size:d().oneOf([h.sizes.xs,h.sizes.sm,h.sizes.md,h.sizes.lg,h.sizes.xl]),titleId:d().string,title:d().string.isRequired};const g=h},67413:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>p,default:()=>y,frontMatter:()=>u,metadata:()=>h,toc:()=>v});var r=a(25773),n=(a(27378),a(35318)),i=a(80621),o=a(82544),l=a(23389),s=a(54479),d=a(17311),c=a(96350),m=a(8205);const u={title:"DatePicker",description:"Permite que a pessoa selecione uma data ou um per\xedodo espec\xedfico no calend\xe1rio."},p=void 0,h={unversionedId:"components/datepicker",id:"components/datepicker",title:"DatePicker",description:"Permite que a pessoa selecione uma data ou um per\xedodo espec\xedfico no calend\xe1rio.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/components/datepicker.md",sourceDirName:"components",slug:"/components/datepicker",permalink:"/tangram/docs/components/datepicker",draft:!1,editUrl:"https://github.com/ResultadosDigitais/tangram/edit/next/docusaurus/docs/components/datepicker.md",tags:[],version:"current",frontMatter:{title:"DatePicker",description:"Permite que a pessoa selecione uma data ou um per\xedodo espec\xedfico no calend\xe1rio."},sidebar:"mySidebar",previous:{title:"Checkbox",permalink:"/tangram/docs/components/checkbox"},next:{title:"DateRangePicker",permalink:"/tangram/docs/components/daterangepicker"}},g={},v=[{value:"Localiza\xe7\xe3o",id:"localization",level:2},{value:"Boas pr\xe1ticas",id:"good-habits",level:2},{value:"Feedback",id:"feedback",level:2}],f={toc:v};function y(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(i.Z,{current:"docs",name:"datepicker",mdxType:"ComponentTab"}),(0,n.kt)("p",null,"Ao clicar no ",(0,n.kt)("inlineCode",{parentName:"p"},"DatePicker")," um calend\xe1rio ser\xe1 exibido, permitindo assim que uma data seja selecionada. Para selecionar um per\xedodo espec\xedfico utilize o componente ",(0,n.kt)(l.Z,{href:"../../../docs/components/daterangepicker",mdxType:"Link"},"DateRangePicker"),"."),(0,n.kt)(s.Z,{mdxType:"CardGrid"},(0,n.kt)(s.D,{centered:!0,mdxType:"CardGridItem"},(0,n.kt)(m.Z,{placeholder:"Selecione uma data",mdxType:"DatePicker"}))),(0,n.kt)("h2",{id:"localization"},"Localiza\xe7\xe3o"),(0,n.kt)("p",null,"Atrav\xe9s da propriedade ",(0,n.kt)("inlineCode",{parentName:"p"},"locale"),", o ",(0,n.kt)("inlineCode",{parentName:"p"},"DatePicker")," permite que as informa\xe7\xf5es exibidas no calend\xe1rio estejam de acordo com a localiza\xe7\xe3o informada. A formata\xe7\xe3o de data n\xe3o \xe9 feita automaticamente, baseada no ",(0,n.kt)("inlineCode",{parentName:"p"},"locale")," recebido. Para formatar a data, use a propriedade ",(0,n.kt)("inlineCode",{parentName:"p"},"dateFormat"),". Para mais detalhes acesse nossa aba de ",(0,n.kt)(l.Z,{href:"../../../code/components/datepicker/#datepicker-dateformat",mdxType:"Link"},"API do componente"),"."),(0,n.kt)(s.Z,{mdxType:"CardGrid"},(0,n.kt)(s.D,{centered:!0,mdxType:"CardGridItem"},(0,n.kt)(c.Z,{mdxType:"Localization"}))),(0,n.kt)("h2",{id:"good-habits"},"Boas pr\xe1ticas"),(0,n.kt)(d.ZP,{mdxType:"DoAndDont"},(0,n.kt)(d.Do,{title:"Use o dia, m\xeas e ano como n\xfameros",mdxType:"Do"},(0,n.kt)(m.Z,{placeholder:"Selecione uma data",selected:new Date,dateFormat:"dd/MM/yyyy",mdxType:"DatePicker"})),(0,n.kt)(d.pM,{title:"Nunca use o m\xeas por extenso",mdxType:"Dont"},(0,n.kt)(m.Z,{placeholder:"Selecione uma data",selected:new Date,dateFormat:"dd 'de' MMMM 'de' yyyy",mdxType:"DatePicker"}))),(0,n.kt)(d.ZP,{mdxType:"DoAndDont"},(0,n.kt)(d.Do,{title:"O dia da semana pode ser usado no in\xedcio",mdxType:"Do"},(0,n.kt)(m.Z,{placeholder:"Selecione uma data",selected:new Date,dateFormat:"EEEE, dd/MM/yyyy",mdxType:"DatePicker"})),(0,n.kt)(d.pM,{title:"N\xe3o use o dia da semana como \xfaltima informa\xe7\xe3o",mdxType:"Dont"},(0,n.kt)(m.Z,{placeholder:"Selecione uma data",selected:new Date,dateFormat:"dd/MM/yyyy, EEEE",mdxType:"DatePicker"}))),(0,n.kt)("h2",{id:"feedback"},"Feedback"),(0,n.kt)(o.Z,{mdxType:"FeedbackBlock"}))}y.isMDXComponent=!0},18225:(e,t,a)=>{a.d(t,{Z:()=>h});var r={lessThanXSeconds:{one:"menos de un segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"medio minuto",lessThanXMinutes:{one:"menos de un minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"alrededor de 1 hora",other:"alrededor de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 d\xeda",other:"{{count}} d\xedas"},aboutXWeeks:{one:"alrededor de 1 semana",other:"alrededor de {{count}} semanas"},xWeeks:{one:"1 semana",other:"{{count}} semanas"},aboutXMonths:{one:"alrededor de 1 mes",other:"alrededor de {{count}} meses"},xMonths:{one:"1 mes",other:"{{count}} meses"},aboutXYears:{one:"alrededor de 1 a\xf1o",other:"alrededor de {{count}} a\xf1os"},xYears:{one:"1 a\xf1o",other:"{{count}} a\xf1os"},overXYears:{one:"m\xe1s de 1 a\xf1o",other:"m\xe1s de {{count}} a\xf1os"},almostXYears:{one:"casi 1 a\xf1o",other:"casi {{count}} a\xf1os"}};const n=function(e,t,a){var n,i=r[e];return n="string"==typeof i?i:1===t?i.one:i.other.replace("{{count}}",t.toString()),null!=a&&a.addSuffix?a.comparison&&a.comparison>0?"en "+n:"hace "+n:n};var i=a(38781);const o={date:(0,i.Z)({formats:{full:"EEEE, d 'de' MMMM 'de' y",long:"d 'de' MMMM 'de' y",medium:"d MMM y",short:"dd/MM/y"},defaultWidth:"full"}),time:(0,i.Z)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,i.Z)({formats:{full:"{{date}} 'a las' {{time}}",long:"{{date}} 'a las' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var l={lastWeek:"'el' eeee 'pasado a la' p",yesterday:"'ayer a la' p",today:"'hoy a la' p",tomorrow:"'ma\xf1ana a la' p",nextWeek:"eeee 'a la' p",other:"P"},s={lastWeek:"'el' eeee 'pasado a las' p",yesterday:"'ayer a las' p",today:"'hoy a las' p",tomorrow:"'ma\xf1ana a las' p",nextWeek:"eeee 'a las' p",other:"P"};const d=function(e,t,a,r){return 1!==t.getUTCHours()?s[e]:l[e]};var c=a(96419);const m={ordinalNumber:function(e,t){return Number(e)+"\xba"},era:(0,c.Z)({values:{narrow:["AC","DC"],abbreviated:["AC","DC"],wide:["antes de cristo","despu\xe9s de cristo"]},defaultWidth:"wide"}),quarter:(0,c.Z)({values:{narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1\xba trimestre","2\xba trimestre","3\xba trimestre","4\xba trimestre"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,c.Z)({values:{narrow:["e","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],wide:["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]},defaultWidth:"wide"}),day:(0,c.Z)({values:{narrow:["d","l","m","m","j","v","s"],short:["do","lu","ma","mi","ju","vi","s\xe1"],abbreviated:["dom","lun","mar","mi\xe9","jue","vie","s\xe1b"],wide:["domingo","lunes","martes","mi\xe9rcoles","jueves","viernes","s\xe1bado"]},defaultWidth:"wide"}),dayPeriod:(0,c.Z)({values:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"ma\xf1ana",afternoon:"tarde",evening:"tarde",night:"noche"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoche",noon:"mediodia",morning:"ma\xf1ana",afternoon:"tarde",evening:"tarde",night:"noche"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoche",noon:"mediodia",morning:"ma\xf1ana",afternoon:"tarde",evening:"tarde",night:"noche"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"de la ma\xf1ana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoche",noon:"mediodia",morning:"de la ma\xf1ana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoche",noon:"mediodia",morning:"de la ma\xf1ana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"}},defaultFormattingWidth:"wide"})};var u=a(65562),p=a(7625);const h={code:"es",formatDistance:n,formatLong:o,formatRelative:d,localize:m,match:{ordinalNumber:(0,u.Z)({matchPattern:/^(\d+)(\xba)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,p.Z)({matchPatterns:{narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,wide:/^(antes de cristo|antes de la era com[u\xfa]n|despu[e\xe9]s de cristo|era com[u\xfa]n)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^ac/i,/^dc/i],wide:[/^(antes de cristo|antes de la era com[u\xfa]n)/i,/^(despu[e\xe9]s de cristo|era com[u\xfa]n)/i]},defaultParseWidth:"any"}),quarter:(0,p.Z)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](\xba)? trimestre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,p.Z)({matchPatterns:{narrow:/^[efmajsond]/i,abbreviated:/^(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)/i,wide:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^e/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^en/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i]},defaultParseWidth:"any"}),day:(0,p.Z)({matchPatterns:{narrow:/^[dlmjvs]/i,short:/^(do|lu|ma|mi|ju|vi|s[\xe1a])/i,abbreviated:/^(dom|lun|mar|mi[\xe9e]|jue|vie|s[\xe1a]b)/i,wide:/^(domingo|lunes|martes|mi[\xe9e]rcoles|jueves|viernes|s[\xe1a]bado)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^do/i,/^lu/i,/^ma/i,/^mi/i,/^ju/i,/^vi/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:(0,p.Z)({matchPatterns:{narrow:/^(a|p|mn|md|(de la|a las) (ma\xf1ana|tarde|noche))/i,any:/^([ap]\.?\s?m\.?|medianoche|mediodia|(de la|a las) (ma\xf1ana|tarde|noche))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mn/i,noon:/^md/i,morning:/ma\xf1ana/i,afternoon:/tarde/i,evening:/tarde/i,night:/noche/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:1}}},82769:(e,t,a)=>{function r(e){if(null==e)throw new TypeError("Cannot destructure "+e)}a.d(t,{Z:()=>r})}}]);