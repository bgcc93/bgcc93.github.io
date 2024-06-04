(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const X=globalThis,kt=X.ShadowRoot&&(X.ShadyCSS===void 0||X.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Mt=Symbol(),Rt=new WeakMap;let he=class{constructor(t,r,o){if(this._$cssResult$=!0,o!==Mt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(kt&&t===void 0){const o=r!==void 0&&r.length===1;o&&(t=Rt.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&Rt.set(r,t))}return t}toString(){return this.cssText}};const De=e=>new he(typeof e=="string"?e:e+"",void 0,Mt),C=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((o,s,i)=>o+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[i+1],e[0]);return new he(r,e,Mt)},Oe=(e,t)=>{if(kt)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const o=document.createElement("style"),s=X.litNonce;s!==void 0&&o.setAttribute("nonce",s),o.textContent=r.cssText,e.appendChild(o)}},zt=kt?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const o of t.cssRules)r+=o.cssText;return De(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ie,defineProperty:Be,getOwnPropertyDescriptor:Ue,getOwnPropertyNames:Re,getOwnPropertySymbols:ze,getPrototypeOf:Fe}=Object,it=globalThis,Ft=it.trustedTypes,Ve=Ft?Ft.emptyScript:"",je=it.reactiveElementPolyfillSupport,V=(e,t)=>e,Q={toAttribute(e,t){switch(t){case Boolean:e=e?Ve:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Nt=(e,t)=>!Ie(e,t),Vt={attribute:!0,type:String,converter:Q,reflect:!1,hasChanged:Nt};Symbol.metadata??=Symbol("metadata"),it.litPropertyMetadata??=new WeakMap;class D extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Vt){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(t,r),!r.noAccessor){const o=Symbol(),s=this.getPropertyDescriptor(t,o,r);s!==void 0&&Be(this.prototype,t,s)}}static getPropertyDescriptor(t,r,o){const{get:s,set:i}=Ue(this.prototype,t)??{get(){return this[r]},set(a){this[r]=a}};return{get(){return s?.call(this)},set(a){const l=s?.call(this);i.call(this,a),this.requestUpdate(t,l,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Vt}static _$Ei(){if(this.hasOwnProperty(V("elementProperties")))return;const t=Fe(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(V("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(V("properties"))){const r=this.properties,o=[...Re(r),...ze(r)];for(const s of o)this.createProperty(s,r[s])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[o,s]of r)this.elementProperties.set(o,s)}this._$Eh=new Map;for(const[r,o]of this.elementProperties){const s=this._$Eu(r,o);s!==void 0&&this._$Eh.set(s,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const s of o)r.unshift(zt(s))}else t!==void 0&&r.push(zt(t));return r}static _$Eu(t,r){const o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const o of r.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Oe(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,o){this._$AK(t,o)}_$EC(t,r){const o=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,o);if(s!==void 0&&o.reflect===!0){const i=(o.converter?.toAttribute!==void 0?o.converter:Q).toAttribute(r,o.type);this._$Em=t,i==null?this.removeAttribute(s):this.setAttribute(s,i),this._$Em=null}}_$AK(t,r){const o=this.constructor,s=o._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const i=o.getPropertyOptions(s),a=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:Q;this._$Em=s,this[s]=a.fromAttribute(r,i.type),this._$Em=null}}requestUpdate(t,r,o){if(t!==void 0){if(o??=this.constructor.getPropertyOptions(t),!(o.hasChanged??Nt)(this[t],r))return;this.P(t,r,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,r,o){this._$AL.has(t)||this._$AL.set(t,r),o.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,i]of this._$Ep)this[s]=i;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[s,i]of o)i.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],i)}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(r)):this._$EU()}catch(o){throw t=!1,this._$EU(),o}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(r=>this._$EC(r,this[r])),this._$EU()}updated(t){}firstUpdated(t){}}D.elementStyles=[],D.shadowRootOptions={mode:"open"},D[V("elementProperties")]=new Map,D[V("finalized")]=new Map,je?.({ReactiveElement:D}),(it.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tt=globalThis,tt=Tt.trustedTypes,jt=tt?tt.createPolicy("lit-html",{createHTML:e=>e}):void 0,pe="$lit$",A=`lit$${Math.random().toFixed(9).slice(2)}$`,be="?"+A,He=`<${be}>`,T=document,H=()=>T.createComment(""),W=e=>e===null||typeof e!="object"&&typeof e!="function",fe=Array.isArray,We=e=>fe(e)||typeof e?.[Symbol.iterator]=="function",ct=`[ 	
\f\r]`,B=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ht=/-->/g,Wt=/>/g,P=RegExp(`>|${ct}(?:([^\\s"'>=/]+)(${ct}*=${ct}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),qt=/'/g,Gt=/"/g,me=/^(?:script|style|textarea|title)$/i,qe=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),y=qe(1),L=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),Kt=new WeakMap,M=T.createTreeWalker(T,129);function ge(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return jt!==void 0?jt.createHTML(t):t}const Ge=(e,t)=>{const r=e.length-1,o=[];let s,i=t===2?"<svg>":"",a=B;for(let l=0;l<r;l++){const n=e[l];let c,b,h=-1,g=0;for(;g<n.length&&(a.lastIndex=g,b=a.exec(n),b!==null);)g=a.lastIndex,a===B?b[1]==="!--"?a=Ht:b[1]!==void 0?a=Wt:b[2]!==void 0?(me.test(b[2])&&(s=RegExp("</"+b[2],"g")),a=P):b[3]!==void 0&&(a=P):a===P?b[0]===">"?(a=s??B,h=-1):b[1]===void 0?h=-2:(h=a.lastIndex-b[2].length,c=b[1],a=b[3]===void 0?P:b[3]==='"'?Gt:qt):a===Gt||a===qt?a=P:a===Ht||a===Wt?a=B:(a=P,s=void 0);const v=a===P&&e[l+1].startsWith("/>")?" ":"";i+=a===B?n+He:h>=0?(o.push(c),n.slice(0,h)+pe+n.slice(h)+A+v):n+A+(h===-2?l:v)}return[ge(e,i+(e[r]||"<?>")+(t===2?"</svg>":"")),o]};class q{constructor({strings:t,_$litType$:r},o){let s;this.parts=[];let i=0,a=0;const l=t.length-1,n=this.parts,[c,b]=Ge(t,r);if(this.el=q.createElement(c,o),M.currentNode=this.el.content,r===2){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=M.nextNode())!==null&&n.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const h of s.getAttributeNames())if(h.endsWith(pe)){const g=b[a++],v=s.getAttribute(h).split(A),_=/([.?@])?(.*)/.exec(g);n.push({type:1,index:i,name:_[2],strings:v,ctor:_[1]==="."?Ze:_[1]==="?"?Je:_[1]==="@"?Ye:at}),s.removeAttribute(h)}else h.startsWith(A)&&(n.push({type:6,index:i}),s.removeAttribute(h));if(me.test(s.tagName)){const h=s.textContent.split(A),g=h.length-1;if(g>0){s.textContent=tt?tt.emptyScript:"";for(let v=0;v<g;v++)s.append(h[v],H()),M.nextNode(),n.push({type:2,index:++i});s.append(h[g],H())}}}else if(s.nodeType===8)if(s.data===be)n.push({type:2,index:i});else{let h=-1;for(;(h=s.data.indexOf(A,h+1))!==-1;)n.push({type:7,index:i}),h+=A.length-1}i++}}static createElement(t,r){const o=T.createElement("template");return o.innerHTML=t,o}}function I(e,t,r=e,o){if(t===L)return t;let s=o!==void 0?r._$Co?.[o]:r._$Cl;const i=W(t)?void 0:t._$litDirective$;return s?.constructor!==i&&(s?._$AO?.(!1),i===void 0?s=void 0:(s=new i(e),s._$AT(e,r,o)),o!==void 0?(r._$Co??=[])[o]=s:r._$Cl=s),s!==void 0&&(t=I(e,s._$AS(e,t.values),s,o)),t}class Ke{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:o}=this._$AD,s=(t?.creationScope??T).importNode(r,!0);M.currentNode=s;let i=M.nextNode(),a=0,l=0,n=o[0];for(;n!==void 0;){if(a===n.index){let c;n.type===2?c=new K(i,i.nextSibling,this,t):n.type===1?c=new n.ctor(i,n.name,n.strings,this,t):n.type===6&&(c=new Xe(i,this,t)),this._$AV.push(c),n=o[++l]}a!==n?.index&&(i=M.nextNode(),a++)}return M.currentNode=T,s}p(t){let r=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,r),r+=o.strings.length-2):o._$AI(t[r])),r++}}class K{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,o,s){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=o,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=I(this,t,r),W(t)?t===m||t==null||t===""?(this._$AH!==m&&this._$AR(),this._$AH=m):t!==this._$AH&&t!==L&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):We(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==m&&W(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:o}=t,s=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=q.createElement(ge(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===s)this._$AH.p(r);else{const i=new Ke(s,this),a=i.u(this.options);i.p(r),this.T(a),this._$AH=i}}_$AC(t){let r=Kt.get(t.strings);return r===void 0&&Kt.set(t.strings,r=new q(t)),r}k(t){fe(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,s=0;for(const i of t)s===r.length?r.push(o=new K(this.S(H()),this.S(H()),this,this.options)):o=r[s],o._$AI(i),s++;s<r.length&&(this._$AR(o&&o._$AB.nextSibling,s),r.length=s)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class at{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,o,s,i){this.type=1,this._$AH=m,this._$AN=void 0,this.element=t,this.name=r,this._$AM=s,this.options=i,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=m}_$AI(t,r=this,o,s){const i=this.strings;let a=!1;if(i===void 0)t=I(this,t,r,0),a=!W(t)||t!==this._$AH&&t!==L,a&&(this._$AH=t);else{const l=t;let n,c;for(t=i[0],n=0;n<i.length-1;n++)c=I(this,l[o+n],r,n),c===L&&(c=this._$AH[n]),a||=!W(c)||c!==this._$AH[n],c===m?t=m:t!==m&&(t+=(c??"")+i[n+1]),this._$AH[n]=c}a&&!s&&this.j(t)}j(t){t===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ze extends at{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===m?void 0:t}}class Je extends at{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==m)}}class Ye extends at{constructor(t,r,o,s,i){super(t,r,o,s,i),this.type=5}_$AI(t,r=this){if((t=I(this,t,r,0)??m)===L)return;const o=this._$AH,s=t===m&&o!==m||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,i=t!==m&&(o===m||s);s&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Xe{constructor(t,r,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){I(this,t)}}const Qe=Tt.litHtmlPolyfillSupport;Qe?.(q,K),(Tt.litHtmlVersions??=[]).push("3.1.3");const tr=(e,t,r)=>{const o=r?.renderBefore??t;let s=o._$litPart$;if(s===void 0){const i=r?.renderBefore??null;o._$litPart$=s=new K(t.insertBefore(H(),i),i,void 0,r??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let x=class extends D{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=tr(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return L}};x._$litElement$=!0,x.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:x});const er=globalThis.litElementPolyfillSupport;er?.({LitElement:x});(globalThis.litElementVersions??=[]).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lt=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rr={attribute:!0,type:String,converter:Q,reflect:!1,hasChanged:Nt},or=(e=rr,t,r)=>{const{kind:o,metadata:s}=r;let i=globalThis.litPropertyMetadata.get(s);if(i===void 0&&globalThis.litPropertyMetadata.set(s,i=new Map),i.set(r.name,e),o==="accessor"){const{name:a}=r;return{set(l){const n=t.get.call(this);t.set.call(this,l),this.requestUpdate(a,n,e)},init(l){return l!==void 0&&this.P(a,void 0,e),l}}}if(o==="setter"){const{name:a}=r;return function(l){const n=this[a];t.call(this,l),this.requestUpdate(a,n,e)}}throw Error("Unsupported decorator location: "+o)};function u(e){return(t,r)=>typeof r=="object"?or(e,t,r):((o,s,i)=>{const a=s.hasOwnProperty(i);return s.constructor.createProperty(i,a?{...o,wrapped:!0}:o),a?Object.getOwnPropertyDescriptor(s,i):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Dt(e){return u({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zt=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function sr(e,t){return(r,o,s)=>{const i=a=>a.renderRoot?.querySelector(e)??null;if(t){const{get:a,set:l}=typeof o=="object"?r:s??(()=>{const n=Symbol();return{get(){return this[n]},set(c){this[n]=c}}})();return Zt(r,o,{get(){let n=a.call(this);return n===void 0&&(n=i(this),(n!==null||this.hasUpdated)&&l.call(this,n)),n}})}return Zt(r,o,{get(){return i(this)}})}}const ir="modulepreload",ar=function(e){return"/"+e},Jt={},gt=function(t,r,o){let s=Promise.resolve();if(r&&r.length>0){const i=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");s=Promise.all(r.map(n=>{if(n=ar(n),n in Jt)return;Jt[n]=!0;const c=n.endsWith(".css"),b=c?'[rel="stylesheet"]':"";if(!!o)for(let v=i.length-1;v>=0;v--){const _=i[v];if(_.href===n&&(!c||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${b}`))return;const g=document.createElement("link");if(g.rel=c?"stylesheet":ir,c||(g.as="script",g.crossOrigin=""),g.href=n,l&&g.setAttribute("nonce",l),document.head.appendChild(g),c)return new Promise((v,_)=>{g.addEventListener("load",v),g.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${n}`)))})}))}return s.then(()=>t()).catch(i=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i})},Ot=Symbol.for("app-tools::log::1.x");globalThis[Ot]={setDebug:nr,debug:"window"in globalThis?new URL(window.location.href).searchParams.has("app-tools-debug"):!1};function nr(e){globalThis[Ot].debug=!!e}function lr(e,t){globalThis[Ot].debug&&(console.groupCollapsed(`[app-tools] ${e}`),t&&console.log(t),console.groupEnd())}function cr(e){return(t,r)=>{lr(`${e}: ${t}`,r)}}const S=cr("router");class dr extends Event{constructor(t){super("route-changed"),this.context=t}}class ur extends EventTarget{context={params:{},query:{},title:"",url:new URL(window.location.href)};constructor(t){super(),this.config=t,this.routes=t.routes.map(r=>({...r,urlPattern:new URLPattern({pathname:r.path,baseURL:window.location.href,search:"*",hash:"*"})})),S("Initialized routes",this.routes),queueMicrotask(()=>{this.navigate(new URL(window.location.href),{replace:!0})}),window.addEventListener("popstate",this._onPopState),window.addEventListener("click",this._onAnchorClick)}uninstall(){window.removeEventListener("popstate",this._onPopState),window.removeEventListener("click",this._onAnchorClick)}get url(){return new URL(window.location.href)}get fallback(){return new URL(this.config?.fallback||this.baseUrl.href.substring(window.location.origin.length),this.baseUrl)}get baseUrl(){return new URL("./",document.baseURI)}render(){return S(`Rendering route ${this.context.url.pathname}${this.context.url.search}${this.context.url.hash}`,{context:this.context,route:this.route}),this.route?.render?.(this.context)}_matchRoute(t){for(const r of this.routes){const o=r.urlPattern.exec(t);if(o){const{title:s}=r,i=Object.fromEntries(new URLSearchParams(t.search)),a=o?.pathname?.groups??{};return this.context={url:t,title:typeof s=="function"?s({params:a,query:i,url:t}):s,params:a,query:i},r}}return S(`No route matched for ${t.pathname}${t.search}${t.hash}`,t),null}_notifyUrlChanged(){this.dispatchEvent(new dr(this.context))}_onPopState=()=>{this.navigate(new URL(window.location.href),{backNav:!0})};_onAnchorClick=t=>{if(t.defaultPrevented||t.button!==0||t.metaKey||t.ctrlKey||t.shiftKey)return;const r=t.composedPath().find(i=>i.tagName==="A");if(!r||!r.href)return;const o=new URL(r.href);if(this.url.href===o.href||o.host!==window.location.host||r.hasAttribute("download")||r.href.includes("mailto:"))return;const s=r.getAttribute("target");s&&s!==""&&s!=="_self"||(t.preventDefault(),this.navigate(o))};_collectPlugins(t){return[...this.config?.plugins??[],...t?.plugins??[]]}async navigate(t,r={}){typeof t=="string"&&(t=new URL(t,this.baseUrl));let o=this._matchRoute(t)||this._matchRoute(this.fallback);S(`Navigating to ${t.pathname}${t.search}${t.hash}`,{context:this.context,route:this.route});let s=this._collectPlugins(o);for(const i of s)try{const a=await i?.shouldNavigate?.(this.context);a&&(await a.condition()||(t=new URL(a.redirect,this.baseUrl),o=this._matchRoute(t)||this._matchRoute(this.fallback),s=this._collectPlugins(o),S("Redirecting",{context:this.context,route:this.route})))}catch(a){throw S(`Plugin "${i.name}" error on shouldNavigate hook`,a),a}if(this.route=o,!this.route)throw new Error(`[ROUTER] No route or fallback matched for url ${t}`);for(const i of s)try{await i?.beforeNavigation?.(this.context)}catch(a){throw S(`Plugin "${i.name}" error on beforeNavigation hook`,a),a}r?.replace?window.history.replaceState(null,"",`${t.pathname}${t.search}${t.hash}`):r.backNav||window.history.pushState(null,"",`${t.pathname}${t.search}${t.hash}`),document.title=this.context.title,this._notifyUrlChanged();for(const i of s)try{await i?.afterNavigation?.(this.context)}catch(a){throw S(`Plugin "${i.name}" error on afterNavigation hook`,a),a}}}function Yt(e){return{name:"lazy",beforeNavigation:()=>{e()}}}globalThis.URLPattern||await gt(()=>import("./index-CqHS4zRL.js"),[]);const hr="/",Xt=new ur({routes:[{path:j(),title:"Home",render:()=>y`<app-home></app-home>`},{path:j("about"),title:"About",plugins:[Yt(()=>gt(()=>import("./app-about-V6YMymFm.js"),[]))],render:()=>y`<app-about></app-about>`},{path:j("diet"),title:"Diet",plugins:[Yt(()=>gt(()=>import("./diet-page-DSI1FKHk.js"),[]))],render:()=>y`<diet-page></diet-page>`}]});function j(e){var t=hr;return e&&(t=t+e),t}var pr=C`
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
`,ve=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=r=>{const o=r.target;(this.slotNames.includes("[default]")&&!o.name||o.name&&this.slotNames.includes(o.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},nt=C`
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
`,ye=Object.defineProperty,br=Object.defineProperties,fr=Object.getOwnPropertyDescriptor,mr=Object.getOwnPropertyDescriptors,Qt=Object.getOwnPropertySymbols,gr=Object.prototype.hasOwnProperty,vr=Object.prototype.propertyIsEnumerable,dt=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),te=(e,t,r)=>t in e?ye(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Z=(e,t)=>{for(var r in t||(t={}))gr.call(t,r)&&te(e,r,t[r]);if(Qt)for(var r of Qt(t))vr.call(t,r)&&te(e,r,t[r]);return e},we=(e,t)=>br(e,mr(t)),d=(e,t,r,o)=>{for(var s=o>1?void 0:o?fr(t,r):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(s=(o?a(t,r,s):a(s))||s);return o&&s&&ye(t,r,s),s},yr=function(e,t){this[0]=e,this[1]=t},Ao=e=>{var t=e[dt("asyncIterator")],r=!1,o,s={};return t==null?(t=e[dt("iterator")](),o=i=>s[i]=a=>t[i](a)):(t=t.call(e),o=i=>s[i]=a=>{if(r){if(r=!1,i==="throw")throw a;return a}return r=!0,{done:!1,value:new yr(new Promise(l=>{var n=t[i](a);if(!(n instanceof Object))throw TypeError("Object expected");l(n)}),1)}}),s[dt("iterator")]=()=>s,o("next"),"throw"in t?o("throw"):s.throw=i=>{throw i},"return"in t&&o("return"),s},E=class extends x{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const r=new CustomEvent(e,Z({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(r),r}static define(e,t=this,r={}){const o=customElements.get(e);if(!o){customElements.define(e,class extends t{},r);return}let s=" (unknown version)",i=s;"version"in t&&t.version&&(s=" v"+t.version),"version"in o&&o.version&&(i=" v"+o.version),!(s&&i&&s===i)&&console.warn(`Attempted to register <${e}>${s}, but <${e}>${i} has already been registered.`)}};E.version="2.15.0";E.dependencies={};d([u()],E.prototype,"dir",2);d([u()],E.prototype,"lang",2);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},_r=e=>(...t)=>({_$litDirective$:e,values:t});class $r{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,o){this._$Ct=t,this._$AM=r,this._$Ci=o}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _e=_r(class extends $r{constructor(e){if(super(e),e.type!==wr.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(t)}const r=e.element.classList;for(const o of this.st)o in t||(r.remove(o),this.st.delete(o));for(const o in t){const s=!!t[o];s===this.st.has(o)||this.nt?.has(o)||(s?(r.add(o),this.st.add(o)):(r.remove(o),this.st.delete(o)))}return L}});var $e=class extends E{constructor(){super(...arguments),this.hasSlotController=new ve(this,"footer","header","image")}render(){return y`
      <div
        part="base"
        class=${_e({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};$e.styles=[nt,pr];$e.define("sl-card");var Cr=C`
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
`;const vt=new Set,Sr=new MutationObserver(xe),O=new Map;let Ce=document.documentElement.dir||"ltr",Se=document.documentElement.lang||navigator.language,k;Sr.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function Ae(...e){e.map(t=>{const r=t.$code.toLowerCase();O.has(r)?O.set(r,Object.assign(Object.assign({},O.get(r)),t)):O.set(r,t),k||(k=t)}),xe()}function xe(){Ce=document.documentElement.dir||"ltr",Se=document.documentElement.lang||navigator.language,[...vt.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let Ar=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){vt.add(this.host)}hostDisconnected(){vt.delete(this.host)}dir(){return`${this.host.dir||Ce}`.toLowerCase()}lang(){return`${this.host.lang||Se}`.toLowerCase()}getTranslationData(t){var r,o;const s=new Intl.Locale(t.replace(/_/g,"-")),i=s?.language.toLowerCase(),a=(o=(r=s?.region)===null||r===void 0?void 0:r.toLowerCase())!==null&&o!==void 0?o:"",l=O.get(`${i}-${a}`),n=O.get(i);return{locale:s,language:i,region:a,primary:l,secondary:n}}exists(t,r){var o;const{primary:s,secondary:i}=this.getTranslationData((o=r.lang)!==null&&o!==void 0?o:this.lang());return r=Object.assign({includeFallback:!1},r),!!(s&&s[t]||i&&i[t]||r.includeFallback&&k&&k[t])}term(t,...r){const{primary:o,secondary:s}=this.getTranslationData(this.lang());let i;if(o&&o[t])i=o[t];else if(s&&s[t])i=s[t];else if(k&&k[t])i=k[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof i=="function"?i(...r):i}date(t,r){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),r).format(t)}number(t,r){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),r).format(t)}relativeTime(t,r,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(t,r)}};var Ee={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};Ae(Ee);var xr=Ee,Pe=class extends Ar{};Ae(xr);var ke=class extends E{constructor(){super(...arguments),this.localize=new Pe(this)}render(){return y`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};ke.styles=[nt,Cr];var U=new WeakMap,R=new WeakMap,z=new WeakMap,ut=new WeakSet,J=new WeakMap,Er=class{constructor(e,t){this.handleFormData=r=>{const o=this.options.disabled(this.host),s=this.options.name(this.host),i=this.options.value(this.host),a=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!o&&!a&&typeof s=="string"&&s.length>0&&typeof i<"u"&&(Array.isArray(i)?i.forEach(l=>{r.formData.append(s,l.toString())}):r.formData.append(s,i.toString()))},this.handleFormSubmit=r=>{var o;const s=this.options.disabled(this.host),i=this.options.reportValidity;this.form&&!this.form.noValidate&&((o=U.get(this.form))==null||o.forEach(a=>{this.setUserInteracted(a,!0)})),this.form&&!this.form.noValidate&&!s&&!i(this.host)&&(r.preventDefault(),r.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),J.set(this.host,[])},this.handleInteraction=r=>{const o=J.get(this.host);o.includes(r.type)||o.push(r.type),o.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const o of r)if(typeof o.checkValidity=="function"&&!o.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const o of r)if(typeof o.reportValidity=="function"&&!o.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=Z({form:r=>{const o=r.form;if(o){const i=r.getRootNode().querySelector(`#${o}`);if(i)return i}return r.closest("form")},name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>{var o;return(o=r.disabled)!=null?o:!1},reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,checkValidity:r=>typeof r.checkValidity=="function"?r.checkValidity():!0,setValue:(r,o)=>r.value=o,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),J.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),J.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,U.has(this.form)?U.get(this.form).add(this.host):U.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),R.has(this.form)||(R.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),z.has(this.form)||(z.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=U.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),R.has(this.form)&&(this.form.reportValidity=R.get(this.form),R.delete(this.form)),z.has(this.form)&&(this.form.checkValidity=z.get(this.form),z.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?ut.add(e):ut.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const r=document.createElement("button");r.type=e,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",t&&(r.name=t.name,r.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(o=>{t.hasAttribute(o)&&r.setAttribute(o,t.getAttribute(o))})),this.form.append(r),r.click(),r.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,r=!!ut.has(t),o=!!t.required;t.toggleAttribute("data-required",o),t.toggleAttribute("data-optional",!o),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&r),t.toggleAttribute("data-user-valid",e&&r)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e?.preventDefault()}},It=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),Eo=Object.freeze(we(Z({},It),{valid:!1,valueMissing:!0})),Po=Object.freeze(we(Z({},It),{valid:!1,customError:!0})),Pr=C`
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
`,yt="";function wt(e){yt=e}function kr(e=""){if(!yt){const t=[...document.getElementsByTagName("script")],r=t.find(o=>o.hasAttribute("data-shoelace"));if(r)wt(r.getAttribute("data-shoelace"));else{const o=t.find(i=>/shoelace(\.min)?\.js($|\?)/.test(i.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(i.src));let s="";o&&(s=o.getAttribute("src")),wt(s.split("/").slice(0,-1).join("/"))}}return yt.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var Mr={name:"default",resolver:e=>kr(`assets/icons/${e}.svg`)},Nr=Mr,ee={caret:`
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
  `},Tr={name:"system",resolver:e=>e in ee?`data:image/svg+xml,${encodeURIComponent(ee[e])}`:""},Lr=Tr,Dr=[Nr,Lr],_t=[];function Or(e){_t.push(e)}function Ir(e){_t=_t.filter(t=>t!==e)}function re(e){return Dr.find(t=>t.name===e)}var Br=C`
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
`;function Bt(e,t){const r=Z({waitUntilFirstUpdate:!1},t);return(o,s)=>{const{update:i}=o,a=Array.isArray(e)?e:[e];o.update=function(l){a.forEach(n=>{const c=n;if(l.has(c)){const b=l.get(c),h=this[c];b!==h&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[s](b,h)}}),i.call(this,l)}}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ur=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,ko=e=>e.strings===void 0,Rr={},Mo=(e,t=Rr)=>e._$AH=t;var F=Symbol(),Y=Symbol(),ht,pt=new Map,w=class extends E{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var r;let o;if(t?.spriteSheet){this.svg=y`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;const s=this.shadowRoot.querySelector("[part='svg']");return typeof t.mutator=="function"&&t.mutator(s),this.svg}try{if(o=await fetch(e,{mode:"cors"}),!o.ok)return o.status===410?F:Y}catch{return Y}try{const s=document.createElement("div");s.innerHTML=await o.text();const i=s.firstElementChild;if(((r=i?.tagName)==null?void 0:r.toLowerCase())!=="svg")return F;ht||(ht=new DOMParser);const l=ht.parseFromString(i.outerHTML,"text/html").body.querySelector("svg");return l?(l.part.add("svg"),document.adoptNode(l)):F}catch{return F}}connectedCallback(){super.connectedCallback(),Or(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Ir(this)}getIconSource(){const e=re(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:r}=this.getIconSource(),o=r?re(this.library):void 0;if(!t){this.svg=null;return}let s=pt.get(t);if(s||(s=this.resolveIcon(t,o),pt.set(t,s)),!this.initialRender)return;const i=await s;if(i===Y&&pt.delete(t),t===this.getIconSource().url){if(Ur(i)){this.svg=i;return}switch(i){case Y:case F:this.svg=null,this.emit("sl-error");break;default:this.svg=i.cloneNode(!0),(e=o?.mutator)==null||e.call(o,this.svg),this.emit("sl-load")}}}render(){return this.svg}};w.styles=[nt,Br];d([Dt()],w.prototype,"svg",2);d([u({reflect:!0})],w.prototype,"name",2);d([u()],w.prototype,"src",2);d([u()],w.prototype,"label",2);d([u({reflect:!0})],w.prototype,"library",2);d([Bt("label")],w.prototype,"handleLabelChange",1);d([Bt(["name","src","library"])],w.prototype,"setIcon",1);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Me=Symbol.for(""),zr=e=>{if(e?.r===Me)return e?._$litStatic$},oe=(e,...t)=>({_$litStatic$:t.reduce((r,o,s)=>r+(i=>{if(i._$litStatic$!==void 0)return i._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${i}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+e[s+1],e[0]),r:Me}),se=new Map,Fr=e=>(t,...r)=>{const o=r.length;let s,i;const a=[],l=[];let n,c=0,b=!1;for(;c<o;){for(n=t[c];c<o&&(i=r[c],(s=zr(i))!==void 0);)n+=s+t[++c],b=!0;c!==o&&l.push(i),a.push(n),c++}if(c===o&&a.push(t[o]),b){const h=a.join("$$lit$$");(t=se.get(h))===void 0&&(a.raw=a,se.set(h,t=a)),r=l}return e(t,...r)},bt=Fr(y);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $=e=>e??m;var p=class extends E{constructor(){super(...arguments),this.formControlController=new Er(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new ve(this,"[default]","prefix","suffix"),this.localize=new Pe(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:It}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?oe`a`:oe`button`;return bt`
      <${t}
        part="base"
        class=${_e({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${$(e?void 0:this.disabled)}
        type=${$(e?void 0:this.type)}
        title=${this.title}
        name=${$(e?void 0:this.name)}
        value=${$(e?void 0:this.value)}
        href=${$(e?this.href:void 0)}
        target=${$(e?this.target:void 0)}
        download=${$(e?this.download:void 0)}
        rel=${$(e?this.rel:void 0)}
        role=${$(e?void 0:"button")}
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
        ${this.caret?bt` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?bt`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};p.styles=[nt,Pr];p.dependencies={"sl-icon":w,"sl-spinner":ke};d([sr(".button")],p.prototype,"button",2);d([Dt()],p.prototype,"hasFocus",2);d([Dt()],p.prototype,"invalid",2);d([u()],p.prototype,"title",2);d([u({reflect:!0})],p.prototype,"variant",2);d([u({reflect:!0})],p.prototype,"size",2);d([u({type:Boolean,reflect:!0})],p.prototype,"caret",2);d([u({type:Boolean,reflect:!0})],p.prototype,"disabled",2);d([u({type:Boolean,reflect:!0})],p.prototype,"loading",2);d([u({type:Boolean,reflect:!0})],p.prototype,"outline",2);d([u({type:Boolean,reflect:!0})],p.prototype,"pill",2);d([u({type:Boolean,reflect:!0})],p.prototype,"circle",2);d([u()],p.prototype,"type",2);d([u()],p.prototype,"name",2);d([u()],p.prototype,"value",2);d([u()],p.prototype,"href",2);d([u()],p.prototype,"target",2);d([u()],p.prototype,"rel",2);d([u()],p.prototype,"download",2);d([u()],p.prototype,"form",2);d([u({attribute:"formaction"})],p.prototype,"formAction",2);d([u({attribute:"formenctype"})],p.prototype,"formEnctype",2);d([u({attribute:"formmethod"})],p.prototype,"formMethod",2);d([u({attribute:"formnovalidate",type:Boolean})],p.prototype,"formNoValidate",2);d([u({attribute:"formtarget"})],p.prototype,"formTarget",2);d([Bt("disabled",{waitUntilFirstUpdate:!0})],p.prototype,"handleDisabledChange",1);p.define("sl-button");const Vr=C`
  @media(min-width: 1000px) {
    sl-card {
      max-width: 70vw;
    }
  }
`;var jr=Object.defineProperty,Hr=Object.getOwnPropertyDescriptor,Ne=(e,t,r,o)=>{for(var s=o>1?void 0:o?Hr(t,r):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(s=(o?a(t,r,s):a(s))||s);return o&&s&&jr(t,r,s),s};let et=class extends x{constructor(){super(...arguments),this.message="Welcome!"}async firstUpdated(){console.log("This is your home page")}share(){navigator.share&&navigator.share({title:"PWABuilder pwa-starter",text:"Check out the PWABuilder pwa-starter!",url:"https://github.com/pwa-builder/pwa-starter"})}render(){return y`
      <app-header></app-header>

      <main>
        <div id="welcomeBar">
          <sl-card id="welcomeCard">
            <div slot="header">
              <h2>${this.message}</h2>
            </div>

            <p>
              For more information on the PWABuilder pwa-starter, check out the
              <a href="https://docs.pwabuilder.com/#/starter/quick-start">
                documentation</a>.
            </p>

            <p id="mainInfo">
              Welcome to the
              <a href="https://pwabuilder.com">PWABuilder</a>
              pwa-starter! Be sure to head back to
              <a href="https://pwabuilder.com">PWABuilder</a>
              when you are ready to ship this PWA to the Microsoft Store, Google Play
              and the Apple App Store!
            </p>

            ${"share"in navigator?y`<sl-button slot="footer" variant="primary" @click="${this.share}">Share this Starter!</sl-button>`:null}
          </sl-card>


          <sl-button href="${j("diet")}" variant="primary">Navigate to Diet</sl-button>
        </div>
      </main>
    `}};et.styles=[Vr,C`
    #welcomeBar {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    #welcomeCard,
    #infoCard {
      padding: 18px;
      padding-top: 0px;
    }

    sl-card::part(footer) {
      display: flex;
      justify-content: flex-end;
    }

    @media(min-width: 750px) {
      sl-card {
        width: 70vw;
      }
    }


    @media (horizontal-viewport-segments: 2) {
      #welcomeBar {
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
      }

      #welcomeCard {
        margin-right: 64px;
      }
    }
  `];Ne([u()],et.prototype,"message",2);et=Ne([Lt("app-home")],et);var Wr=Object.defineProperty,qr=Object.getOwnPropertyDescriptor,Ut=(e,t,r,o)=>{for(var s=o>1?void 0:o?qr(t,r):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(s=(o?a(t,r,s):a(s))||s);return o&&s&&Wr(t,r,s),s};let G=class extends x{constructor(){super(...arguments),this.title="PWA Starter",this.enableBack=!1}render(){return y`
      <header>

        <div id="back-button-block">
          ${this.enableBack?y`<sl-button size="small" href="${j()}">
            Back
          </sl-button>`:null}

          <h1>${this.title}</h1>
        </div>
      </header>
    `}};G.styles=C`
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: var(--app-color-primary);
      color: white;
      padding: 12px;
      padding-top: 4px;

      position: fixed;
      left: env(titlebar-area-x, 0);
      top: env(titlebar-area-y, 0);
      height: env(titlebar-area-height, 30px);
      width: env(titlebar-area-width, 100%);
      -webkit-app-region: drag;
    }

    header h1 {
      margin-top: 0;
      margin-bottom: 0;
      font-size: 12px;
      font-weight: bold;
    }

    nav a {
      margin-left: 10px;
    }

    #back-button-block {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
    }

    @media(prefers-color-scheme: light) {
      header {
        color: black;
      }

      nav a {
        color: initial;
      }
    }
  `;Ut([u({type:String})],G.prototype,"title",2);Ut([u({type:Boolean})],G.prototype,"enableBack",2);G=Ut([Lt("app-header")],G);w.define("sl-icon");class rt{static{this.dbName="dietGoals"}}class ie{constructor(){this.Committed=!1}static{this.dbName="foodEntry"}}class ot{static{this.dbName="personalInfo"}}const $t=(e,t)=>t.some(r=>e instanceof r);let ae,ne;function Gr(){return ae||(ae=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Kr(){return ne||(ne=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ct=new WeakMap,ft=new WeakMap,lt=new WeakMap;function Zr(e){const t=new Promise((r,o)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{r(N(e.result)),s()},a=()=>{o(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",a)});return lt.set(t,e),t}function Jr(e){if(Ct.has(e))return;const t=new Promise((r,o)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{r(),s()},a=()=>{o(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)});Ct.set(e,t)}let St={get(e,t,r){if(e instanceof IDBTransaction){if(t==="done")return Ct.get(e);if(t==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return N(e[t])},set(e,t,r){return e[t]=r,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Te(e){St=e(St)}function Yr(e){return Kr().includes(e)?function(...t){return e.apply(At(this),t),N(this.request)}:function(...t){return N(e.apply(At(this),t))}}function Xr(e){return typeof e=="function"?Yr(e):(e instanceof IDBTransaction&&Jr(e),$t(e,Gr())?new Proxy(e,St):e)}function N(e){if(e instanceof IDBRequest)return Zr(e);if(ft.has(e))return ft.get(e);const t=Xr(e);return t!==e&&(ft.set(e,t),lt.set(t,e)),t}const At=e=>lt.get(e);function Qr(e,t,{blocked:r,upgrade:o,blocking:s,terminated:i}={}){const a=indexedDB.open(e,t),l=N(a);return o&&a.addEventListener("upgradeneeded",n=>{o(N(a.result),n.oldVersion,n.newVersion,N(a.transaction),n)}),r&&a.addEventListener("blocked",n=>r(n.oldVersion,n.newVersion,n)),l.then(n=>{i&&n.addEventListener("close",()=>i()),s&&n.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const to=["get","getKey","getAll","getAllKeys","count"],eo=["put","add","delete","clear"],mt=new Map;function le(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(mt.get(t))return mt.get(t);const r=t.replace(/FromIndex$/,""),o=t!==r,s=eo.includes(r);if(!(r in(o?IDBIndex:IDBObjectStore).prototype)||!(s||to.includes(r)))return;const i=async function(a,...l){const n=this.transaction(a,s?"readwrite":"readonly");let c=n.store;return o&&(c=c.index(l.shift())),(await Promise.all([c[r](...l),s&&n.done]))[0]};return mt.set(t,i),i}Te(e=>({...e,get:(t,r,o)=>le(t,r)||e.get(t,r,o),has:(t,r)=>!!le(t,r)||e.has(t,r)}));const ro=["continue","continuePrimaryKey","advance"],ce={},xt=new WeakMap,Le=new WeakMap,oo={get(e,t){if(!ro.includes(t))return e[t];let r=ce[t];return r||(r=ce[t]=function(...o){xt.set(this,Le.get(this)[t](...o))}),r}};async function*so(...e){let t=this;if(t instanceof IDBCursor||(t=await t.openCursor(...e)),!t)return;t=t;const r=new Proxy(t,oo);for(Le.set(r,t),lt.set(r,At(t));t;)yield r,t=await(xt.get(r)||t.continue()),xt.delete(r)}function de(e,t){return t===Symbol.asyncIterator&&$t(e,[IDBIndex,IDBObjectStore,IDBCursor])||t==="iterate"&&$t(e,[IDBIndex,IDBObjectStore])}Te(e=>({...e,get(t,r,o){return de(t,r)?so:e.get(t,r,o)},has(t,r){return de(t,r)||e.has(t,r)}}));async function No(){return await f.db.get(rt.dbName,1)}async function io(e){await f.db.put(rt.dbName,e,1)}async function To(){return await f.db.get(ot.dbName,1)}async function ao(e){await f.db.put(ot.dbName,e,1)}class no{constructor(){this.Calories=0,this.Protein=0,this.Carbs=0,this.Fat=0}}class st{constructor(){this.Diem=0,this.Today=0,this.Portion="100g",this.Macros=new no}static{this.dbName="food-item"}}class lo{constructor(){this.Diem=0,this.Today=0,this.Ingredients=[]}static{this.dbName="food-item"}}const Lo=e=>e instanceof lo||"Ingredients"in e,co=[{Name:"Chicken Wrap",Diem:1,Today:0,Ingredients:[{Name:"Chicken breast",Portion:"100g",Diem:1,Today:0,Macros:{Calories:165,Protein:31,Carbs:0,Fat:3.57},MainCategory:"Protein"},{Name:"30 cm Wrap",Portion:"piece",Diem:1,Today:0,Macros:{Calories:300,Protein:8.6,Carbs:50,Fat:7},MainCategory:"Carb"},{Name:"Greek yogurt 0 fat",Portion:"100g",Diem:1,Today:0,Macros:{Calories:70,Protein:20,Carbs:0,Fat:0},MainCategory:"Protein"}]},{Name:"Lentils",Portion:"100g",Today:0,Diem:3,Macros:{Calories:116,Protein:9,Carbs:20,Fat:.38},MainCategory:"Carb"},{Name:"Beans",Portion:"100g",Today:0,Diem:2,Macros:{Calories:130,Protein:8,Carbs:22.8,Fat:.5},MainCategory:"Carb"},{Name:"Rice",Portion:"100g",Today:0,Diem:2,Macros:{Calories:130,Protein:2.7,Carbs:28,Fat:.3},MainCategory:"Carb"},{Name:"Chicken breast",Portion:"100g",Today:0,Diem:1,Macros:{Calories:165,Protein:31,Carbs:0,Fat:3.57},MainCategory:"Protein"},{Name:"Egg",Portion:"piece",Today:0,Diem:2,Macros:{Calories:72,Protein:6,Carbs:0,Fat:5},MainCategory:"Protein"},{Name:"Milk",Portion:"100ml",Diem:2,Today:0,Macros:{Calories:46,Protein:3.5,Carbs:4.7,Fat:1.8},MainCategory:"Carb"},{Name:"30cm Wrap",Portion:"piece",Diem:1,Today:0,Macros:{Calories:300,Protein:8.6,Carbs:50,Fat:7},MainCategory:"Carb"},{Name:"Greek yogurt 0 fat",Portion:"100g",Today:0,Diem:1,Macros:{Calories:70,Protein:20,Carbs:0,Fat:0},MainCategory:"Protein"},{Name:"Sweet Potato",Portion:"100g",Today:0,Diem:0,Macros:{Calories:86,Protein:1.6,Carbs:20,Fat:0},MainCategory:"Carb"},{Name:"Olive Oil",Portion:"1tbsp",Diem:2,Today:0,Macros:{Calories:119,Protein:0,Carbs:0,Fat:14},MainCategory:"Fat"},{Name:"Beer",Portion:"pint",Today:0,Diem:0,Macros:{Calories:215,Protein:2.5,Carbs:18,Fat:0},MainCategory:"Carb"},{Name:"Pasta",Portion:"100g",Diem:0,Today:0,Macros:{Calories:350,Protein:12,Carbs:70,Fat:1.5},MainCategory:"Carb"},{Name:"Whey",Portion:"1tbsp",Today:0,Diem:1,Macros:{Calories:120,Protein:24,Carbs:1,Fat:1},MainCategory:"Protein"},{Name:"Assorted cookies",Portion:"piece",Today:0,Diem:4,Macros:{Calories:63,Protein:.8,Carbs:8.8,Fat:2.6},MainCategory:"Carb"},{Name:"Oats",Portion:"100g",Today:0,Diem:.3,Macros:{Calories:380,Protein:13,Carbs:67,Fat:6.5},MainCategory:"Carb"},{Name:"Popcorn",Portion:"100g",Today:0,Diem:0,Macros:{Calories:387,Protein:12.9,Carbs:77.8,Fat:4.54},MainCategory:"Carb"},{Name:"Cheat day",Portion:"piece",Today:0,Diem:0,Macros:{Calories:1e3,Protein:30,Carbs:60,Fat:60},MainCategory:"Fat"},{Name:"Banana",Portion:"piece",Today:0,Diem:0,Macros:{Calories:110,Protein:1,Carbs:28,Fat:0},MainCategory:"Carb"},{Name:"Apple",Portion:"piece",Today:0,Diem:0,Macros:{Calories:95,Protein:1,Carbs:25,Fat:9},MainCategory:"Carb"},{Name:"Orange",Portion:"piece",Today:0,Diem:0,Macros:{Calories:62,Protein:1,Carbs:15,Fat:0},MainCategory:"Carb"}],uo={Name:"",Age:30,Gender:"Male",Height:178,Weight:75},ho={ActivityLevel:"Sedentary",WeightGoal:"Gain_Weight",FatCarbSplit:50},po=[{Name:"Breakfast",StartTime:"05:00",EndTime:"09:00"},{Name:"2nd Breakfast",StartTime:"09:00",EndTime:"11:00"},{Name:"Lunch",StartTime:"11:00",EndTime:"14:00"},{Name:"Aft. Snack",StartTime:"14:00",EndTime:"17:00"},{Name:"Dinner",StartTime:"17:00",EndTime:"19:00"},{Name:"Moonlight Snacks",StartTime:"19:00",EndTime:"23:00"}];async function Do(){return await f.db.getAll(st.dbName)}async function bo(e){e.forEach(fo)}async function fo(e){await f.db.put(st.dbName,e)}class ue{constructor(){this.FoodsDiem=[],this.FoodsToday=[],this.Date=new Date}static{this.dbName="meal"}}class Et{static{this.dbName="meal-type"}}async function mo(e){e.forEach(go)}async function go(e){await f.db.put(Et.dbName,e)}const vo="bulk",yo=1;class f{static{this._needsSeed=!1}static get db(){return f._db}constructor(){f._db||Qr(vo,yo,{upgrade(t,r){switch(r){case 0:case 1:f.createFoodItemStore(t),f.createFoodEntryStore(t),f.createDietGoalsStore(t),f.createPersonalInfoStore(t),f.createMealTypes(t),f.createMeals(t),f._needsSeed=!0}}}).then(t=>f._db=t).then(async t=>await this._SeedDB())}async _SeedDB(){if(f._needsSeed)return Promise.all([io(ho),ao(uo),bo(co),mo(po)])}static createFoodItemStore(t){t.objectStoreNames.contains(st.dbName)||t.createObjectStore(st.dbName,{keyPath:"Name"})}static createMealTypes(t){t.objectStoreNames.contains(Et.dbName)||t.createObjectStore(Et.dbName,{keyPath:"Name"}).createIndex("StartTime","StartTime")}static createMeals(t){t.objectStoreNames.contains(ue.dbName)||t.createObjectStore(ue.dbName,{keyPath:"Id",autoIncrement:!0}).createIndex("Date","Date")}static createFoodEntryStore(t){t.objectStoreNames.contains(ie.dbName)||t.createObjectStore(ie.dbName,{keyPath:"Id",autoIncrement:!0}).createIndex("Date","Date")}static createDietGoalsStore(t){t.objectStoreNames.contains(rt.dbName)||t.createObjectStore(rt.dbName,{autoIncrement:!1})}static createPersonalInfoStore(t){t.objectStoreNames.contains(ot.dbName)||t.createObjectStore(ot.dbName,{autoIncrement:!1})}}var wo=Object.defineProperty,_o=Object.getOwnPropertyDescriptor,$o=(e,t,r,o)=>{for(var s=o>1?void 0:o?_o(t,r):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(s=(o?a(t,r,s):a(s))||s);return o&&s&&wo(t,r,s),s};wt("/shoelace");let Pt=class extends x{firstUpdated(){new f,Xt.addEventListener("route-changed",()=>{"startViewTransition"in document?document.startViewTransition(()=>this.requestUpdate()):this.requestUpdate()})}render(){return y`
      <sl-resize-observer id="resizer"> ${Xt.render()} </sl-resize-observer>
    `}};Pt.styles=C`
    main {
      padding-left: 16px;
      padding-right: 16px;
      padding-bottom: 16px;
    }
  `;Pt=$o([Lt("app-index")],Pt);export{Mo as A,io as B,ao as C,Po as D,Eo as E,Er as F,No as G,ve as H,It as I,Pr as J,lo as K,Pe as L,st as M,Ao as N,Do as O,fo as P,w as S,m as T,d as _,Vr as a,To as b,Lo as c,nt as d,Zt as e,sr as f,E as g,oe as h,C as i,bt as j,_e as k,we as l,Z as m,u as n,$ as o,$r as p,wr as q,Dt as r,x as s,Lt as t,Q as u,_r as v,L as w,y as x,Bt as y,ko as z};
//# sourceMappingURL=index-BvBDi-fv.js.map
