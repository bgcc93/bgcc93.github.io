(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dn=globalThis,ec=Dn.ShadowRoot&&(Dn.ShadyCSS===void 0||Dn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,rc=Symbol(),nd=new WeakMap;let Oh=class{constructor(t,r,o){if(this._$cssResult$=!0,o!==rc)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(ec&&t===void 0){const o=r!==void 0&&r.length===1;o&&(t=nd.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&nd.set(r,t))}return t}toString(){return this.cssText}};const Qp=e=>new Oh(typeof e=="string"?e:e+"",void 0,rc),F=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((o,i,s)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new Oh(r,e,rc)},Jp=(e,t)=>{if(ec)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const o=document.createElement("style"),i=Dn.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=r.cssText,e.appendChild(o)}},ad=ec?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const o of t.cssRules)r+=o.cssText;return Qp(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:tf,defineProperty:ef,getOwnPropertyDescriptor:rf,getOwnPropertyNames:of,getOwnPropertySymbols:sf,getPrototypeOf:nf}=Object,da=globalThis,ld=da.trustedTypes,af=ld?ld.emptyScript:"",lf=da.reactiveElementPolyfillSupport,xs=(e,t)=>e,Mi={toAttribute(e,t){switch(t){case Boolean:e=e?af:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},oc=(e,t)=>!tf(e,t),cd={attribute:!0,type:String,converter:Mi,reflect:!1,hasChanged:oc};Symbol.metadata??=Symbol("metadata"),da.litPropertyMetadata??=new WeakMap;let xi=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=cd){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(t,r),!r.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(t,o,r);i!==void 0&&ef(this.prototype,t,i)}}static getPropertyDescriptor(t,r,o){const{get:i,set:s}=rf(this.prototype,t)??{get(){return this[r]},set(n){this[r]=n}};return{get(){return i?.call(this)},set(n){const a=i?.call(this);s.call(this,n),this.requestUpdate(t,a,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??cd}static _$Ei(){if(this.hasOwnProperty(xs("elementProperties")))return;const t=nf(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(xs("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(xs("properties"))){const r=this.properties,o=[...of(r),...sf(r)];for(const i of o)this.createProperty(i,r[i])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[o,i]of r)this.elementProperties.set(o,i)}this._$Eh=new Map;for(const[r,o]of this.elementProperties){const i=this._$Eu(r,o);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const i of o)r.unshift(ad(i))}else t!==void 0&&r.push(ad(t));return r}static _$Eu(t,r){const o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const o of r.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Jp(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,o){this._$AK(t,o)}_$EC(t,r){const o=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,o);if(i!==void 0&&o.reflect===!0){const s=(o.converter?.toAttribute!==void 0?o.converter:Mi).toAttribute(r,o.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,r){const o=this.constructor,i=o._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const s=o.getPropertyOptions(i),n=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Mi;this._$Em=i,this[i]=n.fromAttribute(r,s.type),this._$Em=null}}requestUpdate(t,r,o){if(t!==void 0){if(o??=this.constructor.getPropertyOptions(t),!(o.hasChanged??oc)(this[t],r))return;this.P(t,r,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,r,o){this._$AL.has(t)||this._$AL.set(t,r),o.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[i,s]of o)s.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],s)}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(r)):this._$EU()}catch(o){throw t=!1,this._$EU(),o}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(r=>this._$EC(r,this[r])),this._$EU()}updated(t){}firstUpdated(t){}};xi.elementStyles=[],xi.shadowRootOptions={mode:"open"},xi[xs("elementProperties")]=new Map,xi[xs("finalized")]=new Map,lf?.({ReactiveElement:xi}),(da.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ic=globalThis,Pn=ic.trustedTypes,dd=Pn?Pn.createPolicy("lit-html",{createHTML:e=>e}):void 0,sc="$lit$",ao=`lit$${Math.random().toFixed(9).slice(2)}$`,nc="?"+ao,cf=`<${nc}>`,ei=document,zs=()=>ei.createComment(""),Ms=e=>e===null||typeof e!="object"&&typeof e!="function",Ah=Array.isArray,zh=e=>Ah(e)||typeof e?.[Symbol.iterator]=="function",Ya=`[ 	
\f\r]`,us=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,hd=/-->/g,ud=/>/g,Vo=RegExp(`>|${Ya}(?:([^\\s"'>=/]+)(${Ya}*=${Ya}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),pd=/'/g,fd=/"/g,Mh=/^(?:script|style|textarea|title)$/i,df=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),$=df(1),or=Symbol.for("lit-noChange"),bt=Symbol.for("lit-nothing"),md=new WeakMap,Wo=ei.createTreeWalker(ei,129);function Ph(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return dd!==void 0?dd.createHTML(t):t}const Fh=(e,t)=>{const r=e.length-1,o=[];let i,s=t===2?"<svg>":"",n=us;for(let a=0;a<r;a++){const l=e[a];let h,p,u=-1,f=0;for(;f<l.length&&(n.lastIndex=f,p=n.exec(l),p!==null);)f=n.lastIndex,n===us?p[1]==="!--"?n=hd:p[1]!==void 0?n=ud:p[2]!==void 0?(Mh.test(p[2])&&(i=RegExp("</"+p[2],"g")),n=Vo):p[3]!==void 0&&(n=Vo):n===Vo?p[0]===">"?(n=i??us,u=-1):p[1]===void 0?u=-2:(u=n.lastIndex-p[2].length,h=p[1],n=p[3]===void 0?Vo:p[3]==='"'?fd:pd):n===fd||n===pd?n=Vo:n===hd||n===ud?n=us:(n=Vo,i=void 0);const g=n===Vo&&e[a+1].startsWith("/>")?" ":"";s+=n===us?l+cf:u>=0?(o.push(h),l.slice(0,u)+sc+l.slice(u)+ao+g):l+ao+(u===-2?a:g)}return[Ph(e,s+(e[r]||"<?>")+(t===2?"</svg>":"")),o]};let dl=class Lh{constructor({strings:t,_$litType$:r},o){let i;this.parts=[];let s=0,n=0;const a=t.length-1,l=this.parts,[h,p]=Fh(t,r);if(this.el=Lh.createElement(h,o),Wo.currentNode=this.el.content,r===2){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=Wo.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const u of i.getAttributeNames())if(u.endsWith(sc)){const f=p[n++],g=i.getAttribute(u).split(ao),b=/([.?@])?(.*)/.exec(f);l.push({type:1,index:s,name:b[2],strings:g,ctor:b[1]==="."?Bh:b[1]==="?"?Uh:b[1]==="@"?Vh:Ys}),i.removeAttribute(u)}else u.startsWith(ao)&&(l.push({type:6,index:s}),i.removeAttribute(u));if(Mh.test(i.tagName)){const u=i.textContent.split(ao),f=u.length-1;if(f>0){i.textContent=Pn?Pn.emptyScript:"";for(let g=0;g<f;g++)i.append(u[g],zs()),Wo.nextNode(),l.push({type:2,index:++s});i.append(u[f],zs())}}}else if(i.nodeType===8)if(i.data===nc)l.push({type:2,index:s});else{let u=-1;for(;(u=i.data.indexOf(ao,u+1))!==-1;)l.push({type:7,index:s}),u+=ao.length-1}s++}}static createElement(t,r){const o=ei.createElement("template");return o.innerHTML=t,o}};function ri(e,t,r=e,o){if(t===or)return t;let i=o!==void 0?r._$Co?.[o]:r._$Cl;const s=Ms(t)?void 0:t._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(e),i._$AT(e,r,o)),o!==void 0?(r._$Co??=[])[o]=i:r._$Cl=i),i!==void 0&&(t=ri(e,i._$AS(e,t.values),i,o)),t}let Rh=class{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:o}=this._$AD,i=(t?.creationScope??ei).importNode(r,!0);Wo.currentNode=i;let s=Wo.nextNode(),n=0,a=0,l=o[0];for(;l!==void 0;){if(n===l.index){let h;l.type===2?h=new ha(s,s.nextSibling,this,t):l.type===1?h=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(h=new jh(s,this,t)),this._$AV.push(h),l=o[++a]}n!==l?.index&&(s=Wo.nextNode(),n++)}return Wo.currentNode=ei,i}p(t){let r=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,r),r+=o.strings.length-2):o._$AI(t[r])),r++}},ha=class Nh{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,o,i){this.type=2,this._$AH=bt,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=ri(this,t,r),Ms(t)?t===bt||t==null||t===""?(this._$AH!==bt&&this._$AR(),this._$AH=bt):t!==this._$AH&&t!==or&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):zh(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==bt&&Ms(this._$AH)?this._$AA.nextSibling.data=t:this.T(ei.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:o}=t,i=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=dl.createElement(Ph(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(r);else{const s=new Rh(i,this),n=s.u(this.options);s.p(r),this.T(n),this._$AH=s}}_$AC(t){let r=md.get(t.strings);return r===void 0&&md.set(t.strings,r=new dl(t)),r}k(t){Ah(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,i=0;for(const s of t)i===r.length?r.push(o=new Nh(this.S(zs()),this.S(zs()),this,this.options)):o=r[i],o._$AI(s),i++;i<r.length&&(this._$AR(o&&o._$AB.nextSibling,i),r.length=i)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},Ys=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,o,i,s){this.type=1,this._$AH=bt,this._$AN=void 0,this.element=t,this.name=r,this._$AM=i,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=bt}_$AI(t,r=this,o,i){const s=this.strings;let n=!1;if(s===void 0)t=ri(this,t,r,0),n=!Ms(t)||t!==this._$AH&&t!==or,n&&(this._$AH=t);else{const a=t;let l,h;for(t=s[0],l=0;l<s.length-1;l++)h=ri(this,a[o+l],r,l),h===or&&(h=this._$AH[l]),n||=!Ms(h)||h!==this._$AH[l],h===bt?t=bt:t!==bt&&(t+=(h??"")+s[l+1]),this._$AH[l]=h}n&&!i&&this.j(t)}j(t){t===bt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Bh=class extends Ys{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===bt?void 0:t}},Uh=class extends Ys{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==bt)}},Vh=class extends Ys{constructor(t,r,o,i,s){super(t,r,o,i,s),this.type=5}_$AI(t,r=this){if((t=ri(this,t,r,0)??bt)===or)return;const o=this._$AH,i=t===bt&&o!==bt||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==bt&&(o===bt||i);i&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},jh=class{constructor(t,r,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){ri(this,t)}};const hf={P:sc,A:ao,C:nc,M:1,L:Fh,R:Rh,D:zh,V:ri,I:ha,H:Ys,N:Uh,U:Vh,B:Bh,F:jh},uf=ic.litHtmlPolyfillSupport;uf?.(dl,ha),(ic.litHtmlVersions??=[]).push("3.1.3");const pf=(e,t,r)=>{const o=r?.renderBefore??t;let i=o._$litPart$;if(i===void 0){const s=r?.renderBefore??null;o._$litPart$=i=new ha(t.insertBefore(zs(),s),s,void 0,r??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let yt=class extends xi{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=pf(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return or}};yt._$litElement$=!0,yt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:yt});const ff=globalThis.litElementPolyfillSupport;ff?.({LitElement:yt});(globalThis.litElementVersions??=[]).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ct=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mf={attribute:!0,type:String,converter:Mi,reflect:!1,hasChanged:oc},gf=(e=mf,t,r)=>{const{kind:o,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(r.name,e),o==="accessor"){const{name:n}=r;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,l,e)},init(a){return a!==void 0&&this.P(n,void 0,e),a}}}if(o==="setter"){const{name:n}=r;return function(a){const l=this[n];t.call(this,a),this.requestUpdate(n,l,e)}}throw Error("Unsupported decorator location: "+o)};function v(e){return(t,r)=>typeof r=="object"?gf(e,t,r):((o,i,s)=>{const n=i.hasOwnProperty(s);return i.constructor.createProperty(s,n?{...o,wrapped:!0}:o),n?Object.getOwnPropertyDescriptor(i,s):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function M(e){return v({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ac(e){return(t,r)=>{const o=typeof t=="function"?t:t[r];Object.assign(o,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hl=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function B(e,t){return(r,o,i)=>{const s=n=>n.renderRoot?.querySelector(e)??null;if(t){const{get:n,set:a}=typeof o=="object"?r:i??(()=>{const l=Symbol();return{get(){return this[l]},set(h){this[l]=h}}})();return hl(r,o,{get(){let l=n.call(this);return l===void 0&&(l=s(this),(l!==null||this.hasUpdated)&&a.call(this,l)),l}})}return hl(r,o,{get(){return s(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Yh(e){return(t,r)=>hl(t,r,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(e)??null}})}const bf=F`
  :host {
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    overflow: hidden;
  }

  food-drawer {
    position: absolute;
  }
`,yf=F`
  :host {
    height: 100%;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    overflow: hidden;
  }
`;class d extends Array{constructor(t,r){if(super(t),this.sign=r,Object.setPrototypeOf(this,d.prototype),t>d.__kMaxLength)throw new RangeError("Maximum BigInt size exceeded")}static BigInt(t){var r=Math.floor,o=Number.isFinite;if(typeof t=="number"){if(t===0)return d.__zero();if(d.__isOneDigitInt(t))return 0>t?d.__oneDigit(-t,!0):d.__oneDigit(t,!1);if(!o(t)||r(t)!==t)throw new RangeError("The number "+t+" cannot be converted to BigInt because it is not an integer");return d.__fromDouble(t)}if(typeof t=="string"){const i=d.__fromString(t);if(i===null)throw new SyntaxError("Cannot convert "+t+" to a BigInt");return i}if(typeof t=="boolean")return t===!0?d.__oneDigit(1,!1):d.__zero();if(typeof t=="object"){if(t.constructor===d)return t;const i=d.__toPrimitive(t);return d.BigInt(i)}throw new TypeError("Cannot convert "+t+" to a BigInt")}toDebugString(){const t=["BigInt["];for(const r of this)t.push((r&&(r>>>0).toString(16))+", ");return t.push("]"),t.join("")}toString(t=10){if(2>t||36<t)throw new RangeError("toString() radix argument must be between 2 and 36");return this.length===0?"0":t&t-1?d.__toStringGeneric(this,t,!1):d.__toStringBasePowerOfTwo(this,t)}valueOf(){throw new Error("Convert JSBI instances to native numbers using `toNumber`.")}static toNumber(t){const r=t.length;if(r===0)return 0;if(r===1){const w=t.__unsignedDigit(0);return t.sign?-w:w}const o=t.__digit(r-1),i=d.__clz30(o),s=30*r-i;if(1024<s)return t.sign?-1/0:1/0;let n=s-1,a=o,l=r-1;const h=i+3;let p=h===32?0:a<<h;p>>>=12;const u=h-12;let f=12<=h?0:a<<20+h,g=20+h;for(0<u&&0<l&&(l--,a=t.__digit(l),p|=a>>>30-u,f=a<<u+2,g=u+2);0<g&&0<l;)l--,a=t.__digit(l),f|=30<=g?a<<g-30:a>>>30-g,g-=30;const b=d.__decideRounding(t,g,l,a);if((b===1||b===0&&(1&f)==1)&&(f=f+1>>>0,f===0&&(p++,p>>>20!=0&&(p=0,n++,1023<n))))return t.sign?-1/0:1/0;const y=t.sign?-2147483648:0;return n=n+1023<<20,d.__kBitConversionInts[1]=y|n|p,d.__kBitConversionInts[0]=f,d.__kBitConversionDouble[0]}static unaryMinus(t){if(t.length===0)return t;const r=t.__copy();return r.sign=!t.sign,r}static bitwiseNot(t){return t.sign?d.__absoluteSubOne(t).__trim():d.__absoluteAddOne(t,!0)}static exponentiate(t,r){if(r.sign)throw new RangeError("Exponent must be positive");if(r.length===0)return d.__oneDigit(1,!1);if(t.length===0)return t;if(t.length===1&&t.__digit(0)===1)return t.sign&&!(1&r.__digit(0))?d.unaryMinus(t):t;if(1<r.length)throw new RangeError("BigInt too big");let o=r.__unsignedDigit(0);if(o===1)return t;if(o>=d.__kMaxLengthBits)throw new RangeError("BigInt too big");if(t.length===1&&t.__digit(0)===2){const n=1+(0|o/30),a=t.sign&&(1&o)!=0,l=new d(n,a);l.__initializeDigits();const h=1<<o%30;return l.__setDigit(n-1,h),l}let i=null,s=t;for(1&o&&(i=t),o>>=1;o!==0;o>>=1)s=d.multiply(s,s),1&o&&(i===null?i=s:i=d.multiply(i,s));return i}static multiply(t,r){if(t.length===0)return t;if(r.length===0)return r;let o=t.length+r.length;30<=t.__clzmsd()+r.__clzmsd()&&o--;const i=new d(o,t.sign!==r.sign);i.__initializeDigits();for(let s=0;s<t.length;s++)d.__multiplyAccumulate(r,t.__digit(s),i,s);return i.__trim()}static divide(t,r){if(r.length===0)throw new RangeError("Division by zero");if(0>d.__absoluteCompare(t,r))return d.__zero();const o=t.sign!==r.sign,i=r.__unsignedDigit(0);let s;if(r.length===1&&32767>=i){if(i===1)return o===t.sign?t:d.unaryMinus(t);s=d.__absoluteDivSmall(t,i,null)}else s=d.__absoluteDivLarge(t,r,!0,!1);return s.sign=o,s.__trim()}static remainder(t,r){if(r.length===0)throw new RangeError("Division by zero");if(0>d.__absoluteCompare(t,r))return t;const o=r.__unsignedDigit(0);if(r.length===1&&32767>=o){if(o===1)return d.__zero();const s=d.__absoluteModSmall(t,o);return s===0?d.__zero():d.__oneDigit(s,t.sign)}const i=d.__absoluteDivLarge(t,r,!1,!0);return i.sign=t.sign,i.__trim()}static add(t,r){const o=t.sign;return o===r.sign?d.__absoluteAdd(t,r,o):0<=d.__absoluteCompare(t,r)?d.__absoluteSub(t,r,o):d.__absoluteSub(r,t,!o)}static subtract(t,r){const o=t.sign;return o===r.sign?0<=d.__absoluteCompare(t,r)?d.__absoluteSub(t,r,o):d.__absoluteSub(r,t,!o):d.__absoluteAdd(t,r,o)}static leftShift(t,r){return r.length===0||t.length===0?t:r.sign?d.__rightShiftByAbsolute(t,r):d.__leftShiftByAbsolute(t,r)}static signedRightShift(t,r){return r.length===0||t.length===0?t:r.sign?d.__leftShiftByAbsolute(t,r):d.__rightShiftByAbsolute(t,r)}static unsignedRightShift(){throw new TypeError("BigInts have no unsigned right shift; use >> instead")}static lessThan(t,r){return 0>d.__compareToBigInt(t,r)}static lessThanOrEqual(t,r){return 0>=d.__compareToBigInt(t,r)}static greaterThan(t,r){return 0<d.__compareToBigInt(t,r)}static greaterThanOrEqual(t,r){return 0<=d.__compareToBigInt(t,r)}static equal(t,r){if(t.sign!==r.sign||t.length!==r.length)return!1;for(let o=0;o<t.length;o++)if(t.__digit(o)!==r.__digit(o))return!1;return!0}static notEqual(t,r){return!d.equal(t,r)}static bitwiseAnd(t,r){var o=Math.max;if(!t.sign&&!r.sign)return d.__absoluteAnd(t,r).__trim();if(t.sign&&r.sign){const i=o(t.length,r.length)+1;let s=d.__absoluteSubOne(t,i);const n=d.__absoluteSubOne(r);return s=d.__absoluteOr(s,n,s),d.__absoluteAddOne(s,!0,s).__trim()}return t.sign&&([t,r]=[r,t]),d.__absoluteAndNot(t,d.__absoluteSubOne(r)).__trim()}static bitwiseXor(t,r){var o=Math.max;if(!t.sign&&!r.sign)return d.__absoluteXor(t,r).__trim();if(t.sign&&r.sign){const n=o(t.length,r.length),a=d.__absoluteSubOne(t,n),l=d.__absoluteSubOne(r);return d.__absoluteXor(a,l,a).__trim()}const i=o(t.length,r.length)+1;t.sign&&([t,r]=[r,t]);let s=d.__absoluteSubOne(r,i);return s=d.__absoluteXor(s,t,s),d.__absoluteAddOne(s,!0,s).__trim()}static bitwiseOr(t,r){var o=Math.max;const i=o(t.length,r.length);if(!t.sign&&!r.sign)return d.__absoluteOr(t,r).__trim();if(t.sign&&r.sign){let n=d.__absoluteSubOne(t,i);const a=d.__absoluteSubOne(r);return n=d.__absoluteAnd(n,a,n),d.__absoluteAddOne(n,!0,n).__trim()}t.sign&&([t,r]=[r,t]);let s=d.__absoluteSubOne(r,i);return s=d.__absoluteAndNot(s,t,s),d.__absoluteAddOne(s,!0,s).__trim()}static asIntN(t,r){var o=Math.floor;if(r.length===0)return r;if(t=o(t),0>t)throw new RangeError("Invalid value: not (convertible to) a safe integer");if(t===0)return d.__zero();if(t>=d.__kMaxLengthBits)return r;const i=0|(t+29)/30;if(r.length<i)return r;const s=r.__unsignedDigit(i-1),n=1<<(t-1)%30;if(r.length===i&&s<n)return r;if((s&n)!==n)return d.__truncateToNBits(t,r);if(!r.sign)return d.__truncateAndSubFromPowerOfTwo(t,r,!0);if(!(s&n-1)){for(let a=i-2;0<=a;a--)if(r.__digit(a)!==0)return d.__truncateAndSubFromPowerOfTwo(t,r,!1);return r.length===i&&s===n?r:d.__truncateToNBits(t,r)}return d.__truncateAndSubFromPowerOfTwo(t,r,!1)}static asUintN(t,r){var o=Math.floor;if(r.length===0)return r;if(t=o(t),0>t)throw new RangeError("Invalid value: not (convertible to) a safe integer");if(t===0)return d.__zero();if(r.sign){if(t>d.__kMaxLengthBits)throw new RangeError("BigInt too big");return d.__truncateAndSubFromPowerOfTwo(t,r,!1)}if(t>=d.__kMaxLengthBits)return r;const i=0|(t+29)/30;if(r.length<i)return r;const s=t%30;return r.length==i&&(s===0||!(r.__digit(i-1)>>>s))?r:d.__truncateToNBits(t,r)}static ADD(t,r){if(t=d.__toPrimitive(t),r=d.__toPrimitive(r),typeof t=="string")return typeof r!="string"&&(r=r.toString()),t+r;if(typeof r=="string")return t.toString()+r;if(t=d.__toNumeric(t),r=d.__toNumeric(r),d.__isBigInt(t)&&d.__isBigInt(r))return d.add(t,r);if(typeof t=="number"&&typeof r=="number")return t+r;throw new TypeError("Cannot mix BigInt and other types, use explicit conversions")}static LT(t,r){return d.__compare(t,r,0)}static LE(t,r){return d.__compare(t,r,1)}static GT(t,r){return d.__compare(t,r,2)}static GE(t,r){return d.__compare(t,r,3)}static EQ(t,r){for(;;){if(d.__isBigInt(t))return d.__isBigInt(r)?d.equal(t,r):d.EQ(r,t);if(typeof t=="number"){if(d.__isBigInt(r))return d.__equalToNumber(r,t);if(typeof r!="object")return t==r;r=d.__toPrimitive(r)}else if(typeof t=="string"){if(d.__isBigInt(r))return t=d.__fromString(t),t!==null&&d.equal(t,r);if(typeof r!="object")return t==r;r=d.__toPrimitive(r)}else if(typeof t=="boolean"){if(d.__isBigInt(r))return d.__equalToNumber(r,+t);if(typeof r!="object")return t==r;r=d.__toPrimitive(r)}else if(typeof t=="symbol"){if(d.__isBigInt(r))return!1;if(typeof r!="object")return t==r;r=d.__toPrimitive(r)}else if(typeof t=="object"){if(typeof r=="object"&&r.constructor!==d)return t==r;t=d.__toPrimitive(t)}else return t==r}}static NE(t,r){return!d.EQ(t,r)}static DataViewGetBigInt64(t,r,o=!1){return d.asIntN(64,d.DataViewGetBigUint64(t,r,o))}static DataViewGetBigUint64(t,r,o=!1){const[i,s]=o?[4,0]:[0,4],n=t.getUint32(r+i,o),a=t.getUint32(r+s,o),l=new d(3,!1);return l.__setDigit(0,1073741823&a),l.__setDigit(1,(268435455&n)<<2|a>>>30),l.__setDigit(2,n>>>28),l.__trim()}static DataViewSetBigInt64(t,r,o,i=!1){d.DataViewSetBigUint64(t,r,o,i)}static DataViewSetBigUint64(t,r,o,i=!1){o=d.asUintN(64,o);let s=0,n=0;if(0<o.length&&(n=o.__digit(0),1<o.length)){const h=o.__digit(1);n|=h<<30,s=h>>>2,2<o.length&&(s|=o.__digit(2)<<28)}const[a,l]=i?[4,0]:[0,4];t.setUint32(r+a,s,i),t.setUint32(r+l,n,i)}static __zero(){return new d(0,!1)}static __oneDigit(t,r){const o=new d(1,r);return o.__setDigit(0,t),o}__copy(){const t=new d(this.length,this.sign);for(let r=0;r<this.length;r++)t[r]=this[r];return t}__trim(){let t=this.length,r=this[t-1];for(;r===0;)t--,r=this[t-1],this.pop();return t===0&&(this.sign=!1),this}__initializeDigits(){for(let t=0;t<this.length;t++)this[t]=0}static __decideRounding(t,r,o,i){if(0<r)return-1;let s;if(0>r)s=-r-1;else{if(o===0)return-1;o--,i=t.__digit(o),s=29}let n=1<<s;if(!(i&n))return-1;if(n-=1,(i&n)!=0)return 1;for(;0<o;)if(o--,t.__digit(o)!==0)return 1;return 0}static __fromDouble(t){d.__kBitConversionDouble[0]=t;const r=2047&d.__kBitConversionInts[1]>>>20,o=r-1023,i=(0|o/30)+1,s=new d(i,0>t);let n=1048575&d.__kBitConversionInts[1]|1048576,a=d.__kBitConversionInts[0];const l=20,h=o%30;let p,u=0;if(h<20){const f=l-h;u=f+32,p=n>>>f,n=n<<32-f|a>>>f,a<<=32-f}else if(h===20)u=32,p=n,n=a,a=0;else{const f=h-l;u=32-f,p=n<<f|a>>>32-f,n=a<<f,a=0}s.__setDigit(i-1,p);for(let f=i-2;0<=f;f--)0<u?(u-=30,p=n>>>2,n=n<<30|a>>>2,a<<=30):p=0,s.__setDigit(f,p);return s.__trim()}static __isWhitespace(t){return 13>=t&&9<=t||(159>=t?t==32:131071>=t?t==160||t==5760:196607>=t?(t&=131071,10>=t||t==40||t==41||t==47||t==95||t==4096):t==65279)}static __fromString(t,r=0){let o=0;const i=t.length;let s=0;if(s===i)return d.__zero();let n=t.charCodeAt(s);for(;d.__isWhitespace(n);){if(++s===i)return d.__zero();n=t.charCodeAt(s)}if(n===43){if(++s===i)return null;n=t.charCodeAt(s),o=1}else if(n===45){if(++s===i)return null;n=t.charCodeAt(s),o=-1}if(r===0){if(r=10,n===48){if(++s===i)return d.__zero();if(n=t.charCodeAt(s),n===88||n===120){if(r=16,++s===i)return null;n=t.charCodeAt(s)}else if(n===79||n===111){if(r=8,++s===i)return null;n=t.charCodeAt(s)}else if(n===66||n===98){if(r=2,++s===i)return null;n=t.charCodeAt(s)}}}else if(r===16&&n===48){if(++s===i)return d.__zero();if(n=t.charCodeAt(s),n===88||n===120){if(++s===i)return null;n=t.charCodeAt(s)}}if(o!=0&&r!==10)return null;for(;n===48;){if(++s===i)return d.__zero();n=t.charCodeAt(s)}const a=i-s;let l=d.__kMaxBitsPerChar[r],h=d.__kBitsPerCharTableMultiplier-1;if(a>1073741824/l)return null;const p=l*a+h>>>d.__kBitsPerCharTableShift,u=new d(0|(p+29)/30,!1),f=10>r?r:10,g=10<r?r-10:0;if(r&r-1){u.__initializeDigits();let b=!1,y=0;do{let w=0,_=1;for(;;){let T;if(n-48>>>0<f)T=n-48;else if((32|n)-97>>>0<g)T=(32|n)-87;else{b=!0;break}const C=_*r;if(1073741823<C)break;if(_=C,w=w*r+T,y++,++s===i){b=!0;break}n=t.charCodeAt(s)}h=30*d.__kBitsPerCharTableMultiplier-1;const x=0|(l*y+h>>>d.__kBitsPerCharTableShift)/30;u.__inplaceMultiplyAdd(_,w,x)}while(!b)}else{l>>=d.__kBitsPerCharTableShift;const b=[],y=[];let w=!1;do{let _=0,x=0;for(;;){let T;if(n-48>>>0<f)T=n-48;else if((32|n)-97>>>0<g)T=(32|n)-87;else{w=!0;break}if(x+=l,_=_<<l|T,++s===i){w=!0;break}if(n=t.charCodeAt(s),30<x+l)break}b.push(_),y.push(x)}while(!w);d.__fillFromParts(u,b,y)}if(s!==i){if(!d.__isWhitespace(n))return null;for(s++;s<i;s++)if(n=t.charCodeAt(s),!d.__isWhitespace(n))return null}return u.sign=o==-1,u.__trim()}static __fillFromParts(t,r,o){let i=0,s=0,n=0;for(let a=r.length-1;0<=a;a--){const l=r[a],h=o[a];s|=l<<n,n+=h,n===30?(t.__setDigit(i++,s),n=0,s=0):30<n&&(t.__setDigit(i++,1073741823&s),n-=30,s=l>>>h-n)}if(s!==0){if(i>=t.length)throw new Error("implementation bug");t.__setDigit(i++,s)}for(;i<t.length;i++)t.__setDigit(i,0)}static __toStringBasePowerOfTwo(t,r){const o=t.length;let i=r-1;i=(85&i>>>1)+(85&i),i=(51&i>>>2)+(51&i),i=(15&i>>>4)+(15&i);const s=i,n=r-1,a=t.__digit(o-1),l=d.__clz30(a);let h=0|(30*o-l+s-1)/s;if(t.sign&&h++,268435456<h)throw new Error("string too long");const p=Array(h);let u=h-1,f=0,g=0;for(let y=0;y<o-1;y++){const w=t.__digit(y),_=(f|w<<g)&n;p[u--]=d.__kConversionChars[_];const x=s-g;for(f=w>>>x,g=30-x;g>=s;)p[u--]=d.__kConversionChars[f&n],f>>>=s,g-=s}const b=(f|a<<g)&n;for(p[u--]=d.__kConversionChars[b],f=a>>>s-g;f!==0;)p[u--]=d.__kConversionChars[f&n],f>>>=s;if(t.sign&&(p[u--]="-"),u!=-1)throw new Error("implementation bug");return p.join("")}static __toStringGeneric(t,r,o){const i=t.length;if(i===0)return"";if(i===1){let y=t.__unsignedDigit(0).toString(r);return o===!1&&t.sign&&(y="-"+y),y}const s=30*i-d.__clz30(t.__digit(i-1)),n=d.__kMaxBitsPerChar[r],a=n-1;let l=s*d.__kBitsPerCharTableMultiplier;l+=a-1,l=0|l/a;const h=l+1>>1,p=d.exponentiate(d.__oneDigit(r,!1),d.__oneDigit(h,!1));let u,f;const g=p.__unsignedDigit(0);if(p.length===1&&32767>=g){u=new d(t.length,!1),u.__initializeDigits();let y=0;for(let w=2*t.length-1;0<=w;w--){const _=y<<15|t.__halfDigit(w);u.__setHalfDigit(w,0|_/g),y=0|_%g}f=y.toString(r)}else{const y=d.__absoluteDivLarge(t,p,!0,!0);u=y.quotient;const w=y.remainder.__trim();f=d.__toStringGeneric(w,r,!0)}u.__trim();let b=d.__toStringGeneric(u,r,!0);for(;f.length<h;)f="0"+f;return o===!1&&t.sign&&(b="-"+b),b+f}static __unequalSign(t){return t?-1:1}static __absoluteGreater(t){return t?-1:1}static __absoluteLess(t){return t?1:-1}static __compareToBigInt(t,r){const o=t.sign;if(o!==r.sign)return d.__unequalSign(o);const i=d.__absoluteCompare(t,r);return 0<i?d.__absoluteGreater(o):0>i?d.__absoluteLess(o):0}static __compareToNumber(t,r){if(d.__isOneDigitInt(r)){const o=t.sign,i=0>r;if(o!==i)return d.__unequalSign(o);if(t.length===0){if(i)throw new Error("implementation bug");return r===0?0:-1}if(1<t.length)return d.__absoluteGreater(o);const s=Math.abs(r),n=t.__unsignedDigit(0);return n>s?d.__absoluteGreater(o):n<s?d.__absoluteLess(o):0}return d.__compareToDouble(t,r)}static __compareToDouble(t,r){if(r!==r)return r;if(r===1/0)return-1;if(r===-1/0)return 1;const o=t.sign;if(o!==0>r)return d.__unequalSign(o);if(r===0)throw new Error("implementation bug: should be handled elsewhere");if(t.length===0)return-1;d.__kBitConversionDouble[0]=r;const i=2047&d.__kBitConversionInts[1]>>>20;if(i==2047)throw new Error("implementation bug: handled elsewhere");const s=i-1023;if(0>s)return d.__absoluteGreater(o);const n=t.length;let a=t.__digit(n-1);const l=d.__clz30(a),h=30*n-l,p=s+1;if(h<p)return d.__absoluteLess(o);if(h>p)return d.__absoluteGreater(o);let u=1048576|1048575&d.__kBitConversionInts[1],f=d.__kBitConversionInts[0];const g=20,b=29-l;if(b!==(0|(h-1)%30))throw new Error("implementation bug");let y,w=0;if(20>b){const _=g-b;w=_+32,y=u>>>_,u=u<<32-_|f>>>_,f<<=32-_}else if(b===20)w=32,y=u,u=f,f=0;else{const _=b-g;w=32-_,y=u<<_|f>>>32-_,u=f<<_,f=0}if(a>>>=0,y>>>=0,a>y)return d.__absoluteGreater(o);if(a<y)return d.__absoluteLess(o);for(let _=n-2;0<=_;_--){0<w?(w-=30,y=u>>>2,u=u<<30|f>>>2,f<<=30):y=0;const x=t.__unsignedDigit(_);if(x>y)return d.__absoluteGreater(o);if(x<y)return d.__absoluteLess(o)}if(u!==0||f!==0){if(w===0)throw new Error("implementation bug");return d.__absoluteLess(o)}return 0}static __equalToNumber(t,r){var o=Math.abs;return d.__isOneDigitInt(r)?r===0?t.length===0:t.length===1&&t.sign===0>r&&t.__unsignedDigit(0)===o(r):d.__compareToDouble(t,r)===0}static __comparisonResultToBool(t,r){return r===0?0>t:r===1?0>=t:r===2?0<t:r===3?0<=t:void 0}static __compare(t,r,o){if(t=d.__toPrimitive(t),r=d.__toPrimitive(r),typeof t=="string"&&typeof r=="string")switch(o){case 0:return t<r;case 1:return t<=r;case 2:return t>r;case 3:return t>=r}if(d.__isBigInt(t)&&typeof r=="string")return r=d.__fromString(r),r!==null&&d.__comparisonResultToBool(d.__compareToBigInt(t,r),o);if(typeof t=="string"&&d.__isBigInt(r))return t=d.__fromString(t),t!==null&&d.__comparisonResultToBool(d.__compareToBigInt(t,r),o);if(t=d.__toNumeric(t),r=d.__toNumeric(r),d.__isBigInt(t)){if(d.__isBigInt(r))return d.__comparisonResultToBool(d.__compareToBigInt(t,r),o);if(typeof r!="number")throw new Error("implementation bug");return d.__comparisonResultToBool(d.__compareToNumber(t,r),o)}if(typeof t!="number")throw new Error("implementation bug");if(d.__isBigInt(r))return d.__comparisonResultToBool(d.__compareToNumber(r,t),2^o);if(typeof r!="number")throw new Error("implementation bug");return o===0?t<r:o===1?t<=r:o===2?t>r:o===3?t>=r:void 0}__clzmsd(){return d.__clz30(this.__digit(this.length-1))}static __absoluteAdd(t,r,o){if(t.length<r.length)return d.__absoluteAdd(r,t,o);if(t.length===0)return t;if(r.length===0)return t.sign===o?t:d.unaryMinus(t);let i=t.length;(t.__clzmsd()===0||r.length===t.length&&r.__clzmsd()===0)&&i++;const s=new d(i,o);let n=0,a=0;for(;a<r.length;a++){const l=t.__digit(a)+r.__digit(a)+n;n=l>>>30,s.__setDigit(a,1073741823&l)}for(;a<t.length;a++){const l=t.__digit(a)+n;n=l>>>30,s.__setDigit(a,1073741823&l)}return a<s.length&&s.__setDigit(a,n),s.__trim()}static __absoluteSub(t,r,o){if(t.length===0)return t;if(r.length===0)return t.sign===o?t:d.unaryMinus(t);const i=new d(t.length,o);let s=0,n=0;for(;n<r.length;n++){const a=t.__digit(n)-r.__digit(n)-s;s=1&a>>>30,i.__setDigit(n,1073741823&a)}for(;n<t.length;n++){const a=t.__digit(n)-s;s=1&a>>>30,i.__setDigit(n,1073741823&a)}return i.__trim()}static __absoluteAddOne(t,r,o=null){const i=t.length;o===null?o=new d(i,r):o.sign=r;let s=1;for(let n=0;n<i;n++){const a=t.__digit(n)+s;s=a>>>30,o.__setDigit(n,1073741823&a)}return s!=0&&o.__setDigitGrow(i,1),o}static __absoluteSubOne(t,r){const o=t.length;r=r||o;const i=new d(r,!1);let s=1;for(let n=0;n<o;n++){const a=t.__digit(n)-s;s=1&a>>>30,i.__setDigit(n,1073741823&a)}if(s!=0)throw new Error("implementation bug");for(let n=o;n<r;n++)i.__setDigit(n,0);return i}static __absoluteAnd(t,r,o=null){let i=t.length,s=r.length,n=s;if(i<s){n=i;const h=t,p=i;t=r,i=s,r=h,s=p}let a=n;o===null?o=new d(a,!1):a=o.length;let l=0;for(;l<n;l++)o.__setDigit(l,t.__digit(l)&r.__digit(l));for(;l<a;l++)o.__setDigit(l,0);return o}static __absoluteAndNot(t,r,o=null){const i=t.length,s=r.length;let n=s;i<s&&(n=i);let a=i;o===null?o=new d(a,!1):a=o.length;let l=0;for(;l<n;l++)o.__setDigit(l,t.__digit(l)&~r.__digit(l));for(;l<i;l++)o.__setDigit(l,t.__digit(l));for(;l<a;l++)o.__setDigit(l,0);return o}static __absoluteOr(t,r,o=null){let i=t.length,s=r.length,n=s;if(i<s){n=i;const h=t,p=i;t=r,i=s,r=h,s=p}let a=i;o===null?o=new d(a,!1):a=o.length;let l=0;for(;l<n;l++)o.__setDigit(l,t.__digit(l)|r.__digit(l));for(;l<i;l++)o.__setDigit(l,t.__digit(l));for(;l<a;l++)o.__setDigit(l,0);return o}static __absoluteXor(t,r,o=null){let i=t.length,s=r.length,n=s;if(i<s){n=i;const h=t,p=i;t=r,i=s,r=h,s=p}let a=i;o===null?o=new d(a,!1):a=o.length;let l=0;for(;l<n;l++)o.__setDigit(l,t.__digit(l)^r.__digit(l));for(;l<i;l++)o.__setDigit(l,t.__digit(l));for(;l<a;l++)o.__setDigit(l,0);return o}static __absoluteCompare(t,r){const o=t.length-r.length;if(o!=0)return o;let i=t.length-1;for(;0<=i&&t.__digit(i)===r.__digit(i);)i--;return 0>i?0:t.__unsignedDigit(i)>r.__unsignedDigit(i)?1:-1}static __multiplyAccumulate(t,r,o,i){if(r===0)return;const s=32767&r,n=r>>>15;let a=0,l=0;for(let h,p=0;p<t.length;p++,i++){h=o.__digit(i);const u=t.__digit(p),f=32767&u,g=u>>>15,b=d.__imul(f,s),y=d.__imul(f,n),w=d.__imul(g,s),_=d.__imul(g,n);h+=l+b+a,a=h>>>30,h&=1073741823,h+=((32767&y)<<15)+((32767&w)<<15),a+=h>>>30,l=_+(y>>>15)+(w>>>15),o.__setDigit(i,1073741823&h)}for(;a!=0||l!==0;i++){let h=o.__digit(i);h+=a+l,l=0,a=h>>>30,o.__setDigit(i,1073741823&h)}}static __internalMultiplyAdd(t,r,o,i,s){let n=o,a=0;for(let l=0;l<i;l++){const h=t.__digit(l),p=d.__imul(32767&h,r),u=d.__imul(h>>>15,r),f=p+((32767&u)<<15)+a+n;n=f>>>30,a=u>>>15,s.__setDigit(l,1073741823&f)}if(s.length>i)for(s.__setDigit(i++,n+a);i<s.length;)s.__setDigit(i++,0);else if(n+a!==0)throw new Error("implementation bug")}__inplaceMultiplyAdd(t,r,o){o>this.length&&(o=this.length);const i=32767&t,s=t>>>15;let n=0,a=r;for(let l=0;l<o;l++){const h=this.__digit(l),p=32767&h,u=h>>>15,f=d.__imul(p,i),g=d.__imul(p,s),b=d.__imul(u,i),y=d.__imul(u,s);let w=a+f+n;n=w>>>30,w&=1073741823,w+=((32767&g)<<15)+((32767&b)<<15),n+=w>>>30,a=y+(g>>>15)+(b>>>15),this.__setDigit(l,1073741823&w)}if(n!=0||a!==0)throw new Error("implementation bug")}static __absoluteDivSmall(t,r,o=null){o===null&&(o=new d(t.length,!1));let i=0;for(let s,n=2*t.length-1;0<=n;n-=2){s=(i<<15|t.__halfDigit(n))>>>0;const a=0|s/r;i=0|s%r,s=(i<<15|t.__halfDigit(n-1))>>>0;const l=0|s/r;i=0|s%r,o.__setDigit(n>>>1,a<<15|l)}return o}static __absoluteModSmall(t,r){let o=0;for(let i=2*t.length-1;0<=i;i--)o=0|((o<<15|t.__halfDigit(i))>>>0)%r;return o}static __absoluteDivLarge(t,r,o,i){const s=r.__halfDigitLength(),n=r.length,a=t.__halfDigitLength()-s;let l=null;o&&(l=new d(a+2>>>1,!1),l.__initializeDigits());const h=new d(s+2>>>1,!1);h.__initializeDigits();const p=d.__clz15(r.__halfDigit(s-1));0<p&&(r=d.__specialLeftShift(r,p,0));const u=d.__specialLeftShift(t,p,1),f=r.__halfDigit(s-1);let g=0;for(let b,y=a;0<=y;y--){b=32767;const w=u.__halfDigit(y+s);if(w!==f){const x=(w<<15|u.__halfDigit(y+s-1))>>>0;b=0|x/f;let T=0|x%f;const C=r.__halfDigit(s-2),k=u.__halfDigit(y+s-2);for(;d.__imul(b,C)>>>0>(T<<16|k)>>>0&&(b--,T+=f,!(32767<T)););}d.__internalMultiplyAdd(r,b,0,n,h);let _=u.__inplaceSub(h,y,s+1);_!==0&&(_=u.__inplaceAdd(r,y,s),u.__setHalfDigit(y+s,32767&u.__halfDigit(y+s)+_),b--),o&&(1&y?g=b<<15:l.__setDigit(y>>>1,g|b))}if(i)return u.__inplaceRightShift(p),o?{quotient:l,remainder:u}:u;if(o)return l;throw new Error("unreachable")}static __clz15(t){return d.__clz30(t)-15}__inplaceAdd(t,r,o){let i=0;for(let s=0;s<o;s++){const n=this.__halfDigit(r+s)+t.__halfDigit(s)+i;i=n>>>15,this.__setHalfDigit(r+s,32767&n)}return i}__inplaceSub(t,r,o){let i=0;if(1&r){r>>=1;let s=this.__digit(r),n=32767&s,a=0;for(;a<o-1>>>1;a++){const p=t.__digit(a),u=(s>>>15)-(32767&p)-i;i=1&u>>>15,this.__setDigit(r+a,(32767&u)<<15|32767&n),s=this.__digit(r+a+1),n=(32767&s)-(p>>>15)-i,i=1&n>>>15}const l=t.__digit(a),h=(s>>>15)-(32767&l)-i;if(i=1&h>>>15,this.__setDigit(r+a,(32767&h)<<15|32767&n),r+a+1>=this.length)throw new RangeError("out of bounds");!(1&o)&&(s=this.__digit(r+a+1),n=(32767&s)-(l>>>15)-i,i=1&n>>>15,this.__setDigit(r+t.length,1073709056&s|32767&n))}else{r>>=1;let s=0;for(;s<t.length-1;s++){const p=this.__digit(r+s),u=t.__digit(s),f=(32767&p)-(32767&u)-i;i=1&f>>>15;const g=(p>>>15)-(u>>>15)-i;i=1&g>>>15,this.__setDigit(r+s,(32767&g)<<15|32767&f)}const n=this.__digit(r+s),a=t.__digit(s),l=(32767&n)-(32767&a)-i;i=1&l>>>15;let h=0;!(1&o)&&(h=(n>>>15)-(a>>>15)-i,i=1&h>>>15),this.__setDigit(r+s,(32767&h)<<15|32767&l)}return i}__inplaceRightShift(t){if(t===0)return;let r=this.__digit(0)>>>t;const o=this.length-1;for(let i=0;i<o;i++){const s=this.__digit(i+1);this.__setDigit(i,1073741823&s<<30-t|r),r=s>>>t}this.__setDigit(o,r)}static __specialLeftShift(t,r,o){const i=t.length,s=new d(i+o,!1);if(r===0){for(let a=0;a<i;a++)s.__setDigit(a,t.__digit(a));return 0<o&&s.__setDigit(i,0),s}let n=0;for(let a=0;a<i;a++){const l=t.__digit(a);s.__setDigit(a,1073741823&l<<r|n),n=l>>>30-r}return 0<o&&s.__setDigit(i,n),s}static __leftShiftByAbsolute(t,r){const o=d.__toShiftAmount(r);if(0>o)throw new RangeError("BigInt too big");const i=0|o/30,s=o%30,n=t.length,a=s!==0&&t.__digit(n-1)>>>30-s!=0,l=n+i+(a?1:0),h=new d(l,t.sign);if(s===0){let p=0;for(;p<i;p++)h.__setDigit(p,0);for(;p<l;p++)h.__setDigit(p,t.__digit(p-i))}else{let p=0;for(let u=0;u<i;u++)h.__setDigit(u,0);for(let u=0;u<n;u++){const f=t.__digit(u);h.__setDigit(u+i,1073741823&f<<s|p),p=f>>>30-s}if(a)h.__setDigit(n+i,p);else if(p!==0)throw new Error("implementation bug")}return h.__trim()}static __rightShiftByAbsolute(t,r){const o=t.length,i=t.sign,s=d.__toShiftAmount(r);if(0>s)return d.__rightShiftByMaximum(i);const n=0|s/30,a=s%30;let l=o-n;if(0>=l)return d.__rightShiftByMaximum(i);let h=!1;if(i){if(t.__digit(n)&(1<<a)-1)h=!0;else for(let u=0;u<n;u++)if(t.__digit(u)!==0){h=!0;break}}h&&a===0&&!~t.__digit(o-1)&&l++;let p=new d(l,i);if(a===0){p.__setDigit(l-1,0);for(let u=n;u<o;u++)p.__setDigit(u-n,t.__digit(u))}else{let u=t.__digit(n)>>>a;const f=o-n-1;for(let g=0;g<f;g++){const b=t.__digit(g+n+1);p.__setDigit(g,1073741823&b<<30-a|u),u=b>>>a}p.__setDigit(f,u)}return h&&(p=d.__absoluteAddOne(p,!0,p)),p.__trim()}static __rightShiftByMaximum(t){return t?d.__oneDigit(1,!0):d.__zero()}static __toShiftAmount(t){if(1<t.length)return-1;const r=t.__unsignedDigit(0);return r>d.__kMaxLengthBits?-1:r}static __toPrimitive(t,r="default"){if(typeof t!="object"||t.constructor===d)return t;if(typeof Symbol<"u"&&typeof Symbol.toPrimitive=="symbol"){const s=t[Symbol.toPrimitive];if(s){const n=s(r);if(typeof n!="object")return n;throw new TypeError("Cannot convert object to primitive value")}}const o=t.valueOf;if(o){const s=o.call(t);if(typeof s!="object")return s}const i=t.toString;if(i){const s=i.call(t);if(typeof s!="object")return s}throw new TypeError("Cannot convert object to primitive value")}static __toNumeric(t){return d.__isBigInt(t)?t:+t}static __isBigInt(t){return typeof t=="object"&&t!==null&&t.constructor===d}static __truncateToNBits(t,r){const o=0|(t+29)/30,i=new d(o,r.sign),s=o-1;for(let a=0;a<s;a++)i.__setDigit(a,r.__digit(a));let n=r.__digit(s);if(t%30!=0){const a=32-t%30;n=n<<a>>>a}return i.__setDigit(s,n),i.__trim()}static __truncateAndSubFromPowerOfTwo(t,r,o){var i=Math.min;const s=0|(t+29)/30,n=new d(s,o);let a=0;const l=s-1;let h=0;for(const g=i(l,r.length);a<g;a++){const b=0-r.__digit(a)-h;h=1&b>>>30,n.__setDigit(a,1073741823&b)}for(;a<l;a++)n.__setDigit(a,0|1073741823&-h);let p=l<r.length?r.__digit(l):0;const u=t%30;let f;if(u==0)f=0-p-h,f&=1073741823;else{const g=32-u;p=p<<g>>>g;const b=1<<32-g;f=b-p-h,f&=b-1}return n.__setDigit(l,f),n.__trim()}__digit(t){return this[t]}__unsignedDigit(t){return this[t]>>>0}__setDigit(t,r){this[t]=0|r}__setDigitGrow(t,r){this[t]=0|r}__halfDigitLength(){const t=this.length;return 32767>=this.__unsignedDigit(t-1)?2*t-1:2*t}__halfDigit(t){return 32767&this[t>>>1]>>>15*(1&t)}__setHalfDigit(t,r){const o=t>>>1,i=this.__digit(o),s=1&t?32767&i|r<<15:1073709056&i|32767&r;this.__setDigit(o,s)}static __digitPow(t,r){let o=1;for(;0<r;)1&r&&(o*=t),r>>>=1,t*=t;return o}static __isOneDigitInt(t){return(1073741823&t)===t}}d.__kMaxLength=33554432,d.__kMaxLengthBits=d.__kMaxLength<<5,d.__kMaxBitsPerChar=[0,0,32,51,64,75,83,90,96,102,107,111,115,119,122,126,128,131,134,136,139,141,143,145,147,149,151,153,154,156,158,159,160,162,163,165,166],d.__kBitsPerCharTableShift=5,d.__kBitsPerCharTableMultiplier=1<<d.__kBitsPerCharTableShift,d.__kConversionChars=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],d.__kBitConversionBuffer=new ArrayBuffer(8),d.__kBitConversionDouble=new Float64Array(d.__kBitConversionBuffer),d.__kBitConversionInts=new Int32Array(d.__kBitConversionBuffer),d.__clz30=Math.clz32?function(e){return Math.clz32(e)-2}:function(e){return e===0?30:0|29-(0|Math.log(e>>>0)/Math.LN2)},d.__imul=Math.imul||function(e,t){return 0|e*t};const ul={};function Zr(e,t){Object.defineProperty(e.prototype,Symbol.toStringTag,{value:t,writable:!1,enumerable:!1,configurable:!0});for(const r of Object.getOwnPropertyNames(e)){const o=Object.getOwnPropertyDescriptor(e,r);o.configurable&&o.enumerable&&(o.enumerable=!1,Object.defineProperty(e,r,o))}for(const r of Object.getOwnPropertyNames(e.prototype)){const o=Object.getOwnPropertyDescriptor(e.prototype,r);o.configurable&&o.enumerable&&(o.enumerable=!1,Object.defineProperty(e.prototype,r,o))}Ft(t,e),Ft(`${t}.prototype`,e.prototype)}function Ft(e,t){const r=`%${e}%`;if(ul[r]!==void 0)throw new Error(`intrinsic ${e} already exists`);ul[r]=t}function A(e){return ul[e]}var gd,bd;const K="slot-epochNanoSeconds",Br="slot-timezone-identifier",L="slot-year",N="slot-month",U="slot-day",rt="slot-hour",ot="slot-minute",it="slot-second",st="slot-millisecond",nt="slot-microsecond",at="slot-nanosecond",E="slot-calendar",Hh="slot-date-brand",qh="slot-year-month-brand",Wh="slot-month-day-brand",xe="slot-cached-instant",vt="slot-time-zone",De="slot-years",ce="slot-months",Ve="slot-weeks",Se="slot-days",Ie="slot-hours",Oe="slot-minutes",Ae="slot-seconds",ze="slot-milliseconds",Me="slot-microseconds",Pe="slot-nanoseconds",Pt="slot-calendar-identifier",Gh=new WeakMap,pl=Symbol.for("@@Temporal__GetSlots");(gd=globalThis)[pl]||(gd[pl]=function(t){return Gh.get(t)});const lc=globalThis[pl],fl=Symbol.for("@@Temporal__CreateSlots");(bd=globalThis)[fl]||(bd[fl]=function(t){Gh.set(t,Object.create(null))});const Kr=globalThis[fl];function le(e,...t){if(!e||typeof e!="object")return!1;const r=lc(e);return!!r&&t.every(o=>o in r)}function c(e,t){const r=lc(e)?.[t];if(r===void 0)throw new TypeError(`Missing internal slot ${t}`);return r}function lt(e,t,r){const o=lc(e);if(o===void 0)throw new TypeError("Missing slots for the given container");if(o[t])throw new TypeError(`${t} already has set`);o[t]=r}const yd=/\.[-A-Za-z_]|\.\.[-A-Za-z._]{1,12}|\.[-A-Za-z_][-A-Za-z._]{0,12}|[A-Za-z_][-A-Za-z._]{0,13}/,Hs=new RegExp("(?:"+[`(?:${yd.source})(?:\\/(?:${yd.source}))*`,"Etc/GMT(?:0|[-+]\\d{1,2})","GMT[-+]?0","EST5EDT","CST6CDT","MST7MDT","PST8PDT",/(?:[+\u2212-][0-2][0-9](?::?[0-5][0-9](?::?[0-5][0-9](?:[.,]\d{1,9})?)?)?)/.source].join("|")+")"),Zh=/(?:[+\u2212-]\d{6}|\d{4})/,Fn=/(?:0[1-9]|1[0-2])/,ml=/(?:0[1-9]|[12]\d|3[01])/,vf=new RegExp(`(${Zh.source})(?:-(${Fn.source})-(${ml.source})|(${Fn.source})(${ml.source}))`),Kh=/(\d{2})(?::(\d{2})(?::(\d{2})(?:[.,](\d{1,9}))?)?|(\d{2})(?:(\d{2})(?:[.,](\d{1,9}))?)?)?/,Xh=/([+\u2212-])([01][0-9]|2[0-3])(?::?([0-5][0-9])(?::?([0-5][0-9])(?:[.,](\d{1,9}))?)?)?/,Qh=new RegExp(`([zZ])|${Xh.source}?`),Fo=/\[(!)?([a-z_][a-z0-9_-]*)=([A-Za-z0-9]+(?:-[A-Za-z0-9]+)*)\]/g,wf=new RegExp([`^${vf.source}`,`(?:(?:T|\\s+)${Kh.source}(?:${Qh.source})?)?`,`(?:\\[!?(${Hs.source})\\])?`,`((?:${Fo.source})*)$`].join(""),"i"),_f=new RegExp([`^T?${Kh.source}`,`(?:${Qh.source})?`,`(?:\\[!?${Hs.source}\\])?`,`((?:${Fo.source})*)$`].join(""),"i"),xf=new RegExp(`^(${Zh.source})-?(${Fn.source})(?:\\[!?${Hs.source}\\])?((?:${Fo.source})*)$`),Cf=new RegExp(`^(?:--)?(${Fn.source})-?(${ml.source})(?:\\[!?${Hs.source}\\])?((?:${Fo.source})*)$`),Ha=/(\d+)(?:[.,](\d{1,9}))?/,Tf=new RegExp(`(?:${Ha.source}H)?(?:${Ha.source}M)?(?:${Ha.source}S)?`),kf=new RegExp(`^([+−-])?P${/(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)W)?(?:(\d+)D)?/.source}(?:T(?!$)${Tf.source})?$`,"i"),$f=Array.prototype.includes,Jh=Array.prototype.push,tu=globalThis.Intl.DateTimeFormat,Ef=Math.min,Df=Math.max,Ot=Math.abs,We=Math.floor,Pi=Math.sign,Go=Math.trunc,ua=Number.isNaN,Fe=Number.isFinite,Sf=Number,qs=String,If=Number.MAX_SAFE_INTEGER,Te=Object.create,Of=Object.getOwnPropertyDescriptor,pa=Reflect.apply,Af=Reflect.ownKeys,jt=d.BigInt(0),Zi=d.BigInt(1),Ur=d.BigInt(60),eu=d.BigInt(24),mt=d.BigInt(1e3),hr=d.BigInt(1e6),Vr=d.BigInt(1e9),zf=d.BigInt(-1),ru=d.multiply(d.BigInt(3600),Vr),ou=d.multiply(Ur,Vr),Yr=d.multiply(ru,eu),Ps=d.multiply(d.BigInt(-86400),d.BigInt(1e17)),Fi=d.multiply(d.BigInt(86400),d.BigInt(1e17)),Ln=-271821,Rn=275760,$i=d.multiply(d.BigInt(-388152),d.BigInt(1e13)),Mf=d.multiply(Yr,d.BigInt(3660)),iu=d.multiply(Yr,d.BigInt(366)),su=d.multiply(Yr,d.BigInt(14)),Pf=["iso8601","hebrew","islamic","islamic-umalqura","islamic-tbla","islamic-civil","islamic-rgsa","islamicc","persian","ethiopic","ethioaa","coptic","chinese","dangi","roc","indian","buddhist","japanese","gregory"];function cr(e){return d.equal(e,jt)}function gt(e,t){const r=e[t];if(r!==void 0)return r}function H(e,t,r){const o=arguments.length>2?r:[];return pa(e,t,o)}function At(e){return typeof e=="object"&&e!==null||typeof e=="function"}function Li(e){if(typeof e=="bigint")throw new TypeError("Cannot convert BigInt to number");return Sf(e)}function Kt(e){const t=Li(e);if(ua(t)||t===0)return 0;if(!Fe(t))return t;const r=We(Ot(t));return r===0?0:Pi(t)*r}function nr(e){if(typeof e!="number"||ua(e)||!Fe(e))return!1;const t=Ot(e);return We(t)===t}function Re(e){if(typeof e=="symbol")throw new TypeError("Cannot convert a Symbol value to a String");return qs(e)}function pt(e){const t=Li(e);if(t===0)return 0;if(ua(t)||!Fe(t))throw new RangeError("invalid number value");const r=Go(t);return r===0?0:r}function vd(e,t){const r=pt(e);if(r<=0)throw t!==void 0?new RangeError(`property '${t}' cannot be a a number less than one`):new RangeError("Cannot convert a number less than one to a positive integer");return r}function ae(e){const t=Li(e);if(!Fe(t))throw new RangeError("infinity is out of range");if(!nr(t))throw new RangeError(`unsupported fractional value ${e}`);return t===0?0:t}function qt(e,t){return{quotient:d.divide(e,t),remainder:d.remainder(e,t)}}function Nn(e){return d.lessThan(e,jt)}function wd(e){return cr(e)?0:Nn(e)?-1:1}function Dr(e){return d.lessThan(e,jt)?d.multiply(e,zf):e}const _d=new Map([["year",pt],["month",vd],["monthCode",Re],["day",vd],["hour",pt],["minute",pt],["second",pt],["millisecond",pt],["microsecond",pt],["nanosecond",pt],["years",ae],["months",ae],["weeks",ae],["days",ae],["hours",ae],["minutes",ae],["seconds",ae],["milliseconds",ae],["microseconds",ae],["nanoseconds",ae],["era",Re],["eraYear",Kt],["offset",Re]]),Ff=new Map([["hour",0],["minute",0],["second",0],["millisecond",0],["microsecond",0],["nanosecond",0]]),Ws=[["years","year","date"],["months","month","date"],["weeks","week","date"],["days","day","date"],["hours","hour","time"],["minutes","minute","time"],["seconds","second","time"],["milliseconds","millisecond","time"],["microseconds","microsecond","time"],["nanoseconds","nanosecond","time"]],Bn=new Map(Ws.map(e=>[e[0],e[1]])),Lf=new Map(Ws.map(([e,t])=>[t,e])),xd=Ws.map(([,e])=>e),Cd=Array.from(Bn.keys()).sort(),Td=new Map;function nu(e){let t=Td.get(e);return t===void 0&&(t=new tu("en-us",{timeZone:qs(e),hour12:!1,era:"short",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}),Td.set(e,t)),t}function kd(e){if(e==null)throw new TypeError(`Expected object not ${e}`);return Object(e)}function Ei(e,t,r,o){if(t==null)return;const i=Af(t);for(const s of i)if(!r.some(n=>Object.is(n,s))&&Object.prototype.propertyIsEnumerable.call(t,s)){const n=t[s];if(o&&o.some(a=>Object.is(a,n)))continue;e[s]=n}}function re(e){return le(e,K)&&!le(e,vt,E)}function lr(e){return le(e,Br)}function Nt(e){return le(e,Pt)}function Ut(e){return le(e,De,ce,Se,Ie,Oe,Ae,ze,Me,Pe)}function dt(e){return le(e,Hh)}function Vt(e){return le(e,rt,ot,it,st,nt,at)&&!le(e,L,N,U)}function et(e){return le(e,L,N,U,rt,ot,it,st,nt,at)}function ft(e){return le(e,qh)}function ne(e){return le(e,Wh)}function j(e){return le(e,K,vt,E)}function Ki(e){if(le(e,E)||le(e,vt))throw new TypeError("with() does not support a calendar or timeZone property");if(Vt(e))throw new TypeError("with() does not accept Temporal.PlainTime, use withPlainTime() instead");if(e.calendar!==void 0)throw new TypeError("with() does not support a calendar property");if(e.timeZone!==void 0)throw new TypeError("with() does not support a timeZone property")}function Rf(e){const{ianaName:t,offset:r,z:o}=function(s){if(new RegExp(`^${Hs.source}$`,"i").test(s))return{ianaName:s};try{const n=Xr(s);if(n.z||n.offset||n.ianaName)return n}catch{}throw new RangeError(`Invalid time zone: ${s}`)}(e);return t?vc(t):o?"UTC":ka($o(r))}function cc(e,t){return t==="never"?"":dc(be(e),t)}function dc(e,t){return t==="never"||t==="auto"&&e==="iso8601"?"":`[${t==="critical"?"!":""}u-ca=${e}]`}function Xr(e){const t=wf.exec(e);if(!t)throw new RangeError(`invalid ISO 8601 string: ${e}`);let r=t[1];if(r[0]==="−"&&(r=`-${r.slice(1)}`),r==="-000000")throw new RangeError(`invalid ISO 8601 string: ${e}`);const o=Kt(r),i=Kt(t[2]||t[4]),s=Kt(t[3]||t[5]),n=Kt(t[6]),a=t[6]!==void 0,l=Kt(t[7]||t[10]);let h=Kt(t[8]||t[11]);h===60&&(h=59);const p=(t[9]||t[12])+"000000000",u=Kt(p.slice(0,3)),f=Kt(p.slice(3,6)),g=Kt(p.slice(6,9));let b,y=!1;if(t[13])b=void 0,y=!0;else if(t[14]&&t[15]){const T=t[14]==="-"||t[14]==="−"?"-":"+",C=t[15]||"00",k=t[16]||"00",D=t[17]||"00";let S=t[18]||"0";if(b=`${T}${C}:${k}`,+S){for(;S.endsWith("0");)S=S.slice(0,-1);b+=`:${D}.${S}`}else+D&&(b+=`:${D}`);b==="-00:00"&&(b="+00:00")}const w=t[19],_=t[20];let x;for(const[,T,C,k]of _.matchAll(Fo))if(C==="u-ca")x===void 0&&(x=k);else if(T==="!")throw new RangeError(`Unrecognized annotation: !${C}=${k}`);return xc(o,i,s,n,l,h,u,f,g),{year:o,month:i,day:s,hasTime:a,hour:n,minute:l,second:h,millisecond:u,microsecond:f,nanosecond:g,ianaName:w,offset:b,z:y,calendar:x}}function hc(e){const t=xf.exec(e);let r,o,i,s;if(t){let n=t[1];if(n[0]==="−"&&(n=`-${n.slice(1)}`),n==="-000000")throw new RangeError(`invalid ISO 8601 string: ${e}`);r=Kt(n),o=Kt(t[2]);const a=t[3];for(const[,l,h,p]of a.matchAll(Fo))if(h==="u-ca")i===void 0&&(i=p);else if(l==="!")throw new RangeError(`Unrecognized annotation: !${h}=${p}`);if(i!==void 0&&i!=="iso8601")throw new RangeError("YYYY-MM format is only valid with iso8601 calendar")}else{let n;if({year:r,month:o,calendar:i,day:s,z:n}=Xr(e),n)throw new RangeError("Z designator not supported for PlainYearMonth")}return{year:r,month:o,calendar:i,referenceISODay:s}}function uc(e){const t=Cf.exec(e);let r,o,i,s;if(t){r=Kt(t[1]),o=Kt(t[2]);const n=t[3];for(const[,a,l,h]of n.matchAll(Fo))if(l==="u-ca")i===void 0&&(i=h);else if(a==="!")throw new RangeError(`Unrecognized annotation: !${l}=${h}`);if(i!==void 0&&i!=="iso8601")throw new RangeError("MM-DD format is only valid with iso8601 calendar")}else{let n;if({month:r,day:o,calendar:i,year:s,z:n}=Xr(e),n)throw new RangeError("Z designator not supported for PlainMonthDay")}return{month:r,day:o,calendar:i,referenceISOYear:s}}function Nf(e){let{year:t,month:r,day:o,hour:i,minute:s,second:n,millisecond:a,microsecond:l,nanosecond:h,offset:p,z:u}=function(y){const w=Xr(y);if(!w.z&&!w.offset)throw new RangeError("Temporal.Instant requires a time zone offset");return w}(e);if(!u&&!p)throw new RangeError("Temporal.Instant requires a time zone offset");const f=u?0:$o(p);({year:t,month:r,day:o,hour:i,minute:s,second:n,millisecond:a,microsecond:l,nanosecond:h}=wc(t,r,o,i,s,n,a,l,h-f));const g=Eo(t,r,o,i,s,n,a,l,h);if(g===null)throw new RangeError("DateTime outside of supported range");return g}function Un(e,t,r,o){let i=e,s=t,n=r;switch(o){case"reject":Hr(i,s,n);break;case"constrain":({year:i,month:s,day:n}=Cu(i,s,n))}return{year:i,month:s,day:n}}function fa(e,t,r,o,i,s,n){let a=e,l=t,h=r,p=o,u=i,f=s;switch(n){case"reject":Ea(a,l,h,p,u,f);break;case"constrain":({hour:a,minute:l,second:h,millisecond:p,microsecond:u,nanosecond:f}=function(b,y,w,_,x,T){const C=qe(b,0,23),k=qe(y,0,59),D=qe(w,0,59),S=qe(_,0,999),O=qe(x,0,999),I=qe(T,0,999);return{hour:C,minute:k,second:D,millisecond:S,microsecond:O,nanosecond:I}}(a,l,h,p,u,f))}return{hour:a,minute:l,second:h,millisecond:p,microsecond:u,nanosecond:f}}function ui(e){if(!At(e))return function(b){const y=kf.exec(b);if(!y)throw new RangeError(`invalid duration: ${b}`);if(y.slice(2).every(Q=>Q===void 0))throw new RangeError(`invalid duration: ${b}`);const w=y[1]==="-"||y[1]==="−"?-1:1,_=y[2]===void 0?0:pt(y[2])*w,x=y[3]===void 0?0:pt(y[3])*w,T=y[4]===void 0?0:pt(y[4])*w,C=y[5]===void 0?0:pt(y[5])*w,k=y[6]===void 0?0:pt(y[6])*w,D=y[7],S=y[8],O=y[9],I=y[10],P=y[11];let X=0,W=0,V=0;if(D!==void 0){if(S??O??I??P)throw new RangeError("only the smallest unit can be fractional");V=3600*Kt((D+"000000000").slice(0,9))*w}else if(X=S===void 0?0:pt(S)*w,O!==void 0){if(I??P)throw new RangeError("only the smallest unit can be fractional");V=60*Kt((O+"000000000").slice(0,9))*w}else W=I===void 0?0:pt(I)*w,P!==void 0&&(V=Kt((P+"000000000").slice(0,9))*w);const q=V%1e3,z=Go(V/1e3)%1e3,Y=Go(V/1e6)%1e3;return W+=Go(V/1e9)%60,X+=Go(V/6e10),Wn(_,x,T,C,k,X,W,Y,z,q),{years:_,months:x,weeks:T,days:C,hours:k,minutes:X,seconds:W,milliseconds:Y,microseconds:z,nanoseconds:q}}(Re(e));if(Ut(e))return{years:c(e,De),months:c(e,ce),weeks:c(e,Ve),days:c(e,Se),hours:c(e,Ie),minutes:c(e,Oe),seconds:c(e,Ae),milliseconds:c(e,ze),microseconds:c(e,Me),nanoseconds:c(e,Pe)};const t={years:0,months:0,weeks:0,days:0,hours:0,minutes:0,seconds:0,milliseconds:0,microseconds:0,nanoseconds:0};let r=function(b){if(!At(b))throw new TypeError("invalid duration-like");const y={years:void 0,months:void 0,weeks:void 0,days:void 0,hours:void 0,minutes:void 0,seconds:void 0,milliseconds:void 0,microseconds:void 0,nanoseconds:void 0};let w=!1;for(const _ of Cd){const x=b[_];x!==void 0&&(w=!0,y[_]=ae(x))}if(!w)throw new TypeError("invalid duration-like");return y}(e);for(const g of Cd){const b=r[g];b!==void 0&&(t[g]=b)}let{years:o,months:i,weeks:s,days:n,hours:a,minutes:l,seconds:h,milliseconds:p,microseconds:u,nanoseconds:f}=t;return Wn(o,i,s,n,a,l,h,p,u,f),{years:o,months:i,weeks:s,days:n,hours:a,minutes:l,seconds:h,milliseconds:p,microseconds:u,nanoseconds:f}}function Gt(e){return e===void 0?"constrain":So(e,"overflow",["constrain","reject"],"constrain")}function Ri(e){return e===void 0?"compatible":So(e,"disambiguation",["compatible","earlier","later","reject"],"compatible")}function Ir(e,t){return So(e,"roundingMode",["ceil","floor","expand","trunc","halfCeil","halfFloor","halfExpand","halfTrunc","halfEven"],t)}function Vn(e,t){return e===void 0?t:So(e,"offset",["prefer","use","ignore","reject"],t)}function Gs(e){return So(e,"calendarName",["auto","always","never","critical"],"auto")}function Xi(e){let t=e.roundingIncrement;if(t===void 0)return 1;if(t=Li(t),!Fe(t))throw new RangeError("roundingIncrement must be finite");const r=Go(t);if(r<1||r>1e9)throw new RangeError(`roundingIncrement must be at least 1 and at most 1e9, not ${t}`);return r}function Qi(e,t,r){const o=r?t:t-1;if(e>o)throw new RangeError(`roundingIncrement must be at least 1 and less than ${o}, not ${e}`);if(t%e!=0)throw new RangeError(`Rounding increment must divide evenly into ${t}`)}function Zs(e){const t=e.fractionalSecondDigits;if(t===void 0)return"auto";if(typeof t!="number"){if(Re(t)!=="auto")throw new RangeError(`fractionalSecondDigits must be 'auto' or 0 through 9, not ${t}`);return"auto"}const r=We(t);if(!Fe(r)||r<0||r>9)throw new RangeError(`fractionalSecondDigits must be 'auto' or 0 through 9, not ${t}`);return r}function Ks(e,t){switch(e){case"minute":return{precision:"minute",unit:"minute",increment:1};case"second":return{precision:0,unit:"second",increment:1};case"millisecond":return{precision:3,unit:"millisecond",increment:1};case"microsecond":return{precision:6,unit:"microsecond",increment:1};case"nanosecond":return{precision:9,unit:"nanosecond",increment:1}}switch(t){case"auto":return{precision:t,unit:"nanosecond",increment:1};case 0:return{precision:t,unit:"second",increment:1};case 1:case 2:case 3:return{precision:t,unit:"millisecond",increment:10**(3-t)};case 4:case 5:case 6:return{precision:t,unit:"microsecond",increment:10**(6-t)};case 7:case 8:case 9:return{precision:t,unit:"nanosecond",increment:10**(9-t)};default:throw new RangeError(`fractionalSecondDigits must be 'auto' or 0 through 9, not ${t}`)}}const oi=Symbol("~required~");function Ge(e,t,r,o,i=[]){const s=[];for(const[,h,p]of Ws)r!=="datetime"&&r!==p||s.push(h);s.push(...i);let n=o;n===oi?n=void 0:n!==void 0&&s.push(n);const a=[...s];for(const h of s){const p=Lf.get(h);p!==void 0&&a.push(p)}let l=So(e,t,a,n);if(l===void 0&&o===oi)throw new RangeError(`${t} is required`);return Bn.has(l)?Bn.get(l):l}function Sn(e){const t=e.relativeTo;if(t===void 0)return t;let r,o,i,s,n,a,l,h,p,u,f,g,b="option",y=!1;if(At(t)){if(j(t)||dt(t))return t;if(et(t))return Bi(t);u=tn(t);const w=Xt(u,["day","hour","microsecond","millisecond","minute","month","monthCode","nanosecond","second","year"]);w.push("timeZone","offset");const _=ct(t,w,[]),x=Te(null);x.overflow="constrain",{year:r,month:o,day:i,hour:s,minute:n,second:a,millisecond:l,microsecond:h,nanosecond:p}=Xs(u,_,x),g=_.offset,g===void 0&&(b="wall"),f=_.timeZone,f!==void 0&&(f=Ce(f))}else{let w,_;if({year:r,month:o,day:i,hour:s,minute:n,second:a,millisecond:l,microsecond:h,nanosecond:p,calendar:u,ianaName:w,offset:g,z:_}=Xr(Re(t)),w)f=Ce(w),_?b="exact":g||(b="wall"),y=!0;else if(_)throw new RangeError("Z designator not supported for PlainDate relativeTo; either remove the Z or add a bracketed time zone");if(u||(u="iso8601"),!mo(u))throw new RangeError(`invalid calendar identifier ${u}`);u=qr(u)}return f===void 0?fr(r,o,i,u):fe(Yn(r,o,i,s,n,a,l,h,p,b,b==="option"?$o(g):0,f,"compatible","reject",y),f,u)}function gl(e,t,r,o,i,s,n,a,l,h){for(const[p,u]of[["years",e],["months",t],["weeks",r],["days",o],["hours",i],["minutes",s],["seconds",n],["milliseconds",a],["microseconds",l],["nanoseconds",h]])if(u!==0)return Bn.get(p);return"nanosecond"}function ii(e,t){return xd.indexOf(e)>xd.indexOf(t)?t:e}function ct(e,t,r,{emptySourceErrorMessage:o}={emptySourceErrorMessage:"no supported properties found"}){const i=Te(null);let s=!1;t.sort();for(const n of t){let a=e[n];if(a!==void 0)s=!0,_d.has(n)&&(a=_d.get(n)(a)),i[n]=a;else if(r!=="partial"){if($f.call(r,n))throw new TypeError(`required property '${n}' missing or undefined`);a=Ff.get(n),i[n]=a}}if(r==="partial"&&!s)throw new TypeError(o);return i}function jn(e,t="complete"){const r=["hour","microsecond","millisecond","minute","nanosecond","second"],o=ct(e,r,"partial",{emptySourceErrorMessage:"invalid time-like"}),i={};for(const s of r){const n=Of(o,s);n!==void 0?i[s]=n.value:t==="complete"&&(i[s]=0)}return i}function wt(e,t){let r=e;if(At(r)){if(dt(r))return r;if(j(r)&&(Gt(t),r=ir(c(r,vt),c(r,xe),c(r,E))),et(r))return Gt(t),fr(c(r,L),c(r,N),c(r,U),c(r,E));const l=tn(r);return po(l,ct(r,Xt(l,["day","month","monthCode","year"]),[]),t)}Gt(t);let{year:o,month:i,day:s,calendar:n,z:a}=function(h){return Xr(h)}(Re(r));if(a)throw new RangeError("Z designator not supported for PlainDate");if(n||(n="iso8601"),!mo(n))throw new RangeError(`invalid calendar identifier ${n}`);return n=qr(n),fr(o,i,s,n)}function Xs(e,t,r){let{hour:o,minute:i,second:s,millisecond:n,microsecond:a,nanosecond:l}=jn(t);const h=Gt(r),p=po(e,t,r),u=c(p,L),f=c(p,N),g=c(p,U);return{hour:o,minute:i,second:s,millisecond:n,microsecond:a,nanosecond:l}=fa(o,i,s,n,a,l,h),{year:u,month:f,day:g,hour:o,minute:i,second:s,millisecond:n,microsecond:a,nanosecond:l}}function Zo(e,t){let r,o,i,s,n,a,l,h,p,u;if(At(e)){if(et(e))return e;if(j(e))return Gt(t),ir(c(e,vt),c(e,xe),c(e,E));if(dt(e))return Gt(t),He(c(e,L),c(e,N),c(e,U),0,0,0,0,0,0,c(e,E));u=tn(e);const f=ct(e,Xt(u,["day","hour","microsecond","millisecond","minute","month","monthCode","nanosecond","second","year"]),[]);({year:r,month:o,day:i,hour:s,minute:n,second:a,millisecond:l,microsecond:h,nanosecond:p}=Xs(u,f,t))}else{let f;if(Gt(t),{year:r,month:o,day:i,hour:s,minute:n,second:a,millisecond:l,microsecond:h,nanosecond:p,calendar:u,z:f}=function(b){return Xr(b)}(Re(e)),f)throw new RangeError("Z designator not supported for PlainDateTime");if(xc(r,o,i,s,n,a,l,h,p),u||(u="iso8601"),!mo(u))throw new RangeError(`invalid calendar identifier ${u}`);u=qr(u)}return He(r,o,i,s,n,a,l,h,p,u)}function Di(e){if(Ut(e))return e;let{years:t,months:r,weeks:o,days:i,hours:s,minutes:n,seconds:a,milliseconds:l,microseconds:h,nanoseconds:p}=ui(e);return new(A("%Temporal.Duration%"))(t,r,o,i,s,n,a,l,h,p)}function Sr(e){if(re(e))return e;if(j(e))return new(A("%Temporal.Instant%"))(c(e,K));const t=Nf(Re(e));return new(A("%Temporal.Instant%"))(t)}function $d(e,t){let r=e;if(At(r)){if(ne(r))return r;let a,l;if(le(r,E))a=c(r,E),l=!1;else{let p=r.calendar;l=p===void 0,p===void 0&&(p="iso8601"),a=Ze(p)}const h=ct(r,Xt(a,["day","month","monthCode","year"]),[]);return l&&h.month!==void 0&&h.monthCode===void 0&&h.year===void 0&&(h.year=1972),Ni(a,h,t)}Gt(t);let{month:o,day:i,referenceISOYear:s,calendar:n}=uc(Re(r));if(n===void 0&&(n="iso8601"),!mo(n))throw new RangeError(`invalid calendar identifier ${n}`);return n=qr(n),s===void 0?(Hr(1972,o,i),Fs(o,i,n)):Ni(n,Fs(o,i,n,s))}function lo(e,t="constrain"){let r,o,i,s,n,a,l=e;if(At(l)){if(Vt(l))return l;if(j(l)&&(l=ir(c(l,vt),c(l,xe),c(l,E))),et(l))return new(A("%Temporal.PlainTime%"))(c(l,rt),c(l,ot),c(l,it),c(l,st),c(l,nt),c(l,at));({hour:r,minute:o,second:i,millisecond:s,microsecond:n,nanosecond:a}=jn(l)),{hour:r,minute:o,second:i,millisecond:s,microsecond:n,nanosecond:a}=fa(r,o,i,s,n,a,t)}else({hour:r,minute:o,second:i,millisecond:s,microsecond:n,nanosecond:a}=function(p){const u=_f.exec(p);let f,g,b,y,w,_,x;if(u){f=Kt(u[1]),g=Kt(u[2]||u[5]),b=Kt(u[3]||u[6]),b===60&&(b=59);const T=(u[4]||u[7])+"000000000";y=Kt(T.slice(0,3)),w=Kt(T.slice(3,6)),_=Kt(T.slice(6,9)),x=u[14];for(const[,C,k,D]of x.matchAll(Fo))if(k!=="u-ca"&&C==="!")throw new RangeError(`Unrecognized annotation: !${k}=${D}`);if(u[8])throw new RangeError("Z designator not supported for PlainTime")}else{let T,C;if({hasTime:C,hour:f,minute:g,second:b,millisecond:y,microsecond:w,nanosecond:_,z:T}=Xr(p),!C)throw new RangeError(`time is missing in string: ${p}`);if(T)throw new RangeError("Z designator not supported for PlainTime")}if(/[tT ][0-9][0-9]/.test(p))return{hour:f,minute:g,second:b,millisecond:y,microsecond:w,nanosecond:_};try{const{month:T,day:C}=uc(p);Hr(1972,T,C)}catch{try{const{year:T,month:C}=hc(p);Hr(T,C,1)}catch{return{hour:f,minute:g,second:b,millisecond:y,microsecond:w,nanosecond:_}}}throw new RangeError(`invalid ISO 8601 time-only string ${p}; may need a T prefix`)}(Re(l))),Ea(r,o,i,s,n,a);return new(A("%Temporal.PlainTime%"))(r,o,i,s,n,a)}function ws(e,t){if(At(e)){if(ft(e))return e;const n=tn(e);return ni(n,ct(e,Xt(n,["month","monthCode","year"]),[]),t)}Gt(t);let{year:r,month:o,referenceISODay:i,calendar:s}=hc(Re(e));if(s===void 0&&(s="iso8601"),!mo(s))throw new RangeError(`invalid calendar identifier ${s}`);return s=qr(s),i===void 0?(Hr(r,o,1),Ls(r,o,s)):ni(s,Ls(r,o,s,i))}function Yn(e,t,r,o,i,s,n,a,l,h,p,u,f,g,b){const y=new(A("%Temporal.PlainDateTime%"))(e,t,r,o,i,s,n,a,l);if(h==="wall"||g==="ignore")return c(Le(u,y,f),K);if(h==="exact"||g==="use"){const _=Eo(e,t,r,o,i,s,n,a,l);if(_===null)throw new RangeError("ZonedDateTime outside of supported range");return d.subtract(_,d.BigInt(p))}const w=Hn(u,y);for(const _ of w){const x=Or(u,_),T=d.toNumber(er(d.BigInt(x),ou,"halfExpand"));if(x===p||b&&T===p)return c(_,K)}if(g==="reject"){const _=ka(p),x=lr(u)?c(u,Br):"time zone";throw new RangeError(`Offset ${_} is invalid for ${y.toString()} in ${x}`)}return c(mu(w,u,y,f),K)}function _s(e,t){let r,o,i,s,n,a,l,h,p,u,f,g,b,y,w=!1,_="option";if(At(e)){if(j(e))return e;g=tn(e);const T=Xt(g,["day","hour","microsecond","millisecond","minute","month","monthCode","nanosecond","second","year"]);T.push("timeZone","offset");const C=ct(e,T,["timeZone"]);u=Ce(C.timeZone),f=C.offset,f===void 0&&(_="wall"),b=Ri(t),y=Vn(t,"reject"),{year:r,month:o,day:i,hour:s,minute:n,second:a,millisecond:l,microsecond:h,nanosecond:p}=Xs(g,C,t)}else{let T,C;if({year:r,month:o,day:i,hour:s,minute:n,second:a,millisecond:l,microsecond:h,nanosecond:p,ianaName:T,offset:f,z:C,calendar:g}=function(D){const S=Xr(D);if(!S.ianaName)throw new RangeError("Temporal.ZonedDateTime requires a time zone ID in brackets");return S}(Re(e)),u=Ce(T),C?_="exact":f||(_="wall"),g||(g="iso8601"),!mo(g))throw new RangeError(`invalid calendar identifier ${g}`);g=qr(g),w=!0,b=Ri(t),y=Vn(t,"reject"),Gt(t)}let x=0;return _==="option"&&(x=$o(f)),fe(Yn(r,o,i,s,n,a,l,h,p,_,x,u,b,y,w),u,g)}function au(e,t,r,o,i){Hr(t,r,o),Tu(t,r,o),Kr(e),lt(e,L,t),lt(e,N,r),lt(e,U,o),lt(e,E,i),lt(e,Hh,!0)}function fr(e,t,r,o="iso8601"){const i=A("%Temporal.PlainDate%"),s=Te(i.prototype);return au(s,e,t,r,o),s}function lu(e,t,r,o,i,s,n,a,l,h,p){xc(t,r,o,i,s,n,a,l,h),ku(t,r,o,i,s,n,a,l,h),Kr(e),lt(e,L,t),lt(e,N,r),lt(e,U,o),lt(e,rt,i),lt(e,ot,s),lt(e,it,n),lt(e,st,a),lt(e,nt,l),lt(e,at,h),lt(e,E,p)}function He(e,t,r,o,i,s,n,a,l,h="iso8601"){const p=A("%Temporal.PlainDateTime%"),u=Te(p.prototype);return lu(u,e,t,r,o,i,s,n,a,l,h),u}function cu(e,t,r,o,i){Hr(i,t,r),Tu(i,t,r),Kr(e),lt(e,N,t),lt(e,U,r),lt(e,L,i),lt(e,E,o),lt(e,Wh,!0)}function Fs(e,t,r="iso8601",o=1972){const i=A("%Temporal.PlainMonthDay%"),s=Te(i.prototype);return cu(s,e,t,r,o),s}function du(e,t,r,o,i){Hr(t,r,i),function(n,a){ge(n,Ln,Rn),n===Ln?ge(a,4,12):n===Rn&&ge(a,1,9)}(t,r),Kr(e),lt(e,L,t),lt(e,N,r),lt(e,U,i),lt(e,E,o),lt(e,qh,!0)}function Ls(e,t,r="iso8601",o=1){const i=A("%Temporal.PlainYearMonth%"),s=Te(i.prototype);return du(s,e,t,r,o),s}function hu(e,t,r,o){Ho(t),Kr(e),lt(e,K,t),lt(e,vt,r),lt(e,E,o);const i=new(A("%Temporal.Instant%"))(c(e,K));lt(e,xe,i)}function fe(e,t,r="iso8601"){const o=A("%Temporal.ZonedDateTime%"),i=Te(o.prototype);return hu(i,e,t,r),i}function Xt(e,t){if(typeof e=="string"){const i=new(A("%Temporal.Calendar%"))(e);return H(A("%Temporal.Calendar.prototype.fields%"),i,[t])}const r=H(gt(e,"fields"),e,[t]),o=[];for(const i of r){if(typeof i!="string")throw new TypeError("bad return from calendar.fields()");Jh.call(o,i)}return o}function si(e,t,r){if(typeof e=="string"){const i=new(A("%Temporal.Calendar%"))(e);return H(A("%Temporal.Calendar.prototype.mergeFields%"),i,[t,r])}const o=H(gt(e,"mergeFields"),e,[t,r]);if(!At(o))throw new TypeError("bad return from calendar.mergeFields()");return o}function me(e,t,r,o,i){let s=i;if(typeof e=="string"){const a=new(A("%Temporal.Calendar%"))(e);return H(A("%Temporal.Calendar.prototype.dateAdd%"),a,[t,r,o])}s===void 0&&(s=gt(e,"dateAdd"));const n=pa(s,e,[t,r,o]);if(!dt(n))throw new TypeError("invalid result");return n}function ko(e,t,r,o,i){let s=i;if(typeof e=="string"){const a=new(A("%Temporal.Calendar%"))(e);return H(A("%Temporal.Calendar.prototype.dateUntil%"),a,[t,r,o])}s===void 0&&(s=gt(e,"dateUntil"));const n=pa(s,e,[t,r,o]);if(!Ut(n))throw new TypeError("invalid result");return n}function ma(e,t){if(typeof e=="string"){const o=new(A("%Temporal.Calendar%"))(e);return H(A("%Temporal.Calendar.prototype.year%"),o,[t])}let r=H(gt(e,"year"),e,[t]);if(typeof r!="number")throw new TypeError("calendar year result must be an integer");if(!nr(r))throw new RangeError("calendar year result must be an integer");return r}function ga(e,t){if(typeof e=="string"){const o=new(A("%Temporal.Calendar%"))(e);return H(A("%Temporal.Calendar.prototype.month%"),o,[t])}let r=H(gt(e,"month"),e,[t]);if(typeof r!="number")throw new TypeError("calendar month result must be a positive integer");if(!nr(r)||r<1)throw new RangeError("calendar month result must be a positive integer");return r}function Qs(e,t){if(typeof e=="string"){const o=new(A("%Temporal.Calendar%"))(e);return H(A("%Temporal.Calendar.prototype.monthCode%"),o,[t])}let r=H(gt(e,"monthCode"),e,[t]);if(typeof r!="string")throw new TypeError("calendar monthCode result must be a string");return r}function Js(e,t){if(typeof e=="string"){const o=new(A("%Temporal.Calendar%"))(e);return H(A("%Temporal.Calendar.prototype.day%"),o,[t])}const r=H(gt(e,"day"),e,[t]);if(typeof r!="number")throw new TypeError("calendar day result must be a positive integer");if(!nr(r)||r<1)throw new RangeError("calendar day result must be a positive integer");return r}function ba(e,t){if(typeof e=="string"){const o=new(A("%Temporal.Calendar%"))(e);return H(A("%Temporal.Calendar.prototype.era%"),o,[t])}let r=H(gt(e,"era"),e,[t]);if(r===void 0)return r;if(typeof r!="string")throw new TypeError("calendar era result must be a string or undefined");return r}function ya(e,t){if(typeof e=="string"){const o=new(A("%Temporal.Calendar%"))(e);return H(A("%Temporal.Calendar.prototype.eraYear%"),o,[t])}let r=H(gt(e,"eraYear"),e,[t]);if(r===void 0)return r;if(typeof r!="number")throw new TypeError("calendar eraYear result must be an integer or undefined");if(!nr(r))throw new RangeError("calendar eraYear result must be an integer or undefined");return r}function pc(e,t){if(typeof e=="string"){const o=new(A("%Temporal.Calendar%"))(e);return H(A("%Temporal.Calendar.prototype.dayOfWeek%"),o,[t])}const r=H(gt(e,"dayOfWeek"),e,[t]);if(typeof r!="number")throw new TypeError("calendar dayOfWeek result must be a positive integer");if(!nr(r)||r<1)throw new RangeError("calendar dayOfWeek result must be a positive integer");return r}function fc(e,t){if(typeof e=="string"){const o=new(A("%Temporal.Calendar%"))(e);return H(A("%Temporal.Calendar.prototype.dayOfYear%"),o,[t])}const r=H(gt(e,"dayOfYear"),e,[t]);if(typeof r!="number")throw new TypeError("calendar dayOfYear result must be a positive integer");if(!nr(r)||r<1)throw new RangeError("calendar dayOfYear result must be a positive integer");return r}function mc(e,t){if(typeof e=="string"){const o=new(A("%Temporal.Calendar%"))(e);return H(A("%Temporal.Calendar.prototype.weekOfYear%"),o,[t])}const r=H(gt(e,"weekOfYear"),e,[t]);if(typeof r!="number")throw new TypeError("calendar weekOfYear result must be a positive integer");if(!nr(r)||r<1)throw new RangeError("calendar weekOfYear result must be a positive integer");return r}function gc(e,t){if(typeof e=="string"){const o=new(A("%Temporal.Calendar%"))(e);return H(A("%Temporal.Calendar.prototype.yearOfWeek%"),o,[t])}const r=H(gt(e,"yearOfWeek"),e,[t]);if(typeof r!="number")throw new TypeError("calendar yearOfWeek result must be an integer");if(!nr(r))throw new RangeError("calendar yearOfWeek result must be an integer");return r}function bc(e,t){if(typeof e=="string"){const o=new(A("%Temporal.Calendar%"))(e);return H(A("%Temporal.Calendar.prototype.daysInWeek%"),o,[t])}const r=H(gt(e,"daysInWeek"),e,[t]);if(typeof r!="number")throw new TypeError("calendar daysInWeek result must be a positive integer");if(!nr(r)||r<1)throw new RangeError("calendar daysInWeek result must be a positive integer");return r}function va(e,t){if(typeof e=="string"){const o=new(A("%Temporal.Calendar%"))(e);return H(A("%Temporal.Calendar.prototype.daysInMonth%"),o,[t])}const r=H(gt(e,"daysInMonth"),e,[t]);if(typeof r!="number")throw new TypeError("calendar daysInMonth result must be a positive integer");if(!nr(r)||r<1)throw new RangeError("calendar daysInMonth result must be a positive integer");return r}function wa(e,t){if(typeof e=="string"){const o=new(A("%Temporal.Calendar%"))(e);return H(A("%Temporal.Calendar.prototype.daysInYear%"),o,[t])}const r=H(gt(e,"daysInYear"),e,[t]);if(typeof r!="number")throw new TypeError("calendar daysInYear result must be a positive integer");if(!nr(r)||r<1)throw new RangeError("calendar daysInYear result must be a positive integer");return r}function _a(e,t){if(typeof e=="string"){const o=new(A("%Temporal.Calendar%"))(e);return H(A("%Temporal.Calendar.prototype.monthsInYear%"),o,[t])}const r=H(gt(e,"monthsInYear"),e,[t]);if(typeof r!="number")throw new TypeError("calendar monthsInYear result must be a positive integer");if(!nr(r)||r<1)throw new RangeError("calendar monthsInYear result must be a positive integer");return r}function xa(e,t){if(typeof e=="string"){const o=new(A("%Temporal.Calendar%"))(e);return H(A("%Temporal.Calendar.prototype.inLeapYear%"),o,[t])}const r=H(gt(e,"inLeapYear"),e,[t]);if(typeof r!="boolean")throw new TypeError("calendar inLeapYear result must be a boolean");return r}function Ze(e){if(At(e)){if(le(e,E))return c(e,E);if(!function(i){return!!Nt(i)||"dateAdd"in i&&"dateFromFields"in i&&"dateUntil"in i&&"day"in i&&"dayOfWeek"in i&&"dayOfYear"in i&&"daysInMonth"in i&&"daysInWeek"in i&&"daysInYear"in i&&"fields"in i&&"id"in i&&"inLeapYear"in i&&"mergeFields"in i&&"month"in i&&"monthCode"in i&&"monthDayFromFields"in i&&"monthsInYear"in i&&"weekOfYear"in i&&"year"in i&&"yearMonthFromFields"in i&&"yearOfWeek"in i}(e))throw new TypeError("expected a Temporal.Calendar or object implementing the Temporal.Calendar protocol");return e}const t=Re(e);if(mo(t))return qr(t);let r;try{({calendar:r}=Xr(t))}catch{try{({calendar:r}=hc(t))}catch{({calendar:r}=uc(t))}}if(r||(r="iso8601"),!mo(r))throw new RangeError(`invalid calendar identifier ${r}`);return qr(r)}function tn(e){if(le(e,E))return c(e,E);const{calendar:t}=e;return t===void 0?"iso8601":Ze(t)}function be(e){if(typeof e=="string")return e;const t=e.id;if(typeof t!="string")throw new TypeError("calendar.id should be a string");return t}function Ji(e){return At(e)?e:new(A("%Temporal.Calendar%"))(e)}function en(e,t){return e===t?!0:be(e)===be(t)}function Ca(e,t,r){if(e===t)return;const o=be(e),i=be(t);if(o!==i)throw new RangeError(`cannot ${r} of ${o} and ${i} calendars`)}function uu(e,t){if(e===t)return t;const r=be(e),o=be(t);if(r===o||r==="iso8601")return t;if(o==="iso8601")return e;throw new RangeError("irreconcilable calendars")}function po(e,t,r,o){if(typeof e=="string"){const s=new(A("%Temporal.Calendar%"))(e);return H(A("%Temporal.Calendar.prototype.dateFromFields%"),s,[t,r])}const i=H(o??gt(e,"dateFromFields"),e,[t,r]);if(!dt(i))throw new TypeError("invalid result");return i}function ni(e,t,r){if(typeof e=="string"){const i=new(A("%Temporal.Calendar%"))(e);return H(A("%Temporal.Calendar.prototype.yearMonthFromFields%"),i,[t,r])}let o=H(gt(e,"yearMonthFromFields"),e,[t,r]);if(!ft(o))throw new TypeError("invalid result");return o}function Ni(e,t,r){if(typeof e=="string"){const i=new(A("%Temporal.Calendar%"))(e);return H(A("%Temporal.Calendar.prototype.monthDayFromFields%"),i,[t,r])}let o=H(gt(e,"monthDayFromFields"),e,[t,r]);if(!ne(o))throw new TypeError("invalid result");return o}function Ce(e){if(At(e)){if(j(e))return c(e,vt);if(!function(r){return!!lr(r)||"getOffsetNanosecondsFor"in r&&"getPossibleInstantsFor"in r&&"id"in r}(e))throw new TypeError("expected a Temporal.TimeZone or object implementing the Temporal.TimeZone protocol");return e}return Rf(Re(e))}function Rs(e){if(typeof e=="string")return e;const t=e.id;if(typeof t!="string")throw new TypeError("timeZone.id should be a string");return t}function pu(e){return At(e)?e:new(A("%Temporal.TimeZone%"))(e)}function fu(e,t){return e===t?!0:Rs(e)===Rs(t)}function Bi(e){return fr(c(e,L),c(e,N),c(e,U),c(e,E))}function yc(e){return new(A("%Temporal.PlainTime%"))(c(e,rt),c(e,ot),c(e,it),c(e,st),c(e,nt),c(e,at))}function Or(e,t,r){if(typeof e=="string"){const i=new(A("%Temporal.TimeZone%"))(e);return H(A("%Temporal.TimeZone.prototype.getOffsetNanosecondsFor%"),i,[t])}const o=H(r??gt(e,"getOffsetNanosecondsFor"),e,[t]);if(typeof o!="number")throw new TypeError("bad return from getOffsetNanosecondsFor");if(!nr(o)||Ot(o)>=864e11)throw new RangeError("out-of-range return from getOffsetNanosecondsFor");return o}function bl(e,t){return ka(Or(e,t))}function ir(e,t,r){const o=c(t,K),i=Or(e,t);let{year:s,month:n,day:a,hour:l,minute:h,second:p,millisecond:u,microsecond:f,nanosecond:g}=bu(o);return{year:s,month:n,day:a,hour:l,minute:h,second:p,millisecond:u,microsecond:f,nanosecond:g}=wc(s,n,a,l,h,p,u,f,g+i),He(s,n,a,l,h,p,u,f,g,r)}function Le(e,t,r){return mu(Hn(e,t),e,t,r)}function mu(e,t,r,o){const i=A("%Temporal.Instant%"),s=e.length;if(s===1)return e[0];if(s)switch(o){case"compatible":case"earlier":return e[0];case"later":return e[s-1];case"reject":throw new RangeError("multiple instants found")}const n=c(r,L),a=c(r,N),l=c(r,U),h=c(r,rt),p=c(r,ot),u=c(r,it),f=c(r,st),g=c(r,nt),b=c(r,at),y=Eo(n,a,l,h,p,u,f,g,b);if(y===null)throw new RangeError("DateTime outside of supported range");const w=new i(d.subtract(y,Yr)),_=new i(d.add(y,Yr)),x=Or(t,w),T=Or(t,_)-x;switch(o){case"earlier":{const C=c(r,E),k=A("%Temporal.PlainDateTime%"),D=_l(n,a,l,h,p,u,f,g,b,C,0,0,0,0,0,0,0,0,0,-T,void 0);return Hn(t,new k(D.year,D.month,D.day,D.hour,D.minute,D.second,D.millisecond,D.microsecond,D.nanosecond,C))[0]}case"compatible":case"later":{const C=c(r,E),k=A("%Temporal.PlainDateTime%"),D=_l(n,a,l,h,p,u,f,g,b,C,0,0,0,0,0,0,0,0,0,T,void 0),S=Hn(t,new k(D.year,D.month,D.day,D.hour,D.minute,D.second,D.millisecond,D.microsecond,D.nanosecond,C));return S[S.length-1]}case"reject":throw new RangeError("no such instant found")}}function Hn(e,t,r){if(typeof e=="string"){const s=new(A("%Temporal.TimeZone%"))(e);return H(A("%Temporal.TimeZone.prototype.getPossibleInstantsFor%"),s,[t])}const o=H(r??gt(e,"getPossibleInstantsFor"),e,[t]),i=[];for(const s of o){if(!re(s))throw new TypeError("bad return from getPossibleInstantsFor");Jh.call(i,s)}return i}function pi(e){let t;return e<0||e>9999?t=(e<0?"-":"+")+`000000${Ot(e)}`.slice(-6):t=`0000${e}`.slice(-4),t}function Mt(e){return`00${e}`.slice(-2)}function Ta(e,t,r,o,i){if(i==="minute")return"";const s=`:${Mt(e)}`;let n,a=1e6*t+1e3*r+o;if(i==="auto"){if(a===0)return s;for(n=`${a}`.padStart(9,"0");n[n.length-1]==="0";)n=n.slice(0,-1)}else{if(i===0)return s;n=`${a}`.padStart(9,"0").slice(0,i)}return`${s}.${n}`}function Ed(e,t,r){let o=t;o===void 0&&(o="UTC");const i=ir(o,e,"iso8601"),s=pi(c(i,L)),n=Mt(c(i,N)),a=Mt(c(i,U)),l=Mt(c(i,rt)),h=Mt(c(i,ot)),p=Ta(c(i,it),c(i,st),c(i,nt),c(i,at),r);let u="Z";return t!==void 0&&(u=gu(Or(o,e))),`${s}-${n}-${a}T${l}:${h}${p}${u}`}function qa(e,t="auto",r){function o(I){return I<=If?I.toString(10):d.BigInt(I).toString(10)}const i=c(e,De),s=c(e,ce),n=c(e,Ve),a=c(e,Se),l=c(e,Ie),h=c(e,Oe);let p=c(e,Ae),u=c(e,ze),f=c(e,Me),g=c(e,Pe);const b=jr(i,s,n,a,l,h,p,u,f,g);if(r){const{unit:I,increment:P,roundingMode:X}=r;({seconds:p,milliseconds:u,microseconds:f,nanoseconds:g}=fo(0,0,0,0,0,0,p,u,f,g,P,I,X))}const y=[];i&&y.push(`${o(Ot(i))}Y`),s&&y.push(`${o(Ot(s))}M`),n&&y.push(`${o(Ot(n))}W`),a&&y.push(`${o(Ot(a))}D`);const w=[];l&&w.push(`${o(Ot(l))}H`),h&&w.push(`${o(Ot(h))}M`);const _=[];let x,T,C,k,D=Ui(0,0,0,p,u,f,g,0);({quotient:D,remainder:x}=qt(D,mt)),{quotient:D,remainder:T}=qt(D,mt),{quotient:k,remainder:C}=qt(D,mt);const S=1e6*Ot(d.toNumber(C))+1e3*Ot(d.toNumber(T))+Ot(d.toNumber(x));let O;if(t==="auto"){if(S!==0)for(O=`${S}`.padStart(9,"0");O[O.length-1]==="0";)O=O.slice(0,-1)}else t!==0&&(O=`${S}`.padStart(9,"0").slice(0,t));return O&&_.unshift(".",O),d.equal(k,jt)&&!_.length&&t==="auto"||_.unshift(Dr(k).toString()),_.length&&w.push(`${_.join("")}S`),w.length&&w.unshift("T"),y.length||w.length?`${b<0?"-":""}P${y.join("")}${w.join("")}`:"PT0S"}function Dd(e,t="auto"){return`${pi(c(e,L))}-${Mt(c(e,N))}-${Mt(c(e,U))}${cc(c(e,E),t)}`}function Sd(e,t,r="auto",o){let i=c(e,L),s=c(e,N),n=c(e,U),a=c(e,rt),l=c(e,ot),h=c(e,it),p=c(e,st),u=c(e,nt),f=c(e,at);if(o){const{unit:g,increment:b,roundingMode:y}=o;({year:i,month:s,day:n,hour:a,minute:l,second:h,millisecond:p,microsecond:u,nanosecond:f}=$c(i,s,n,a,l,h,p,u,f,b,g,y))}return`${pi(i)}-${Mt(s)}-${Mt(n)}T${Mt(a)}:${Mt(l)}${Ta(h,p,u,f,t)}${cc(c(e,E),r)}`}function Id(e,t="auto"){let r=`${Mt(c(e,N))}-${Mt(c(e,U))}`;const o=be(c(e,E));(t==="always"||t==="critical"||o!=="iso8601")&&(r=`${pi(c(e,L))}-${r}`);const i=dc(o,t);return i&&(r+=i),r}function Od(e,t="auto"){let r=`${pi(c(e,L))}-${Mt(c(e,N))}`;const o=be(c(e,E));(t==="always"||t==="critical"||o!=="iso8601")&&(r+=`-${Mt(c(e,U))}`);const i=dc(o,t);return i&&(r+=i),r}function Ad(e,t,r="auto",o="auto",i="auto",s){let n=c(e,xe);if(s){const{unit:p,increment:u,roundingMode:f}=s,g=Gn(c(e,K),u,p,f);n=new(A("%Temporal.Instant%"))(g)}const a=c(e,vt),l=ir(a,n,"iso8601");let h=`${pi(c(l,L))}-${Mt(c(l,N))}-${Mt(c(l,U))}T${Mt(c(l,rt))}:${Mt(c(l,ot))}${Ta(c(l,it),c(l,st),c(l,nt),c(l,at),t)}`;return i!=="never"&&(h+=gu(Or(a,n))),o!=="never"&&(h+=`[${o==="critical"?"!":""}${Rs(a)}]`),h+=cc(c(e,E),r),h}function Ti(e){return Au.test(qs(e))}function $o(e){const t=Au.exec(qs(e));if(!t)throw new RangeError(`invalid time zone offset: ${e}`);return(t[1]==="-"||t[1]==="−"?-1:1)*(1e9*(60*(60*+t[2]+ +(t[3]||0))+ +(t[4]||0))+ +((t[5]||0)+"000000000").slice(0,9))}function vc(e){return Ti(e)?ka($o(e)):nu(qs(e)).resolvedOptions().timeZone}function co(e,t){const{year:r,month:o,day:i,hour:s,minute:n,second:a,millisecond:l,microsecond:h,nanosecond:p}=yu(e,t),u=r%400,f=(r-u)/400,g=d.multiply(d.BigInt(146097),Yr),b=Eo(u,o,i,s,n,a,l,h,p),y=d.add(b,d.multiply(g,d.BigInt(f)));return d.toNumber(d.subtract(y,t))}function ka(e){const t=e<0?"-":"+",r=Ot(e),o=r%1e9,i=We(r/1e9)%60,s=We(r/6e10)%60,n=Mt(We(r/36e11)),a=Mt(s),l=Mt(i);let h="";if(o){let p=`${o}`.padStart(9,"0");for(;p[p.length-1]==="0";)p=p.slice(0,-1);h=`:${l}.${p}`}else i&&(h=`:${l}`);return`${t}${n}:${a}${h}`}function gu(e){let t=d.toNumber(er(d.BigInt(e),ou,"halfExpand"));const r=t<0?"-":"+";t=Ot(t);const o=t/6e10%60;return`${r}${Mt(We(t/36e11))}:${Mt(o)}`}function Eo(e,t,r,o,i,s,n,a,l){const h=new Date;h.setUTCHours(o,i,s,n),h.setUTCFullYear(e,t-1,r);const p=h.getTime();if(ua(p))return null;let u=d.multiply(d.BigInt(p),hr);return u=d.add(u,d.multiply(d.BigInt(a),mt)),u=d.add(u,d.BigInt(l)),d.lessThan(u,Ps)||d.greaterThan(u,Fi)?null:u}function bu(e){const{quotient:t,remainder:r}=qt(e,hr);let o=d.toNumber(t),i=d.toNumber(r);i<0&&(i+=1e6,o-=1);const s=We(i/1e3)%1e3,n=i%1e3,a=new Date(o);return{epochMilliseconds:o,year:a.getUTCFullYear(),month:a.getUTCMonth()+1,day:a.getUTCDate(),hour:a.getUTCHours(),minute:a.getUTCMinutes(),second:a.getUTCSeconds(),millisecond:a.getUTCMilliseconds(),microsecond:s,nanosecond:n}}function yu(e,t){const{epochMilliseconds:r,millisecond:o,microsecond:i,nanosecond:s}=bu(t),{year:n,month:a,day:l,hour:h,minute:p,second:u}=function(g,b){const y=nu(g).format(new Date(b));return function(_){const x=_.split(/[^\w]+/);if(x.length!==7)throw new RangeError(`expected 7 parts in "${_}`);const T=+x[0],C=+x[1];let k=+x[2];const D=x[3].toUpperCase();if(D==="B"||D==="BC")k=1-k;else if(D!=="A"&&D!=="AD")throw new RangeError(`Unknown era ${D} in "${_}`);let S=+x[4];S===24&&(S=0);const O=+x[5],I=+x[6];if(!(Fe(k)&&Fe(T)&&Fe(C)&&Fe(S)&&Fe(O)&&Fe(I)))throw new RangeError(`Invalid number in "${_}`);return{year:k,month:T,day:C,hour:S,minute:O,second:I}}(y)}(e,r);return wc(n,a,l,h,p,u,o,i,s)}function zd(e,t){return d.lessThan(e,t)?t:e}function vu(){return d.add(Dc(),Mf)}function wu(e,t){if(d.lessThan(t,$i))return wu(e,$i);const r=d.add(t,iu),o=zd(vu(),r);let i=zd($i,t);const s=co(e,i);let n=i,a=s;for(;s===a&&d.lessThan(d.BigInt(i),o);){if(n=d.add(i,su),d.greaterThan(n,Fi))return null;a=co(e,n),s===a&&(i=n)}return s===a?null:zu(l=>co(e,l),i,n,s,a)}function yl(e,t){const r=vu(),o=d.greaterThan(t,r),i=o?d.subtract(t,iu):$i;if(e==="Africa/Casablanca"||e==="Africa/El_Aaiun"){const h=c(Sr("2088-01-01T00Z"),K);if(d.lessThan(h,t))return yl(e,h)}let s=d.subtract(t,Zi);if(d.lessThan(s,$i))return null;const n=co(e,s);let a=s,l=n;for(;n===l&&d.greaterThan(s,i);){if(a=d.subtract(s,su),d.lessThan(a,$i))return null;l=co(e,a),n===l&&(s=a)}if(n===l){if(o){const h=d.subtract(r,Yr);return yl(e,h)}return null}return zu(h=>co(e,h),a,s,l,n)}function Do(e){return e===void 0?!1:e%4==0&&(e%100!=0||e%400==0)}function ho(e,t){return{standard:[31,28,31,30,31,30,31,31,30,31,30,31],leapyear:[31,29,31,30,31,30,31,31,30,31,30,31]}[Do(e)?"leapyear":"standard"][t-1]}function vl(e,t,r){const o=t+(t<3?10:-2),i=e-(t<3?1:0),s=We(i/100),n=i-100*s,a=(r+We(2.6*o-.2)+(n+We(n/4))+(We(s/4)-2*s))%7;return a+(a<=0?7:0)}function qn(e,t,r){let o=r;for(let i=t-1;i>0;i--)o+=ho(e,i);return o}function Md(e,t,r){const o=qn(e,t,r),i=vl(e,t,r)||7,s=vl(e,1,1),n=We((o-i+10)/7);return n<1?s===5||s===6&&Do(e-1)?{week:53,year:e-1}:{week:52,year:e-1}:n===53&&(Do(e)?366:365)-o<4-i?{week:1,year:e+1}:{week:n,year:e}}function jr(e,t,r,o,i,s,n,a,l,h){for(const p of[e,t,r,o,i,s,n,a,l,h])if(p!==0)return p<0?-1:1;return 0}function In(e,t){let r=e,o=t;if(!Fe(r)||!Fe(o))throw new RangeError("infinity is out of range");return o-=1,r+=We(o/12),o%=12,o<0&&(o+=12),o+=1,{year:r,month:o}}function $a(e,t,r){let o=e,i=t,s=r;if(!Fe(s))throw new RangeError("infinity is out of range");({year:o,month:i}=In(o,i));const n=146097;if(Ot(s)>n){const h=Go(s/n);o+=400*h,s-=h*n}let a=0,l=i>2?o:o-1;for(;a=Do(l)?366:365,s<-a;)o-=1,l-=1,s+=a;for(l+=1;a=Do(l)?366:365,s>a;)o+=1,l+=1,s-=a;for(;s<1;)({year:o,month:i}=In(o,i-1)),s+=ho(o,i);for(;s>ho(o,i);)s-=ho(o,i),{year:o,month:i}=In(o,i+1);return{year:o,month:i,day:s}}function wc(e,t,r,o,i,s,n,a,l){const{deltaDays:h,hour:p,minute:u,second:f,millisecond:g,microsecond:b,nanosecond:y}=no(o,i,s,n,a,l),{year:w,month:_,day:x}=$a(e,t,r+h);return{year:w,month:_,day:x,hour:p,minute:u,second:f,millisecond:g,microsecond:b,nanosecond:y}}function no(e,t,r,o,i,s){let n,a=d.BigInt(e),l=d.BigInt(t),h=d.BigInt(r),p=d.BigInt(o),u=d.BigInt(i),f=d.BigInt(s);return{quotient:n,remainder:f}=Yo(f,mt),u=d.add(u,n),{quotient:n,remainder:u}=Yo(u,mt),p=d.add(p,n),{quotient:n,remainder:p}=Yo(p,mt),h=d.add(h,n),{quotient:n,remainder:h}=Yo(h,Ur),l=d.add(l,n),{quotient:n,remainder:l}=Yo(l,Ur),a=d.add(a,n),{quotient:n,remainder:a}=Yo(a,eu),{deltaDays:d.toNumber(n),hour:d.toNumber(a),minute:d.toNumber(l),second:d.toNumber(h),millisecond:d.toNumber(p),microsecond:d.toNumber(u),nanosecond:d.toNumber(f)}}function Ui(e,t,r,o,i,s,n,a){const l=d.BigInt(e);let h=d.BigInt(n);e!==0&&(h=d.subtract(d.BigInt(n),d.BigInt(a)));const p=d.add(d.BigInt(t),d.multiply(l,d.BigInt(24))),u=d.add(d.BigInt(r),d.multiply(p,Ur)),f=d.add(d.BigInt(o),d.multiply(u,Ur)),g=d.add(d.BigInt(i),d.multiply(f,mt)),b=d.add(d.BigInt(s),d.multiply(g,mt));return d.add(d.BigInt(h),d.multiply(b,mt))}function _c(e,t){const r=A("%Temporal.Instant%"),o=Pi(d.toNumber(e));let i=d.BigInt(e),s=864e11;if(o===0)return{days:0,nanoseconds:jt,dayLengthNs:s};if(!j(t)){let T;return{quotient:T,remainder:i}=qt(i,d.BigInt(s)),{days:d.toNumber(T),nanoseconds:i,dayLengthNs:s}}const n=c(t,K),a=c(t,xe),l=d.add(n,i),h=new r(l),p=c(t,vt),u=c(t,E),f=ir(p,a,u),g=ir(p,h,u);let{days:b}=kc(c(f,L),c(f,N),c(f,U),c(f,rt),c(f,ot),c(f,it),c(f,st),c(f,nt),c(f,at),c(g,L),c(g,N),c(g,U),c(g,rt),c(g,ot),c(g,it),c(g,st),c(g,nt),c(g,at),u,"day",Te(null)),y=ur(a,p,u,0,0,0,b,0,0,0,0,0,0),w=d.BigInt(b);if(o===1)for(;d.greaterThan(w,jt)&&d.greaterThan(y,l);)w=d.subtract(w,Zi),y=ur(a,p,u,0,0,0,d.toNumber(w),0,0,0,0,0,0);i=d.subtract(l,y);let _=!1,x=new r(y);do{const T=ur(x,p,u,0,0,0,o,0,0,0,0,0,0),C=c(x,K);s=d.toNumber(d.subtract(T,C)),_=d.greaterThanOrEqual(d.multiply(d.subtract(i,d.BigInt(s)),d.BigInt(o)),jt),_&&(i=d.subtract(i,d.BigInt(s)),x=new r(T),w=d.add(w,d.BigInt(o)))}while(_);if(!cr(w)&&wd(w)!==o)throw new RangeError("Time zone or calendar converted nanoseconds into a number of days with the opposite sign");if(!cr(i)&&wd(i)!==o)throw Nn(i)&&o===1?new Error("assert not reached"):new RangeError("Time zone or calendar ended up with a remainder of nanoseconds with the opposite sign");if(d.greaterThanOrEqual(Dr(i),Dr(d.BigInt(s))))throw new Error("assert not reached");return{days:d.toNumber(w),nanoseconds:i,dayLengthNs:Ot(s)}}function _r(e,t,r,o,i,s,n,a,l){let h=_u(e,t,r,o,i,s,n,a,l);if(h==="positive overflow"||h==="negative overflow")throw new RangeError("Duration out of range");return h}function _u(e,t,r,o,i,s,n,a,l){let h,p,u,f,g,b,y=e;if(j(l)){const S=ur(c(l,xe),c(l,vt),c(l,E),0,0,0,y,t,r,o,i,s,n),O=c(l,K);h=d.subtract(S,O)}else h=Ui(y,t,r,o,i,s,n,0);a==="year"||a==="month"||a==="week"||a==="day"?{days:y,nanoseconds:h}=_c(h,l):y=0;const w=d.lessThan(h,jt)?-1:1;switch(h=Dr(h),p=u=f=g=b=jt,a){case"year":case"month":case"week":case"day":case"hour":({quotient:p,remainder:h}=qt(h,mt)),{quotient:u,remainder:p}=qt(p,mt),{quotient:f,remainder:u}=qt(u,mt),{quotient:g,remainder:f}=qt(f,Ur),{quotient:b,remainder:g}=qt(g,Ur);break;case"minute":({quotient:p,remainder:h}=qt(h,mt)),{quotient:u,remainder:p}=qt(p,mt),{quotient:f,remainder:u}=qt(u,mt),{quotient:g,remainder:f}=qt(f,Ur);break;case"second":({quotient:p,remainder:h}=qt(h,mt)),{quotient:u,remainder:p}=qt(p,mt),{quotient:f,remainder:u}=qt(u,mt);break;case"millisecond":({quotient:p,remainder:h}=qt(h,mt)),{quotient:u,remainder:p}=qt(p,mt);break;case"microsecond":({quotient:p,remainder:h}=qt(h,mt));break;case"nanosecond":break;default:throw new Error("assert not reached")}const _=d.toNumber(b)*w,x=d.toNumber(g)*w,T=d.toNumber(f)*w,C=d.toNumber(u)*w,k=d.toNumber(p)*w,D=d.toNumber(h)*w;for(const S of[y,_,x,T,C,k,D])if(!Fe(S))return w===1?"positive overflow":"negative overflow";return{days:y,hours:_,minutes:x,seconds:T,milliseconds:C,microseconds:k,nanoseconds:D}}function _n(e,t,r,o,i,s){const n=A("%Temporal.Duration%"),a=jr(e,t,r,o,0,0,0,0,0,0);if(a===0)return{years:e,months:t,weeks:r,days:o};const l=d.BigInt(a);let h,p,u=d.BigInt(e),f=d.BigInt(t),g=d.BigInt(r),b=d.BigInt(o);s&&(p=wt(s),h=c(p,E));const y=new n(a),w=new n(0,a),_=new n(0,0,a);switch(i){case"year":break;case"month":{if(!h)throw new RangeError("a starting point is required for months balancing");let x,T;for(typeof h!="string"&&(x=gt(h,"dateAdd"),T=gt(h,"dateUntil"));!cr(u);){const C=me(h,p,y,void 0,x),k=Te(null);k.largestUnit="month";const D=ko(h,p,C,k,T),S=d.BigInt(c(D,ce));p=C,f=d.add(f,S),u=d.subtract(u,l)}}break;case"week":{if(!h)throw new RangeError("a starting point is required for weeks balancing");const x=typeof h!="string"?gt(h,"dateAdd"):void 0;for(;!cr(u);){let T;({relativeTo:p,days:T}=_e(h,p,y,x)),b=d.add(b,d.BigInt(T)),u=d.subtract(u,l)}for(;!cr(f);){let T;({relativeTo:p,days:T}=_e(h,p,w,x)),b=d.add(b,d.BigInt(T)),f=d.subtract(f,l)}break}default:{if(cr(u)&&cr(f)&&cr(g))break;if(!h)throw new RangeError("a starting point is required for balancing calendar units");const x=typeof h!="string"?gt(h,"dateAdd"):void 0;for(;!cr(u);){let T;({relativeTo:p,days:T}=_e(h,p,y,x)),b=d.add(b,d.BigInt(T)),u=d.subtract(u,l)}for(;!cr(f);){let T;({relativeTo:p,days:T}=_e(h,p,w,x)),b=d.add(b,d.BigInt(T)),f=d.subtract(f,l)}for(;!cr(g);){let T;({relativeTo:p,days:T}=_e(h,p,_,x)),b=d.add(b,d.BigInt(T)),g=d.subtract(g,l)}break}}return{years:d.toNumber(u),months:d.toNumber(f),weeks:d.toNumber(g),days:d.toNumber(b)}}function Pd(e,t,r,o,i){if(j(e)){const s=c(e,xe),n=c(e,vt),a=c(e,E),l=Or(n,s),h=ur(s,n,a,t,r,o,i,0,0,0,0,0,0);return Or(n,new(A("%Temporal.Instant%"))(h))-l}return 0}function xu(e){return new(A("%Temporal.Duration%"))(-c(e,De),-c(e,ce),-c(e,Ve),-c(e,Se),-c(e,Ie),-c(e,Oe),-c(e,Ae),-c(e,ze),-c(e,Me),-c(e,Pe))}function qe(e,t,r){return Ef(r,Df(t,e))}function Cu(e,t,r){const o=qe(t,1,12);return{year:e,month:o,day:qe(r,1,ho(e,o))}}function ge(e,t,r){if(e<t||e>r)throw new RangeError(`value out of range: ${t} <= ${e} <= ${r}`)}function Hr(e,t,r){ge(t,1,12),ge(r,1,ho(e,t))}function Tu(e,t,r){ku(e,t,r,12,0,0,0,0,0)}function Ea(e,t,r,o,i,s){ge(e,0,23),ge(t,0,59),ge(r,0,59),ge(o,0,999),ge(i,0,999),ge(s,0,999)}function xc(e,t,r,o,i,s,n,a,l){Hr(e,t,r),Ea(o,i,s,n,a,l)}function ku(e,t,r,o,i,s,n,a,l){if(ge(e,Ln,Rn),e===Ln&&Eo(e,t,r+1,o,i,s,n,a,l-1)==null||e===Rn&&Eo(e,t,r-1,o,i,s,n,a,l+1)==null)throw new RangeError("DateTime outside of supported range")}function Ho(e){if(d.lessThan(e,Ps)||d.greaterThan(e,Fi))throw new RangeError("Instant outside of supported range")}function Wn(e,t,r,o,i,s,n,a,l,h){const p=jr(e,t,r,o,i,s,n,a,l,h);for(const u of[e,t,r,o,i,s,n,a,l,h]){if(!Fe(u))throw new RangeError("infinite values not allowed as duration fields");const f=Pi(u);if(f!==0&&f!==p)throw new RangeError("mixed-sign values not allowed as duration fields")}}function Cc(e,t,r,o,i,s,n){switch(n){case"year":case"month":{const a=-xo(e,t,r,o,i,s);if(a===0)return{years:0,months:0,weeks:0,days:0};const l={year:e,month:t,day:r},h={year:o,month:i,day:s};let p=h.year-l.year,u=Xo(e,t,r,p,0,0,0,"constrain"),f=-xo(u.year,u.month,u.day,o,i,s);if(f===0)return n==="year"?{years:p,months:0,weeks:0,days:0}:{years:0,months:12*p,weeks:0,days:0};let g=h.month-l.month;if(f!==a&&(p-=a,g+=12*a),u=Xo(e,t,r,p,g,0,0,"constrain"),f=-xo(u.year,u.month,u.day,o,i,s),f===0)return n==="year"?{years:p,months:g,weeks:0,days:0}:{years:0,months:g+12*p,weeks:0,days:0};f!==a&&(g-=a,g===-a&&(p-=a,g=11*a),u=Xo(e,t,r,p,g,0,0,"constrain"));let b=0;return b=u.month===h.month?h.day-u.day:a<0?-u.day-(ho(h.year,h.month)-h.day):h.day+(ho(u.year,u.month)-u.day),n==="month"&&(g+=12*p,p=0),{years:p,months:g,weeks:0,days:b}}case"week":case"day":{let a,l,h;xo(e,t,r,o,i,s)<0?(l={year:e,month:t,day:r},a={year:o,month:i,day:s},h=1):(l={year:o,month:i,day:s},a={year:e,month:t,day:r},h=-1);let p=qn(a.year,a.month,a.day)-qn(l.year,l.month,l.day);for(let f=l.year;f<a.year;++f)p+=Do(f)?366:365;let u=0;return n==="week"&&(u=We(p/7),p%=7),u*=h,p*=h,{years:0,months:0,weeks:u,days:p}}default:throw new Error("assert not reached")}}function $u(e,t,r,o,i,s,n,a,l,h,p,u){let f=n-e,g=a-t,b=l-r,y=h-o,w=p-i,_=u-s;const x=jr(0,0,0,0,f,g,b,y,w,_);f*=x,g*=x,b*=x,y*=x,w*=x,_*=x;let T=0;if({deltaDays:T,hour:f,minute:g,second:b,millisecond:y,microsecond:w,nanosecond:_}=no(f,g,b,y,w,_),T!=0)throw new Error("assertion failure in DifferenceTime: _bt_.[[Days]] should be 0");return f*=x,g*=x,b*=x,y*=x,w*=x,_*=x,{hours:f,minutes:g,seconds:b,milliseconds:y,microseconds:w,nanoseconds:_}}function Tc(e,t,r,o,i,s){const n=d.subtract(t,e);let a=0,l=0,h=d.toNumber(d.remainder(n,mt)),p=d.toNumber(d.remainder(d.divide(n,mt),mt)),u=d.toNumber(d.remainder(d.divide(n,hr),mt)),f=d.toNumber(d.divide(n,Vr));return{hours:a,minutes:l,seconds:f,milliseconds:u,microseconds:p,nanoseconds:h}=fo(0,0,0,0,0,0,f,u,p,h,r,o,s),_r(0,a,l,f,u,p,h,i)}function kc(e,t,r,o,i,s,n,a,l,h,p,u,f,g,b,y,w,_,x,T,C){let k=e,D=t,S=r,{hours:O,minutes:I,seconds:P,milliseconds:X,microseconds:W,nanoseconds:V}=$u(o,i,s,n,a,l,f,g,b,y,w,_);const q=jr(0,0,0,0,O,I,P,X,W,V);xo(h,p,u,k,D,S)===-q&&({year:k,month:D,day:S}=$a(k,D,S-q),{hours:O,minutes:I,seconds:P,milliseconds:X,microseconds:W,nanoseconds:V}=_r(-q,O,I,P,X,W,V,T));const z=fr(k,D,S,x),Y=fr(h,p,u,x),Q=ii("day",T),Yt=Lo(C);Yt.largestUnit=Q;let{years:Jt,months:te,weeks:Ht,days:Qe}=ko(x,z,Y,Yt);return{days:Qe,hours:O,minutes:I,seconds:P,milliseconds:X,microseconds:W,nanoseconds:V}=_r(Qe,O,I,P,X,W,V,T),{years:Jt,months:te,weeks:Ht,days:Qe,hours:O,minutes:I,seconds:P,milliseconds:X,microseconds:W,nanoseconds:V}}function Eu(e,t,r,o,i,s){const n=d.subtract(t,e);if(d.equal(n,jt))return{years:0,months:0,weeks:0,days:0,hours:0,minutes:0,seconds:0,milliseconds:0,microseconds:0,nanoseconds:0};const a=A("%Temporal.Instant%"),l=new a(e),h=new a(t),p=ir(r,l,o),u=ir(r,h,o);let{years:f,months:g,weeks:b,days:y}=kc(c(p,L),c(p,N),c(p,U),c(p,rt),c(p,ot),c(p,it),c(p,st),c(p,nt),c(p,at),c(u,L),c(u,N),c(u,U),c(u,rt),c(u,ot),c(u,it),c(u,st),c(u,nt),c(u,at),o,i,s);const w=ur(l,r,o,f,g,b,0,0,0,0,0,0,0);let _=d.subtract(t,w);const x=fe(w,r,o);({nanoseconds:_,days:y}=_c(_,x));const{hours:T,minutes:C,seconds:k,milliseconds:D,microseconds:S,nanoseconds:O}=_r(0,0,0,0,0,0,d.toNumber(_),"hour");return{years:f,months:g,weeks:b,days:y,hours:T,minutes:C,seconds:k,milliseconds:D,microseconds:S,nanoseconds:O}}function ts(e,t,r,o,i,s){const n=Ws.reduce((g,b)=>{const y=b[0],w=b[1],_=b[2];return r!=="datetime"&&_!==r||o.includes(w)||g.push(w,y),g},[]);let a=Ge(t,"largestUnit",r,"auto");if(o.includes(a))throw new RangeError(`largestUnit must be one of ${n.join(", ")}, not ${a}`);const l=Xi(t);let h=Ir(t,"trunc");e==="since"&&(h=function(b){switch(b){case"ceil":return"floor";case"floor":return"ceil";case"halfCeil":return"halfFloor";case"halfFloor":return"halfCeil";default:return b}}(h));const p=Ge(t,"smallestUnit",r,i);if(o.includes(p))throw new RangeError(`smallestUnit must be one of ${n.join(", ")}, not ${p}`);const u=ii(s,p);if(a==="auto"&&(a=u),ii(a,p)!==a)throw new RangeError(`largestUnit ${a} cannot be smaller than smallestUnit ${p}`);const f={hour:24,minute:60,second:60,millisecond:1e3,microsecond:1e3,nanosecond:1e3}[p];return f!==void 0&&Qi(l,f,!1),{largestUnit:a,roundingIncrement:l,roundingMode:h,smallestUnit:p}}function Fd(e,t,r,o){const i=e==="since"?-1:1,s=Sr(r),n=ts(e,Lo(o),"time",[],"nanosecond","second"),a=c(t,K),l=c(s,K);let{hours:h,minutes:p,seconds:u,milliseconds:f,microseconds:g,nanoseconds:b}=Tc(a,l,n.roundingIncrement,n.smallestUnit,n.largestUnit,n.roundingMode);return new(A("%Temporal.Duration%"))(0,0,0,0,i*h,i*p,i*u,i*f,i*g,i*b)}function Ld(e,t,r,o){const i=e==="since"?-1:1,s=wt(r),n=c(t,E);Ca(n,c(s,E),"compute difference between dates");const a=Lo(o),l=ts(e,a,"date",[],"day","day");a.largestUnit=l.largestUnit;let{years:h,months:p,weeks:u,days:f}=ko(n,t,s,a);return l.smallestUnit==="day"&&l.roundingIncrement===1||({years:h,months:p,weeks:u,days:f}=fo(h,p,u,f,0,0,0,0,0,0,l.roundingIncrement,l.smallestUnit,l.roundingMode,t)),new(A("%Temporal.Duration%"))(i*h,i*p,i*u,i*f,0,0,0,0,0,0)}function Rd(e,t,r,o){const i=e==="since"?-1:1,s=Zo(r),n=c(t,E);Ca(n,c(s,E),"compute difference between dates");const a=Lo(o),l=ts(e,a,"datetime",[],"nanosecond","day");let{years:h,months:p,weeks:u,days:f,hours:g,minutes:b,seconds:y,milliseconds:w,microseconds:_,nanoseconds:x}=kc(c(t,L),c(t,N),c(t,U),c(t,rt),c(t,ot),c(t,it),c(t,st),c(t,nt),c(t,at),c(s,L),c(s,N),c(s,U),c(s,rt),c(s,ot),c(s,it),c(s,st),c(s,nt),c(s,at),n,l.largestUnit,a);const T=Bi(t);return{years:h,months:p,weeks:u,days:f,hours:g,minutes:b,seconds:y,milliseconds:w,microseconds:_,nanoseconds:x}=fo(h,p,u,f,g,b,y,w,_,x,l.roundingIncrement,l.smallestUnit,l.roundingMode,T),{days:f,hours:g,minutes:b,seconds:y,milliseconds:w,microseconds:_,nanoseconds:x}=_r(f,g,b,y,w,_,x,l.largestUnit),new(A("%Temporal.Duration%"))(i*h,i*p,i*u,i*f,i*g,i*b,i*y,i*w,i*_,i*x)}function Nd(e,t,r,o){const i=e==="since"?-1:1,s=lo(r),n=ts(e,Lo(o),"time",[],"nanosecond","hour");let{hours:a,minutes:l,seconds:h,milliseconds:p,microseconds:u,nanoseconds:f}=$u(c(t,rt),c(t,ot),c(t,it),c(t,st),c(t,nt),c(t,at),c(s,rt),c(s,ot),c(s,it),c(s,st),c(s,nt),c(s,at));return{hours:a,minutes:l,seconds:h,milliseconds:p,microseconds:u,nanoseconds:f}=fo(0,0,0,0,a,l,h,p,u,f,n.roundingIncrement,n.smallestUnit,n.roundingMode),{hours:a,minutes:l,seconds:h,milliseconds:p,microseconds:u,nanoseconds:f}=_r(0,a,l,h,p,u,f,n.largestUnit),new(A("%Temporal.Duration%"))(0,0,0,0,i*a,i*l,i*h,i*p,i*u,i*f)}function Bd(e,t,r,o){const i=e==="since"?-1:1,s=ws(r),n=c(t,E);Ca(n,c(s,E),"compute difference between months");const a=Lo(o),l=ts(e,a,"date",["week","day"],"month","year");a.largestUnit=l.largestUnit;const h=Xt(n,["monthCode","year"]),p=ct(t,h,[]);p.day=1;const u=po(n,p),f=ct(s,h,[]);f.day=1;const g=po(n,f);let{years:b,months:y}=ko(n,u,g,a);return l.smallestUnit==="month"&&l.roundingIncrement===1||({years:b,months:y}=fo(b,y,0,0,0,0,0,0,0,0,l.roundingIncrement,l.smallestUnit,l.roundingMode,u)),new(A("%Temporal.Duration%"))(i*b,i*y,0,0,0,0,0,0,0,0)}function Ud(e,t,r,o){const i=e==="since"?-1:1,s=_s(r),n=c(t,E);Ca(n,c(s,E),"compute difference between dates");const a=Lo(o),l=ts(e,a,"datetime",[],"nanosecond","hour");a.largestUnit=l.largestUnit;const h=c(t,K),p=c(s,K);let u,f,g,b,y,w,_,x,T,C;if(l.largestUnit!=="year"&&l.largestUnit!=="month"&&l.largestUnit!=="week"&&l.largestUnit!=="day")u=0,f=0,g=0,b=0,{hours:y,minutes:w,seconds:_,milliseconds:x,microseconds:T,nanoseconds:C}=Tc(h,p,l.roundingIncrement,l.smallestUnit,l.largestUnit,l.roundingMode);else{const k=c(t,vt);if(!fu(k,c(s,vt)))throw new RangeError("When calculating difference between time zones, largestUnit must be 'hours' or smaller because day lengths can vary between time zones due to DST or time zone offset changes.");({years:u,months:f,weeks:g,days:b,hours:y,minutes:w,seconds:_,milliseconds:x,microseconds:T,nanoseconds:C}=Eu(h,p,k,n,l.largestUnit,a)),{years:u,months:f,weeks:g,days:b,hours:y,minutes:w,seconds:_,milliseconds:x,microseconds:T,nanoseconds:C}=fo(u,f,g,b,y,w,_,x,T,C,l.roundingIncrement,l.smallestUnit,l.roundingMode,t),{years:u,months:f,weeks:g,days:b,hours:y,minutes:w,seconds:_,milliseconds:x,microseconds:T,nanoseconds:C}=Ou(u,f,g,b,y,w,_,x,T,C,l.roundingIncrement,l.smallestUnit,l.roundingMode,t)}return new(A("%Temporal.Duration%"))(i*u,i*f,i*g,i*b,i*y,i*w,i*_,i*x,i*T,i*C)}function Xo(e,t,r,o,i,s,n,a){let l=e,h=t,p=r,u=s,f=n;return l+=o,h+=i,{year:l,month:h}=In(l,h),{year:l,month:h,day:p}=Un(l,h,p,a),f+=7*u,p+=f,{year:l,month:h,day:p}=$a(l,h,p),{year:l,month:h,day:p}}function Du(e,t,r,o,i,s,n,a,l,h,p,u){let f=e,g=t,b=r,y=o,w=i,_=s;f+=n,g+=a,b+=l,y+=h,w+=p,_+=u;let x=0;return{deltaDays:x,hour:f,minute:g,second:b,millisecond:y,microsecond:w,nanosecond:_}=no(f,g,b,y,w,_),{deltaDays:x,hour:f,minute:g,second:b,millisecond:y,microsecond:w,nanosecond:_}}function Su(e,t,r,o,i,s,n,a,l,h,p,u,f,g,b,y,w,_,x,T,C){const k=ii(gl(e,t,r,o,i,s,n,a,l,h),gl(p,u,f,g,b,y,w,_,x,T));let D,S,O,I,P,X,W,V,q,z;if(C)if(dt(C)){const Y=A("%Temporal.Duration%"),Q=c(C,E),Yt=new Y(e,t,r,o,0,0,0,0,0,0),Jt=new Y(p,u,f,g,0,0,0,0,0,0),te=typeof Q!="string"?gt(Q,"dateAdd"):void 0,Ht=me(Q,C,Yt,void 0,te),Qe=me(Q,Ht,Jt,void 0,te),Lr=ii("day",k),Rr=Te(null);Rr.largestUnit=Lr,{years:D,months:S,weeks:O,days:I}=ko(Q,C,Qe,Rr),{days:I,hours:P,minutes:X,seconds:W,milliseconds:V,microseconds:q,nanoseconds:z}=_r(I,d.add(d.BigInt(i),d.BigInt(b)),d.add(d.BigInt(s),d.BigInt(y)),d.add(d.BigInt(n),d.BigInt(w)),d.add(d.BigInt(a),d.BigInt(_)),d.add(d.BigInt(l),d.BigInt(x)),d.add(d.BigInt(h),d.BigInt(T)),k)}else{const Y=A("%Temporal.Instant%"),Q=c(C,vt),Yt=c(C,E),Jt=ur(c(C,xe),Q,Yt,e,t,r,o,i,s,n,a,l,h),te=ur(new Y(Jt),Q,Yt,p,u,f,g,b,y,w,_,x,T);k!=="year"&&k!=="month"&&k!=="week"&&k!=="day"?(D=0,S=0,O=0,I=0,{hours:P,minutes:X,seconds:W,milliseconds:V,microseconds:q,nanoseconds:z}=Tc(c(C,K),te,1,"nanosecond",k,"halfExpand")):{years:D,months:S,weeks:O,days:I,hours:P,minutes:X,seconds:W,milliseconds:V,microseconds:q,nanoseconds:z}=Eu(c(C,K),te,Q,Yt,k,Te(null))}else{if(k==="year"||k==="month"||k==="week")throw new RangeError("relativeTo is required for years, months, or weeks arithmetic");D=S=O=0,{days:I,hours:P,minutes:X,seconds:W,milliseconds:V,microseconds:q,nanoseconds:z}=_r(o+g,d.add(d.BigInt(i),d.BigInt(b)),d.add(d.BigInt(s),d.BigInt(y)),d.add(d.BigInt(n),d.BigInt(w)),d.add(d.BigInt(a),d.BigInt(_)),d.add(d.BigInt(l),d.BigInt(x)),d.add(d.BigInt(h),d.BigInt(T)),k)}return Wn(D,S,O,I,P,X,W,V,q,z),{years:D,months:S,weeks:O,days:I,hours:P,minutes:X,seconds:W,milliseconds:V,microseconds:q,nanoseconds:z}}function wl(e,t,r,o,i,s,n){let a=jt;a=d.add(a,d.BigInt(n)),a=d.add(a,d.multiply(d.BigInt(s),mt)),a=d.add(a,d.multiply(d.BigInt(i),hr)),a=d.add(a,d.multiply(d.BigInt(o),Vr)),a=d.add(a,d.multiply(d.BigInt(r),d.BigInt(6e10))),a=d.add(a,d.multiply(d.BigInt(t),d.BigInt(36e11)));const l=d.add(e,a);return Ho(l),l}function _l(e,t,r,o,i,s,n,a,l,h,p,u,f,g,b,y,w,_,x,T,C){let k=g,{deltaDays:D,hour:S,minute:O,second:I,millisecond:P,microsecond:X,nanosecond:W}=Du(o,i,s,n,a,l,b,y,w,_,x,T);k+=D;const V=A("%Temporal.Duration%"),q=me(h,fr(e,t,r,h),new V(p,u,f,k,0,0,0,0,0,0),C);return{year:c(q,L),month:c(q,N),day:c(q,U),hour:S,minute:O,second:I,millisecond:P,microsecond:X,nanosecond:W}}function ur(e,t,r,o,i,s,n,a,l,h,p,u,f,g){const b=A("%Temporal.Duration%");if(jr(o,i,s,n,0,0,0,0,0,0)===0)return wl(c(e,K),a,l,h,p,u,f);const y=ir(t,e,r),w=me(r,fr(c(y,L),c(y,N),c(y,U),r),new b(o,i,s,n,0,0,0,0,0,0),g),_=He(c(w,L),c(w,N),c(w,U),c(y,rt),c(y,ot),c(y,it),c(y,st),c(y,nt),c(y,at),r);return wl(c(Le(t,_,"compatible"),K),a,l,h,p,u,f)}function Vd(e,t,r,o){const i=e==="subtract"?-1:1;let{years:s,months:n,weeks:a,days:l,hours:h,minutes:p,seconds:u,milliseconds:f,microseconds:g,nanoseconds:b}=ui(r);const y=Sn(ht(o));return{years:s,months:n,weeks:a,days:l,hours:h,minutes:p,seconds:u,milliseconds:f,microseconds:g,nanoseconds:b}=Su(c(t,De),c(t,ce),c(t,Ve),c(t,Se),c(t,Ie),c(t,Oe),c(t,Ae),c(t,ze),c(t,Me),c(t,Pe),i*s,i*n,i*a,i*l,i*h,i*p,i*u,i*f,i*g,i*b,y),new(A("%Temporal.Duration%"))(s,n,a,l,h,p,u,f,g,b)}function jd(e,t,r){const o=e==="subtract"?-1:1,{hours:i,minutes:s,seconds:n,milliseconds:a,microseconds:l,nanoseconds:h}=function(f,g){let b=ui(f);for(const y of g)if(b[y]!==0)throw new RangeError(`Duration field ${y} not supported by Temporal.Instant. Try Temporal.ZonedDateTime instead.`);return b}(r,["years","months","weeks","days"]),p=wl(c(t,K),o*i,o*s,o*n,o*a,o*l,o*h);return new(A("%Temporal.Instant%"))(p)}function Yd(e,t,r,o){const i=e==="subtract"?-1:1,{years:s,months:n,weeks:a,days:l,hours:h,minutes:p,seconds:u,milliseconds:f,microseconds:g,nanoseconds:b}=ui(r),y=ht(o),w=c(t,E),{year:_,month:x,day:T,hour:C,minute:k,second:D,millisecond:S,microsecond:O,nanosecond:I}=_l(c(t,L),c(t,N),c(t,U),c(t,rt),c(t,ot),c(t,it),c(t,st),c(t,nt),c(t,at),w,i*s,i*n,i*a,i*l,i*h,i*p,i*u,i*f,i*g,i*b,y);return He(_,x,T,C,k,D,S,O,I,w)}function Hd(e,t,r){const o=e==="subtract"?-1:1,{hours:i,minutes:s,seconds:n,milliseconds:a,microseconds:l,nanoseconds:h}=ui(r);let{hour:p,minute:u,second:f,millisecond:g,microsecond:b,nanosecond:y}=Du(c(t,rt),c(t,ot),c(t,it),c(t,st),c(t,nt),c(t,at),o*i,o*s,o*n,o*a,o*l,o*h);return{hour:p,minute:u,second:f,millisecond:g,microsecond:b,nanosecond:y}=fa(p,u,f,g,b,y,"reject"),new(A("%Temporal.PlainTime%"))(p,u,f,g,b,y)}function qd(e,t,r,o){let i=ui(r);e==="subtract"&&(i={years:-i.years,months:-i.months,weeks:-i.weeks,days:-i.days,hours:-i.hours,minutes:-i.minutes,seconds:-i.seconds,milliseconds:-i.milliseconds,microseconds:-i.microseconds,nanoseconds:-i.nanoseconds});let{years:s,months:n,weeks:a,days:l,hours:h,minutes:p,seconds:u,milliseconds:f,microseconds:g,nanoseconds:b}=i;({days:l}=_r(l,h,p,u,f,g,b,"day"));const y=ht(o),w=c(t,E),_=Xt(w,["monthCode","year"]),x=ct(t,_,[]),T=Te(null);Ei(T,x,[]),x.day=1;let C=po(w,x);const k=jr(s,n,a,l,0,0,0,0,0,0),D=gt(w,"dateAdd"),S=A("%Temporal.Duration%");if(k<0){const P=me(w,C,new S(0,1,0,0,0,0,0,0,0,0),void 0,D),X=me(w,P,new S(0,0,0,-1,0,0,0,0,0,0),void 0,D);T.day=Js(w,X),C=po(w,T)}const O=new S(s,n,a,l,0,0,0,0,0,0),I=Lo(y);return ni(w,ct(me(w,C,O,y,D),_,[]),I)}function Wd(e,t,r,o){const i=e==="subtract"?-1:1,{years:s,months:n,weeks:a,days:l,hours:h,minutes:p,seconds:u,milliseconds:f,microseconds:g,nanoseconds:b}=ui(r),y=ht(o),w=c(t,vt),_=c(t,E);return fe(ur(c(t,xe),w,_,i*s,i*n,i*a,i*l,i*h,i*p,i*u,i*f,i*g,i*b,y),w,_)}function er(e,t,r){if(d.equal(t,Zi))return e;let{quotient:o,remainder:i}=qt(e,t);if(d.equal(i,jt))return e;const s=d.lessThan(i,jt)?-1:1,n=Dr(d.multiply(i,d.BigInt(2))),a=d.equal(n,t),l=d.greaterThan(n,t);switch(r){case"ceil":s>0&&(o=d.add(o,d.BigInt(s)));break;case"floor":s<0&&(o=d.add(o,d.BigInt(s)));break;case"expand":o=d.add(o,d.BigInt(s));break;case"trunc":break;case"halfCeil":(l||a&&s>0)&&(o=d.add(o,d.BigInt(s)));break;case"halfFloor":(l||a&&s<0)&&(o=d.add(o,d.BigInt(s)));break;case"halfExpand":(l||a)&&(o=d.add(o,d.BigInt(s)));break;case"halfTrunc":l&&(o=d.add(o,d.BigInt(s)));break;case"halfEven":(l||a&&d.toNumber(d.remainder(Dr(o),d.BigInt(2)))===1)&&(o=d.add(o,d.BigInt(s)))}return d.multiply(o,t)}function Gn(e,t,r,o){let{remainder:i}=Yo(e,Yr);const s=d.subtract(e,i),n=er(i,d.BigInt(Mu[r]*t),o);return d.add(s,n)}function $c(e,t,r,o,i,s,n,a,l,h,p,u,f=864e11){const{deltaDays:g,hour:b,minute:y,second:w,millisecond:_,microsecond:x,nanosecond:T}=Ec(o,i,s,n,a,l,h,p,u,f),{year:C,month:k,day:D}=$a(e,t,r+g);return{year:C,month:k,day:D,hour:b,minute:y,second:w,millisecond:_,microsecond:x,nanosecond:T}}function Ec(e,t,r,o,i,s,n,a,l,h=864e11){let p=jt;switch(a){case"day":case"hour":p=d.BigInt(e);case"minute":p=d.add(d.multiply(p,Ur),d.BigInt(t));case"second":p=d.add(d.multiply(p,Ur),d.BigInt(r));case"millisecond":p=d.add(d.multiply(p,mt),d.BigInt(o));case"microsecond":p=d.add(d.multiply(p,mt),d.BigInt(i));case"nanosecond":p=d.add(d.multiply(p,mt),d.BigInt(s))}const u=a==="day"?h:Mu[a],f=er(p,d.BigInt(u*n),l),g=d.toNumber(d.divide(f,d.BigInt(u)));switch(a){case"day":return{deltaDays:g,hour:0,minute:0,second:0,millisecond:0,microsecond:0,nanosecond:0};case"hour":return no(g,0,0,0,0,0);case"minute":return no(e,g,0,0,0,0);case"second":return no(e,t,g,0,0,0);case"millisecond":return no(e,t,r,g,0,0);case"microsecond":return no(e,t,r,o,g,0);case"nanosecond":return no(e,t,r,o,i,g);default:throw new Error(`Invalid unit ${a}`)}}function On(e,t){return Cc(c(e,L),c(e,N),c(e,U),c(t,L),c(t,N),c(t,U),"day").days}function _e(e,t,r,o){const i=me(e,t,r,void 0,o);return{relativeTo:i,days:On(t,i)}}function Iu(e,t,r,o,i){const s=c(e,vt),n=c(e,E);return fe(ur(c(e,xe),s,n,t,r,o,i,0,0,0,0,0,0),s,n)}function Ou(e,t,r,o,i,s,n,a,l,h,p,u,f,g){let b=e,y=t,w=r,_=o,x=i,T=s,C=n,k=a,D=l,S=h;if(!j(g)||u==="year"||u==="month"||u==="week"||u==="day"||u==="nanosecond"&&p===1)return{years:b,months:y,weeks:w,days:_,hours:x,minutes:T,seconds:C,milliseconds:k,microseconds:D,nanoseconds:S};let O=Ui(0,x,T,C,k,D,S,0);const I=Pi(d.toNumber(O)),P=c(g,vt),X=c(g,E),W=ur(c(g,xe),P,X,b,y,w,_,0,0,0,0,0,0),V=ur(new(A("%Temporal.Instant%"))(W),P,X,0,0,0,I,0,0,0,0,0,0),q=d.subtract(V,W);return d.greaterThanOrEqual(d.multiply(d.subtract(O,q),d.BigInt(I)),jt)&&({years:b,months:y,weeks:w,days:_}=Su(b,y,w,_,0,0,0,0,0,0,0,0,0,I,0,0,0,0,0,0,g),O=Gn(d.subtract(O,q),p,u,f),{hours:x,minutes:T,seconds:C,milliseconds:k,microseconds:D,nanoseconds:S}=_r(0,0,0,0,0,0,d.toNumber(O),"hour")),{years:b,months:y,weeks:w,days:_,hours:x,minutes:T,seconds:C,milliseconds:k,microseconds:D,nanoseconds:S}}function fo(e,t,r,o,i,s,n,a,l,h,p,u,f,g){let b=e,y=t,w=r,_=o,x=i,T=s,C=n,k=a,D=l,S=d.BigInt(h);const O=A("%Temporal.Duration%");let I,P,X,W,V=g;if(V){if(j(V))P=V,V=wt(V);else if(!dt(V))throw new TypeError("starting point must be PlainDate or ZonedDateTime");I=c(V,E)}if(u==="year"||u==="month"||u==="week"||u==="day"){let q,z,Y;S=Ui(0,x,T,C,k,D,h,0),P&&(q=Iu(P,b,y,w,_)),{days:z,nanoseconds:S,dayLengthNs:Y}=_c(S,q),X=d.BigInt(Y),_+=z,x=T=C=k=D=0}switch(u){case"year":{if(!I)throw new RangeError("A starting point is required for years rounding");const q=new O(b),z=typeof I!="string"?gt(I,"dateAdd"):void 0,Y=me(I,V,q,void 0,z),Q=me(I,V,new O(b,y,w),void 0,z);V=Y,_+=On(Y,Q);const Yt=me(I,V,new O(0,0,0,_),void 0,z),Jt=Te(null);Jt.largestUnit="year";const te=ko(I,V,Yt,Jt).years;b+=te;const Ht=V;V=me(I,V,new O(te),void 0,z),_-=On(Ht,V);const Qe=new O(_<0?-1:1);let{days:Lr}=_e(I,V,Qe,z);Lr=Ot(Lr);const Rr=d.multiply(d.BigInt(Lr),X);S=d.add(d.add(d.multiply(Rr,d.BigInt(b)),d.multiply(d.BigInt(_),X)),S);const Je=er(S,d.multiply(Rr,d.BigInt(p)),f);W=Nr(S,Rr),b=d.toNumber(d.divide(Je,Rr)),S=jt,y=w=_=0;break}case"month":{if(!I)throw new RangeError("A starting point is required for months rounding");const q=new O(b,y),z=typeof I!="string"?gt(I,"dateAdd"):void 0,Y=me(I,V,q,void 0,z),Q=me(I,V,new O(b,y,w),void 0,z);V=Y,_+=On(Y,Q);const Yt=Pi(_),Jt=new O(0,_<0?-1:1);let te;for({relativeTo:V,days:te}=_e(I,V,Jt,z);Ot(_)>=Ot(te);)y+=Yt,_-=te,{relativeTo:V,days:te}=_e(I,V,Jt,z);te=Ot(te);const Ht=d.multiply(d.BigInt(te),X);S=d.add(d.add(d.multiply(Ht,d.BigInt(y)),d.multiply(d.BigInt(_),X)),S);const Qe=er(S,d.multiply(Ht,d.BigInt(p)),f);W=Nr(S,Ht),y=d.toNumber(d.divide(Qe,Ht)),S=jt,w=_=0;break}case"week":{if(!I)throw new RangeError("A starting point is required for weeks rounding");const q=Pi(_),z=new O(0,0,_<0?-1:1),Y=typeof I!="string"?gt(I,"dateAdd"):void 0;let Q;for({relativeTo:V,days:Q}=_e(I,V,z,Y);Ot(_)>=Ot(Q);)w+=q,_-=Q,{relativeTo:V,days:Q}=_e(I,V,z,Y);Q=Ot(Q);const Yt=d.multiply(d.BigInt(Q),X);S=d.add(d.add(d.multiply(Yt,d.BigInt(w)),d.multiply(d.BigInt(_),X)),S);const Jt=er(S,d.multiply(Yt,d.BigInt(p)),f);W=Nr(S,Yt),w=d.toNumber(d.divide(Jt,Yt)),S=jt,_=0;break}case"day":{const q=X;S=d.add(d.multiply(q,d.BigInt(_)),S);const z=er(S,d.multiply(q,d.BigInt(p)),f);W=Nr(S,q),_=d.toNumber(d.divide(z,q)),S=jt;break}case"hour":{let z=d.multiply(d.BigInt(x),d.BigInt(36e11));z=d.add(z,d.multiply(d.BigInt(T),d.BigInt(6e10))),z=d.add(z,d.multiply(d.BigInt(C),Vr)),z=d.add(z,d.multiply(d.BigInt(k),hr)),z=d.add(z,d.multiply(d.BigInt(D),mt)),z=d.add(z,S),W=Nr(z,d.BigInt(36e11));const Y=er(z,d.BigInt(36e11*p),f);x=d.toNumber(d.divide(Y,d.BigInt(36e11))),S=jt,T=C=k=D=0;break}case"minute":{let z=d.multiply(d.BigInt(T),d.BigInt(6e10));z=d.add(z,d.multiply(d.BigInt(C),Vr)),z=d.add(z,d.multiply(d.BigInt(k),hr)),z=d.add(z,d.multiply(d.BigInt(D),mt)),z=d.add(z,S),W=Nr(z,d.BigInt(6e10));const Y=er(z,d.BigInt(6e10*p),f);T=d.toNumber(d.divide(Y,d.BigInt(6e10))),S=jt,C=k=D=0;break}case"second":{let z=d.multiply(d.BigInt(C),Vr);z=d.add(z,d.multiply(d.BigInt(k),hr)),z=d.add(z,d.multiply(d.BigInt(D),mt)),z=d.add(z,S),W=Nr(z,d.BigInt(1e9));const Y=er(z,d.BigInt(1e9*p),f);C=d.toNumber(d.divide(Y,d.BigInt(1e9))),S=jt,k=D=0;break}case"millisecond":{let z=d.multiply(d.BigInt(k),hr);z=d.add(z,d.multiply(d.BigInt(D),mt)),z=d.add(z,S),W=Nr(z,d.BigInt(1e6));const Y=er(z,d.BigInt(1e6*p),f);k=d.toNumber(d.divide(Y,d.BigInt(1e6))),S=jt,D=0;break}case"microsecond":{let z=d.multiply(d.BigInt(D),mt);z=d.add(z,S),W=Nr(z,d.BigInt(1e3));const Y=er(z,d.BigInt(1e3*p),f);D=d.toNumber(d.divide(Y,d.BigInt(1e3))),S=jt;break}case"nanosecond":W=d.toNumber(S),S=er(d.BigInt(S),d.BigInt(p),f)}return{years:b,months:y,weeks:w,days:_,hours:x,minutes:T,seconds:C,milliseconds:k,microseconds:D,nanoseconds:d.toNumber(S),total:W}}function xo(e,t,r,o,i,s){for(const[n,a]of[[e,o],[t,i],[r,s]])if(n!==a)return Qo(n-a);return 0}function Yo(e,t){let{quotient:r,remainder:o}=qt(e,t);return d.lessThan(o,jt)&&(r=d.subtract(r,Zi),o=d.add(o,t)),{quotient:r,remainder:o}}function Si(e,t){const{quotient:r,remainder:o}=qt(e,t);return cr(o)||!Nn(e)==!Nn(t)?r:d.subtract(r,Zi)}function Nr(e,t){const{quotient:r,remainder:o}=qt(e,t);return d.toNumber(r)+d.toNumber(o)/d.toNumber(t)}function Zn(e){const t=Cs(e);return globalThis.BigInt!==void 0?globalThis.BigInt(t.toString(10)):t}function Cs(e){let t=e;if(typeof e=="object"){const r=e[Symbol.toPrimitive];r&&typeof r=="function"&&(t=pa(r,e,["number"]))}if(typeof t=="number")throw new TypeError("cannot convert number to bigint");return typeof t=="bigint"?d.BigInt(t.toString(10)):d.BigInt(t)}const Dc=(()=>{let e=d.BigInt(Date.now()%1e6);return()=>{const t=d.BigInt(Date.now()),r=d.add(d.multiply(t,hr),e);return e=d.remainder(t,hr),d.greaterThan(r,Fi)?Fi:d.lessThan(r,Ps)?Ps:r}})();function _o(){return new tu().resolvedOptions().timeZone}function Qo(e){return e<0?-1:e>0?1:e}function ht(e){if(e===void 0)return Te(null);if(At(e)&&e!==null)return e;throw new TypeError("Options parameter must be an object, not "+(e===null?"null":typeof e))}function Vi(e,t){const r=Te(null);return r[e]=t,r}function Lo(e){const t=Te(null);return Ei(t,ht(e),[]),t}function So(e,t,r,o){let i=e[t];if(i!==void 0){if(i=Re(i),!r.includes(i))throw new RangeError(`${t} must be one of ${r.join(", ")}, not ${i}`);return i}return o}function mo(e){return Pf.includes(qr(e))}function qr(e){return e.replace(/[A-Z]/g,t=>{const r=t.charCodeAt(0);return String.fromCharCode(r+32)})}const Au=new RegExp(`^${Xh.source}$`);function zu(e,t,r,o=e(t),i=e(r)){let s=d.BigInt(t),n=d.BigInt(r),a=o,l=i;for(;d.greaterThan(d.subtract(n,s),Zi);){const h=d.divide(d.add(s,n),d.BigInt(2)),p=e(h);if(p===a)s=h,a=p;else{if(p!==l)throw new Error(`invalid state in bisection ${a} - ${p} - ${l}`);n=h,l=p}}return n}const Mu={hour:36e11,minute:6e10,second:1e9,millisecond:1e6,microsecond:1e3,nanosecond:1},Pu=Symbol("date"),Fu=Symbol("ym"),Lu=Symbol("md"),Ru=Symbol("time"),Nu=Symbol("datetime"),Bu=Symbol("instant"),Ii=Symbol("original"),Ci=Symbol("timezone"),wr=Symbol("calendar-id"),Uu=Symbol("locale"),xl=Symbol("options"),Ts=e=>({value:e,enumerable:!0,writable:!1,configurable:!0}),Oi=globalThis.Intl.DateTimeFormat,go=Object.assign,Bf=Object.prototype.hasOwnProperty,Uf=Reflect.apply;function wi(e,t){let r=e[t];return typeof r=="function"&&(r=new Oi(e[Uu],r(e[xl])),e[t]=r),r}function ai(e,t={}){if(!(this instanceof ai))return new ai(e,t);const r=t!==void 0,o=r?go({},t):{},i=new Oi(e,o),s=i.resolvedOptions();if(r){const n=go({},s);for(const a in n)Uf(Bf,o,[a])||delete n[a];this[xl]=n}else this[xl]=o;this[Uu]=s.locale,this[Ii]=i,this[Ci]=s.timeZone,this[wr]=s.calendar,this[Pu]=Hf,this[Fu]=jf,this[Lu]=Yf,this[Ru]=Vf,this[Nu]=qf,this[Bu]=Wf}Object.defineProperty(ai,"name",{writable:!0,value:"DateTimeFormat"}),ai.supportedLocalesOf=function(e,t){return Oi.supportedLocalesOf(e,t)};const Wa={resolvedOptions:Ts(function(){return this[Ii].resolvedOptions()}),format:Ts(function(t,...r){let{instant:o,formatter:i}=Ai(t,this);return o&&i?i.format(o.epochMilliseconds):this[Ii].format(t,...r)}),formatRange:Ts(function(t,r){if(ji(t)||ji(r)){if(!Vu(t,r))throw new TypeError("Intl.DateTimeFormat.formatRange accepts two values of the same type");const{instant:o,formatter:i}=Ai(t,this),{instant:s,formatter:n}=Ai(r,this);if(o&&s&&i&&n&&i===n)return i.formatRange(o.epochMilliseconds,s.epochMilliseconds)}return this[Ii].formatRange(t,r)})};"formatToParts"in Oi.prototype&&(Wa.formatToParts=Ts(function(t,...r){let{instant:o,formatter:i}=Ai(t,this);return o&&i?i.formatToParts(o.epochMilliseconds):this[Ii].formatToParts(t,...r)})),"formatRangeToParts"in Oi.prototype&&(Wa.formatRangeToParts=Ts(function(t,r){if(ji(t)||ji(r)){if(!Vu(t,r))throw new TypeError("Intl.DateTimeFormat.formatRangeToParts accepts two values of the same type");const{instant:o,formatter:i}=Ai(t,this),{instant:s,formatter:n}=Ai(r,this);if(o&&s&&i&&n&&i===n)return i.formatRangeToParts(o.epochMilliseconds,s.epochMilliseconds)}return this[Ii].formatRangeToParts(t,r)})),ai.prototype=Object.create(Oi.prototype,Wa),Object.defineProperty(ai,"prototype",{writable:!1,enumerable:!1,configurable:!1});const Ro=ai;function rn(e={},t={}){const r=go({},e);for(const o of["year","month","day","hour","minute","second","weekday","dayPeriod","timeZoneName","dateStyle","timeStyle"])r[o]=o in t?t[o]:r[o],r[o]!==!1&&r[o]!==void 0||delete r[o];return r}function Vf(e){let t=rn(e,{year:!1,month:!1,day:!1,weekday:!1,timeZoneName:!1,dateStyle:!1});return Ic(t)||(t=go({},t,{hour:"numeric",minute:"numeric",second:"numeric"})),t}function jf(e){let t=rn(e,{day:!1,hour:!1,minute:!1,second:!1,weekday:!1,dayPeriod:!1,timeZoneName:!1,dateStyle:!1,timeStyle:!1});return"year"in t||"month"in t||(t=go(t,{year:"numeric",month:"numeric"})),t}function Yf(e){let t=rn(e,{year:!1,hour:!1,minute:!1,second:!1,weekday:!1,dayPeriod:!1,timeZoneName:!1,dateStyle:!1,timeStyle:!1});return"month"in t||"day"in t||(t=go({},t,{month:"numeric",day:"numeric"})),t}function Hf(e){let t=rn(e,{hour:!1,minute:!1,second:!1,dayPeriod:!1,timeZoneName:!1,timeStyle:!1});return Sc(t)||(t=go({},t,{year:"numeric",month:"numeric",day:"numeric"})),t}function qf(e){let t=rn(e,{timeZoneName:!1});return Ic(t)||Sc(t)||(t=go({},t,{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"})),t}function Wf(e){let t=e;return Ic(t)||Sc(t)||(t=go({},t,{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"})),t}function Sc(e){return"year"in e||"month"in e||"day"in e||"weekday"in e||"dateStyle"in e}function Ic(e){return"hour"in e||"minute"in e||"second"in e||"timeStyle"in e||"dayPeriod"in e}function ji(e){return dt(e)||Vt(e)||et(e)||j(e)||ft(e)||ne(e)||re(e)}function Vu(e,t){return!(!ji(e)||!ji(t))&&!(Vt(e)&&!Vt(t))&&!(dt(e)&&!dt(t))&&!(et(e)&&!et(t))&&!(j(e)&&!j(t))&&!(ft(e)&&!ft(t))&&!(ne(e)&&!ne(t))&&!(re(e)&&!re(t))}function Ai(e,t){const r=A("%Temporal.PlainDateTime%");if(Vt(e)){const o=new r(1970,1,1,c(e,rt),c(e,ot),c(e,it),c(e,st),c(e,nt),c(e,at),t[wr]);return{instant:Le(t[Ci],o,"compatible"),formatter:wi(t,Ru)}}if(ft(e)){const o=c(e,L),i=c(e,N),s=c(e,U),n=be(c(e,E));if(n!==t[wr])throw new RangeError(`cannot format PlainYearMonth with calendar ${n} in locale with calendar ${t[wr]}`);const a=new r(o,i,s,12,0,0,0,0,0,n);return{instant:Le(t[Ci],a,"compatible"),formatter:wi(t,Fu)}}if(ne(e)){const o=c(e,L),i=c(e,N),s=c(e,U),n=be(c(e,E));if(n!==t[wr])throw new RangeError(`cannot format PlainMonthDay with calendar ${n} in locale with calendar ${t[wr]}`);const a=new r(o,i,s,12,0,0,0,0,0,n);return{instant:Le(t[Ci],a,"compatible"),formatter:wi(t,Lu)}}if(dt(e)){const o=c(e,L),i=c(e,N),s=c(e,U),n=be(c(e,E));if(n!=="iso8601"&&n!==t[wr])throw new RangeError(`cannot format PlainDate with calendar ${n} in locale with calendar ${t[wr]}`);const a=new r(o,i,s,12,0,0,0,0,0,t[wr]);return{instant:Le(t[Ci],a,"compatible"),formatter:wi(t,Pu)}}if(et(e)){const o=c(e,L),i=c(e,N),s=c(e,U),n=c(e,rt),a=c(e,ot),l=c(e,it),h=c(e,st),p=c(e,nt),u=c(e,at),f=be(c(e,E));if(f!=="iso8601"&&f!==t[wr])throw new RangeError(`cannot format PlainDateTime with calendar ${f} in locale with calendar ${t[wr]}`);let g=e;return f==="iso8601"&&(g=new r(o,i,s,n,a,l,h,p,u,t[wr])),{instant:Le(t[Ci],g,"compatible"),formatter:wi(t,Nu)}}if(j(e))throw new TypeError("Temporal.ZonedDateTime not supported in DateTimeFormat methods. Use toLocaleString() instead.");return re(e)?{instant:e,formatter:wi(t,Bu)}:{}}class $r{constructor(t){if(arguments.length<1)throw new TypeError("missing argument: epochNanoseconds is required");const r=Cs(t);Ho(r),Kr(this),lt(this,K,r)}get epochSeconds(){if(!re(this))throw new TypeError("invalid receiver");const t=c(this,K);return d.toNumber(Si(t,Vr))}get epochMilliseconds(){if(!re(this))throw new TypeError("invalid receiver");const t=d.BigInt(c(this,K));return d.toNumber(Si(t,hr))}get epochMicroseconds(){if(!re(this))throw new TypeError("invalid receiver");return Zn(Si(d.BigInt(c(this,K)),mt))}get epochNanoseconds(){if(!re(this))throw new TypeError("invalid receiver");return Zn(d.BigInt(c(this,K)))}add(t){if(!re(this))throw new TypeError("invalid receiver");return jd("add",this,t)}subtract(t){if(!re(this))throw new TypeError("invalid receiver");return jd("subtract",this,t)}until(t,r){if(!re(this))throw new TypeError("invalid receiver");return Fd("until",this,t,r)}since(t,r){if(!re(this))throw new TypeError("invalid receiver");return Fd("since",this,t,r)}round(t){if(!re(this))throw new TypeError("invalid receiver");if(t===void 0)throw new TypeError("options parameter is required");const r=typeof t=="string"?Vi("smallestUnit",t):ht(t),o=Xi(r),i=Ir(r,"halfExpand"),s=Ge(r,"smallestUnit","time",oi);Qi(o,{hour:24,minute:1440,second:86400,millisecond:864e5,microsecond:864e8,nanosecond:864e11}[s],!0);const n=Gn(c(this,K),o,s,i);return new $r(n)}equals(t){if(!re(this))throw new TypeError("invalid receiver");const r=Sr(t),o=c(this,K),i=c(r,K);return d.equal(d.BigInt(o),d.BigInt(i))}toString(t){if(!re(this))throw new TypeError("invalid receiver");const r=ht(t),o=Zs(r),i=Ir(r,"trunc"),s=Ge(r,"smallestUnit","time",void 0);if(s==="hour")throw new RangeError('smallestUnit must be a time unit other than "hour"');let n=r.timeZone;n!==void 0&&(n=Ce(n));const{precision:a,unit:l,increment:h}=Ks(s,o),p=Gn(c(this,K),h,l,i);return Ed(new $r(p),n,a)}toJSON(){if(!re(this))throw new TypeError("invalid receiver");return Ed(this,void 0,"auto")}toLocaleString(t,r){if(!re(this))throw new TypeError("invalid receiver");return new Ro(t,r).format(this)}valueOf(){throw new TypeError("use compare() or equals() to compare Temporal.Instant")}toZonedDateTime(t){if(!re(this))throw new TypeError("invalid receiver");if(!At(t))throw new TypeError("invalid argument in toZonedDateTime");const r=t.calendar;if(r===void 0)throw new TypeError("missing calendar property in toZonedDateTime");const o=Ze(r),i=t.timeZone;if(i===void 0)throw new TypeError("missing timeZone property in toZonedDateTime");const s=Ce(i);return fe(c(this,K),s,o)}toZonedDateTimeISO(t){if(!re(this))throw new TypeError("invalid receiver");const r=Ce(t);return fe(c(this,K),r,"iso8601")}static fromEpochSeconds(t){const r=Li(t),o=d.multiply(d.BigInt(r),Vr);return Ho(o),new $r(o)}static fromEpochMilliseconds(t){const r=Li(t),o=d.multiply(d.BigInt(r),hr);return Ho(o),new $r(o)}static fromEpochMicroseconds(t){const r=Cs(t),o=d.multiply(r,mt);return Ho(o),new $r(o)}static fromEpochNanoseconds(t){const r=Cs(t);return Ho(r),new $r(r)}static from(t){return re(t)?new $r(c(t,K)):Sr(t)}static compare(t,r){const o=Sr(t),i=Sr(r),s=c(o,K),n=c(i,K);return d.lessThan(s,n)?-1:d.greaterThan(s,n)?1:0}}Zr($r,"Temporal.Instant");const ju=Array.prototype.includes,Gf=Array.prototype.push,Zf=globalThis.Intl.DateTimeFormat,Kf=Array.prototype.sort,Xf=Math.abs,Qf=Math.floor,Ga=Object.create,Cl=Object.entries,Yu=Set,Gd=Reflect.ownKeys,we=Set.prototype.add,Hu=Set.prototype.values,zt={};class Bt{constructor(t){if(arguments.length<1)throw new RangeError("missing argument: id is required");const r=Re(t);if(!mo(r))throw new RangeError(`invalid calendar identifier ${r}`);Kr(this),lt(this,Pt,qr(r))}get id(){if(!Nt(this))throw new TypeError("invalid receiver");return c(this,Pt)}dateFromFields(t,r){if(!Nt(this))throw new TypeError("invalid receiver");if(!At(t))throw new TypeError("invalid fields");const o=ht(r),i=c(this,Pt);return zt[i].dateFromFields(t,o,i)}yearMonthFromFields(t,r){if(!Nt(this))throw new TypeError("invalid receiver");if(!At(t))throw new TypeError("invalid fields");const o=ht(r),i=c(this,Pt);return zt[i].yearMonthFromFields(t,o,i)}monthDayFromFields(t,r){if(!Nt(this))throw new TypeError("invalid receiver");if(!At(t))throw new TypeError("invalid fields");const o=ht(r),i=c(this,Pt);return zt[i].monthDayFromFields(t,o,i)}fields(t){if(!Nt(this))throw new TypeError("invalid receiver");const r=[],o=new Set(["year","month","monthCode","day","hour","minute","second","millisecond","microsecond","nanosecond"]);for(const i of t){if(typeof i!="string")throw new TypeError("invalid fields");if(!o.has(i))throw new RangeError(`invalid field name ${i}`);o.delete(i),Gf.call(r,i)}return zt[c(this,Pt)].fields(r)}mergeFields(t,r){if(!Nt(this))throw new TypeError("invalid receiver");const o=kd(t),i=Ga(null);Ei(i,o,[],[void 0]);const s=kd(r),n=Ga(null);Ei(n,s,[],[void 0]);const a=Gd(n),l=zt[c(this,Pt)].fieldKeysToIgnore(a),h=Ga(null),p=Gd(i);for(const u of p){let f;f=H(ju,l,[u])?n[u]:i[u],f!==void 0&&(h[u]=f)}return Ei(h,n,[]),h}dateAdd(t,r,o){if(!Nt(this))throw new TypeError("invalid receiver");const i=wt(t),s=Di(r),n=Gt(ht(o)),{days:a}=_r(c(s,Se),c(s,Ie),c(s,Oe),c(s,Ae),c(s,ze),c(s,Me),c(s,Pe),"day"),l=c(this,Pt);return zt[l].dateAdd(i,c(s,De),c(s,ce),c(s,Ve),a,n,l)}dateUntil(t,r,o){if(!Nt(this))throw new TypeError("invalid receiver");const i=wt(t),s=wt(r);let n=Ge(ht(o),"largestUnit","date","auto");n==="auto"&&(n="day");const{years:a,months:l,weeks:h,days:p}=zt[c(this,Pt)].dateUntil(i,s,n);return new(A("%Temporal.Duration%"))(a,l,h,p,0,0,0,0,0,0)}year(t){let r=t;if(!Nt(this))throw new TypeError("invalid receiver");return ft(r)||(r=wt(r)),zt[c(this,Pt)].year(r)}month(t){let r=t;if(!Nt(this))throw new TypeError("invalid receiver");if(ne(r))throw new TypeError("use monthCode on PlainMonthDay instead");return ft(r)||(r=wt(r)),zt[c(this,Pt)].month(r)}monthCode(t){let r=t;if(!Nt(this))throw new TypeError("invalid receiver");return ft(r)||ne(r)||(r=wt(r)),zt[c(this,Pt)].monthCode(r)}day(t){let r=t;if(!Nt(this))throw new TypeError("invalid receiver");return ne(r)||(r=wt(r)),zt[c(this,Pt)].day(r)}era(t){let r=t;if(!Nt(this))throw new TypeError("invalid receiver");return ft(r)||(r=wt(r)),zt[c(this,Pt)].era(r)}eraYear(t){let r=t;if(!Nt(this))throw new TypeError("invalid receiver");return ft(r)||(r=wt(r)),zt[c(this,Pt)].eraYear(r)}dayOfWeek(t){if(!Nt(this))throw new TypeError("invalid receiver");const r=wt(t);return zt[c(this,Pt)].dayOfWeek(r)}dayOfYear(t){if(!Nt(this))throw new TypeError("invalid receiver");const r=wt(t);return zt[c(this,Pt)].dayOfYear(r)}weekOfYear(t){if(!Nt(this))throw new TypeError("invalid receiver");const r=wt(t);return zt[c(this,Pt)].weekOfYear(r)}yearOfWeek(t){if(!Nt(this))throw new TypeError("invalid receiver");const r=wt(t);return zt[c(this,Pt)].yearOfWeek(r)}daysInWeek(t){if(!Nt(this))throw new TypeError("invalid receiver");const r=wt(t);return zt[c(this,Pt)].daysInWeek(r)}daysInMonth(t){let r=t;if(!Nt(this))throw new TypeError("invalid receiver");return ft(r)||(r=wt(r)),zt[c(this,Pt)].daysInMonth(r)}daysInYear(t){let r=t;if(!Nt(this))throw new TypeError("invalid receiver");return ft(r)||(r=wt(r)),zt[c(this,Pt)].daysInYear(r)}monthsInYear(t){let r=t;if(!Nt(this))throw new TypeError("invalid receiver");return ft(r)||(r=wt(r)),zt[c(this,Pt)].monthsInYear(r)}inLeapYear(t){let r=t;if(!Nt(this))throw new TypeError("invalid receiver");return ft(r)||(r=wt(r)),zt[c(this,Pt)].inLeapYear(r)}toString(){if(!Nt(this))throw new TypeError("invalid receiver");return c(this,Pt)}toJSON(){if(!Nt(this))throw new TypeError("invalid receiver");return c(this,Pt)}static from(t){return Ji(Ze(t))}}function Oc(e){if(!e.startsWith("M"))throw new RangeError(`Invalid month code: ${e}.  Month codes must start with M.`);const t=+e.slice(1);if(isNaN(t))throw new RangeError(`Invalid month code: ${e}`);return t}function uo(e,t=!1){return`M${e.toString().padStart(2,"0")}${t?"L":""}`}function An(e,t,r=12){let{month:o,monthCode:i}=e;if(i===void 0){if(o===void 0)throw new TypeError("Either month or monthCode are required");t==="reject"&&ge(o,1,r),t==="constrain"&&(o=qe(o,1,r)),i=uo(o)}else{const s=Oc(i);if(o!==void 0&&o!==s)throw new RangeError(`monthCode ${i} and month ${o} must match if both are present`);if(i!==uo(s))throw new RangeError(`Invalid month code: ${i}`);if(o=s,o<1||o>r)throw new RangeError(`Invalid monthCode: ${i}`)}return{...e,month:o,monthCode:i}}Zr(Bt,"Temporal.Calendar"),Ft("Temporal.Calendar.from",Bt.from),Ft("Temporal.Calendar.prototype.dateAdd",Bt.prototype.dateAdd),Ft("Temporal.Calendar.prototype.dateFromFields",Bt.prototype.dateFromFields),Ft("Temporal.Calendar.prototype.dateUntil",Bt.prototype.dateUntil),Ft("Temporal.Calendar.prototype.day",Bt.prototype.day),Ft("Temporal.Calendar.prototype.dayOfWeek",Bt.prototype.dayOfWeek),Ft("Temporal.Calendar.prototype.dayOfYear",Bt.prototype.dayOfYear),Ft("Temporal.Calendar.prototype.daysInMonth",Bt.prototype.daysInMonth),Ft("Temporal.Calendar.prototype.daysInWeek",Bt.prototype.daysInWeek),Ft("Temporal.Calendar.prototype.daysInYear",Bt.prototype.daysInYear),Ft("Temporal.Calendar.prototype.era",Bt.prototype.era),Ft("Temporal.Calendar.prototype.eraYear",Bt.prototype.eraYear),Ft("Temporal.Calendar.prototype.fields",Bt.prototype.fields),Ft("Temporal.Calendar.prototype.inLeapYear",Bt.prototype.inLeapYear),Ft("Temporal.Calendar.prototype.mergeFields",Bt.prototype.mergeFields),Ft("Temporal.Calendar.prototype.month",Bt.prototype.month),Ft("Temporal.Calendar.prototype.monthCode",Bt.prototype.monthCode),Ft("Temporal.Calendar.prototype.monthDayFromFields",Bt.prototype.monthDayFromFields),Ft("Temporal.Calendar.prototype.monthsInYear",Bt.prototype.monthsInYear),Ft("Temporal.Calendar.prototype.weekOfYear",Bt.prototype.weekOfYear),Ft("Temporal.Calendar.prototype.year",Bt.prototype.year),Ft("Temporal.Calendar.prototype.yearMonthFromFields",Bt.prototype.yearMonthFromFields),Ft("Temporal.Calendar.prototype.yearOfWeek",Bt.prototype.yearOfWeek),zt.iso8601={dateFromFields(e,t,r){let o=ct(e,["day","month","monthCode","year"],["year","day"]);const i=Gt(t);o=An(o);let{year:s,month:n,day:a}=o;return{year:s,month:n,day:a}=Un(s,n,a,i),fr(s,n,a,r)},yearMonthFromFields(e,t,r){let o=ct(e,["month","monthCode","year"],["year"]);const i=Gt(t);o=An(o);let{year:s,month:n}=o;return{year:s,month:n}=function(l,h,p){let u=l,f=h;switch(p){case"reject":Hr(u,f,1);break;case"constrain":({year:u,month:f}=Cu(u,f))}return{year:u,month:f}}(s,n,i),Ls(s,n,r,1)},monthDayFromFields(e,t,r){let o=ct(e,["day","month","monthCode","year"],["day"]);const i=Gt(t);if(o.month!==void 0&&o.year===void 0&&o.monthCode===void 0)throw new TypeError("either year or monthCode required with month");const s=o.monthCode===void 0;o=An(o);let{month:n,day:a,year:l}=o;return{month:n,day:a}=Un(s?l:1972,n,a,i),Fs(n,a,r,1972)},fields:e=>e,fieldKeysToIgnore(e){const t=new Yu;for(let r=0;r<e.length;r++){const o=e[r];H(we,t,[o]),o==="month"?H(we,t,["monthCode"]):o==="monthCode"&&H(we,t,["month"])}return[...H(Hu,t,[])]},dateAdd(e,t,r,o,i,s,n){let a=c(e,L),l=c(e,N),h=c(e,U);return{year:a,month:l,day:h}=Xo(a,l,h,t,r,o,i,s),fr(a,l,h,n)},dateUntil:(e,t,r)=>Cc(c(e,L),c(e,N),c(e,U),c(t,L),c(t,N),c(t,U),r),year:e=>c(e,L),era(){},eraYear(){},month:e=>c(e,N),monthCode:e=>uo(c(e,N)),day:e=>c(e,U),dayOfWeek:e=>vl(c(e,L),c(e,N),c(e,U)),dayOfYear:e=>qn(c(e,L),c(e,N),c(e,U)),weekOfYear:e=>Md(c(e,L),c(e,N),c(e,U)).week,yearOfWeek:e=>Md(c(e,L),c(e,N),c(e,U)).year,daysInWeek:()=>7,daysInMonth:e=>ho(c(e,L),c(e,N)),daysInYear(e){let t=e;return le(t,L)||(t=wt(t)),Do(c(t,L))?366:365},monthsInYear:()=>12,inLeapYear(e){let t=e;return le(t,L)||(t=wt(t)),Do(c(t,L))}};class Lt{constructor(t){if(this.map=new Map,this.calls=0,this.hits=0,this.misses=0,this.now=globalThis.performance?globalThis.performance.now():Date.now(),t!==void 0){let r=0;for(const o of t.map.entries()){if(++r>Lt.MAX_CACHE_ENTRIES)break;this.map.set(...o)}}}get(t){const r=this.map.get(t);return r&&(this.hits++,this.report()),this.calls++,r}set(t,r){this.map.set(t,r),this.misses++,this.report()}report(){}setObject(t){if(Lt.objectMap.get(t))throw new RangeError("object already cached");Lt.objectMap.set(t,this),this.report()}static getCacheForObject(t){let r=Lt.objectMap.get(t);return r||(r=new Lt,Lt.objectMap.set(t,r)),r}}function qu({isoYear:e,isoMonth:t,isoDay:r}){return`${pi(e)}-${Mt(t)}-${Mt(r)}T00:00Z`}function Za(e,t){return{years:e.year-t.year,months:e.month-t.month,days:e.day-t.day}}Lt.objectMap=new WeakMap,Lt.MAX_CACHE_ENTRIES=1e3;class es{constructor(){this.eraLength="short",this.hasEra=!0,this.erasBeginMidYear=!1}getFormatter(){return this.formatter===void 0&&(this.formatter=new Zf(`en-US-u-ca-${this.id}`,{day:"numeric",month:"numeric",year:"numeric",era:this.eraLength,timeZone:"UTC"})),this.formatter}isoToCalendarDate(t,r){const{year:o,month:i,day:s}=t,n=JSON.stringify({func:"isoToCalendarDate",isoYear:o,isoMonth:i,isoDay:s,id:this.id}),a=r.get(n);if(a)return a;const l=this.getFormatter();let h,p;try{p=qu({isoYear:o,isoMonth:i,isoDay:s}),h=l.formatToParts(new Date(p))}catch{throw new RangeError(`Invalid ISO date: ${JSON.stringify({isoYear:o,isoMonth:i,isoDay:s})}`)}const u={};for(let{type:g,value:b}of h){if(g==="year"&&(u.eraYear=+b),g==="relatedYear"&&(u.eraYear=+b),g==="month"){const y=/^([0-9]*)(.*?)$/.exec(b);if(!y||y.length!=3||!y[1]&&!y[2])throw new RangeError(`Unexpected month: ${b}`);if(u.month=y[1]?+y[1]:1,u.month<1)throw new RangeError(`Invalid month ${b} from ${p}[u-ca-${this.id}] (probably due to https://bugs.chromium.org/p/v8/issues/detail?id=10527)`);if(u.month>13)throw new RangeError(`Invalid month ${b} from ${p}[u-ca-${this.id}] (probably due to https://bugs.chromium.org/p/v8/issues/detail?id=10529)`);y[2]&&(u.monthExtra=y[2])}g==="day"&&(u.day=+b),this.hasEra&&g==="era"&&b!=null&&b!==""&&(b=b.split(" (")[0],u.era=b.normalize("NFD").replace(/[^-0-9 \p{L}]/gu,"").replace(" ","-").toLowerCase())}if(u.eraYear===void 0)throw new RangeError(`Intl.DateTimeFormat.formatToParts lacks relatedYear in ${this.id} calendar. Try Node 14+ or modern browsers.`);if(this.reviseIntlEra){const{era:g,eraYear:b}=this.reviseIntlEra(u,t);u.era=g,u.eraYear=b}this.checkIcuBugs&&this.checkIcuBugs(t);const f=this.adjustCalendarDate(u,r,"constrain",!0);if(f.year===void 0)throw new RangeError(`Missing year converting ${JSON.stringify(t)}`);if(f.month===void 0)throw new RangeError(`Missing month converting ${JSON.stringify(t)}`);if(f.day===void 0)throw new RangeError(`Missing day converting ${JSON.stringify(t)}`);return r.set(n,f),["constrain","reject"].forEach(g=>{const b=JSON.stringify({func:"calendarToIsoDate",year:f.year,month:f.month,day:f.day,overflow:g,id:this.id});r.set(b,t)}),f}validateCalendarDate(t){const{era:r,month:o,year:i,day:s,eraYear:n,monthCode:a,monthExtra:l}=t;if(l!==void 0)throw new RangeError("Unexpected `monthExtra` value");if(i===void 0&&n===void 0)throw new TypeError("year or eraYear is required");if(o===void 0&&a===void 0)throw new TypeError("month or monthCode is required");if(s===void 0)throw new RangeError("Missing day");if(a!==void 0){if(typeof a!="string")throw new RangeError("monthCode must be a string, not "+typeof a);if(!/^M([01]?\d)(L?)$/.test(a))throw new RangeError(`Invalid monthCode: ${a}`)}if(this.constantEra){if(r!==void 0&&r!==this.constantEra)throw new RangeError(`era must be ${this.constantEra}, not ${r}`);if(n!==void 0&&i!==void 0&&n!==i)throw new RangeError(`eraYear ${n} does not match year ${i}`)}if(this.hasEra&&t.era===void 0!=(t.eraYear===void 0))throw new RangeError("properties 'era' and 'eraYear' must be provided together")}adjustCalendarDate(t,r,o="constrain",i=!1){if(this.calendarType==="lunisolar")throw new RangeError("Override required for lunisolar calendars");let s=t;if(this.validateCalendarDate(s),this.constantEra){const{year:h,eraYear:p}=s;s={...s,era:this.constantEra,year:h!==void 0?h:p,eraYear:p!==void 0?p:h}}const n=this.monthsInYear(s,r);let{month:a,monthCode:l}=s;return{month:a,monthCode:l}=An(s,o,n),{...s,month:a,monthCode:l}}regulateMonthDayNaive(t,r,o){const i=this.monthsInYear(t,o);let{month:s,day:n}=t;return r==="reject"?(ge(s,1,i),ge(n,1,this.maximumMonthLength(t))):(s=qe(s,1,i),n=qe(n,1,this.maximumMonthLength({...t,month:s}))),{...t,month:s,day:n}}calendarToIsoDate(t,r="constrain",o){const i=t;let s=this.adjustCalendarDate(t,o,r,!1);s=this.regulateMonthDayNaive(s,r,o);const{year:n,month:a,day:l}=s,h=JSON.stringify({func:"calendarToIsoDate",year:n,month:a,day:l,overflow:r,id:this.id});let p,u=o.get(h);if(u||i.year!==void 0&&i.month!==void 0&&i.day!==void 0&&(i.year!==s.year||i.month!==s.month||i.day!==s.day)&&(p=JSON.stringify({func:"calendarToIsoDate",year:i.year,month:i.month,day:i.day,overflow:r,id:this.id}),u=o.get(p),u))return u;let f=this.estimateIsoDate({year:n,month:a,day:l});const g=x=>{let T=this.addDaysIso(f,x);if(s.day>this.minimumMonthLength(s)){let C=this.isoToCalendarDate(T,o);for(;C.month!==a||C.year!==n;){if(r==="reject")throw new RangeError(`day ${l} does not exist in month ${a} of year ${n}`);T=this.addDaysIso(T,-1),C=this.isoToCalendarDate(T,o)}}return T};let b=0,y=this.isoToCalendarDate(f,o),w=Za(s,y);if(w.years!==0||w.months!==0||w.days!==0){const x=365*w.years+30*w.months+w.days;f=this.addDaysIso(f,x),y=this.isoToCalendarDate(f,o),w=Za(s,y),w.years===0&&w.months===0?f=g(w.days):b=this.compareCalendarDates(s,y)}let _=8;for(;b;){f=this.addDaysIso(f,b*_);const x=y;y=this.isoToCalendarDate(f,o);const T=b;if(b=this.compareCalendarDates(s,y),b){if(w=Za(s,y),w.years===0&&w.months===0)f=g(w.days),b=0;else if(T&&b!==T)if(_>1)_/=2;else{if(r==="reject")throw new RangeError(`Can't find ISO date from calendar date: ${JSON.stringify({...i})}`);this.compareCalendarDates(y,x)>0&&(f=this.addDaysIso(f,-1)),b=0}}}if(o.set(h,f),p&&o.set(p,f),s.year===void 0||s.month===void 0||s.day===void 0||s.monthCode===void 0||this.hasEra&&(s.era===void 0||s.eraYear===void 0))throw new RangeError("Unexpected missing property");return f}temporalToCalendarDate(t,r){const o={year:c(t,L),month:c(t,N),day:c(t,U)};return this.isoToCalendarDate(o,r)}compareCalendarDates(t,r){const o=ct(t,["day","month","year"],["day","month","year"]),i=ct(r,["day","month","year"],["day","month","year"]);return o.year!==i.year?Qo(o.year-i.year):o.month!==i.month?Qo(o.month-i.month):o.day!==i.day?Qo(o.day-i.day):0}regulateDate(t,r="constrain",o){const i=this.calendarToIsoDate(t,r,o);return this.isoToCalendarDate(i,o)}addDaysIso(t,r){return Xo(t.year,t.month,t.day,0,0,0,r,"constrain")}addDaysCalendar(t,r,o){const i=this.calendarToIsoDate(t,"constrain",o),s=this.addDaysIso(i,r);return this.isoToCalendarDate(s,o)}addMonthsCalendar(t,r,o,i){let s=t;const{day:n}=s;for(let a=0,l=Xf(r);a<l;a++){const{month:h}=s,p=s,u=r<0?-Math.max(n,this.daysInPreviousMonth(s,i)):this.daysInMonth(s,i),f=this.calendarToIsoDate(s,"constrain",i);let g=this.addDaysIso(f,u);if(s=this.isoToCalendarDate(g,i),r>0){const b=this.monthsInYear(p,i);for(;s.month-1!=h%b;)g=this.addDaysIso(g,-1),s=this.isoToCalendarDate(g,i)}s.day!==n&&(s=this.regulateDate({...s,day:n},"constrain",i))}if(o==="reject"&&s.day!==n)throw new RangeError(`Day ${n} does not exist in resulting calendar month`);return s}addCalendar(t,{years:r=0,months:o=0,weeks:i=0,days:s=0},n,a){const{year:l,day:h,monthCode:p}=t,u=this.adjustCalendarDate({year:l+r,monthCode:p,day:h},a),f=this.addMonthsCalendar(u,o,n,a),g=s+7*i;return this.addDaysCalendar(f,g,a)}untilCalendar(t,r,o,i){let s=0,n=0,a=0,l=0;switch(o){case"day":s=this.calendarDaysUntil(t,r,i);break;case"week":{const h=this.calendarDaysUntil(t,r,i);s=h%7,n=(h-s)/7;break}case"month":case"year":{const h=this.compareCalendarDates(r,t);if(!h)return{years:0,months:0,weeks:0,days:0};const p=r.year-t.year,u=r.day-t.day;if(o==="year"&&p){let b=0;r.monthCode>t.monthCode&&(b=1),r.monthCode<t.monthCode&&(b=-1),b||(b=Math.sign(u)),l=b*h<0?p-h:p}let f,g=l?this.addCalendar(t,{years:l},"constrain",i):t;do a+=h,f=g,g=this.addMonthsCalendar(f,h,"constrain",i),g.day!==t.day&&(g=this.regulateDate({...g,day:t.day},"constrain",i));while(this.compareCalendarDates(r,g)*h>=0);a-=h,s=this.calendarDaysUntil(f,r,i);break}}return{years:l,months:a,weeks:n,days:s}}daysInMonth(t,r){const{day:o}=t,i=this.maximumMonthLength(t),s=this.minimumMonthLength(t);if(s===i)return s;const n=o<=i-s?i:s,a=this.calendarToIsoDate(t,"constrain",r),l=this.addDaysIso(a,n),h=this.isoToCalendarDate(l,r),p=this.addDaysIso(l,-h.day);return this.isoToCalendarDate(p,r).day}daysInPreviousMonth(t,r){const{day:o,month:i,year:s}=t;let n={year:i>1?s:s-1,month:i,day:1};const a=i>1?i-1:this.monthsInYear(n,r);n={...n,month:a};const l=this.minimumMonthLength(n),h=this.maximumMonthLength(n);if(l===h)return h;const p=this.calendarToIsoDate(t,"constrain",r),u=this.addDaysIso(p,-o);return this.isoToCalendarDate(u,r).day}startOfCalendarYear(t){return{year:t.year,month:1,monthCode:"M01",day:1}}startOfCalendarMonth(t){return{year:t.year,month:t.month,day:1}}calendarDaysUntil(t,r,o){const i=this.calendarToIsoDate(t,"constrain",o),s=this.calendarToIsoDate(r,"constrain",o);return this.isoDaysUntil(i,s)}isoDaysUntil(t,r){return Cc(t.year,t.month,t.day,r.year,r.month,r.day,"day").days}monthDayFromFields(t,r,o){let i,s,n,a,l,{monthCode:h,day:p}=t;if(h===void 0){let{year:g,era:b,eraYear:y}=t;if(g===void 0&&(b===void 0||y===void 0))throw new TypeError("when `monthCode` is omitted, `year` (or `era` and `eraYear`) and `month` are required");({monthCode:h,day:p}=this.isoToCalendarDate(this.calendarToIsoDate(t,r,o),o))}const u=this.isoToCalendarDate({year:1972,month:12,day:31},o),f=u.monthCode>h||u.monthCode===h&&u.day>=p?u.year:u.year-1;for(let g=0;g<100;g++){const b=this.adjustCalendarDate({day:p,monthCode:h,year:f-g},o),y=this.calendarToIsoDate(b,"constrain",o),w=this.isoToCalendarDate(y,o);if({year:i,month:s,day:n}=y,w.monthCode===h&&w.day===p)return{month:s,day:n,year:i};r==="constrain"&&(a===void 0||w.monthCode===a.monthCode&&w.day>a.day)&&(a=w,l=y)}if(r==="constrain"&&l!==void 0)return l;throw new RangeError(`No recent ${this.id} year with monthCode ${h} and day ${p}`)}}class Jf extends es{constructor(){super(...arguments),this.id="hebrew",this.calendarType="lunisolar",this.months={Tishri:{leap:1,regular:1,monthCode:"M01",days:30},Heshvan:{leap:2,regular:2,monthCode:"M02",days:{min:29,max:30}},Kislev:{leap:3,regular:3,monthCode:"M03",days:{min:29,max:30}},Tevet:{leap:4,regular:4,monthCode:"M04",days:29},Shevat:{leap:5,regular:5,monthCode:"M05",days:30},Adar:{leap:void 0,regular:6,monthCode:"M06",days:29},"Adar I":{leap:6,regular:void 0,monthCode:"M05L",days:30},"Adar II":{leap:7,regular:void 0,monthCode:"M06",days:29},Nisan:{leap:8,regular:7,monthCode:"M07",days:30},Iyar:{leap:9,regular:8,monthCode:"M08",days:29},Sivan:{leap:10,regular:9,monthCode:"M09",days:30},Tamuz:{leap:11,regular:10,monthCode:"M10",days:29},Av:{leap:12,regular:11,monthCode:"M11",days:30},Elul:{leap:13,regular:12,monthCode:"M12",days:29}},this.hasEra=!1}inLeapYear(t){const{year:r}=t;return(7*r+1)%19<7}monthsInYear(t){return this.inLeapYear(t)?13:12}minimumMonthLength(t){return this.minMaxMonthLength(t,"min")}maximumMonthLength(t){return this.minMaxMonthLength(t,"max")}minMaxMonthLength(t,r){const{month:o,year:i}=t,s=this.getMonthCode(i,o),n=Cl(this.months).find(l=>l[1].monthCode===s);if(n===void 0)throw new RangeError(`unmatched Hebrew month: ${o}`);const a=n[1].days;return typeof a=="number"?a:a[r]}estimateIsoDate(t){const{year:r}=t;return{year:r-3760,month:1,day:1}}getMonthCode(t,r){return this.inLeapYear({year:t})?r===6?uo(5,!0):uo(r<6?r:r-1):uo(r)}adjustCalendarDate(t,r,o="constrain",i=!1){let{year:s,eraYear:n,month:a,monthCode:l,day:h,monthExtra:p}=t;if(s===void 0&&n!==void 0&&(s=n),n===void 0&&s!==void 0&&(n=s),i){if(p){const u=this.months[p];if(!u)throw new RangeError(`Unrecognized month from formatToParts: ${p}`);a=this.inLeapYear({year:s})?u.leap:u.regular}return l=this.getMonthCode(s,a),{year:s,month:a,day:h,era:void 0,eraYear:n,monthCode:l}}if(this.validateCalendarDate(t),a===void 0)if(l.endsWith("L")){if(l!=="M05L")throw new RangeError(`Hebrew leap month must have monthCode M05L, not ${l}`);if(a=6,!this.inLeapYear({year:s})){if(o==="reject")throw new RangeError(`Hebrew monthCode M05L is invalid in year ${s} which is not a leap year`);a=6,l="M06"}}else{a=Oc(l),this.inLeapYear({year:s})&&a>=6&&a++;const u=this.monthsInYear({year:s});if(a<1||a>u)throw new RangeError(`Invalid monthCode: ${l}`)}else if(o==="reject"?(ge(a,1,this.monthsInYear({year:s})),ge(h,1,this.maximumMonthLength({year:s,month:a}))):(a=qe(a,1,this.monthsInYear({year:s})),h=qe(h,1,this.maximumMonthLength({year:s,month:a}))),l===void 0)l=this.getMonthCode(s,a);else if(this.getMonthCode(s,a)!==l)throw new RangeError(`monthCode ${l} doesn't correspond to month ${a} in Hebrew year ${s}`);return{...t,day:h,month:a,monthCode:l,year:s,eraYear:n}}}class rs extends es{constructor(){super(...arguments),this.calendarType="lunar",this.DAYS_PER_ISLAMIC_YEAR=354+11/30,this.DAYS_PER_ISO_YEAR=365.2425,this.constantEra="ah"}inLeapYear(t,r){return this.daysInMonth({year:t.year,month:12,day:1},r)===30}monthsInYear(){return 12}minimumMonthLength(){return 29}maximumMonthLength(){return 30}estimateIsoDate(t){const{year:r}=this.adjustCalendarDate(t);return{year:Qf(r*this.DAYS_PER_ISLAMIC_YEAR/this.DAYS_PER_ISO_YEAR)+622,month:1,day:1}}}class Wu extends rs{constructor(){super(...arguments),this.id="islamic"}}class tm extends rs{constructor(){super(...arguments),this.id="islamic-umalqura"}}class em extends rs{constructor(){super(...arguments),this.id="islamic-tbla"}}class rm extends rs{constructor(){super(...arguments),this.id="islamic-civil"}}class om extends rs{constructor(){super(...arguments),this.id="islamic-rgsa"}}class im extends rs{constructor(){super(...arguments),this.id="islamicc"}}class sm extends es{constructor(){super(...arguments),this.id="persian",this.calendarType="solar",this.constantEra="ap"}inLeapYear(t,r){return Wu.prototype.inLeapYear.call(this,t,r)}monthsInYear(){return 12}minimumMonthLength(t){const{month:r}=t;return r===12?29:r<=6?31:30}maximumMonthLength(t){const{month:r}=t;return r===12?30:r<=6?31:30}estimateIsoDate(t){const{year:r}=this.adjustCalendarDate(t);return{year:r+621,month:1,day:1}}}class nm extends es{constructor(){super(...arguments),this.id="indian",this.calendarType="solar",this.constantEra="saka",this.months={1:{length:30,month:3,day:22,leap:{length:31,month:3,day:21}},2:{length:31,month:4,day:21},3:{length:31,month:5,day:22},4:{length:31,month:6,day:22},5:{length:31,month:7,day:23},6:{length:31,month:8,day:23},7:{length:30,month:9,day:23},8:{length:30,month:10,day:23},9:{length:30,month:11,day:22},10:{length:30,month:12,day:22},11:{length:30,month:1,nextYear:!0,day:21},12:{length:30,month:2,nextYear:!0,day:20}},this.vulnerableToBceBug=new Date("0000-01-01T00:00Z").toLocaleDateString("en-US-u-ca-indian",{timeZone:"UTC"})!=="10/11/-79 Saka"}inLeapYear(t){return Gu(t.year+78)}monthsInYear(){return 12}minimumMonthLength(t){return this.getMonthInfo(t).length}maximumMonthLength(t){return this.getMonthInfo(t).length}getMonthInfo(t){const{month:r}=t;let o=this.months[r];if(o===void 0)throw new RangeError(`Invalid month: ${r}`);return this.inLeapYear(t)&&o.leap&&(o=o.leap),o}estimateIsoDate(t){const r=this.adjustCalendarDate(t),o=this.getMonthInfo(r);return Xo(r.year+78+(o.nextYear?1:0),o.month,o.day,0,0,0,r.day-1,"constrain")}checkIcuBugs(t){if(this.vulnerableToBceBug&&t.year<1)throw new RangeError(`calendar '${this.id}' is broken for ISO dates before 0001-01-01 (see https://bugs.chromium.org/p/v8/issues/detail?id=10529)`)}}function Gu(e){return e%4==0&&(e%100!=0||e%400==0)}class on extends es{constructor(t,r){super(),this.calendarType="solar",this.v8IsVulnerableToJulianBug=new Date("+001001-01-01T00:00Z").toLocaleDateString("en-US-u-ca-japanese",{timeZone:"UTC"}).startsWith("12"),this.calendarIsVulnerableToJulianBug=!1,this.id=t;const{eras:o,anchorEra:i}=function(n){let a,l=n;if(l.length===0)throw new RangeError("Invalid era data: eras are required");if(l.length===1&&l[0].reverseOf)throw new RangeError("Invalid era data: anchor era cannot count years backwards");if(l.length===1&&!l[0].name)throw new RangeError("Invalid era data: at least one named era is required");if(l.filter(p=>p.reverseOf!=null).length>1)throw new RangeError("Invalid era data: only one era can count years backwards");l.forEach(p=>{if(p.isAnchor||!p.anchorEpoch&&!p.reverseOf){if(a)throw new RangeError("Invalid era data: cannot have multiple anchor eras");a=p,p.anchorEpoch={year:p.hasYearZero?0:1}}else if(!p.name)throw new RangeError("If era name is blank, it must be the anchor era")}),l=l.filter(p=>p.name),l.forEach(p=>{const{reverseOf:u}=p;if(u){const f=l.find(g=>g.name===u);if(f===void 0)throw new RangeError(`Invalid era data: unmatched reverseOf era: ${u}`);p.reverseOf=f,p.anchorEpoch=f.anchorEpoch,p.isoEpoch=f.isoEpoch}p.anchorEpoch.month===void 0&&(p.anchorEpoch.month=1),p.anchorEpoch.day===void 0&&(p.anchorEpoch.day=1)}),Kf.call(l,(p,u)=>{if(p.reverseOf)return 1;if(u.reverseOf)return-1;if(!p.isoEpoch||!u.isoEpoch)throw new RangeError("Invalid era data: missing ISO epoch");return u.isoEpoch.year-p.isoEpoch.year});const h=l[l.length-1].reverseOf;if(h&&h!==l[l.length-2])throw new RangeError("Invalid era data: invalid reverse-sign era");return l.forEach((p,u)=>{p.genericName="era"+(l.length-1-u)}),{eras:l,anchorEra:a||l[0]}}(r);this.anchorEra=i,this.eras=o}inLeapYear(t){const{year:r}=this.estimateIsoDate({month:1,day:1,year:t.year});return Gu(r)}monthsInYear(){return 12}minimumMonthLength(t){const{month:r}=t;return r===2?this.inLeapYear(t)?29:28:[4,6,9,11].indexOf(r)>=0?30:31}maximumMonthLength(t){return this.minimumMonthLength(t)}completeEraYear(t){const r=(a,l)=>{const h=t[a];if(h!=null&&h!=l)throw new RangeError(`Input ${a} ${h} doesn't match calculated value ${l}`)},o=a=>{let l;const h={...t,year:a},p=this.eras.find((u,f)=>{if(f===this.eras.length-1){if(u.reverseOf){if(a>0)throw new RangeError(`Signed year ${a} is invalid for era ${u.name}`);return l=u.anchorEpoch.year-a,!0}return l=a-u.anchorEpoch.year+(u.hasYearZero?0:1),!0}return this.compareCalendarDates(h,u.anchorEpoch)>=0&&(l=a-u.anchorEpoch.year+(u.hasYearZero?0:1),!0)});if(!p)throw new RangeError(`Year ${a} was not matched by any era`);return{eraYear:l,era:p.name}};let{year:i,eraYear:s,era:n}=t;if(i!=null)({eraYear:s,era:n}=o(i)),r("era",n),r("eraYear",s);else{if(s==null)throw new RangeError("Either `year` or `eraYear` and `era` are required");{const a=n===void 0?void 0:this.eras.find(l=>l.name===n||l.genericName===n);if(!a)throw new RangeError(`Era ${n} (ISO year ${s}) was not matched by any era`);if(s<1&&a.reverseOf)throw new RangeError(`Years in ${n} era must be positive, not ${i}`);i=a.reverseOf?a.anchorEpoch.year-s:s+a.anchorEpoch.year-(a.hasYearZero?0:1),r("year",i),{eraYear:s,era:n}=o(i)}}return{...t,year:i,eraYear:s,era:n}}adjustCalendarDate(t,r,o="constrain"){let i=t;const{month:s,monthCode:n}=i;return s===void 0&&(i={...i,month:Oc(n)}),this.validateCalendarDate(i),i=this.completeEraYear(i),super.adjustCalendarDate(i,r,o)}estimateIsoDate(t){const r=this.adjustCalendarDate(t),{year:o,month:i,day:s}=r,{anchorEra:n}=this;return Un(o+n.isoEpoch.year-(n.hasYearZero?0:1),i,s,"constrain")}checkIcuBugs(t){if(this.calendarIsVulnerableToJulianBug&&this.v8IsVulnerableToJulianBug&&xo(t.year,t.month,t.day,1582,10,15)<0)throw new RangeError(`calendar '${this.id}' is broken for ISO dates before 1582-10-15 (see https://bugs.chromium.org/p/chromium/issues/detail?id=1173158)`)}}class Ac extends on{constructor(t,r){super(t,r)}inLeapYear(t){const{year:r}=t;return(r+1)%4==0}monthsInYear(){return 13}minimumMonthLength(t){const{month:r}=t;return r===13?this.inLeapYear(t)?6:5:30}maximumMonthLength(t){return this.minimumMonthLength(t)}}class am extends Ac{constructor(){super("ethioaa",[{name:"era0",isoEpoch:{year:-5492,month:7,day:17}}])}}class lm extends Ac{constructor(){super("coptic",[{name:"era1",isoEpoch:{year:284,month:8,day:29}},{name:"era0",reverseOf:"era1"}])}}class cm extends Ac{constructor(){super("ethiopic",[{name:"era0",isoEpoch:{year:-5492,month:7,day:17}},{name:"era1",isoEpoch:{year:8,month:8,day:27},anchorEpoch:{year:5501}}])}}class dm extends on{constructor(){super("roc",[{name:"minguo",isoEpoch:{year:1912,month:1,day:1}},{name:"before-roc",reverseOf:"minguo"}]),this.calendarIsVulnerableToJulianBug=!0}}class hm extends on{constructor(){super("buddhist",[{name:"be",hasYearZero:!0,isoEpoch:{year:-543,month:1,day:1}}]),this.calendarIsVulnerableToJulianBug=!0}}class um extends on{constructor(){super("gregory",[{name:"ce",isoEpoch:{year:1,month:1,day:1}},{name:"bce",reverseOf:"ce"}])}reviseIntlEra(t){let{era:r,eraYear:o}=t;return r!=="bc"&&r!=="b"||(r="bce"),r!=="ad"&&r!=="a"||(r="ce"),{era:r,eraYear:o}}}class pm extends on{constructor(){super("japanese",[{name:"reiwa",isoEpoch:{year:2019,month:5,day:1},anchorEpoch:{year:2019,month:5,day:1}},{name:"heisei",isoEpoch:{year:1989,month:1,day:8},anchorEpoch:{year:1989,month:1,day:8}},{name:"showa",isoEpoch:{year:1926,month:12,day:25},anchorEpoch:{year:1926,month:12,day:25}},{name:"taisho",isoEpoch:{year:1912,month:7,day:30},anchorEpoch:{year:1912,month:7,day:30}},{name:"meiji",isoEpoch:{year:1868,month:9,day:8},anchorEpoch:{year:1868,month:9,day:8}},{name:"ce",isoEpoch:{year:1,month:1,day:1}},{name:"bce",reverseOf:"ce"}]),this.calendarIsVulnerableToJulianBug=!0,this.eraLength="long",this.erasBeginMidYear=!0}reviseIntlEra(t,r){const{era:o,eraYear:i}=t,{year:s}=r;return this.eras.find(n=>n.name===o)?{era:o,eraYear:i}:s<1?{era:"bce",eraYear:1-s}:{era:"ce",eraYear:s}}}class Zu extends es{constructor(){super(...arguments),this.calendarType="lunisolar",this.hasEra=!1}inLeapYear(t,r){const o=this.getMonthList(t.year,r);return Cl(o).length===13}monthsInYear(t,r){return this.inLeapYear(t,r)?13:12}minimumMonthLength(){return 29}maximumMonthLength(){return 30}getMonthList(t,r){if(t===void 0)throw new TypeError("Missing year");const o=JSON.stringify({func:"getMonthList",calendarYear:t,id:this.id}),i=r.get(o);if(i)return i;const s=this.getFormatter(),n=(w,_)=>{const x=qu({isoYear:w,isoMonth:2,isoDay:1}),T=new Date(x);T.setUTCDate(_+1);const C=s.formatToParts(T),k=C.find(O=>O.type==="month").value,D=+C.find(O=>O.type==="day").value;let S=C.find(O=>O.type==="relatedYear");if(S===void 0)throw new RangeError(`Intl.DateTimeFormat.formatToParts lacks relatedYear in ${this.id} calendar. Try Node 14+ or modern browsers.`);return S=+S.value,{calendarMonthString:k,calendarDay:D,calendarYearToVerify:S}};let a=17,{calendarMonthString:l,calendarDay:h,calendarYearToVerify:p}=n(t,a);l!=="1"&&(a+=29,{calendarMonthString:l,calendarDay:h}=n(t,a)),a-=h-5;const u={};let f,g,b=1,y=!1;do({calendarMonthString:l,calendarDay:h,calendarYearToVerify:p}=n(t,a)),f&&(u[g].daysInMonth=f+30-h),p!==t?y=!0:(u[l]={monthIndex:b++},a+=30),f=h,g=l;while(!y);return u[g].daysInMonth=f+30-h,r.set(o,u),u}estimateIsoDate(t){const{year:r,month:o}=t;return{year:r,month:o>=12?12:o+1,day:1}}adjustCalendarDate(t,r,o="constrain",i=!1){let{year:s,month:n,monthExtra:a,day:l,monthCode:h,eraYear:p}=t;if(i){if(s=p,a&&a!=="bis")throw new RangeError(`Unexpected leap month suffix: ${a}`);const u=uo(n,a!==void 0),f=`${n}${a||""}`,g=this.getMonthList(s,r)[f];if(g===void 0)throw new RangeError(`Unmatched month ${f} in Chinese year ${s}`);return n=g.monthIndex,{year:s,month:n,day:l,era:void 0,eraYear:p,monthCode:u}}if(this.validateCalendarDate(t),s===void 0&&(s=p),p===void 0&&(p=s),n===void 0){const u=this.getMonthList(s,r);let f=h.replace("L","bis").slice(1);f[0]==="0"&&(f=f.slice(1));let g=u[f];if(n=g&&g.monthIndex,n===void 0&&h.endsWith("L")&&h!="M13L"&&o==="constrain"){let b=h.slice(1,-1);b[0]==="0"&&(b=b.slice(1)),g=u[b],g&&(n=g.monthIndex,h=uo(b))}if(n===void 0)throw new RangeError(`Unmatched month ${h} in Chinese year ${s}`)}else if(h===void 0){const u=this.getMonthList(s,r),f=Cl(u),g=f.length;o==="reject"?(ge(n,1,g),ge(l,1,this.maximumMonthLength())):(n=qe(n,1,g),l=qe(l,1,this.maximumMonthLength()));const b=f.find(([,y])=>y.monthIndex===n);if(b===void 0)throw new RangeError(`Invalid month ${n} in Chinese year ${s}`);h=uo(b[0].replace("bis",""),b[0].indexOf("bis")!==-1)}else{const u=this.getMonthList(s,r);let f=h.replace("L","bis").slice(1);f[0]==="0"&&(f=f.slice(1));const g=u[f];if(!g)throw new RangeError(`Unmatched monthCode ${h} in Chinese year ${s}`);if(n!==g.monthIndex)throw new RangeError(`monthCode ${h} doesn't correspond to month ${n} in Chinese year ${s}`)}return{...t,year:s,eraYear:p,month:n,monthCode:h,day:l}}}class fm extends Zu{constructor(){super(...arguments),this.id="chinese"}}class mm extends Zu{constructor(){super(...arguments),this.id="dangi"}}class gm{constructor(t){this.helper=t}dateFromFields(t,r,o){const i=new Lt,s=ct(t,this.fields(["day","month","monthCode","year"]),[]),n=Gt(r),{year:a,month:l,day:h}=this.helper.calendarToIsoDate(s,n,i),p=fr(a,l,h,o);return i.setObject(p),p}yearMonthFromFields(t,r,o){const i=new Lt,s=ct(t,this.fields(["month","monthCode","year"]),[]),n=Gt(r),{year:a,month:l,day:h}=this.helper.calendarToIsoDate({...s,day:1},n,i),p=Ls(a,l,o,h);return i.setObject(p),p}monthDayFromFields(t,r,o){const i=new Lt,s=ct(t,this.fields(["day","month","monthCode","year"]),[]),n=Gt(r),{year:a,month:l,day:h}=this.helper.monthDayFromFields(s,n,i),p=Fs(l,h,o,a);return i.setObject(p),p}fields(t){let r=t;return ju.call(r,"year")&&(r=[...r,"era","eraYear"]),r}fieldKeysToIgnore(t){const r=new Yu;for(let o=0;o<t.length;o++){const i=t[o];switch(H(we,r,[i]),i){case"era":H(we,r,["eraYear"]),H(we,r,["year"]);break;case"eraYear":H(we,r,["era"]),H(we,r,["year"]);break;case"year":H(we,r,["era"]),H(we,r,["eraYear"]);break;case"month":H(we,r,["monthCode"]),this.helper.erasBeginMidYear&&(H(we,r,["era"]),H(we,r,["eraYear"]));break;case"monthCode":H(we,r,["month"]),this.helper.erasBeginMidYear&&(H(we,r,["era"]),H(we,r,["eraYear"]));break;case"day":this.helper.erasBeginMidYear&&(H(we,r,["era"]),H(we,r,["eraYear"]))}}return[...H(Hu,r,[])]}dateAdd(t,r,o,i,s,n,a){const l=Lt.getCacheForObject(t),h=this.helper.temporalToCalendarDate(t,l),p=this.helper.addCalendar(h,{years:r,months:o,weeks:i,days:s},n,l),u=this.helper.calendarToIsoDate(p,"constrain",l),{year:f,month:g,day:b}=u,y=fr(f,g,b,a);return new Lt(l).setObject(y),y}dateUntil(t,r,o){const i=Lt.getCacheForObject(t),s=Lt.getCacheForObject(r),n=this.helper.temporalToCalendarDate(t,i),a=this.helper.temporalToCalendarDate(r,s);return this.helper.untilCalendar(n,a,o,i)}year(t){const r=Lt.getCacheForObject(t);return this.helper.temporalToCalendarDate(t,r).year}month(t){const r=Lt.getCacheForObject(t);return this.helper.temporalToCalendarDate(t,r).month}day(t){const r=Lt.getCacheForObject(t);return this.helper.temporalToCalendarDate(t,r).day}era(t){if(!this.helper.hasEra)return;const r=Lt.getCacheForObject(t);return this.helper.temporalToCalendarDate(t,r).era}eraYear(t){if(!this.helper.hasEra)return;const r=Lt.getCacheForObject(t);return this.helper.temporalToCalendarDate(t,r).eraYear}monthCode(t){const r=Lt.getCacheForObject(t);return this.helper.temporalToCalendarDate(t,r).monthCode}dayOfWeek(t){return zt.iso8601.dayOfWeek(t)}dayOfYear(t){const r=Lt.getCacheForObject(t),o=this.helper.isoToCalendarDate(t,r),i=this.helper.startOfCalendarYear(o);return this.helper.calendarDaysUntil(i,o,r)+1}weekOfYear(t){return zt.iso8601.weekOfYear(t)}yearOfWeek(t){return zt.iso8601.yearOfWeek(t)}daysInWeek(t){return zt.iso8601.daysInWeek(t)}daysInMonth(t){const r=Lt.getCacheForObject(t),o=this.helper.temporalToCalendarDate(t,r),i=this.helper.maximumMonthLength(o);if(i===this.helper.minimumMonthLength(o))return i;const s=this.helper.startOfCalendarMonth(o),n=this.helper.addMonthsCalendar(s,1,"constrain",r);return this.helper.calendarDaysUntil(s,n,r)}daysInYear(t){let r=t;le(r,L)||(r=wt(r));const o=Lt.getCacheForObject(r),i=this.helper.temporalToCalendarDate(r,o),s=this.helper.startOfCalendarYear(i),n=this.helper.addCalendar(s,{years:1},"constrain",o);return this.helper.calendarDaysUntil(s,n,o)}monthsInYear(t){const r=Lt.getCacheForObject(t),o=this.helper.temporalToCalendarDate(t,r);return this.helper.monthsInYear(o,r)}inLeapYear(t){let r=t;le(r,L)||(r=wt(r));const o=Lt.getCacheForObject(r),i=this.helper.temporalToCalendarDate(r,o);return this.helper.inLeapYear(i,o)}}for(const e of[Jf,sm,cm,am,lm,fm,mm,dm,nm,hm,um,pm,Wu,tm,em,rm,om,im]){const t=new e;zt[t.id]=new gm(t)}class sn{constructor(t,r,o,i="iso8601"){au(this,pt(t),pt(r),pt(o),Ze(i))}get calendarId(){if(!dt(this))throw new TypeError("invalid receiver");return be(c(this,E))}get era(){if(!dt(this))throw new TypeError("invalid receiver");return ba(c(this,E),this)}get eraYear(){if(!dt(this))throw new TypeError("invalid receiver");return ya(c(this,E),this)}get year(){if(!dt(this))throw new TypeError("invalid receiver");return ma(c(this,E),this)}get month(){if(!dt(this))throw new TypeError("invalid receiver");return ga(c(this,E),this)}get monthCode(){if(!dt(this))throw new TypeError("invalid receiver");return Qs(c(this,E),this)}get day(){if(!dt(this))throw new TypeError("invalid receiver");return Js(c(this,E),this)}get dayOfWeek(){if(!dt(this))throw new TypeError("invalid receiver");return pc(c(this,E),this)}get dayOfYear(){if(!dt(this))throw new TypeError("invalid receiver");return fc(c(this,E),this)}get weekOfYear(){if(!dt(this))throw new TypeError("invalid receiver");return mc(c(this,E),this)}get yearOfWeek(){if(!dt(this))throw new TypeError("invalid receiver");return gc(c(this,E),this)}get daysInWeek(){if(!dt(this))throw new TypeError("invalid receiver");return bc(c(this,E),this)}get daysInMonth(){if(!dt(this))throw new TypeError("invalid receiver");return va(c(this,E),this)}get daysInYear(){if(!dt(this))throw new TypeError("invalid receiver");return wa(c(this,E),this)}get monthsInYear(){if(!dt(this))throw new TypeError("invalid receiver");return _a(c(this,E),this)}get inLeapYear(){if(!dt(this))throw new TypeError("invalid receiver");return xa(c(this,E),this)}with(t,r){if(!dt(this))throw new TypeError("invalid receiver");if(!At(t))throw new TypeError("invalid argument");Ki(t);const o=ht(r),i=c(this,E),s=Xt(i,["day","month","monthCode","year"]);let n=ct(this,s,[]);return n=si(i,n,ct(t,s,"partial")),n=ct(n,s,[]),po(i,n,o)}withCalendar(t){if(!dt(this))throw new TypeError("invalid receiver");const r=Ze(t);return new sn(c(this,L),c(this,N),c(this,U),r)}add(t,r){if(!dt(this))throw new TypeError("invalid receiver");const o=Di(t),i=ht(r);return me(c(this,E),this,o,i)}subtract(t,r){if(!dt(this))throw new TypeError("invalid receiver");const o=xu(Di(t)),i=ht(r);return me(c(this,E),this,o,i)}until(t,r){if(!dt(this))throw new TypeError("invalid receiver");return Ld("until",this,t,r)}since(t,r){if(!dt(this))throw new TypeError("invalid receiver");return Ld("since",this,t,r)}equals(t){if(!dt(this))throw new TypeError("invalid receiver");const r=wt(t);for(const o of[L,N,U])if(c(this,o)!==c(r,o))return!1;return en(c(this,E),c(r,E))}toString(t){if(!dt(this))throw new TypeError("invalid receiver");return Dd(this,Gs(ht(t)))}toJSON(){if(!dt(this))throw new TypeError("invalid receiver");return Dd(this)}toLocaleString(t,r){if(!dt(this))throw new TypeError("invalid receiver");return new Ro(t,r).format(this)}valueOf(){throw new TypeError("use compare() or equals() to compare Temporal.PlainDate")}toPlainDateTime(t){if(!dt(this))throw new TypeError("invalid receiver");const r=c(this,L),o=c(this,N),i=c(this,U),s=c(this,E);if(t===void 0)return He(r,o,i,0,0,0,0,0,0,s);const n=lo(t);return He(r,o,i,c(n,rt),c(n,ot),c(n,it),c(n,st),c(n,nt),c(n,at),s)}toZonedDateTime(t){if(!dt(this))throw new TypeError("invalid receiver");let r,o;if(At(t))if(lr(t))r=t;else{const b=t.timeZone;b===void 0?r=Ce(t):(r=Ce(b),o=t.plainTime)}else r=Ce(t);const i=c(this,L),s=c(this,N),n=c(this,U),a=c(this,E);let l=0,h=0,p=0,u=0,f=0,g=0;return o!==void 0&&(o=lo(o),l=c(o,rt),h=c(o,ot),p=c(o,it),u=c(o,st),f=c(o,nt),g=c(o,at)),fe(c(Le(r,He(i,s,n,l,h,p,u,f,g,a),"compatible"),K),r,a)}toPlainYearMonth(){if(!dt(this))throw new TypeError("invalid receiver");const t=c(this,E);return ni(t,ct(this,Xt(t,["monthCode","year"]),[]))}toPlainMonthDay(){if(!dt(this))throw new TypeError("invalid receiver");const t=c(this,E);return Ni(t,ct(this,Xt(t,["day","monthCode"]),[]))}getISOFields(){if(!dt(this))throw new TypeError("invalid receiver");return{calendar:c(this,E),isoDay:c(this,U),isoMonth:c(this,N),isoYear:c(this,L)}}getCalendar(){if(!dt(this))throw new TypeError("invalid receiver");return Ji(c(this,E))}static from(t,r){const o=ht(r);return dt(t)?(Gt(o),fr(c(t,L),c(t,N),c(t,U),c(t,E))):wt(t,o)}static compare(t,r){const o=wt(t),i=wt(r);return xo(c(o,L),c(o,N),c(o,U),c(i,L),c(i,N),c(i,U))}}Zr(sn,"Temporal.PlainDate");class nn{constructor(t,r,o,i=0,s=0,n=0,a=0,l=0,h=0,p="iso8601"){lu(this,pt(t),pt(r),pt(o),i===void 0?0:pt(i),s===void 0?0:pt(s),n===void 0?0:pt(n),a===void 0?0:pt(a),l===void 0?0:pt(l),h===void 0?0:pt(h),Ze(p))}get calendarId(){if(!et(this))throw new TypeError("invalid receiver");return be(c(this,E))}get year(){if(!et(this))throw new TypeError("invalid receiver");return ma(c(this,E),this)}get month(){if(!et(this))throw new TypeError("invalid receiver");return ga(c(this,E),this)}get monthCode(){if(!et(this))throw new TypeError("invalid receiver");return Qs(c(this,E),this)}get day(){if(!et(this))throw new TypeError("invalid receiver");return Js(c(this,E),this)}get hour(){if(!et(this))throw new TypeError("invalid receiver");return c(this,rt)}get minute(){if(!et(this))throw new TypeError("invalid receiver");return c(this,ot)}get second(){if(!et(this))throw new TypeError("invalid receiver");return c(this,it)}get millisecond(){if(!et(this))throw new TypeError("invalid receiver");return c(this,st)}get microsecond(){if(!et(this))throw new TypeError("invalid receiver");return c(this,nt)}get nanosecond(){if(!et(this))throw new TypeError("invalid receiver");return c(this,at)}get era(){if(!et(this))throw new TypeError("invalid receiver");return ba(c(this,E),this)}get eraYear(){if(!et(this))throw new TypeError("invalid receiver");return ya(c(this,E),this)}get dayOfWeek(){if(!et(this))throw new TypeError("invalid receiver");return pc(c(this,E),this)}get dayOfYear(){if(!et(this))throw new TypeError("invalid receiver");return fc(c(this,E),this)}get weekOfYear(){if(!et(this))throw new TypeError("invalid receiver");return mc(c(this,E),this)}get yearOfWeek(){if(!et(this))throw new TypeError("invalid receiver");return gc(c(this,E),this)}get daysInWeek(){if(!et(this))throw new TypeError("invalid receiver");return bc(c(this,E),this)}get daysInYear(){if(!et(this))throw new TypeError("invalid receiver");return wa(c(this,E),this)}get daysInMonth(){if(!et(this))throw new TypeError("invalid receiver");return va(c(this,E),this)}get monthsInYear(){if(!et(this))throw new TypeError("invalid receiver");return _a(c(this,E),this)}get inLeapYear(){if(!et(this))throw new TypeError("invalid receiver");return xa(c(this,E),this)}with(t,r){if(!et(this))throw new TypeError("invalid receiver");if(!At(t))throw new TypeError("invalid argument");Ki(t);const o=ht(r),i=c(this,E),s=Xt(i,["day","hour","microsecond","millisecond","minute","month","monthCode","nanosecond","second","year"]);let n=ct(this,s,[]);n=si(i,n,ct(t,s,"partial")),n=ct(n,s,[]);const{year:a,month:l,day:h,hour:p,minute:u,second:f,millisecond:g,microsecond:b,nanosecond:y}=Xs(i,n,o);return He(a,l,h,p,u,f,g,b,y,i)}withPlainTime(t){if(!et(this))throw new TypeError("invalid receiver");const r=c(this,L),o=c(this,N),i=c(this,U),s=c(this,E);if(t===void 0)return He(r,o,i,0,0,0,0,0,0,s);const n=lo(t);return He(r,o,i,c(n,rt),c(n,ot),c(n,it),c(n,st),c(n,nt),c(n,at),s)}withPlainDate(t){if(!et(this))throw new TypeError("invalid receiver");const r=wt(t),o=c(r,L),i=c(r,N),s=c(r,U);let n=c(r,E);const a=c(this,rt),l=c(this,ot),h=c(this,it),p=c(this,st),u=c(this,nt),f=c(this,at);return n=uu(c(this,E),n),He(o,i,s,a,l,h,p,u,f,n)}withCalendar(t){if(!et(this))throw new TypeError("invalid receiver");const r=Ze(t);return new nn(c(this,L),c(this,N),c(this,U),c(this,rt),c(this,ot),c(this,it),c(this,st),c(this,nt),c(this,at),r)}add(t,r){if(!et(this))throw new TypeError("invalid receiver");return Yd("add",this,t,r)}subtract(t,r){if(!et(this))throw new TypeError("invalid receiver");return Yd("subtract",this,t,r)}until(t,r){if(!et(this))throw new TypeError("invalid receiver");return Rd("until",this,t,r)}since(t,r){if(!et(this))throw new TypeError("invalid receiver");return Rd("since",this,t,r)}round(t){if(!et(this))throw new TypeError("invalid receiver");if(t===void 0)throw new TypeError("options parameter is required");const r=typeof t=="string"?Vi("smallestUnit",t):ht(t),o=Xi(r),i=Ir(r,"halfExpand"),s=Ge(r,"smallestUnit","time",oi,["day"]),n={day:1,hour:24,minute:60,second:60,millisecond:1e3,microsecond:1e3,nanosecond:1e3}[s];Qi(o,n,n===1);let a=c(this,L),l=c(this,N),h=c(this,U),p=c(this,rt),u=c(this,ot),f=c(this,it),g=c(this,st),b=c(this,nt),y=c(this,at);return{year:a,month:l,day:h,hour:p,minute:u,second:f,millisecond:g,microsecond:b,nanosecond:y}=$c(a,l,h,p,u,f,g,b,y,o,s,i),He(a,l,h,p,u,f,g,b,y,c(this,E))}equals(t){if(!et(this))throw new TypeError("invalid receiver");const r=Zo(t);for(const o of[L,N,U,rt,ot,it,st,nt,at])if(c(this,o)!==c(r,o))return!1;return en(c(this,E),c(r,E))}toString(t){if(!et(this))throw new TypeError("invalid receiver");const r=ht(t),o=Gs(r),i=Zs(r),s=Ir(r,"trunc"),n=Ge(r,"smallestUnit","time",void 0);if(n==="hour")throw new RangeError('smallestUnit must be a time unit other than "hour"');const{precision:a,unit:l,increment:h}=Ks(n,i);return Sd(this,a,o,{unit:l,increment:h,roundingMode:s})}toJSON(){if(!et(this))throw new TypeError("invalid receiver");return Sd(this,"auto")}toLocaleString(t,r){if(!et(this))throw new TypeError("invalid receiver");return new Ro(t,r).format(this)}valueOf(){throw new TypeError("use compare() or equals() to compare Temporal.PlainDateTime")}toZonedDateTime(t,r){if(!et(this))throw new TypeError("invalid receiver");const o=Ce(t);return fe(c(Le(o,this,Ri(ht(r))),K),o,c(this,E))}toPlainDate(){if(!et(this))throw new TypeError("invalid receiver");return Bi(this)}toPlainYearMonth(){if(!et(this))throw new TypeError("invalid receiver");const t=c(this,E);return ni(t,ct(this,Xt(t,["monthCode","year"]),[]))}toPlainMonthDay(){if(!et(this))throw new TypeError("invalid receiver");const t=c(this,E);return Ni(t,ct(this,Xt(t,["day","monthCode"]),[]))}toPlainTime(){if(!et(this))throw new TypeError("invalid receiver");return yc(this)}getISOFields(){if(!et(this))throw new TypeError("invalid receiver");return{calendar:c(this,E),isoDay:c(this,U),isoHour:c(this,rt),isoMicrosecond:c(this,nt),isoMillisecond:c(this,st),isoMinute:c(this,ot),isoMonth:c(this,N),isoNanosecond:c(this,at),isoSecond:c(this,it),isoYear:c(this,L)}}getCalendar(){if(!et(this))throw new TypeError("invalid receiver");return Ji(c(this,E))}static from(t,r){const o=ht(r);return et(t)?(Gt(o),He(c(t,L),c(t,N),c(t,U),c(t,rt),c(t,ot),c(t,it),c(t,st),c(t,nt),c(t,at),c(t,E))):Zo(t,o)}static compare(t,r){const o=Zo(t),i=Zo(r);for(const s of[L,N,U,rt,ot,it,st,nt,at]){const n=c(o,s),a=c(i,s);if(n!==a)return Qo(n-a)}return 0}}Zr(nn,"Temporal.PlainDateTime");class Co{constructor(t=0,r=0,o=0,i=0,s=0,n=0,a=0,l=0,h=0,p=0){const u=t===void 0?0:ae(t),f=r===void 0?0:ae(r),g=o===void 0?0:ae(o),b=i===void 0?0:ae(i),y=s===void 0?0:ae(s),w=n===void 0?0:ae(n),_=a===void 0?0:ae(a),x=l===void 0?0:ae(l),T=h===void 0?0:ae(h),C=p===void 0?0:ae(p);Wn(u,f,g,b,y,w,_,x,T,C),Kr(this),lt(this,De,u),lt(this,ce,f),lt(this,Ve,g),lt(this,Se,b),lt(this,Ie,y),lt(this,Oe,w),lt(this,Ae,_),lt(this,ze,x),lt(this,Me,T),lt(this,Pe,C)}get years(){if(!Ut(this))throw new TypeError("invalid receiver");return c(this,De)}get months(){if(!Ut(this))throw new TypeError("invalid receiver");return c(this,ce)}get weeks(){if(!Ut(this))throw new TypeError("invalid receiver");return c(this,Ve)}get days(){if(!Ut(this))throw new TypeError("invalid receiver");return c(this,Se)}get hours(){if(!Ut(this))throw new TypeError("invalid receiver");return c(this,Ie)}get minutes(){if(!Ut(this))throw new TypeError("invalid receiver");return c(this,Oe)}get seconds(){if(!Ut(this))throw new TypeError("invalid receiver");return c(this,Ae)}get milliseconds(){if(!Ut(this))throw new TypeError("invalid receiver");return c(this,ze)}get microseconds(){if(!Ut(this))throw new TypeError("invalid receiver");return c(this,Me)}get nanoseconds(){if(!Ut(this))throw new TypeError("invalid receiver");return c(this,Pe)}get sign(){if(!Ut(this))throw new TypeError("invalid receiver");return jr(c(this,De),c(this,ce),c(this,Ve),c(this,Se),c(this,Ie),c(this,Oe),c(this,Ae),c(this,ze),c(this,Me),c(this,Pe))}get blank(){if(!Ut(this))throw new TypeError("invalid receiver");return jr(c(this,De),c(this,ce),c(this,Ve),c(this,Se),c(this,Ie),c(this,Oe),c(this,Ae),c(this,ze),c(this,Me),c(this,Pe))===0}with(t){if(!Ut(this))throw new TypeError("invalid receiver");const r=ct(t,["days","hours","microseconds","milliseconds","minutes","months","nanoseconds","seconds","weeks","years"],"partial"),{years:o=c(this,De),months:i=c(this,ce),weeks:s=c(this,Ve),days:n=c(this,Se),hours:a=c(this,Ie),minutes:l=c(this,Oe),seconds:h=c(this,Ae),milliseconds:p=c(this,ze),microseconds:u=c(this,Me),nanoseconds:f=c(this,Pe)}=r;return new Co(o,i,s,n,a,l,h,p,u,f)}negated(){if(!Ut(this))throw new TypeError("invalid receiver");return xu(this)}abs(){if(!Ut(this))throw new TypeError("invalid receiver");return new Co(Math.abs(c(this,De)),Math.abs(c(this,ce)),Math.abs(c(this,Ve)),Math.abs(c(this,Se)),Math.abs(c(this,Ie)),Math.abs(c(this,Oe)),Math.abs(c(this,Ae)),Math.abs(c(this,ze)),Math.abs(c(this,Me)),Math.abs(c(this,Pe)))}add(t,r){if(!Ut(this))throw new TypeError("invalid receiver");return Vd("add",this,t,r)}subtract(t,r){if(!Ut(this))throw new TypeError("invalid receiver");return Vd("subtract",this,t,r)}round(t){if(!Ut(this))throw new TypeError("invalid receiver");if(t===void 0)throw new TypeError("options parameter is required");let r=c(this,De),o=c(this,ce),i=c(this,Ve),s=c(this,Se),n=c(this,Ie),a=c(this,Oe),l=c(this,Ae),h=c(this,ze),p=c(this,Me),u=c(this,Pe),f=gl(r,o,i,s,n,a,l,h,p,u);const g=typeof t=="string"?Vi("smallestUnit",t):ht(t);let b=Ge(g,"largestUnit","datetime",void 0,["auto"]),y=Sn(g);const w=Xi(g),_=Ir(g,"halfExpand");let x=Ge(g,"smallestUnit","datetime",void 0),T=!0;x||(T=!1,x="nanosecond"),f=ii(f,x);let C=!0;if(b||(C=!1,b=f),b==="auto"&&(b=f),!T&&!C)throw new RangeError("at least one of smallestUnit or largestUnit is required");if(ii(b,x)!==b)throw new RangeError(`largestUnit ${b} cannot be smaller than smallestUnit ${x}`);const k={hour:24,minute:60,second:60,millisecond:1e3,microsecond:1e3,nanosecond:1e3}[x];return k!==void 0&&Qi(w,k,!1),{years:r,months:o,weeks:i,days:s}=_n(r,o,i,s,b,y),{years:r,months:o,weeks:i,days:s,hours:n,minutes:a,seconds:l,milliseconds:h,microseconds:p,nanoseconds:u}=fo(r,o,i,s,n,a,l,h,p,u,w,x,_,y),{years:r,months:o,weeks:i,days:s,hours:n,minutes:a,seconds:l,milliseconds:h,microseconds:p,nanoseconds:u}=Ou(r,o,i,s,n,a,l,h,p,u,w,x,_,y),{days:s,hours:n,minutes:a,seconds:l,milliseconds:h,microseconds:p,nanoseconds:u}=_r(s,n,a,l,h,p,u,b,y),{years:r,months:o,weeks:i,days:s}=function(S,O,I,P,X,W){const V=A("%Temporal.Duration%"),q=jr(S,O,I,P,0,0,0,0,0,0);if(q===0)return{years:S,months:O,weeks:I,days:P};const z=d.BigInt(q);let Y,Q,Yt=d.BigInt(S),Jt=d.BigInt(O),te=d.BigInt(I),Ht=d.BigInt(P);W&&(Q=wt(W),Y=c(Q,E));const Qe=new V(q),Lr=new V(0,q),Rr=new V(0,0,q);switch(X){case"year":{if(!Y)throw new RangeError("a starting point is required for years balancing");const Je=typeof Y!="string"?gt(Y,"dateAdd"):void 0;let pe,tr,wn;for({relativeTo:pe,days:tr}=_e(Y,Q,Qe,Je);d.greaterThanOrEqual(Dr(Ht),d.BigInt(Ot(tr)));)Ht=d.subtract(Ht,d.BigInt(tr)),Yt=d.add(Yt,z),Q=pe,{relativeTo:pe,days:tr}=_e(Y,Q,Qe,Je);for({relativeTo:pe,days:wn}=_e(Y,Q,Lr,Je);d.greaterThanOrEqual(Dr(Ht),d.BigInt(Ot(wn)));)Ht=d.subtract(Ht,d.BigInt(wn)),Jt=d.add(Jt,z),Q=pe,{relativeTo:pe,days:wn}=_e(Y,Q,Lr,Je);pe=me(Y,Q,Qe,void 0,Je);const od=typeof Y!="string"?gt(Y,"dateUntil"):void 0,id=Te(null);id.largestUnit="month";let Va=ko(Y,Q,pe,id,od),ja=c(Va,ce);for(;d.greaterThanOrEqual(Dr(Jt),d.BigInt(Ot(ja)));){Jt=d.subtract(Jt,d.BigInt(ja)),Yt=d.add(Yt,z),Q=pe,pe=me(Y,Q,Qe,void 0,Je);const sd=Te(null);sd.largestUnit="month",Va=ko(Y,Q,pe,sd,od),ja=c(Va,ce)}break}case"month":{if(!Y)throw new RangeError("a starting point is required for months balancing");const Je=typeof Y!="string"?gt(Y,"dateAdd"):void 0;let pe,tr;for({relativeTo:pe,days:tr}=_e(Y,Q,Lr,Je);d.greaterThanOrEqual(Dr(Ht),d.BigInt(Ot(tr)));)Ht=d.subtract(Ht,d.BigInt(tr)),Jt=d.add(Jt,z),Q=pe,{relativeTo:pe,days:tr}=_e(Y,Q,Lr,Je);break}case"week":{if(!Y)throw new RangeError("a starting point is required for weeks balancing");const Je=typeof Y!="string"?gt(Y,"dateAdd"):void 0;let pe,tr;for({relativeTo:pe,days:tr}=_e(Y,Q,Rr,Je);d.greaterThanOrEqual(Dr(Ht),d.BigInt(Ot(tr)));)Ht=d.subtract(Ht,d.BigInt(tr)),te=d.add(te,z),Q=pe,{relativeTo:pe,days:tr}=_e(Y,Q,Rr,Je);break}}return{years:d.toNumber(Yt),months:d.toNumber(Jt),weeks:d.toNumber(te),days:d.toNumber(Ht)}}(r,o,i,s,b,y),new Co(r,o,i,s,n,a,l,h,p,u)}total(t){if(!Ut(this))throw new TypeError("invalid receiver");let r=c(this,De),o=c(this,ce),i=c(this,Ve),s=c(this,Se),n=c(this,Ie),a=c(this,Oe),l=c(this,Ae),h=c(this,ze),p=c(this,Me),u=c(this,Pe);if(t===void 0)throw new TypeError("options argument is required");const f=typeof t=="string"?Vi("unit",t):ht(t),g=Sn(f),b=Ge(f,"unit","datetime",oi);let y;({years:r,months:o,weeks:i,days:s}=_n(r,o,i,s,b,g)),j(g)&&(y=Iu(g,r,o,i,0));let w=_u(s,n,a,l,h,p,u,b,y);if(w==="positive overflow")return 1/0;if(w==="negative overflow")return-1/0;({days:s,hours:n,minutes:a,seconds:l,milliseconds:h,microseconds:p,nanoseconds:u}=w);const{total:_}=fo(r,o,i,s,n,a,l,h,p,u,1,b,"trunc",g);return _}toString(t){if(!Ut(this))throw new TypeError("invalid receiver");const r=ht(t),o=Zs(r),i=Ir(r,"trunc"),s=Ge(r,"smallestUnit","time",void 0);if(s==="hour"||s==="minute")throw new RangeError('smallestUnit must be a time unit other than "hours" or "minutes"');const{precision:n,unit:a,increment:l}=Ks(s,o);return qa(this,n,{unit:a,increment:l,roundingMode:i})}toJSON(){if(!Ut(this))throw new TypeError("invalid receiver");return qa(this)}toLocaleString(t,r){if(!Ut(this))throw new TypeError("invalid receiver");return typeof Intl<"u"&&Intl.DurationFormat!==void 0?new Intl.DurationFormat(t,r).format(this):(console.warn("Temporal.Duration.prototype.toLocaleString() requires Intl.DurationFormat."),qa(this))}valueOf(){throw new TypeError("use compare() to compare Temporal.Duration")}static from(t){return Ut(t)?new Co(c(t,De),c(t,ce),c(t,Ve),c(t,Se),c(t,Ie),c(t,Oe),c(t,Ae),c(t,ze),c(t,Me),c(t,Pe)):Di(t)}static compare(t,r,o){const i=Di(t),s=Di(r),n=Sn(ht(o)),a=c(i,De),l=c(i,ce),h=c(i,Ve);let p=c(i,Se);const u=c(i,Ie),f=c(i,Oe),g=c(i,Ae),b=c(i,ze),y=c(i,Me);let w=c(i,Pe);const _=c(s,De),x=c(s,ce),T=c(s,Ve);let C=c(s,Se);const k=c(s,Ie),D=c(s,Oe),S=c(s,Ae),O=c(s,ze),I=c(s,Me);let P=c(s,Pe);const X=Pd(n,a,l,h,p),W=Pd(n,_,x,T,C);a===0&&_===0&&l===0&&x===0&&h===0&&T===0||({days:p}=_n(a,l,h,p,"day",n),{days:C}=_n(_,x,T,C,"day",n));const V=Ui(p,u,f,g,b,y,w,X),q=Ui(C,k,D,S,O,I,P,W);return Qo(d.toNumber(d.subtract(V,q)))}}Zr(Co,"Temporal.Duration");const bm=Object.create;class zc{constructor(t,r,o="iso8601",i=1972){cu(this,pt(t),pt(r),Ze(o),pt(i))}get monthCode(){if(!ne(this))throw new TypeError("invalid receiver");return Qs(c(this,E),this)}get day(){if(!ne(this))throw new TypeError("invalid receiver");return Js(c(this,E),this)}get calendarId(){if(!ne(this))throw new TypeError("invalid receiver");return be(c(this,E))}with(t,r){if(!ne(this))throw new TypeError("invalid receiver");if(!At(t))throw new TypeError("invalid argument");Ki(t);const o=ht(r),i=c(this,E),s=Xt(i,["day","month","monthCode","year"]);let n=ct(this,s,[]);return n=si(i,n,ct(t,s,"partial")),n=ct(n,s,[]),Ni(i,n,o)}equals(t){if(!ne(this))throw new TypeError("invalid receiver");const r=$d(t);for(const o of[N,U,L])if(c(this,o)!==c(r,o))return!1;return en(c(this,E),c(r,E))}toString(t){if(!ne(this))throw new TypeError("invalid receiver");return Id(this,Gs(ht(t)))}toJSON(){if(!ne(this))throw new TypeError("invalid receiver");return Id(this)}toLocaleString(t,r){if(!ne(this))throw new TypeError("invalid receiver");return new Ro(t,r).format(this)}valueOf(){throw new TypeError("use equals() to compare Temporal.PlainMonthDay")}toPlainDate(t){if(!ne(this))throw new TypeError("invalid receiver");if(!At(t))throw new TypeError("argument should be an object");const r=c(this,E),o=Xt(r,["day","monthCode"]),i=ct(this,o,[]),s=Xt(r,["year"]);let n=si(r,i,ct(t,s,[]));n=ct(n,[...new Set([...o,...s])],[]);const a=bm(null);return a.overflow="reject",po(r,n,a)}getISOFields(){if(!ne(this))throw new TypeError("invalid receiver");return{calendar:c(this,E),isoDay:c(this,U),isoMonth:c(this,N),isoYear:c(this,L)}}getCalendar(){if(!ne(this))throw new TypeError("invalid receiver");return Ji(c(this,E))}static from(t,r){const o=ht(r);return ne(t)?(Gt(o),Fs(c(t,N),c(t,U),c(t,E),c(t,L))):$d(t,o)}}Zr(zc,"Temporal.PlainMonthDay");const Mc=()=>new(A("%Temporal.Instant%"))(Dc()),Zd=(e,t=_o())=>{const r=Ce(t),o=Ze(e);return ir(r,Mc(),o)},Ka=(e=_o())=>ir(Ce(e),Mc(),"iso8601"),Kd=(e,t=_o())=>{const r=Ce(t),o=Ze(e);return fe(Dc(),r,o)},Ku={instant:Mc,plainDateTime:Zd,plainDateTimeISO:Ka,plainDate:(e,t=_o())=>Bi(Zd(e,t)),plainDateISO:(e=_o())=>Bi(Ka(e)),plainTimeISO:(e=_o())=>yc(Ka(e)),timeZoneId:()=>_o(),zonedDateTime:Kd,zonedDateTimeISO:(e=_o())=>Kd("iso8601",e),[Symbol.toStringTag]:"Temporal.Now"};Object.defineProperty(Ku,Symbol.toStringTag,{value:"Temporal.Now",writable:!1,enumerable:!1,configurable:!0});const ym=Object.assign;function Xd(e,t,r){let o=c(e,rt),i=c(e,ot),s=c(e,it),n=c(e,st),a=c(e,nt),l=c(e,at);if(r){const{unit:h,increment:p,roundingMode:u}=r;({hour:o,minute:i,second:s,millisecond:n,microsecond:a,nanosecond:l}=Ec(o,i,s,n,a,l,p,h,u))}return`${Mt(o)}:${Mt(i)}${Ta(s,n,a,l,t)}`}class Jo{constructor(t=0,r=0,o=0,i=0,s=0,n=0){const a=t===void 0?0:pt(t),l=r===void 0?0:pt(r),h=o===void 0?0:pt(o),p=i===void 0?0:pt(i),u=s===void 0?0:pt(s),f=n===void 0?0:pt(n);Ea(a,l,h,p,u,f),Kr(this),lt(this,rt,a),lt(this,ot,l),lt(this,it,h),lt(this,st,p),lt(this,nt,u),lt(this,at,f)}get hour(){if(!Vt(this))throw new TypeError("invalid receiver");return c(this,rt)}get minute(){if(!Vt(this))throw new TypeError("invalid receiver");return c(this,ot)}get second(){if(!Vt(this))throw new TypeError("invalid receiver");return c(this,it)}get millisecond(){if(!Vt(this))throw new TypeError("invalid receiver");return c(this,st)}get microsecond(){if(!Vt(this))throw new TypeError("invalid receiver");return c(this,nt)}get nanosecond(){if(!Vt(this))throw new TypeError("invalid receiver");return c(this,at)}with(t,r){if(!Vt(this))throw new TypeError("invalid receiver");if(!At(t))throw new TypeError("invalid argument");Ki(t);const o=Gt(ht(r)),i=jn(t,"partial"),s=jn(this);let{hour:n,minute:a,second:l,millisecond:h,microsecond:p,nanosecond:u}=ym(s,i);return{hour:n,minute:a,second:l,millisecond:h,microsecond:p,nanosecond:u}=fa(n,a,l,h,p,u,o),new Jo(n,a,l,h,p,u)}add(t){if(!Vt(this))throw new TypeError("invalid receiver");return Hd("add",this,t)}subtract(t){if(!Vt(this))throw new TypeError("invalid receiver");return Hd("subtract",this,t)}until(t,r){if(!Vt(this))throw new TypeError("invalid receiver");return Nd("until",this,t,r)}since(t,r){if(!Vt(this))throw new TypeError("invalid receiver");return Nd("since",this,t,r)}round(t){if(!Vt(this))throw new TypeError("invalid receiver");if(t===void 0)throw new TypeError("options parameter is required");const r=typeof t=="string"?Vi("smallestUnit",t):ht(t),o=Xi(r),i=Ir(r,"halfExpand"),s=Ge(r,"smallestUnit","time",oi);Qi(o,{hour:24,minute:60,second:60,millisecond:1e3,microsecond:1e3,nanosecond:1e3}[s],!1);let n=c(this,rt),a=c(this,ot),l=c(this,it),h=c(this,st),p=c(this,nt),u=c(this,at);return{hour:n,minute:a,second:l,millisecond:h,microsecond:p,nanosecond:u}=Ec(n,a,l,h,p,u,o,s,i),new Jo(n,a,l,h,p,u)}equals(t){if(!Vt(this))throw new TypeError("invalid receiver");const r=lo(t);for(const o of[rt,ot,it,st,nt,at])if(c(this,o)!==c(r,o))return!1;return!0}toString(t){if(!Vt(this))throw new TypeError("invalid receiver");const r=ht(t),o=Zs(r),i=Ir(r,"trunc"),s=Ge(r,"smallestUnit","time",void 0);if(s==="hour")throw new RangeError('smallestUnit must be a time unit other than "hour"');const{precision:n,unit:a,increment:l}=Ks(s,o);return Xd(this,n,{unit:a,increment:l,roundingMode:i})}toJSON(){if(!Vt(this))throw new TypeError("invalid receiver");return Xd(this,"auto")}toLocaleString(t,r){if(!Vt(this))throw new TypeError("invalid receiver");return new Ro(t,r).format(this)}valueOf(){throw new TypeError("use compare() or equals() to compare Temporal.PlainTime")}toPlainDateTime(t){if(!Vt(this))throw new TypeError("invalid receiver");const r=wt(t),o=c(r,L),i=c(r,N),s=c(r,U),n=c(r,E);return He(o,i,s,c(this,rt),c(this,ot),c(this,it),c(this,st),c(this,nt),c(this,at),n)}toZonedDateTime(t){if(!Vt(this))throw new TypeError("invalid receiver");if(!At(t))throw new TypeError("invalid argument");const r=t.plainDate;if(r===void 0)throw new TypeError("missing date property");const o=wt(r),i=t.timeZone;if(i===void 0)throw new TypeError("missing timeZone property");const s=Ce(i),n=c(o,L),a=c(o,N),l=c(o,U),h=c(o,E),p=c(this,rt),u=c(this,ot),f=c(this,it),g=c(this,st),b=c(this,nt),y=c(this,at);return fe(c(Le(s,new(A("%Temporal.PlainDateTime%"))(n,a,l,p,u,f,g,b,y,h),"compatible"),K),s,h)}getISOFields(){if(!Vt(this))throw new TypeError("invalid receiver");return{isoHour:c(this,rt),isoMicrosecond:c(this,nt),isoMillisecond:c(this,st),isoMinute:c(this,ot),isoNanosecond:c(this,at),isoSecond:c(this,it)}}static from(t,r){const o=Gt(ht(r));return Vt(t)?new Jo(c(t,rt),c(t,ot),c(t,it),c(t,st),c(t,nt),c(t,at)):lo(t,o)}static compare(t,r){const o=lo(t),i=lo(r);for(const s of[rt,ot,it,st,nt,at]){const n=c(o,s),a=c(i,s);if(n!==a)return Qo(n-a)}return 0}}Zr(Jo,"Temporal.PlainTime");class ks{constructor(t){if(arguments.length<1)throw new RangeError("missing argument: identifier is required");const r=vc(t);Kr(this),lt(this,Br,r)}get id(){if(!lr(this))throw new TypeError("invalid receiver");return c(this,Br)}getOffsetNanosecondsFor(t){if(!lr(this))throw new TypeError("invalid receiver");const r=Sr(t),o=c(this,Br);return Ti(o)?$o(o):co(o,c(r,K))}getOffsetStringFor(t){if(!lr(this))throw new TypeError("invalid receiver");return bl(this,Sr(t))}getPlainDateTimeFor(t,r="iso8601"){if(!lr(this))throw new TypeError("invalid receiver");return ir(this,Sr(t),Ze(r))}getInstantFor(t,r){if(!lr(this))throw new TypeError("invalid receiver");return Le(this,Zo(t),Ri(ht(r)))}getPossibleInstantsFor(t){if(!lr(this))throw new TypeError("invalid receiver");const r=Zo(t),o=A("%Temporal.Instant%"),i=c(this,Br);if(Ti(i)){const n=Eo(c(r,L),c(r,N),c(r,U),c(r,rt),c(r,ot),c(r,it),c(r,st),c(r,nt),c(r,at));if(n===null)throw new RangeError("DateTime outside of supported range");const a=$o(i);return[new o(d.subtract(n,d.BigInt(a)))]}return function(a,l,h,p,u,f,g,b,y,w){const _=Eo(l,h,p,u,f,g,b,y,w);if(_===null)throw new RangeError("DateTime outside of supported range");let x=d.subtract(_,Yr);d.lessThan(x,Ps)&&(x=_);let T=d.add(_,Yr);d.greaterThan(T,Fi)&&(T=_);const C=co(a,x),k=co(a,T);return(C===k?[C]:[C,k]).map(D=>{const S=d.subtract(_,d.BigInt(D)),O=yu(a,S);if(l===O.year&&h===O.month&&p===O.day&&u===O.hour&&f===O.minute&&g===O.second&&b===O.millisecond&&y===O.microsecond&&w===O.nanosecond)return S}).filter(D=>D!==void 0)}(i,c(r,L),c(r,N),c(r,U),c(r,rt),c(r,ot),c(r,it),c(r,st),c(r,nt),c(r,at)).map(n=>new o(n))}getNextTransition(t){if(!lr(this))throw new TypeError("invalid receiver");const r=Sr(t),o=c(this,Br);if(Ti(o)||o==="UTC")return null;let i=c(r,K);const s=A("%Temporal.Instant%");return i=wu(o,i),i===null?null:new s(i)}getPreviousTransition(t){if(!lr(this))throw new TypeError("invalid receiver");const r=Sr(t),o=c(this,Br);if(Ti(o)||o==="UTC")return null;let i=c(r,K);const s=A("%Temporal.Instant%");return i=yl(o,i),i===null?null:new s(i)}toString(){if(!lr(this))throw new TypeError("invalid receiver");return c(this,Br)}toJSON(){if(!lr(this))throw new TypeError("invalid receiver");return c(this,Br)}static from(t){return pu(Ce(t))}}Zr(ks,"Temporal.TimeZone"),Ft("Temporal.TimeZone.prototype.getOffsetNanosecondsFor",ks.prototype.getOffsetNanosecondsFor),Ft("Temporal.TimeZone.prototype.getPossibleInstantsFor",ks.prototype.getPossibleInstantsFor);const vm=Object.create;class Pc{constructor(t,r,o="iso8601",i=1){du(this,pt(t),pt(r),Ze(o),pt(i))}get year(){if(!ft(this))throw new TypeError("invalid receiver");return ma(c(this,E),this)}get month(){if(!ft(this))throw new TypeError("invalid receiver");return ga(c(this,E),this)}get monthCode(){if(!ft(this))throw new TypeError("invalid receiver");return Qs(c(this,E),this)}get calendarId(){if(!ft(this))throw new TypeError("invalid receiver");return be(c(this,E))}get era(){if(!ft(this))throw new TypeError("invalid receiver");return ba(c(this,E),this)}get eraYear(){if(!ft(this))throw new TypeError("invalid receiver");return ya(c(this,E),this)}get daysInMonth(){if(!ft(this))throw new TypeError("invalid receiver");return va(c(this,E),this)}get daysInYear(){if(!ft(this))throw new TypeError("invalid receiver");return wa(c(this,E),this)}get monthsInYear(){if(!ft(this))throw new TypeError("invalid receiver");return _a(c(this,E),this)}get inLeapYear(){if(!ft(this))throw new TypeError("invalid receiver");return xa(c(this,E),this)}with(t,r){if(!ft(this))throw new TypeError("invalid receiver");if(!At(t))throw new TypeError("invalid argument");Ki(t);const o=ht(r),i=c(this,E),s=Xt(i,["month","monthCode","year"]);let n=ct(this,s,[]);return n=si(i,n,ct(t,s,"partial")),n=ct(n,s,[]),ni(i,n,o)}add(t,r){if(!ft(this))throw new TypeError("invalid receiver");return qd("add",this,t,r)}subtract(t,r){if(!ft(this))throw new TypeError("invalid receiver");return qd("subtract",this,t,r)}until(t,r){if(!ft(this))throw new TypeError("invalid receiver");return Bd("until",this,t,r)}since(t,r){if(!ft(this))throw new TypeError("invalid receiver");return Bd("since",this,t,r)}equals(t){if(!ft(this))throw new TypeError("invalid receiver");const r=ws(t);for(const o of[L,N,U])if(c(this,o)!==c(r,o))return!1;return en(c(this,E),c(r,E))}toString(t){if(!ft(this))throw new TypeError("invalid receiver");return Od(this,Gs(ht(t)))}toJSON(){if(!ft(this))throw new TypeError("invalid receiver");return Od(this)}toLocaleString(t,r){if(!ft(this))throw new TypeError("invalid receiver");return new Ro(t,r).format(this)}valueOf(){throw new TypeError("use compare() or equals() to compare Temporal.PlainYearMonth")}toPlainDate(t){if(!ft(this))throw new TypeError("invalid receiver");if(!At(t))throw new TypeError("argument should be an object");const r=c(this,E),o=Xt(r,["monthCode","year"]),i=ct(this,o,[]),s=Xt(r,["day"]);let n=si(r,i,ct(t,s,[]));n=ct(n,[...new Set([...o,...s])],[]);const a=vm(null);return a.overflow="reject",po(r,n,a)}getISOFields(){if(!ft(this))throw new TypeError("invalid receiver");return{calendar:c(this,E),isoDay:c(this,U),isoMonth:c(this,N),isoYear:c(this,L)}}getCalendar(){if(!ft(this))throw new TypeError("invalid receiver");return Ji(c(this,E))}static from(t,r){const o=ht(r);return ft(t)?(Gt(o),Ls(c(t,L),c(t,N),c(t,E),c(t,U))):ws(t,o)}static compare(t,r){const o=ws(t),i=ws(r);return xo(c(o,L),c(o,N),c(o,U),c(i,L),c(i,N),c(i,U))}}Zr(Pc,"Temporal.PlainYearMonth");const wm=Ro.prototype.resolvedOptions,_m=Object.create;class Fc{constructor(t,r,o="iso8601"){if(arguments.length<1)throw new TypeError("missing argument: epochNanoseconds is required");hu(this,Cs(t),Ce(r),Ze(o))}get calendarId(){if(!j(this))throw new TypeError("invalid receiver");return be(c(this,E))}get timeZoneId(){if(!j(this))throw new TypeError("invalid receiver");return Rs(c(this,vt))}get year(){if(!j(this))throw new TypeError("invalid receiver");return ma(c(this,E),$t(this))}get month(){if(!j(this))throw new TypeError("invalid receiver");return ga(c(this,E),$t(this))}get monthCode(){if(!j(this))throw new TypeError("invalid receiver");return Qs(c(this,E),$t(this))}get day(){if(!j(this))throw new TypeError("invalid receiver");return Js(c(this,E),$t(this))}get hour(){if(!j(this))throw new TypeError("invalid receiver");return c($t(this),rt)}get minute(){if(!j(this))throw new TypeError("invalid receiver");return c($t(this),ot)}get second(){if(!j(this))throw new TypeError("invalid receiver");return c($t(this),it)}get millisecond(){if(!j(this))throw new TypeError("invalid receiver");return c($t(this),st)}get microsecond(){if(!j(this))throw new TypeError("invalid receiver");return c($t(this),nt)}get nanosecond(){if(!j(this))throw new TypeError("invalid receiver");return c($t(this),at)}get era(){if(!j(this))throw new TypeError("invalid receiver");return ba(c(this,E),$t(this))}get eraYear(){if(!j(this))throw new TypeError("invalid receiver");return ya(c(this,E),$t(this))}get epochSeconds(){if(!j(this))throw new TypeError("invalid receiver");const t=c(this,K);return d.toNumber(Si(t,Vr))}get epochMilliseconds(){if(!j(this))throw new TypeError("invalid receiver");const t=c(this,K);return d.toNumber(Si(t,hr))}get epochMicroseconds(){if(!j(this))throw new TypeError("invalid receiver");return Zn(Si(c(this,K),mt))}get epochNanoseconds(){if(!j(this))throw new TypeError("invalid receiver");return Zn(c(this,K))}get dayOfWeek(){if(!j(this))throw new TypeError("invalid receiver");return pc(c(this,E),$t(this))}get dayOfYear(){if(!j(this))throw new TypeError("invalid receiver");return fc(c(this,E),$t(this))}get weekOfYear(){if(!j(this))throw new TypeError("invalid receiver");return mc(c(this,E),$t(this))}get yearOfWeek(){if(!j(this))throw new TypeError("invalid receiver");return gc(c(this,E),$t(this))}get hoursInDay(){if(!j(this))throw new TypeError("invalid receiver");const t=$t(this),r=A("%Temporal.PlainDateTime%"),o=c(t,L),i=c(t,N),s=c(t,U),n=new r(o,i,s,0,0,0,0,0,0),a=Xo(o,i,s,0,0,0,1,"reject"),l=new r(a.year,a.month,a.day,0,0,0,0,0,0),h=c(this,vt),p=c(Le(h,n,"compatible"),K),u=c(Le(h,l,"compatible"),K);return Nr(d.subtract(u,p),ru)}get daysInWeek(){if(!j(this))throw new TypeError("invalid receiver");return bc(c(this,E),$t(this))}get daysInMonth(){if(!j(this))throw new TypeError("invalid receiver");return va(c(this,E),$t(this))}get daysInYear(){if(!j(this))throw new TypeError("invalid receiver");return wa(c(this,E),$t(this))}get monthsInYear(){if(!j(this))throw new TypeError("invalid receiver");return _a(c(this,E),$t(this))}get inLeapYear(){if(!j(this))throw new TypeError("invalid receiver");return xa(c(this,E),$t(this))}get offset(){if(!j(this))throw new TypeError("invalid receiver");return bl(c(this,vt),c(this,xe))}get offsetNanoseconds(){if(!j(this))throw new TypeError("invalid receiver");return Or(c(this,vt),c(this,xe))}with(t,r){if(!j(this))throw new TypeError("invalid receiver");if(!At(t))throw new TypeError("invalid zoned-date-time-like");Ki(t);const o=ht(r),i=c(this,E);let s=Xt(i,["day","hour","microsecond","millisecond","minute","month","monthCode","nanosecond","second","year"]);s.push("offset");let n=ct(this,s,["offset"]);n=si(i,n,ct(t,s,"partial")),n=ct(n,s,["offset"]);const a=Ri(o),l=Vn(o,"prefer");let{year:h,month:p,day:u,hour:f,minute:g,second:b,millisecond:y,microsecond:w,nanosecond:_}=Xs(i,n,o);const x=$o(n.offset),T=c(this,vt);return fe(Yn(h,p,u,f,g,b,y,w,_,"option",x,T,a,l,!1),T,i)}withPlainDate(t){if(!j(this))throw new TypeError("invalid receiver");const r=wt(t),o=c(r,L),i=c(r,N),s=c(r,U);let n=c(r,E);const a=$t(this),l=c(a,rt),h=c(a,ot),p=c(a,it),u=c(a,st),f=c(a,nt),g=c(a,at);n=uu(c(this,E),n);const b=c(this,vt);return fe(c(Le(b,new(A("%Temporal.PlainDateTime%"))(o,i,s,l,h,p,u,f,g,n),"compatible"),K),b,n)}withPlainTime(t){if(!j(this))throw new TypeError("invalid receiver");const r=A("%Temporal.PlainTime%"),o=t===void 0?new r:lo(t),i=$t(this),s=c(i,L),n=c(i,N),a=c(i,U),l=c(this,E),h=c(o,rt),p=c(o,ot),u=c(o,it),f=c(o,st),g=c(o,nt),b=c(o,at),y=c(this,vt);return fe(c(Le(y,new(A("%Temporal.PlainDateTime%"))(s,n,a,h,p,u,f,g,b,l),"compatible"),K),y,l)}withTimeZone(t){if(!j(this))throw new TypeError("invalid receiver");const r=Ce(t);return fe(c(this,K),r,c(this,E))}withCalendar(t){if(!j(this))throw new TypeError("invalid receiver");const r=Ze(t);return fe(c(this,K),c(this,vt),r)}add(t,r){if(!j(this))throw new TypeError("invalid receiver");return Wd("add",this,t,r)}subtract(t,r){if(!j(this))throw new TypeError("invalid receiver");return Wd("subtract",this,t,r)}until(t,r){if(!j(this))throw new TypeError("invalid receiver");return Ud("until",this,t,r)}since(t,r){if(!j(this))throw new TypeError("invalid receiver");return Ud("since",this,t,r)}round(t){if(!j(this))throw new TypeError("invalid receiver");if(t===void 0)throw new TypeError("options parameter is required");const r=typeof t=="string"?Vi("smallestUnit",t):ht(t),o=Xi(r),i=Ir(r,"halfExpand"),s=Ge(r,"smallestUnit","time",oi,["day"]),n={day:1,hour:24,minute:60,second:60,millisecond:1e3,microsecond:1e3,nanosecond:1e3}[s];Qi(o,n,n===1);const a=$t(this);let l=c(a,L),h=c(a,N),p=c(a,U),u=c(a,rt),f=c(a,ot),g=c(a,it),b=c(a,st),y=c(a,nt),w=c(a,at);const _=A("%Temporal.PlainDateTime%"),x=c(this,vt),T=c(this,E),C=Le(x,new _(c(a,L),c(a,N),c(a,U),0,0,0,0,0,0),"compatible"),k=ur(C,x,T,0,0,0,1,0,0,0,0,0,0),D=d.subtract(k,d.BigInt(c(C,K)));if(d.lessThanOrEqual(D,jt))throw new RangeError("cannot round a ZonedDateTime in a calendar with zero or negative length days");return{year:l,month:h,day:p,hour:u,minute:f,second:g,millisecond:b,microsecond:y,nanosecond:w}=$c(l,h,p,u,f,g,b,y,w,o,s,i,d.toNumber(D)),fe(Yn(l,h,p,u,f,g,b,y,w,"option",Or(x,c(this,xe)),x,"compatible","prefer",!1),x,c(this,E))}equals(t){if(!j(this))throw new TypeError("invalid receiver");const r=_s(t),o=c(this,K),i=c(r,K);return!!d.equal(d.BigInt(o),d.BigInt(i))&&!!fu(c(this,vt),c(r,vt))&&en(c(this,E),c(r,E))}toString(t){if(!j(this))throw new TypeError("invalid receiver");const r=ht(t),o=Gs(r),i=Zs(r),s=function(g){return So(g,"offset",["auto","never"],"auto")}(r),n=Ir(r,"trunc"),a=Ge(r,"smallestUnit","time",void 0);if(a==="hour")throw new RangeError('smallestUnit must be a time unit other than "hour"');const l=function(g){return So(g,"timeZoneName",["auto","never","critical"],"auto")}(r),{precision:h,unit:p,increment:u}=Ks(a,i);return Ad(this,h,o,l,s,{unit:p,increment:u,roundingMode:n})}toLocaleString(t,r){if(!j(this))throw new TypeError("invalid receiver");const o=ht(r),i=_m(null);if(Ei(i,o,["timeZone"]),o.timeZone!==void 0)throw new TypeError("ZonedDateTime toLocaleString does not accept a timeZone option");i.year===void 0&&i.month===void 0&&i.day===void 0&&i.weekday===void 0&&i.dateStyle===void 0&&i.hour===void 0&&i.minute===void 0&&i.second===void 0&&i.timeStyle===void 0&&i.dayPeriod===void 0&&i.timeZoneName===void 0&&(i.timeZoneName="short");let s=Rs(c(this,vt));if(Ti(s))throw new RangeError("toLocaleString does not support offset string time zones");s=vc(s),i.timeZone=s;const n=new Ro(t,i),a=H(wm,n,[]).calendar,l=be(c(this,E));if(l!=="iso8601"&&a!=="iso8601"&&a!==l)throw new RangeError(`cannot format ZonedDateTime with calendar ${l} in locale with calendar ${a}`);return n.format(c(this,xe))}toJSON(){if(!j(this))throw new TypeError("invalid receiver");return Ad(this,"auto")}valueOf(){throw new TypeError("use compare() or equals() to compare Temporal.ZonedDateTime")}startOfDay(){if(!j(this))throw new TypeError("invalid receiver");const t=$t(this),r=A("%Temporal.PlainDateTime%"),o=c(this,E),i=new r(c(t,L),c(t,N),c(t,U),0,0,0,0,0,0,o),s=c(this,vt);return fe(c(Le(s,i,"compatible"),K),s,o)}toInstant(){if(!j(this))throw new TypeError("invalid receiver");return new(A("%Temporal.Instant%"))(c(this,K))}toPlainDate(){if(!j(this))throw new TypeError("invalid receiver");return Bi($t(this))}toPlainTime(){if(!j(this))throw new TypeError("invalid receiver");return yc($t(this))}toPlainDateTime(){if(!j(this))throw new TypeError("invalid receiver");return $t(this)}toPlainYearMonth(){if(!j(this))throw new TypeError("invalid receiver");const t=c(this,E);return ni(t,ct(this,Xt(t,["monthCode","year"]),[]))}toPlainMonthDay(){if(!j(this))throw new TypeError("invalid receiver");const t=c(this,E);return Ni(t,ct(this,Xt(t,["day","monthCode"]),[]))}getISOFields(){if(!j(this))throw new TypeError("invalid receiver");const t=$t(this),r=c(this,vt);return{calendar:c(this,E),isoDay:c(t,U),isoHour:c(t,rt),isoMicrosecond:c(t,nt),isoMillisecond:c(t,st),isoMinute:c(t,ot),isoMonth:c(t,N),isoNanosecond:c(t,at),isoSecond:c(t,it),isoYear:c(t,L),offset:bl(r,c(this,xe)),timeZone:r}}getCalendar(){if(!j(this))throw new TypeError("invalid receiver");return Ji(c(this,E))}getTimeZone(){if(!j(this))throw new TypeError("invalid receiver");return pu(c(this,vt))}static from(t,r){const o=ht(r);return j(t)?(Ri(o),Vn(o,"reject"),Gt(o),fe(c(t,K),c(t,vt),c(t,E))):_s(t,o)}static compare(t,r){const o=_s(t),i=_s(r),s=c(o,K),n=c(i,K);return d.lessThan(d.BigInt(s),d.BigInt(n))?-1:d.greaterThan(d.BigInt(s),d.BigInt(n))?1:0}}function $t(e){return ir(c(e,vt),c(e,xe),c(e,E))}Zr(Fc,"Temporal.ZonedDateTime");var he=Object.freeze({__proto__:null,Calendar:Bt,Duration:Co,Instant:$r,Now:Ku,PlainDate:sn,PlainDateTime:nn,PlainMonthDay:zc,PlainTime:Jo,PlainYearMonth:Pc,TimeZone:ks,ZonedDateTime:Fc});const xm=[$r,Bt,sn,nn,Co,zc,Jo,ks,Pc,Fc];for(const e of xm){const t=Object.getOwnPropertyDescriptor(e,"prototype");(t.configurable||t.enumerable||t.writable)&&(t.configurable=!1,t.enumerable=!1,t.writable=!1,Object.defineProperty(e,"prototype",t))}class Cm{constructor(t){this.time=t,this.visible=!1}}var Tm=F`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`;const Tl=new Set,km=new MutationObserver(tp),ki=new Map;let Xu=document.documentElement.dir||"ltr",Qu=document.documentElement.lang||navigator.language,qo;km.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function Ju(...e){e.map(t=>{const r=t.$code.toLowerCase();ki.has(r)?ki.set(r,Object.assign(Object.assign({},ki.get(r)),t)):ki.set(r,t),qo||(qo=t)}),tp()}function tp(){Xu=document.documentElement.dir||"ltr",Qu=document.documentElement.lang||navigator.language,[...Tl.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let $m=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){Tl.add(this.host)}hostDisconnected(){Tl.delete(this.host)}dir(){return`${this.host.dir||Xu}`.toLowerCase()}lang(){return`${this.host.lang||Qu}`.toLowerCase()}getTranslationData(t){var r,o;const i=new Intl.Locale(t.replace(/_/g,"-")),s=i?.language.toLowerCase(),n=(o=(r=i?.region)===null||r===void 0?void 0:r.toLowerCase())!==null&&o!==void 0?o:"",a=ki.get(`${s}-${n}`),l=ki.get(s);return{locale:i,language:s,region:n,primary:a,secondary:l}}exists(t,r){var o;const{primary:i,secondary:s}=this.getTranslationData((o=r.lang)!==null&&o!==void 0?o:this.lang());return r=Object.assign({includeFallback:!1},r),!!(i&&i[t]||s&&s[t]||r.includeFallback&&qo&&qo[t])}term(t,...r){const{primary:o,secondary:i}=this.getTranslationData(this.lang());let s;if(o&&o[t])s=o[t];else if(i&&i[t])s=i[t];else if(qo&&qo[t])s=qo[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof s=="function"?s(...r):s}date(t,r){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),r).format(t)}number(t,r){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),r).format(t)}relativeTime(t,r,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(t,r)}};var ep={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};Ju(ep);var Em=ep,Tt=class extends $m{};Ju(Em);var J=F`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,rp=Object.defineProperty,Dm=Object.defineProperties,Sm=Object.getOwnPropertyDescriptor,Im=Object.getOwnPropertyDescriptors,Qd=Object.getOwnPropertySymbols,Om=Object.prototype.hasOwnProperty,Am=Object.prototype.propertyIsEnumerable,Xa=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Jd=(e,t,r)=>t in e?rp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,yo=(e,t)=>{for(var r in t||(t={}))Om.call(t,r)&&Jd(e,r,t[r]);if(Qd)for(var r of Qd(t))Am.call(t,r)&&Jd(e,r,t[r]);return e},an=(e,t)=>Dm(e,Im(t)),m=(e,t,r,o)=>{for(var i=o>1?void 0:o?Sm(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&rp(t,r,i),i},zm=function(e,t){this[0]=e,this[1]=t},Mm=e=>{var t=e[Xa("asyncIterator")],r=!1,o,i={};return t==null?(t=e[Xa("iterator")](),o=s=>i[s]=n=>t[s](n)):(t=t.call(e),o=s=>i[s]=n=>{if(r){if(r=!1,s==="throw")throw n;return n}return r=!0,{done:!1,value:new zm(new Promise(a=>{var l=t[s](n);if(!(l instanceof Object))throw TypeError("Object expected");a(l)}),1)}}),i[Xa("iterator")]=()=>i,o("next"),"throw"in t?o("throw"):i.throw=s=>{throw s},"return"in t&&o("return"),i},Z=class extends yt{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const r=new CustomEvent(e,yo({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(r),r}static define(e,t=this,r={}){const o=customElements.get(e);if(!o){customElements.define(e,class extends t{},r);return}let i=" (unknown version)",s=i;"version"in t&&t.version&&(i=" v"+t.version),"version"in o&&o.version&&(s=" v"+o.version),!(i&&s&&i===s)&&console.warn(`Attempted to register <${e}>${i}, but <${e}>${s} has already been registered.`)}};Z.version="2.15.0";Z.dependencies={};m([v()],Z.prototype,"dir",2);m([v()],Z.prototype,"lang",2);var ln=class extends Z{constructor(){super(...arguments),this.localize=new Tt(this)}render(){return $`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};ln.styles=[J,Tm];var ps=new WeakMap,fs=new WeakMap,ms=new WeakMap,Qa=new WeakSet,xn=new WeakMap,vo=class{constructor(e,t){this.handleFormData=r=>{const o=this.options.disabled(this.host),i=this.options.name(this.host),s=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!o&&!n&&typeof i=="string"&&i.length>0&&typeof s<"u"&&(Array.isArray(s)?s.forEach(a=>{r.formData.append(i,a.toString())}):r.formData.append(i,s.toString()))},this.handleFormSubmit=r=>{var o;const i=this.options.disabled(this.host),s=this.options.reportValidity;this.form&&!this.form.noValidate&&((o=ps.get(this.form))==null||o.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!i&&!s(this.host)&&(r.preventDefault(),r.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),xn.set(this.host,[])},this.handleInteraction=r=>{const o=xn.get(this.host);o.includes(r.type)||o.push(r.type),o.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const o of r)if(typeof o.checkValidity=="function"&&!o.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const o of r)if(typeof o.reportValidity=="function"&&!o.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=yo({form:r=>{const o=r.form;if(o){const s=r.getRootNode().querySelector(`#${o}`);if(s)return s}return r.closest("form")},name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>{var o;return(o=r.disabled)!=null?o:!1},reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,checkValidity:r=>typeof r.checkValidity=="function"?r.checkValidity():!0,setValue:(r,o)=>r.value=o,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),xn.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),xn.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,ps.has(this.form)?ps.get(this.form).add(this.host):ps.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),fs.has(this.form)||(fs.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),ms.has(this.form)||(ms.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=ps.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),fs.has(this.form)&&(this.form.reportValidity=fs.get(this.form),fs.delete(this.form)),ms.has(this.form)&&(this.form.checkValidity=ms.get(this.form),ms.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?Qa.add(e):Qa.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const r=document.createElement("button");r.type=e,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",t&&(r.name=t.name,r.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(o=>{t.hasAttribute(o)&&r.setAttribute(o,t.getAttribute(o))})),this.form.append(r),r.click(),r.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,r=!!Qa.has(t),o=!!t.required;t.toggleAttribute("data-required",o),t.toggleAttribute("data-optional",!o),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&r),t.toggleAttribute("data-user-valid",e&&r)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e?.preventDefault()}},Da=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),Pm=Object.freeze(an(yo({},Da),{valid:!1,valueMissing:!0})),Fm=Object.freeze(an(yo({},Da),{valid:!1,customError:!0})),op=F`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button[checked]]) {
    z-index: 2;
  }
`,Xe=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=r=>{const o=r.target;(this.slotNames.includes("[default]")&&!o.name||o.name&&this.slotNames.includes(o.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function Lm(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let r="";return[...t].forEach(o=>{o.nodeType===Node.TEXT_NODE&&(r+=o.textContent)}),r}var kl="";function $l(e){kl=e}function Rm(e=""){if(!kl){const t=[...document.getElementsByTagName("script")],r=t.find(o=>o.hasAttribute("data-shoelace"));if(r)$l(r.getAttribute("data-shoelace"));else{const o=t.find(s=>/shoelace(\.min)?\.js($|\?)/.test(s.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(s.src));let i="";o&&(i=o.getAttribute("src")),$l(i.split("/").slice(0,-1).join("/"))}}return kl.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var Nm={name:"default",resolver:e=>Rm(`assets/icons/${e}.svg`)},Bm=Nm,th={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},Um={name:"system",resolver:e=>e in th?`data:image/svg+xml,${encodeURIComponent(th[e])}`:""},Vm=Um,jm=[Bm,Vm],El=[];function Ym(e){El.push(e)}function Hm(e){El=El.filter(t=>t!==e)}function eh(e){return jm.find(t=>t.name===e)}var qm=F`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;function R(e,t){const r=yo({waitUntilFirstUpdate:!1},t);return(o,i)=>{const{update:s}=o,n=Array.isArray(e)?e:[e];o.update=function(a){n.forEach(l=>{const h=l;if(a.has(h)){const p=a.get(h),u=this[h];p!==u&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[i](p,u)}}),s.call(this,a)}}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Wm}=hf,Gm=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,ip=e=>e.strings===void 0,rh=()=>document.createComment(""),gs=(e,t,r)=>{const o=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(r===void 0){const s=o.insertBefore(rh(),i),n=o.insertBefore(rh(),i);r=new Wm(s,n,e,e.options)}else{const s=r._$AB.nextSibling,n=r._$AM,a=n!==e;if(a){let l;r._$AQ?.(e),r._$AM=e,r._$AP!==void 0&&(l=e._$AU)!==n._$AU&&r._$AP(l)}if(s!==i||a){let l=r._$AA;for(;l!==s;){const h=l.nextSibling;o.insertBefore(l,i),l=h}}}return r},jo=(e,t,r=e)=>(e._$AI(t,r),e),Zm={},sp=(e,t=Zm)=>e._$AH=t,Km=e=>e._$AH,Ja=e=>{e._$AP?.(!1,!0);let t=e._$AA;const r=e._$AB.nextSibling;for(;t!==r;){const o=t.nextSibling;t.remove(),t=o}};var bs=Symbol(),Cn=Symbol(),tl,el=new Map,Rt=class extends Z{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var r;let o;if(t?.spriteSheet){this.svg=$`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;const i=this.shadowRoot.querySelector("[part='svg']");return typeof t.mutator=="function"&&t.mutator(i),this.svg}try{if(o=await fetch(e,{mode:"cors"}),!o.ok)return o.status===410?bs:Cn}catch{return Cn}try{const i=document.createElement("div");i.innerHTML=await o.text();const s=i.firstElementChild;if(((r=s?.tagName)==null?void 0:r.toLowerCase())!=="svg")return bs;tl||(tl=new DOMParser);const a=tl.parseFromString(s.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):bs}catch{return bs}}connectedCallback(){super.connectedCallback(),Ym(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Hm(this)}getIconSource(){const e=eh(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:r}=this.getIconSource(),o=r?eh(this.library):void 0;if(!t){this.svg=null;return}let i=el.get(t);if(i||(i=this.resolveIcon(t,o),el.set(t,i)),!this.initialRender)return;const s=await i;if(s===Cn&&el.delete(t),t===this.getIconSource().url){if(Gm(s)){this.svg=s;return}switch(s){case Cn:case bs:this.svg=null,this.emit("sl-error");break;default:this.svg=s.cloneNode(!0),(e=o?.mutator)==null||e.call(o,this.svg),this.emit("sl-load")}}}render(){return this.svg}};Rt.styles=[J,qm];m([M()],Rt.prototype,"svg",2);m([v({reflect:!0})],Rt.prototype,"name",2);m([v()],Rt.prototype,"src",2);m([v()],Rt.prototype,"label",2);m([v({reflect:!0})],Rt.prototype,"library",2);m([R("label")],Rt.prototype,"handleLabelChange",1);m([R(["name","src","library"])],Rt.prototype,"setIcon",1);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Er={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},os=e=>(...t)=>({_$litDirective$:e,values:t});let is=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,o){this._$Ct=t,this._$AM=r,this._$Ci=o}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tt=os(class extends is{constructor(e){if(super(e),e.type!==Er.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(t)}const r=e.element.classList;for(const o of this.st)o in t||(r.remove(o),this.st.delete(o));for(const o in t){const i=!!t[o];i===this.st.has(o)||this.nt?.has(o)||(i?(r.add(o),this.st.add(o)):(r.remove(o),this.st.delete(o)))}return or}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const np=Symbol.for(""),Xm=e=>{if(e?.r===np)return e?._$litStatic$},Kn=(e,...t)=>({_$litStatic$:t.reduce((r,o,i)=>r+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+e[i+1],e[0]),r:np}),oh=new Map,Qm=e=>(t,...r)=>{const o=r.length;let i,s;const n=[],a=[];let l,h=0,p=!1;for(;h<o;){for(l=t[h];h<o&&(s=r[h],(i=Xm(s))!==void 0);)l+=i+t[++h],p=!0;h!==o&&a.push(s),n.push(l),h++}if(h===o&&n.push(t[o]),p){const u=n.join("$$lit$$");(t=oh.get(u))===void 0&&(n.raw=n,oh.set(u,t=n)),r=a}return e(t,...r)},$s=Qm($);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G=e=>e??bt;var Dt=class extends Z{constructor(){super(...arguments),this.formControlController=new vo(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new Xe(this,"[default]","prefix","suffix"),this.localize=new Tt(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Da}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?Kn`a`:Kn`button`;return $s`
      <${t}
        part="base"
        class=${tt({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${G(e?void 0:this.disabled)}
        type=${G(e?void 0:this.type)}
        title=${this.title}
        name=${G(e?void 0:this.name)}
        value=${G(e?void 0:this.value)}
        href=${G(e?this.href:void 0)}
        target=${G(e?this.target:void 0)}
        download=${G(e?this.download:void 0)}
        rel=${G(e?this.rel:void 0)}
        role=${G(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?$s` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?$s`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};Dt.styles=[J,op];Dt.dependencies={"sl-icon":Rt,"sl-spinner":ln};m([B(".button")],Dt.prototype,"button",2);m([M()],Dt.prototype,"hasFocus",2);m([M()],Dt.prototype,"invalid",2);m([v()],Dt.prototype,"title",2);m([v({reflect:!0})],Dt.prototype,"variant",2);m([v({reflect:!0})],Dt.prototype,"size",2);m([v({type:Boolean,reflect:!0})],Dt.prototype,"caret",2);m([v({type:Boolean,reflect:!0})],Dt.prototype,"disabled",2);m([v({type:Boolean,reflect:!0})],Dt.prototype,"loading",2);m([v({type:Boolean,reflect:!0})],Dt.prototype,"outline",2);m([v({type:Boolean,reflect:!0})],Dt.prototype,"pill",2);m([v({type:Boolean,reflect:!0})],Dt.prototype,"circle",2);m([v()],Dt.prototype,"type",2);m([v()],Dt.prototype,"name",2);m([v()],Dt.prototype,"value",2);m([v()],Dt.prototype,"href",2);m([v()],Dt.prototype,"target",2);m([v()],Dt.prototype,"rel",2);m([v()],Dt.prototype,"download",2);m([v()],Dt.prototype,"form",2);m([v({attribute:"formaction"})],Dt.prototype,"formAction",2);m([v({attribute:"formenctype"})],Dt.prototype,"formEnctype",2);m([v({attribute:"formmethod"})],Dt.prototype,"formMethod",2);m([v({attribute:"formnovalidate",type:Boolean})],Dt.prototype,"formNoValidate",2);m([v({attribute:"formtarget"})],Dt.prototype,"formTarget",2);m([R("disabled",{waitUntilFirstUpdate:!0})],Dt.prototype,"handleDisabledChange",1);Dt.define("sl-button");class ap{constructor(){this.Calories=0,this.Protein=0,this.Carbs=0,this.Fat=0}}class Io{constructor(){this.Portion="100g",this.Macros=new ap}static{this.dbName="food-item"}}class Lc{constructor(){this.Ingredients=[]}static{this.dbName="food-item"}get Macros(){const t=new ap;return t.Calories=this.SumMacro("Calories"),t.Carbs=this.SumMacro("Calories"),t.Fat=this.SumMacro("Calories"),t.Protein=this.SumMacro("Calories"),t}SumMacro(t){return this.Ingredients.reduce((r,o)=>o.Macros[t]*o.Quantity+r,0)}}const ss=e=>e instanceof Lc||"Ingredients"in e;var Jm=F`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,fi=(e="value")=>(t,r)=>{const o=t.constructor,i=o.prototype.attributeChangedCallback;o.prototype.attributeChangedCallback=function(s,n,a){var l;const h=o.getPropertyOptions(e),p=typeof h.attribute=="string"?h.attribute:e;if(s===p){const u=h.converter||Mi,g=(typeof u=="function"?u:(l=u?.fromAttribute)!=null?l:Mi.fromAttribute)(a,h.type);this[e]!==g&&(this[r]=g)}i.call(this,s,n,a)}},mi=F`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const li=os(class extends is{constructor(e){if(super(e),e.type!==Er.PROPERTY&&e.type!==Er.ATTRIBUTE&&e.type!==Er.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!ip(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===or||t===bt)return t;const r=e.element,o=e.name;if(e.type===Er.PROPERTY){if(t===r[o])return or}else if(e.type===Er.BOOLEAN_ATTRIBUTE){if(!!t===r.hasAttribute(o))return or}else if(e.type===Er.ATTRIBUTE&&r.getAttribute(o)===t+"")return or;return sp(e),t}});var ut=class extends Z{constructor(){super(...arguments),this.formControlController=new vo(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Xe(this,"help-text","label"),this.localize=new Tt(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var e;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((e=this.input)==null?void 0:e.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){var e;return this.__numberInput.value=this.value,((e=this.input)==null?void 0:e.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){e.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,r="none"){this.input.setSelectionRange(e,t,r)}setRangeText(e,t,r,o="preserve"){const i=t??this.input.selectionStart,s=r??this.input.selectionEnd;this.input.setRangeText(e,i,s,o),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,o=this.helpText?!0:!!t,s=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return $`
      <div
        part="form-control"
        class=${tt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":o})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${tt({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${G(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${G(this.placeholder)}
              minlength=${G(this.minlength)}
              maxlength=${G(this.maxlength)}
              min=${G(this.min)}
              max=${G(this.max)}
              step=${G(this.step)}
              .value=${li(this.value)}
              autocapitalize=${G(this.autocapitalize)}
              autocomplete=${G(this.autocomplete)}
              autocorrect=${G(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${G(this.pattern)}
              enterkeyhint=${G(this.enterkeyhint)}
              inputmode=${G(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${s?$`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?$`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?$`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:$`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};ut.styles=[J,mi,Jm];ut.dependencies={"sl-icon":Rt};m([B(".input__control")],ut.prototype,"input",2);m([M()],ut.prototype,"hasFocus",2);m([v()],ut.prototype,"title",2);m([v({reflect:!0})],ut.prototype,"type",2);m([v()],ut.prototype,"name",2);m([v()],ut.prototype,"value",2);m([fi()],ut.prototype,"defaultValue",2);m([v({reflect:!0})],ut.prototype,"size",2);m([v({type:Boolean,reflect:!0})],ut.prototype,"filled",2);m([v({type:Boolean,reflect:!0})],ut.prototype,"pill",2);m([v()],ut.prototype,"label",2);m([v({attribute:"help-text"})],ut.prototype,"helpText",2);m([v({type:Boolean})],ut.prototype,"clearable",2);m([v({type:Boolean,reflect:!0})],ut.prototype,"disabled",2);m([v()],ut.prototype,"placeholder",2);m([v({type:Boolean,reflect:!0})],ut.prototype,"readonly",2);m([v({attribute:"password-toggle",type:Boolean})],ut.prototype,"passwordToggle",2);m([v({attribute:"password-visible",type:Boolean})],ut.prototype,"passwordVisible",2);m([v({attribute:"no-spin-buttons",type:Boolean})],ut.prototype,"noSpinButtons",2);m([v({reflect:!0})],ut.prototype,"form",2);m([v({type:Boolean,reflect:!0})],ut.prototype,"required",2);m([v()],ut.prototype,"pattern",2);m([v({type:Number})],ut.prototype,"minlength",2);m([v({type:Number})],ut.prototype,"maxlength",2);m([v()],ut.prototype,"min",2);m([v()],ut.prototype,"max",2);m([v()],ut.prototype,"step",2);m([v()],ut.prototype,"autocapitalize",2);m([v()],ut.prototype,"autocorrect",2);m([v()],ut.prototype,"autocomplete",2);m([v({type:Boolean})],ut.prototype,"autofocus",2);m([v()],ut.prototype,"enterkeyhint",2);m([v({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],ut.prototype,"spellcheck",2);m([v()],ut.prototype,"inputmode",2);m([R("disabled",{waitUntilFirstUpdate:!0})],ut.prototype,"handleDisabledChange",1);m([R("step",{waitUntilFirstUpdate:!0})],ut.prototype,"handleStepChange",1);m([R("value",{waitUntilFirstUpdate:!0})],ut.prototype,"handleValueChange",1);ut.define("sl-input");const lp=new Map([["Calories","🔥"],["Protein","P"],["Carbs","C"],["Fat","F"]]),tg=new Map([["Sedentary",1.2],["Lightly_Active",1.375],["Moderately_Active",1.55],["Very_Active",1.725],["Extremely_Active",1.9]]),eg=new Map([["Lose_Weight",-20],["Slowly_Lose_Weight",-10],["Maintain_Weight",0],["Slowly_Gain_Weight",10],["Gain_Weight",20]]),rg=new Map([["Male",5],["Female",-160]]),og=["Lose_Weight","Slowly_Lose_Weight","Maintain_Weight","Slowly_Gain_Weight","Gain_Weight"],ig=["Sedentary","Lightly_Active","Moderately_Active","Very_Active","Extremely_Active"],Sa=["Calories","Protein","Carbs","Fat"],sg=["100g","100ml","piece","1 tbsp","shot","pint"];var ng=Object.defineProperty,ag=Object.getOwnPropertyDescriptor,cp=(e,t,r,o)=>{for(var i=o>1?void 0:o?ag(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&ng(t,r,i),i};let Dl=class extends yt{constructor(){super(...arguments),this.miniMacro=e=>$`
    <div class="macro-wheel">
      <span> ${lp.get(e)} ${Math.round(this.foodEntry.Quantity*this.food.Macros[e])} </span>
    </div>
  `}static get styles(){return[F`
        :host {
          display: flex;
          align-items: center;
          gap: var(--sl-spacing-small);
          padding: var(--sl-spacing-small);
          background: var(--sl-color-neutral-100);
          border-radius: var(--sl-border-radius-medium);
        }
        .center {
          display: flex;
          flex-direction: column;
          width: 100%;
          gap: var(--sl-spacing-2x-small);
        }
        .title {
          font-size: var(--sl-font-size-small);
          font-weight: bold;
        }
        .bottom {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: var(--sl-color-netural-300);
          font-size: var(--sl-font-size-x-small);
        }
        .macros {
          display: flex;
          align-items: center;
          gap: var(--sl-spacing-medium);
        }
      `]}get food(){return this.foodEntry.Food}render(){return $`
      <div class="center">
        <div class="title">${this.food.Name}</div>
        <div class="bottom">
          <span>
            ${this.foodEntry.Quantity} x
            ${ss(this.food)?"piece(s)":this.food.Portion}
          </span>
          <div class="macros">${Sa.map(this.miniMacro)}</div>
        </div>
      </div>
    `}};cp([v({attribute:!1})],Dl.prototype,"foodEntry",2);Dl=cp([Ct("food-entry-item")],Dl);function Zt(e,t){return new CustomEvent(e,{bubbles:!0,composed:!0,detail:t})}var lg=Object.defineProperty,cg=Object.getOwnPropertyDescriptor,Ia=(e,t,r,o)=>{for(var i=o>1?void 0:o?cg(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&lg(t,r,i),i};let Ns=class extends yt{constructor(){super(...arguments),this.foodEntries=[],this.totalMacros=e=>Math.round(this.foodEntries?.reduce((t,r)=>t+r.Food.Macros[e]*r.Quantity,0)??0),this.AmendEntry=e=>t=>{this.dispatchEvent(Zt("on-show-food-drawer",{addEntry:!0,foodEntry:e}))},this.AddEntryAtTime=e=>{this.dispatchEvent(Zt("time-selected",{time:this.timeSlot.time})),this.dispatchEvent(Zt("on-show-food-drawer",{addEntry:!0}))},this.IsEmpty=()=>(this.foodEntries?.length??0)===0,this.DisplayFoodEntry=e=>$`<food-entry-item
      .foodEntry="${e}"
      @click="${this.AmendEntry(e)}"
    ></food-entry-item>`,this.DisplayMacro=e=>$`
    <div class="macro">
      <span>${lp.get(e)}</span>
      <span>${this.totalMacros(e)}</span>
    </div>
  `}static get styles(){return[F`
        :host {
          position: relative;
        }
        .timeline {
          height: 100%;
          width: 2px;
          background: var(--sl-color-neutral-200);
          position: absolute;
          left: 2rem;
          z-index: 1;
        }
        .body,
        .header {
          z-index: 20;
        }

        .body,
        :host {
          display: flex;
          flex-direction: column;
        }
        .time {
          width: 3rem;
        }
        .time-pill {
          border-radius: var(--sl-border-radius-pill);
          background-color: var(--sl-color-neutral-0);
          color: var(--sl-color-neutral-700);
          font-size: var(--sl-font-size-x-small);
          padding: var(--sl-spacing-2x-small) var(--sl-spacing-3x-small);
          border: 1px solid;
          border-color: var(--sl-color-neutral-300);
          width: var(--sl-spacing-2x-large);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .macro,
        .macros,
        .card-header-actions {
          display: flex;
          align-items: baseline;
        }

        .card-header-actions {
          gap: 1rem;
        }

        .macros {
          gap: var(--sl-spacing-small);
        }
        .macro {
          font-size: var(--sl-font-size-small);
          gap: var(--sl-spacing-2x-small);
        }

        .body {
          padding: var(--sl-spacing-2x-small) var(--sl-spacing-small);
          gap: var(--sl-spacing-small);
          margin-left: 3rem;
        }

        .header {
          display: flex;
          padding: var(--sl-spacing-2x-small) var(--sl-spacing-small);
          align-items: center;
          justify-content: space-between;
          font-size: var(--sl-font-size-small);
        }
      `]}render(){return $`
      <div class="header">
        <div class="card-header-actions">
          <div class="time-pill">${this.timeSlot.time.hour}h</div>
          <sl-button
            @click="${this.AddEntryAtTime}"
            variant="default"
            size="small"
            circle
          >
            <sl-icon name="plus" label="Add Entry"></sl-icon>
          </sl-button>
        </div>
        <div class="macros">
          ${this.IsEmpty()?bt:Sa.map(this.DisplayMacro)}
        </div>
      </div>
      <div class="body">
        ${this.IsEmpty()?bt:this.foodEntries.map(this.DisplayFoodEntry)}
      </div>
      <div class="timeline"></div>
    `}};Ia([v({attribute:!1})],Ns.prototype,"foodEntries",2);Ia([v({attribute:!1})],Ns.prototype,"timeSlot",2);Ia([M()],Ns.prototype,"macros",2);Ns=Ia([Ct("food-entry-card")],Ns);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let dp=class extends Event{constructor(t,r,o){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.callback=r,this.subscribe=o??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ih=class{constructor(t,r,o,i){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(s,n)=>{this.unsubscribe&&(this.unsubscribe!==n&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=s,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(s,n)),this.unsubscribe=n},this.host=t,r.context!==void 0){const s=r;this.context=s.context,this.callback=s.callback,this.subscribe=s.subscribe??!1}else this.context=r,this.callback=o,this.subscribe=i??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new dp(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let dg=class{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,r=!1){const o=r||!Object.is(t,this.o);this.o=t,o&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[r,{disposer:o}]of this.subscriptions)r(this.o,o)},t!==void 0&&(this.value=t)}addCallback(t,r,o){if(!o)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:r});const{disposer:i}=this.subscriptions.get(t);t(this.value,i)}clearCallbacks(){this.subscriptions.clear()}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let hg=class extends Event{constructor(t){super("context-provider",{bubbles:!0,composed:!0}),this.context=t}},sh=class extends dg{constructor(t,r,o){super(r.context!==void 0?r.initialValue:o),this.onContextRequest=i=>{const s=i.composedPath()[0];i.context===this.context&&s!==this.host&&(i.stopPropagation(),this.addCallback(i.callback,s,i.subscribe))},this.onProviderRequest=i=>{const s=i.composedPath()[0];if(i.context!==this.context||s===this.host)return;const n=new Set;for(const[a,{consumerHost:l}]of this.subscriptions)n.has(a)||(n.add(a),l.dispatchEvent(new dp(this.context,a,!0)));i.stopPropagation()},this.host=t,r.context!==void 0?this.context=r.context:this.context=r,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new hg(this.context))}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Rc({context:e}){return(t,r)=>{const o=new WeakMap;if(typeof r=="object")return r.addInitializer(function(){o.set(this,new sh(this,{context:e}))}),{get(){return t.get.call(this)},set(i){return o.get(this)?.setValue(i),t.set.call(this,i)},init(i){return o.get(this)?.setValue(i),i}};{t.constructor.addInitializer(n=>{o.set(n,new sh(n,{context:e}))});const i=Object.getOwnPropertyDescriptor(t,r);let s;if(i===void 0){const n=new WeakMap;s={get:function(){return n.get(this)},set:function(a){o.get(this).setValue(a),n.set(this,a)},configurable:!0,enumerable:!0}}else{const n=i.set;s={...i,set:function(a){o.get(this).setValue(a),n?.call(this,a)}}}return void Object.defineProperty(t,r,s)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Qr({context:e,subscribe:t}){return(r,o)=>{typeof o=="object"?o.addInitializer(function(){new ih(this,{context:e,callback:i=>{this[o.name]=i},subscribe:t})}):r.constructor.addInitializer(i=>{new ih(i,{context:e,callback:s=>{i[o]=s},subscribe:t})})}}const Oa=Symbol("daily-entries"),cn=Symbol("selected-date"),Aa=Symbol("selected-time");class Xn{static{this.dbName="dietGoals"}}class ci{constructor(t,r,o){this.Quantity=0,this.Committed=!1,this.Food=t,this.Date=r??he.Now.plainDateISO(),this.Time=o??he.Now.plainTimeISO()}static{this.dbName="foodEntry"}}class Qn{static{this.dbName="personalInfo"}}const Sl=(e,t)=>t.some(r=>e instanceof r);let nh,ah;function ug(){return nh||(nh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pg(){return ah||(ah=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Il=new WeakMap,rl=new WeakMap,za=new WeakMap;function fg(e){const t=new Promise((r,o)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",n)},s=()=>{r(ti(e.result)),i()},n=()=>{o(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",n)});return za.set(t,e),t}function mg(e){if(Il.has(e))return;const t=new Promise((r,o)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",n),e.removeEventListener("abort",n)},s=()=>{r(),i()},n=()=>{o(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",n),e.addEventListener("abort",n)});Il.set(e,t)}let Ol={get(e,t,r){if(e instanceof IDBTransaction){if(t==="done")return Il.get(e);if(t==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return ti(e[t])},set(e,t,r){return e[t]=r,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function hp(e){Ol=e(Ol)}function gg(e){return pg().includes(e)?function(...t){return e.apply(Al(this),t),ti(this.request)}:function(...t){return ti(e.apply(Al(this),t))}}function bg(e){return typeof e=="function"?gg(e):(e instanceof IDBTransaction&&mg(e),Sl(e,ug())?new Proxy(e,Ol):e)}function ti(e){if(e instanceof IDBRequest)return fg(e);if(rl.has(e))return rl.get(e);const t=bg(e);return t!==e&&(rl.set(e,t),za.set(t,e)),t}const Al=e=>za.get(e);function yg(e,t,{blocked:r,upgrade:o,blocking:i,terminated:s}={}){const n=indexedDB.open(e,t),a=ti(n);return o&&n.addEventListener("upgradeneeded",l=>{o(ti(n.result),l.oldVersion,l.newVersion,ti(n.transaction),l)}),r&&n.addEventListener("blocked",l=>r(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),a}const vg=["get","getKey","getAll","getAllKeys","count"],wg=["put","add","delete","clear"],ol=new Map;function lh(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ol.get(t))return ol.get(t);const r=t.replace(/FromIndex$/,""),o=t!==r,i=wg.includes(r);if(!(r in(o?IDBIndex:IDBObjectStore).prototype)||!(i||vg.includes(r)))return;const s=async function(n,...a){const l=this.transaction(n,i?"readwrite":"readonly");let h=l.store;return o&&(h=h.index(a.shift())),(await Promise.all([h[r](...a),i&&l.done]))[0]};return ol.set(t,s),s}hp(e=>({...e,get:(t,r,o)=>lh(t,r)||e.get(t,r,o),has:(t,r)=>!!lh(t,r)||e.has(t,r)}));const _g=["continue","continuePrimaryKey","advance"],ch={},zl=new WeakMap,up=new WeakMap,xg={get(e,t){if(!_g.includes(t))return e[t];let r=ch[t];return r||(r=ch[t]=function(...o){zl.set(this,up.get(this)[t](...o))}),r}};async function*Cg(...e){let t=this;if(t instanceof IDBCursor||(t=await t.openCursor(...e)),!t)return;t=t;const r=new Proxy(t,xg);for(up.set(r,t),za.set(r,Al(t));t;)yield r,t=await(zl.get(r)||t.continue()),zl.delete(r)}function dh(e,t){return t===Symbol.asyncIterator&&Sl(e,[IDBIndex,IDBObjectStore,IDBCursor])||t==="iterate"&&Sl(e,[IDBIndex,IDBObjectStore])}hp(e=>({...e,get(t,r,o){return dh(t,r)?Cg:e.get(t,r,o)},has(t,r){return dh(t,r)||e.has(t,r)}}));async function Nc(){return await Et.db.get(Xn.dbName,1)}async function pp(e){await Et.db.put(Xn.dbName,e,1)}async function Bc(){return await Et.db.get(Qn.dbName,1)}async function fp(e){await Et.db.put(Qn.dbName,e,1)}const Tg=[{Name:"Lentils",Portion:"100g",Macros:{Calories:116,Protein:9,Carbs:20,Fat:.38},MainCategory:"Carb"},{Name:"Beans",Portion:"100g",Macros:{Calories:130,Protein:8,Carbs:22.8,Fat:.5},MainCategory:"Carb"},{Name:"Chickpeas",Portion:"100g",Macros:{Calories:164,Protein:8.8,Carbs:27,Fat:2.6},MainCategory:"Carb"},{Name:"Rice",Portion:"100g",Macros:{Calories:130,Protein:2.7,Carbs:28,Fat:.3},MainCategory:"Carb"},{Name:"Chicken breast",Portion:"100g",Macros:{Calories:165,Protein:31,Carbs:0,Fat:3.57},MainCategory:"Protein"},{Name:"Sausages",Portion:"100g",Macros:{Calories:280,Protein:14,Carbs:0,Fat:28},MainCategory:"Protein"},{Name:"Ribeye",Portion:"100g",Macros:{Calories:290,Protein:23,Carbs:0,Fat:22},MainCategory:"Protein"},{Name:"Salmon",Portion:"100g",Macros:{Calories:208,Protein:20,Carbs:0,Fat:13},MainCategory:"Protein"},{Name:"Egg",Portion:"piece",Macros:{Calories:72,Protein:6,Carbs:0,Fat:5},MainCategory:"Protein"},{Name:"Milk",Portion:"100ml",Macros:{Calories:46,Protein:3.5,Carbs:4.7,Fat:1.8},MainCategory:"Carb"},{Name:"30cm Wrap",Portion:"piece",Macros:{Calories:300,Protein:8.6,Carbs:50,Fat:7},MainCategory:"Carb"},{Name:"Greek yogurt 0 fat",Portion:"100g",Macros:{Calories:70,Protein:9,Carbs:0,Fat:0},MainCategory:"Protein"},{Name:"Sweet Potato",Portion:"100g",Macros:{Calories:86,Protein:1.6,Carbs:20,Fat:0},MainCategory:"Carb"},{Name:"Olive Oil",Portion:"1 tbsp",Macros:{Calories:119,Protein:0,Carbs:0,Fat:14},MainCategory:"Fat"},{Name:"Spirit",Portion:"shot",Macros:{Calories:65,Protein:0,Carbs:0,Fat:0},MainCategory:"Alcohol"},{Name:"Beer",Portion:"pint",Macros:{Calories:215,Protein:2.5,Carbs:18,Fat:0},MainCategory:"Alcohol"},{Name:"Pasta",Portion:"100g",Macros:{Calories:350,Protein:12,Carbs:70,Fat:1.5},MainCategory:"Carb"},{Name:"Whey",Portion:"1 tbsp",Macros:{Calories:120,Protein:24,Carbs:1,Fat:1},MainCategory:"Protein"},{Name:"Assorted cookies",Portion:"piece",Macros:{Calories:63,Protein:.8,Carbs:8.8,Fat:2.6},MainCategory:"Carb"},{Name:"Oats",Portion:"100g",Macros:{Calories:380,Protein:13,Carbs:67,Fat:6.5},MainCategory:"Carb"},{Name:"Popcorn",Portion:"100g",Macros:{Calories:387,Protein:12.9,Carbs:77.8,Fat:4.54},MainCategory:"Carb"},{Name:"Cheat day",Portion:"piece",Macros:{Calories:1e3,Protein:30,Carbs:60,Fat:60},MainCategory:"Fat"},{Name:"Banana",Portion:"piece",Macros:{Calories:110,Protein:1,Carbs:28,Fat:0},MainCategory:"Carb"},{Name:"Apple",Portion:"piece",Macros:{Calories:95,Protein:1,Carbs:25,Fat:9},MainCategory:"Carb"},{Name:"Orange",Portion:"piece",Macros:{Calories:62,Protein:1,Carbs:15,Fat:0},MainCategory:"Carb"}],mp=new Lc;mp.Name="Chicken Wrap";mp.Ingredients=[{Quantity:1,Name:"Chicken breast",Portion:"100g",Macros:{Calories:165,Protein:31,Carbs:0,Fat:3.57},MainCategory:"Protein"},{Quantity:1,Name:"30 cm Wrap",Portion:"piece",Macros:{Calories:300,Protein:8.6,Carbs:50,Fat:7},MainCategory:"Carb"},{Quantity:1,Name:"Greek yogurt 0 fat",Portion:"100g",Macros:{Calories:70,Protein:20,Carbs:0,Fat:0},MainCategory:"Protein"}];const kg={Age:30,Gender:"Male",Height:178,Weight:75},$g={ActivityLevel:"Sedentary",WeightGoal:"Gain_Weight",FatCarbSplit:50},Eg=[{Name:"Breakfast",StartTime:"05:00",EndTime:"09:00"},{Name:"2nd Breakfast",StartTime:"09:00",EndTime:"11:00"},{Name:"Lunch",StartTime:"11:00",EndTime:"14:00"},{Name:"Aft. Snack",StartTime:"14:00",EndTime:"17:00"},{Name:"Dinner",StartTime:"17:00",EndTime:"19:00"},{Name:"Moonlight Snacks",StartTime:"19:00",EndTime:"23:00"}];async function Dg(){return await Et.db.getAll(Io.dbName)}async function Sg(e){e.forEach(gp)}async function gp(e){return await Et.db.put(Io.dbName,e)}async function Ig(e){await Et.db.delete(Io.dbName,e)}async function Og(e){await Ig(e.Name)}class hh{constructor(){this.FoodsDiem=[],this.FoodsToday=[],this.Date=new Date}static{this.dbName="meal"}}class Ml{static{this.dbName="meal-type"}}async function Ag(e){e.forEach(zg)}async function zg(e){await Et.db.put(Ml.dbName,e)}class Es{constructor(){this.showAllHours=!1}static{this.dbName="app-settings"}}const Mg="bulk",Pg=2;class Et{static{this._needsSeed=[]}static async StartDb(){Et._db=await yg(Mg,Pg,{upgrade(t,r){switch(r){case 0:case 1:Et.createFoodItemStore(t),Et.createFoodEntryStore(t),Et.createDietGoalsStore(t),Et.createPersonalInfoStore(t),Et.createMealTypes(t),Et.createMeals(t),Et._needsSeed.push(1);case 2:Et.createSettings(t),Et._needsSeed.push(2)}}}),await Et.SeedDB()}static get db(){return Et._db}static async SeedDB(){if(Et._needsSeed.length===0)return Promise.resolve();const t=[];return Et._needsSeed.includes(1)&&t.push(pp($g),fp(kg),Sg(Tg),Ag(Eg)),Et._needsSeed.includes(2)&&t.push(bp(new Es)),t.length===0?Promise.resolve():Promise.all(t)}static createSettings(t){t.objectStoreNames.contains(Es.dbName)||t.createObjectStore(Es.dbName,{autoIncrement:!1})}static createFoodItemStore(t){t.objectStoreNames.contains(Io.dbName)||t.createObjectStore(Io.dbName,{keyPath:"Name"})}static createMealTypes(t){t.objectStoreNames.contains(Ml.dbName)||t.createObjectStore(Ml.dbName,{keyPath:"Name"}).createIndex("StartTime","StartTime")}static createMeals(t){t.objectStoreNames.contains(hh.dbName)||t.createObjectStore(hh.dbName,{keyPath:"Id",autoIncrement:!0}).createIndex("Date","Date")}static createFoodEntryStore(t){t.objectStoreNames.contains(ci.dbName)||t.createObjectStore(ci.dbName,{keyPath:"Id",autoIncrement:!0}).createIndex("Date","Date")}static createDietGoalsStore(t){t.objectStoreNames.contains(Xn.dbName)||t.createObjectStore(Xn.dbName,{autoIncrement:!1})}static createPersonalInfoStore(t){t.objectStoreNames.contains(Qn.dbName)||t.createObjectStore(Qn.dbName,{autoIncrement:!1})}}async function Fg(){return await Et.db.get(Es.dbName,1)}async function bp(e){await Et.db.put(Es.dbName,e,1)}var Lg=Object.defineProperty,Rg=Object.getOwnPropertyDescriptor,dn=(e,t,r,o)=>{for(var i=o>1?void 0:o?Rg(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&Lg(t,r,i),i};let Yi=class extends yt{constructor(){super(...arguments),this.firstScroll=!1,this.foodEntries=[],this.day=he.Now.plainDateISO(),this._timeSlots=Array.from({length:24},(e,t)=>new Cm(he.PlainTime.from({hour:t}))),this.HasEntries=e=>this.foodEntries?.some(t=>t.Quantity>0&&t.Time.hour===e.hour&&t.Date.equals(this.day)),this.NormalHours=e=>e>=6&&e<=22,this.ToggleViewMode=async e=>{await bp({...this.appSettings,showAllHours:!this.appSettings.showAllHours}),await this.LoadSettings()}}static get styles(){return[F`
        :host {
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          width: 100%;
          height: 0;
          flex: 1 0 auto;
        }
        food-entry-card.filled {
          padding-bottom: 2rem;
        }
        .hour-block {
          width: 100%;
        }
        .nothing {
          vertical-align: middle;
          text-align: center;
        }
      `]}TimeVisible(e){return this.HasEntries(e)||this.NormalHours(e.hour)&&(this.appSettings?.showAllHours??!1)}CheckVisibleTimes(){this._timeSlots=this._timeSlots.map(e=>({...e,visible:this.TimeVisible(e.time)}))}willUpdate(e){(e.has("day")||e.has("foodEntries"))&&this.CheckVisibleTimes()}async firstUpdated(){this.addEventListener("scroll",e=>{this.firstScroll&&this.dispatchEvent(Zt("scrolly",this.scrollTop))}),this.hourBlocks.then(e=>{const t=he.Now.plainTimeISO().hour;this.shadowRoot?.getElementById(`time-${t}`)?.scrollIntoView(),setTimeout(()=>this.firstScroll=!0,100)}),await this.LoadSettings()}foodEntriesInHour(e){return this.foodEntries?.filter(t=>t.Date.equals(this.day)&&t.Quantity>0&&t.Time.hour===e)}async LoadSettings(){this.appSettings=await Fg(),this.CheckVisibleTimes()}render(){return $`
      <sl-button
        style="margin:1rem 0;"
        size="large"
        @click="${this.ToggleViewMode}"
        >Toggle View Mode</sl-button
      >
      ${this._timeSlots.filter(e=>e.visible).length===0?$`<br /><br /><br />
            <h1 class="nothing">No entries for this day (yet)</h1>`:this._timeSlots.filter(e=>e.visible).map(e=>$` <div class="hour-block" id="time-${e.time.hour}">
                <food-entry-card
                  class="${this.HasEntries(e.time)?"filled":""}"
                  .foodEntries="${this.foodEntriesInHour(e.time.hour)}"
                  .timeSlot="${e}"
                ></food-entry-card>
              </div>`)}
    `}};dn([M()],Yi.prototype,"appSettings",2);dn([Yh(".hour-block")],Yi.prototype,"hourBlocks",2);dn([Qr({context:Oa,subscribe:!0}),M()],Yi.prototype,"foodEntries",2);dn([Qr({context:cn,subscribe:!0}),M()],Yi.prototype,"day",2);Yi=dn([Ct("food-entry-timeline")],Yi);var Ng=Object.defineProperty,Bg=Object.getOwnPropertyDescriptor,Ug=(e,t,r,o)=>{for(var i=o>1?void 0:o?Bg(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&Ng(t,r,i),i};let Pl=class extends yt{render(){return $`<food-entry-timeline id="scrolly"></food-entry-timeline> `}};Pl.styles=[yf];Pl=Ug([Ct("diet-timeline")],Pl);var Vg=F`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,jg=F`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,ye=class extends Z{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?Kn`a`:Kn`button`;return $s`
      <${t}
        part="base"
        class=${tt({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${G(e?void 0:this.disabled)}
        type=${G(e?void 0:"button")}
        href=${G(e?this.href:void 0)}
        target=${G(e?this.target:void 0)}
        download=${G(e?this.download:void 0)}
        rel=${G(e&&this.target?"noreferrer noopener":void 0)}
        role=${G(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${G(this.name)}
          library=${G(this.library)}
          src=${G(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};ye.styles=[J,jg];ye.dependencies={"sl-icon":Rt};m([B(".icon-button")],ye.prototype,"button",2);m([M()],ye.prototype,"hasFocus",2);m([v()],ye.prototype,"name",2);m([v()],ye.prototype,"library",2);m([v()],ye.prototype,"src",2);m([v()],ye.prototype,"href",2);m([v()],ye.prototype,"target",2);m([v()],ye.prototype,"download",2);m([v()],ye.prototype,"label",2);m([v({type:Boolean,reflect:!0})],ye.prototype,"disabled",2);var No=class extends Z{constructor(){super(...arguments),this.localize=new Tt(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return $`
      <span
        part="base"
        class=${tt({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?$`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};No.styles=[J,Vg];No.dependencies={"sl-icon-button":ye};m([v({reflect:!0})],No.prototype,"variant",2);m([v({reflect:!0})],No.prototype,"size",2);m([v({type:Boolean,reflect:!0})],No.prototype,"pill",2);m([v({type:Boolean})],No.prototype,"removable",2);var Yg=F`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix */
  .select__prefix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`;function Hg(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var Fl=new Set;function qg(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function Wg(){const e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(e)||!e?0:e}function Ds(e){if(Fl.add(e),!document.documentElement.classList.contains("sl-scroll-lock")){const t=qg()+Wg();document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function Ss(e){Fl.delete(e),Fl.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function Ll(e,t,r="vertical",o="smooth"){const i=Hg(e,t),s=i.top+t.scrollTop,n=i.left+t.scrollLeft,a=t.scrollLeft,l=t.scrollLeft+t.offsetWidth,h=t.scrollTop,p=t.scrollTop+t.offsetHeight;(r==="horizontal"||r==="both")&&(n<a?t.scrollTo({left:n,behavior:o}):n+e.clientWidth>l&&t.scrollTo({left:n-t.offsetWidth+e.clientWidth,behavior:o})),(r==="vertical"||r==="both")&&(s<h?t.scrollTo({top:s,behavior:o}):s+e.clientHeight>p&&t.scrollTo({top:s-t.offsetHeight+e.clientHeight,behavior:o}))}var Gg=F`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const Oo=Math.min,dr=Math.max,Jn=Math.round,Tn=Math.floor,Ao=e=>({x:e,y:e}),Zg={left:"right",right:"left",bottom:"top",top:"bottom"},Kg={start:"end",end:"start"};function Rl(e,t,r){return dr(e,Oo(t,r))}function ns(e,t){return typeof e=="function"?e(t):e}function zo(e){return e.split("-")[0]}function as(e){return e.split("-")[1]}function yp(e){return e==="x"?"y":"x"}function Uc(e){return e==="y"?"height":"width"}function hn(e){return["top","bottom"].includes(zo(e))?"y":"x"}function Vc(e){return yp(hn(e))}function Xg(e,t,r){r===void 0&&(r=!1);const o=as(e),i=Vc(e),s=Uc(i);let n=i==="x"?o===(r?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[s]>t.floating[s]&&(n=ta(n)),[n,ta(n)]}function Qg(e){const t=ta(e);return[Nl(e),t,Nl(t)]}function Nl(e){return e.replace(/start|end/g,t=>Kg[t])}function Jg(e,t,r){const o=["left","right"],i=["right","left"],s=["top","bottom"],n=["bottom","top"];switch(e){case"top":case"bottom":return r?t?i:o:t?o:i;case"left":case"right":return t?s:n;default:return[]}}function t0(e,t,r,o){const i=as(e);let s=Jg(zo(e),r==="start",o);return i&&(s=s.map(n=>n+"-"+i),t&&(s=s.concat(s.map(Nl)))),s}function ta(e){return e.replace(/left|right|bottom|top/g,t=>Zg[t])}function e0(e){return{top:0,right:0,bottom:0,left:0,...e}}function vp(e){return typeof e!="number"?e0(e):{top:e,right:e,bottom:e,left:e}}function ea(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function uh(e,t,r){let{reference:o,floating:i}=e;const s=hn(t),n=Vc(t),a=Uc(n),l=zo(t),h=s==="y",p=o.x+o.width/2-i.width/2,u=o.y+o.height/2-i.height/2,f=o[a]/2-i[a]/2;let g;switch(l){case"top":g={x:p,y:o.y-i.height};break;case"bottom":g={x:p,y:o.y+o.height};break;case"right":g={x:o.x+o.width,y:u};break;case"left":g={x:o.x-i.width,y:u};break;default:g={x:o.x,y:o.y}}switch(as(t)){case"start":g[n]-=f*(r&&h?-1:1);break;case"end":g[n]+=f*(r&&h?-1:1);break}return g}const r0=async(e,t,r)=>{const{placement:o="bottom",strategy:i="absolute",middleware:s=[],platform:n}=r,a=s.filter(Boolean),l=await(n.isRTL==null?void 0:n.isRTL(t));let h=await n.getElementRects({reference:e,floating:t,strategy:i}),{x:p,y:u}=uh(h,o,l),f=o,g={},b=0;for(let y=0;y<a.length;y++){const{name:w,fn:_}=a[y],{x,y:T,data:C,reset:k}=await _({x:p,y:u,initialPlacement:o,placement:f,strategy:i,middlewareData:g,rects:h,platform:n,elements:{reference:e,floating:t}});p=x??p,u=T??u,g={...g,[w]:{...g[w],...C}},k&&b<=50&&(b++,typeof k=="object"&&(k.placement&&(f=k.placement),k.rects&&(h=k.rects===!0?await n.getElementRects({reference:e,floating:t,strategy:i}):k.rects),{x:p,y:u}=uh(h,f,l)),y=-1)}return{x:p,y:u,placement:f,strategy:i,middlewareData:g}};async function jc(e,t){var r;t===void 0&&(t={});const{x:o,y:i,platform:s,rects:n,elements:a,strategy:l}=e,{boundary:h="clippingAncestors",rootBoundary:p="viewport",elementContext:u="floating",altBoundary:f=!1,padding:g=0}=ns(t,e),b=vp(g),w=a[f?u==="floating"?"reference":"floating":u],_=ea(await s.getClippingRect({element:(r=await(s.isElement==null?void 0:s.isElement(w)))==null||r?w:w.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(a.floating)),boundary:h,rootBoundary:p,strategy:l})),x=u==="floating"?{...n.floating,x:o,y:i}:n.reference,T=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a.floating)),C=await(s.isElement==null?void 0:s.isElement(T))?await(s.getScale==null?void 0:s.getScale(T))||{x:1,y:1}:{x:1,y:1},k=ea(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:x,offsetParent:T,strategy:l}):x);return{top:(_.top-k.top+b.top)/C.y,bottom:(k.bottom-_.bottom+b.bottom)/C.y,left:(_.left-k.left+b.left)/C.x,right:(k.right-_.right+b.right)/C.x}}const o0=e=>({name:"arrow",options:e,async fn(t){const{x:r,y:o,placement:i,rects:s,platform:n,elements:a,middlewareData:l}=t,{element:h,padding:p=0}=ns(e,t)||{};if(h==null)return{};const u=vp(p),f={x:r,y:o},g=Vc(i),b=Uc(g),y=await n.getDimensions(h),w=g==="y",_=w?"top":"left",x=w?"bottom":"right",T=w?"clientHeight":"clientWidth",C=s.reference[b]+s.reference[g]-f[g]-s.floating[b],k=f[g]-s.reference[g],D=await(n.getOffsetParent==null?void 0:n.getOffsetParent(h));let S=D?D[T]:0;(!S||!await(n.isElement==null?void 0:n.isElement(D)))&&(S=a.floating[T]||s.floating[b]);const O=C/2-k/2,I=S/2-y[b]/2-1,P=Oo(u[_],I),X=Oo(u[x],I),W=P,V=S-y[b]-X,q=S/2-y[b]/2+O,z=Rl(W,q,V),Y=!l.arrow&&as(i)!=null&&q!==z&&s.reference[b]/2-(q<W?P:X)-y[b]/2<0,Q=Y?q<W?q-W:q-V:0;return{[g]:f[g]+Q,data:{[g]:z,centerOffset:q-z-Q,...Y&&{alignmentOffset:Q}},reset:Y}}}),i0=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var r,o;const{placement:i,middlewareData:s,rects:n,initialPlacement:a,platform:l,elements:h}=t,{mainAxis:p=!0,crossAxis:u=!0,fallbackPlacements:f,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:y=!0,...w}=ns(e,t);if((r=s.arrow)!=null&&r.alignmentOffset)return{};const _=zo(i),x=zo(a)===a,T=await(l.isRTL==null?void 0:l.isRTL(h.floating)),C=f||(x||!y?[ta(a)]:Qg(a));!f&&b!=="none"&&C.push(...t0(a,y,b,T));const k=[a,...C],D=await jc(t,w),S=[];let O=((o=s.flip)==null?void 0:o.overflows)||[];if(p&&S.push(D[_]),u){const W=Xg(i,n,T);S.push(D[W[0]],D[W[1]])}if(O=[...O,{placement:i,overflows:S}],!S.every(W=>W<=0)){var I,P;const W=(((I=s.flip)==null?void 0:I.index)||0)+1,V=k[W];if(V)return{data:{index:W,overflows:O},reset:{placement:V}};let q=(P=O.filter(z=>z.overflows[0]<=0).sort((z,Y)=>z.overflows[1]-Y.overflows[1])[0])==null?void 0:P.placement;if(!q)switch(g){case"bestFit":{var X;const z=(X=O.map(Y=>[Y.placement,Y.overflows.filter(Q=>Q>0).reduce((Q,Yt)=>Q+Yt,0)]).sort((Y,Q)=>Y[1]-Q[1])[0])==null?void 0:X[0];z&&(q=z);break}case"initialPlacement":q=a;break}if(i!==q)return{reset:{placement:q}}}return{}}}};async function s0(e,t){const{placement:r,platform:o,elements:i}=e,s=await(o.isRTL==null?void 0:o.isRTL(i.floating)),n=zo(r),a=as(r),l=hn(r)==="y",h=["left","top"].includes(n)?-1:1,p=s&&l?-1:1,u=ns(t,e);let{mainAxis:f,crossAxis:g,alignmentAxis:b}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return a&&typeof b=="number"&&(g=a==="end"?b*-1:b),l?{x:g*p,y:f*h}:{x:f*h,y:g*p}}const n0=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var r,o;const{x:i,y:s,placement:n,middlewareData:a}=t,l=await s0(t,e);return n===((r=a.offset)==null?void 0:r.placement)&&(o=a.arrow)!=null&&o.alignmentOffset?{}:{x:i+l.x,y:s+l.y,data:{...l,placement:n}}}}},a0=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:r,y:o,placement:i}=t,{mainAxis:s=!0,crossAxis:n=!1,limiter:a={fn:w=>{let{x:_,y:x}=w;return{x:_,y:x}}},...l}=ns(e,t),h={x:r,y:o},p=await jc(t,l),u=hn(zo(i)),f=yp(u);let g=h[f],b=h[u];if(s){const w=f==="y"?"top":"left",_=f==="y"?"bottom":"right",x=g+p[w],T=g-p[_];g=Rl(x,g,T)}if(n){const w=u==="y"?"top":"left",_=u==="y"?"bottom":"right",x=b+p[w],T=b-p[_];b=Rl(x,b,T)}const y=a.fn({...t,[f]:g,[u]:b});return{...y,data:{x:y.x-r,y:y.y-o}}}}},l0=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:r,rects:o,platform:i,elements:s}=t,{apply:n=()=>{},...a}=ns(e,t),l=await jc(t,a),h=zo(r),p=as(r),u=hn(r)==="y",{width:f,height:g}=o.floating;let b,y;h==="top"||h==="bottom"?(b=h,y=p===(await(i.isRTL==null?void 0:i.isRTL(s.floating))?"start":"end")?"left":"right"):(y=h,b=p==="end"?"top":"bottom");const w=g-l[b],_=f-l[y],x=!t.middlewareData.shift;let T=w,C=_;if(u){const D=f-l.left-l.right;C=p||x?Oo(_,D):D}else{const D=g-l.top-l.bottom;T=p||x?Oo(w,D):D}if(x&&!p){const D=dr(l.left,0),S=dr(l.right,0),O=dr(l.top,0),I=dr(l.bottom,0);u?C=f-2*(D!==0||S!==0?D+S:dr(l.left,l.right)):T=g-2*(O!==0||I!==0?O+I:dr(l.top,l.bottom))}await n({...t,availableWidth:C,availableHeight:T});const k=await i.getDimensions(s.floating);return f!==k.width||g!==k.height?{reset:{rects:!0}}:{}}}};function Mo(e){return wp(e)?(e.nodeName||"").toLowerCase():"#document"}function pr(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function wo(e){var t;return(t=(wp(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function wp(e){return e instanceof Node||e instanceof pr(e).Node}function bo(e){return e instanceof Element||e instanceof pr(e).Element}function Wr(e){return e instanceof HTMLElement||e instanceof pr(e).HTMLElement}function ph(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof pr(e).ShadowRoot}function un(e){const{overflow:t,overflowX:r,overflowY:o,display:i}=xr(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+r)&&!["inline","contents"].includes(i)}function c0(e){return["table","td","th"].includes(Mo(e))}function Yc(e){const t=Hc(),r=xr(e);return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!t&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!t&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(r.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(r.contain||"").includes(o))}function d0(e){let t=Hi(e);for(;Wr(t)&&!Ma(t);){if(Yc(t))return t;t=Hi(t)}return null}function Hc(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Ma(e){return["html","body","#document"].includes(Mo(e))}function xr(e){return pr(e).getComputedStyle(e)}function Pa(e){return bo(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Hi(e){if(Mo(e)==="html")return e;const t=e.assignedSlot||e.parentNode||ph(e)&&e.host||wo(e);return ph(t)?t.host:t}function _p(e){const t=Hi(e);return Ma(t)?e.ownerDocument?e.ownerDocument.body:e.body:Wr(t)&&un(t)?t:_p(t)}function Bs(e,t,r){var o;t===void 0&&(t=[]),r===void 0&&(r=!0);const i=_p(e),s=i===((o=e.ownerDocument)==null?void 0:o.body),n=pr(i);return s?t.concat(n,n.visualViewport||[],un(i)?i:[],n.frameElement&&r?Bs(n.frameElement):[]):t.concat(i,Bs(i,[],r))}function xp(e){const t=xr(e);let r=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const i=Wr(e),s=i?e.offsetWidth:r,n=i?e.offsetHeight:o,a=Jn(r)!==s||Jn(o)!==n;return a&&(r=s,o=n),{width:r,height:o,$:a}}function qc(e){return bo(e)?e:e.contextElement}function zi(e){const t=qc(e);if(!Wr(t))return Ao(1);const r=t.getBoundingClientRect(),{width:o,height:i,$:s}=xp(t);let n=(s?Jn(r.width):r.width)/o,a=(s?Jn(r.height):r.height)/i;return(!n||!Number.isFinite(n))&&(n=1),(!a||!Number.isFinite(a))&&(a=1),{x:n,y:a}}const h0=Ao(0);function Cp(e){const t=pr(e);return!Hc()||!t.visualViewport?h0:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function u0(e,t,r){return t===void 0&&(t=!1),!r||t&&r!==pr(e)?!1:t}function di(e,t,r,o){t===void 0&&(t=!1),r===void 0&&(r=!1);const i=e.getBoundingClientRect(),s=qc(e);let n=Ao(1);t&&(o?bo(o)&&(n=zi(o)):n=zi(e));const a=u0(s,r,o)?Cp(s):Ao(0);let l=(i.left+a.x)/n.x,h=(i.top+a.y)/n.y,p=i.width/n.x,u=i.height/n.y;if(s){const f=pr(s),g=o&&bo(o)?pr(o):o;let b=f,y=b.frameElement;for(;y&&o&&g!==b;){const w=zi(y),_=y.getBoundingClientRect(),x=xr(y),T=_.left+(y.clientLeft+parseFloat(x.paddingLeft))*w.x,C=_.top+(y.clientTop+parseFloat(x.paddingTop))*w.y;l*=w.x,h*=w.y,p*=w.x,u*=w.y,l+=T,h+=C,b=pr(y),y=b.frameElement}}return ea({width:p,height:u,x:l,y:h})}const p0=[":popover-open",":modal"];function Tp(e){return p0.some(t=>{try{return e.matches(t)}catch{return!1}})}function f0(e){let{elements:t,rect:r,offsetParent:o,strategy:i}=e;const s=i==="fixed",n=wo(o),a=t?Tp(t.floating):!1;if(o===n||a&&s)return r;let l={scrollLeft:0,scrollTop:0},h=Ao(1);const p=Ao(0),u=Wr(o);if((u||!u&&!s)&&((Mo(o)!=="body"||un(n))&&(l=Pa(o)),Wr(o))){const f=di(o);h=zi(o),p.x=f.x+o.clientLeft,p.y=f.y+o.clientTop}return{width:r.width*h.x,height:r.height*h.y,x:r.x*h.x-l.scrollLeft*h.x+p.x,y:r.y*h.y-l.scrollTop*h.y+p.y}}function m0(e){return Array.from(e.getClientRects())}function kp(e){return di(wo(e)).left+Pa(e).scrollLeft}function g0(e){const t=wo(e),r=Pa(e),o=e.ownerDocument.body,i=dr(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),s=dr(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let n=-r.scrollLeft+kp(e);const a=-r.scrollTop;return xr(o).direction==="rtl"&&(n+=dr(t.clientWidth,o.clientWidth)-i),{width:i,height:s,x:n,y:a}}function b0(e,t){const r=pr(e),o=wo(e),i=r.visualViewport;let s=o.clientWidth,n=o.clientHeight,a=0,l=0;if(i){s=i.width,n=i.height;const h=Hc();(!h||h&&t==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}return{width:s,height:n,x:a,y:l}}function y0(e,t){const r=di(e,!0,t==="fixed"),o=r.top+e.clientTop,i=r.left+e.clientLeft,s=Wr(e)?zi(e):Ao(1),n=e.clientWidth*s.x,a=e.clientHeight*s.y,l=i*s.x,h=o*s.y;return{width:n,height:a,x:l,y:h}}function fh(e,t,r){let o;if(t==="viewport")o=b0(e,r);else if(t==="document")o=g0(wo(e));else if(bo(t))o=y0(t,r);else{const i=Cp(e);o={...t,x:t.x-i.x,y:t.y-i.y}}return ea(o)}function $p(e,t){const r=Hi(e);return r===t||!bo(r)||Ma(r)?!1:xr(r).position==="fixed"||$p(r,t)}function v0(e,t){const r=t.get(e);if(r)return r;let o=Bs(e,[],!1).filter(a=>bo(a)&&Mo(a)!=="body"),i=null;const s=xr(e).position==="fixed";let n=s?Hi(e):e;for(;bo(n)&&!Ma(n);){const a=xr(n),l=Yc(n);!l&&a.position==="fixed"&&(i=null),(s?!l&&!i:!l&&a.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||un(n)&&!l&&$p(e,n))?o=o.filter(p=>p!==n):i=a,n=Hi(n)}return t.set(e,o),o}function w0(e){let{element:t,boundary:r,rootBoundary:o,strategy:i}=e;const n=[...r==="clippingAncestors"?v0(t,this._c):[].concat(r),o],a=n[0],l=n.reduce((h,p)=>{const u=fh(t,p,i);return h.top=dr(u.top,h.top),h.right=Oo(u.right,h.right),h.bottom=Oo(u.bottom,h.bottom),h.left=dr(u.left,h.left),h},fh(t,a,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function _0(e){const{width:t,height:r}=xp(e);return{width:t,height:r}}function x0(e,t,r){const o=Wr(t),i=wo(t),s=r==="fixed",n=di(e,!0,s,t);let a={scrollLeft:0,scrollTop:0};const l=Ao(0);if(o||!o&&!s)if((Mo(t)!=="body"||un(i))&&(a=Pa(t)),o){const u=di(t,!0,s,t);l.x=u.x+t.clientLeft,l.y=u.y+t.clientTop}else i&&(l.x=kp(i));const h=n.left+a.scrollLeft-l.x,p=n.top+a.scrollTop-l.y;return{x:h,y:p,width:n.width,height:n.height}}function mh(e,t){return!Wr(e)||xr(e).position==="fixed"?null:t?t(e):e.offsetParent}function Ep(e,t){const r=pr(e);if(!Wr(e)||Tp(e))return r;let o=mh(e,t);for(;o&&c0(o)&&xr(o).position==="static";)o=mh(o,t);return o&&(Mo(o)==="html"||Mo(o)==="body"&&xr(o).position==="static"&&!Yc(o))?r:o||d0(e)||r}const C0=async function(e){const t=this.getOffsetParent||Ep,r=this.getDimensions;return{reference:x0(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,...await r(e.floating)}}};function T0(e){return xr(e).direction==="rtl"}const zn={convertOffsetParentRelativeRectToViewportRelativeRect:f0,getDocumentElement:wo,getClippingRect:w0,getOffsetParent:Ep,getElementRects:C0,getClientRects:m0,getDimensions:_0,getScale:zi,isElement:bo,isRTL:T0};function k0(e,t){let r=null,o;const i=wo(e);function s(){var a;clearTimeout(o),(a=r)==null||a.disconnect(),r=null}function n(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),s();const{left:h,top:p,width:u,height:f}=e.getBoundingClientRect();if(a||t(),!u||!f)return;const g=Tn(p),b=Tn(i.clientWidth-(h+u)),y=Tn(i.clientHeight-(p+f)),w=Tn(h),x={rootMargin:-g+"px "+-b+"px "+-y+"px "+-w+"px",threshold:dr(0,Oo(1,l))||1};let T=!0;function C(k){const D=k[0].intersectionRatio;if(D!==l){if(!T)return n();D?n(!1,D):o=setTimeout(()=>{n(!1,1e-7)},100)}T=!1}try{r=new IntersectionObserver(C,{...x,root:i.ownerDocument})}catch{r=new IntersectionObserver(C,x)}r.observe(e)}return n(!0),s}function $0(e,t,r,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:n=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,h=qc(e),p=i||s?[...h?Bs(h):[],...Bs(t)]:[];p.forEach(_=>{i&&_.addEventListener("scroll",r,{passive:!0}),s&&_.addEventListener("resize",r)});const u=h&&a?k0(h,r):null;let f=-1,g=null;n&&(g=new ResizeObserver(_=>{let[x]=_;x&&x.target===h&&g&&(g.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var T;(T=g)==null||T.observe(t)})),r()}),h&&!l&&g.observe(h),g.observe(t));let b,y=l?di(e):null;l&&w();function w(){const _=di(e);y&&(_.x!==y.x||_.y!==y.y||_.width!==y.width||_.height!==y.height)&&r(),y=_,b=requestAnimationFrame(w)}return r(),()=>{var _;p.forEach(x=>{i&&x.removeEventListener("scroll",r),s&&x.removeEventListener("resize",r)}),u?.(),(_=g)==null||_.disconnect(),g=null,l&&cancelAnimationFrame(b)}}const E0=a0,D0=i0,gh=l0,S0=o0,I0=(e,t,r)=>{const o=new Map,i={platform:zn,...r},s={...i.platform,_c:o};return r0(e,t,{...i,platform:s})};function O0(e){return A0(e)}function il(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function A0(e){for(let t=e;t;t=il(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=il(e);t;t=il(t)){if(!(t instanceof Element))continue;const r=getComputedStyle(t);if(r.display!=="contents"&&(r.position!=="static"||r.filter!=="none"||t.tagName==="BODY"))return t}return null}function z0(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e&&("contextElement"in e?e instanceof Element:!0)}var St=class extends Z{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),r=this.placement.includes("top")||this.placement.includes("bottom");let o=0,i=0,s=0,n=0,a=0,l=0,h=0,p=0;r?e.top<t.top?(o=e.left,i=e.bottom,s=e.right,n=e.bottom,a=t.left,l=t.top,h=t.right,p=t.top):(o=t.left,i=t.bottom,s=t.right,n=t.bottom,a=e.left,l=e.top,h=e.right,p=e.top):e.left<t.left?(o=e.right,i=e.top,s=t.left,n=t.top,a=e.right,l=e.bottom,h=t.left,p=t.bottom):(o=t.right,i=t.top,s=e.left,n=e.top,a=t.right,l=t.bottom,h=e.left,p=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${i}px`),this.style.setProperty("--hover-bridge-top-right-x",`${s}px`),this.style.setProperty("--hover-bridge-top-right-y",`${n}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${h}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${p}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||z0(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&(this.cleanup=$0(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[n0({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(gh({apply:({rects:r})=>{const o=this.sync==="width"||this.sync==="both",i=this.sync==="height"||this.sync==="both";this.popup.style.width=o?`${r.reference.width}px`:"",this.popup.style.height=i?`${r.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(D0({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(E0({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(gh({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:r,availableHeight:o})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${o}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${r}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(S0({element:this.arrowEl,padding:this.arrowPadding}));const t=this.strategy==="absolute"?r=>zn.getOffsetParent(r,O0):zn.getOffsetParent;I0(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:an(yo({},zn),{getOffsetParent:t})}).then(({x:r,y:o,middlewareData:i,placement:s})=>{const n=getComputedStyle(this).direction==="rtl",a={top:"bottom",right:"left",bottom:"top",left:"right"}[s.split("-")[0]];if(this.setAttribute("data-current-placement",s),Object.assign(this.popup.style,{left:`${r}px`,top:`${o}px`}),this.arrow){const l=i.arrow.x,h=i.arrow.y;let p="",u="",f="",g="";if(this.arrowPlacement==="start"){const b=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";p=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",u=n?b:"",g=n?"":b}else if(this.arrowPlacement==="end"){const b=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=n?"":b,g=n?b:"",f=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(g=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",p=typeof h=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(g=typeof l=="number"?`${l}px`:"",p=typeof h=="number"?`${h}px`:"");Object.assign(this.arrowEl.style,{top:p,right:u,bottom:f,left:g,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return $`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${tt({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${tt({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?$`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};St.styles=[J,Gg];m([B(".popup")],St.prototype,"popup",2);m([B(".popup__arrow")],St.prototype,"arrowEl",2);m([v()],St.prototype,"anchor",2);m([v({type:Boolean,reflect:!0})],St.prototype,"active",2);m([v({reflect:!0})],St.prototype,"placement",2);m([v({reflect:!0})],St.prototype,"strategy",2);m([v({type:Number})],St.prototype,"distance",2);m([v({type:Number})],St.prototype,"skidding",2);m([v({type:Boolean})],St.prototype,"arrow",2);m([v({attribute:"arrow-placement"})],St.prototype,"arrowPlacement",2);m([v({attribute:"arrow-padding",type:Number})],St.prototype,"arrowPadding",2);m([v({type:Boolean})],St.prototype,"flip",2);m([v({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],St.prototype,"flipFallbackPlacements",2);m([v({attribute:"flip-fallback-strategy"})],St.prototype,"flipFallbackStrategy",2);m([v({type:Object})],St.prototype,"flipBoundary",2);m([v({attribute:"flip-padding",type:Number})],St.prototype,"flipPadding",2);m([v({type:Boolean})],St.prototype,"shift",2);m([v({type:Object})],St.prototype,"shiftBoundary",2);m([v({attribute:"shift-padding",type:Number})],St.prototype,"shiftPadding",2);m([v({attribute:"auto-size"})],St.prototype,"autoSize",2);m([v()],St.prototype,"sync",2);m([v({type:Object})],St.prototype,"autoSizeBoundary",2);m([v({attribute:"auto-size-padding",type:Number})],St.prototype,"autoSizePadding",2);m([v({attribute:"hover-bridge",type:Boolean})],St.prototype,"hoverBridge",2);var Dp=new Map,M0=new WeakMap;function P0(e){return e??{keyframes:[],options:{duration:0}}}function bh(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function It(e,t){Dp.set(e,P0(t))}function Wt(e,t,r){const o=M0.get(e);if(o?.[t])return bh(o[t],r.dir);const i=Dp.get(t);return i?bh(i,r.dir):{keyframes:[],options:{duration:0}}}function Ke(e,t){return new Promise(r=>{function o(i){i.target===e&&(e.removeEventListener(t,o),r())}e.addEventListener(t,o)})}function oe(e,t,r){return new Promise(o=>{if(r?.duration===1/0)throw new Error("Promise-based animations must be finite.");const i=e.animate(t,an(yo({},r),{duration:Bl()?0:r.duration}));i.addEventListener("cancel",o,{once:!0}),i.addEventListener("finish",o,{once:!0})})}function yh(e){return e=e.toString().toLowerCase(),e.indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?parseFloat(e)*1e3:parseFloat(e)}function Bl(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function ue(e){return Promise.all(e.getAnimations().map(t=>new Promise(r=>{t.cancel(),requestAnimationFrame(r)})))}function ra(e,t){return e.map(r=>an(yo({},r),{height:r.height==="auto"?`${t}px`:r.height}))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ul=class extends is{constructor(t){if(super(t),this.it=bt,t.type!==Er.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===bt||t==null)return this._t=void 0,this.it=t;if(t===or)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}};Ul.directiveName="unsafeHTML",Ul.resultType=1;const Mn=os(Ul);var _t=class extends Z{constructor(){super(...arguments),this.formControlController=new vo(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Xe(this,"help-text","label"),this.localize=new Tt(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.name="",this.value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=e=>$`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${t=>this.handleTagRemove(t,e)}
      >
        ${e.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{const t=e.target,r=t.closest(".select__clear")!==null,o=t.closest("sl-icon-button")!==null;if(!(r||o)){if(e.key==="Escape"&&this.open&&!this.closeWatcher&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key==="Enter"||e.key===" "&&this.typeToSelectString===""){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const i=this.getAllOptions(),s=i.indexOf(this.currentOption);let n=Math.max(0,s);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key==="ArrowDown"?(n=s+1,n>i.length-1&&(n=0)):e.key==="ArrowUp"?(n=s-1,n<0&&(n=i.length-1)):e.key==="Home"?n=0:e.key==="End"&&(n=i.length-1),this.setCurrentOption(i[n])}if(e.key.length===1||e.key==="Backspace"){const i=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key==="Backspace")return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),e.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(const s of i)if(s.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(s);break}}}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()}}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),this.open=!1}addOpenListeners(){var e;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var e;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),(e=this.closeWatcher)==null||e.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(e){const r=e.composedPath().some(o=>o instanceof Element&&o.tagName.toLowerCase()==="sl-icon-button");this.disabled||r||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.key!=="Tab"&&(e.stopPropagation(),this.handleDocumentKeyDown(e))}handleClearClick(e){e.stopPropagation(),this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){const r=e.target.closest("sl-option"),o=this.value;r&&!r.disabled&&(this.multiple?this.toggleOptionSelection(r):this.setSelectedOptions(r),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==o&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value],r=[];customElements.get("sl-option")?(e.forEach(o=>r.push(o.value)),this.setSelectedOptions(e.filter(o=>t.includes(o.value)))):customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange())}handleTagRemove(e,t){e.stopPropagation(),this.disabled||(this.toggleOptionSelection(t,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(e){this.getAllOptions().forEach(r=>{r.current=!1,r.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){const t=this.getAllOptions(),r=Array.isArray(e)?e:[e];t.forEach(o=>o.selected=!1),r.length&&r.forEach(o=>o.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){t===!0||t===!1?e.selected=t:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){var e,t,r,o;this.selectedOptions=this.getAllOptions().filter(i=>i.selected),this.multiple?(this.value=this.selectedOptions.map(i=>i.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length)):(this.value=(t=(e=this.selectedOptions[0])==null?void 0:e.value)!=null?t:"",this.displayLabel=(o=(r=this.selectedOptions[0])==null?void 0:r.getTextLabel())!=null?o:""),this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){const r=this.getTag(e,t);return $`<div @sl-remove=${o=>this.handleTagRemove(o,e)}>
          ${typeof r=="string"?Mn(r):r}
        </div>`}else if(t===this.maxOptionsVisible)return $`<sl-tag size=${this.size}>+${this.selectedOptions.length-t}</sl-tag>`;return $``})}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}handleValueChange(){const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(e.filter(r=>t.includes(r.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await ue(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:e,options:t}=Wt(this,"select.show",{dir:this.localize.dir()});await oe(this.popup.popup,e,t),this.currentOption&&Ll(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await ue(this);const{keyframes:e,options:t}=Wt(this,"select.hide",{dir:this.localize.dir()});await oe(this.popup.popup,e,t),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,Ke(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,Ke(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,o=this.helpText?!0:!!t,i=this.clearable&&!this.disabled&&this.value.length>0,s=this.placeholder&&this.value.length===0;return $`
      <div
        part="form-control"
        class=${tt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":o})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${r?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${tt({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":s,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?$`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${i?$`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};_t.styles=[J,mi,Yg];_t.dependencies={"sl-icon":Rt,"sl-popup":St,"sl-tag":No};m([B(".select")],_t.prototype,"popup",2);m([B(".select__combobox")],_t.prototype,"combobox",2);m([B(".select__display-input")],_t.prototype,"displayInput",2);m([B(".select__value-input")],_t.prototype,"valueInput",2);m([B(".select__listbox")],_t.prototype,"listbox",2);m([M()],_t.prototype,"hasFocus",2);m([M()],_t.prototype,"displayLabel",2);m([M()],_t.prototype,"currentOption",2);m([M()],_t.prototype,"selectedOptions",2);m([v()],_t.prototype,"name",2);m([v({converter:{fromAttribute:e=>e.split(" "),toAttribute:e=>e.join(" ")}})],_t.prototype,"value",2);m([fi()],_t.prototype,"defaultValue",2);m([v({reflect:!0})],_t.prototype,"size",2);m([v()],_t.prototype,"placeholder",2);m([v({type:Boolean,reflect:!0})],_t.prototype,"multiple",2);m([v({attribute:"max-options-visible",type:Number})],_t.prototype,"maxOptionsVisible",2);m([v({type:Boolean,reflect:!0})],_t.prototype,"disabled",2);m([v({type:Boolean})],_t.prototype,"clearable",2);m([v({type:Boolean,reflect:!0})],_t.prototype,"open",2);m([v({type:Boolean})],_t.prototype,"hoist",2);m([v({type:Boolean,reflect:!0})],_t.prototype,"filled",2);m([v({type:Boolean,reflect:!0})],_t.prototype,"pill",2);m([v()],_t.prototype,"label",2);m([v({reflect:!0})],_t.prototype,"placement",2);m([v({attribute:"help-text"})],_t.prototype,"helpText",2);m([v({reflect:!0})],_t.prototype,"form",2);m([v({type:Boolean,reflect:!0})],_t.prototype,"required",2);m([v()],_t.prototype,"getTag",2);m([R("disabled",{waitUntilFirstUpdate:!0})],_t.prototype,"handleDisabledChange",1);m([R("value",{waitUntilFirstUpdate:!0})],_t.prototype,"handleValueChange",1);m([R("open",{waitUntilFirstUpdate:!0})],_t.prototype,"handleOpenChange",1);It("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});It("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});_t.define("sl-select");var F0=F`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,Cr=class extends Z{constructor(){super(...arguments),this.localize=new Tt(this),this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const e=this.childNodes;let t="";return[...e].forEach(r=>{r.nodeType===Node.ELEMENT_NODE&&(r.hasAttribute("slot")||(t+=r.textContent)),r.nodeType===Node.TEXT_NODE&&(t+=r.textContent)}),t.trim()}render(){return $`
      <div
        part="base"
        class=${tt({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};Cr.styles=[J,F0];Cr.dependencies={"sl-icon":Rt};m([B(".option__label")],Cr.prototype,"defaultSlot",2);m([M()],Cr.prototype,"current",2);m([M()],Cr.prototype,"selected",2);m([M()],Cr.prototype,"hasHover",2);m([v({reflect:!0})],Cr.prototype,"value",2);m([v({type:Boolean,reflect:!0})],Cr.prototype,"disabled",2);m([R("disabled")],Cr.prototype,"handleDisabledChange",1);m([R("selected")],Cr.prototype,"handleSelectedChange",1);m([R("value")],Cr.prototype,"handleValueChange",1);Cr.define("sl-option");var L0=F`
  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`,Qt=class extends Z{constructor(){super(...arguments),this.formControlController=new vo(this),this.hasSlotController=new Xe(this,"help-text","label"),this.localize=new Tt(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=e=>e.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(e){this.input.style.setProperty("--percent",`${e*100}%`)}syncTooltip(e){if(this.output!==null){const t=this.input.offsetWidth,r=this.output.offsetWidth,o=getComputedStyle(this.input).getPropertyValue("--thumb-size"),i=this.localize.dir()==="rtl",s=t*e;if(i){const n=`${t-s}px + ${e} * ${o}`;this.output.style.translate=`calc((${n} - ${r/2}px - ${o} / 2))`}else{const n=`${s}px - ${e} * ${o}`;this.output.style.translate=`calc(${n} - ${r/2}px + ${o} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const e=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(e),this.tooltip!=="none"&&this.syncTooltip(e)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}focus(e){this.input.focus(e)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,o=this.helpText?!0:!!t;return $`
      <div
        part="form-control"
        class=${tt({"form-control":!0,"form-control--medium":!0,"form-control--has-label":r,"form-control--has-help-text":o})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${tt({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${G(this.name)}
              ?disabled=${this.disabled}
              min=${G(this.min)}
              max=${G(this.max)}
              step=${G(this.step)}
              .value=${li(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?$`
                  <output part="tooltip" class="range__tooltip">
                    ${typeof this.tooltipFormatter=="function"?this.tooltipFormatter(this.value):this.value}
                  </output>
                `:""}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Qt.styles=[J,mi,L0];m([B(".range__control")],Qt.prototype,"input",2);m([B(".range__tooltip")],Qt.prototype,"output",2);m([M()],Qt.prototype,"hasFocus",2);m([M()],Qt.prototype,"hasTooltip",2);m([v()],Qt.prototype,"title",2);m([v()],Qt.prototype,"name",2);m([v({type:Number})],Qt.prototype,"value",2);m([v()],Qt.prototype,"label",2);m([v({attribute:"help-text"})],Qt.prototype,"helpText",2);m([v({type:Boolean,reflect:!0})],Qt.prototype,"disabled",2);m([v({type:Number})],Qt.prototype,"min",2);m([v({type:Number})],Qt.prototype,"max",2);m([v({type:Number})],Qt.prototype,"step",2);m([v()],Qt.prototype,"tooltip",2);m([v({attribute:!1})],Qt.prototype,"tooltipFormatter",2);m([v({reflect:!0})],Qt.prototype,"form",2);m([fi()],Qt.prototype,"defaultValue",2);m([ac({passive:!0})],Qt.prototype,"handleThumbDragStart",1);m([R("value",{waitUntilFirstUpdate:!0})],Qt.prototype,"handleValueChange",1);m([R("disabled",{waitUntilFirstUpdate:!0})],Qt.prototype,"handleDisabledChange",1);m([R("hasTooltip",{waitUntilFirstUpdate:!0})],Qt.prototype,"syncRange",1);Qt.define("sl-range");var R0=Object.defineProperty,N0=Object.getOwnPropertyDescriptor,Sp=(e,t,r,o)=>{for(var i=o>1?void 0:o?N0(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&R0(t,r,i),i};let Vl=class extends yt{constructor(){super(),this.getTextDisplayText=e=>e.replace("_"," "),this.getOptions=e=>e.map(t=>$`<sl-option value="${t}">${this.getTextDisplayText(t)}</sl-option>`)}async firstUpdated(){this._goals=await Nc(),this.addEventListener("diet-profile-changed",async e=>{await pp(e.detail)})}NotifyChange(){this.dispatchEvent(new CustomEvent("diet-profile-changed",{bubbles:!0,composed:!0,detail:this._goals}))}GoalsChanged(e,t){this._goals={...this._goals,[t]:e.target.value},this.NotifyChange()}render(){return this._goals?$`
          <form class="input-validation-required">
            <br />
            <sl-select hoist
              size="small"
              id="activityLevelSelect"
              label="Activity Level"
              .value="${this._goals.ActivityLevel}"
              @sl-change="${e=>this.GoalsChanged(e,"ActivityLevel")}"
              required
            >
              ${this.getOptions(ig)}
            </sl-select>
            <br />
            <sl-select hoist
              size="small"
              id="weightGoalSelect"
              .value="${this._goals.WeightGoal}"
              @sl-change="${e=>this.GoalsChanged(e,"WeightGoal")}"
              label="Goal"
              required
            >
              ${this.getOptions(og)}
            </sl-select>
            <br />
            <sl-input
              size="small"
              id="fatCarbSplitInput"
              .value="${this._goals.FatCarbSplit.toString()}"
              @sl-change="${e=>this.GoalsChanged(e,"FatCarbSplit")}"
              name="FatCarbSplit"
              min="0"
              max="100"
              type="number"
              label="Fat / Carb Split"
              required
            >
              <span slot="suffix">% Fat</span>
            </sl-input>

            <br />
            <sl-range
              size="small"
              tooltip="none"
              id="fatCarbSplitRange"
              @sl-input="${e=>this.GoalsChanged(e,"FatCarbSplit")}"
              .value="${this._goals.FatCarbSplit}"
              name="FatCarbSplit"
              min="0"
              max="100"
            ></sl-range>
            <br />
          </form>
        `:$``}};Sp([M()],Vl.prototype,"_goals",2);Vl=Sp([Ct("diet-profile-form")],Vl);var B0=Object.defineProperty,U0=Object.getOwnPropertyDescriptor,Ip=(e,t,r,o)=>{for(var i=o>1?void 0:o?U0(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&B0(t,r,i),i};let oa=class extends yt{constructor(){super()}async firstUpdated(){this._profile=await Bc(),await new Promise(e=>setTimeout(e,0)),this.addEventListener("profile-changed",async e=>{await fp(e.detail)})}NotifyChange(){this.dispatchEvent(new CustomEvent("profile-changed",{bubbles:!0,composed:!0,detail:this._profile}))}ProfileChanged(e,t){this._profile={...this._profile,[t]:e.target.value},this.NotifyChange()}render(){return this._profile?$`
          <form class="input-validation-required">
            <div style="display: flex; gap: 1rem;">
              <sl-select
                size="small"
                id="genderSelect"
                .value="${this._profile.Gender}"
                @sl-change="${e=>this.ProfileChanged(e,"Gender")}"
                label="Gender"
                required
              >
                <sl-option value="Male">Male</sl-option>
                <sl-option value="Female">Female</sl-option>
              </sl-select>
              <sl-input
                size="small"
                id="ageInput"
                .value="${this._profile.Age.toString()}"
                @sl-input="${e=>this.ProfileChanged(e,"Age")}"
                name="Age"
                label="Age"
                type="number"
                required
              ></sl-input>
            </div>
            <br />
            <div style="display: flex; gap: 1rem;">
              <sl-input
                size="small"
                id="heightInput"
                .value="${this._profile.Height.toString()}"
                @sl-input="${e=>this.ProfileChanged(e,"Height")}"
                name="Height"
                label="Height"
                required
              ></sl-input>
              <sl-input
                size="small"
                id="weightInput"
                .value="${this._profile.Weight.toString()}"
                @sl-input="${e=>this.ProfileChanged(e,"Weight")}"
                name="Weight"
                label="Weight"
                type="number"
                required
              ></sl-input>
            </div>
          </form>
        `:$``}};oa.styles=F`
    sl-input {
      min-width: 0;
      flex: 1 1 auto;
    }
  `;Ip([M()],oa.prototype,"_profile",2);oa=Ip([Ct("personal-profile-form")],oa);var V0=F`
  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`,Ar=class extends Z{constructor(){super(...arguments),this.localize=new Tt(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(e=>{for(const t of e)t.type==="attributes"&&t.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){super.disconnectedCallback(),this.detailsObserver.disconnect()}handleSummaryClick(e){e.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key==="ArrowUp"||e.key==="ArrowLeft")&&(e.preventDefault(),this.hide()),(e.key==="ArrowDown"||e.key==="ArrowRight")&&(e.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await ue(this.body);const{keyframes:t,options:r}=Wt(this,"details.show",{dir:this.localize.dir()});await oe(this.body,ra(t,this.body.scrollHeight),r),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await ue(this.body);const{keyframes:t,options:r}=Wt(this,"details.hide",{dir:this.localize.dir()});await oe(this.body,ra(t,this.body.scrollHeight),r),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,Ke(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,Ke(this,"sl-after-hide")}render(){const e=this.localize.dir()==="rtl";return $`
      <details
        part="base"
        class=${tt({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":e})}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};Ar.styles=[J,V0];Ar.dependencies={"sl-icon":Rt};m([B(".details")],Ar.prototype,"details",2);m([B(".details__header")],Ar.prototype,"header",2);m([B(".details__body")],Ar.prototype,"body",2);m([B(".details__expand-icon-slot")],Ar.prototype,"expandIconSlot",2);m([v({type:Boolean,reflect:!0})],Ar.prototype,"open",2);m([v()],Ar.prototype,"summary",2);m([v({type:Boolean,reflect:!0})],Ar.prototype,"disabled",2);m([R("open",{waitUntilFirstUpdate:!0})],Ar.prototype,"handleOpenChange",1);It("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});It("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});Ar.define("sl-details");var j0=Object.defineProperty,Y0=Object.getOwnPropertyDescriptor,H0=(e,t,r,o)=>{for(var i=o>1?void 0:o?Y0(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&j0(t,r,i),i};let vh=class extends yt{static get styles(){return[F`
        .container {
          display: flex;
          flex-direction: column;
          gap: var(--sl-spacing-small);
          padding: var(--sl-spacing-small);
        }
      `]}render(){return $`
      <div class="container">
        <personal-profile-form></personal-profile-form>
        <diet-profile-form></diet-profile-form>
      </div>
    `}};vh=H0([Ct("diet-profile")],vh);var q0=Object.defineProperty,W0=Object.getOwnPropertyDescriptor,G0=(e,t,r,o)=>{for(var i=o>1?void 0:o?W0(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&q0(t,r,i),i};let jl=class extends yt{render(){return $`
      <diet-profile></diet-profile>
      <div class="disclaimer">
        <p>
          Using the standard diet and protein settings from
          <a
            target="_blank"
            href="https://www.musclehacking.com/calorie-calculator/"
          >
            Muscle Hacking Calorie Calculator
          </a>
        </p>
        <p>Not Health Advice. For entertainment purposes only.</p>
        <p>Consult with proper medical and health professionals.</p>
      </div>
      <p></p>
      <p></p>
    `}};jl.styles=[F`
      :host {
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        justify-content: space-between;
      }
      .disclaimer{
        max-width: 20rem;
        margin: 0 auto;
      }
      diet-profile {
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        width: 100%;
        height: 0;
        flex: 1 0 auto;
      }
      p {
        font-size: var(--sl-font-size-small);
        text-align: center;
      }
    `];jl=G0([Ct("diet-profile-page")],jl);var Z0=F`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,gi=class extends Z{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(e){const t=ys(e.target);t?.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(e){const t=ys(e.target);t?.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(e){const t=ys(e.target);t?.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(e){const t=ys(e.target);t?.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{const r=e.indexOf(t),o=ys(t);o&&(o.toggleAttribute("data-sl-button-group__button",!0),o.toggleAttribute("data-sl-button-group__button--first",r===0),o.toggleAttribute("data-sl-button-group__button--inner",r>0&&r<e.length-1),o.toggleAttribute("data-sl-button-group__button--last",r===e.length-1),o.toggleAttribute("data-sl-button-group__button--radio",o.tagName.toLowerCase()==="sl-radio-button"))})}render(){return $`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};gi.styles=[J,Z0];m([B("slot")],gi.prototype,"defaultSlot",2);m([M()],gi.prototype,"disableRole",2);m([v()],gi.prototype,"label",2);function ys(e){var t;const r="sl-button, sl-radio-button";return(t=e.closest(r))!=null?t:e.querySelector(r)}gi.define("sl-button-group");var K0=Object.defineProperty,X0=Object.getOwnPropertyDescriptor,Fa=(e,t,r,o)=>{for(var i=o>1?void 0:o?X0(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&K0(t,r,i),i};let Us=class extends yt{constructor(){super(...arguments),this.showAddBtnInternal=!1,this.lastKnownPos=0}static get styles(){return[F`
        sl-button {
          position: absolute;
          right: 3rem;
          z-index: 20;
          bottom: 2rem;
        }
      `]}OnScroll(e){this.showAddBtn&&(e>this.lastKnownPos?this.showAddBtnInternal=!1:this.showAddBtnInternal=this.showAddBtn,this.lastKnownPos=e)}willUpdate(e){e.has("showAddBtn")&&(this.showAddBtnInternal=this.showAddBtn)}render(){return $`
      ${this.showAddBtnInternal?$`<sl-button
            size="large"
            circle
            @click="${()=>this.dispatchEvent(Zt("on-show-food-drawer",{addFood:!0}))}"
          >
            <sl-icon name="plus" label="Add Entry"></sl-icon>
          </sl-button>`:bt}
    `}};Fa([v({type:Boolean})],Us.prototype,"showAddBtn",2);Fa([M()],Us.prototype,"showAddBtnInternal",2);Fa([M()],Us.prototype,"lastKnownPos",2);Us=Fa([Ct("diet-page-footer")],Us);var Q0=F`
  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,wh=new WeakMap;function Op(e){let t=wh.get(e);return t||(t=window.getComputedStyle(e,null),wh.set(e,t)),t}function J0(e){if(typeof e.checkVisibility=="function")return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const t=Op(e);return t.visibility!=="hidden"&&t.display!=="none"}function tb(e){const t=Op(e),{overflowY:r,overflowX:o}=t;return r==="scroll"||o==="scroll"?!0:r!=="auto"||o!=="auto"?!1:e.scrollHeight>e.clientHeight&&r==="auto"||e.scrollWidth>e.clientWidth&&o==="auto"}function eb(e){const t=e.tagName.toLowerCase(),r=Number(e.getAttribute("tabindex"));return e.hasAttribute("tabindex")&&(isNaN(r)||r<=-1)||e.hasAttribute("disabled")||e.closest("[inert]")||t==="input"&&e.getAttribute("type")==="radio"&&!e.hasAttribute("checked")||!J0(e)?!1:(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(t)?!0:tb(e)}function rb(e){var t,r;const o=Yl(e),i=(t=o[0])!=null?t:null,s=(r=o[o.length-1])!=null?r:null;return{start:i,end:s}}function ob(e,t){var r;return((r=e.getRootNode({composed:!0}))==null?void 0:r.host)!==t}function Yl(e){const t=new WeakMap,r=[];function o(i){if(i instanceof Element){if(i.hasAttribute("inert")||i.closest("[inert]")||t.has(i))return;t.set(i,!0),!r.includes(i)&&eb(i)&&r.push(i),i instanceof HTMLSlotElement&&ob(i,e)&&i.assignedElements({flatten:!0}).forEach(s=>{o(s)}),i.shadowRoot!==null&&i.shadowRoot.mode==="open"&&o(i.shadowRoot)}for(const s of i.children)o(s)}return o(e),r.sort((i,s)=>{const n=Number(i.getAttribute("tabindex"))||0;return(Number(s.getAttribute("tabindex"))||0)-n})}function*Wc(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*Mm(Wc(e.shadowRoot.activeElement))))}function ib(){return[...Wc()].pop()}var vs=[],Ap=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=t=>{var r;if(t.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const o=ib();if(this.previousFocus=o,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const i=Yl(this.element);let s=i.findIndex(a=>a===o);this.previousFocus=this.currentFocus;const n=this.tabDirection==="forward"?1:-1;for(;;){s+n>=i.length?s=0:s+n<0?s=i.length-1:s+=n,this.previousFocus=this.currentFocus;const a=i[s];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||a&&this.possiblyHasTabbableChildren(a))return;t.preventDefault(),this.currentFocus=a,(r=this.currentFocus)==null||r.focus({preventScroll:!1});const l=[...Wc()];if(l.includes(this.currentFocus)||!l.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e,this.elementsWithTabbableControls=["iframe"]}activate(){vs.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){vs=vs.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return vs[vs.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const e=Yl(this.element);if(!this.element.matches(":focus-within")){const t=e[0],r=e[e.length-1],o=this.tabDirection==="forward"?t:r;typeof o?.focus=="function"&&(this.currentFocus=o,o.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(e){return this.elementsWithTabbableControls.includes(e.tagName.toLowerCase())||e.hasAttribute("controls")}};function _h(e){return e.charAt(0).toUpperCase()+e.slice(1)}var mr=class extends Z{constructor(){super(...arguments),this.hasSlotController=new Xe(this,"footer"),this.localize=new Tt(this),this.modal=new Ap(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=e=>{this.contained||e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),Ds(this)))}disconnectedCallback(){var e;super.disconnectedCallback(),Ss(this),(e=this.closeWatcher)==null||e.destroy()}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const r=Wt(this,"drawer.denyClose",{dir:this.localize.dir()});oe(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;document.removeEventListener("keydown",this.handleDocumentKeyDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),Ds(this));const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([ue(this.drawer),ue(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=Wt(this,`drawer.show${_h(this.placement)}`,{dir:this.localize.dir()}),r=Wt(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([oe(this.panel,t.keyframes,t.options),oe(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),Ss(this)),await Promise.all([ue(this.drawer),ue(this.overlay)]);const e=Wt(this,`drawer.hide${_h(this.placement)}`,{dir:this.localize.dir()}),t=Wt(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([oe(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),oe(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const r=this.originalTrigger;typeof r?.focus=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),Ds(this)),this.open&&this.contained&&(this.modal.deactivate(),Ss(this))}async show(){if(!this.open)return this.open=!0,Ke(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Ke(this,"sl-after-hide")}render(){return $`
      <div
        part="base"
        class=${tt({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${G(this.noHeader?this.label:void 0)}
          aria-labelledby=${G(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":$`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};mr.styles=[J,Q0];mr.dependencies={"sl-icon-button":ye};m([B(".drawer")],mr.prototype,"drawer",2);m([B(".drawer__panel")],mr.prototype,"panel",2);m([B(".drawer__overlay")],mr.prototype,"overlay",2);m([v({type:Boolean,reflect:!0})],mr.prototype,"open",2);m([v({reflect:!0})],mr.prototype,"label",2);m([v({reflect:!0})],mr.prototype,"placement",2);m([v({type:Boolean,reflect:!0})],mr.prototype,"contained",2);m([v({attribute:"no-header",type:Boolean,reflect:!0})],mr.prototype,"noHeader",2);m([R("open",{waitUntilFirstUpdate:!0})],mr.prototype,"handleOpenChange",1);m([R("contained",{waitUntilFirstUpdate:!0})],mr.prototype,"handleNoModalChange",1);It("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});It("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});It("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});It("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});It("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});It("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});It("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});It("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});It("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});It("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});It("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});mr.define("sl-drawer");async function sb(){const[e,t]=await Promise.all([Nc(),Bc()]);return zp(t,e)}function zp(e,t){function r(){return Math.round(10*e.Weight+6.25*e.Height-5*e.Age+rg.get(e.Gender))}function o(){return Math.round(r()*tg.get(t.ActivityLevel))}function i(){return Math.round(o()*(1+eg.get(t.WeightGoal)/100))}function s(){return Math.round(2.20462*e.Weight*1)}function n(){return Math.round((i()-4*s())*t.FatCarbSplit/900)}function a(){return Math.round((i()-4*s())*(100-t.FatCarbSplit)/400)}return{Calories:i(),Protein:s(),Carbs:a(),Fat:n()}}var nb=F`
  :host {
    --height: 1rem;
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);
    --label-color: var(--sl-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition:
      400ms width,
      400ms background-color;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--sl-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mp="important",ab=" !"+Mp,rr=os(class extends is{constructor(e){if(super(e),e.type!==Er.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,r)=>{const o=e[r];return o==null?t:t+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(e,[t]){const{style:r}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const o of this.ft)t[o]==null&&(this.ft.delete(o),o.includes("-")?r.removeProperty(o):r[o]=null);for(const o in t){const i=t[o];if(i!=null){this.ft.add(o);const s=typeof i=="string"&&i.endsWith(ab);o.includes("-")||s?r.setProperty(o,s?i.slice(0,-11):i,s?Mp:""):r[o]=i}}return or}});var pn=class extends Z{constructor(){super(...arguments),this.localize=new Tt(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return $`
      <div
        part="base"
        class=${tt({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${G(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${rr({width:`${this.value}%`})}>
          ${this.indeterminate?"":$` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};pn.styles=[J,nb];m([v({type:Number,reflect:!0})],pn.prototype,"value",2);m([v({type:Boolean,reflect:!0})],pn.prototype,"indeterminate",2);m([v()],pn.prototype,"label",2);pn.define("sl-progress-bar");var lb=Object.defineProperty,cb=Object.getOwnPropertyDescriptor,Pp=(e,t,r,o)=>{for(var i=o>1?void 0:o?cb(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&lb(t,r,i),i};let Hl=class extends yt{static get styles(){return[F`
        .header {
          display: flex;
          align-items: center;
          gap: var(--sl-spacing-2x-small);
          font-size: var(--sl-font-size-x-small);
        }

        .macro-tracker {
          display: flex;
          flex-direction: column;
          justify-content: start;
          gap: var(--sl-spacing-2x-small);
        }
      `]}get percent(){return this.macro.Today/this.macro.Goal*100}get symbol(){return this.macro.Macro==="Calories"?"🔥":this.macro.Macro==="Fat"?"F":this.macro.Macro==="Carbs"?"C":this.macro.Macro==="Protein"?"P":""}get color(){return this.macro.Macro==="Calories"?"goldenrod":this.macro.Macro==="Fat"?"yellow":this.macro.Macro==="Carbs"?"blueviolet":this.macro.Macro==="Protein"?"darkolivegreen":""}render(){const e=$`
      <div class="header">
        <span style="font-size: var(--sl-font-size-small)">${this.symbol}</span>
        <div class="header">
          <span>${Math.round(this.macro.Today)}</span>
          <span>/</span>
          <span>${Math.round(this.macro.Goal)}</span>
        </div>
      </div>
    `,t=$`<sl-progress-bar
      style="--height: var(--sl-spacing-2x-small); --indicator-color: ${this.color}"
      .value="${this.percent}"
      class="progress-bar-values"
    ></sl-progress-bar> `;return $`<div class="macro-tracker">${e} ${t}</div> `}};Pp([v({attribute:!1})],Hl.prototype,"macro",2);Hl=Pp([Ct("macro-tracker")],Hl);var db=Object.defineProperty,hb=Object.getOwnPropertyDescriptor,fn=(e,t,r,o)=>{for(var i=o>1?void 0:o?hb(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&db(t,r,i),i};let qi=class extends yt{constructor(){super(),this.entries=[],this._rendered=!1,this._macrosData=[{Macro:"Calories",Today:2767,Diem:2790,Goal:2800},{Macro:"Protein",Today:180,Diem:170,Goal:165},{Macro:"Carbs",Today:300,Diem:280,Goal:250},{Macro:"Fat",Today:80,Diem:65,Goal:70}],this._SetupGoalListeners(),this._SetupDiemListeners(),this._SetupTodayListeners()}static get styles(){return[F`
        :host {
          display: flex;
          justify-content: space-around;
          align-items: baseline;
          gap: var(--sl-spacing-x-small);
        }
        macro-tracker {
          flex: 1 0 20%;
          height: 2rem;
        }
      `]}async firstUpdated(){const[e,t]=await Promise.all([Nc(),Bc()]);this._diet=e,this._profile=t,this._UpdateGoal(),this._rendered=!0}willUpdate(e){this._rendered&&e.has("entries")&&this._UpdateGoal()}_SetupTodayListeners(){}_SetupDiemListeners(){}_SetupGoalListeners(){window.addEventListener("profile-changed",e=>{this._profile=e.detail,this._UpdateGoal()}),window.addEventListener("diet-profile-changed",e=>{this._diet=e.detail,this._UpdateGoal()})}_UpdateGoal(){const e=zp(this._profile,this._diet);this._macrosData=this._macrosData.map(t=>({...t,Goal:e[t.Macro],Today:this.calculateMacrosFoods(this.entries,t.Macro)}))}calculateMacrosFoods(e,t){return e?e.reduce((r,o)=>ss(o.Food)?r+o.Food.Ingredients.reduce((i,s)=>s.Macros[t]*s.Quantity+i,0)*o.Quantity:r+o.Food.Macros[t]*o.Quantity,0):0}render(){return $`
      <macro-tracker .macro="${this._macrosData[0]}"></macro-tracker>
      <macro-tracker .macro="${this._macrosData[1]}"></macro-tracker>
      <macro-tracker .macro="${this._macrosData[2]}"></macro-tracker>
      <macro-tracker .macro="${this._macrosData[3]}"></macro-tracker>
    `}};fn([v({attribute:!1})],qi.prototype,"entries",2);fn([M()],qi.prototype,"_profile",2);fn([M()],qi.prototype,"_diet",2);fn([M()],qi.prototype,"_macrosData",2);qi=fn([Ct("diet-totals")],qi);const Fp=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],ub=["January","February","March","April","May","June","July","August","September","October","November","December"];var pb=Object.defineProperty,fb=Object.getOwnPropertyDescriptor,Lp=(e,t,r,o)=>{for(var i=o>1?void 0:o?fb(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&pb(t,r,i),i};let ql=class extends yt{static get styles(){return[F`
        :host{
          border-radius: var(--sl-border-radius-large);
          border: 3px solid var(--sl-color-neutral-200);
          height: 3rem;
          padding: var(--sl-spacing-2x-small) 0 0 0;
        }
        .date {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--sl-spacing-2x-small);
        }

        .date span {
          font-size: var(--sl-font-size-x-small);
        }
      `]}get weekDay(){return Fp[this.date.dayOfWeek-1].slice(0,1)}get day(){return this.date.day<10?`0${this.date.day}`:this.date.day.toString()}render(){return $`
      <div class="date">
        <span>${this.weekDay}</span>
        <span>${this.day}</span>
      </div>
    `}};Lp([v({attribute:!1})],ql.prototype,"date",2);ql=Lp([Ct("date-header-item")],ql);var mb=Object.defineProperty,gb=Object.getOwnPropertyDescriptor,Gc=(e,t,r,o)=>{for(var i=o>1?void 0:o?gb(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&mb(t,r,i),i};let ia=class extends yt{constructor(){super(...arguments),this.daysToShow=[],this.selectDay=e=>t=>{this.dispatchEvent(Zt("day-selected",e))},this.moveWeek=e=>t=>{const r=this.currentDate.add({days:7*e});this.selectDay(r)(t)},this.renderDay=e=>{const t=he.Now.plainDateTimeISO();return $` <date-header-item
      @click="${this.selectDay(e)}"
      class="${e.equals(t)?"today":""} ${e.equals(this.currentDate)?"selected":""}"
      .date="${e}"
    ></date-header-item>`}}static get styles(){return[F`
        :host {
          display: flex;
          flex-direction: column;
          gap: var(--sl-spacing-x-small);
        }

        .days {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: var(--sl-spacing-x-small);
        }

        .week-controls {
          display: flex;
          align-items: center;
          justify-content: space-around;
          font-size: var(--sl-font-size-small);
        }

        date-header-item {
          flex: 1 0 auto;
        }
        date-header-item.today {
          background-color: var(--sl-color-indigo-50);
          color: var(--sl-color-neutral-1000);
        }
        date-header-item.selected {
          background-color: var(--sl-color-indigo-600);
          color: var(--sl-color-indigo-50);
        }
        date-header-item.selected.today {
          background-color: var(--sl-color-indigo-300);
          color: var(--sl-color-neutral-1000);
        }

        .change-week {
          width: 1rem;
          height: 100%;
        }
        .change-week::part(label) {
          padding: 0;
        }
      `]}getFirstDayOfWeek(e,t){const r=he.PlainDate.from({year:e,month:1,day:1}).add({weeks:t-1}),o=r.dayOfWeek;let i=r;return o<=5?i=r.subtract({days:r.dayOfWeek-1}):i=r.add({days:8-r.dayOfWeek}),i}getWeek(){this.daysToShow=[];const e=this.getFirstDayOfWeek(this.currentDate.year,this.currentDate.weekOfYear);for(var t=0;t<7;t++)this.daysToShow.push(e.add({days:t}))}async firstUpdated(){this.getWeek()}get monthLabel(){return ub[this.daysToShow[2].month-1]}willUpdate(e){e.has("currentDate")&&this.getWeek()}render(){return $`
      <div class="days">${this.daysToShow.map(this.renderDay)}</div>

      <div class="week-controls">
        <span></span>
        <sl-button
          @click="${this.moveWeek(-1)}"
          class="change-week"
          variant="text"
          outline
        >
          <sl-icon name="chevron-left"></sl-icon>
        </sl-button>
        <sl-button variant="text" @click="${this.selectDay(he.Now.plainDateISO())}">${this.monthLabel}</sl-button>
        <sl-button
          @click="${this.moveWeek(1)}"
          class="change-week"
          variant="text"
          outline
        >
          <sl-icon name="chevron-right"></sl-icon>
        </sl-button>
        <span></span>
      </div>
    `}};Gc([v({attribute:!1})],ia.prototype,"currentDate",2);Gc([M()],ia.prototype,"daysToShow",2);ia=Gc([Ct("date-header")],ia);var bb=Object.defineProperty,yb=Object.getOwnPropertyDescriptor,Rp=(e,t,r,o)=>{for(var i=o>1?void 0:o?yb(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&bb(t,r,i),i};let Wl=class extends yt{constructor(){super(...arguments),this.navigate=e=>t=>{this.dispatchEvent(Zt("navigate",e)),this.drawer.hide()}}static get styles(){return[F`
        sl-drawer::part(base) {
          z-index: var(--sl-z-index-dialog);
        }
        header {
          justify-content: space-between;
        }
        .label {
          gap: 1rem;
        }
        .burger::part(label){
            font-size: var(--sl-font-size-large);
        }
        header img, header sl-button{
            width: 2rem;
        }
        header,
        .label {
          display: flex;
          align-items: center;
        }
        .menu-list {
          display: flex;
          flex-direction: column;
          gap: var(--sl-spacing-small);
        }
        .item sl-icon {
          font-size: var(--sl-font-size-large);
        }
        .item {
          display: flex;
          align-items: center;
          padding-left: var(--sl-spacing-medium);
          gap: var(--sl-spacing-medium);
          height: 5rem;
          font-size: var(--sl-font-size-large);
          transition: 0.5s;
        }
        .item:active {
          background: var(--sl-color-neutral-800);
          color: var(--sl-color-neutral-0);
        }
      `]}MenuItem(e,t,r){return $`
      <div
        class="item"
        @click="${this.navigate(e)}"
        class="footer-menu-item"
      >
        <sl-icon .name="${t}"></sl-icon>
        <span>${e}</span>
      </div>
    `}render(){return $`
      <header>
        <sl-button class="burger" variant="text" size="small" @click="${()=>this.drawer.show()}">
          <sl-icon name="list"></sl-icon>
        </sl-button>
        <span>BULKY</span>
        <div class="name">
          <img src="/assets/icons/48x48.png" />
        </div>
      </header>
      <sl-drawer placement="start" style="--size: 70%; ">
        <div slot="label" class="label">
          <img style="width:3rem" src="/assets/icons/48x48.png" />
          <p style="font-size:var(--sl-font-size-medium)">
            BULKY
            <br />
            <span style="font-size:var(--sl-font-size-x-small)"
              >GET BIG!!! or small</span
            >
          </p>
        </div>
        <div class="menu-list">
          ${this.MenuItem("Timeline","calendar3","/index.html")}
          ${this.MenuItem("Profile","person-circle","/index.html")}
        </div>
      </sl-drawer>
    `}};Rp([B("sl-drawer")],Wl.prototype,"drawer",2);Wl=Rp([Ct("bulk-header")],Wl);var vb=Object.defineProperty,wb=Object.getOwnPropertyDescriptor,La=(e,t,r,o)=>{for(var i=o>1?void 0:o?wb(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&vb(t,r,i),i};let Vs=class extends yt{constructor(){super(...arguments),this.showCalendar=!0}static get styles(){return[F`
        :host {
          display: flex;
          flex-direction: column;
          padding: var(--sl-spacing-medium);
          box-shadow: var(--sl-shadow-x-large);
          gap: var(--sl-spacing-x-small);
          background: var(--sl-color-neutral-50);
          padding-bottom: 0;
        }

        diet-totals {
          flex: 1 0 2.5rem;
        }
        date-header {
          flex: 1 0 auto;
        }
      `]}render(){return $`
      <bulk-header></bulk-header>
      <diet-totals .entries="${this.dailyEntries}"></diet-totals>
      ${this.showCalendar?$`<date-header .currentDate="${this.currentDate}"></date-header>`:bt}
    `}};La([Qr({context:cn,subscribe:!0}),M()],Vs.prototype,"currentDate",2);La([Qr({context:Oa,subscribe:!0}),M()],Vs.prototype,"dailyEntries",2);La([v({type:Boolean})],Vs.prototype,"showCalendar",2);Vs=La([Ct("diet-page-header")],Vs);ye.define("sl-icon-button");var _b=Object.defineProperty,xb=Object.getOwnPropertyDescriptor,ls=(e,t,r,o)=>{for(var i=o>1?void 0:o?xb(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&_b(t,r,i),i};let hi=class extends yt{constructor(){super(...arguments),this.showClose=!0,this.showBack=!0,this.isEditing=!0,this.showEditButton=!0,this.getTextDisplayText=e=>e.replace("_"," "),this.getOptions=e=>e.map(t=>$`<sl-option value="${t}">${this.getTextDisplayText(t)}</sl-option>`),this._dispatch=(e,t)=>this.dispatchEvent(Zt(e,t)),this.NameChanged=e=>this._dispatch("food-name-changed",e.target.value),this.PortionChanged=e=>this._dispatch("portion-changed",e.target.value),this.BackClicked=()=>this._dispatch("on-back-food-drawer"),this.CloseClicked=()=>this._dispatch("on-close-food-drawer")}static get styles(){return[F`
        :host {
          display: flex;
          justify-content: space-between;
          align-items: start;
        }
        h2,
        #portionSelect,
        .blank {
          margin: var(--sl-spacing-x-small) 0;
        }
        .blank {
          height: var(--sl-input-height-medium);
        }
        .food-name {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .food-header {
          display: flex;
          flex-direction: column;
        }
        .back-arrow {
          font-size: var(--sl-font-size-x-large);
        }
        .back-arrow::part(base) {
          padding: var(--sl-spacing-x-small);
        }
      `]}render(){const e=this.isEditing?$`<sl-input
          id="foodName"
          name="food-name"
          placeholder="Name"
          required
          .value="${this.food?.Name??""}"
          @sl-change="${this.NameChanged}"
        ></sl-input>`:$`<h2>${this.food?.Name}</h2>`,t=this.food&&ss(this.food)?$`<div class="blank"></div>`:this.isEditing?$`
            <sl-select
              id="portionSelect"
              .value="${this.food?.Portion?.toString()??""}"
              placeholder="Portion"
              @sl-change="${this.PortionChanged}"
              required
            >
              ${this.getOptions(sg)}
            </sl-select>
          `:$`
            <div class="food-name">
              <div style="width: 2.5rem;height:2.5rem;"></div>
              <span font-size: var(--sl-font-size-small)
                >${this.food?.Portion}</span
              >
            </div>
          `,r=this.showClose?$`
          <sl-icon-button name="x-lg" label="Close" @click=${this.CloseClicked}>
          </sl-icon-button>
        `:$`<span></span>`,o=this.showBack?$`
          <sl-icon-button
            class="back-arrow"
            name="arrow-left"
            label="Back"
            @click=${this.BackClicked}
          >
          </sl-icon-button>
        `:$`<span></span>`;return $`
      <div class="food-header">
        <div class="food-name">${o} ${e}</div>
        ${t}
      </div>
      ${r}
    `}};ls([v({attribute:!1})],hi.prototype,"food",2);ls([v({type:Boolean})],hi.prototype,"showClose",2);ls([v({type:Boolean})],hi.prototype,"showBack",2);ls([v({type:Boolean})],hi.prototype,"isEditing",2);ls([v({type:Boolean})],hi.prototype,"showEditButton",2);hi=ls([Ct("food-title-form")],hi);var Cb=F`
  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--sl-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`,cs=class extends Z{constructor(){super(...arguments),this.localize=new Tt(this),this.value=0,this.label=""}updated(e){if(super.updated(e),e.has("value")){const t=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),r=2*Math.PI*t,o=r-this.value/100*r;this.indicatorOffset=`${o}px`}}render(){return $`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `}};cs.styles=[J,Cb];m([B(".progress-ring__indicator")],cs.prototype,"indicator",2);m([M()],cs.prototype,"indicatorOffset",2);m([v({type:Number,reflect:!0})],cs.prototype,"value",2);m([v()],cs.prototype,"label",2);cs.define("sl-progress-ring");var Tb=Object.defineProperty,kb=Object.getOwnPropertyDescriptor,Np=(e,t,r,o)=>{for(var i=o>1?void 0:o?kb(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&Tb(t,r,i),i};let Gl=class extends yt{static get styles(){return[F`
        p,h3,h1{padding:0;margin:0;}

        p{
          font-size: var(--sl-font-size-small);
          font-weight: lighter;
          color: var(--sl-color-neutral-600);
        }

        h1{
          font-size: var(--sl-font-size-2x-large);
          font-weight: bold;
        }

        h3{
          font-size: var(--sl-font-size-large);
          font-weight: bold;
        }
        .protein{color: var(--sl-color-lime-500)}
        .carbs{color: var(--sl-color-purple-500)}
        .fat{color: var(--sl-color-yellow-500)}

        :host {
          height: 100%;
          width: 100%;
          display: grid;
          gap: var(--sl-spacing-small);
          place-items: stretch;
          place-content: stretch;
          grid-template:
            'cell cell cell cell cell'
            / 4fr .5fr 3fr 3fr 3fr;
        }
        .macro {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          gap: var(--sl-spacing-x-small);
        }
      `]}macroPercent(e){const t=this.entry.Food.Macros,r=t.Carbs+t.Fat+t.Protein;return Math.round(t[e]/r*100)}render(){return $`
      <div class="macro calories">
        <h1>${this.entry.Food.Macros.Calories}</h1>
        <p>Calories</p>
      </div>
      <span></span>
      <div class="macro">
        <p class="protein">${this.macroPercent("Protein")}%</p>
        <h3>${this.entry.Food.Macros.Protein}</h3>
        <p>Protein</p>
      </div>
      <div class="macro">
        <p class="carbs">${this.macroPercent("Carbs")}%</p>
        <h3>${this.entry.Food.Macros.Carbs}</h3>
        <p>Carbs</p>
      </div>
      <div class="macro">
        <p class="fat">${this.macroPercent("Fat")}%</p>
        <h3>${this.entry.Food.Macros.Fat}</h3>
        <p>Fat</p>
      </div>
    `}};Np([v({attribute:!1})],Gl.prototype,"entry",2);Gl=Np([Ct("food-macros-overview")],Gl);var $b=Object.defineProperty,Eb=Object.getOwnPropertyDescriptor,Zc=(e,t,r,o)=>{for(var i=o>1?void 0:o?Eb(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&$b(t,r,i),i};let sa=class extends yt{constructor(){super(...arguments),this.loaded=!1,this.DisplayWheel=e=>$`
    <div class="macro-wheel">
      <sl-progress-ring
        .value="${this.GetImpactOn(e,100)}"
        class="progress-ring-values ${e}"
        >${this.GetImpactOn(e)}%</sl-progress-ring
      >
      <span>${e}</span>
    </div>
  `}static get styles(){return[F`
        p {
          margin: 0;
        }
        :host {
          height: 100%;
          width: 100%;
          display: grid;
          gap: var(--sl-spacing-small);
          place-items: stretch;
          place-content: stretch;
          grid-template:
            'title title title title' 0.5fr
            'cell cell cell cell' 2fr
            / 2fr 2fr 2fr 2fr;
        }
        .macro-wheel {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--sl-spacing-small);
        }
        sl-progress-ring {
          --size: 4rem;
          --indicator-width: 6px;
        }

        span {
          font-size: var(--sl-font-size-small);
          font-weight: lighter;
          color: var(--sl-color-neutral-600);
        }
        .Calories {
          --indicator-color: var(--sl-color-amber-500);
        }
        .Protein {
          --indicator-color: var(--sl-color-lime-500);
        }
        .Carbs {
          --indicator-color: var(--sl-color-purple-500);
        }
        .Fat {
          --indicator-color: var(--sl-color-yellow-500);
        }
      `]}async firstUpdated(){this._goals=await sb(),this.loaded=!0}GetImpactOn(e,t=void 0){let r=0;return ss(this.entry.Food)?r=Math.round(this.entry.Food.Macros[e]/this._goals[e]*100*this.entry.Quantity):r=Math.round(this.entry.Food.Macros[e]/this._goals[e]*100*this.entry.Quantity),t&&r>t?t:r}get Content(){return $`
      <p style="grid-area: title">Impact on Targets</p>
      ${Sa.map(this.DisplayWheel)}
    `}render(){return this.loaded?this.Content:"loading"}};Zc([v({attribute:!1})],sa.prototype,"entry",2);Zc([M()],sa.prototype,"loaded",2);sa=Zc([Ct("macros-impact")],sa);var Db=Object.defineProperty,Sb=Object.getOwnPropertyDescriptor,Ra=(e,t,r,o)=>{for(var i=o>1?void 0:o?Sb(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&Db(t,r,i),i};let js=class extends yt{constructor(){super(...arguments),this.readonly=!1,this.date=he.Now.plainDateISO(),this.time=he.Now.plainTimeISO(),this.hours=Array.from({length:24},(e,t)=>he.PlainTime.from({hour:t})),this.moveDate=e=>t=>{this.dispatchEvent(Zt("day-selected",this.date.add({days:e})))}}static get styles(){return[F`
        :host,
        .date-control {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
        }
        .date {
          width: 6rem;
        }
        .change-date {
          width: 2rem;
        }
        .readonly {
          display: flex;
          gap: var(--sl-spacing-medium);
          align-items: center;
          font-size: var(--sl-font-size-small);
        }
      `]}get weekDay(){return Fp[this.date.dayOfWeek-1]}get shortWeekDay(){return this.weekDay.slice(0,1)}get day(){const e=he.Now.plainDateISO();return this.date.equals(e)?"Today":this.date.equals(e.add({days:-1}))?"Yesterday":`${this.weekDay} ${this.date.day}`}getHour(e){return he.PlainTime.from({hour:e.hour}).toString({smallestUnit:"minute"})}onTimeChanged(e){this.dispatchEvent(Zt("time-selected",{time:he.PlainTime.from(e.target.value)}))}changeDate(e){this.dispatchEvent(Zt("shorten-food-drawer"))}dateChangeForm(){return $`
      <div class="date-control">
        <sl-button
          @click="${this.moveDate(-1)}"
          class="change-date"
          type="button"
          variant="primary"
          outline
        >
          <sl-icon name="chevron-left"></sl-icon>
        </sl-button>
        <sl-button
          @click="${this.changeDate}"
          class="date"
          type="button"
          variant="primary"
          outline
        >
          ${this.day}
        </sl-button>
        <sl-button
          @click="${this.moveDate(1)}"
          class="change-date"
          type="button"
          variant="primary"
          outline
        >
          <sl-icon name="chevron-right"></sl-icon>
        </sl-button>
      </div>

      <sl-select
        @sl-change="${this.onTimeChanged}"
        .value="${this.getHour(this.time)}"
      >
        ${this.hours.map(e=>$`<sl-option .value="${this.getHour(e)}"
              >${this.getHour(e)}</sl-option
            >`)}
      </sl-select>
    `}render(){return this.readonly?$`
          <div class="readonly">
            <p>${this.day}</p>
            <p>@${this.getHour(this.time)}</p>
          </div>
        `:this.dateChangeForm()}};Ra([v()],js.prototype,"readonly",2);Ra([Qr({context:cn,subscribe:!0}),M()],js.prototype,"date",2);Ra([Qr({context:Aa,subscribe:!0}),M()],js.prototype,"time",2);js=Ra([Ct("date-time-picker")],js);async function Ib(e){return(await Et.db.getAllFromIndex(ci.dbName,"Date",e.toString())).map(t=>({...t,Date:he.PlainDate.from(t.Date),Time:he.PlainTime.from(t.Time)}))}async function Ob(e){e.forEach(Kc)}async function Kc(e){return await Et.db.put(ci.dbName,{...e,Date:e.Date.toString(),Time:e.Time.toString()})}async function Ab(e){return await Et.db.delete(ci.dbName,e)}var zb=Object.defineProperty,Mb=Object.getOwnPropertyDescriptor,Xc=(e,t,r,o)=>{for(var i=o>1?void 0:o?Mb(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&zb(t,r,i),i};let na=class extends yt{constructor(){super(),this.EntryChanged=e=>t=>{t.stopPropagation(),this._entryForm={...this._entryForm,[e]:t.detail}}}static get styles(){return[F`
        form {
          height: 100%;
          gap: var(--sl-spacing-large);
          justify-content: space-between;
        }
        form,
        .form-body {
          display: flex;
          flex-direction: column;
        }
        .form-body {
          flex: 4 0 auto;
        }
        food-title-form {
          flex: 0 0 auto;
        }
        food-macros-overview,
        macros-impact {
          flex: 0 0 10%;
        }
      `]}willUpdate(e){e.has("entry")&&this.entry&&(this._entryForm=structuredClone(this.entry),this._entryForm.Date=this.entry.Date,this._entryForm.Time=this.entry.Time)}NotifySave(){this.dispatchEvent(Zt("food-entry-saved"))}async FoodQtyChanged(e){e.stopPropagation();const t=Number(e.detail);this._entryForm={...this._entryForm,Food:{...this._entryForm.Food},Quantity:t},t===0&&this._entryForm.Id>0?await Ab(this._entryForm.Id):await this.SaveFood(),this.NotifySave()}async SaveFood(){this._entryForm&&(this._entryForm.Committed=!0,this._entryForm.Id=await Kc(this._entryForm))}render(){const e=$` <food-title-form
      .food=${this._entryForm?.Food}
      .showEditButton="${!1}"
      .isEditing=${!1}
    ></food-title-form>`,t=$`
      <date-time-picker .readonly="${!0}"></date-time-picker>
      <quantity-form
        @quantity-changed=${this.FoodQtyChanged}
        .quantity=${this._entryForm?.Quantity??0}
      ></quantity-form>
    `;return $`
      <form class="input-validation-required" action="#">
        ${e}
        <food-macros-overview .entry=${this._entryForm}></food-macros-overview>
        <macros-impact .entry=${this._entryForm}></macros-impact>
        <div class="form-body">${t}</div>
      </form>
    `}};Xc([v({attribute:!1})],na.prototype,"entry",2);Xc([M()],na.prototype,"_entryForm",2);na=Xc([Ct("food-entry-form")],na);var Pb=Object.defineProperty,Fb=Object.getOwnPropertyDescriptor,Qc=(e,t,r,o)=>{for(var i=o>1?void 0:o?Fb(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&Pb(t,r,i),i};let aa=class extends yt{static get styles(){return[F``]}willUpdate(e){e.has("food")&&(this._foodForm=structuredClone(this.food))}render(){return $`
      ${this._foodForm?.Ingredients.map(e=>e.Name)}
    `}};Qc([v({attribute:!1})],aa.prototype,"food",2);Qc([M()],aa.prototype,"_foodForm",2);aa=Qc([Ct("dish-form")],aa);var Lb=Object.defineProperty,Rb=Object.getOwnPropertyDescriptor,Jc=(e,t,r,o)=>{for(var i=o>1?void 0:o?Rb(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&Lb(t,r,i),i};let la=class extends yt{constructor(){super(...arguments),this.MacrosChanged=e=>t=>{this._foodForm={...this._foodForm,Macros:{...this._foodForm?.Macros,[e]:Number(t.target.value??0)}},this.dispatchEvent(Zt("macro-changed",this._foodForm))},this.input=e=>$`
    <sl-input
      id="${e}Input"
      .value="${(this._foodForm?.Macros[e]??0).toString()}"
      @sl-change="${this.MacrosChanged(e)}"
      .name="${e}"
      .label="${e}"
      type="number"
      required
    >
      <span slot="suffix">${e=="Calories"?"kcal":"g"}</span>
    </sl-input>
  `}static get styles(){return[F`
        .macros {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: space-evenly;
        }

        sl-input {
          min-width: 0;
          flex: 0 1 45%;
        }
      `]}willUpdate(e){e.has("food")&&(this._foodForm=structuredClone(this.food))}render(){return $` <div class="macros">${Sa.map(this.input)}</div> `}};Jc([v({attribute:!1})],la.prototype,"food",2);Jc([M()],la.prototype,"_foodForm",2);la=Jc([Ct("food-item-form")],la);var Nb=F`
  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,Be=class extends Z{constructor(){super(...arguments),this.formControlController=new vo(this),this.hasSlotController=new Xe(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const e=this.required&&!this.value;return this.customValidityMessage!==""?Fm:e?Pm:Da}get validationMessage(){const e=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:e?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(e){const t=e.target.closest("sl-radio, sl-radio-button"),r=this.getAllRadios(),o=this.value;t.disabled||(this.value=t.value,r.forEach(i=>i.checked=i===t),this.value!==o&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(e){var t;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key))return;const r=this.getAllRadios().filter(a=>!a.disabled),o=(t=r.find(a=>a.checked))!=null?t:r[0],i=e.key===" "?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1,s=this.value;let n=r.indexOf(o)+i;n<0&&(n=r.length-1),n>r.length-1&&(n=0),this.getAllRadios().forEach(a=>{a.checked=!1,this.hasButtonGroup||(a.tabIndex=-1)}),this.value=r[n].value,r[n].checked=!0,this.hasButtonGroup?r[n].shadowRoot.querySelector("button").focus():(r[n].tabIndex=0,r[n].focus()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input")),e.preventDefault()}handleLabelClick(){const e=this.getAllRadios(),r=e.find(o=>o.checked)||e[0];r&&r.focus()}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}async syncRadioElements(){var e,t;const r=this.getAllRadios();if(await Promise.all(r.map(async o=>{await o.updateComplete,o.checked=o.value===this.value,o.size=this.size})),this.hasButtonGroup=r.some(o=>o.tagName.toLowerCase()==="sl-radio-button"),r.length>0&&!r.some(o=>o.checked))if(this.hasButtonGroup){const o=(e=r[0].shadowRoot)==null?void 0:e.querySelector("button");o&&(o.tabIndex=0)}else r[0].tabIndex=0;if(this.hasButtonGroup){const o=(t=this.shadowRoot)==null?void 0:t.querySelector("sl-button-group");o&&(o.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(t=>t.checked=t.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const e=this.required&&!this.value,t=this.customValidityMessage!=="";return e||t?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const e=this.validity.valid;return this.errorMessage=this.customValidityMessage||e?"":this.validationInput.validationMessage,this.formControlController.setValidity(e),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),e||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),e}setCustomValidity(e=""){this.customValidityMessage=e,this.errorMessage=e,this.validationInput.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,o=this.helpText?!0:!!t,i=$`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return $`
      <fieldset
        part="form-control"
        class=${tt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":r,"form-control--has-help-text":o})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${r?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?$`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${i}
                </sl-button-group>
              `:i}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};Be.styles=[J,mi,Nb];Be.dependencies={"sl-button-group":gi};m([B("slot:not([name])")],Be.prototype,"defaultSlot",2);m([B(".radio-group__validation-input")],Be.prototype,"validationInput",2);m([M()],Be.prototype,"hasButtonGroup",2);m([M()],Be.prototype,"errorMessage",2);m([M()],Be.prototype,"defaultValue",2);m([v()],Be.prototype,"label",2);m([v({attribute:"help-text"})],Be.prototype,"helpText",2);m([v()],Be.prototype,"name",2);m([v({reflect:!0})],Be.prototype,"value",2);m([v({reflect:!0})],Be.prototype,"size",2);m([v({reflect:!0})],Be.prototype,"form",2);m([v({type:Boolean,reflect:!0})],Be.prototype,"required",2);m([R("size",{waitUntilFirstUpdate:!0})],Be.prototype,"handleSizeChange",1);m([R("value")],Be.prototype,"handleValueChange",1);Be.define("sl-radio-group");var Bb=F`
  ${op}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`,zr=class extends Z{constructor(){super(...arguments),this.hasSlotController=new Xe(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(e){if(this.disabled){e.preventDefault(),e.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){return $s`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${tt({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${G(this.value)}
          tabindex="${this.checked?"0":"-1"}"
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};zr.styles=[J,Bb];m([B(".button")],zr.prototype,"input",2);m([B(".hidden-input")],zr.prototype,"hiddenInput",2);m([M()],zr.prototype,"hasFocus",2);m([v({type:Boolean,reflect:!0})],zr.prototype,"checked",2);m([v()],zr.prototype,"value",2);m([v({type:Boolean,reflect:!0})],zr.prototype,"disabled",2);m([v({reflect:!0})],zr.prototype,"size",2);m([v({type:Boolean,reflect:!0})],zr.prototype,"pill",2);m([R("disabled",{waitUntilFirstUpdate:!0})],zr.prototype,"handleDisabledChange",1);zr.define("sl-radio-button");var Ub=Object.defineProperty,Vb=Object.getOwnPropertyDescriptor,Bp=(e,t,r,o)=>{for(var i=o>1?void 0:o?Vb(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&Ub(t,r,i),i};let Zl=class extends yt{static get styles(){return[F`
        sl-radio-group::part(form-control) {
          display: flex;
          justify-content: center;
        }
      `]}TypeChanged(e){this.dispatchEvent(new CustomEvent("type-changed",{detail:e.target.value}))}render(){return $`
      <sl-radio-group
        size="large"
        name="a"
        @sl-change=${this.TypeChanged}
        .value="${this.type}"
      >
        <sl-radio-button value="food">
          <span slot="prefix">🥚</span>
          Food
          <span slot="suffix">🥩</span>
        </sl-radio-button>

        <sl-radio-button value="dish">
          <span slot="prefix">🌯</span>
          Dish
          <span slot="suffix">🍛</span>
        </sl-radio-button>
      </sl-radio-group>
    `}};Bp([v()],Zl.prototype,"type",2);Zl=Bp([Ct("food-type-form")],Zl);var jb=Object.defineProperty,Yb=Object.getOwnPropertyDescriptor,Up=(e,t,r,o)=>{for(var i=o>1?void 0:o?Yb(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&jb(t,r,i),i};let Kl=class extends yt{constructor(){super(...arguments),this.quantity=0}static get styles(){return[F`
      :host{
        display: flex;
        gap: .25rem;
        width: 100%;
        align-items: center;
        justify-content: space-between;
      }
      sl-button{
        max-width:3rem;
      }
      sl-input{
        min-width: 0;
        flex: 0 1 15%;
      }
      sl-input::part(input){
        padding: 0;
        text-align: center;
      }
    `]}notify(){this.dispatchEvent(Zt("quantity-changed",this.quantity.toFixed(1)))}QuantityChanged(e){let t=Number(e.target.value)??0;(isNaN(t)||t<0)&&(t=0),this.quantity=t,this.notify()}ChangeQuantity(e){this.quantity+=e,this.quantity<0&&(this.quantity=0),this.notify()}render(){return $`
      <sl-button circle .disabled=${this.quantity===0} @click=${()=>this.ChangeQuantity(-1)} variant="primary" size="large">- 1</sl-button>
      <sl-button circle .disabled=${this.quantity===0} @click=${()=>this.ChangeQuantity(-.5)} variant="primary" size="medium">- 0.5</sl-button>
      <sl-button circle .disabled=${this.quantity===0} @click=${()=>this.ChangeQuantity(-.1)} variant="primary" size="small">- 0.1</sl-button>
      <sl-input
        id="quantityInput"
        .value="${this.quantity.toString()}"
        @sl-change="${this.QuantityChanged}"
        name="Quantity"
        type="number"
        required
      ></sl-input>
      <sl-button circle @click=${()=>this.ChangeQuantity(.1)} variant="primary" size="small">+ 0.1</sl-button>
      <sl-button circle @click=${()=>this.ChangeQuantity(.5)} variant="primary" size="medium">+ 0.5</sl-button>
      <sl-button circle @click=${()=>this.ChangeQuantity(1)} variant="primary" size="large">+ 1</sl-button>
    `}};Up([v({type:Number})],Kl.prototype,"quantity",2);Kl=Up([Ct("quantity-form")],Kl);var Hb=Object.defineProperty,qb=Object.getOwnPropertyDescriptor,bi=(e,t,r,o)=>{for(var i=o>1?void 0:o?qb(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&Hb(t,r,i),i};let Po=class extends yt{constructor(){super(),this._isFormValid=!1,this.FoodItemChanged=e=>t=>{t.stopPropagation(),this._foodForm={...this._foodForm,[e]:t.detail},this.checkFormValid()},this.FoodChanged=e=>t=>{t.stopPropagation(),this._foodForm={...this._foodForm,[e]:t.detail},this.checkFormValid(),!this.fullForm&&this.SaveFood()},this.DishChanged=e=>t=>{e.stopPropagation(),this._foodForm={...this._foodForm,[t]:e.detail},this.checkFormValid()}}static get styles(){return[F`
        form {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .footer-actions {
          display: flex;
          gap: var(--sl-spacing-4x-large);
          flex-direction: column;
          padding-bottom: 5rem;
        }
        .form-body {
          display: flex;
          flex-direction: column;
          gap: var(--sl-spacing-medium);
        }
        #save {
          width: 100%;
        }
      `]}async firstUpdated(){this.checkFormValid()}checkFormValid(){(this._foodForm?.Name?.length??0)>0&&(this._isFormValid=!1),this._isFormValid=!0}willUpdate(e){e.has("food")&&(this._foodForm=structuredClone(this.food),this._type=this.food&&ss(this.food)?"dish":"food")}NotifyChange(){this.dispatchEvent(Zt("food-changed",this._foodForm))}TypeChanged(e){e.stopPropagation(),this._type=e.detail,this._type=="dish"?this._foodForm=Object.assign(new Lc,{Name:this._foodForm?.Name}):this._foodForm=Object.assign(new Io,{Name:this._foodForm?.Name})}AddItemToDish(e){this._foodForm.Ingredients.push(e)}MacroChanged(e){this._foodForm={...this._foodForm,...e.detail}}async SaveFood(){this._foodForm&&this.NotifyChange()}DeleteFood(){this.food&&this.food.Name&&this.dispatchEvent(Zt("delete-food",this.food))}render(){const e=$` <food-title-form
      @food-name-changed="${this.FoodChanged("Name")}"
      @portion-changed="${this.FoodItemChanged("Portion")}"
      .food=${this._foodForm}
      .showEditButton=${!this.creatingNew}
      .isEditing=${this.fullForm}
    ></food-title-form>`,t=this.creatingNew?$`<food-type-form
          @type-changed="${this.TypeChanged}"
          type=${this._type}
        ></food-type-form>`:bt,r=$`
      <!--${t}-->
      ${this._type=="dish"?$` <dish-form .food=${this._foodForm}></dish-form>`:$` <food-item-form
            @macro-changed="${this.MacroChanged}"
            .food=${this._foodForm}
          ></food-item-form>`}
    `,o=$` <div class="footer-actions">
      ${this.creatingNew?bt:$`<sl-button
            @click="${this.DeleteFood}"
            variant="danger"
            id="delete"
            size="large"
            >DELETE</sl-button
          >`}
      <sl-button
        @click="${this.SaveFood}"
        .disabled=${!this._isFormValid}
        id="save"
        size="large"
        >Save</sl-button
      >
    </div>`,i=this.fullForm?r:bt;return $`
      <form class="input-validation-required" action="#">
        <div class="form-body">${e} ${i}</div>
        ${this.fullForm?o:bt}
      </form>
    `}};bi([v({attribute:!1})],Po.prototype,"food",2);bi([v({type:Boolean})],Po.prototype,"fullForm",2);bi([v({type:Boolean})],Po.prototype,"creatingNew",2);bi([M()],Po.prototype,"_type",2);bi([M()],Po.prototype,"_foodForm",2);bi([M()],Po.prototype,"_isFormValid",2);Po=bi([Ct("food-form")],Po);var Wb=Object.defineProperty,Gb=Object.getOwnPropertyDescriptor,Vp=(e,t,r,o)=>{for(var i=o>1?void 0:o?Gb(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&Wb(t,r,i),i};let Xl=class extends yt{static get styles(){return[F`
        :host,
        .title,
        .macros,
        .macro,
        .details {
          display: flex;
        }
        :host,
        .title {
          justify-content: space-between;
        }
        .title {
          width: 100%;
        }
        .details {
          flex-direction: column;
          gap: 1rem;
          align-items: center;
        }
        .macros {
          gap: 1rem;
          flex-wrap: wrap;
          align-items: center;
        }
      `]}EditClicked(e){e.preventDefault(),e.stopPropagation(),this.dispatchEvent(Zt("edit-food",{food:this.food}))}render(){return this.food?$`
          <div class="details">
            <div class="title">
              <p>${this.food.Name}</p>
              <sl-button  @click="${this.EditClicked}" circle>
                <sl-icon name="pencil-square"></sl-icon>
              </sl-button>
            </div>
            <div class="macros">
              <div class="macro">
                <p>🔥</p>
                <p>${this.food.Macros.Calories}</p>
              </div>
              <div class="macro">
                <p>P</p>
                <p>${this.food.Macros.Protein}</p>
              </div>
              <div class="macro">
                <p>C</p>
                <p>${this.food.Macros.Carbs}</p>
              </div>
              <div class="macro">
                <p>F</p>
                <p>${this.food.Macros.Fat}</p>
              </div>
            </div>
          </div>
        `:bt}};Vp([v({attribute:!1})],Xl.prototype,"food",2);Xl=Vp([Ct("food-selection-card")],Xl);var Zb=Object.defineProperty,Kb=Object.getOwnPropertyDescriptor,jp=(e,t,r,o)=>{for(var i=o>1?void 0:o?Kb(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&Zb(t,r,i),i};let Ql=class extends yt{static get styles(){return[F`
        .title,
        .macros,
        .macro,
        .left,
        .right,
        :host {
          display: flex;
        }
        :host {
          padding: var(--sl-spacing-small);
          background: var(--sl-color-neutral-200);
          border-radius: var(--sl-border-radius-large);
          box-shadow: var(--sl-shadow-medium);
        }
        .left {
          flex-direction: column;
          gap: var(--sl-spacing-small);
        }
        .title {
          gap: var(--sl-spacing-small);
          align-items: center;
        }
        .macros {
          gap: var(--sl-spacing-medium);
          align-items: center;
        }
        .macro {
          gap: var(--sl-spacing-2x-small);
          align-items: baseline;
        }
      `]}EditClicked(e){e.preventDefault(),e.stopPropagation(),this.dispatchEvent(Zt("edit-food",{food:this.food}))}NotifySave(){this.dispatchEvent(Zt("food-entry-saved",this.food))}async QuickAdd(e){e.stopPropagation();let t=new ci(this.food);t={...t,Food:{...t.Food}},t.Committed=!0,t.Id=await Kc(t),this.NotifySave()}render(){return $`
      <div class="left">
        <div class="title">
          <sl-button @click="${this.EditClicked}" circle>
            <sl-icon name="pencil-square"></sl-icon>
          </sl-button>
          <span>${this.food.Name}</span>
        </div>
        <div>
          ${ss(this.food)?bt:$` <span>${this.food.Portion}</span> `}
        </div>
        <div class="macros">
          <div class="macro">
            <span>🔥</span>
            <span>${this.food.Macros.Calories}</span>
          </div>
          <div class="macro">
            <span>P</span>
            <span>${this.food.Macros.Protein}</span>
          </div>
          <div class="macro">
            <span>C</span>
            <span>${this.food.Macros.Carbs}</span>
          </div>
          <div class="macro">
            <span>F</span>
            <span>${this.food.Macros.Fat}</span>
          </div>
        </div>
      </div>
      <div class="right"></div>
    `}};jp([v({attribute:!1})],Ql.prototype,"food",2);Ql=jp([Ct("food-selection-row")],Ql);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xh=(e,t,r)=>{const o=new Map;for(let i=t;i<=r;i++)o.set(e[i],i);return o},Xb=os(class extends is{constructor(e){if(super(e),e.type!==Er.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let o;r===void 0?r=t:t!==void 0&&(o=t);const i=[],s=[];let n=0;for(const a of e)i[n]=o?o(a,n):n,s[n]=r(a,n),n++;return{values:s,keys:i}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,o]){const i=Km(e),{values:s,keys:n}=this.dt(t,r,o);if(!Array.isArray(i))return this.ut=n,s;const a=this.ut??=[],l=[];let h,p,u=0,f=i.length-1,g=0,b=s.length-1;for(;u<=f&&g<=b;)if(i[u]===null)u++;else if(i[f]===null)f--;else if(a[u]===n[g])l[g]=jo(i[u],s[g]),u++,g++;else if(a[f]===n[b])l[b]=jo(i[f],s[b]),f--,b--;else if(a[u]===n[b])l[b]=jo(i[u],s[b]),gs(e,l[b+1],i[u]),u++,b--;else if(a[f]===n[g])l[g]=jo(i[f],s[g]),gs(e,i[u],i[f]),f--,g++;else if(h===void 0&&(h=xh(n,g,b),p=xh(a,u,f)),h.has(a[u]))if(h.has(a[f])){const y=p.get(n[g]),w=y!==void 0?i[y]:null;if(w===null){const _=gs(e,i[u]);jo(_,s[g]),l[g]=_}else l[g]=jo(w,s[g]),gs(e,i[u],w),i[y]=null;g++}else Ja(i[f]),f--;else Ja(i[u]),u++;for(;g<=b;){const y=gs(e,l[b+1]);jo(y,s[g]),l[g++]=y}for(;u<=f;){const y=i[u++];y!==null&&Ja(y)}return this.ut=n,sp(e,l),or}});var Qb=Object.defineProperty,Jb=Object.getOwnPropertyDescriptor,mn=(e,t,r,o)=>{for(var i=o>1?void 0:o?Jb(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&Qb(t,r,i),i};let Wi=class extends yt{constructor(){super(...arguments),this.foods=[],this.displayItemAs="row",this.FoodSelected=e=>t=>{const r=this.dailyEntries?.find(o=>o.Food.Name===e.Name&&o.Time.equals(this.selectedTime));r?this.dispatchEvent(Zt("on-food-selected",{foodEntry:r})):this.dispatchEvent(Zt("on-food-selected",{food:e}))}}static get styles(){return[F`
        :host {
          height: 100%;
          width: 100%;
        }
        .nothing {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .nothing sl-button {
          width: 95%;
        }
        .list {
          display: flex;
          height: 100%;
        }

        .list-row {
          flex-direction: column;
          gap: 1rem;
        }

        .list-card {
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: space-between;
        }

        .list-card .food {
          flex: 1 0 10rem;
          height: 10rem;
        }

        .list-row .food {
          flex: 1 0 5rem;
        }
      `]}OnAddNew(){this.dispatchEvent(Zt("create-food"))}ShowItem(e){return this.displayItemAs==="card"?$`<food-selection-card
          @click="${this.FoodSelected(e)}"
          class="food"
          .food="${e}"
        ></food-selection-card>`:$`<food-selection-row
          @click="${this.FoodSelected(e)}"
          class="food"
          .food="${e}"
        ></food-selection-row>`}render(){const e={"list-row":this.displayItemAs==="row","list-card":this.displayItemAs==="card"};return(this.foods?.length??0)>0?$`
          <div class="list ${tt(e)}">
          <sl-button @click="${this.OnAddNew}">
            Add New
          </sl-button>
            ${Xb(this.foods,r=>r.Name,r=>this.ShowItem(r))}
          </div>
        `:$`
          <div class="nothing">
            <h2>Hmmm... Nothing here</h2>
            <sl-button size="large" @click="${this.OnAddNew}">
              Add New ?
            </sl-button>
          </div>
        `}};mn([v()],Wi.prototype,"foods",2);mn([v()],Wi.prototype,"displayItemAs",2);mn([Qr({context:Oa,subscribe:!0}),M()],Wi.prototype,"dailyEntries",2);mn([Qr({context:Aa,subscribe:!0}),M()],Wi.prototype,"selectedTime",2);Wi=mn([Ct("food-selection-list")],Wi);var ty=Object.defineProperty,ey=Object.getOwnPropertyDescriptor,gn=(e,t,r,o)=>{for(var i=o>1?void 0:o?ey(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&ty(t,r,i),i};let Gi=class extends yt{constructor(){super(...arguments),this.foods=[],this.displayItemAs="row",this.activeFoodName=null,this.CloseClicked=()=>this.dispatchEvent(Zt("on-close-entry-form"))}static get styles(){return[F`
        :host {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          height: 100%;
          overflow: hidden;
        }
        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .list {
          overflow-y: auto;
        }
      `]}async firstUpdated(){this.foods=await Dg(),this.foodsToDisplay=this.foods.map(e=>e)}OnCreateFood(e){e.stopPropagation(),e.preventDefault();const t=new Io;t.Name=this.searchTerm,this.dispatchEvent(Zt("create-food",{new:!0,food:t}))}Filter(e){this.searchTerm=e.target.value,this.searchTerm?this.foodsToDisplay=this.foods.filter(t=>t.Name.toLowerCase().includes(this.searchTerm.toLowerCase())):this.foodsToDisplay=this.foods.map(t=>t)}render(){return $`
      <div class="header">
        <sl-input @sl-input="${e=>this.Filter(e)}">
          <sl-icon name="search" slot="suffix"></sl-icon>
        </sl-input>

        <sl-button variant="text" circle @click=${this.CloseClicked}>
          <sl-icon name="x-lg" label="Close"></sl-icon>
        </sl-button>
      </div>
      <date-time-picker></date-time-picker>
      <div class="list">
        <food-selection-list
          @create-food="${this.OnCreateFood}"
          .displayItemAs="${this.displayItemAs}"
          .foods="${this.foodsToDisplay}"
        ></food-selection-list>
      </div>
    `}};gn([M()],Gi.prototype,"foods",2);gn([M()],Gi.prototype,"foodsToDisplay",2);gn([M()],Gi.prototype,"displayItemAs",2);gn([v()],Gi.prototype,"activeFoodName",2);Gi=gn([Ct("food-selection")],Gi);var ry=Object.defineProperty,oy=Object.getOwnPropertyDescriptor,Tr=(e,t,r,o)=>{for(var i=o>1?void 0:o?oy(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&ry(t,r,i),i};let sr=class extends yt{constructor(){super(...arguments),this.activeFood=null,this.activeFoodEntry=null,this._drawerSize="25rem",this._creatingNew=!1,this.fullForm=!1,this.formToShow="nothing",this.slDrawerClassMap={hideOverlay:!0},this.onSaveFood=this.ShowSelection,this.onSaveEntry=()=>{},this.onSelectFoodEntry=()=>{}}async firstUpdated(){this.AddListeners()}AddListeners(){}ResetProps(){this.onSaveEntry=this.CloseDrawer,this.onSaveFood=this.ShowSelection,this.activeFood=null,this.activeFoodEntry=null}ShowSelection(e){this.fullForm=!0,this.formToShow="selection",this.ExpandDrawer(),this.drawer.show()}EditFoodFromSelection(e){this.activeFood=e.detail.food,this._creatingNew=!1,this.fullForm=!0,this.formToShow="food"}ShowFoodEntryForm(e){if(e.stopPropagation(),!e.detail?.foodEntry?.Food&&!this.activeFood&&!e.detail.food){this.ShowSelection(e);return}this.activeFood=e.detail.food??this.activeFood,this.activeFoodEntry=e.detail.foodEntry??new ci(this.activeFood,e.detail.date??this.currentDate,e.detail.hour??this.currentTime),this.fullForm=!0,this.formToShow="entry",this._creatingNew=!1,this.slDrawerClassMap.hideOverlay=!0,this.ExpandDrawer(),this.drawer.show()}ShowFoodForm(e){this.activeFood=e.detail.food?e.detail.food:new Io,this._creatingNew=(this.activeFood?.Name?.length??0)===0,this.fullForm=this._creatingNew,this.formToShow="food",this.fullForm?this.ExpandDrawer():this.CondenseDrawer(),this.onSaveFood=this.ShowSelection,this.drawer.show()}async SaveEntry(e){await Ob(e.detail),this.onSaveEntry(e),this.ResetProps()}async SaveFood(e){await gp(e.detail),this.onSaveFood(e),this.ResetProps()}async DeleteFood(e){await Og(e.detail),this.onSaveFood(e),this.ResetProps()}ExpandDrawer(e=!0){this.fullForm=!0,this._drawerSize=e?"calc(100% - 6rem)":"calc(100% - 11.5rem)"}CondenseDrawer(){this.fullForm=!1,this._drawerSize="30%;"}CloseDrawer(){this.CondenseDrawer(),this.drawer.hide(),this.ResetProps()}render(){let e=null;return this.formToShow==="entry"?e=$`<food-entry-form
        @on-back-food-drawer=${this.ShowSelection}
        @on-close-food-drawer=${this.CloseDrawer}
        .entry=${this.activeFoodEntry}
      ></food-entry-form>`:this.formToShow=="food"?e=$`<food-form
        .food="${this.activeFood}"
        .fullForm=${this.fullForm}
        .creatingNew=${this._creatingNew}
        @food-changed=${this.SaveFood}
        @delete-food=${this.DeleteFood}
        @on-back-food-drawer=${this.ShowSelection}
        @on-close-food-drawer=${this.CloseDrawer}
        @on-full-form=${this.ExpandDrawer}
        @on-condensed=${this.CondenseDrawer}
      ></food-form>`:this.formToShow=="selection"&&(e=$`<food-selection
        @on-food-selected="${this.ShowFoodEntryForm}"
        @create-food="${this.ShowFoodForm}"
        @edit-food="${this.EditFoodFromSelection}"
        @on-close-entry-form=${this.CloseDrawer}
      ></food-selection>`),$`
      <sl-drawer
        placement="bottom"
        no-header
        style="--size: ${this._drawerSize}"
        class="${tt(this.slDrawerClassMap)}"
      >
        ${e}
      </sl-drawer>
    `}};sr.styles=[F`
      sl-drawer.hideOverlay::part(overlay) {
        display: none;
      }

      sl-drawer::part(body) {
        padding-bottom: 2rem;
      }

      sl-drawer::part(panel) {
        transition: height 0.5s;
      }
    `];Tr([B("sl-drawer")],sr.prototype,"drawer",2);Tr([B("#add-food")],sr.prototype,"addFoodBtn",2);Tr([M()],sr.prototype,"activeFood",2);Tr([M()],sr.prototype,"activeFoodEntry",2);Tr([M()],sr.prototype,"_drawerSize",2);Tr([M()],sr.prototype,"_creatingNew",2);Tr([M()],sr.prototype,"fullForm",2);Tr([M()],sr.prototype,"formToShow",2);Tr([M()],sr.prototype,"slDrawerClassMap",2);Tr([Qr({context:cn,subscribe:!0}),M()],sr.prototype,"currentDate",2);Tr([Qr({context:Aa,subscribe:!0}),M()],sr.prototype,"currentTime",2);sr=Tr([Ct("food-drawer")],sr);const iy=F`:host{
    height: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
  `;var sy=F`
  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`,td=class extends Z{render(){return $` <slot></slot> `}};td.styles=[J,sy];td.define("sl-visually-hidden");var ny=F`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,ke=class extends Z{constructor(){super(),this.localize=new Tt(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{e.key==="Escape"&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=yh(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=yh(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await ue(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:r,options:o}=Wt(this,"tooltip.show",{dir:this.localize.dir()});await oe(this.popup.popup,r,o),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await ue(this.body);const{keyframes:r,options:o}=Wt(this,"tooltip.hide",{dir:this.localize.dir()});await oe(this.popup.popup,r,o),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Ke(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Ke(this,"sl-after-hide")}render(){return $`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${tt({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};ke.styles=[J,ny];ke.dependencies={"sl-popup":St};m([B("slot:not([name])")],ke.prototype,"defaultSlot",2);m([B(".tooltip__body")],ke.prototype,"body",2);m([B("sl-popup")],ke.prototype,"popup",2);m([v()],ke.prototype,"content",2);m([v()],ke.prototype,"placement",2);m([v({type:Boolean,reflect:!0})],ke.prototype,"disabled",2);m([v({type:Number})],ke.prototype,"distance",2);m([v({type:Boolean,reflect:!0})],ke.prototype,"open",2);m([v({type:Number})],ke.prototype,"skidding",2);m([v()],ke.prototype,"trigger",2);m([v({type:Boolean})],ke.prototype,"hoist",2);m([R("open",{waitUntilFirstUpdate:!0})],ke.prototype,"handleOpenChange",1);m([R(["content","distance","hoist","placement","skidding"])],ke.prototype,"handleOptionsChange",1);m([R("disabled")],ke.prototype,"handleDisabledChange",1);It("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});It("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});ke.define("sl-tooltip");var ay=F`
  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--sl-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--sl-spacing-large);

    display: block;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`,ly=F`
  :host {
    display: block;
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(sl-icon) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    color: var(--sl-color-neutral-700);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  .tree-item__checkbox {
    pointer-events: none;
  }

  .tree-item__expand-button,
  .tree-item__checkbox,
  .tree-item__label {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-dense);
    letter-spacing: var(--sl-letter-spacing-normal);
  }

  .tree-item__checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .tree-item__indentation {
    display: block;
    width: 1em;
    flex-shrink: 0;
  }

  .tree-item__expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-x-small);
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    cursor: pointer;
  }

  .tree-item__expand-button {
    transition: var(--sl-transition-medium) rotate ease;
  }

  .tree-item--expanded .tree-item__expand-button {
    rotate: 90deg;
  }

  .tree-item--expanded.tree-item--rtl .tree-item__expand-button {
    rotate: -90deg;
  }

  .tree-item--expanded slot[name='expand-icon'],
  .tree-item:not(.tree-item--expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item--has-expand-button) .tree-item__expand-icon-slot {
    display: none;
  }

  .tree-item__expand-button--visible {
    cursor: pointer;
  }

  .tree-item__item {
    display: flex;
    align-items: center;
    border-inline-start: solid 3px transparent;
  }

  .tree-item--disabled .tree-item__item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .tree-item__item {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
    background-color: var(--sl-color-neutral-100);
    border-inline-start-color: var(--sl-color-primary-600);
  }

  :host(:not([aria-disabled='true'])) .tree-item__expand-button {
    color: var(--sl-color-neutral-600);
  }

  .tree-item__label {
    display: flex;
    align-items: center;
    transition: var(--sl-transition-fast) color;
  }

  .tree-item__children {
    display: block;
    font-size: calc(1em + var(--indent-size, var(--sl-spacing-medium)));
  }

  /* Indentation lines */
  .tree-item__children {
    position: relative;
  }

  .tree-item__children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    left: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  .tree-item--rtl .tree-item__children::before {
    left: auto;
    right: 1em;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
      outline: dashed 1px SelectedItem;
    }
  }
`,cy=F`
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,ve=class extends Z{constructor(){super(...arguments),this.formControlController=new vo(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new Xe(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("help-text"),t=this.helpText?!0:!!e;return $`
      <div
        class=${tt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${tt({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${G(this.value)}
            .indeterminate=${li(this.indeterminate)}
            .checked=${li(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
            class="checkbox__control"
          >
            ${this.checked?$`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `:""}
            ${!this.checked&&this.indeterminate?$`
                  <sl-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></sl-icon>
                `:""}
          </span>

          <div part="label" class="checkbox__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${t?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};ve.styles=[J,mi,cy];ve.dependencies={"sl-icon":Rt};m([B('input[type="checkbox"]')],ve.prototype,"input",2);m([M()],ve.prototype,"hasFocus",2);m([v()],ve.prototype,"title",2);m([v()],ve.prototype,"name",2);m([v()],ve.prototype,"value",2);m([v({reflect:!0})],ve.prototype,"size",2);m([v({type:Boolean,reflect:!0})],ve.prototype,"disabled",2);m([v({type:Boolean,reflect:!0})],ve.prototype,"checked",2);m([v({type:Boolean,reflect:!0})],ve.prototype,"indeterminate",2);m([fi("checked")],ve.prototype,"defaultChecked",2);m([v({reflect:!0})],ve.prototype,"form",2);m([v({type:Boolean,reflect:!0})],ve.prototype,"required",2);m([v({attribute:"help-text"})],ve.prototype,"helpText",2);m([R("disabled",{waitUntilFirstUpdate:!0})],ve.prototype,"handleDisabledChange",1);m([R(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],ve.prototype,"handleStateChange",1);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ch(e,t,r){return e?t(e):r?.(e)}var ie=class Jl extends Z{constructor(){super(...arguments),this.localize=new Tt(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(t){return t instanceof Element&&t.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await ue(this.childrenContainer);const{keyframes:t,options:r}=Wt(this,"tree-item.collapse",{dir:this.localize.dir()});await oe(this.childrenContainer,ra(t,this.childrenContainer.scrollHeight),r),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){const t=this.parentElement;return!!t&&Jl.isTreeItem(t)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(t){t.has("selected")&&!t.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await ue(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes:t,options:r}=Wt(this,"tree-item.expand",{dir:this.localize.dir()});await oe(this.childrenContainer,ra(t,this.childrenContainer.scrollHeight),r),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:t=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(r=>Jl.isTreeItem(r)&&(t||!r.disabled)):[]}render(){const t=this.localize.dir()==="rtl",r=!this.loading&&(!this.isLeaf||this.lazy);return $`
      <div
        part="base"
        class="${tt({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":r,"tree-item--rtl":this.localize.dir()==="rtl"})}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${this.disabled?"item--disabled":""}
            ${this.expanded?"item--expanded":""}
            ${this.indeterminate?"item--indeterminate":""}
            ${this.selected?"item--selected":""}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${tt({"tree-item__expand-button":!0,"tree-item__expand-button--visible":r})}
            aria-hidden="true"
          >
            ${Ch(this.loading,()=>$` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${Ch(this.selectable,()=>$`
              <sl-checkbox
                part="checkbox"
                exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    control--checked:checkbox__control--checked,
                    control--indeterminate:checkbox__control--indeterminate,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                class="tree-item__checkbox"
                ?disabled="${this.disabled}"
                ?checked="${li(this.selected)}"
                ?indeterminate="${this.indeterminate}"
                tabindex="-1"
              ></sl-checkbox>
            `)}

          <slot class="tree-item__label" part="label"></slot>
        </div>

        <div class="tree-item__children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `}};ie.styles=[J,ly];ie.dependencies={"sl-checkbox":ve,"sl-icon":Rt,"sl-spinner":ln};m([M()],ie.prototype,"indeterminate",2);m([M()],ie.prototype,"isLeaf",2);m([M()],ie.prototype,"loading",2);m([M()],ie.prototype,"selectable",2);m([v({type:Boolean,reflect:!0})],ie.prototype,"expanded",2);m([v({type:Boolean,reflect:!0})],ie.prototype,"selected",2);m([v({type:Boolean,reflect:!0})],ie.prototype,"disabled",2);m([v({type:Boolean,reflect:!0})],ie.prototype,"lazy",2);m([B("slot:not([name])")],ie.prototype,"defaultSlot",2);m([B("slot[name=children]")],ie.prototype,"childrenSlot",2);m([B(".tree-item__item")],ie.prototype,"itemElement",2);m([B(".tree-item__children")],ie.prototype,"childrenContainer",2);m([B(".tree-item__expand-button slot")],ie.prototype,"expandButtonSlot",2);m([R("loading",{waitUntilFirstUpdate:!0})],ie.prototype,"handleLoadingChange",1);m([R("disabled")],ie.prototype,"handleDisabledChange",1);m([R("selected")],ie.prototype,"handleSelectedChange",1);m([R("expanded",{waitUntilFirstUpdate:!0})],ie.prototype,"handleExpandedChange",1);m([R("expanded",{waitUntilFirstUpdate:!0})],ie.prototype,"handleExpandAnimation",1);m([R("lazy",{waitUntilFirstUpdate:!0})],ie.prototype,"handleLazyChange",1);var Is=ie;It("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});It("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});function de(e,t,r){const o=i=>Object.is(i,-0)?0:i;return e<t?o(t):e>r?o(r):o(e)}function Th(e,t=!1){function r(s){const n=s.getChildrenItems({includeDisabled:!1});if(n.length){const a=n.every(h=>h.selected),l=n.every(h=>!h.selected&&!h.indeterminate);s.selected=a,s.indeterminate=!a&&!l}}function o(s){const n=s.parentElement;Is.isTreeItem(n)&&(r(n),o(n))}function i(s){for(const n of s.getChildrenItems())n.selected=t?s.selected||n.selected:!n.disabled&&s.selected,i(n);t&&r(s)}i(e),o(e)}var yi=class extends Z{constructor(){super(),this.selection="single",this.localize=new Tt(this),this.clickTarget=null,this.initTreeItem=e=>{e.selectable=this.selection==="multiple",["expand","collapse"].filter(t=>!!this.querySelector(`[slot="${t}-icon"]`)).forEach(t=>{const r=e.querySelector(`[slot="${t}-icon"]`),o=this.getExpandButtonIcon(t);o&&(r===null?e.append(o):r.hasAttribute("data-default")&&r.replaceWith(o))})},this.handleTreeChanged=e=>{for(const t of e){const r=[...t.addedNodes].filter(Is.isTreeItem),o=[...t.removedNodes].filter(Is.isTreeItem);r.forEach(this.initTreeItem),this.lastFocusedItem&&o.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=e=>{const t=e.relatedTarget;(!t||!this.contains(t))&&(this.tabIndex=0)},this.handleFocusIn=e=>{const t=e.target;e.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),Is.isTreeItem(t)&&!t.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=t,this.tabIndex=-1,t.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect()}getExpandButtonIcon(e){const r=(e==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(r){const o=r.cloneNode(!0);return[o,...o.querySelectorAll("[id]")].forEach(i=>i.removeAttribute("id")),o.setAttribute("data-default",""),o.slot=`${e}-icon`,o}return null}selectItem(e){const t=[...this.selectedItems];if(this.selection==="multiple")e.selected=!e.selected,e.lazy&&(e.expanded=!0),Th(e);else if(this.selection==="single"||e.isLeaf){const o=this.getAllTreeItems();for(const i of o)i.selected=i===e}else this.selection==="leaf"&&(e.expanded=!e.expanded);const r=this.selectedItems;(t.length!==r.length||r.some(o=>!t.includes(o)))&&Promise.all(r.map(o=>o.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:r}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(e){e?.focus()}handleKeyDown(e){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(e.key)||e.composedPath().some(i=>{var s;return["input","textarea"].includes((s=i?.tagName)==null?void 0:s.toLowerCase())}))return;const t=this.getFocusableItems(),r=this.localize.dir()==="ltr",o=this.localize.dir()==="rtl";if(t.length>0){e.preventDefault();const i=t.findIndex(l=>l.matches(":focus")),s=t[i],n=l=>{const h=t[de(l,0,t.length-1)];this.focusItem(h)},a=l=>{s.expanded=l};e.key==="ArrowDown"?n(i+1):e.key==="ArrowUp"?n(i-1):r&&e.key==="ArrowRight"||o&&e.key==="ArrowLeft"?!s||s.disabled||s.expanded||s.isLeaf&&!s.lazy?n(i+1):a(!0):r&&e.key==="ArrowLeft"||o&&e.key==="ArrowRight"?!s||s.disabled||s.isLeaf||!s.expanded?n(i-1):a(!1):e.key==="Home"?n(0):e.key==="End"?n(t.length-1):(e.key==="Enter"||e.key===" ")&&(s.disabled||this.selectItem(s))}}handleClick(e){const t=e.target,r=t.closest("sl-tree-item"),o=e.composedPath().some(i=>{var s;return(s=i?.classList)==null?void 0:s.contains("tree-item__expand-button")});!r||r.disabled||t!==this.clickTarget||(o?r.expanded=!r.expanded:this.selectItem(r))}handleMouseDown(e){this.clickTarget=e.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const e=this.selection==="multiple",t=this.getAllTreeItems();this.setAttribute("aria-multiselectable",e?"true":"false");for(const r of t)r.selectable=e;e&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(r=>Th(r,!0)))}get selectedItems(){const e=this.getAllTreeItems(),t=r=>r.selected;return e.filter(t)}getFocusableItems(){const e=this.getAllTreeItems(),t=new Set;return e.filter(r=>{var o;if(r.disabled)return!1;const i=(o=r.parentElement)==null?void 0:o.closest("[role=treeitem]");return i&&(!i.expanded||i.loading||t.has(i))&&t.add(r),!t.has(r)})}render(){return $`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `}};yi.styles=[J,ay];m([B("slot:not([name])")],yi.prototype,"defaultSlot",2);m([B("slot[name=expand-icon]")],yi.prototype,"expandedIconSlot",2);m([B("slot[name=collapse-icon]")],yi.prototype,"collapsedIconSlot",2);m([v()],yi.prototype,"selection",2);m([R("selection")],yi.prototype,"handleSelectionChange",1);yi.define("sl-tree");Is.define("sl-tree-item");var dy=F`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,hy=0,bn=class extends Z{constructor(){super(...arguments),this.attrId=++hy,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return $`
      <slot
        part="base"
        class=${tt({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};bn.styles=[J,dy];m([v({reflect:!0})],bn.prototype,"name",2);m([v({type:Boolean,reflect:!0})],bn.prototype,"active",2);m([R("active")],bn.prototype,"handleActiveChange",1);bn.define("sl-tab-panel");No.define("sl-tag");var uy=F`
  :host {
    display: block;
  }

  .textarea {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`,kt=class extends Z{constructor(){super(...arguments),this.formControlController=new vo(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Xe(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}setTextareaHeight(){this.resize==="auto"?(this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top=="number"&&(this.input.scrollTop=e.top),typeof e.left=="number"&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,r="none"){this.input.setSelectionRange(e,t,r)}setRangeText(e,t,r,o="preserve"){const i=t??this.input.selectionStart,s=r??this.input.selectionEnd;this.input.setRangeText(e,i,s,o),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,o=this.helpText?!0:!!t;return $`
      <div
        part="form-control"
        class=${tt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":o})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${tt({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${G(this.name)}
              .value=${li(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${G(this.placeholder)}
              rows=${G(this.rows)}
              minlength=${G(this.minlength)}
              maxlength=${G(this.maxlength)}
              autocapitalize=${G(this.autocapitalize)}
              autocorrect=${G(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${G(this.spellcheck)}
              enterkeyhint=${G(this.enterkeyhint)}
              inputmode=${G(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};kt.styles=[J,mi,uy];m([B(".textarea__control")],kt.prototype,"input",2);m([M()],kt.prototype,"hasFocus",2);m([v()],kt.prototype,"title",2);m([v()],kt.prototype,"name",2);m([v()],kt.prototype,"value",2);m([v({reflect:!0})],kt.prototype,"size",2);m([v({type:Boolean,reflect:!0})],kt.prototype,"filled",2);m([v()],kt.prototype,"label",2);m([v({attribute:"help-text"})],kt.prototype,"helpText",2);m([v()],kt.prototype,"placeholder",2);m([v({type:Number})],kt.prototype,"rows",2);m([v()],kt.prototype,"resize",2);m([v({type:Boolean,reflect:!0})],kt.prototype,"disabled",2);m([v({type:Boolean,reflect:!0})],kt.prototype,"readonly",2);m([v({reflect:!0})],kt.prototype,"form",2);m([v({type:Boolean,reflect:!0})],kt.prototype,"required",2);m([v({type:Number})],kt.prototype,"minlength",2);m([v({type:Number})],kt.prototype,"maxlength",2);m([v()],kt.prototype,"autocapitalize",2);m([v()],kt.prototype,"autocorrect",2);m([v()],kt.prototype,"autocomplete",2);m([v({type:Boolean})],kt.prototype,"autofocus",2);m([v()],kt.prototype,"enterkeyhint",2);m([v({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],kt.prototype,"spellcheck",2);m([v()],kt.prototype,"inputmode",2);m([fi()],kt.prototype,"defaultValue",2);m([R("disabled",{waitUntilFirstUpdate:!0})],kt.prototype,"handleDisabledChange",1);m([R("rows",{waitUntilFirstUpdate:!0})],kt.prototype,"handleRowsChange",1);m([R("value",{waitUntilFirstUpdate:!0})],kt.prototype,"handleValueChange",1);kt.define("sl-textarea");var py=F`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus {
    outline: none;
  }

  .tab:focus-visible:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,fy=0,Jr=class extends Z{constructor(){super(...arguments),this.localize=new Tt(this),this.attrId=++fy,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(e){e.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(e){this.tab.focus(e)}blur(){this.tab.blur()}render(){return this.id=this.id.length>0?this.id:this.componentId,$`
      <div
        part="base"
        class=${tt({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
        tabindex=${this.disabled?"-1":"0"}
      >
        <slot></slot>
        ${this.closable?$`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};Jr.styles=[J,py];Jr.dependencies={"sl-icon-button":ye};m([B(".tab")],Jr.prototype,"tab",2);m([v({reflect:!0})],Jr.prototype,"panel",2);m([v({type:Boolean,reflect:!0})],Jr.prototype,"active",2);m([v({type:Boolean})],Jr.prototype,"closable",2);m([v({type:Boolean,reflect:!0})],Jr.prototype,"disabled",2);m([R("active")],Jr.prototype,"handleActiveChange",1);m([R("disabled")],Jr.prototype,"handleDisabledChange",1);Jr.define("sl-tab");var my=F`
  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`,gr=class extends Z{constructor(){super(...arguments),this.localize=new Tt(this),this.tabs=[],this.panels=[],this.hasScrollControls=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1}connectedCallback(){const e=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(t=>{t.some(r=>!["aria-labelledby","aria-controls"].includes(r.attributeName))&&setTimeout(()=>this.setAriaLabels()),t.some(r=>r.attributeName==="disabled")&&this.syncTabsAndPanels()}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),e.then(()=>{new IntersectionObserver((r,o)=>{var i;r[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((i=this.getActiveTab())!=null?i:this.tabs[0],{emitEvents:!1}),o.unobserve(r[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect(),this.resizeObserver.unobserve(this.nav)}getAllTabs(e={includeDisabled:!0}){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(r=>e.includeDisabled?r.tagName.toLowerCase()==="sl-tab":r.tagName.toLowerCase()==="sl-tab"&&!r.disabled)}getAllPanels(){return[...this.body.assignedElements()].filter(e=>e.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(e=>e.active)}handleClick(e){const r=e.target.closest("sl-tab");r?.closest("sl-tab-group")===this&&r!==null&&this.setActiveTab(r,{scrollBehavior:"smooth"})}handleKeyDown(e){const r=e.target.closest("sl-tab");if(r?.closest("sl-tab-group")===this&&(["Enter"," "].includes(e.key)&&r!==null&&(this.setActiveTab(r,{scrollBehavior:"smooth"}),e.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key))){const i=this.tabs.find(n=>n.matches(":focus")),s=this.localize.dir()==="rtl";if(i?.tagName.toLowerCase()==="sl-tab"){let n=this.tabs.indexOf(i);e.key==="Home"?n=0:e.key==="End"?n=this.tabs.length-1:["top","bottom"].includes(this.placement)&&e.key===(s?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&e.key==="ArrowUp"?n--:(["top","bottom"].includes(this.placement)&&e.key===(s?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&e.key==="ArrowDown")&&n++,n<0&&(n=this.tabs.length-1),n>this.tabs.length-1&&(n=0),this.tabs[n].focus({preventScroll:!0}),this.activation==="auto"&&this.setActiveTab(this.tabs[n],{scrollBehavior:"smooth"}),["top","bottom"].includes(this.placement)&&Ll(this.tabs[n],this.nav,"horizontal"),e.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(e,t){if(t=yo({emitEvents:!0,scrollBehavior:"auto"},t),e!==this.activeTab&&!e.disabled){const r=this.activeTab;this.activeTab=e,this.tabs.forEach(o=>o.active=o===this.activeTab),this.panels.forEach(o=>{var i;return o.active=o.name===((i=this.activeTab)==null?void 0:i.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&Ll(this.activeTab,this.nav,"horizontal",t.scrollBehavior),t.emitEvents&&(r&&this.emit("sl-tab-hide",{detail:{name:r.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(e=>{const t=this.panels.find(r=>r.name===e.panel);t&&(e.setAttribute("aria-controls",t.getAttribute("id")),t.setAttribute("aria-labelledby",e.getAttribute("id")))})}repositionIndicator(){const e=this.getActiveTab();if(!e)return;const t=e.clientWidth,r=e.clientHeight,o=this.localize.dir()==="rtl",i=this.getAllTabs(),n=i.slice(0,i.indexOf(e)).reduce((a,l)=>({left:a.left+l.clientWidth,top:a.top+l.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${t}px`,this.indicator.style.height="auto",this.indicator.style.translate=o?`${-1*n.left}px`:`${n.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${r}px`,this.indicator.style.translate=`0 ${n.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs({includeDisabled:!1}),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(e){const t=this.tabs.find(r=>r.panel===e);t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}render(){const e=this.localize.dir()==="rtl";return $`
      <div
        part="base"
        class=${tt({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?$`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--start"
                  name=${e?"chevron-right":"chevron-left"}
                  library="system"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav">
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls?$`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--end"
                  name=${e?"chevron-left":"chevron-right"}
                  library="system"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};gr.styles=[J,my];gr.dependencies={"sl-icon-button":ye};m([B(".tab-group")],gr.prototype,"tabGroup",2);m([B(".tab-group__body")],gr.prototype,"body",2);m([B(".tab-group__nav")],gr.prototype,"nav",2);m([B(".tab-group__indicator")],gr.prototype,"indicator",2);m([M()],gr.prototype,"hasScrollControls",2);m([v()],gr.prototype,"placement",2);m([v()],gr.prototype,"activation",2);m([v({attribute:"no-scroll-controls",type:Boolean})],gr.prototype,"noScrollControls",2);m([R("noScrollControls",{waitUntilFirstUpdate:!0})],gr.prototype,"updateScrollControls",1);m([R("placement",{waitUntilFirstUpdate:!0})],gr.prototype,"syncIndicator",1);gr.define("sl-tab-group");ln.define("sl-spinner");var gy=F`
  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;function Os(e,t){function r(i){const s=e.getBoundingClientRect(),n=e.ownerDocument.defaultView,a=s.left+n.scrollX,l=s.top+n.scrollY,h=i.pageX-a,p=i.pageY-l;t?.onMove&&t.onMove(h,p)}function o(){document.removeEventListener("pointermove",r),document.removeEventListener("pointerup",o),t?.onStop&&t.onStop()}document.addEventListener("pointermove",r,{passive:!0}),document.addEventListener("pointerup",o),t?.initialEvent instanceof PointerEvent&&r(t.initialEvent)}var br=class extends Z{constructor(){super(...arguments),this.localize=new Tt(this),this.position=50,this.vertical=!1,this.disabled=!1,this.snapThreshold=12}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>this.handleResize(e)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}detectSize(){const{width:e,height:t}=this.getBoundingClientRect();this.size=this.vertical?t:e}percentageToPixels(e){return this.size*(e/100)}pixelsToPercentage(e){return e/this.size*100}handleDrag(e){const t=this.localize.dir()==="rtl";this.disabled||(e.cancelable&&e.preventDefault(),Os(this,{onMove:(r,o)=>{let i=this.vertical?o:r;this.primary==="end"&&(i=this.size-i),this.snap&&this.snap.split(" ").forEach(n=>{let a;n.endsWith("%")?a=this.size*(parseFloat(n)/100):a=parseFloat(n),t&&!this.vertical&&(a=this.size-a),i>=a-this.snapThreshold&&i<=a+this.snapThreshold&&(i=a)}),this.position=de(this.pixelsToPercentage(i),0,100)},initialEvent:e}))}handleKeyDown(e){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=this.position;const r=(e.shiftKey?10:1)*(this.primary==="end"?-1:1);e.preventDefault(),(e.key==="ArrowLeft"&&!this.vertical||e.key==="ArrowUp"&&this.vertical)&&(t-=r),(e.key==="ArrowRight"&&!this.vertical||e.key==="ArrowDown"&&this.vertical)&&(t+=r),e.key==="Home"&&(t=this.primary==="end"?100:0),e.key==="End"&&(t=this.primary==="end"?0:100),this.position=de(t,0,100)}}handleResize(e){const{width:t,height:r}=e[0].contentRect;this.size=this.vertical?r:t,this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const e=this.vertical?"gridTemplateRows":"gridTemplateColumns",t=this.vertical?"gridTemplateColumns":"gridTemplateRows",r=this.localize.dir()==="rtl",o=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,i="auto";return this.primary==="end"?r&&!this.vertical?this.style[e]=`${o} var(--divider-width) ${i}`:this.style[e]=`${i} var(--divider-width) ${o}`:r&&!this.vertical?this.style[e]=`${i} var(--divider-width) ${o}`:this.style[e]=`${o} var(--divider-width) ${i}`,this.style[t]="",$`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${G(this.disabled?void 0:"0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};br.styles=[J,gy];m([B(".divider")],br.prototype,"divider",2);m([v({type:Number,reflect:!0})],br.prototype,"position",2);m([v({attribute:"position-in-pixels",type:Number})],br.prototype,"positionInPixels",2);m([v({type:Boolean,reflect:!0})],br.prototype,"vertical",2);m([v({type:Boolean,reflect:!0})],br.prototype,"disabled",2);m([v()],br.prototype,"primary",2);m([v()],br.prototype,"snap",2);m([v({type:Number,attribute:"snap-threshold"})],br.prototype,"snapThreshold",2);m([R("position")],br.prototype,"handlePositionChange",1);m([R("positionInPixels")],br.prototype,"handlePositionInPixelsChange",1);m([R("vertical")],br.prototype,"handleVerticalChange",1);br.define("sl-split-panel");var by=F`
  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,je=class extends Z{constructor(){super(...arguments),this.formControlController=new vo(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new Xe(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(e){e.key==="ArrowLeft"&&(e.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),e.key==="ArrowRight"&&(e.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("help-text"),t=this.helpText?!0:!!e;return $`
      <div
        class=${tt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${tt({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${G(this.value)}
            .checked=${li(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
          </span>

          <div part="label" class="switch__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${t?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};je.styles=[J,mi,by];m([B('input[type="checkbox"]')],je.prototype,"input",2);m([M()],je.prototype,"hasFocus",2);m([v()],je.prototype,"title",2);m([v()],je.prototype,"name",2);m([v()],je.prototype,"value",2);m([v({reflect:!0})],je.prototype,"size",2);m([v({type:Boolean,reflect:!0})],je.prototype,"disabled",2);m([v({type:Boolean,reflect:!0})],je.prototype,"checked",2);m([fi("checked")],je.prototype,"defaultChecked",2);m([v({reflect:!0})],je.prototype,"form",2);m([v({type:Boolean,reflect:!0})],je.prototype,"required",2);m([v({attribute:"help-text"})],je.prototype,"helpText",2);m([R("checked",{waitUntilFirstUpdate:!0})],je.prototype,"handleCheckedChange",1);m([R("disabled",{waitUntilFirstUpdate:!0})],je.prototype,"handleDisabledChange",1);je.define("sl-switch");var yy=F`
  :host {
    display: contents;
  }
`,Na=class extends Z{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>{this.emit("sl-resize",{detail:{entries:e}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const e=this.shadowRoot.querySelector("slot");if(e!==null){const t=e.assignedElements({flatten:!0});this.observedElements.forEach(r=>this.resizeObserver.unobserve(r)),this.observedElements=[],t.forEach(r=>{this.resizeObserver.observe(r),this.observedElements.push(r)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return $` <slot @slotchange=${this.handleSlotChange}></slot> `}};Na.styles=[J,yy];m([v({type:Boolean,reflect:!0})],Na.prototype,"disabled",2);m([R("disabled",{waitUntilFirstUpdate:!0})],Na.prototype,"handleDisabledChange",1);Na.define("sl-resize-observer");var vy=F`
  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`,ed=class extends Z{constructor(){super(...arguments),this.effect="none"}render(){return $`
      <div
        part="base"
        class=${tt({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};ed.styles=[J,vy];m([v()],ed.prototype,"effect",2);ed.define("sl-skeleton");var wy=F`
  :host {
    --symbol-color: var(--sl-color-neutral-300);
    --symbol-color-active: var(--sl-color-amber-500);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--sl-spacing-3x-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--sl-border-radius-medium);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbol--active,
  .rating__partial--filled {
    color: var(--symbol-color-active);
  }

  .rating__partial-symbol-container {
    position: relative;
  }

  .rating__partial--filled {
    position: absolute;
    top: var(--symbol-spacing);
    left: var(--symbol-spacing);
  }

  .rating__symbol {
    transition: var(--sl-transition-fast) scale;
    pointer-events: none;
  }

  .rating__symbol--hover {
    scale: 1.2;
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    scale: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .rating__symbol--active {
      color: SelectedItem;
    }
  }
`,Ye=class extends Z{constructor(){super(...arguments),this.localize=new Tt(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(e){return this.getValueFromXCoordinate(e.clientX)}getValueFromTouchPosition(e){return this.getValueFromXCoordinate(e.touches[0].clientX)}getValueFromXCoordinate(e){const t=this.localize.dir()==="rtl",{left:r,right:o,width:i}=this.rating.getBoundingClientRect(),s=t?this.roundToPrecision((o-e)/i*this.max,this.precision):this.roundToPrecision((e-r)/i*this.max,this.precision);return de(s,0,this.max)}handleClick(e){this.disabled||(this.setValue(this.getValueFromMousePosition(e)),this.emit("sl-change"))}setValue(e){this.disabled||this.readonly||(this.value=e===this.value?0:e,this.isHovering=!1)}handleKeyDown(e){const t=this.localize.dir()==="ltr",r=this.localize.dir()==="rtl",o=this.value;if(!(this.disabled||this.readonly)){if(e.key==="ArrowDown"||t&&e.key==="ArrowLeft"||r&&e.key==="ArrowRight"){const i=e.shiftKey?1:this.precision;this.value=Math.max(0,this.value-i),e.preventDefault()}if(e.key==="ArrowUp"||t&&e.key==="ArrowRight"||r&&e.key==="ArrowLeft"){const i=e.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+i),e.preventDefault()}e.key==="Home"&&(this.value=0,e.preventDefault()),e.key==="End"&&(this.value=this.max,e.preventDefault()),this.value!==o&&this.emit("sl-change")}}handleMouseEnter(e){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(e)}handleMouseMove(e){this.hoverValue=this.getValueFromMousePosition(e)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(e){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(e),e.preventDefault()}handleTouchMove(e){this.hoverValue=this.getValueFromTouchPosition(e)}handleTouchEnd(e){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),e.preventDefault()}roundToPrecision(e,t=.5){const r=1/t;return Math.ceil(e*r)/r}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(e){this.rating.focus(e)}blur(){this.rating.blur()}render(){const e=this.localize.dir()==="rtl",t=Array.from(Array(this.max).keys());let r=0;return this.disabled||this.readonly?r=this.value:r=this.isHovering?this.hoverValue:this.value,$`
      <div
        part="base"
        class=${tt({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":e})}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled?"true":"false"}
        aria-readonly=${this.readonly?"true":"false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled?"-1":"0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols">
          ${t.map(o=>r>o&&r<o+1?$`
                <span
                  class=${tt({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(r)===o+1})}
                  role="presentation"
                >
                  <div
                    style=${rr({clipPath:e?`inset(0 ${(r-o)*100}% 0 0)`:`inset(0 0 0 ${(r-o)*100}%)`})}
                  >
                    ${Mn(this.getSymbol(o+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${rr({clipPath:e?`inset(0 0 0 ${100-(r-o)*100}%)`:`inset(0 ${100-(r-o)*100}% 0 0)`})}
                  >
                    ${Mn(this.getSymbol(o+1))}
                  </div>
                </span>
              `:$`
              <span
                class=${tt({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(r)===o+1,"rating__symbol--active":r>=o+1})}
                role="presentation"
              >
                ${Mn(this.getSymbol(o+1))}
              </span>
            `)}
        </span>
      </div>
    `}};Ye.styles=[J,wy];Ye.dependencies={"sl-icon":Rt};m([B(".rating")],Ye.prototype,"rating",2);m([M()],Ye.prototype,"hoverValue",2);m([M()],Ye.prototype,"isHovering",2);m([v()],Ye.prototype,"label",2);m([v({type:Number})],Ye.prototype,"value",2);m([v({type:Number})],Ye.prototype,"max",2);m([v({type:Number})],Ye.prototype,"precision",2);m([v({type:Boolean,reflect:!0})],Ye.prototype,"readonly",2);m([v({type:Boolean,reflect:!0})],Ye.prototype,"disabled",2);m([v()],Ye.prototype,"getSymbol",2);m([ac({passive:!0})],Ye.prototype,"handleTouchMove",1);m([R("hoverValue")],Ye.prototype,"handleHoverValueChange",1);m([R("isHovering")],Ye.prototype,"handleIsHoveringChange",1);Ye.define("sl-rating");var _y=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],Bo=class extends Z{constructor(){super(...arguments),this.localize=new Tt(this),this.isoTime="",this.relativeTime="",this.titleTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const e=new Date,t=new Date(this.date);if(isNaN(t.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const r=t.getTime()-e.getTime(),{unit:o,value:i}=_y.find(s=>Math.abs(r)<s.max);if(this.isoTime=t.toISOString(),this.titleTime=this.localize.date(t,{month:"long",year:"numeric",day:"numeric",hour:"numeric",minute:"numeric",timeZoneName:"short"}),this.relativeTime=this.localize.relativeTime(Math.round(r/i),o,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let s;o==="minute"?s=kn("second"):o==="hour"?s=kn("minute"):o==="day"?s=kn("hour"):s=kn("day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),s)}return $` <time datetime=${this.isoTime} title=${this.titleTime}>${this.relativeTime}</time> `}};m([M()],Bo.prototype,"isoTime",2);m([M()],Bo.prototype,"relativeTime",2);m([M()],Bo.prototype,"titleTime",2);m([v()],Bo.prototype,"date",2);m([v()],Bo.prototype,"format",2);m([v()],Bo.prototype,"numeric",2);m([v({type:Boolean})],Bo.prototype,"sync",2);function kn(e){const r={second:1e3,minute:6e4,hour:36e5,day:864e5}[e];return r-Date.now()%r}Bo.define("sl-relative-time");var xy=F`
  :host {
    display: inline-block;
  }
`;let Yp=null;class Hp{}Hp.render=function(e,t){Yp(e,t)};self.QrCreator=Hp;(function(e){function t(a,l,h,p){var u={},f=e(h,l);f.u(a),f.J(),p=p||0;var g=f.h(),b=f.h()+2*p;return u.text=a,u.level=l,u.version=h,u.O=b,u.a=function(y,w){return y-=p,w-=p,0>y||y>=g||0>w||w>=g?!1:f.a(y,w)},u}function r(a,l,h,p,u,f,g,b,y,w){function _(x,T,C,k,D,S,O){x?(a.lineTo(T+S,C+O),a.arcTo(T,C,k,D,f)):a.lineTo(T,C)}g?a.moveTo(l+f,h):a.moveTo(l,h),_(b,p,h,p,u,-f,0),_(y,p,u,l,u,0,-f),_(w,l,u,l,h,f,0),_(g,l,h,p,h,0,f)}function o(a,l,h,p,u,f,g,b,y,w){function _(x,T,C,k){a.moveTo(x+C,T),a.lineTo(x,T),a.lineTo(x,T+k),a.arcTo(x,T,x+C,T,f)}g&&_(l,h,f,f),b&&_(p,h,-f,f),y&&_(p,u,-f,-f),w&&_(l,u,f,-f)}function i(a,l){var h=l.fill;if(typeof h=="string")a.fillStyle=h;else{var p=h.type,u=h.colorStops;if(h=h.position.map(g=>Math.round(g*l.size)),p==="linear-gradient")var f=a.createLinearGradient.apply(a,h);else if(p==="radial-gradient")f=a.createRadialGradient.apply(a,h);else throw Error("Unsupported fill");u.forEach(([g,b])=>{f.addColorStop(g,b)}),a.fillStyle=f}}function s(a,l){t:{var h=l.text,p=l.v,u=l.N,f=l.K,g=l.P;for(u=Math.max(1,u||1),f=Math.min(40,f||40);u<=f;u+=1)try{var b=t(h,p,u,g);break t}catch{}b=void 0}if(!b)return null;for(h=a.getContext("2d"),l.background&&(h.fillStyle=l.background,h.fillRect(l.left,l.top,l.size,l.size)),p=b.O,f=l.size/p,h.beginPath(),g=0;g<p;g+=1)for(u=0;u<p;u+=1){var y=h,w=l.left+u*f,_=l.top+g*f,x=g,T=u,C=b.a,k=w+f,D=_+f,S=x-1,O=x+1,I=T-1,P=T+1,X=Math.floor(Math.min(.5,Math.max(0,l.R))*f),W=C(x,T),V=C(S,I),q=C(S,T);S=C(S,P);var z=C(x,P);P=C(O,P),T=C(O,T),O=C(O,I),x=C(x,I),w=Math.round(w),_=Math.round(_),k=Math.round(k),D=Math.round(D),W?r(y,w,_,k,D,X,!q&&!x,!q&&!z,!T&&!z,!T&&!x):o(y,w,_,k,D,X,q&&x&&V,q&&z&&S,T&&z&&P,T&&x&&O)}return i(h,l),h.fill(),a}var n={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};Yp=function(a,l){var h={};Object.assign(h,n,a),h.N=h.minVersion,h.K=h.maxVersion,h.v=h.ecLevel,h.left=h.left,h.top=h.top,h.size=h.size,h.fill=h.fill,h.background=h.background,h.text=h.text,h.R=h.radius,h.P=h.quiet,l instanceof HTMLCanvasElement?((l.width!==h.size||l.height!==h.size)&&(l.width=h.size,l.height=h.size),l.getContext("2d").clearRect(0,0,l.width,l.height),s(l,h)):(a=document.createElement("canvas"),a.width=h.size,a.height=h.size,h=s(a,h),l.appendChild(h))}})(function(){function e(l){var h=r.s(l);return{S:function(){return 4},b:function(){return h.length},write:function(p){for(var u=0;u<h.length;u+=1)p.put(h[u],8)}}}function t(){var l=[],h=0,p={B:function(){return l},c:function(u){return(l[Math.floor(u/8)]>>>7-u%8&1)==1},put:function(u,f){for(var g=0;g<f;g+=1)p.m((u>>>f-g-1&1)==1)},f:function(){return h},m:function(u){var f=Math.floor(h/8);l.length<=f&&l.push(0),u&&(l[f]|=128>>>h%8),h+=1}};return p}function r(l,h){function p(x,T){for(var C=-1;7>=C;C+=1)if(!(-1>=x+C||b<=x+C))for(var k=-1;7>=k;k+=1)-1>=T+k||b<=T+k||(g[x+C][T+k]=0<=C&&6>=C&&(k==0||k==6)||0<=k&&6>=k&&(C==0||C==6)||2<=C&&4>=C&&2<=k&&4>=k)}function u(x,T){for(var C=b=4*l+17,k=Array(C),D=0;D<C;D+=1){k[D]=Array(C);for(var S=0;S<C;S+=1)k[D][S]=null}for(g=k,p(0,0),p(b-7,0),p(0,b-7),C=s.G(l),k=0;k<C.length;k+=1)for(D=0;D<C.length;D+=1){S=C[k];var O=C[D];if(g[S][O]==null)for(var I=-2;2>=I;I+=1)for(var P=-2;2>=P;P+=1)g[S+I][O+P]=I==-2||I==2||P==-2||P==2||I==0&&P==0}for(C=8;C<b-8;C+=1)g[C][6]==null&&(g[C][6]=C%2==0);for(C=8;C<b-8;C+=1)g[6][C]==null&&(g[6][C]=C%2==0);for(C=s.w(f<<3|T),k=0;15>k;k+=1)D=!x&&(C>>k&1)==1,g[6>k?k:8>k?k+1:b-15+k][8]=D,g[8][8>k?b-k-1:9>k?15-k:14-k]=D;if(g[b-8][8]=!x,7<=l){for(C=s.A(l),k=0;18>k;k+=1)D=!x&&(C>>k&1)==1,g[Math.floor(k/3)][k%3+b-8-3]=D;for(k=0;18>k;k+=1)D=!x&&(C>>k&1)==1,g[k%3+b-8-3][Math.floor(k/3)]=D}if(y==null){for(x=a.I(l,f),C=t(),k=0;k<w.length;k+=1)D=w[k],C.put(4,4),C.put(D.b(),s.f(4,l)),D.write(C);for(k=D=0;k<x.length;k+=1)D+=x[k].j;if(C.f()>8*D)throw Error("code length overflow. ("+C.f()+">"+8*D+")");for(C.f()+4<=8*D&&C.put(0,4);C.f()%8!=0;)C.m(!1);for(;!(C.f()>=8*D)&&(C.put(236,8),!(C.f()>=8*D));)C.put(17,8);var X=0;for(D=k=0,S=Array(x.length),O=Array(x.length),I=0;I<x.length;I+=1){var W=x[I].j,V=x[I].o-W;for(k=Math.max(k,W),D=Math.max(D,V),S[I]=Array(W),P=0;P<S[I].length;P+=1)S[I][P]=255&C.B()[P+X];for(X+=W,P=s.C(V),W=o(S[I],P.b()-1).l(P),O[I]=Array(P.b()-1),P=0;P<O[I].length;P+=1)V=P+W.b()-O[I].length,O[I][P]=0<=V?W.c(V):0}for(P=C=0;P<x.length;P+=1)C+=x[P].o;for(C=Array(C),P=X=0;P<k;P+=1)for(I=0;I<x.length;I+=1)P<S[I].length&&(C[X]=S[I][P],X+=1);for(P=0;P<D;P+=1)for(I=0;I<x.length;I+=1)P<O[I].length&&(C[X]=O[I][P],X+=1);y=C}for(x=y,C=-1,k=b-1,D=7,S=0,T=s.F(T),O=b-1;0<O;O-=2)for(O==6&&--O;;){for(I=0;2>I;I+=1)g[k][O-I]==null&&(P=!1,S<x.length&&(P=(x[S]>>>D&1)==1),T(k,O-I)&&(P=!P),g[k][O-I]=P,--D,D==-1&&(S+=1,D=7));if(k+=C,0>k||b<=k){k-=C,C=-C;break}}}var f=i[h],g=null,b=0,y=null,w=[],_={u:function(x){x=e(x),w.push(x),y=null},a:function(x,T){if(0>x||b<=x||0>T||b<=T)throw Error(x+","+T);return g[x][T]},h:function(){return b},J:function(){for(var x=0,T=0,C=0;8>C;C+=1){u(!0,C);var k=s.D(_);(C==0||x>k)&&(x=k,T=C)}u(!1,T)}};return _}function o(l,h){if(typeof l.length>"u")throw Error(l.length+"/"+h);var p=function(){for(var f=0;f<l.length&&l[f]==0;)f+=1;for(var g=Array(l.length-f+h),b=0;b<l.length-f;b+=1)g[b]=l[b+f];return g}(),u={c:function(f){return p[f]},b:function(){return p.length},multiply:function(f){for(var g=Array(u.b()+f.b()-1),b=0;b<u.b();b+=1)for(var y=0;y<f.b();y+=1)g[b+y]^=n.i(n.g(u.c(b))+n.g(f.c(y)));return o(g,0)},l:function(f){if(0>u.b()-f.b())return u;for(var g=n.g(u.c(0))-n.g(f.c(0)),b=Array(u.b()),y=0;y<u.b();y+=1)b[y]=u.c(y);for(y=0;y<f.b();y+=1)b[y]^=n.i(n.g(f.c(y))+g);return o(b,0).l(f)}};return u}r.s=function(l){for(var h=[],p=0;p<l.length;p++){var u=l.charCodeAt(p);128>u?h.push(u):2048>u?h.push(192|u>>6,128|u&63):55296>u||57344<=u?h.push(224|u>>12,128|u>>6&63,128|u&63):(p++,u=65536+((u&1023)<<10|l.charCodeAt(p)&1023),h.push(240|u>>18,128|u>>12&63,128|u>>6&63,128|u&63))}return h};var i={L:1,M:0,Q:3,H:2},s=function(){function l(u){for(var f=0;u!=0;)f+=1,u>>>=1;return f}var h=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],p={w:function(u){for(var f=u<<10;0<=l(f)-l(1335);)f^=1335<<l(f)-l(1335);return(u<<10|f)^21522},A:function(u){for(var f=u<<12;0<=l(f)-l(7973);)f^=7973<<l(f)-l(7973);return u<<12|f},G:function(u){return h[u-1]},F:function(u){switch(u){case 0:return function(f,g){return(f+g)%2==0};case 1:return function(f){return f%2==0};case 2:return function(f,g){return g%3==0};case 3:return function(f,g){return(f+g)%3==0};case 4:return function(f,g){return(Math.floor(f/2)+Math.floor(g/3))%2==0};case 5:return function(f,g){return f*g%2+f*g%3==0};case 6:return function(f,g){return(f*g%2+f*g%3)%2==0};case 7:return function(f,g){return(f*g%3+(f+g)%2)%2==0};default:throw Error("bad maskPattern:"+u)}},C:function(u){for(var f=o([1],0),g=0;g<u;g+=1)f=f.multiply(o([1,n.i(g)],0));return f},f:function(u,f){if(u!=4||1>f||40<f)throw Error("mode: "+u+"; type: "+f);return 10>f?8:16},D:function(u){for(var f=u.h(),g=0,b=0;b<f;b+=1)for(var y=0;y<f;y+=1){for(var w=0,_=u.a(b,y),x=-1;1>=x;x+=1)if(!(0>b+x||f<=b+x))for(var T=-1;1>=T;T+=1)0>y+T||f<=y+T||(x!=0||T!=0)&&_==u.a(b+x,y+T)&&(w+=1);5<w&&(g+=3+w-5)}for(b=0;b<f-1;b+=1)for(y=0;y<f-1;y+=1)w=0,u.a(b,y)&&(w+=1),u.a(b+1,y)&&(w+=1),u.a(b,y+1)&&(w+=1),u.a(b+1,y+1)&&(w+=1),(w==0||w==4)&&(g+=3);for(b=0;b<f;b+=1)for(y=0;y<f-6;y+=1)u.a(b,y)&&!u.a(b,y+1)&&u.a(b,y+2)&&u.a(b,y+3)&&u.a(b,y+4)&&!u.a(b,y+5)&&u.a(b,y+6)&&(g+=40);for(y=0;y<f;y+=1)for(b=0;b<f-6;b+=1)u.a(b,y)&&!u.a(b+1,y)&&u.a(b+2,y)&&u.a(b+3,y)&&u.a(b+4,y)&&!u.a(b+5,y)&&u.a(b+6,y)&&(g+=40);for(y=w=0;y<f;y+=1)for(b=0;b<f;b+=1)u.a(b,y)&&(w+=1);return g+=Math.abs(100*w/f/f-50)/5*10}};return p}(),n=function(){for(var l=Array(256),h=Array(256),p=0;8>p;p+=1)l[p]=1<<p;for(p=8;256>p;p+=1)l[p]=l[p-4]^l[p-5]^l[p-6]^l[p-8];for(p=0;255>p;p+=1)h[l[p]]=p;return{g:function(u){if(1>u)throw Error("glog("+u+")");return h[u]},i:function(u){for(;0>u;)u+=255;for(;256<=u;)u-=255;return l[u]}}}(),a=function(){function l(u,f){switch(f){case i.L:return h[4*(u-1)];case i.M:return h[4*(u-1)+1];case i.Q:return h[4*(u-1)+2];case i.H:return h[4*(u-1)+3]}}var h=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],p={I:function(u,f){var g=l(u,f);if(typeof g>"u")throw Error("bad rs block @ typeNumber:"+u+"/errorCorrectLevel:"+f);u=g.length/3,f=[];for(var b=0;b<u;b+=1)for(var y=g[3*b],w=g[3*b+1],_=g[3*b+2],x=0;x<y;x+=1){var T=_,C={};C.o=w,C.j=T,f.push(C)}return f}};return p}();return r}());const Cy=QrCreator;var Mr=class extends Z{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&Cy.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas)}render(){var e;return $`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((e=this.label)==null?void 0:e.length)>0?this.label:this.value}
        style=${rr({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};Mr.styles=[J,xy];m([B("canvas")],Mr.prototype,"canvas",2);m([v()],Mr.prototype,"value",2);m([v()],Mr.prototype,"label",2);m([v({type:Number})],Mr.prototype,"size",2);m([v()],Mr.prototype,"fill",2);m([v()],Mr.prototype,"background",2);m([v({type:Number})],Mr.prototype,"radius",2);m([v({attribute:"error-correction"})],Mr.prototype,"errorCorrection",2);m([R(["background","errorCorrection","fill","radius","size","value"])],Mr.prototype,"generate",1);Mr.define("sl-qr-code");var Ty=F`
  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }
`,to=class extends Z{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return $`
      <span
        part="base"
        class=${tt({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?$` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};to.styles=[J,Ty];to.dependencies={"sl-icon":Rt};m([M()],to.prototype,"checked",2);m([M()],to.prototype,"hasFocus",2);m([v()],to.prototype,"value",2);m([v({reflect:!0})],to.prototype,"size",2);m([v({type:Boolean,reflect:!0})],to.prototype,"disabled",2);m([R("checked")],to.prototype,"handleCheckedChange",1);m([R("disabled",{waitUntilFirstUpdate:!0})],to.prototype,"handleDisabledChange",1);to.define("sl-radio");St.define("sl-popup");var ky=F`
  :host {
    display: contents;
  }
`,eo=class extends Z{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=e=>{this.emit("sl-mutation",{detail:{mutationList:e}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const e=typeof this.attr=="string"&&this.attr.length>0,t=e&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:e,attributeFilter:t,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return $` <slot></slot> `}};eo.styles=[J,ky];m([v({reflect:!0})],eo.prototype,"attr",2);m([v({attribute:"attr-old-value",type:Boolean,reflect:!0})],eo.prototype,"attrOldValue",2);m([v({attribute:"char-data",type:Boolean,reflect:!0})],eo.prototype,"charData",2);m([v({attribute:"char-data-old-value",type:Boolean,reflect:!0})],eo.prototype,"charDataOldValue",2);m([v({attribute:"child-list",type:Boolean,reflect:!0})],eo.prototype,"childList",2);m([v({type:Boolean,reflect:!0})],eo.prototype,"disabled",2);m([R("disabled")],eo.prototype,"handleDisabledChange",1);m([R("attr",{waitUntilFirstUpdate:!0}),R("attr-old-value",{waitUntilFirstUpdate:!0}),R("char-data",{waitUntilFirstUpdate:!0}),R("char-data-old-value",{waitUntilFirstUpdate:!0}),R("childList",{waitUntilFirstUpdate:!0})],eo.prototype,"handleChange",1);eo.define("sl-mutation-observer");var $y=F`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const As=(e,t)=>{const r=e._$AN;if(r===void 0)return!1;for(const o of r)o._$AO?.(t,!1),As(o,t);return!0},ca=e=>{let t,r;do{if((t=e._$AM)===void 0)break;r=t._$AN,r.delete(e),e=t}while(r?.size===0)},qp=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(r===void 0)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),Sy(t)}};function Ey(e){this._$AN!==void 0?(ca(this),this._$AM=e,qp(this)):this._$AM=e}function Dy(e,t=!1,r=0){const o=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(o))for(let s=r;s<o.length;s++)As(o[s],!1),ca(o[s]);else o!=null&&(As(o,!1),ca(o));else As(this,e)}const Sy=e=>{e.type==Er.CHILD&&(e._$AP??=Dy,e._$AQ??=Ey)};class Iy extends is{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,r,o){super._$AT(t,r,o),qp(this),this.isConnected=t._$AU}_$AO(t,r=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),r&&(As(this,t),ca(this))}setValue(t){if(ip(this._$Ct))this._$Ct._$AI(t,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=t,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oy=()=>new Ay;class Ay{}const sl=new WeakMap,zy=os(class extends Iy{render(e){return bt}update(e,[t]){const r=t!==this.Y;return r&&this.Y!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),bt}rt(e){if(typeof this.Y=="function"){const t=this.ht??globalThis;let r=sl.get(t);r===void 0&&(r=new WeakMap,sl.set(t,r)),r.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),r.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){return typeof this.Y=="function"?sl.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var My=class{constructor(e,t,r){this.popupRef=Oy(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=o=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${o.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${o.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=o=>{switch(o.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":o.target!==this.host&&(o.preventDefault(),o.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(o);break}},this.handleClick=o=>{var i;o.target===this.host?(o.preventDefault(),o.stopPropagation()):o.target instanceof Element&&(o.target.tagName==="sl-menu-item"||(i=o.target.role)!=null&&i.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=o=>{o.relatedTarget&&o.relatedTarget instanceof Element&&this.host.contains(o.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=o=>{o.stopPropagation()},this.handlePopupReposition=()=>{const o=this.host.renderRoot.querySelector("slot[name='submenu']"),i=o?.assignedElements({flatten:!0}).filter(p=>p.localName==="sl-menu")[0],s=this.localize.dir()==="rtl";if(!i)return;const{left:n,top:a,width:l,height:h}=i.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${s?n+l:n}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${a}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${s?n+l:n}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${a+h}px`)},(this.host=e).addController(this),this.hasSlotController=t,this.localize=r}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(e){const t=this.host.renderRoot.querySelector("slot[name='submenu']");if(!t){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let r=null;for(const o of t.assignedElements())if(r=o.querySelectorAll("sl-menu-item, [role^='menuitem']"),r.length!==0)break;if(!(!r||r.length===0)){r[0].setAttribute("tabindex","0");for(let o=1;o!==r.length;++o)r[o].setAttribute("tabindex","-1");this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?r[0]instanceof HTMLElement&&r[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{r[0]instanceof HTMLElement&&r[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,this.host.requestUpdate())}enableSubmenu(e=!0){e?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var e;if(!((e=this.host.parentElement)!=null&&e.computedStyleMap))return;const t=this.host.parentElement.computedStyleMap(),o=["padding-top","border-top-width","margin-top"].reduce((i,s)=>{var n;const a=(n=t.get(s))!=null?n:new CSSUnitValue(0,"px"),h=(a instanceof CSSUnitValue?a:new CSSUnitValue(0,"px")).to("px");return i-h.value},0);this.skidding=o}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const e=this.localize.dir()==="ltr";return this.isConnected?$`
      <sl-popup
        ${zy(this.popupRef)}
        placement=${e?"right-start":"left-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:$` <slot name="submenu" hidden></slot> `}},yr=class extends Z{constructor(){super(...arguments),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.localize=new Tt(this),this.hasSlotController=new Xe(this,"submenu"),this.submenuController=new My(this,this.hasSlotController,this.localize),this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleMouseOver=e=>{this.focus(),e.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return Lm(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const e=this.localize.dir()==="rtl",t=this.submenuController.isExpanded();return $`
      <div
        id="anchor"
        part="base"
        class=${tt({"menu-item":!0,"menu-item--rtl":e,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":t})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!t}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${e?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?$` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};yr.styles=[J,$y];yr.dependencies={"sl-icon":Rt,"sl-popup":St,"sl-spinner":ln};m([B("slot:not([name])")],yr.prototype,"defaultSlot",2);m([B(".menu-item")],yr.prototype,"menuItem",2);m([v()],yr.prototype,"type",2);m([v({type:Boolean,reflect:!0})],yr.prototype,"checked",2);m([v()],yr.prototype,"value",2);m([v({type:Boolean,reflect:!0})],yr.prototype,"loading",2);m([v({type:Boolean,reflect:!0})],yr.prototype,"disabled",2);m([R("checked")],yr.prototype,"handleCheckedChange",1);m([R("disabled")],yr.prototype,"handleDisabledChange",1);m([R("type")],yr.prototype,"handleTypeChange",1);yr.define("sl-menu-item");var Py=F`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,rd=class extends Z{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(e){const t=["menuitem","menuitemcheckbox"],r=e.composedPath().find(i=>{var s;return t.includes(((s=i?.getAttribute)==null?void 0:s.call(i,"role"))||"")});if(!r)return;const o=r;o.type==="checkbox"&&(o.checked=!o.checked),this.emit("sl-select",{detail:{item:o}})}handleKeyDown(e){if(e.key==="Enter"||e.key===" "){const t=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),t?.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems(),r=this.getCurrentItem();let o=r?t.indexOf(r):0;t.length>0&&(e.preventDefault(),e.stopPropagation(),e.key==="ArrowDown"?o++:e.key==="ArrowUp"?o--:e.key==="Home"?o=0:e.key==="End"&&(o=t.length-1),o<0&&(o=t.length-1),o>t.length-1&&(o=0),this.setCurrentItem(t[o]),t[o].focus())}}handleMouseDown(e){const t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){const e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){var t;return e.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((t=e.getAttribute("role"))!=null?t:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){this.getAllItems().forEach(r=>{r.setAttribute("tabindex",r===e?"0":"-1")})}render(){return $`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};rd.styles=[J,Py];m([B("slot")],rd.prototype,"defaultSlot",2);rd.define("sl-menu");var Fy=F`
  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
    -webkit-user-select: none;
  }
`,Wp=class extends Z{render(){return $` <slot part="base" class="menu-label"></slot> `}};Wp.styles=[J,Fy];Wp.define("sl-menu-label");var Ly=F`
  :host {
    display: block;
  }
`,nl=new Map;function Ry(e,t="cors"){const r=nl.get(e);if(r!==void 0)return Promise.resolve(r);const o=fetch(e,{mode:t}).then(async i=>{const s={ok:i.ok,status:i.status,html:await i.text()};return nl.set(e,s),s});return nl.set(e,o),o}var ds=class extends Z{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(e){const t=document.createElement("script");[...e.attributes].forEach(r=>t.setAttribute(r.name,r.value)),t.textContent=e.textContent,e.parentNode.replaceChild(t,e)}async handleSrcChange(){try{const e=this.src,t=await Ry(e,this.mode);if(e!==this.src)return;if(!t.ok){this.emit("sl-error",{detail:{status:t.status}});return}this.innerHTML=t.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(r=>this.executeScript(r)),this.emit("sl-load")}catch{this.emit("sl-error",{detail:{status:-1}})}}render(){return $`<slot></slot>`}};ds.styles=[J,Ly];m([v()],ds.prototype,"src",2);m([v()],ds.prototype,"mode",2);m([v({attribute:"allow-scripts",type:Boolean})],ds.prototype,"allowScripts",2);m([R("src")],ds.prototype,"handleSrcChange",1);ds.define("sl-include");var Ny=F`
  :host {
    --divider-width: 2px;
    --handle-size: 2.5rem;

    display: inline-block;
    position: relative;
  }

  .image-comparer {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .image-comparer__before,
  .image-comparer__after {
    display: block;
    pointer-events: none;
  }

  .image-comparer__before::slotted(img),
  .image-comparer__after::slotted(img),
  .image-comparer__before::slotted(svg),
  .image-comparer__after::slotted(svg) {
    display: block;
    max-width: 100% !important;
    height: auto;
  }

  .image-comparer__after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .image-comparer__divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--sl-color-neutral-0);
    translate: calc(var(--divider-width) / -2);
    cursor: ew-resize;
  }

  .image-comparer__handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: var(--sl-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.5);
    color: var(--sl-color-neutral-700);
    cursor: inherit;
    z-index: 10;
  }

  .image-comparer__handle:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,vi=class extends Z{constructor(){super(...arguments),this.localize=new Tt(this),this.position=50}handleDrag(e){const{width:t}=this.base.getBoundingClientRect(),r=this.localize.dir()==="rtl";e.preventDefault(),Os(this.base,{onMove:o=>{this.position=parseFloat(de(o/t*100,0,100).toFixed(2)),r&&(this.position=100-this.position)},initialEvent:e})}handleKeyDown(e){const t=this.localize.dir()==="ltr",r=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(e.key)){const o=e.shiftKey?10:1;let i=this.position;e.preventDefault(),(t&&e.key==="ArrowLeft"||r&&e.key==="ArrowRight")&&(i-=o),(t&&e.key==="ArrowRight"||r&&e.key==="ArrowLeft")&&(i+=o),e.key==="Home"&&(i=0),e.key==="End"&&(i=100),i=de(i,0,100),this.position=i}}handlePositionChange(){this.emit("sl-change")}render(){const e=this.localize.dir()==="rtl";return $`
      <div
        part="base"
        id="image-comparer"
        class=${tt({"image-comparer":!0,"image-comparer--rtl":e})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${rr({clipPath:e?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${rr({left:e?`${100-this.position}%`:`${this.position}%`})}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <div
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <slot name="handle">
              <sl-icon library="system" name="grip-vertical"></sl-icon>
            </slot>
          </div>
        </div>
      </div>
    `}};vi.styles=[J,Ny];vi.scopedElement={"sl-icon":Rt};m([B(".image-comparer")],vi.prototype,"base",2);m([B(".image-comparer__handle")],vi.prototype,"handle",2);m([v({type:Number,reflect:!0})],vi.prototype,"position",2);m([R("position",{waitUntilFirstUpdate:!0})],vi.prototype,"handlePositionChange",1);vi.define("sl-image-comparer");Rt.define("sl-icon");var Ba=class extends Z{constructor(){super(...arguments),this.localize=new Tt(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";const e=["","kilo","mega","giga","tera"],t=["","kilo","mega","giga","tera","peta"],r=this.unit==="bit"?e:t,o=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),r.length-1)),i=r[o]+this.unit,s=parseFloat((this.value/Math.pow(1e3,o)).toPrecision(3));return this.localize.number(s,{style:"unit",unit:i,unitDisplay:this.display})}};m([v({type:Number})],Ba.prototype,"value",2);m([v()],Ba.prototype,"unit",2);m([v()],Ba.prototype,"display",2);Ba.define("sl-format-bytes");var vr=class extends Z{constructor(){super(...arguments),this.localize=new Tt(this),this.date=new Date,this.hourFormat="auto"}render(){const e=new Date(this.date),t=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(e.getMilliseconds()))return $`
      <time datetime=${e.toISOString()}>
        ${this.localize.date(e,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:t})}
      </time>
    `}};m([v()],vr.prototype,"date",2);m([v()],vr.prototype,"weekday",2);m([v()],vr.prototype,"era",2);m([v()],vr.prototype,"year",2);m([v()],vr.prototype,"month",2);m([v()],vr.prototype,"day",2);m([v()],vr.prototype,"hour",2);m([v()],vr.prototype,"minute",2);m([v()],vr.prototype,"second",2);m([v({attribute:"time-zone-name"})],vr.prototype,"timeZoneName",2);m([v({attribute:"time-zone"})],vr.prototype,"timeZone",2);m([v({attribute:"hour-format"})],vr.prototype,"hourFormat",2);vr.define("sl-format-date");var Pr=class extends Z{constructor(){super(...arguments),this.localize=new Tt(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};m([v({type:Number})],Pr.prototype,"value",2);m([v()],Pr.prototype,"type",2);m([v({attribute:"no-grouping",type:Boolean})],Pr.prototype,"noGrouping",2);m([v()],Pr.prototype,"currency",2);m([v({attribute:"currency-display"})],Pr.prototype,"currencyDisplay",2);m([v({attribute:"minimum-integer-digits",type:Number})],Pr.prototype,"minimumIntegerDigits",2);m([v({attribute:"minimum-fraction-digits",type:Number})],Pr.prototype,"minimumFractionDigits",2);m([v({attribute:"maximum-fraction-digits",type:Number})],Pr.prototype,"maximumFractionDigits",2);m([v({attribute:"minimum-significant-digits",type:Number})],Pr.prototype,"minimumSignificantDigits",2);m([v({attribute:"maximum-significant-digits",type:Number})],Pr.prototype,"maximumSignificantDigits",2);Pr.define("sl-format-number");var By=F`
  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,Ua=class extends Z{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};Ua.styles=[J,By];m([v({type:Boolean,reflect:!0})],Ua.prototype,"vertical",2);m([R("vertical")],Ua.prototype,"handleVerticalChange",1);Ua.define("sl-divider");var Uy=F`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,Ue=class extends Z{constructor(){super(...arguments),this.localize=new Tt(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var t;if(e.key==="Escape"&&this.open&&!this.closeWatcher){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var r,o,i;const s=((r=this.containingElement)==null?void 0:r.getRootNode())instanceof ShadowRoot?(i=(o=document.activeElement)==null?void 0:o.shadowRoot)==null?void 0:i.activeElement:document.activeElement;(!this.containingElement||s?.closest(this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof e?.focus=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const r=t.getAllItems(),o=r[0],i=r[r.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),r.length>0&&this.updateComplete.then(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(o),o.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(i),i.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(o=>rb(o).start);let r;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":r=t.button;break;default:r=t}r.setAttribute("aria-haspopup","true"),r.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,Ke(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Ke(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var e;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var e;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await ue(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=Wt(this,"dropdown.show",{dir:this.localize.dir()});await oe(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await ue(this);const{keyframes:e,options:t}=Wt(this,"dropdown.hide",{dir:this.localize.dir()});await oe(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return $`
      <sl-popup
        part="base"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${G(this.sync?this.sync:void 0)}
        class=${tt({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};Ue.styles=[J,Uy];Ue.dependencies={"sl-popup":St};m([B(".dropdown")],Ue.prototype,"popup",2);m([B(".dropdown__trigger")],Ue.prototype,"trigger",2);m([B(".dropdown__panel")],Ue.prototype,"panel",2);m([v({type:Boolean,reflect:!0})],Ue.prototype,"open",2);m([v({reflect:!0})],Ue.prototype,"placement",2);m([v({type:Boolean,reflect:!0})],Ue.prototype,"disabled",2);m([v({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],Ue.prototype,"stayOpenOnSelect",2);m([v({attribute:!1})],Ue.prototype,"containingElement",2);m([v({type:Number})],Ue.prototype,"distance",2);m([v({type:Number})],Ue.prototype,"skidding",2);m([v({type:Boolean})],Ue.prototype,"hoist",2);m([v({reflect:!0})],Ue.prototype,"sync",2);m([R("open",{waitUntilFirstUpdate:!0})],Ue.prototype,"handleOpenChange",1);It("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});It("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});Ue.define("sl-dropdown");var Vy=F`
  :host {
    --error-color: var(--sl-color-danger-600);
    --success-color: var(--sl-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`,$e=class extends Z{constructor(){super(...arguments),this.localize=new Tt(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let e=this.value;if(this.from){const t=this.getRootNode(),r=this.from.includes("."),o=this.from.includes("[")&&this.from.includes("]");let i=this.from,s="";r?[i,s]=this.from.trim().split("."):o&&([i,s]=this.from.trim().replace(/\]$/,"").split("["));const n="getElementById"in t?t.getElementById(i):null;n?o?e=n.getAttribute(s)||"":r?e=n[s]||"":e=n.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!e)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(e),this.showStatus("success"),this.emit("sl-copy",{detail:{value:e}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(e){const t=this.copyLabel||this.localize.term("copy"),r=this.successLabel||this.localize.term("copied"),o=this.errorLabel||this.localize.term("error"),i=e==="success"?this.successIcon:this.errorIcon,s=Wt(this,"copy.in",{dir:"ltr"}),n=Wt(this,"copy.out",{dir:"ltr"});this.tooltip.content=e==="success"?r:o,await this.copyIcon.animate(n.keyframes,n.options).finished,this.copyIcon.hidden=!0,this.status=e,i.hidden=!1,await i.animate(s.keyframes,s.options).finished,setTimeout(async()=>{await i.animate(n.keyframes,n.options).finished,i.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(s.keyframes,s.options).finished,this.tooltip.content=t,this.isCopying=!1},this.feedbackDuration)}render(){const e=this.copyLabel||this.localize.term("copy");return $`
      <sl-tooltip
        class=${tt({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error"})}
        content=${e}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base,
          base__popup:tooltip__base__popup,
          base__arrow:tooltip__base__arrow,
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <sl-icon library="system" name="copy"></sl-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <sl-icon library="system" name="check"></sl-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <sl-icon library="system" name="x-lg"></sl-icon>
          </slot>
        </button>
      </sl-tooltip>
    `}};$e.styles=[J,Vy];$e.dependencies={"sl-icon":Rt,"sl-tooltip":ke};m([B('slot[name="copy-icon"]')],$e.prototype,"copyIcon",2);m([B('slot[name="success-icon"]')],$e.prototype,"successIcon",2);m([B('slot[name="error-icon"]')],$e.prototype,"errorIcon",2);m([B("sl-tooltip")],$e.prototype,"tooltip",2);m([M()],$e.prototype,"isCopying",2);m([M()],$e.prototype,"status",2);m([v()],$e.prototype,"value",2);m([v()],$e.prototype,"from",2);m([v({type:Boolean,reflect:!0})],$e.prototype,"disabled",2);m([v({attribute:"copy-label"})],$e.prototype,"copyLabel",2);m([v({attribute:"success-label"})],$e.prototype,"successLabel",2);m([v({attribute:"error-label"})],$e.prototype,"errorLabel",2);m([v({attribute:"feedback-duration",type:Number})],$e.prototype,"feedbackDuration",2);m([v({attribute:"tooltip-placement"})],$e.prototype,"tooltipPlacement",2);m([v({type:Boolean})],$e.prototype,"hoist",2);It("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});It("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});$e.define("sl-copy-button");var jy=F`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,ro=class extends Z{constructor(){super(...arguments),this.hasSlotController=new Xe(this,"footer"),this.localize=new Tt(this),this.modal=new Ap(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Ds(this))}disconnectedCallback(){var e;super.disconnectedCallback(),this.modal.deactivate(),Ss(this),(e=this.closeWatcher)==null||e.destroy()}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const r=Wt(this,"dialog.denyClose",{dir:this.localize.dir()});oe(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Ds(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([ue(this.dialog),ue(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=Wt(this,"dialog.show",{dir:this.localize.dir()}),r=Wt(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([oe(this.panel,t.keyframes,t.options),oe(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([ue(this.dialog),ue(this.overlay)]);const e=Wt(this,"dialog.hide",{dir:this.localize.dir()}),t=Wt(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([oe(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),oe(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Ss(this);const r=this.originalTrigger;typeof r?.focus=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,Ke(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Ke(this,"sl-after-hide")}render(){return $`
      <div
        part="base"
        class=${tt({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${G(this.noHeader?this.label:void 0)}
          aria-labelledby=${G(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":$`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};ro.styles=[J,jy];ro.dependencies={"sl-icon-button":ye};m([B(".dialog")],ro.prototype,"dialog",2);m([B(".dialog__panel")],ro.prototype,"panel",2);m([B(".dialog__overlay")],ro.prototype,"overlay",2);m([v({type:Boolean,reflect:!0})],ro.prototype,"open",2);m([v({reflect:!0})],ro.prototype,"label",2);m([v({attribute:"no-header",type:Boolean,reflect:!0})],ro.prototype,"noHeader",2);m([R("open",{waitUntilFirstUpdate:!0})],ro.prototype,"handleOpenChange",1);It("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});It("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});It("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});It("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});It("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});ro.define("sl-dialog");ve.define("sl-checkbox");var Yy=F`
  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
    -webkit-user-select: none;
  }

  .color-picker--inline {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--sl-transition-fast) scale;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    scale: 1.5;
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--sl-border-radius-circle);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
    forced-color-adjust: none;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--sl-color-primary-500);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button-group {
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__user-input sl-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--sl-color-neutral-200);
    padding: var(--sl-spacing-small);
    forced-color-adjust: none;
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--sl-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position:
      0 0,
      0 0,
      -5px -5px,
      5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    forced-color-adjust: none;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow:
      inset 0 0 0 2px var(--sl-input-border-color),
      inset 0 0 0 4px var(--sl-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;function Ne(e,t){Hy(e)&&(e="100%");const r=qy(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),r&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(t===360?e=(e<0?e%t+t:e%t)/parseFloat(String(t)):e=e%t/parseFloat(String(t)),e)}function $n(e){return Math.min(1,Math.max(0,e))}function Hy(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function qy(e){return typeof e=="string"&&e.indexOf("%")!==-1}function Gp(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function En(e){return Number(e)<=1?`${Number(e)*100}%`:e}function Ko(e){return e.length===1?"0"+e:String(e)}function Wy(e,t,r){return{r:Ne(e,255)*255,g:Ne(t,255)*255,b:Ne(r,255)*255}}function kh(e,t,r){e=Ne(e,255),t=Ne(t,255),r=Ne(r,255);const o=Math.max(e,t,r),i=Math.min(e,t,r);let s=0,n=0;const a=(o+i)/2;if(o===i)n=0,s=0;else{const l=o-i;switch(n=a>.5?l/(2-o-i):l/(o+i),o){case e:s=(t-r)/l+(t<r?6:0);break;case t:s=(r-e)/l+2;break;case r:s=(e-t)/l+4;break}s/=6}return{h:s,s:n,l:a}}function al(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+(t-e)*(6*r):r<1/2?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function Gy(e,t,r){let o,i,s;if(e=Ne(e,360),t=Ne(t,100),r=Ne(r,100),t===0)i=r,s=r,o=r;else{const n=r<.5?r*(1+t):r+t-r*t,a=2*r-n;o=al(a,n,e+1/3),i=al(a,n,e),s=al(a,n,e-1/3)}return{r:o*255,g:i*255,b:s*255}}function $h(e,t,r){e=Ne(e,255),t=Ne(t,255),r=Ne(r,255);const o=Math.max(e,t,r),i=Math.min(e,t,r);let s=0;const n=o,a=o-i,l=o===0?0:a/o;if(o===i)s=0;else{switch(o){case e:s=(t-r)/a+(t<r?6:0);break;case t:s=(r-e)/a+2;break;case r:s=(e-t)/a+4;break}s/=6}return{h:s,s:l,v:n}}function Zy(e,t,r){e=Ne(e,360)*6,t=Ne(t,100),r=Ne(r,100);const o=Math.floor(e),i=e-o,s=r*(1-t),n=r*(1-i*t),a=r*(1-(1-i)*t),l=o%6,h=[r,n,s,s,a,r][l],p=[a,r,r,n,s,s][l],u=[s,s,a,r,r,n][l];return{r:h*255,g:p*255,b:u*255}}function Eh(e,t,r,o){const i=[Ko(Math.round(e).toString(16)),Ko(Math.round(t).toString(16)),Ko(Math.round(r).toString(16))];return o&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function Ky(e,t,r,o,i){const s=[Ko(Math.round(e).toString(16)),Ko(Math.round(t).toString(16)),Ko(Math.round(r).toString(16)),Ko(Xy(o))];return i&&s[0].startsWith(s[0].charAt(1))&&s[1].startsWith(s[1].charAt(1))&&s[2].startsWith(s[2].charAt(1))&&s[3].startsWith(s[3].charAt(1))?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0)+s[3].charAt(0):s.join("")}function Xy(e){return Math.round(parseFloat(e)*255).toString(16)}function Dh(e){return ar(e)/255}function ar(e){return parseInt(e,16)}function Qy(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}const tc={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Jy(e){let t={r:0,g:0,b:0},r=1,o=null,i=null,s=null,n=!1,a=!1;return typeof e=="string"&&(e=rv(e)),typeof e=="object"&&(so(e.r)&&so(e.g)&&so(e.b)?(t=Wy(e.r,e.g,e.b),n=!0,a=String(e.r).substr(-1)==="%"?"prgb":"rgb"):so(e.h)&&so(e.s)&&so(e.v)?(o=En(e.s),i=En(e.v),t=Zy(e.h,o,i),n=!0,a="hsv"):so(e.h)&&so(e.s)&&so(e.l)&&(o=En(e.s),s=En(e.l),t=Gy(e.h,o,s),n=!0,a="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(r=e.a)),r=Gp(r),{ok:n,format:e.format||a,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:r}}const tv="[-\\+]?\\d+%?",ev="[-\\+]?\\d*\\.\\d+%?",To="(?:"+ev+")|(?:"+tv+")",ll="[\\s|\\(]+("+To+")[,|\\s]+("+To+")[,|\\s]+("+To+")\\s*\\)?",cl="[\\s|\\(]+("+To+")[,|\\s]+("+To+")[,|\\s]+("+To+")[,|\\s]+("+To+")\\s*\\)?",kr={CSS_UNIT:new RegExp(To),rgb:new RegExp("rgb"+ll),rgba:new RegExp("rgba"+cl),hsl:new RegExp("hsl"+ll),hsla:new RegExp("hsla"+cl),hsv:new RegExp("hsv"+ll),hsva:new RegExp("hsva"+cl),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function rv(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;let t=!1;if(tc[e])e=tc[e],t=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let r=kr.rgb.exec(e);return r?{r:r[1],g:r[2],b:r[3]}:(r=kr.rgba.exec(e),r?{r:r[1],g:r[2],b:r[3],a:r[4]}:(r=kr.hsl.exec(e),r?{h:r[1],s:r[2],l:r[3]}:(r=kr.hsla.exec(e),r?{h:r[1],s:r[2],l:r[3],a:r[4]}:(r=kr.hsv.exec(e),r?{h:r[1],s:r[2],v:r[3]}:(r=kr.hsva.exec(e),r?{h:r[1],s:r[2],v:r[3],a:r[4]}:(r=kr.hex8.exec(e),r?{r:ar(r[1]),g:ar(r[2]),b:ar(r[3]),a:Dh(r[4]),format:t?"name":"hex8"}:(r=kr.hex6.exec(e),r?{r:ar(r[1]),g:ar(r[2]),b:ar(r[3]),format:t?"name":"hex"}:(r=kr.hex4.exec(e),r?{r:ar(r[1]+r[1]),g:ar(r[2]+r[2]),b:ar(r[3]+r[3]),a:Dh(r[4]+r[4]),format:t?"name":"hex8"}:(r=kr.hex3.exec(e),r?{r:ar(r[1]+r[1]),g:ar(r[2]+r[2]),b:ar(r[3]+r[3]),format:t?"name":"hex"}:!1)))))))))}function so(e){return!!kr.CSS_UNIT.exec(String(e))}class ee{constructor(t="",r={}){if(t instanceof ee)return t;typeof t=="number"&&(t=Qy(t)),this.originalInput=t;const o=Jy(t);this.originalInput=t,this.r=o.r,this.g=o.g,this.b=o.b,this.a=o.a,this.roundA=Math.round(100*this.a)/100,this.format=r.format??o.format,this.gradientType=r.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=o.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3}getLuminance(){const t=this.toRgb();let r,o,i;const s=t.r/255,n=t.g/255,a=t.b/255;return s<=.03928?r=s/12.92:r=Math.pow((s+.055)/1.055,2.4),n<=.03928?o=n/12.92:o=Math.pow((n+.055)/1.055,2.4),a<=.03928?i=a/12.92:i=Math.pow((a+.055)/1.055,2.4),.2126*r+.7152*o+.0722*i}getAlpha(){return this.a}setAlpha(t){return this.a=Gp(t),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:t}=this.toHsl();return t===0}toHsv(){const t=$h(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}}toHsvString(){const t=$h(this.r,this.g,this.b),r=Math.round(t.h*360),o=Math.round(t.s*100),i=Math.round(t.v*100);return this.a===1?`hsv(${r}, ${o}%, ${i}%)`:`hsva(${r}, ${o}%, ${i}%, ${this.roundA})`}toHsl(){const t=kh(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}}toHslString(){const t=kh(this.r,this.g,this.b),r=Math.round(t.h*360),o=Math.round(t.s*100),i=Math.round(t.l*100);return this.a===1?`hsl(${r}, ${o}%, ${i}%)`:`hsla(${r}, ${o}%, ${i}%, ${this.roundA})`}toHex(t=!1){return Eh(this.r,this.g,this.b,t)}toHexString(t=!1){return"#"+this.toHex(t)}toHex8(t=!1){return Ky(this.r,this.g,this.b,this.a,t)}toHex8String(t=!1){return"#"+this.toHex8(t)}toHexShortString(t=!1){return this.a===1?this.toHexString(t):this.toHex8String(t)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const t=Math.round(this.r),r=Math.round(this.g),o=Math.round(this.b);return this.a===1?`rgb(${t}, ${r}, ${o})`:`rgba(${t}, ${r}, ${o}, ${this.roundA})`}toPercentageRgb(){const t=r=>`${Math.round(Ne(r,255)*100)}%`;return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}}toPercentageRgbString(){const t=r=>Math.round(Ne(r,255)*100);return this.a===1?`rgb(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%)`:`rgba(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%, ${this.roundA})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const t="#"+Eh(this.r,this.g,this.b,!1);for(const[r,o]of Object.entries(tc))if(t===o)return r;return!1}toString(t){const r=!!t;t=t??this.format;let o=!1;const i=this.a<1&&this.a>=0;return!r&&i&&(t.startsWith("hex")||t==="name")?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(o=this.toRgbString()),t==="prgb"&&(o=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(o=this.toHexString()),t==="hex3"&&(o=this.toHexString(!0)),t==="hex4"&&(o=this.toHex8String(!0)),t==="hex8"&&(o=this.toHex8String()),t==="name"&&(o=this.toName()),t==="hsl"&&(o=this.toHslString()),t==="hsv"&&(o=this.toHsvString()),o||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new ee(this.toString())}lighten(t=10){const r=this.toHsl();return r.l+=t/100,r.l=$n(r.l),new ee(r)}brighten(t=10){const r=this.toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(255*-(t/100)))),r.g=Math.max(0,Math.min(255,r.g-Math.round(255*-(t/100)))),r.b=Math.max(0,Math.min(255,r.b-Math.round(255*-(t/100)))),new ee(r)}darken(t=10){const r=this.toHsl();return r.l-=t/100,r.l=$n(r.l),new ee(r)}tint(t=10){return this.mix("white",t)}shade(t=10){return this.mix("black",t)}desaturate(t=10){const r=this.toHsl();return r.s-=t/100,r.s=$n(r.s),new ee(r)}saturate(t=10){const r=this.toHsl();return r.s+=t/100,r.s=$n(r.s),new ee(r)}greyscale(){return this.desaturate(100)}spin(t){const r=this.toHsl(),o=(r.h+t)%360;return r.h=o<0?360+o:o,new ee(r)}mix(t,r=50){const o=this.toRgb(),i=new ee(t).toRgb(),s=r/100,n={r:(i.r-o.r)*s+o.r,g:(i.g-o.g)*s+o.g,b:(i.b-o.b)*s+o.b,a:(i.a-o.a)*s+o.a};return new ee(n)}analogous(t=6,r=30){const o=this.toHsl(),i=360/r,s=[this];for(o.h=(o.h-(i*t>>1)+720)%360;--t;)o.h=(o.h+i)%360,s.push(new ee(o));return s}complement(){const t=this.toHsl();return t.h=(t.h+180)%360,new ee(t)}monochromatic(t=6){const r=this.toHsv(),{h:o}=r,{s:i}=r;let{v:s}=r;const n=[],a=1/t;for(;t--;)n.push(new ee({h:o,s:i,v:s})),s=(s+a)%1;return n}splitcomplement(){const t=this.toHsl(),{h:r}=t;return[this,new ee({h:(r+72)%360,s:t.s,l:t.l}),new ee({h:(r+216)%360,s:t.s,l:t.l})]}onBackground(t){const r=this.toRgb(),o=new ee(t).toRgb(),i=r.a+o.a*(1-r.a);return new ee({r:(r.r*r.a+o.r*o.a*(1-r.a))/i,g:(r.g*r.a+o.g*o.a*(1-r.a))/i,b:(r.b*r.a+o.b*o.a*(1-r.a))/i,a:i})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(t){const r=this.toHsl(),{h:o}=r,i=[this],s=360/t;for(let n=1;n<t;n++)i.push(new ee({h:(o+n*s)%360,s:r.s,l:r.l}));return i}equals(t){return this.toRgbString()===new ee(t).toRgbString()}}var Sh="EyeDropper"in window,xt=class extends Z{constructor(){super(),this.formControlController=new vo(this),this.isSafeValue=!1,this.localize=new Tt(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const e=["hex","rgb","hsl","hsv"],t=(e.indexOf(this.format)+1)%e.length;this.format=e[t],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),r=t.querySelector(".color-picker__slider-handle"),{width:o}=t.getBoundingClientRect();let i=this.value,s=this.value;r.focus(),e.preventDefault(),Os(t,{onMove:n=>{this.alpha=de(n/o*100,0,100),this.syncValues(),this.value!==s&&(s=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==i&&(i=this.value,this.emit("sl-change"))},initialEvent:e})}handleHueDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),r=t.querySelector(".color-picker__slider-handle"),{width:o}=t.getBoundingClientRect();let i=this.value,s=this.value;r.focus(),e.preventDefault(),Os(t,{onMove:n=>{this.hue=de(n/o*360,0,360),this.syncValues(),this.value!==s&&(s=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==i&&(i=this.value,this.emit("sl-change"))},initialEvent:e})}handleGridDrag(e){const t=this.shadowRoot.querySelector(".color-picker__grid"),r=t.querySelector(".color-picker__grid-handle"),{width:o,height:i}=t.getBoundingClientRect();let s=this.value,n=this.value;r.focus(),e.preventDefault(),this.isDraggingGridHandle=!0,Os(t,{onMove:(a,l)=>{this.saturation=de(a/o*100,0,100),this.brightness=de(100-l/i*100,0,100),this.syncValues(),this.value!==n&&(n=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==s&&(s=this.value,this.emit("sl-change"))},initialEvent:e})}handleAlphaKeyDown(e){const t=e.shiftKey?10:1,r=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.alpha=de(this.alpha-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.alpha=de(this.alpha+t,0,100),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.alpha=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.alpha=100,this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(e){const t=e.shiftKey?10:1,r=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.hue=de(this.hue-t,0,360),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.hue=de(this.hue+t,0,360),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.hue=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.hue=360,this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(e){const t=e.shiftKey?10:1,r=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.saturation=de(this.saturation-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.saturation=de(this.saturation+t,0,100),this.syncValues()),e.key==="ArrowUp"&&(e.preventDefault(),this.brightness=de(this.brightness+t,0,100),this.syncValues()),e.key==="ArrowDown"&&(e.preventDefault(),this.brightness=de(this.brightness-t,0,100),this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(e){const t=e.target,r=this.value;e.stopPropagation(),this.input.value?(this.setColor(t.value),t.value=this.value):this.value="",this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(e){this.formControlController.updateValidity(),e.stopPropagation()}handleInputKeyDown(e){if(e.key==="Enter"){const t=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleTouchMove(e){e.preventDefault()}parseColor(e){const t=new ee(e);if(!t.isValid)return null;const r=t.toHsl(),o={h:r.h,s:r.s*100,l:r.l*100,a:r.a},i=t.toRgb(),s=t.toHexString(),n=t.toHex8String(),a=t.toHsv(),l={h:a.h,s:a.s*100,v:a.v*100,a:a.a};return{hsl:{h:o.h,s:o.s,l:o.l,string:this.setLetterCase(`hsl(${Math.round(o.h)}, ${Math.round(o.s)}%, ${Math.round(o.l)}%)`)},hsla:{h:o.h,s:o.s,l:o.l,a:o.a,string:this.setLetterCase(`hsla(${Math.round(o.h)}, ${Math.round(o.s)}%, ${Math.round(o.l)}%, ${o.a.toFixed(2).toString()})`)},hsv:{h:l.h,s:l.s,v:l.v,string:this.setLetterCase(`hsv(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%)`)},hsva:{h:l.h,s:l.s,v:l.v,a:l.a,string:this.setLetterCase(`hsva(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%, ${l.a.toFixed(2).toString()})`)},rgb:{r:i.r,g:i.g,b:i.b,string:this.setLetterCase(`rgb(${Math.round(i.r)}, ${Math.round(i.g)}, ${Math.round(i.b)})`)},rgba:{r:i.r,g:i.g,b:i.b,a:i.a,string:this.setLetterCase(`rgba(${Math.round(i.r)}, ${Math.round(i.g)}, ${Math.round(i.b)}, ${i.a.toFixed(2).toString()})`)},hex:this.setLetterCase(s),hexa:this.setLetterCase(n)}}setColor(e){const t=this.parseColor(e);return t===null?!1:(this.hue=t.hsva.h,this.saturation=t.hsva.s,this.brightness=t.hsva.v,this.alpha=this.opacity?t.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(e){return typeof e!="string"?"":this.uppercase?e.toUpperCase():e.toLowerCase()}async syncValues(){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);e!==null&&(this.format==="hsl"?this.inputValue=this.opacity?e.hsla.string:e.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?e.rgba.string:e.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?e.hsva.string:e.hsv.string:this.inputValue=this.opacity?e.hexa:e.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!Sh)return;new EyeDropper().open().then(t=>{const r=this.value;this.setColor(t.sRGBHex),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(e){const t=this.value;this.disabled||(this.setColor(e),this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(e,t,r,o=100){const i=new ee(`hsva(${e}, ${t}%, ${r}%, ${o/100})`);return i.isValid?i.toHex8String():""}stopNestedEventPropagation(e){e.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(e,t){if(this.isEmpty=!t,t||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const r=this.parseColor(t);r!==null?(this.inputValue=this.value,this.hue=r.hsva.h,this.saturation=r.hsva.s,this.brightness=r.hsva.v,this.alpha=r.hsva.a*100,this.syncValues()):this.inputValue=e??""}}focus(e){this.inline?this.base.focus(e):this.trigger.focus(e)}blur(){var e;const t=this.inline?this.base:this.trigger;this.hasFocus&&(t.focus({preventScroll:!0}),t.blur()),(e=this.dropdown)!=null&&e.open&&this.dropdown.hide()}getFormattedValue(e="hex"){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(t===null)return"";switch(e){case"hex":return t.hex;case"hexa":return t.hexa;case"rgb":return t.rgb.string;case"rgba":return t.rgba.string;case"hsl":return t.hsl.string;case"hsla":return t.hsla.string;case"hsv":return t.hsv.string;case"hsva":return t.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.saturation,t=100-this.brightness,r=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(i=>i.trim()!==""),o=$`
      <div
        part="base"
        class=${tt({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?$`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${rr({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${tt({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${rr({top:`${t}%`,left:`${e}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${G(this.disabled?void 0:"0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="color-picker__slider-handle"
                style=${rr({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${G(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?$`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${rr({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${rr({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${G(this.disabled?void 0:"0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${rr({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <sl-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            value=${this.isEmpty?"":this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
            @sl-input=${this.handleInputInput}
            @sl-invalid=${this.handleInputInvalid}
            @sl-blur=${this.stopNestedEventPropagation}
            @sl-focus=${this.stopNestedEventPropagation}
          ></sl-input>

          <sl-button-group>
            ${this.noFormatToggle?"":$`
                  <sl-button
                    part="format-button"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </sl-button>
                `}
            ${Sh?$`
                  <sl-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    <sl-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></sl-icon>
                  </sl-button>
                `:""}
          </sl-button-group>
        </div>

        ${r.length>0?$`
              <div part="swatches" class="color-picker__swatches">
                ${r.map(i=>{const s=this.parseColor(i);return s?$`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${G(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${i}
                      @click=${()=>this.selectSwatch(i)}
                      @keydown=${n=>!this.disabled&&n.key==="Enter"&&this.setColor(s.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${rr({backgroundColor:s.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${i}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?o:$`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled?"true":"false"}
        .containing-element=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${tt({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${rr({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${o}
      </sl-dropdown>
    `}};xt.styles=[J,Yy];xt.dependencies={"sl-button-group":gi,"sl-button":Dt,"sl-dropdown":Ue,"sl-icon":Rt,"sl-input":ut,"sl-visually-hidden":td};m([B('[part~="base"]')],xt.prototype,"base",2);m([B('[part~="input"]')],xt.prototype,"input",2);m([B(".color-dropdown")],xt.prototype,"dropdown",2);m([B('[part~="preview"]')],xt.prototype,"previewButton",2);m([B('[part~="trigger"]')],xt.prototype,"trigger",2);m([M()],xt.prototype,"hasFocus",2);m([M()],xt.prototype,"isDraggingGridHandle",2);m([M()],xt.prototype,"isEmpty",2);m([M()],xt.prototype,"inputValue",2);m([M()],xt.prototype,"hue",2);m([M()],xt.prototype,"saturation",2);m([M()],xt.prototype,"brightness",2);m([M()],xt.prototype,"alpha",2);m([v()],xt.prototype,"value",2);m([fi()],xt.prototype,"defaultValue",2);m([v()],xt.prototype,"label",2);m([v()],xt.prototype,"format",2);m([v({type:Boolean,reflect:!0})],xt.prototype,"inline",2);m([v({reflect:!0})],xt.prototype,"size",2);m([v({attribute:"no-format-toggle",type:Boolean})],xt.prototype,"noFormatToggle",2);m([v()],xt.prototype,"name",2);m([v({type:Boolean,reflect:!0})],xt.prototype,"disabled",2);m([v({type:Boolean})],xt.prototype,"hoist",2);m([v({type:Boolean})],xt.prototype,"opacity",2);m([v({type:Boolean})],xt.prototype,"uppercase",2);m([v()],xt.prototype,"swatches",2);m([v({reflect:!0})],xt.prototype,"form",2);m([v({type:Boolean,reflect:!0})],xt.prototype,"required",2);m([R("format",{waitUntilFirstUpdate:!0})],xt.prototype,"handleFormatChange",1);m([R("opacity",{waitUntilFirstUpdate:!0})],xt.prototype,"handleOpacityChange",1);m([R("value")],xt.prototype,"handleValueChange",1);xt.define("sl-color-picker");var ov=F`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,Zp=class extends Z{constructor(){super(...arguments),this.hasSlotController=new Xe(this,"footer","header","image")}render(){return $`
      <div
        part="base"
        class=${tt({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Zp.styles=[J,ov];Zp.define("sl-card");var iv=class{constructor(e,t){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},e.addController(this),this.host=e,this.tickCallback=t}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(e){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},e)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},sv=F`
  :host {
    --slide-gap: var(--sl-spacing-medium, 1rem);
    --aspect-ratio: 16 / 9;
    --scroll-hint: 0px;

    display: flex;
  }

  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      '. slides .'
      '. pagination .';
    gap: var(--sl-spacing-medium);
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  .carousel__pagination {
    grid-area: pagination;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--sl-spacing-small);
  }

  .carousel__slides {
    grid-area: slides;

    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
    overflow: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
    border-radius: var(--sl-border-radius-small);

    --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
  }

  @media (prefers-reduced-motion) {
    :where(.carousel__slides) {
      scroll-behavior: auto;
    }
  }

  .carousel__slides--horizontal {
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    grid-auto-rows: 100%;
    column-gap: var(--slide-gap);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--scroll-hint);
    padding-inline: var(--scroll-hint);
    overflow-y: hidden;
  }

  .carousel__slides--vertical {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    grid-auto-rows: var(--slide-size);
    row-gap: var(--slide-gap);
    scroll-snap-type: y mandatory;
    scroll-padding-block: var(--scroll-hint);
    padding-block: var(--scroll-hint);
    overflow-x: hidden;
  }

  .carousel__slides--dragging {
  }

  :host([vertical]) ::slotted(sl-carousel-item) {
    height: 100%;
  }

  .carousel__slides::-webkit-scrollbar {
    display: none;
  }

  .carousel__navigation {
    grid-area: navigation;
    display: contents;
    font-size: var(--sl-font-size-x-large);
  }

  .carousel__navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-small);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    appearance: none;
  }

  .carousel__navigation-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .carousel__navigation-button--disabled::part(base) {
    pointer-events: none;
  }

  .carousel__navigation-button--previous {
    grid-column: 1;
    grid-row: 1;
  }

  .carousel__navigation-button--next {
    grid-column: 3;
    grid-row: 1;
  }

  .carousel__pagination-item {
    display: block;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: var(--sl-border-radius-circle);
    width: var(--sl-spacing-small);
    height: var(--sl-spacing-small);
    background-color: var(--sl-color-neutral-300);
    padding: 0;
    margin: 0;
  }

  .carousel__pagination-item--active {
    background-color: var(--sl-color-neutral-700);
    transform: scale(1.2);
  }

  /* Focus styles */
  .carousel__slides:focus-visible,
  .carousel__navigation-button:focus-visible,
  .carousel__pagination-item:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*nv(e,t){if(e!==void 0){let r=0;for(const o of e)yield t(o,r++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*av(e,t,r=1){const o=t===void 0?0:e;t??=e;for(let i=o;r>0?i<t:t<i;i+=r)yield i}var lv=(e,t)=>{let r=0;return function(...o){window.clearTimeout(r),r=window.setTimeout(()=>{e.call(this,...o)},t)}},Ih=(e,t,r)=>{const o=e[t];e[t]=function(...i){o.call(this,...i),r.call(this,o,...i)}},cv="onscrollend"in window;if(!cv){const e=new Set,t=new WeakMap,r=i=>{for(const s of i.changedTouches)e.add(s.identifier)},o=i=>{for(const s of i.changedTouches)e.delete(s.identifier)};document.addEventListener("touchstart",r,!0),document.addEventListener("touchend",o,!0),document.addEventListener("touchcancel",o,!0),Ih(EventTarget.prototype,"addEventListener",function(i,s){if(s!=="scrollend")return;const n=lv(()=>{e.size?n():this.dispatchEvent(new Event("scrollend"))},100);i.call(this,"scroll",n,{passive:!0}),t.set(this,n)}),Ih(EventTarget.prototype,"removeEventListener",function(i,s){if(s!=="scrollend")return;const n=t.get(this);n&&i.call(this,"scroll",n,{passive:!0})})}var se=class extends Z{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new iv(this,()=>this.next()),this.localize=new Tt(this),this.handleMouseDrag=e=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0),this.scrollContainer.scrollBy({left:-e.movementX,top:-e.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{const e=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});const t=e.scrollLeft,r=e.scrollTop;e.style.removeProperty("scroll-snap-type"),e.style.setProperty("overflow","hidden");const o=e.scrollLeft,i=e.scrollTop;e.style.removeProperty("overflow"),e.style.setProperty("scroll-snap-type","none"),e.scrollTo({left:t,top:r,behavior:"instant"}),requestAnimationFrame(async()=>{(t!==o||r!==i)&&(e.scrollTo({left:o,top:i,behavior:Bl()?"auto":"smooth"}),await Ke(e,"scrollend")),e.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.handleScrollEnd()})},this.handleSlotChange=e=>{e.some(r=>[...r.addedNodes,...r.removedNodes].some(o=>this.isCarouselItem(o)&&!o.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(e){(e.has("slidesPerMove")||e.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const e=this.getSlides().length,{slidesPerPage:t,slidesPerMove:r,loop:o}=this,i=o?e/r:(e-t)/r+1;return Math.ceil(i)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:e=!0}={}){return[...this.children].filter(t=>this.isCarouselItem(t)&&(!e||!t.hasAttribute("data-clone")))}handleKeyDown(e){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){const t=e.target,r=this.localize.dir()==="rtl",o=t.closest('[part~="pagination-item"]')!==null,i=e.key==="ArrowDown"||!r&&e.key==="ArrowRight"||r&&e.key==="ArrowLeft",s=e.key==="ArrowUp"||!r&&e.key==="ArrowLeft"||r&&e.key==="ArrowRight";e.preventDefault(),s&&this.previous(),i&&this.next(),e.key==="Home"&&this.goToSlide(0),e.key==="End"&&this.goToSlide(this.getSlides().length-1),o&&this.updateComplete.then(()=>{var n;const a=(n=this.shadowRoot)==null?void 0:n.querySelector('[part~="pagination-item--active"]');a&&a.focus()})}}handleMouseDragStart(e){this.mouseDragging&&e.button===0&&(e.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0}synchronizeSlides(){const e=new IntersectionObserver(t=>{e.disconnect();for(const o of t){const i=o.target;i.toggleAttribute("inert",!o.isIntersecting),i.classList.toggle("--in-view",o.isIntersecting),i.setAttribute("aria-hidden",o.isIntersecting?"false":"true")}const r=t.find(o=>o.isIntersecting);if(r)if(this.loop&&r.target.hasAttribute("data-clone")){const o=Number(r.target.getAttribute("data-clone"));this.goToSlide(o,"instant")}else{const i=this.getSlides().indexOf(r.target);this.activeSlide=Math.ceil(i/this.slidesPerMove)*this.slidesPerMove}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(t=>{e.observe(t)})}handleScrollEnd(){!this.scrolling||this.dragging||(this.synchronizeSlides(),this.scrolling=!1)}isCarouselItem(e){return e instanceof Element&&e.tagName.toLowerCase()==="sl-carousel-item"}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((e,t)=>{e.classList.remove("--in-view"),e.classList.remove("--is-active"),e.setAttribute("aria-label",this.localize.term("slideNum",t+1)),e.hasAttribute("data-clone")&&e.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.synchronizeSlides(),this.goToSlide(this.activeSlide,"auto")}createClones(){const e=this.getSlides(),t=this.slidesPerPage,r=e.slice(-t),o=e.slice(0,t);r.reverse().forEach((i,s)=>{const n=i.cloneNode(!0);n.setAttribute("data-clone",String(e.length-s-1)),this.prepend(n)}),o.forEach((i,s)=>{const n=i.cloneNode(!0);n.setAttribute("data-clone",String(s)),this.append(n)})}handelSlideChange(){const e=this.getSlides();e.forEach((t,r)=>{t.classList.toggle("--is-active",r===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:e[this.activeSlide]}})}updateSlidesSnap(){const e=this.getSlides(),t=this.slidesPerMove;e.forEach((r,o)=>{(o+t)%t===0?r.style.removeProperty("scroll-snap-align"):r.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(e="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,e)}next(e="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,e)}goToSlide(e,t="smooth"){const{slidesPerPage:r,loop:o}=this,i=this.getSlides(),s=this.getSlides({excludeClones:!1});if(!i.length)return;const n=o?(e+i.length)%i.length:de(e,0,i.length-1);this.activeSlide=n;const a=de(e+(o?r:0),0,s.length-1),l=s[a];this.scrollToSlide(l,Bl()?"auto":t)}scrollToSlide(e,t="smooth"){const r=this.scrollContainer,o=r.getBoundingClientRect(),i=e.getBoundingClientRect(),s=i.left-o.left,n=i.top-o.top;r.scrollTo({left:s+r.scrollLeft,top:n+r.scrollTop,behavior:t})}render(){const{slidesPerMove:e,scrolling:t}=this,r=this.getPageCount(),o=this.getCurrentPage(),i=this.canScrollPrev(),s=this.canScrollNext(),n=this.localize.dir()==="ltr";return $`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${tt({carousel__slides:!0,"carousel__slides--horizontal":this.orientation==="horizontal","carousel__slides--vertical":this.orientation==="vertical","carousel__slides--dragging":this.dragging})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${t?"true":"false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @mousedown="${this.handleMouseDragStart}"
          @scroll="${this.handleScroll}"
          @scrollend=${this.handleScrollEnd}
        >
          <slot></slot>
        </div>

        ${this.navigation?$`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${tt({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!i})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${i?"false":"true"}"
                  @click=${i?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${n?"chevron-left":"chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${tt({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!s})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${s?"false":"true"}"
                  @click=${s?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${n?"chevron-right":"chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?$`
              <div part="pagination" role="tablist" class="carousel__pagination" aria-controls="scroll-container">
                ${nv(av(r),a=>{const l=a===o;return $`
                    <button
                      part="pagination-item ${l?"pagination-item--active":""}"
                      class="${tt({"carousel__pagination-item":!0,"carousel__pagination-item--active":l})}"
                      role="tab"
                      aria-selected="${l?"true":"false"}"
                      aria-label="${this.localize.term("goToSlide",a+1,r)}"
                      tabindex=${l?"0":"-1"}
                      @click=${()=>this.goToSlide(a*e)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:""}
      </div>
    `}};se.styles=[J,sv];se.dependencies={"sl-icon":Rt};m([v({type:Boolean,reflect:!0})],se.prototype,"loop",2);m([v({type:Boolean,reflect:!0})],se.prototype,"navigation",2);m([v({type:Boolean,reflect:!0})],se.prototype,"pagination",2);m([v({type:Boolean,reflect:!0})],se.prototype,"autoplay",2);m([v({type:Number,attribute:"autoplay-interval"})],se.prototype,"autoplayInterval",2);m([v({type:Number,attribute:"slides-per-page"})],se.prototype,"slidesPerPage",2);m([v({type:Number,attribute:"slides-per-move"})],se.prototype,"slidesPerMove",2);m([v()],se.prototype,"orientation",2);m([v({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],se.prototype,"mouseDragging",2);m([B(".carousel__slides")],se.prototype,"scrollContainer",2);m([B(".carousel__pagination")],se.prototype,"paginationContainer",2);m([M()],se.prototype,"activeSlide",2);m([M()],se.prototype,"scrolling",2);m([M()],se.prototype,"dragging",2);m([ac({passive:!0})],se.prototype,"handleScroll",1);m([R("loop",{waitUntilFirstUpdate:!0}),R("slidesPerPage",{waitUntilFirstUpdate:!0})],se.prototype,"initializeSlides",1);m([R("activeSlide")],se.prototype,"handelSlideChange",1);m([R("slidesPerMove")],se.prototype,"updateSlidesSnap",1);m([R("autoplay")],se.prototype,"handleAutoplayChange",1);se.define("sl-carousel");var dv=F`
  :host {
    --aspect-ratio: inherit;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    aspect-ratio: var(--aspect-ratio);
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  ::slotted(img) {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
`,Kp=class extends Z{connectedCallback(){super.connectedCallback(),this.setAttribute("role","group")}render(){return $` <slot></slot> `}};Kp.styles=[J,dv];Kp.define("sl-carousel-item");var hv=F`
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,yn=class extends Z{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return $`
      <span
        part="base"
        class=${tt({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};yn.styles=[J,hv];m([v({reflect:!0})],yn.prototype,"variant",2);m([v({type:Boolean,reflect:!0})],yn.prototype,"pill",2);m([v({type:Boolean,reflect:!0})],yn.prototype,"pulse",2);yn.define("sl-badge");var uv=F`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,hs=class extends Z{constructor(){super(...arguments),this.localize=new Tt(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const t=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[t,...t.querySelectorAll("[id]")].forEach(r=>r.removeAttribute("id")),t.setAttribute("data-default",""),t.slot="separator",t}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>t.tagName.toLowerCase()==="sl-breadcrumb-item");e.forEach((t,r)=>{const o=t.querySelector('[slot="separator"]');o===null?t.append(this.getSeparator()):o.hasAttribute("data-default")&&o.replaceWith(this.getSeparator()),r===e.length-1?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),$`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};hs.styles=[J,uv];hs.dependencies={"sl-icon":Rt};m([B("slot")],hs.prototype,"defaultSlot",2);m([B('slot[name="separator"]')],hs.prototype,"separatorSlot",2);m([v()],hs.prototype,"label",2);hs.define("sl-breadcrumb");var pv=F`
  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-600);
    line-height: var(--sl-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--sl-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--sl-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--sl-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--sl-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--sl-spacing-x-small);
    user-select: none;
    -webkit-user-select: none;
  }
`,vn=class extends Z{constructor(){super(...arguments),this.hasSlotController=new Xe(this,"prefix","suffix"),this.rel="noreferrer noopener"}render(){const e=!!this.href;return $`
      <div
        part="base"
        class=${tt({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${e?$`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${G(this.target?this.target:void 0)}"
                rel=${G(this.target?this.rel:void 0)}
              >
                <slot></slot>
              </a>
            `:$`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot></slot>
              </button>
            `}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `}};vn.styles=[J,pv];m([v()],vn.prototype,"href",2);m([v()],vn.prototype,"target",2);m([v()],vn.prototype,"rel",2);vn.define("sl-breadcrumb-item");var fv=F`
  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);

    display: inline-flex;
    position: relative;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[aria-hidden='true'] {
    display: none;
  }

  .animated-image__control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: var(--icon-size);
    background: none;
    border: solid 2px currentColor;
    background-color: rgb(0 0 0 /50%);
    border-radius: var(--sl-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: var(--sl-transition-fast) opacity;
  }

  :host([play]:hover) .animated-image__control-box {
    opacity: 1;
  }

  :host([play]:not(:hover)) .animated-image__control-box {
    opacity: 0;
  }

  :host([play]) slot[name='play-icon'],
  :host(:not([play])) slot[name='pause-icon'] {
    display: none;
  }
`,Fr=class extends Z{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){const e=document.createElement("canvas"),{width:t,height:r}=this.animatedImage;e.width=t,e.height=r,e.getContext("2d").drawImage(this.animatedImage,0,0,t,r),this.frozenFrame=e.toDataURL("image/gif"),this.isLoaded||(this.emit("sl-load"),this.isLoaded=!0)}handleError(){this.emit("sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return $`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play?"false":"true"}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded?$`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play?"true":"false"}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                <slot name="play-icon"><sl-icon name="play-fill" library="system"></sl-icon></slot>
                <slot name="pause-icon"><sl-icon name="pause-fill" library="system"></sl-icon></slot>
              </div>
            `:""}
      </div>
    `}};Fr.styles=[J,fv];Fr.dependencies={"sl-icon":Rt};m([B(".animated-image__animated")],Fr.prototype,"animatedImage",2);m([M()],Fr.prototype,"frozenFrame",2);m([M()],Fr.prototype,"isLoaded",2);m([v()],Fr.prototype,"src",2);m([v()],Fr.prototype,"alt",2);m([v({type:Boolean,reflect:!0})],Fr.prototype,"play",2);m([R("play",{waitUntilFirstUpdate:!0})],Fr.prototype,"handlePlayChange",1);m([R("src")],Fr.prototype,"handleSrcChange",1);Fr.define("sl-animated-image");var mv=F`
  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`,oo=class extends Z{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}render(){const e=$`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${()=>this.hasError=!0}"
      />
    `;let t=$``;return this.initials?t=$`<div part="initials" class="avatar__initials">${this.initials}</div>`:t=$`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,$`
      <div
        part="base"
        class=${tt({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?e:t}
      </div>
    `}};oo.styles=[J,mv];oo.dependencies={"sl-icon":Rt};m([M()],oo.prototype,"hasError",2);m([v()],oo.prototype,"image",2);m([v()],oo.prototype,"label",2);m([v()],oo.prototype,"initials",2);m([v()],oo.prototype,"loading",2);m([v({reflect:!0})],oo.prototype,"shape",2);m([R("image")],oo.prototype,"handleImageChange",1);oo.define("sl-avatar");var gv=F`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    padding-inline-end: var(--sl-spacing-medium);
  }
`,_i=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),io=class extends Z{constructor(){super(...arguments),this.hasSlotController=new Xe(this,"icon","suffix"),this.localize=new Tt(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await ue(this.base),this.base.hidden=!1;const{keyframes:e,options:t}=Wt(this,"alert.show",{dir:this.localize.dir()});await oe(this.base,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await ue(this.base);const{keyframes:e,options:t}=Wt(this,"alert.hide",{dir:this.localize.dir()});await oe(this.base,e,t),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,Ke(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Ke(this,"sl-after-hide")}async toast(){return new Promise(e=>{_i.parentElement===null&&document.body.append(_i),_i.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{_i.removeChild(this),e(),_i.querySelector("sl-alert")===null&&_i.remove()},{once:!0})})}render(){return $`
      <div
        part="base"
        class=${tt({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?$`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}
      </div>
    `}};io.styles=[J,gv];io.dependencies={"sl-icon-button":ye};m([B('[part~="base"]')],io.prototype,"base",2);m([v({type:Boolean,reflect:!0})],io.prototype,"open",2);m([v({type:Boolean,reflect:!0})],io.prototype,"closable",2);m([v({reflect:!0})],io.prototype,"variant",2);m([v({type:Number})],io.prototype,"duration",2);m([R("open",{waitUntilFirstUpdate:!0})],io.prototype,"handleOpenChange",1);m([R("duration")],io.prototype,"handleDurationChange",1);It("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});It("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});io.define("sl-alert");const bv=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],yv=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],vv=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],wv=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],_v=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],xv=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Cv=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Tv=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],kv=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],$v=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Ev=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],Dv=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Sv=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Iv=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Ov=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Av=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],zv=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Mv=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],Pv=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],Fv=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],Lv=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],Rv=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Nv=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Bv=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Uv=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Vv=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],jv=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],Yv=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],Hv=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],qv=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],Wv=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],Gv=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],Zv=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Kv=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Xv=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Qv=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Jv=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],tw=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ew=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],rw=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ow=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],iw=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],sw=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],nw=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],aw=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],lw=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],cw=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],dw=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],hw=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],uw=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],pw=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],fw=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],mw=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],gw=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],bw=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],yw=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],vw=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],ww=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],_w=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],xw=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],Cw=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],Tw=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],kw=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],$w=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Ew=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],Dw=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],Sw=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Iw=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Ow=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Aw=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],zw=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Mw=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],Pw=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],Fw=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],Lw=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],Rw=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],Nw=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Bw=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Uw=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Vw=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],jw=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],Yw=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],Hw=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],qw=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],Ww=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],Gw=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],Zw=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Kw=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],Xw=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],Qw=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Jw=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],t1=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],e1=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],r1=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],o1=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],i1=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],s1=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],n1=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Xp={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},a1=Object.freeze(Object.defineProperty({__proto__:null,backInDown:Iv,backInLeft:Ov,backInRight:Av,backInUp:zv,backOutDown:Mv,backOutLeft:Pv,backOutRight:Fv,backOutUp:Lv,bounce:bv,bounceIn:Rv,bounceInDown:Nv,bounceInLeft:Bv,bounceInRight:Uv,bounceInUp:Vv,bounceOut:jv,bounceOutDown:Yv,bounceOutLeft:Hv,bounceOutRight:qv,bounceOutUp:Wv,easings:Xp,fadeIn:Gv,fadeInBottomLeft:Zv,fadeInBottomRight:Kv,fadeInDown:Xv,fadeInDownBig:Qv,fadeInLeft:Jv,fadeInLeftBig:tw,fadeInRight:ew,fadeInRightBig:rw,fadeInTopLeft:ow,fadeInTopRight:iw,fadeInUp:sw,fadeInUpBig:nw,fadeOut:aw,fadeOutBottomLeft:lw,fadeOutBottomRight:cw,fadeOutDown:dw,fadeOutDownBig:hw,fadeOutLeft:uw,fadeOutLeftBig:pw,fadeOutRight:fw,fadeOutRightBig:mw,fadeOutTopLeft:gw,fadeOutTopRight:bw,fadeOutUp:yw,fadeOutUpBig:vw,flash:yv,flip:ww,flipInX:_w,flipInY:xw,flipOutX:Cw,flipOutY:Tw,headShake:vv,heartBeat:wv,hinge:Ww,jackInTheBox:Gw,jello:_v,lightSpeedInLeft:kw,lightSpeedInRight:$w,lightSpeedOutLeft:Ew,lightSpeedOutRight:Dw,pulse:xv,rollIn:Zw,rollOut:Kw,rotateIn:Sw,rotateInDownLeft:Iw,rotateInDownRight:Ow,rotateInUpLeft:Aw,rotateInUpRight:zw,rotateOut:Mw,rotateOutDownLeft:Pw,rotateOutDownRight:Fw,rotateOutUpLeft:Lw,rotateOutUpRight:Rw,rubberBand:Cv,shake:Tv,shakeX:kv,shakeY:$v,slideInDown:Nw,slideInLeft:Bw,slideInRight:Uw,slideInUp:Vw,slideOutDown:jw,slideOutLeft:Yw,slideOutRight:Hw,slideOutUp:qw,swing:Ev,tada:Dv,wobble:Sv,zoomIn:Xw,zoomInDown:Qw,zoomInLeft:Jw,zoomInRight:t1,zoomInUp:e1,zoomOut:r1,zoomOutDown:o1,zoomOutLeft:i1,zoomOutRight:s1,zoomOutUp:n1},Symbol.toStringTag,{value:"Module"}));var l1=F`
  :host {
    display: contents;
  }
`,Ee=class extends Z{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}get currentTime(){var e,t;return(t=(e=this.animation)==null?void 0:e.currentTime)!=null?t:0}set currentTime(e){this.animation&&(this.animation.currentTime=e)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var e,t;const r=(e=Xp[this.easing])!=null?e:this.easing,o=(t=this.keyframes)!=null?t:a1[this.name],s=(await this.defaultSlot).assignedElements()[0];return!s||!o?!1:(this.destroyAnimation(),this.animation=s.animate(o,{delay:this.delay,direction:this.direction,duration:this.duration,easing:r,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var e;(e=this.animation)==null||e.cancel()}finish(){var e;(e=this.animation)==null||e.finish()}render(){return $` <slot @slotchange=${this.handleSlotChange}></slot> `}};Ee.styles=[J,l1];m([Yh("slot")],Ee.prototype,"defaultSlot",2);m([v()],Ee.prototype,"name",2);m([v({type:Boolean,reflect:!0})],Ee.prototype,"play",2);m([v({type:Number})],Ee.prototype,"delay",2);m([v()],Ee.prototype,"direction",2);m([v({type:Number})],Ee.prototype,"duration",2);m([v()],Ee.prototype,"easing",2);m([v({attribute:"end-delay",type:Number})],Ee.prototype,"endDelay",2);m([v()],Ee.prototype,"fill",2);m([v({type:Number})],Ee.prototype,"iterations",2);m([v({attribute:"iteration-start",type:Number})],Ee.prototype,"iterationStart",2);m([v({attribute:!1})],Ee.prototype,"keyframes",2);m([v({attribute:"playback-rate",type:Number})],Ee.prototype,"playbackRate",2);m([R(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],Ee.prototype,"handleAnimationChange",1);m([R("play")],Ee.prototype,"handlePlayChange",1);m([R("playbackRate")],Ee.prototype,"handlePlaybackRateChange",1);Ee.define("sl-animation");var c1=Object.defineProperty,d1=Object.getOwnPropertyDescriptor,Uo=(e,t,r,o)=>{for(var i=o>1?void 0:o?d1(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&c1(t,r,i),i};$l("/shoelace");let Gr=class extends yt{constructor(){super(...arguments),this.expandOnSelectDate=!1,this.dbInit=!1,this._selectedDate=he.Now.plainDateISO(),this._selectedTime=he.Now.plainTimeISO(),this._activePage="Timeline"}get _showCalendar(){return this._activePage==="Timeline"}get _showAddBtn(){return this._activePage==="Timeline"}RenderContent(){return this._activePage==="Profile"?$`<diet-profile-page></diet-profile-page>`:this._activePage==="Timeline"?$`<diet-timeline></diet-timeline>`:bt}async firstUpdated(){this.dbInit=!1,await Et.StartDb(),this.dbInit=!0,await this.AddListeners()}async AddListeners(){this.addEventListener("scrolly",e=>{const t=e.detail;this.footer.OnScroll(t)}),this.addEventListener("navigate",e=>{const t=e.detail;this._activePage=t}),this.addEventListener("on-show-food-drawer",e=>{const t=e.detail;t.addFood?(this.foodDrawer.ShowSelection(e),this._selectedTime=he.Now.plainTimeISO()):t.addEntry&&this.foodDrawer.ShowFoodEntryForm(e)}),this.addEventListener("shorten-food-drawer",e=>{this.foodDrawer.ExpandDrawer(this.expandOnSelectDate),this.expandOnSelectDate=!this.expandOnSelectDate}),this.addEventListener("time-selected",async e=>{const t=e.detail.time;this._selectedTime=t}),this.addEventListener("day-selected",async e=>{this.expandOnSelectDate&&(this.foodDrawer.ExpandDrawer(),this.expandOnSelectDate=!1);const t=e.detail;this._selectedDate=t}),this.addEventListener("food-entry-saved",async()=>{await this.LoadEntries()}),this.addEventListener("day-selected",async e=>{await this.LoadEntries()}),await this.LoadEntries()}async LoadEntries(){this._dailyEntries=await Ib(this._selectedDate??he.Now.plainDateISO())}render(){return this.dbInit?$`
          <diet-page-header
            .showCalendar=${this._showCalendar}
          ></diet-page-header>
          ${this.RenderContent()}
          <diet-page-footer
            .showAddBtn="${this._showAddBtn}"
          ></diet-page-footer>
          <food-drawer></food-drawer>
        `:bt}};Gr.styles=[bf,iy];Uo([B("diet-page-footer")],Gr.prototype,"footer",2);Uo([M()],Gr.prototype,"dbInit",2);Uo([Rc({context:Oa}),M()],Gr.prototype,"_dailyEntries",2);Uo([Rc({context:cn}),M()],Gr.prototype,"_selectedDate",2);Uo([Rc({context:Aa}),M()],Gr.prototype,"_selectedTime",2);Uo([B("food-drawer")],Gr.prototype,"foodDrawer",2);Uo([M()],Gr.prototype,"_activePage",2);Gr=Uo([Ct("diet-page")],Gr);
