import{v as D,r as A,q as E,p as X,l as ae,m as y,a1 as ce,ai as je,J as Ke,x as de,I as $,aJ as N,F as R,t as P,y as j,b as m,a_ as W,a$ as Ue,P as ve,Q as He,W as Y,b0 as fe,b1 as qe,E as se,aL as me,a4 as ge,ax as ye,aM as pe,aO as he,b2 as Je,B as Se,b3 as be,b4 as Qe,n as We,G as ke,aP as Ce,b5 as ze,a5 as Ae,az as we,aQ as Ie,aR as Pe,a8 as Xe,b6 as Ye,b7 as ie,A as re,L as Ze,e as et,T as ue,b8 as L,K as tt,aU as nt}from"./index.5d0b617d.js";const z=Symbol.for("vuetify:list");function Ve(){const e=D(z,{hasPrepend:A(!1),updateHasPrepend:()=>null}),a={hasPrepend:A(!1),updateHasPrepend:t=>{t&&(a.hasPrepend.value=t)}};return E(z,a),e}function Le(){return D(z,null)}const lt={open:e=>{let{id:a,value:t,opened:n,parents:s}=e;if(t){const l=new Set;l.add(a);let i=s.get(a);for(;i!=null;)l.add(i),i=s.get(i);return l}else return n.delete(a),n},select:()=>null},_e={open:e=>{let{id:a,value:t,opened:n,parents:s}=e;if(t){let l=s.get(a);for(n.add(a);l!=null&&l!==a;)n.add(l),l=s.get(l);return n}else n.delete(a);return n},select:()=>null},at={open:_e.open,select:e=>{let{id:a,value:t,opened:n,parents:s}=e;if(!t)return n;const l=[];let i=s.get(a);for(;i!=null;)l.push(i),i=s.get(i);return new Set(l)}},Z=e=>{const a={select:t=>{let{id:n,value:s,selected:l}=t;if(e&&!s){const i=Array.from(l.entries()).reduce((u,v)=>{let[b,g]=v;return g==="on"?[...u,b]:u},[]);if(i.length===1&&i[0]===n)return l}return l.set(n,s?"on":"off"),l},in:(t,n,s)=>{let l=new Map;for(const i of t||[])l=a.select({id:i,value:!0,selected:new Map(l),children:n,parents:s});return l},out:t=>{const n=[];for(const[s,l]of t.entries())l==="on"&&n.push(s);return n}};return a},xe=e=>{const a=Z(e);return{select:n=>{let{selected:s,id:l,...i}=n;const u=s.has(l)?new Map([[l,s.get(l)]]):new Map;return a.select({...i,id:l,selected:u})},in:(n,s,l)=>{let i=new Map;return n!=null&&n.length&&(i=a.in(n.slice(0,1),s,l)),i},out:(n,s,l)=>a.out(n,s,l)}},st=e=>{const a=Z(e);return{select:n=>{let{id:s,selected:l,children:i,...u}=n;return i.has(s)?l:a.select({id:s,selected:l,children:i,...u})},in:a.in,out:a.out}},it=e=>{const a=xe(e);return{select:n=>{let{id:s,selected:l,children:i,...u}=n;return i.has(s)?l:a.select({id:s,selected:l,children:i,...u})},in:a.in,out:a.out}},rt=e=>{const a={select:t=>{let{id:n,value:s,selected:l,children:i,parents:u}=t;const v=new Map(l),b=[n];for(;b.length;){const r=b.shift();l.set(r,s?"on":"off"),i.has(r)&&b.push(...i.get(r))}let g=u.get(n);for(;g;){const r=i.get(g),o=r.every(d=>l.get(d)==="on"),c=r.every(d=>!l.has(d)||l.get(d)==="off");l.set(g,o?"on":c?"off":"indeterminate"),g=u.get(g)}return e&&!s&&Array.from(l.entries()).reduce((o,c)=>{let[d,k]=c;return k==="on"?[...o,d]:o},[]).length===0?v:l},in:(t,n,s)=>{let l=new Map;for(const i of t||[])l=a.select({id:i,value:!0,selected:new Map(l),children:n,parents:s});return l},out:(t,n)=>{const s=[];for(const[l,i]of t.entries())i==="on"&&!n.has(l)&&s.push(l);return s}};return a},M=Symbol.for("vuetify:nested"),$e={id:A(),root:{register:()=>null,unregister:()=>null,parents:A(new Map),children:A(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:A(new Set),selected:A(new Map),selectedValues:A([])}},ut=X({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),ot=e=>{let a=!1;const t=A(new Map),n=A(new Map),s=ae(e,"opened",e.opened,r=>new Set(r),r=>[...r.values()]),l=y(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return it(e.mandatory);case"leaf":return st(e.mandatory);case"independent":return Z(e.mandatory);case"single-independent":return xe(e.mandatory);case"classic":default:return rt(e.mandatory)}}),i=y(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return at;case"single":return lt;case"multiple":default:return _e}}),u=ae(e,"selected",e.selected,r=>l.value.in(r,t.value,n.value),r=>l.value.out(r,t.value,n.value));ce(()=>{a=!0});function v(r){const o=[];let c=r;for(;c!=null;)o.unshift(c),c=n.value.get(c);return o}const b=je("nested"),g={id:A(),root:{opened:s,selected:u,selectedValues:y(()=>{const r=[];for(const[o,c]of u.value.entries())c==="on"&&r.push(o);return r}),register:(r,o,c)=>{o&&r!==o&&n.value.set(r,o),c&&t.value.set(r,[]),o!=null&&t.value.set(o,[...t.value.get(o)||[],r])},unregister:r=>{var c;if(a)return;t.value.delete(r);const o=n.value.get(r);if(o){const d=(c=t.value.get(o))!=null?c:[];t.value.set(o,d.filter(k=>k!==r))}n.value.delete(r),s.value.delete(r)},open:(r,o,c)=>{b.emit("click:open",{id:r,value:o,path:v(r),event:c});const d=i.value.open({id:r,value:o,opened:new Set(s.value),children:t.value,parents:n.value,event:c});d&&(s.value=d)},openOnSelect:(r,o,c)=>{const d=i.value.select({id:r,value:o,selected:new Map(u.value),opened:new Set(s.value),children:t.value,parents:n.value,event:c});d&&(s.value=d)},select:(r,o,c)=>{b.emit("click:select",{id:r,value:o,path:v(r),event:c});const d=l.value.select({id:r,value:o,selected:new Map(u.value),children:t.value,parents:n.value,event:c});d&&(u.value=d),g.root.openOnSelect(r,o,c)},children:t,parents:n}};return E(M,g),g.root},Oe=(e,a)=>{const t=D(M,$e),n=y(()=>{var l;return(l=e.value)!=null?l:Symbol(Ke())}),s={...t,id:n,open:(l,i)=>t.root.open(n.value,l,i),openOnSelect:(l,i)=>t.root.openOnSelect(n.value,l,i),isOpen:y(()=>t.root.opened.value.has(n.value)),parent:y(()=>t.root.parents.value.get(n.value)),select:(l,i)=>t.root.select(n.value,l,i),isSelected:y(()=>t.root.selected.value.get(n.value)==="on"),isIndeterminate:y(()=>t.root.selected.value.get(n.value)==="indeterminate"),isLeaf:y(()=>!t.root.children.value.get(n.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(n.value,t.id.value,a),ce(()=>{!t.isGroupActivator&&t.root.unregister(n.value)}),a&&E(M,s),s},ct=()=>{const e=D(M,$e);E(M,{...e,isGroupActivator:!0})},dt=de({name:"VListGroupActivator",setup(e,a){let{slots:t}=a;return ct(),()=>{var n;return(n=t.default)==null?void 0:n.call(t)}}}),vt=X({activeColor:String,color:String,collapseIcon:{type:$,default:"$collapse"},expandIcon:{type:$,default:"$expand"},prependIcon:$,appendIcon:$,fluid:Boolean,subgroup:Boolean,value:null,...N()},"v-list-group"),Be=R()({name:"VListGroup",props:{title:String,...vt()},setup(e,a){let{slots:t}=a;const{isOpen:n,open:s,id:l}=Oe(P(e,"value"),!0),i=y(()=>`v-list-group--id-${String(l.value)}`),u=Le();function v(r){s(!n.value,r)}const b=y(()=>({onClick:v,class:"v-list-group__header",id:i.value})),g=y(()=>n.value?e.collapseIcon:e.expandIcon);return j(()=>{var r;return m(e.tag,{class:["v-list-group",{"v-list-group--prepend":u==null?void 0:u.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":n.value}]},{default:()=>[t.activator&&m(W,{defaults:{VListItem:{active:n.value,activeColor:e.activeColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&g.value,appendIcon:e.appendIcon||!e.subgroup&&g.value,title:e.title,value:e.value}}},{default:()=>[m(dt,null,{default:()=>[t.activator({props:b.value,isOpen:n})]})]}),m(Ue,null,{default:()=>[ve(m("div",{class:"v-list-group__items",role:"group","aria-labelledby":i.value},[(r=t.default)==null?void 0:r.call(t)]),[[He,n.value]])]})]})}),{}}});function ft(e){return Y(e,Object.keys(Be.props))}const mt=fe("v-list-item-subtitle"),gt=fe("v-list-item-title"),oe=R()({name:"VListItem",directives:{Ripple:qe},props:{active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:$,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:$,subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,onClick:se,onClickOnce:se,...me(),...ge(),...ye(),...pe(),...he(),...Je(),...N(),...Se(),...be({variant:"text"})},emits:{click:e=>!0},setup(e,a){let{attrs:t,slots:n,emit:s}=a;const l=Qe(e,t),i=y(()=>{var f;return(f=e.value)!=null?f:l.href.value}),{select:u,isSelected:v,isIndeterminate:b,isGroupActivator:g,root:r,parent:o,openOnSelect:c}=Oe(i,!1),d=Le(),k=y(()=>{var f;return e.active!==!1&&(e.active||((f=l.isActive)==null?void 0:f.value)||v.value)}),_=y(()=>e.link!==!1&&l.isLink.value),C=y(()=>!e.disabled&&e.link!==!1&&(e.link||l.isClickable.value||e.value!=null&&!!d)),h=y(()=>e.rounded||e.nav),p=y(()=>{var f;return{color:k.value&&(f=e.activeColor)!=null?f:e.color,variant:e.variant}});We(()=>{var f;return(f=l.isActive)==null?void 0:f.value},f=>{f&&o.value!=null&&r.open(o.value,!0),f&&c(f)},{immediate:!0});const{themeClasses:K}=ke(e),{borderClasses:U}=Ce(e),{colorClasses:H,colorStyles:V,variantClasses:S}=ze(p),{densityClasses:w}=Ae(e),{dimensionStyles:q}=we(e),{elevationClasses:T}=Ie(e),{roundedClasses:F}=Pe(h),G=y(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),I=y(()=>({isActive:k.value,select:u,isSelected:v.value,isIndeterminate:b.value}));function x(f){var O;s("click",f),!(g||!C.value)&&((O=l.navigate)==null||O.call(l,f),e.value!=null&&u(!v.value,f))}function J(f){(f.key==="Enter"||f.key===" ")&&(f.preventDefault(),x(f))}return j(()=>{var f,O,ee,te,ne;const De=_.value?"a":e.tag,le=!d||v.value||k.value,Ee=n.title||e.title,Ne=n.subtitle||e.subtitle,Re=!!(n.append||e.appendAvatar||e.appendIcon),Q=!!(n.prepend||e.prependAvatar||e.prependIcon);return d==null||d.updateHasPrepend(Q),ve(m(De,{class:["v-list-item",{"v-list-item--active":k.value,"v-list-item--disabled":e.disabled,"v-list-item--link":C.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!Q&&(d==null?void 0:d.hasPrepend.value),[`${e.activeClass}`]:e.activeClass&&k.value},K.value,U.value,le?H.value:void 0,w.value,T.value,G.value,F.value,S.value],style:[le?V.value:void 0,q.value],href:l.href.value,tabindex:C.value?0:void 0,onClick:x,onKeydown:C.value&&!_.value&&J},{default:()=>[Ye(C.value||k.value,"v-list-item"),Q&&m(W,{key:"prepend",defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>[m("div",{class:"v-list-item__prepend"},[e.prependAvatar&&m(ie,{key:"prepend-avatar"},null),e.prependIcon&&m(re,{key:"prepend-icon"},null),(f=n.prepend)==null?void 0:f.call(n,I.value)])]}),m("div",{class:"v-list-item__content","data-no-activator":""},[Ee&&m(gt,{key:"title"},{default:()=>{var B;return[(B=(O=n.title)==null?void 0:O.call(n,{title:e.title}))!=null?B:e.title]}}),Ne&&m(mt,{key:"subtitle"},{default:()=>{var B;return[(B=(ee=n.subtitle)==null?void 0:ee.call(n,{subtitle:e.subtitle}))!=null?B:e.subtitle]}}),(te=n.default)==null?void 0:te.call(n,I.value)]),Re&&m(W,{key:"append",defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>[m("div",{class:"v-list-item__append"},[(ne=n.append)==null?void 0:ne.call(n,I.value),e.appendIcon&&m(re,{key:"append-icon"},null),e.appendAvatar&&m(ie,{key:"append-avatar"},null)])]})]}),[[Xe("ripple"),C.value]])}),{}}}),yt=de({name:"VListSubheader",props:{color:String,inset:Boolean,sticky:Boolean,title:String,...N()},setup(e,a){let{slots:t}=a;const{textColorClasses:n,textColorStyles:s}=Ze(P(e,"color"));return j(()=>{var l;const i=!!(t.default||e.title);return m(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},n.value],style:{textColorStyles:s}},{default:()=>{var u;return[i&&m("div",{class:"v-list-subheader__text"},[(u=(l=t.default)==null?void 0:l.call(t))!=null?u:e.title])]}})}),{}}}),Me=R()({name:"VListChildren",props:{items:Array},setup(e,a){let{slots:t}=a;return Ve(),()=>{var l;var n,s;return(l=(n=t.default)==null?void 0:n.call(t))!=null?l:(s=e.items)==null?void 0:s.map(i=>{var _,C;let{children:u,props:v,type:b,raw:g}=i;if(b==="divider"){var r;return(_=(r=t.divider)==null?void 0:r.call(t,{props:v}))!=null?_:m(et,v,null)}if(b==="subheader"){var o;return(C=(o=t.subheader)==null?void 0:o.call(t,{props:v}))!=null?C:m(yt,v,{default:t.subheader})}const c={subtitle:t.subtitle?h=>{var p;return(p=t.subtitle)==null?void 0:p.call(t,{...h,item:g})}:void 0,prepend:t.prepend?h=>{var p;return(p=t.prepend)==null?void 0:p.call(t,{...h,item:g})}:void 0,append:t.append?h=>{var p;return(p=t.append)==null?void 0:p.call(t,{...h,item:g})}:void 0,default:t.default?h=>{var p;return(p=t.default)==null?void 0:p.call(t,{...h,item:g})}:void 0,title:t.title?h=>{var p;return(p=t.title)==null?void 0:p.call(t,{...h,item:g})}:void 0},[d,k]=ft(v);return u?m(Be,ue({value:v==null?void 0:v.value},d),{activator:h=>{let{props:p}=h;return t.header?t.header({...v,...p}):m(oe,ue(v,p),c)},default:()=>m(Me,{items:u},t)}):t.item?t.item(v):m(oe,v,c)})}}}),pt=X({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean},"item");function Te(e,a){var u;const t=L(a,e.itemTitle,a),n=e.returnObject?a:L(a,e.itemValue,t),s=L(a,e.itemChildren),l=e.itemProps===!0?typeof a=="object"&&a!=null&&!Array.isArray(a)?"children"in a?Y(a,["children"])[1]:a:void 0:L(a,e.itemProps),i={title:t,value:n,...l};return{title:String((u=i.title)!=null?u:""),value:i.value,props:i,children:Array.isArray(s)?Fe(e,s):void 0,raw:a}}function Fe(e,a){const t=[];for(const n of a)t.push(Te(e,n));return t}function kt(e){const a=y(()=>Fe(e,e.items));function t(s){return s.map(l=>Te(e,l))}function n(s){return s.map(l=>{let{props:i}=l;return i.value})}return{items:a,transformIn:t,transformOut:n}}function ht(e,a){const t=L(a,e.itemType,"item"),n=typeof a=="string"?a:L(a,e.itemTitle),s=L(a,e.itemValue,void 0),l=L(a,e.itemChildren),i=e.itemProps===!0?Y(a,["children"])[1]:L(a,e.itemProps),u={title:n,value:s,...i};return{type:t,title:u.title,value:u.value,props:u,children:t==="item"&&l?Ge(e,l):void 0,raw:a}}function Ge(e,a){const t=[];for(const n of a)t.push(ht(e,n));return t}function St(e){return{items:y(()=>Ge(e,e.items))}}const Ct=R()({name:"VList",props:{activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},nav:Boolean,...ut({selectStrategy:"single-leaf",openStrategy:"list"}),...me(),...ge(),...ye(),...pe(),itemType:{type:String,default:"type"},...pt(),...he(),...N(),...Se(),...be({variant:"text"})},emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,a){let{slots:t}=a;const{items:n}=St(e),{themeClasses:s}=ke(e),{backgroundColorClasses:l,backgroundColorStyles:i}=tt(P(e,"bgColor")),{borderClasses:u}=Ce(e),{densityClasses:v}=Ae(e),{dimensionStyles:b}=we(e),{elevationClasses:g}=Ie(e),{roundedClasses:r}=Pe(e),{open:o,select:c}=ot(e),d=y(()=>e.lines?`v-list--${e.lines}-line`:void 0),k=P(e,"activeColor"),_=P(e,"color");Ve(),nt({VListGroup:{activeColor:k,color:_},VListItem:{activeClass:P(e,"activeClass"),activeColor:k,color:_,density:P(e,"density"),disabled:P(e,"disabled"),lines:P(e,"lines"),nav:P(e,"nav"),variant:P(e,"variant")}});const C=A(!1),h=A();function p(S){C.value=!0}function K(S){C.value=!1}function U(S){var w;!C.value&&!(S.relatedTarget&&(w=h.value)!=null&&w.contains(S.relatedTarget))&&V()}function H(S){if(!!h.value){if(S.key==="ArrowDown")V("next");else if(S.key==="ArrowUp")V("prev");else if(S.key==="Home")V("first");else if(S.key==="End")V("last");else return;S.preventDefault()}}function V(S){if(!h.value)return;const w=[...h.value.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')].filter(I=>!I.hasAttribute("disabled")),q=w.indexOf(document.activeElement);if(S)if(S==="first"){var F;(F=w[0])==null||F.focus()}else if(S==="last"){var G;(G=w.at(-1))==null||G.focus()}else{let I,x=q;const J=S==="next"?1:-1;do x+=J,I=w[x];while((!I||I.offsetParent==null)&&x<w.length&&x>=0);I?I.focus():V(S==="next"?"first":"last")}else if(!h.value.contains(document.activeElement)){var T;(T=w[0])==null||T.focus()}}return j(()=>m(e.tag,{ref:h,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav},s.value,l.value,u.value,v.value,g.value,d.value,r.value],style:[i.value,b.value],role:"listbox","aria-activedescendant":void 0,onFocusin:p,onFocusout:K,onFocus:U,onKeydown:H},{default:()=>[m(Me,{items:n.value},t)]})),{open:o,select:c,focus:V}}});export{Ct as V,oe as a,pt as m,kt as u};
