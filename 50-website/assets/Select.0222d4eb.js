import{a as k,r as f,w as x,p as C,m as O,n as S,f as p}from"./vendor.b5bf8515.js";import{i as D,o as w}from"./util.91e696b6.js";import{c as j}from"./classnames.cb3d719b.js";import{_ as T}from"./plugin-vue_export-helper.5a098b48.js";const v=new Map;let _;D||(w(document,"mousedown",e=>_=e),w(document,"mouseup",e=>{for(const{DocumentHandler:t}of v.values())t(e,_)}));const V=(e,t)=>{let o=[];return t.arg&&(Array.isArray(t.arg)?o=t.arg:o.push(t.arg)),(d,a)=>{const i=t.instance.popperRef,s=d.target,n=a.target,m=!t||!t.instance,l=!s||!n,r=e.contains(s)||e.contains(n),c=e===s,g=i&&(i.contains(s)||i.contains(n)),y=o.length&&(o.some(u=>u.contains&&(u==null?void 0:u.contains(s)))||o.indexOf(n)>-1);m||l||r||c||y||g||t.value()}},b=(e,t)=>{v.set(e,{DocumentHandler:V(e,t),bindingFn:t.value})},H={beforeMount(e,t){b(e,t)},updated(e,t){b(e,t)},unmounted(e){v.delete(e)}};var h={directive:"clickOutside",directiveOption:H},E=k({props:{placeholder:String,modelValue:String},directives:{[h.directive]:h.directiveOption},emits:["update:modelValue","on-change"],setup(e,{emit:t,slots:o}){const d="The select component should has 'mini-web-option' component as childs!";let a=[];if(o.default&&(a=o.default(),a.filter(c=>!c||c.type.toString()==="Symbol(Comment)").some(c=>c.type!=="mini-web-option")))return console.warn(d);const{placeholder:i}=e,s=f(!1),n=f(e.modelValue),m=()=>{s.value=!1},l={"mini-web-select-icon":!0,"mini-web-select-icon-down":!s.value,"mini-web-select-icon-up":s.value},r=()=>{s.value=!s.value};return x(()=>s.value,c=>{l["mini-web-select-icon-down"]=!s.value,l["mini-web-select-icon-up"]=s.value}),C("select-context",{emit:t,isDown:s,selectValue:n}),()=>O(p("div",{class:"mini-web-select"},[p("div",{class:"mini-web-select-title",placeholder:i,onClick:r},[n.value]),p("i",{class:j(l),onClick:r},null),p("div",{class:"mini-web-select-popper",style:{display:s.value?"block":"none"}},[a])]),[[S("click-outside"),m]])}});var N=T(E,[["__scopeId","data-v-929e765e"]]);export{N as default};
