import{j as ri,i as x,u as fo,k as ve,l as ye,m as nt,p as ai,q as wt,T as H,v as Oo,c as X,h as we,_ as l,e as z,r as v,n,w as N,S as J,F as Ue,H as Xt,L as $t,x as h,b as R,o as S,t as D,s as E,y as At,P as L,D as Ge,z as Jt,G as Eo,f as Do,A as mo,B as Po,C as Ke,E as Qe,I as li,J as ni,K as ci,M as di,N as hi,O as Ye,Q as ui,R as bt,U as qt,V as De,W as pi,X as fi,Y as mi,Z as gi,a as bi,$ as vi}from"./index-DcatTtSZ.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function yi(t){return(e,o)=>ri(e,o,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(t)??null}})}class wi{constructor(e){this.time=e,this.visible=!1}}var _i=x`
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
`,To=(t="value")=>(e,o)=>{const s=e.constructor,i=s.prototype.attributeChangedCallback;s.prototype.attributeChangedCallback=function(r,a,c){var d;const u=s.getPropertyOptions(t),m=typeof u.attribute=="string"?u.attribute:t;if(r===m){const f=u.converter||fo,p=(typeof f=="function"?f:(d=f?.fromAttribute)!=null?d:fo.fromAttribute)(c,u.type);this[t]!==p&&(this[o]=p)}i.call(this,r,a,c)}},Xe=x`
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
 */const xi=ve(class extends ye{constructor(t){if(super(t),t.type!==nt.PROPERTY&&t.type!==nt.ATTRIBUTE&&t.type!==nt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!ai(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===wt||e===H)return e;const o=t.element,s=t.name;if(t.type===nt.PROPERTY){if(e===o[s])return wt}else if(t.type===nt.BOOLEAN_ATTRIBUTE){if(!!e===o.hasAttribute(s))return wt}else if(t.type===nt.ATTRIBUTE&&o.getAttribute(s)===e+"")return wt;return Oo(t),e}});var _=class extends J{constructor(){super(...arguments),this.formControlController=new Ue(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Xt(this,"help-text","label"),this.localize=new $t(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((t=this.input)==null?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,((t=this.input)==null?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!e&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,o="none"){this.input.setSelectionRange(t,e,o)}setRangeText(t,e,o,s="preserve"){const i=e??this.input.selectionStart,r=o??this.input.selectionEnd;this.input.setRangeText(t,i,r,s),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=this.label?!0:!!t,s=this.helpText?!0:!!e,r=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return h`
      <div
        part="form-control"
        class=${R({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":o,"form-control--has-help-text":s})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${R({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
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
              name=${S(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${S(this.placeholder)}
              minlength=${S(this.minlength)}
              maxlength=${S(this.maxlength)}
              min=${S(this.min)}
              max=${S(this.max)}
              step=${S(this.step)}
              .value=${xi(this.value)}
              autocapitalize=${S(this.autocapitalize)}
              autocomplete=${S(this.autocomplete)}
              autocorrect=${S(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${S(this.pattern)}
              enterkeyhint=${S(this.enterkeyhint)}
              inputmode=${S(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${r?h`
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
            ${this.passwordToggle&&!this.disabled?h`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?h`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:h`
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
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};_.styles=[X,Xe,_i];_.dependencies={"sl-icon":we};l([z(".input__control")],_.prototype,"input",2);l([v()],_.prototype,"hasFocus",2);l([n()],_.prototype,"title",2);l([n({reflect:!0})],_.prototype,"type",2);l([n()],_.prototype,"name",2);l([n()],_.prototype,"value",2);l([To()],_.prototype,"defaultValue",2);l([n({reflect:!0})],_.prototype,"size",2);l([n({type:Boolean,reflect:!0})],_.prototype,"filled",2);l([n({type:Boolean,reflect:!0})],_.prototype,"pill",2);l([n()],_.prototype,"label",2);l([n({attribute:"help-text"})],_.prototype,"helpText",2);l([n({type:Boolean})],_.prototype,"clearable",2);l([n({type:Boolean,reflect:!0})],_.prototype,"disabled",2);l([n()],_.prototype,"placeholder",2);l([n({type:Boolean,reflect:!0})],_.prototype,"readonly",2);l([n({attribute:"password-toggle",type:Boolean})],_.prototype,"passwordToggle",2);l([n({attribute:"password-visible",type:Boolean})],_.prototype,"passwordVisible",2);l([n({attribute:"no-spin-buttons",type:Boolean})],_.prototype,"noSpinButtons",2);l([n({reflect:!0})],_.prototype,"form",2);l([n({type:Boolean,reflect:!0})],_.prototype,"required",2);l([n()],_.prototype,"pattern",2);l([n({type:Number})],_.prototype,"minlength",2);l([n({type:Number})],_.prototype,"maxlength",2);l([n()],_.prototype,"min",2);l([n()],_.prototype,"max",2);l([n()],_.prototype,"step",2);l([n()],_.prototype,"autocapitalize",2);l([n()],_.prototype,"autocorrect",2);l([n()],_.prototype,"autocomplete",2);l([n({type:Boolean})],_.prototype,"autofocus",2);l([n()],_.prototype,"enterkeyhint",2);l([n({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],_.prototype,"spellcheck",2);l([n()],_.prototype,"inputmode",2);l([N("disabled",{waitUntilFirstUpdate:!0})],_.prototype,"handleDisabledChange",1);l([N("step",{waitUntilFirstUpdate:!0})],_.prototype,"handleStepChange",1);l([N("value",{waitUntilFirstUpdate:!0})],_.prototype,"handleValueChange",1);_.define("sl-input");const zo=new Map([["Calories","🔥"],["Protein","P"],["Carbs","C"],["Fat","F"]]),$i=new Map([["Sedentary",1.2],["Lightly_Active",1.375],["Moderately_Active",1.55],["Very_Active",1.725],["Extremely_Active",1.9]]),Ci=new Map([["Lose_Weight",-20],["Slowly_Lose_Weight",-10],["Maintain_Weight",0],["Slowly_Gain_Weight",10],["Gain_Weight",20]]),ki=new Map([["Male",5],["Female",-160]]),Wr=["Lose_Weight","Slowly_Lose_Weight","Maintain_Weight","Slowly_Gain_Weight","Gain_Weight"],Hr=["Sedentary","Lightly_Active","Moderately_Active","Very_Active","Extremely_Active"],_e=["Calories","Protein","Carbs","Fat"],Fi=["100g","100ml","piece","1 tbsp","shot","pint"];var Si=Object.defineProperty,Oi=Object.getOwnPropertyDescriptor,Ao=(t,e,o,s)=>{for(var i=s>1?void 0:s?Oi(e,o):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(i=(s?a(e,o,i):a(i))||i);return s&&i&&Si(e,o,i),i};let Ae=class extends E{constructor(){super(...arguments),this.miniMacro=t=>h`
    <div class="macro-wheel">
      <span> ${zo.get(t)} ${this.food.Macros[t]} </span>
    </div>
  `}static get styles(){return[x`
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
      `]}get food(){return this.foodEntry.Food}render(){return h`
      <div class="center">
        <div class="title">${this.food.Name}</div>
        <div class="bottom">
          <span>
            ${this.foodEntry.Quantity} x
            ${At(this.food)?"piece(s)":this.food.Portion}
          </span>
          <div class="macros">${_e.map(this.miniMacro)}</div>
        </div>
      </div>
    `}};Ao([n({attribute:!1})],Ae.prototype,"foodEntry",2);Ae=Ao([D("food-entry-item")],Ae);function T(t,e){return new CustomEvent(t,{bubbles:!0,composed:!0,detail:e})}var Ei=Object.defineProperty,Di=Object.getOwnPropertyDescriptor,xe=(t,e,o,s)=>{for(var i=s>1?void 0:s?Di(e,o):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(i=(s?a(e,o,i):a(i))||i);return s&&i&&Ei(e,o,i),i};let Ut=class extends E{constructor(){super(...arguments),this.foodEntries=[],this.totalMacros=t=>this.foodEntries.reduce((e,o)=>e+o.Food.Macros[t]*o.Quantity,0),this.AmendEntry=t=>e=>{this.dispatchEvent(T("on-show-food-drawer",{addEntry:!0,foodEntry:t}))},this.AddEntryAtTime=t=>{this.dispatchEvent(T("time-selected",{time:this.timeSlot.time})),this.dispatchEvent(T("on-show-food-drawer",{addEntry:!0}))},this.IsEmpty=()=>(this.foodEntries?.length??0)===0,this.DisplayFoodEntry=t=>h`<food-entry-item
      .foodEntry="${t}"
      @click="${this.AmendEntry(t)}"
    ></food-entry-item>`,this.DisplayMacro=t=>h`
    <div class="macro">
      <span>${zo.get(t)}</span>
      <span>${this.totalMacros(t)}</span>
    </div>
  `}static get styles(){return[x`
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
      `]}render(){return h`
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
          ${this.IsEmpty()?H:_e.map(this.DisplayMacro)}
        </div>
      </div>
      <div class="body">
        ${this.IsEmpty()?H:this.foodEntries.map(this.DisplayFoodEntry)}
      </div>
      <div class="timeline"></div>
    `}};xe([n({attribute:!1})],Ut.prototype,"foodEntries",2);xe([n({attribute:!1})],Ut.prototype,"timeSlot",2);xe([v()],Ut.prototype,"macros",2);Ut=xe([D("food-entry-card")],Ut);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Mo=class extends Event{constructor(e,o,s){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=o,this.subscribe=s??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let go=class{constructor(e,o,s,i){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(r,a)=>{this.unsubscribe&&(this.unsubscribe!==a&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=r,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(r,a)),this.unsubscribe=a},this.host=e,o.context!==void 0){const r=o;this.context=r.context,this.callback=r.callback,this.subscribe=r.subscribe??!1}else this.context=o,this.callback=s,this.subscribe=i??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Mo(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Pi{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,o=!1){const s=o||!Object.is(e,this.o);this.o=e,s&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[o,{disposer:s}]of this.subscriptions)o(this.o,s)},e!==void 0&&(this.value=e)}addCallback(e,o,s){if(!s)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:o});const{disposer:i}=this.subscriptions.get(e);e(this.value,i)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ti=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}},bo=class extends Pi{constructor(e,o,s){super(o.context!==void 0?o.initialValue:s),this.onContextRequest=i=>{const r=i.composedPath()[0];i.context===this.context&&r!==this.host&&(i.stopPropagation(),this.addCallback(i.callback,r,i.subscribe))},this.onProviderRequest=i=>{const r=i.composedPath()[0];if(i.context!==this.context||r===this.host)return;const a=new Set;for(const[c,{consumerHost:d}]of this.subscriptions)a.has(c)||(a.add(c),d.dispatchEvent(new Mo(this.context,c,!0)));i.stopPropagation()},this.host=e,o.context!==void 0?this.context=o.context:this.context=o,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Ti(this.context))}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Je({context:t}){return(e,o)=>{const s=new WeakMap;if(typeof o=="object")return o.addInitializer(function(){s.set(this,new bo(this,{context:t}))}),{get(){return e.get.call(this)},set(i){return s.get(this)?.setValue(i),e.set.call(this,i)},init(i){return s.get(this)?.setValue(i),i}};{e.constructor.addInitializer(a=>{s.set(a,new bo(a,{context:t}))});const i=Object.getOwnPropertyDescriptor(e,o);let r;if(i===void 0){const a=new WeakMap;r={get:function(){return a.get(this)},set:function(c){s.get(this).setValue(c),a.set(this,c)},configurable:!0,enumerable:!0}}else{const a=i.set;r={...i,set:function(c){s.get(this).setValue(c),a?.call(this,c)}}}return void Object.defineProperty(e,o,r)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function at({context:t,subscribe:e}){return(o,s)=>{typeof s=="object"?s.addInitializer(function(){new go(this,{context:t,callback:i=>{this[s.name]=i},subscribe:e})}):o.constructor.addInitializer(i=>{new go(i,{context:t,callback:r=>{i[s]=r},subscribe:e})})}}const $e=Symbol("daily-entries"),Zt=Symbol("selected-date"),Ce=Symbol("selected-time");var zi=Object.defineProperty,Ai=Object.getOwnPropertyDescriptor,ke=(t,e,o,s)=>{for(var i=s>1?void 0:s?Ai(e,o):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(i=(s?a(e,o,i):a(i))||i);return s&&i&&zi(e,o,i),i};let Gt=class extends E{constructor(){super(...arguments),this._foodEntries=[],this.day=L.Now.plainDateISO(),this._timeSlots=Array.from({length:24},(t,e)=>new wi(L.PlainTime.from({hour:e}))),this.HasEntries=t=>this._foodEntries?.some(e=>e.Quantity>0&&e.Time.equals(t)&&e.Date.equals(this.day)),this.NormalHours=t=>t>=6&&t<=22}static get styles(){return[x`
        :host {
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          width: 100%;
          height: 0;
          flex: 1 0 auto;
        }
        .hour-block {
          width: 100%;
        }
        .nothing {
          vertical-align: middle;
          text-align: center;
        }
      `]}TimeVisible(t){return this.HasEntries(t)||this.NormalHours(t.hour)}ChckVisibleTimes(){this._timeSlots=this._timeSlots.map(t=>({...t,visible:this.TimeVisible(t.time)}))}willUpdate(t){(t.has("day")||t.has("_foodEntries"))&&this.ChckVisibleTimes()}async firstUpdated(){this.ChckVisibleTimes(),this.hourBlocks.then(t=>{const e=L.Now.plainTimeISO().hour;this.shadowRoot?.getElementById(`time-${e}`)?.scrollIntoView()})}foodEntriesInHour(t){return this._foodEntries?.filter(e=>e.Date.equals(this.day)&&e.Quantity>0&&e.Time.hour===t)}render(){return h`
      ${this._timeSlots.filter(t=>t.visible).length===0?h`<br /><br /><br />
            <h1 class="nothing">No entries for this day (yet)</h1>`:this._timeSlots.filter(t=>t.visible).map(t=>h` <div class="hour-block" id="time-${t.time.hour}">
                <food-entry-card
                  .foodEntries="${this.foodEntriesInHour(t.time.hour)}"
                  .timeSlot="${t}"
                ></food-entry-card>
              </div>`)}
    `}};ke([yi(".hour-block")],Gt.prototype,"hourBlocks",2);ke([at({context:$e,subscribe:!0})],Gt.prototype,"_foodEntries",2);ke([at({context:Zt,subscribe:!0}),v()],Gt.prototype,"day",2);Gt=ke([D("food-entry-timeline")],Gt);async function Yr(t){return(await Ge.db.getAllFromIndex(Jt.dbName,"Date",t.toString())).map(e=>({...e,Date:L.PlainDate.from(e.Date),Time:L.PlainTime.from(e.Time)}))}async function Mi(t){t.forEach(Ze)}async function Ze(t){return await Ge.db.put(Jt.dbName,{...t,Date:t.Date.toString(),Time:t.Time.toString()})}async function Ii(t){return await Ge.db.delete(Jt.dbName,t)}const Li=x`
  :host {
    height: 100%;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    overflow: hidden;
  }
  main{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  sl-drawer.hideOverlay::part(overlay) {
    background-color: unset;
  }

  sl-drawer::part(panel) {
    transition: height 0.5s;
  }

  #add-food {
    width: 100%;
  }
`;var Ri=x`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,Mt=class extends J{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(t){const e=Wt(t.target);e?.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(t){const e=Wt(t.target);e?.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(t){const e=Wt(t.target);e?.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(t){const e=Wt(t.target);e?.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach(e=>{const o=t.indexOf(e),s=Wt(e);s&&(s.toggleAttribute("data-sl-button-group__button",!0),s.toggleAttribute("data-sl-button-group__button--first",o===0),s.toggleAttribute("data-sl-button-group__button--inner",o>0&&o<t.length-1),s.toggleAttribute("data-sl-button-group__button--last",o===t.length-1),s.toggleAttribute("data-sl-button-group__button--radio",s.tagName.toLowerCase()==="sl-radio-button"))})}render(){return h`
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
    `}};Mt.styles=[X,Ri];l([z("slot")],Mt.prototype,"defaultSlot",2);l([v()],Mt.prototype,"disableRole",2);l([n()],Mt.prototype,"label",2);function Wt(t){var e;const o="sl-button, sl-radio-button";return(e=t.closest(o))!=null?e:t.querySelector(o)}Mt.define("sl-button-group");var Bi=Object.defineProperty,Vi=Object.getOwnPropertyDescriptor,to=(t,e,o,s)=>{for(var i=s>1?void 0:s?Vi(e,o):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(i=(s?a(e,o,i):a(i))||i);return s&&i&&Bi(e,o,i),i};let ne=class extends E{constructor(){super(...arguments),this.showAddBtn=!0}static get styles(){return[x`
        :host {
          width: 100%;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          background: var(--sl-color-neutral-50);
          box-shadow: 0px -10px 8px rgb(0 0 0 / 24%);
          z-index: 80;
          min-height: 2.5rem;
        }
        .footer-menu-item {
          height: 100%;
          flex: 1 0 auto;
          display: flex;
          align-items: center;
          border-right: 1px solid var(--sl-color-neutral-300);
          justify-content: center;
        }
        sl-button {
          flex: 1 0 auto;
          justify-content: center;
          display: flex;
        }

        a.footer-menu-item {
          text-decoration: none;
          color: var(--sl-color-neutral-1000);
        }
        a.footer-menu-item p {
          font-size: var(--sl-font-size-small);
        }
      `]}MenuItem(t,e){return h`
      <a class="footer-menu-item" .href="${e}">
        <p>${t}</p>
      </a>
    `}render(){return h`
      ${this.MenuItem("Profile","/diet/profile")}
      ${this.MenuItem("Timeline","/diet/timeline")}
      ${this.showAddBtn?h`<sl-button
            size="large"
            circle
            @click="${()=>this.dispatchEvent(T("on-show-food-drawer",{addFood:!0}))}"
          >
            <sl-icon name="plus" label="Add Entry"></sl-icon>
          </sl-button>`:H}
    `}};to([n()],ne.prototype,"activePage",2);to([n({type:Boolean})],ne.prototype,"showAddBtn",2);ne=to([D("diet-page-footer")],ne);async function Ni(){const[t,e]=await Promise.all([Eo(),Do()]);return Io(e,t)}function Io(t,e){function o(){return Math.round(10*t.Weight+6.25*t.Height-5*t.Age+ki.get(t.Gender))}function s(){return Math.round(o()*$i.get(e.ActivityLevel))}function i(){return Math.round(s()*(1+Ci.get(e.WeightGoal)/100))}function r(){return Math.round(2.20462*t.Weight*1)}function a(){return Math.round((i()-4*r())*e.FatCarbSplit/900)}function c(){return Math.round((i()-4*r())*(100-e.FatCarbSplit)/400)}return{Calories:i(),Protein:r(),Carbs:c(),Fat:a()}}var ji=x`
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
 */const Lo="important",qi=" !"+Lo,Wi=ve(class extends ye{constructor(t){if(super(t),t.type!==nt.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,o)=>{const s=t[o];return s==null?e:e+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(t,[e]){const{style:o}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const s of this.ft)e[s]==null&&(this.ft.delete(s),s.includes("-")?o.removeProperty(s):o[s]=null);for(const s in e){const i=e[s];if(i!=null){this.ft.add(s);const r=typeof i=="string"&&i.endsWith(qi);s.includes("-")||r?o.setProperty(s,r?i.slice(0,-11):i,r?Lo:""):o[s]=i}}return wt}});var te=class extends J{constructor(){super(...arguments),this.localize=new $t(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return h`
      <div
        part="base"
        class=${R({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${S(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${Wi({width:`${this.value}%`})}>
          ${this.indeterminate?"":h` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};te.styles=[X,ji];l([n({type:Number,reflect:!0})],te.prototype,"value",2);l([n({type:Boolean,reflect:!0})],te.prototype,"indeterminate",2);l([n()],te.prototype,"label",2);te.define("sl-progress-bar");var Hi=Object.defineProperty,Ui=Object.getOwnPropertyDescriptor,Ro=(t,e,o,s)=>{for(var i=s>1?void 0:s?Ui(e,o):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(i=(s?a(e,o,i):a(i))||i);return s&&i&&Hi(e,o,i),i};let Me=class extends E{static get styles(){return[x`
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
      `]}get percent(){return this.macro.Today/this.macro.Goal*100}get symbol(){return this.macro.Macro==="Calories"?"🔥":this.macro.Macro==="Fat"?"F":this.macro.Macro==="Carbs"?"C":this.macro.Macro==="Protein"?"P":""}get color(){return this.macro.Macro==="Calories"?"goldenrod":this.macro.Macro==="Fat"?"yellow":this.macro.Macro==="Carbs"?"blueviolet":this.macro.Macro==="Protein"?"darkolivegreen":""}render(){const t=h`
      <div class="header">
        <span style="font-size: var(--sl-font-size-small)">${this.symbol}</span>
        <div class="header">
          <span>${Math.round(this.macro.Today)}</span>
          <span>/</span>
          <span>${Math.round(this.macro.Goal)}</span>
        </div>
      </div>
    `,e=h`<sl-progress-bar
      style="--height: var(--sl-spacing-2x-small); --indicator-color: ${this.color}"
      .value="${this.percent}"
      class="progress-bar-values"
    ></sl-progress-bar> `;return h`<div class="macro-tracker">${t} ${e}</div> `}};Ro([n({attribute:!1})],Me.prototype,"macro",2);Me=Ro([D("macro-tracker")],Me);var Gi=Object.defineProperty,Ki=Object.getOwnPropertyDescriptor,ee=(t,e,o,s)=>{for(var i=s>1?void 0:s?Ki(e,o):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(i=(s?a(e,o,i):a(i))||i);return s&&i&&Gi(e,o,i),i};let Dt=class extends E{constructor(){super(),this.entries=[],this._rendered=!1,this._macrosData=[{Macro:"Calories",Today:2767,Diem:2790,Goal:2800},{Macro:"Protein",Today:180,Diem:170,Goal:165},{Macro:"Carbs",Today:300,Diem:280,Goal:250},{Macro:"Fat",Today:80,Diem:65,Goal:70}],this._SetupGoalListeners(),this._SetupDiemListeners(),this._SetupTodayListeners()}static get styles(){return[x`
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
      `]}async firstUpdated(){const[t,e]=await Promise.all([Eo(),Do()]);this._diet=t,this._profile=e,this._UpdateGoal(),this._rendered=!0}willUpdate(t){this._rendered&&t.has("entries")&&this._UpdateGoal()}_SetupTodayListeners(){}_SetupDiemListeners(){}_SetupGoalListeners(){window.addEventListener("profile-changed",t=>{this._profile=t.detail,this._UpdateGoal()}),window.addEventListener("diet-profile-changed",t=>{this._diet=t.detail,this._UpdateGoal()})}_UpdateGoal(){const t=Io(this._profile,this._diet);this._macrosData=this._macrosData.map(e=>({...e,Goal:t[e.Macro],Today:this.calculateMacrosFoods(this.entries,e.Macro)}))}calculateMacrosFoods(t,e){return t?t.reduce((o,s)=>At(s.Food)?o+s.Food.Ingredients.reduce((i,r)=>r.Macros[e]*r.Quantity+i,0)*s.Quantity:o+s.Food.Macros[e]*s.Quantity,0):0}render(){return h`
      <macro-tracker .macro="${this._macrosData[0]}"></macro-tracker>
      <macro-tracker .macro="${this._macrosData[1]}"></macro-tracker>
      <macro-tracker .macro="${this._macrosData[2]}"></macro-tracker>
      <macro-tracker .macro="${this._macrosData[3]}"></macro-tracker>
    `}};ee([n({attribute:!1})],Dt.prototype,"entries",2);ee([v()],Dt.prototype,"_profile",2);ee([v()],Dt.prototype,"_diet",2);ee([v()],Dt.prototype,"_macrosData",2);Dt=ee([D("diet-totals")],Dt);const Bo=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Qi=["January","February","March","April","May","June","July","August","September","October","November","December"];var Yi=Object.defineProperty,Xi=Object.getOwnPropertyDescriptor,Vo=(t,e,o,s)=>{for(var i=s>1?void 0:s?Xi(e,o):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(i=(s?a(e,o,i):a(i))||i);return s&&i&&Yi(e,o,i),i};let Ie=class extends E{static get styles(){return[x`
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
      `]}get weekDay(){return Bo[this.date.dayOfWeek-1].slice(0,1)}get day(){return this.date.day<10?`0${this.date.day}`:this.date.day.toString()}render(){return h`
      <div class="date">
        <span>${this.weekDay}</span>
        <span>${this.day}</span>
      </div>
    `}};Vo([n({attribute:!1})],Ie.prototype,"date",2);Ie=Vo([D("date-header-item")],Ie);var Ji=Object.defineProperty,Zi=Object.getOwnPropertyDescriptor,eo=(t,e,o,s)=>{for(var i=s>1?void 0:s?Zi(e,o):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(i=(s?a(e,o,i):a(i))||i);return s&&i&&Ji(e,o,i),i};let ce=class extends E{constructor(){super(...arguments),this.daysToShow=[],this.selectDay=t=>e=>{this.dispatchEvent(T("day-selected",t))},this.moveWeek=t=>e=>{const o=this.currentDate.add({days:7*t});this.selectDay(o)(e)},this.renderDay=t=>{const e=L.Now.plainDateTimeISO();return h` <date-header-item
      @click="${this.selectDay(t)}"
      class="${t.equals(e)?"today":""} ${t.equals(this.currentDate)?"selected":""}"
      .date="${t}"
    ></date-header-item>`}}static get styles(){return[x`
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
      `]}getFirstDayOfWeek(t,e){const o=L.PlainDate.from({year:t,month:1,day:1}).add({weeks:e-1}),s=o.dayOfWeek;let i=o;return s<=5?i=o.subtract({days:o.dayOfWeek-1}):i=o.add({days:8-o.dayOfWeek}),i}getWeek(){this.daysToShow=[];const t=this.getFirstDayOfWeek(this.currentDate.year,this.currentDate.weekOfYear);for(var e=0;e<7;e++)this.daysToShow.push(t.add({days:e}))}async firstUpdated(){this.getWeek()}get monthLabel(){return Qi[this.daysToShow[2].month-1]}willUpdate(t){t.has("currentDate")&&this.getWeek()}render(){return h`
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
        <sl-button variant="text" @select="${this.selectDay(L.Now.plainDateISO())}">${this.monthLabel}</sl-button>
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
    `}};eo([n({attribute:!1})],ce.prototype,"currentDate",2);eo([v()],ce.prototype,"daysToShow",2);ce=eo([D("date-header")],ce);var ts=Object.defineProperty,es=Object.getOwnPropertyDescriptor,Fe=(t,e,o,s)=>{for(var i=s>1?void 0:s?es(e,o):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(i=(s?a(e,o,i):a(i))||i);return s&&i&&ts(e,o,i),i};let Kt=class extends E{constructor(){super(...arguments),this.showCalendar=!0}static get styles(){return[x`
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
      `]}render(){return h`
      <diet-totals .entries="${this.dailyEntries}"></diet-totals>
      ${this.showCalendar?h`<date-header .currentDate="${this.currentDate}"></date-header>`:H}
    `}};Fe([at({context:Zt,subscribe:!0}),v()],Kt.prototype,"currentDate",2);Fe([at({context:$e,subscribe:!0}),v()],Kt.prototype,"dailyEntries",2);Fe([n({type:Boolean})],Kt.prototype,"showCalendar",2);Kt=Fe([D("diet-page-header")],Kt);var os=x`
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
`,B=class extends J{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?mo`a`:mo`button`;return Po`
      <${e}
        part="base"
        class=${R({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${S(t?void 0:this.disabled)}
        type=${S(t?void 0:"button")}
        href=${S(t?this.href:void 0)}
        target=${S(t?this.target:void 0)}
        download=${S(t?this.download:void 0)}
        rel=${S(t&&this.target?"noreferrer noopener":void 0)}
        role=${S(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${S(this.name)}
          library=${S(this.library)}
          src=${S(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};B.styles=[X,os];B.dependencies={"sl-icon":we};l([z(".icon-button")],B.prototype,"button",2);l([v()],B.prototype,"hasFocus",2);l([n()],B.prototype,"name",2);l([n()],B.prototype,"library",2);l([n()],B.prototype,"src",2);l([n()],B.prototype,"href",2);l([n()],B.prototype,"target",2);l([n()],B.prototype,"download",2);l([n()],B.prototype,"label",2);l([n({type:Boolean,reflect:!0})],B.prototype,"disabled",2);B.define("sl-icon-button");var is=x`
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
`,Ct=class extends J{constructor(){super(...arguments),this.localize=new $t(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return h`
      <span
        part="base"
        class=${R({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?h`
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
    `}};Ct.styles=[X,is];Ct.dependencies={"sl-icon-button":B};l([n({reflect:!0})],Ct.prototype,"variant",2);l([n({reflect:!0})],Ct.prototype,"size",2);l([n({type:Boolean,reflect:!0})],Ct.prototype,"pill",2);l([n({type:Boolean})],Ct.prototype,"removable",2);var ss=x`
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
`;function rs(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}var Le=new Set;function as(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function ls(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}function Pe(t){if(Le.add(t),!document.documentElement.classList.contains("sl-scroll-lock")){const e=as()+ls();document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${e}px`)}}function Te(t){Le.delete(t),Le.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function ns(t,e,o="vertical",s="smooth"){const i=rs(t,e),r=i.top+e.scrollTop,a=i.left+e.scrollLeft,c=e.scrollLeft,d=e.scrollLeft+e.offsetWidth,u=e.scrollTop,m=e.scrollTop+e.offsetHeight;(o==="horizontal"||o==="both")&&(a<c?e.scrollTo({left:a,behavior:s}):a+t.clientWidth>d&&e.scrollTo({left:a-e.offsetWidth+t.clientWidth,behavior:s})),(o==="vertical"||o==="both")&&(r<u?e.scrollTo({top:r,behavior:s}):r+t.clientHeight>m&&e.scrollTo({top:r-e.offsetHeight+t.clientHeight,behavior:s}))}var cs=x`
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
`;const ut=Math.min,W=Math.max,de=Math.round,ae=Math.floor,pt=t=>({x:t,y:t}),ds={left:"right",right:"left",bottom:"top",top:"bottom"},hs={start:"end",end:"start"};function Re(t,e,o){return W(t,ut(e,o))}function It(t,e){return typeof t=="function"?t(e):t}function ft(t){return t.split("-")[0]}function Lt(t){return t.split("-")[1]}function No(t){return t==="x"?"y":"x"}function oo(t){return t==="y"?"height":"width"}function oe(t){return["top","bottom"].includes(ft(t))?"y":"x"}function io(t){return No(oe(t))}function us(t,e,o){o===void 0&&(o=!1);const s=Lt(t),i=io(t),r=oo(i);let a=i==="x"?s===(o?"end":"start")?"right":"left":s==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(a=he(a)),[a,he(a)]}function ps(t){const e=he(t);return[Be(t),e,Be(e)]}function Be(t){return t.replace(/start|end/g,e=>hs[e])}function fs(t,e,o){const s=["left","right"],i=["right","left"],r=["top","bottom"],a=["bottom","top"];switch(t){case"top":case"bottom":return o?e?i:s:e?s:i;case"left":case"right":return e?r:a;default:return[]}}function ms(t,e,o,s){const i=Lt(t);let r=fs(ft(t),o==="start",s);return i&&(r=r.map(a=>a+"-"+i),e&&(r=r.concat(r.map(Be)))),r}function he(t){return t.replace(/left|right|bottom|top/g,e=>ds[e])}function gs(t){return{top:0,right:0,bottom:0,left:0,...t}}function jo(t){return typeof t!="number"?gs(t):{top:t,right:t,bottom:t,left:t}}function ue(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function vo(t,e,o){let{reference:s,floating:i}=t;const r=oe(e),a=io(e),c=oo(a),d=ft(e),u=r==="y",m=s.x+s.width/2-i.width/2,f=s.y+s.height/2-i.height/2,b=s[c]/2-i[c]/2;let p;switch(d){case"top":p={x:m,y:s.y-i.height};break;case"bottom":p={x:m,y:s.y+s.height};break;case"right":p={x:s.x+s.width,y:f};break;case"left":p={x:s.x-i.width,y:f};break;default:p={x:s.x,y:s.y}}switch(Lt(e)){case"start":p[a]-=b*(o&&u?-1:1);break;case"end":p[a]+=b*(o&&u?-1:1);break}return p}const bs=async(t,e,o)=>{const{placement:s="bottom",strategy:i="absolute",middleware:r=[],platform:a}=o,c=r.filter(Boolean),d=await(a.isRTL==null?void 0:a.isRTL(e));let u=await a.getElementRects({reference:t,floating:e,strategy:i}),{x:m,y:f}=vo(u,s,d),b=s,p={},g=0;for(let y=0;y<c.length;y++){const{name:$,fn:w}=c[y],{x:k,y:F,data:A,reset:P}=await w({x:m,y:f,initialPlacement:s,placement:b,strategy:i,middlewareData:p,rects:u,platform:a,elements:{reference:t,floating:e}});m=k??m,f=F??f,p={...p,[$]:{...p[$],...A}},P&&g<=50&&(g++,typeof P=="object"&&(P.placement&&(b=P.placement),P.rects&&(u=P.rects===!0?await a.getElementRects({reference:t,floating:e,strategy:i}):P.rects),{x:m,y:f}=vo(u,b,d)),y=-1)}return{x:m,y:f,placement:b,strategy:i,middlewareData:p}};async function so(t,e){var o;e===void 0&&(e={});const{x:s,y:i,platform:r,rects:a,elements:c,strategy:d}=t,{boundary:u="clippingAncestors",rootBoundary:m="viewport",elementContext:f="floating",altBoundary:b=!1,padding:p=0}=It(e,t),g=jo(p),$=c[b?f==="floating"?"reference":"floating":f],w=ue(await r.getClippingRect({element:(o=await(r.isElement==null?void 0:r.isElement($)))==null||o?$:$.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(c.floating)),boundary:u,rootBoundary:m,strategy:d})),k=f==="floating"?{...a.floating,x:s,y:i}:a.reference,F=await(r.getOffsetParent==null?void 0:r.getOffsetParent(c.floating)),A=await(r.isElement==null?void 0:r.isElement(F))?await(r.getScale==null?void 0:r.getScale(F))||{x:1,y:1}:{x:1,y:1},P=ue(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:k,offsetParent:F,strategy:d}):k);return{top:(w.top-P.top+g.top)/A.y,bottom:(P.bottom-w.bottom+g.bottom)/A.y,left:(w.left-P.left+g.left)/A.x,right:(P.right-w.right+g.right)/A.x}}const vs=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:s,placement:i,rects:r,platform:a,elements:c,middlewareData:d}=e,{element:u,padding:m=0}=It(t,e)||{};if(u==null)return{};const f=jo(m),b={x:o,y:s},p=io(i),g=oo(p),y=await a.getDimensions(u),$=p==="y",w=$?"top":"left",k=$?"bottom":"right",F=$?"clientHeight":"clientWidth",A=r.reference[g]+r.reference[p]-b[p]-r.floating[g],P=b[p]-r.reference[p],M=await(a.getOffsetParent==null?void 0:a.getOffsetParent(u));let j=M?M[F]:0;(!j||!await(a.isElement==null?void 0:a.isElement(M)))&&(j=c.floating[F]||r.floating[g]);const ot=A/2-P/2,ht=j/2-y[g]/2-1,Vt=ut(f[w],ht),Nt=ut(f[k],ht),Q=Vt,jt=j-y[g]-Nt,q=j/2-y[g]/2+ot,it=Re(Q,q,jt),st=!d.arrow&&Lt(i)!=null&&q!==it&&r.reference[g]/2-(q<Q?Vt:Nt)-y[g]/2<0,lt=st?q<Q?q-Q:q-jt:0;return{[p]:b[p]+lt,data:{[p]:it,centerOffset:q-it-lt,...st&&{alignmentOffset:lt}},reset:st}}}),ys=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,s;const{placement:i,middlewareData:r,rects:a,initialPlacement:c,platform:d,elements:u}=e,{mainAxis:m=!0,crossAxis:f=!0,fallbackPlacements:b,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:y=!0,...$}=It(t,e);if((o=r.arrow)!=null&&o.alignmentOffset)return{};const w=ft(i),k=ft(c)===c,F=await(d.isRTL==null?void 0:d.isRTL(u.floating)),A=b||(k||!y?[he(c)]:ps(c));!b&&g!=="none"&&A.push(...ms(c,y,g,F));const P=[c,...A],M=await so(e,$),j=[];let ot=((s=r.flip)==null?void 0:s.overflows)||[];if(m&&j.push(M[w]),f){const Q=us(i,a,F);j.push(M[Q[0]],M[Q[1]])}if(ot=[...ot,{placement:i,overflows:j}],!j.every(Q=>Q<=0)){var ht,Vt;const Q=(((ht=r.flip)==null?void 0:ht.index)||0)+1,jt=P[Q];if(jt)return{data:{index:Q,overflows:ot},reset:{placement:jt}};let q=(Vt=ot.filter(it=>it.overflows[0]<=0).sort((it,st)=>it.overflows[1]-st.overflows[1])[0])==null?void 0:Vt.placement;if(!q)switch(p){case"bestFit":{var Nt;const it=(Nt=ot.map(st=>[st.placement,st.overflows.filter(lt=>lt>0).reduce((lt,si)=>lt+si,0)]).sort((st,lt)=>st[1]-lt[1])[0])==null?void 0:Nt[0];it&&(q=it);break}case"initialPlacement":q=c;break}if(i!==q)return{reset:{placement:q}}}return{}}}};async function ws(t,e){const{placement:o,platform:s,elements:i}=t,r=await(s.isRTL==null?void 0:s.isRTL(i.floating)),a=ft(o),c=Lt(o),d=oe(o)==="y",u=["left","top"].includes(a)?-1:1,m=r&&d?-1:1,f=It(e,t);let{mainAxis:b,crossAxis:p,alignmentAxis:g}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return c&&typeof g=="number"&&(p=c==="end"?g*-1:g),d?{x:p*m,y:b*u}:{x:b*u,y:p*m}}const _s=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var o,s;const{x:i,y:r,placement:a,middlewareData:c}=e,d=await ws(e,t);return a===((o=c.offset)==null?void 0:o.placement)&&(s=c.arrow)!=null&&s.alignmentOffset?{}:{x:i+d.x,y:r+d.y,data:{...d,placement:a}}}}},xs=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:s,placement:i}=e,{mainAxis:r=!0,crossAxis:a=!1,limiter:c={fn:$=>{let{x:w,y:k}=$;return{x:w,y:k}}},...d}=It(t,e),u={x:o,y:s},m=await so(e,d),f=oe(ft(i)),b=No(f);let p=u[b],g=u[f];if(r){const $=b==="y"?"top":"left",w=b==="y"?"bottom":"right",k=p+m[$],F=p-m[w];p=Re(k,p,F)}if(a){const $=f==="y"?"top":"left",w=f==="y"?"bottom":"right",k=g+m[$],F=g-m[w];g=Re(k,g,F)}const y=c.fn({...e,[b]:p,[f]:g});return{...y,data:{x:y.x-o,y:y.y-s}}}}},$s=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:o,rects:s,platform:i,elements:r}=e,{apply:a=()=>{},...c}=It(t,e),d=await so(e,c),u=ft(o),m=Lt(o),f=oe(o)==="y",{width:b,height:p}=s.floating;let g,y;u==="top"||u==="bottom"?(g=u,y=m===(await(i.isRTL==null?void 0:i.isRTL(r.floating))?"start":"end")?"left":"right"):(y=u,g=m==="end"?"top":"bottom");const $=p-d[g],w=b-d[y],k=!e.middlewareData.shift;let F=$,A=w;if(f){const M=b-d.left-d.right;A=m||k?ut(w,M):M}else{const M=p-d.top-d.bottom;F=m||k?ut($,M):M}if(k&&!m){const M=W(d.left,0),j=W(d.right,0),ot=W(d.top,0),ht=W(d.bottom,0);f?A=b-2*(M!==0||j!==0?M+j:W(d.left,d.right)):F=p-2*(ot!==0||ht!==0?ot+ht:W(d.top,d.bottom))}await a({...e,availableWidth:A,availableHeight:F});const P=await i.getDimensions(r.floating);return b!==P.width||p!==P.height?{reset:{rects:!0}}:{}}}};function mt(t){return qo(t)?(t.nodeName||"").toLowerCase():"#document"}function U(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function dt(t){var e;return(e=(qo(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function qo(t){return t instanceof Node||t instanceof U(t).Node}function ct(t){return t instanceof Element||t instanceof U(t).Element}function rt(t){return t instanceof HTMLElement||t instanceof U(t).HTMLElement}function yo(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof U(t).ShadowRoot}function ie(t){const{overflow:e,overflowX:o,overflowY:s,display:i}=Y(t);return/auto|scroll|overlay|hidden|clip/.test(e+s+o)&&!["inline","contents"].includes(i)}function Cs(t){return["table","td","th"].includes(mt(t))}function ro(t){const e=ao(),o=Y(t);return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(s=>(o.willChange||"").includes(s))||["paint","layout","strict","content"].some(s=>(o.contain||"").includes(s))}function ks(t){let e=Pt(t);for(;rt(e)&&!Se(e);){if(ro(e))return e;e=Pt(e)}return null}function ao(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Se(t){return["html","body","#document"].includes(mt(t))}function Y(t){return U(t).getComputedStyle(t)}function Oe(t){return ct(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Pt(t){if(mt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||yo(t)&&t.host||dt(t);return yo(e)?e.host:e}function Wo(t){const e=Pt(t);return Se(e)?t.ownerDocument?t.ownerDocument.body:t.body:rt(e)&&ie(e)?e:Wo(e)}function Qt(t,e,o){var s;e===void 0&&(e=[]),o===void 0&&(o=!0);const i=Wo(t),r=i===((s=t.ownerDocument)==null?void 0:s.body),a=U(i);return r?e.concat(a,a.visualViewport||[],ie(i)?i:[],a.frameElement&&o?Qt(a.frameElement):[]):e.concat(i,Qt(i,[],o))}function Ho(t){const e=Y(t);let o=parseFloat(e.width)||0,s=parseFloat(e.height)||0;const i=rt(t),r=i?t.offsetWidth:o,a=i?t.offsetHeight:s,c=de(o)!==r||de(s)!==a;return c&&(o=r,s=a),{width:o,height:s,$:c}}function lo(t){return ct(t)?t:t.contextElement}function Et(t){const e=lo(t);if(!rt(e))return pt(1);const o=e.getBoundingClientRect(),{width:s,height:i,$:r}=Ho(e);let a=(r?de(o.width):o.width)/s,c=(r?de(o.height):o.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!c||!Number.isFinite(c))&&(c=1),{x:a,y:c}}const Fs=pt(0);function Uo(t){const e=U(t);return!ao()||!e.visualViewport?Fs:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Ss(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==U(t)?!1:e}function _t(t,e,o,s){e===void 0&&(e=!1),o===void 0&&(o=!1);const i=t.getBoundingClientRect(),r=lo(t);let a=pt(1);e&&(s?ct(s)&&(a=Et(s)):a=Et(t));const c=Ss(r,o,s)?Uo(r):pt(0);let d=(i.left+c.x)/a.x,u=(i.top+c.y)/a.y,m=i.width/a.x,f=i.height/a.y;if(r){const b=U(r),p=s&&ct(s)?U(s):s;let g=b,y=g.frameElement;for(;y&&s&&p!==g;){const $=Et(y),w=y.getBoundingClientRect(),k=Y(y),F=w.left+(y.clientLeft+parseFloat(k.paddingLeft))*$.x,A=w.top+(y.clientTop+parseFloat(k.paddingTop))*$.y;d*=$.x,u*=$.y,m*=$.x,f*=$.y,d+=F,u+=A,g=U(y),y=g.frameElement}}return ue({width:m,height:f,x:d,y:u})}const Os=[":popover-open",":modal"];function Go(t){return Os.some(e=>{try{return t.matches(e)}catch{return!1}})}function Es(t){let{elements:e,rect:o,offsetParent:s,strategy:i}=t;const r=i==="fixed",a=dt(s),c=e?Go(e.floating):!1;if(s===a||c&&r)return o;let d={scrollLeft:0,scrollTop:0},u=pt(1);const m=pt(0),f=rt(s);if((f||!f&&!r)&&((mt(s)!=="body"||ie(a))&&(d=Oe(s)),rt(s))){const b=_t(s);u=Et(s),m.x=b.x+s.clientLeft,m.y=b.y+s.clientTop}return{width:o.width*u.x,height:o.height*u.y,x:o.x*u.x-d.scrollLeft*u.x+m.x,y:o.y*u.y-d.scrollTop*u.y+m.y}}function Ds(t){return Array.from(t.getClientRects())}function Ko(t){return _t(dt(t)).left+Oe(t).scrollLeft}function Ps(t){const e=dt(t),o=Oe(t),s=t.ownerDocument.body,i=W(e.scrollWidth,e.clientWidth,s.scrollWidth,s.clientWidth),r=W(e.scrollHeight,e.clientHeight,s.scrollHeight,s.clientHeight);let a=-o.scrollLeft+Ko(t);const c=-o.scrollTop;return Y(s).direction==="rtl"&&(a+=W(e.clientWidth,s.clientWidth)-i),{width:i,height:r,x:a,y:c}}function Ts(t,e){const o=U(t),s=dt(t),i=o.visualViewport;let r=s.clientWidth,a=s.clientHeight,c=0,d=0;if(i){r=i.width,a=i.height;const u=ao();(!u||u&&e==="fixed")&&(c=i.offsetLeft,d=i.offsetTop)}return{width:r,height:a,x:c,y:d}}function zs(t,e){const o=_t(t,!0,e==="fixed"),s=o.top+t.clientTop,i=o.left+t.clientLeft,r=rt(t)?Et(t):pt(1),a=t.clientWidth*r.x,c=t.clientHeight*r.y,d=i*r.x,u=s*r.y;return{width:a,height:c,x:d,y:u}}function wo(t,e,o){let s;if(e==="viewport")s=Ts(t,o);else if(e==="document")s=Ps(dt(t));else if(ct(e))s=zs(e,o);else{const i=Uo(t);s={...e,x:e.x-i.x,y:e.y-i.y}}return ue(s)}function Qo(t,e){const o=Pt(t);return o===e||!ct(o)||Se(o)?!1:Y(o).position==="fixed"||Qo(o,e)}function As(t,e){const o=e.get(t);if(o)return o;let s=Qt(t,[],!1).filter(c=>ct(c)&&mt(c)!=="body"),i=null;const r=Y(t).position==="fixed";let a=r?Pt(t):t;for(;ct(a)&&!Se(a);){const c=Y(a),d=ro(a);!d&&c.position==="fixed"&&(i=null),(r?!d&&!i:!d&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||ie(a)&&!d&&Qo(t,a))?s=s.filter(m=>m!==a):i=c,a=Pt(a)}return e.set(t,s),s}function Ms(t){let{element:e,boundary:o,rootBoundary:s,strategy:i}=t;const a=[...o==="clippingAncestors"?As(e,this._c):[].concat(o),s],c=a[0],d=a.reduce((u,m)=>{const f=wo(e,m,i);return u.top=W(f.top,u.top),u.right=ut(f.right,u.right),u.bottom=ut(f.bottom,u.bottom),u.left=W(f.left,u.left),u},wo(e,c,i));return{width:d.right-d.left,height:d.bottom-d.top,x:d.left,y:d.top}}function Is(t){const{width:e,height:o}=Ho(t);return{width:e,height:o}}function Ls(t,e,o){const s=rt(e),i=dt(e),r=o==="fixed",a=_t(t,!0,r,e);let c={scrollLeft:0,scrollTop:0};const d=pt(0);if(s||!s&&!r)if((mt(e)!=="body"||ie(i))&&(c=Oe(e)),s){const f=_t(e,!0,r,e);d.x=f.x+e.clientLeft,d.y=f.y+e.clientTop}else i&&(d.x=Ko(i));const u=a.left+c.scrollLeft-d.x,m=a.top+c.scrollTop-d.y;return{x:u,y:m,width:a.width,height:a.height}}function _o(t,e){return!rt(t)||Y(t).position==="fixed"?null:e?e(t):t.offsetParent}function Yo(t,e){const o=U(t);if(!rt(t)||Go(t))return o;let s=_o(t,e);for(;s&&Cs(s)&&Y(s).position==="static";)s=_o(s,e);return s&&(mt(s)==="html"||mt(s)==="body"&&Y(s).position==="static"&&!ro(s))?o:s||ks(t)||o}const Rs=async function(t){const e=this.getOffsetParent||Yo,o=this.getDimensions;return{reference:Ls(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,...await o(t.floating)}}};function Bs(t){return Y(t).direction==="rtl"}const le={convertOffsetParentRelativeRectToViewportRelativeRect:Es,getDocumentElement:dt,getClippingRect:Ms,getOffsetParent:Yo,getElementRects:Rs,getClientRects:Ds,getDimensions:Is,getScale:Et,isElement:ct,isRTL:Bs};function Vs(t,e){let o=null,s;const i=dt(t);function r(){var c;clearTimeout(s),(c=o)==null||c.disconnect(),o=null}function a(c,d){c===void 0&&(c=!1),d===void 0&&(d=1),r();const{left:u,top:m,width:f,height:b}=t.getBoundingClientRect();if(c||e(),!f||!b)return;const p=ae(m),g=ae(i.clientWidth-(u+f)),y=ae(i.clientHeight-(m+b)),$=ae(u),k={rootMargin:-p+"px "+-g+"px "+-y+"px "+-$+"px",threshold:W(0,ut(1,d))||1};let F=!0;function A(P){const M=P[0].intersectionRatio;if(M!==d){if(!F)return a();M?a(!1,M):s=setTimeout(()=>{a(!1,1e-7)},100)}F=!1}try{o=new IntersectionObserver(A,{...k,root:i.ownerDocument})}catch{o=new IntersectionObserver(A,k)}o.observe(t)}return a(!0),r}function Ns(t,e,o,s){s===void 0&&(s={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:d=!1}=s,u=lo(t),m=i||r?[...u?Qt(u):[],...Qt(e)]:[];m.forEach(w=>{i&&w.addEventListener("scroll",o,{passive:!0}),r&&w.addEventListener("resize",o)});const f=u&&c?Vs(u,o):null;let b=-1,p=null;a&&(p=new ResizeObserver(w=>{let[k]=w;k&&k.target===u&&p&&(p.unobserve(e),cancelAnimationFrame(b),b=requestAnimationFrame(()=>{var F;(F=p)==null||F.observe(e)})),o()}),u&&!d&&p.observe(u),p.observe(e));let g,y=d?_t(t):null;d&&$();function $(){const w=_t(t);y&&(w.x!==y.x||w.y!==y.y||w.width!==y.width||w.height!==y.height)&&o(),y=w,g=requestAnimationFrame($)}return o(),()=>{var w;m.forEach(k=>{i&&k.removeEventListener("scroll",o),r&&k.removeEventListener("resize",o)}),f?.(),(w=p)==null||w.disconnect(),p=null,d&&cancelAnimationFrame(g)}}const js=xs,qs=ys,xo=$s,Ws=vs,Hs=(t,e,o)=>{const s=new Map,i={platform:le,...o},r={...i.platform,_c:s};return bs(t,e,{...i,platform:r})};function Us(t){return Gs(t)}function ze(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function Gs(t){for(let e=t;e;e=ze(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=ze(t);e;e=ze(e)){if(!(e instanceof Element))continue;const o=getComputedStyle(e);if(o.display!=="contents"&&(o.position!=="static"||o.filter!=="none"||e.tagName==="BODY"))return e}return null}function Ks(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t instanceof Element:!0)}var O=class extends J{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),o=this.placement.includes("top")||this.placement.includes("bottom");let s=0,i=0,r=0,a=0,c=0,d=0,u=0,m=0;o?t.top<e.top?(s=t.left,i=t.bottom,r=t.right,a=t.bottom,c=e.left,d=e.top,u=e.right,m=e.top):(s=e.left,i=e.bottom,r=e.right,a=e.bottom,c=t.left,d=t.top,u=t.right,m=t.top):t.left<e.left?(s=t.right,i=t.top,r=e.left,a=e.top,c=t.right,d=t.bottom,u=e.left,m=e.bottom):(s=e.right,i=e.top,r=t.left,a=t.top,c=e.right,d=e.bottom,u=t.left,m=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${s}px`),this.style.setProperty("--hover-bridge-top-left-y",`${i}px`),this.style.setProperty("--hover-bridge-top-right-x",`${r}px`),this.style.setProperty("--hover-bridge-top-right-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${d}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${u}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${m}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||Ks(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&(this.cleanup=Ns(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[_s({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(xo({apply:({rects:o})=>{const s=this.sync==="width"||this.sync==="both",i=this.sync==="height"||this.sync==="both";this.popup.style.width=s?`${o.reference.width}px`:"",this.popup.style.height=i?`${o.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(qs({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(js({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(xo({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:o,availableHeight:s})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${s}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${o}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(Ws({element:this.arrowEl,padding:this.arrowPadding}));const e=this.strategy==="absolute"?o=>le.getOffsetParent(o,Us):le.getOffsetParent;Hs(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:Ke(Qe({},le),{getOffsetParent:e})}).then(({x:o,y:s,middlewareData:i,placement:r})=>{const a=getComputedStyle(this).direction==="rtl",c={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]];if(this.setAttribute("data-current-placement",r),Object.assign(this.popup.style,{left:`${o}px`,top:`${s}px`}),this.arrow){const d=i.arrow.x,u=i.arrow.y;let m="",f="",b="",p="";if(this.arrowPlacement==="start"){const g=typeof d=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";m=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",f=a?g:"",p=a?"":g}else if(this.arrowPlacement==="end"){const g=typeof d=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";f=a?"":g,p=a?g:"",b=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(p=typeof d=="number"?"calc(50% - var(--arrow-size-diagonal))":"",m=typeof u=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(p=typeof d=="number"?`${d}px`:"",m=typeof u=="number"?`${u}px`:"");Object.assign(this.arrowEl.style,{top:m,right:f,bottom:b,left:p,[c]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return h`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${R({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${R({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?h`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};O.styles=[X,cs];l([z(".popup")],O.prototype,"popup",2);l([z(".popup__arrow")],O.prototype,"arrowEl",2);l([n()],O.prototype,"anchor",2);l([n({type:Boolean,reflect:!0})],O.prototype,"active",2);l([n({reflect:!0})],O.prototype,"placement",2);l([n({reflect:!0})],O.prototype,"strategy",2);l([n({type:Number})],O.prototype,"distance",2);l([n({type:Number})],O.prototype,"skidding",2);l([n({type:Boolean})],O.prototype,"arrow",2);l([n({attribute:"arrow-placement"})],O.prototype,"arrowPlacement",2);l([n({attribute:"arrow-padding",type:Number})],O.prototype,"arrowPadding",2);l([n({type:Boolean})],O.prototype,"flip",2);l([n({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],O.prototype,"flipFallbackPlacements",2);l([n({attribute:"flip-fallback-strategy"})],O.prototype,"flipFallbackStrategy",2);l([n({type:Object})],O.prototype,"flipBoundary",2);l([n({attribute:"flip-padding",type:Number})],O.prototype,"flipPadding",2);l([n({type:Boolean})],O.prototype,"shift",2);l([n({type:Object})],O.prototype,"shiftBoundary",2);l([n({attribute:"shift-padding",type:Number})],O.prototype,"shiftPadding",2);l([n({attribute:"auto-size"})],O.prototype,"autoSize",2);l([n()],O.prototype,"sync",2);l([n({type:Object})],O.prototype,"autoSizeBoundary",2);l([n({attribute:"auto-size-padding",type:Number})],O.prototype,"autoSizePadding",2);l([n({attribute:"hover-bridge",type:Boolean})],O.prototype,"hoverBridge",2);var Xo=new Map,Qs=new WeakMap;function Ys(t){return t??{keyframes:[],options:{duration:0}}}function $o(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function G(t,e){Xo.set(t,Ys(e))}function vt(t,e,o){const s=Qs.get(t);if(s?.[e])return $o(s[e],o.dir);const i=Xo.get(e);return i?$o(i,o.dir):{keyframes:[],options:{duration:0}}}function pe(t,e){return new Promise(o=>{function s(i){i.target===t&&(t.removeEventListener(e,s),o())}t.addEventListener(e,s)})}function yt(t,e,o){return new Promise(s=>{if(o?.duration===1/0)throw new Error("Promise-based animations must be finite.");const i=t.animate(e,Ke(Qe({},o),{duration:Xs()?0:o.duration}));i.addEventListener("cancel",s,{once:!0}),i.addEventListener("finish",s,{once:!0})})}function Xs(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Ot(t){return Promise.all(t.getAnimations().map(e=>new Promise(o=>{e.cancel(),requestAnimationFrame(o)})))}function Xr(t,e){return t.map(o=>Ke(Qe({},o),{height:o.height==="auto"?`${e}px`:o.height}))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ve extends ye{constructor(e){if(super(e),this.it=H,e.type!==nt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===H||e==null)return this._t=void 0,this.it=e;if(e===wt)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const o=[e];return o.raw=o,this._t={_$litType$:this.constructor.resultType,strings:o,values:[]}}}Ve.directiveName="unsafeHTML",Ve.resultType=1;const Js=ve(Ve);var C=class extends J{constructor(){super(...arguments),this.formControlController=new Ue(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Xt(this,"help-text","label"),this.localize=new $t(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.name="",this.value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=t=>h`
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
        @sl-remove=${e=>this.handleTagRemove(e,t)}
      >
        ${t.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{const e=t.target,o=e.closest(".select__clear")!==null,s=e.closest("sl-icon-button")!==null;if(!(o||s)){if(t.key==="Escape"&&this.open&&!this.closeWatcher&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),t.key==="Enter"||t.key===" "&&this.typeToSelectString===""){if(t.preventDefault(),t.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){const i=this.getAllOptions(),r=i.indexOf(this.currentOption);let a=Math.max(0,r);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;t.key==="ArrowDown"?(a=r+1,a>i.length-1&&(a=0)):t.key==="ArrowUp"?(a=r-1,a<0&&(a=i.length-1)):t.key==="Home"?a=0:t.key==="End"&&(a=i.length-1),this.setCurrentOption(i[a])}if(t.key.length===1||t.key==="Backspace"){const i=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if(t.key==="Backspace")return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),t.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const r of i)if(r.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(r);break}}}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()}}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),this.open=!1}addOpenListeners(){var t;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var t;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),(t=this.closeWatcher)==null||t.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(t){const o=t.composedPath().some(s=>s instanceof Element&&s.tagName.toLowerCase()==="sl-icon-button");this.disabled||o||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){t.key!=="Tab"&&(t.stopPropagation(),this.handleDocumentKeyDown(t))}handleClearClick(t){t.stopPropagation(),this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){const o=t.target.closest("sl-option"),s=this.value;o&&!o.disabled&&(this.multiple?this.toggleOptionSelection(o):this.setSelectedOptions(o),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==s&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){const t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value],o=[];customElements.get("sl-option")?(t.forEach(s=>o.push(s.value)),this.setSelectedOptions(t.filter(s=>e.includes(s.value)))):customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange())}handleTagRemove(t,e){t.stopPropagation(),this.disabled||(this.toggleOptionSelection(e,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(t){this.getAllOptions().forEach(o=>{o.current=!1,o.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus())}setSelectedOptions(t){const e=this.getAllOptions(),o=Array.isArray(t)?t:[t];e.forEach(s=>s.selected=!1),o.length&&o.forEach(s=>s.selected=!0),this.selectionChanged()}toggleOptionSelection(t,e){e===!0||e===!1?t.selected=e:t.selected=!t.selected,this.selectionChanged()}selectionChanged(){var t,e,o,s;this.selectedOptions=this.getAllOptions().filter(i=>i.selected),this.multiple?(this.value=this.selectedOptions.map(i=>i.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length)):(this.value=(e=(t=this.selectedOptions[0])==null?void 0:t.value)!=null?e:"",this.displayLabel=(s=(o=this.selectedOptions[0])==null?void 0:o.getTextLabel())!=null?s:""),this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){const o=this.getTag(t,e);return h`<div @sl-remove=${s=>this.handleTagRemove(s,t)}>
          ${typeof o=="string"?Js(o):o}
        </div>`}else if(e===this.maxOptionsVisible)return h`<sl-tag size=${this.size}>+${this.selectedOptions.length-e}</sl-tag>`;return h``})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}handleValueChange(){const t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(t.filter(o=>e.includes(o.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await Ot(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:t,options:e}=vt(this,"select.show",{dir:this.localize.dir()});await yt(this.popup.popup,t,e),this.currentOption&&ns(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Ot(this);const{keyframes:t,options:e}=vt(this,"select.hide",{dir:this.localize.dir()});await yt(this.popup.popup,t,e),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,pe(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,pe(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=this.label?!0:!!t,s=this.helpText?!0:!!e,i=this.clearable&&!this.disabled&&this.value.length>0,r=this.placeholder&&this.value.length===0;return h`
      <div
        part="form-control"
        class=${R({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":o,"form-control--has-help-text":s})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${o?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${R({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":r,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
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

              ${this.multiple?h`<div part="tags" class="select__tags">${this.tags}</div>`:""}

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

              ${i?h`
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
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};C.styles=[X,Xe,ss];C.dependencies={"sl-icon":we,"sl-popup":O,"sl-tag":Ct};l([z(".select")],C.prototype,"popup",2);l([z(".select__combobox")],C.prototype,"combobox",2);l([z(".select__display-input")],C.prototype,"displayInput",2);l([z(".select__value-input")],C.prototype,"valueInput",2);l([z(".select__listbox")],C.prototype,"listbox",2);l([v()],C.prototype,"hasFocus",2);l([v()],C.prototype,"displayLabel",2);l([v()],C.prototype,"currentOption",2);l([v()],C.prototype,"selectedOptions",2);l([n()],C.prototype,"name",2);l([n({converter:{fromAttribute:t=>t.split(" "),toAttribute:t=>t.join(" ")}})],C.prototype,"value",2);l([To()],C.prototype,"defaultValue",2);l([n({reflect:!0})],C.prototype,"size",2);l([n()],C.prototype,"placeholder",2);l([n({type:Boolean,reflect:!0})],C.prototype,"multiple",2);l([n({attribute:"max-options-visible",type:Number})],C.prototype,"maxOptionsVisible",2);l([n({type:Boolean,reflect:!0})],C.prototype,"disabled",2);l([n({type:Boolean})],C.prototype,"clearable",2);l([n({type:Boolean,reflect:!0})],C.prototype,"open",2);l([n({type:Boolean})],C.prototype,"hoist",2);l([n({type:Boolean,reflect:!0})],C.prototype,"filled",2);l([n({type:Boolean,reflect:!0})],C.prototype,"pill",2);l([n()],C.prototype,"label",2);l([n({reflect:!0})],C.prototype,"placement",2);l([n({attribute:"help-text"})],C.prototype,"helpText",2);l([n({reflect:!0})],C.prototype,"form",2);l([n({type:Boolean,reflect:!0})],C.prototype,"required",2);l([n()],C.prototype,"getTag",2);l([N("disabled",{waitUntilFirstUpdate:!0})],C.prototype,"handleDisabledChange",1);l([N("value",{waitUntilFirstUpdate:!0})],C.prototype,"handleValueChange",1);l([N("open",{waitUntilFirstUpdate:!0})],C.prototype,"handleOpenChange",1);G("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});G("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});C.define("sl-select");var Zs=x`
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
`,Z=class extends J{constructor(){super(...arguments),this.localize=new $t(this),this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){const t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const t=this.childNodes;let e="";return[...t].forEach(o=>{o.nodeType===Node.ELEMENT_NODE&&(o.hasAttribute("slot")||(e+=o.textContent)),o.nodeType===Node.TEXT_NODE&&(e+=o.textContent)}),e.trim()}render(){return h`
      <div
        part="base"
        class=${R({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};Z.styles=[X,Zs];Z.dependencies={"sl-icon":we};l([z(".option__label")],Z.prototype,"defaultSlot",2);l([v()],Z.prototype,"current",2);l([v()],Z.prototype,"selected",2);l([v()],Z.prototype,"hasHover",2);l([n({reflect:!0})],Z.prototype,"value",2);l([n({type:Boolean,reflect:!0})],Z.prototype,"disabled",2);l([N("disabled")],Z.prototype,"handleDisabledChange",1);l([N("selected")],Z.prototype,"handleSelectedChange",1);l([N("value")],Z.prototype,"handleValueChange",1);Z.define("sl-option");var tr=Object.defineProperty,er=Object.getOwnPropertyDescriptor,Rt=(t,e,o,s)=>{for(var i=s>1?void 0:s?er(e,o):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(i=(s?a(e,o,i):a(i))||i);return s&&i&&tr(e,o,i),i};let xt=class extends E{constructor(){super(...arguments),this.showClose=!0,this.showBack=!0,this.isEditing=!0,this.showEditButton=!0,this.getTextDisplayText=t=>t.replace("_"," "),this.getOptions=t=>t.map(e=>h`<sl-option value="${e}">${this.getTextDisplayText(e)}</sl-option>`),this._dispatch=(t,e)=>this.dispatchEvent(T(t,e)),this.NameChanged=t=>this._dispatch("food-name-changed",t.target.value),this.PortionChanged=t=>this._dispatch("portion-changed",t.target.value),this.BackClicked=()=>this._dispatch("on-back-food-drawer"),this.CloseClicked=()=>this._dispatch("on-close-food-drawer")}static get styles(){return[x`
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
      `]}render(){const t=this.isEditing?h`<sl-input
          id="foodName"
          name="food-name"
          placeholder="Name"
          required
          .value="${this.food?.Name??""}"
          @sl-change="${this.NameChanged}"
        ></sl-input>`:h`<h2>${this.food?.Name}</h2>`,e=this.food&&At(this.food)?h`<div class="blank"></div>`:this.isEditing?h`
            <sl-select
              id="portionSelect"
              .value="${this.food?.Portion?.toString()??""}"
              placeholder="Portion"
              @sl-change="${this.PortionChanged}"
              required
            >
              ${this.getOptions(Fi)}
            </sl-select>
          `:h`
            <div class="food-name">
              <div style="width: 2.5rem;height:2.5rem;"></div>
              <span font-size: var(--sl-font-size-small)
                >${this.food?.Portion}</span
              >
            </div>
          `,o=this.showClose?h`
          <sl-icon-button name="x-lg" label="Close" @click=${this.CloseClicked}>
          </sl-icon-button>
        `:h`<span></span>`,s=this.showBack?h`
          <sl-icon-button
            class="back-arrow"
            name="arrow-left"
            label="Back"
            @click=${this.BackClicked}
          >
          </sl-icon-button>
        `:h`<span></span>`;return h`
      <div class="food-header">
        <div class="food-name">${s} ${t}</div>
        ${e}
      </div>
      ${o}
    `}};Rt([n({attribute:!1})],xt.prototype,"food",2);Rt([n({type:Boolean})],xt.prototype,"showClose",2);Rt([n({type:Boolean})],xt.prototype,"showBack",2);Rt([n({type:Boolean})],xt.prototype,"isEditing",2);Rt([n({type:Boolean})],xt.prototype,"showEditButton",2);xt=Rt([D("food-title-form")],xt);var or=x`
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
`,Bt=class extends J{constructor(){super(...arguments),this.localize=new $t(this),this.value=0,this.label=""}updated(t){if(super.updated(t),t.has("value")){const e=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),o=2*Math.PI*e,s=o-this.value/100*o;this.indicatorOffset=`${s}px`}}render(){return h`
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
    `}};Bt.styles=[X,or];l([z(".progress-ring__indicator")],Bt.prototype,"indicator",2);l([v()],Bt.prototype,"indicatorOffset",2);l([n({type:Number,reflect:!0})],Bt.prototype,"value",2);l([n()],Bt.prototype,"label",2);Bt.define("sl-progress-ring");var ir=Object.defineProperty,sr=Object.getOwnPropertyDescriptor,Jo=(t,e,o,s)=>{for(var i=s>1?void 0:s?sr(e,o):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(i=(s?a(e,o,i):a(i))||i);return s&&i&&ir(e,o,i),i};let Ne=class extends E{static get styles(){return[x`
        p,h3,h1{padding:0;margin:0;}

        p{
          font-size: var(--sl-font-size-small);
          font-weight: lighter;
          color: var(--sl-color-neutral-400);
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
      `]}macroPercent(t){const e=this.entry.Food.Macros,o=e.Carbs+e.Fat+e.Protein;return Math.round(e[t]/o*100)}render(){return h`
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
    `}};Jo([n({attribute:!1})],Ne.prototype,"entry",2);Ne=Jo([D("food-macros-overview")],Ne);var rr=Object.defineProperty,ar=Object.getOwnPropertyDescriptor,no=(t,e,o,s)=>{for(var i=s>1?void 0:s?ar(e,o):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(i=(s?a(e,o,i):a(i))||i);return s&&i&&rr(e,o,i),i};let fe=class extends E{constructor(){super(...arguments),this.loaded=!1,this.DisplayWheel=t=>h`
    <div class="macro-wheel">
      <sl-progress-ring
        .value="${this.GetImpactOn(t,100)}"
        class="progress-ring-values ${t}"
        >${this.GetImpactOn(t)}%</sl-progress-ring
      >
      <span>${t}</span>
    </div>
  `}static get styles(){return[x`
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
          color: var(--sl-color-neutral-400);
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
      `]}async firstUpdated(){this._goals=await Ni(),this.loaded=!0}GetImpactOn(t,e=void 0){let o=0;return At(this.entry.Food)?o=Math.round(this.entry.Food.Macros[t]/this._goals[t]*100*this.entry.Quantity):o=Math.round(this.entry.Food.Macros[t]/this._goals[t]*100*this.entry.Quantity),e&&o>e?e:o}get Content(){return h`
      <p style="grid-area: title">Impact on Targets</p>
      ${_e.map(this.DisplayWheel)}
    `}render(){return this.loaded?this.Content:"loading"}};no([n({attribute:!1})],fe.prototype,"entry",2);no([v()],fe.prototype,"loaded",2);fe=no([D("macros-impact")],fe);var lr=Object.defineProperty,nr=Object.getOwnPropertyDescriptor,Ee=(t,e,o,s)=>{for(var i=s>1?void 0:s?nr(e,o):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(i=(s?a(e,o,i):a(i))||i);return s&&i&&lr(e,o,i),i};let Yt=class extends E{constructor(){super(...arguments),this.readonly=!1,this.date=L.Now.plainDateISO(),this.time=L.Now.plainTimeISO(),this.hours=Array.from({length:24},(t,e)=>L.PlainTime.from({hour:e})),this.moveDate=t=>e=>{this.dispatchEvent(T("day-selected",this.date.add({days:t})))}}static get styles(){return[x`
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
      `]}get weekDay(){return Bo[this.date.dayOfWeek-1]}get shortWeekDay(){return this.weekDay.slice(0,1)}get day(){const t=L.Now.plainDateISO();return this.date.equals(t)?"Today":this.date.equals(t.add({days:-1}))?"Yesterday":`${this.weekDay} ${this.date.day}`}getHour(t){return L.PlainTime.from({hour:t.hour}).toString({smallestUnit:"minute"})}onTimeChanged(t){this.dispatchEvent(T("time-selected",{time:L.PlainTime.from(t.target.value)}))}changeDate(t){this.dispatchEvent(T("shorten-food-drawer"))}dateChangeForm(){return h`
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
        ${this.hours.map(t=>h`<sl-option .value="${this.getHour(t)}"
              >${this.getHour(t)}</sl-option
            >`)}
      </sl-select>
    `}render(){return this.readonly?h`
          <div class="readonly">
            <p>${this.day}</p>
            <p>@${this.getHour(this.time)}</p>
          </div>
        `:this.dateChangeForm()}};Ee([n()],Yt.prototype,"readonly",2);Ee([at({context:Zt,subscribe:!0}),v()],Yt.prototype,"date",2);Ee([at({context:Ce,subscribe:!0}),v()],Yt.prototype,"time",2);Yt=Ee([D("date-time-picker")],Yt);var cr=Object.defineProperty,dr=Object.getOwnPropertyDescriptor,co=(t,e,o,s)=>{for(var i=s>1?void 0:s?dr(e,o):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(i=(s?a(e,o,i):a(i))||i);return s&&i&&cr(e,o,i),i};let me=class extends E{constructor(){super(),this.EntryChanged=t=>e=>{e.stopPropagation(),this._entryForm={...this._entryForm,[t]:e.detail},this.checkFormValid()}}static get styles(){return[x`
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
      `]}async firstUpdated(){}willUpdate(t){t.has("entry")&&this.entry&&(this._entryForm=structuredClone(this.entry),this._entryForm.Date=this.entry.Date,this._entryForm.Time=this.entry.Time)}checkFormValid(){}NotifySave(){this.dispatchEvent(T("food-entry-saved"))}async FoodQtyChanged(t){t.stopPropagation(),this._entryForm={...this._entryForm,Food:{...this._entryForm.Food},Quantity:t.detail},this.checkFormValid(),t.detail===0&&this._entryForm.Id>0?await Ii(this._entryForm.Id):await this.SaveFood(),this.NotifySave()}async SaveFood(){this._entryForm&&(this._entryForm.Committed=!0,this._entryForm.Id=await Ze(this._entryForm))}render(){const t=h` <food-title-form
      .food=${this._entryForm?.Food}
      .showEditButton="${!1}"
      .isEditing=${!1}
    ></food-title-form>`,e=h`
      <date-time-picker .readonly="${!0}"></date-time-picker>
      <quantity-form
        @quantity-changed=${this.FoodQtyChanged}
        .quantity=${this._entryForm?.Quantity??0}
      ></quantity-form>
    `;return h`
      <form class="input-validation-required" action="#">
        ${t}
        <food-macros-overview .entry=${this._entryForm}></food-macros-overview>
        <macros-impact .entry=${this._entryForm}></macros-impact>
        <div class="form-body">${e}</div>
      </form>
    `}};co([n({attribute:!1})],me.prototype,"entry",2);co([v()],me.prototype,"_entryForm",2);me=co([D("food-entry-form")],me);var hr=Object.defineProperty,ur=Object.getOwnPropertyDescriptor,ho=(t,e,o,s)=>{for(var i=s>1?void 0:s?ur(e,o):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(i=(s?a(e,o,i):a(i))||i);return s&&i&&hr(e,o,i),i};let ge=class extends E{static get styles(){return[x``]}willUpdate(t){t.has("food")&&(this._foodForm=structuredClone(this.food))}render(){return h`
      ${this._foodForm?.Ingredients.map(t=>t.Name)}
    `}};ho([n({attribute:!1})],ge.prototype,"food",2);ho([v()],ge.prototype,"_foodForm",2);ge=ho([D("dish-form")],ge);var pr=Object.defineProperty,fr=Object.getOwnPropertyDescriptor,uo=(t,e,o,s)=>{for(var i=s>1?void 0:s?fr(e,o):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(i=(s?a(e,o,i):a(i))||i);return s&&i&&pr(e,o,i),i};let be=class extends E{constructor(){super(...arguments),this.MacrosChanged=t=>e=>{this._foodForm={...this._foodForm,Macros:{...this._foodForm?.Macros,[t]:Number(e.target.value)}},this.dispatchEvent(T("macro-changed",this._foodForm))},this.input=t=>h`
    <sl-input
      id="${t}Input"
      .value="${(this._foodForm?.Macros[t]??0).toString()}"
      @sl-change="${this.MacrosChanged(t)}"
      .name="${t}"
      .label="${t}"
      type="number"
      required
    >
      <span slot="suffix">${t=="Calories"?"kcal":"g"}</span>
    </sl-input>
  `}static get styles(){return[x`
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
      `]}willUpdate(t){t.has("food")&&(this._foodForm=structuredClone(this.food))}render(){return h` <div class="macros">${_e.map(this.input)}</div> `}};uo([n({attribute:!1})],be.prototype,"food",2);uo([v()],be.prototype,"_foodForm",2);be=uo([D("food-item-form")],be);var mr=x`
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
`,I=class extends J{constructor(){super(...arguments),this.formControlController=new Ue(this),this.hasSlotController=new Xt(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const t=this.required&&!this.value;return this.customValidityMessage!==""?li:t?ni:ci}get validationMessage(){const t=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:t?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(t){const e=t.target.closest("sl-radio, sl-radio-button"),o=this.getAllRadios(),s=this.value;e.disabled||(this.value=e.value,o.forEach(i=>i.checked=i===e),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(t){var e;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key))return;const o=this.getAllRadios().filter(c=>!c.disabled),s=(e=o.find(c=>c.checked))!=null?e:o[0],i=t.key===" "?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1,r=this.value;let a=o.indexOf(s)+i;a<0&&(a=o.length-1),a>o.length-1&&(a=0),this.getAllRadios().forEach(c=>{c.checked=!1,this.hasButtonGroup||(c.tabIndex=-1)}),this.value=o[a].value,o[a].checked=!0,this.hasButtonGroup?o[a].shadowRoot.querySelector("button").focus():(o[a].tabIndex=0,o[a].focus()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input")),t.preventDefault()}handleLabelClick(){const t=this.getAllRadios(),o=t.find(s=>s.checked)||t[0];o&&o.focus()}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}async syncRadioElements(){var t,e;const o=this.getAllRadios();if(await Promise.all(o.map(async s=>{await s.updateComplete,s.checked=s.value===this.value,s.size=this.size})),this.hasButtonGroup=o.some(s=>s.tagName.toLowerCase()==="sl-radio-button"),o.length>0&&!o.some(s=>s.checked))if(this.hasButtonGroup){const s=(t=o[0].shadowRoot)==null?void 0:t.querySelector("button");s&&(s.tabIndex=0)}else o[0].tabIndex=0;if(this.hasButtonGroup){const s=(e=this.shadowRoot)==null?void 0:e.querySelector("sl-button-group");s&&(s.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(e=>e.checked=e.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const t=this.required&&!this.value,e=this.customValidityMessage!=="";return t||e?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const t=this.validity.valid;return this.errorMessage=this.customValidityMessage||t?"":this.validationInput.validationMessage,this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),t}setCustomValidity(t=""){this.customValidityMessage=t,this.errorMessage=t,this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=this.label?!0:!!t,s=this.helpText?!0:!!e,i=h`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return h`
      <fieldset
        part="form-control"
        class=${R({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":o,"form-control--has-help-text":s})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${o?"false":"true"}
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

          ${this.hasButtonGroup?h`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${i}
                </sl-button-group>
              `:i}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};I.styles=[X,Xe,mr];I.dependencies={"sl-button-group":Mt};l([z("slot:not([name])")],I.prototype,"defaultSlot",2);l([z(".radio-group__validation-input")],I.prototype,"validationInput",2);l([v()],I.prototype,"hasButtonGroup",2);l([v()],I.prototype,"errorMessage",2);l([v()],I.prototype,"defaultValue",2);l([n()],I.prototype,"label",2);l([n({attribute:"help-text"})],I.prototype,"helpText",2);l([n()],I.prototype,"name",2);l([n({reflect:!0})],I.prototype,"value",2);l([n({reflect:!0})],I.prototype,"size",2);l([n({reflect:!0})],I.prototype,"form",2);l([n({type:Boolean,reflect:!0})],I.prototype,"required",2);l([N("size",{waitUntilFirstUpdate:!0})],I.prototype,"handleSizeChange",1);l([N("value")],I.prototype,"handleValueChange",1);I.define("sl-radio-group");var gr=x`
  ${di}

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
`,et=class extends J{constructor(){super(...arguments),this.hasSlotController=new Xt(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(t){if(this.disabled){t.preventDefault(),t.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(t){this.input.focus(t)}blur(){this.input.blur()}render(){return Po`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${R({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${S(this.value)}
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
    `}};et.styles=[X,gr];l([z(".button")],et.prototype,"input",2);l([z(".hidden-input")],et.prototype,"hiddenInput",2);l([v()],et.prototype,"hasFocus",2);l([n({type:Boolean,reflect:!0})],et.prototype,"checked",2);l([n()],et.prototype,"value",2);l([n({type:Boolean,reflect:!0})],et.prototype,"disabled",2);l([n({reflect:!0})],et.prototype,"size",2);l([n({type:Boolean,reflect:!0})],et.prototype,"pill",2);l([N("disabled",{waitUntilFirstUpdate:!0})],et.prototype,"handleDisabledChange",1);et.define("sl-radio-button");var br=Object.defineProperty,vr=Object.getOwnPropertyDescriptor,Zo=(t,e,o,s)=>{for(var i=s>1?void 0:s?vr(e,o):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(i=(s?a(e,o,i):a(i))||i);return s&&i&&br(e,o,i),i};let je=class extends E{static get styles(){return[x`
        sl-radio-group::part(form-control) {
          display: flex;
          justify-content: center;
        }
      `]}TypeChanged(t){this.dispatchEvent(new CustomEvent("type-changed",{detail:t.target.value}))}render(){return h`
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
    `}};Zo([n()],je.prototype,"type",2);je=Zo([D("food-type-form")],je);var yr=Object.defineProperty,wr=Object.getOwnPropertyDescriptor,ti=(t,e,o,s)=>{for(var i=s>1?void 0:s?wr(e,o):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(i=(s?a(e,o,i):a(i))||i);return s&&i&&yr(e,o,i),i};let qe=class extends E{constructor(){super(...arguments),this.quantity=0}static get styles(){return[x`
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
    `]}notify(){this.dispatchEvent(T("quantity-changed",this.quantity))}QuantityChanged(t){this.quantity=Math.abs(Number(t.target.value)),this.notify()}ChangeQuantity(t){this.quantity+=t,this.notify()}render(){return h`
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
    `}};ti([n()],qe.prototype,"quantity",2);qe=ti([D("quantity-form")],qe);var _r=Object.defineProperty,xr=Object.getOwnPropertyDescriptor,kt=(t,e,o,s)=>{for(var i=s>1?void 0:s?xr(e,o):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(i=(s?a(e,o,i):a(i))||i);return s&&i&&_r(e,o,i),i};let gt=class extends E{constructor(){super(),this._isFormValid=!1,this.FoodItemChanged=t=>e=>{e.stopPropagation(),this._foodForm={...this._foodForm,[t]:e.detail},this.checkFormValid()},this.FoodChanged=t=>e=>{e.stopPropagation(),this._foodForm={...this._foodForm,[t]:e.detail},this.checkFormValid(),!this.fullForm&&this.SaveFood()},this.DishChanged=t=>e=>{t.stopPropagation(),this._foodForm={...this._foodForm,[e]:t.detail},this.checkFormValid()}}static get styles(){return[x`
        form {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .footer-actions {
          display: flex;
          gap: var(--sl-spacing-medium);
          flex-direction: column;
        }
        .form-body {
          display: flex;
          flex-direction: column;
          gap: var(--sl-spacing-medium);
        }
        #save {
          width: 100%;
        }
      `]}async firstUpdated(){this.checkFormValid()}checkFormValid(){(this._foodForm?.Name?.length??0)>0&&(this._isFormValid=!1),this._isFormValid=!0}willUpdate(t){t.has("food")&&(this._foodForm=structuredClone(this.food),this._type=this.food&&At(this.food)?"dish":"food")}NotifyChange(){this.dispatchEvent(T("food-changed",this._foodForm))}TypeChanged(t){t.stopPropagation(),this._type=t.detail,this._type=="dish"?this._foodForm=Object.assign(new hi,{Name:this._foodForm?.Name}):this._foodForm=Object.assign(new Ye,{Name:this._foodForm?.Name})}AddItemToDish(t){this._foodForm.Ingredients.push(t)}MacroChanged(t){this._foodForm={...this._foodForm,...t.detail}}async SaveFood(){this._foodForm&&this.NotifyChange()}DeleteFood(){this.food&&this.food.Name&&this.dispatchEvent(T("delete-food",this.food))}render(){const t=h` <food-title-form
      @food-name-changed="${this.FoodChanged("Name")}"
      @portion-changed="${this.FoodItemChanged("Portion")}"
      .food=${this._foodForm}
      .showEditButton=${!this.creatingNew}
      .isEditing=${this.fullForm}
    ></food-title-form>`,e=this.creatingNew?h`<food-type-form
          @type-changed="${this.TypeChanged}"
          type=${this._type}
        ></food-type-form>`:H,o=h`
      <!--${e}-->
      ${this._type=="dish"?h` <dish-form .food=${this._foodForm}></dish-form>`:h` <food-item-form
            @macro-changed="${this.MacroChanged}"
            .food=${this._foodForm}
          ></food-item-form>`}
    `,s=h` <div class="footer-actions">
      ${this.creatingNew?H:h`<sl-button
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
    </div>`,i=this.fullForm?o:H;return h`
      <form class="input-validation-required" action="#">
        <div class="form-body">${t} ${i}</div>
        ${this.fullForm?s:H}
      </form>
    `}};kt([n({attribute:!1})],gt.prototype,"food",2);kt([n({type:Boolean})],gt.prototype,"fullForm",2);kt([n({type:Boolean})],gt.prototype,"creatingNew",2);kt([v()],gt.prototype,"_type",2);kt([v()],gt.prototype,"_foodForm",2);kt([v()],gt.prototype,"_isFormValid",2);gt=kt([D("food-form")],gt);var $r=Object.defineProperty,Cr=Object.getOwnPropertyDescriptor,ei=(t,e,o,s)=>{for(var i=s>1?void 0:s?Cr(e,o):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(i=(s?a(e,o,i):a(i))||i);return s&&i&&$r(e,o,i),i};let We=class extends E{static get styles(){return[x`
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
      `]}EditClicked(t){t.preventDefault(),t.stopPropagation(),this.dispatchEvent(T("edit-food",{food:this.food}))}render(){return this.food?h`
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
        `:H}};ei([n()],We.prototype,"food",2);We=ei([D("food-selection-card")],We);var kr=Object.defineProperty,Fr=Object.getOwnPropertyDescriptor,oi=(t,e,o,s)=>{for(var i=s>1?void 0:s?Fr(e,o):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(i=(s?a(e,o,i):a(i))||i);return s&&i&&kr(e,o,i),i};let He=class extends E{static get styles(){return[x`
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
      `]}EditClicked(t){t.preventDefault(),t.stopPropagation(),this.dispatchEvent(T("edit-food",{food:this.food}))}NotifySave(){this.dispatchEvent(T("food-entry-saved",this.food))}async QuickAdd(t){t.stopPropagation();let e=new Jt(this.food);e={...e,Food:{...e.Food,Today:t.detail}},e.Committed=!0,e.Id=await Ze(e),this.NotifySave()}render(){return h`
      <div class="left">
        <div class="title">
          <sl-button @click="${this.EditClicked}" circle>
            <sl-icon name="pencil-square"></sl-icon>
          </sl-button>
          <span>${this.food.Name}</span>
        </div>
        <div>
          ${At(this.food)?H:h` <span>${this.food.Portion}</span> `}
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
    `}};oi([n()],He.prototype,"food",2);He=oi([D("food-selection-row")],He);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Co=(t,e,o)=>{const s=new Map;for(let i=e;i<=o;i++)s.set(t[i],i);return s},Sr=ve(class extends ye{constructor(t){if(super(t),t.type!==nt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,o){let s;o===void 0?o=e:e!==void 0&&(s=e);const i=[],r=[];let a=0;for(const c of t)i[a]=s?s(c,a):a,r[a]=o(c,a),a++;return{values:r,keys:i}}render(t,e,o){return this.dt(t,e,o).values}update(t,[e,o,s]){const i=ui(t),{values:r,keys:a}=this.dt(e,o,s);if(!Array.isArray(i))return this.ut=a,r;const c=this.ut??=[],d=[];let u,m,f=0,b=i.length-1,p=0,g=r.length-1;for(;f<=b&&p<=g;)if(i[f]===null)f++;else if(i[b]===null)b--;else if(c[f]===a[p])d[p]=bt(i[f],r[p]),f++,p++;else if(c[b]===a[g])d[g]=bt(i[b],r[g]),b--,g--;else if(c[f]===a[g])d[g]=bt(i[f],r[g]),qt(t,d[g+1],i[f]),f++,g--;else if(c[b]===a[p])d[p]=bt(i[b],r[p]),qt(t,i[f],i[b]),b--,p++;else if(u===void 0&&(u=Co(a,p,g),m=Co(c,f,b)),u.has(c[f]))if(u.has(c[b])){const y=m.get(a[p]),$=y!==void 0?i[y]:null;if($===null){const w=qt(t,i[f]);bt(w,r[p]),d[p]=w}else d[p]=bt($,r[p]),qt(t,i[f],$),i[y]=null;p++}else De(i[b]),b--;else De(i[f]),f++;for(;p<=g;){const y=qt(t,d[g+1]);bt(y,r[p]),d[p++]=y}for(;f<=b;){const y=i[f++];y!==null&&De(y)}return this.ut=a,Oo(t,d),wt}});var Or=Object.defineProperty,Er=Object.getOwnPropertyDescriptor,se=(t,e,o,s)=>{for(var i=s>1?void 0:s?Er(e,o):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(i=(s?a(e,o,i):a(i))||i);return s&&i&&Or(e,o,i),i};let Tt=class extends E{constructor(){super(...arguments),this.foods=[],this.displayItemAs="row",this.FoodSelected=t=>e=>{const o=this.dailyEntries.find(s=>s.Food.Name===t.Name&&s.Time.equals(this.selectedTime));o?this.dispatchEvent(T("on-food-selected",{foodEntry:o})):this.dispatchEvent(T("on-food-selected",{food:t}))}}static get styles(){return[x`
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
      `]}OnAddNew(){this.dispatchEvent(T("create-food"))}ShowItem(t){return this.displayItemAs==="card"?h`<food-selection-card
          @click="${this.FoodSelected(t)}"
          class="food"
          .food="${t}"
        ></food-selection-card>`:h`<food-selection-row
          @click="${this.FoodSelected(t)}"
          class="food"
          .food="${t}"
        ></food-selection-row>`}render(){const t={"list-row":this.displayItemAs==="row","list-card":this.displayItemAs==="card"};return(this.foods?.length??0)>0?h`
          <div class="list ${R(t)}">
          <sl-button @click="${this.OnAddNew}">
            Add New
          </sl-button>
            ${Sr(this.foods,o=>o.Name,o=>this.ShowItem(o))}
          </div>
        `:h`
          <div class="nothing">
            <h2>Hmmm... Nothing here</h2>
            <sl-button size="large" @click="${this.OnAddNew}">
              Add New ?
            </sl-button>
          </div>
        `}};se([n()],Tt.prototype,"foods",2);se([n()],Tt.prototype,"displayItemAs",2);se([at({context:$e,subscribe:!0}),v()],Tt.prototype,"dailyEntries",2);se([at({context:Ce,subscribe:!0}),v()],Tt.prototype,"selectedTime",2);Tt=se([D("food-selection-list")],Tt);var Dr=Object.defineProperty,Pr=Object.getOwnPropertyDescriptor,re=(t,e,o,s)=>{for(var i=s>1?void 0:s?Pr(e,o):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(i=(s?a(e,o,i):a(i))||i);return s&&i&&Dr(e,o,i),i};let zt=class extends E{constructor(){super(...arguments),this.foods=[],this.displayItemAs="row",this.activeFoodName=null,this.CloseClicked=()=>this.dispatchEvent(T("on-close-entry-form"))}static get styles(){return[x`
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
      `]}async firstUpdated(){this.foods=await pi(),this.foodsToDisplay=this.foods.map(t=>t)}OnCreateFood(t){t.stopPropagation(),t.preventDefault();const e=new Ye;e.Name=this.searchTerm,this.dispatchEvent(T("create-food",{new:!0,food:e}))}Filter(t){this.searchTerm=t.target.value,this.searchTerm?this.foodsToDisplay=this.foods.filter(e=>e.Name.toLowerCase().includes(this.searchTerm)):this.foodsToDisplay=this.foods.map(e=>e)}render(){return h`
      <div class="header">
        <sl-input @sl-input="${t=>this.Filter(t)}">
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
    `}};re([v()],zt.prototype,"foods",2);re([v()],zt.prototype,"foodsToDisplay",2);re([v()],zt.prototype,"displayItemAs",2);re([n()],zt.prototype,"activeFoodName",2);zt=re([D("food-selection")],zt);var Tr=x`
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
`,ko=new WeakMap;function ii(t){let e=ko.get(t);return e||(e=window.getComputedStyle(t,null),ko.set(t,e)),e}function zr(t){if(typeof t.checkVisibility=="function")return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const e=ii(t);return e.visibility!=="hidden"&&e.display!=="none"}function Ar(t){const e=ii(t),{overflowY:o,overflowX:s}=e;return o==="scroll"||s==="scroll"?!0:o!=="auto"||s!=="auto"?!1:t.scrollHeight>t.clientHeight&&o==="auto"||t.scrollWidth>t.clientWidth&&s==="auto"}function Mr(t){const e=t.tagName.toLowerCase(),o=Number(t.getAttribute("tabindex"));return t.hasAttribute("tabindex")&&(isNaN(o)||o<=-1)||t.hasAttribute("disabled")||t.closest("[inert]")||e==="input"&&t.getAttribute("type")==="radio"&&!t.hasAttribute("checked")||!zr(t)?!1:(e==="audio"||e==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)?!0:Ar(t)}function Ir(t,e){var o;return((o=t.getRootNode({composed:!0}))==null?void 0:o.host)!==e}function Fo(t){const e=new WeakMap,o=[];function s(i){if(i instanceof Element){if(i.hasAttribute("inert")||i.closest("[inert]")||e.has(i))return;e.set(i,!0),!o.includes(i)&&Mr(i)&&o.push(i),i instanceof HTMLSlotElement&&Ir(i,t)&&i.assignedElements({flatten:!0}).forEach(r=>{s(r)}),i.shadowRoot!==null&&i.shadowRoot.mode==="open"&&s(i.shadowRoot)}for(const r of i.children)s(r)}return s(t),o.sort((i,r)=>{const a=Number(i.getAttribute("tabindex"))||0;return(Number(r.getAttribute("tabindex"))||0)-a})}function*po(t=document.activeElement){t!=null&&(yield t,"shadowRoot"in t&&t.shadowRoot&&t.shadowRoot.mode!=="closed"&&(yield*fi(po(t.shadowRoot.activeElement))))}function Lr(){return[...po()].pop()}var Ht=[],Rr=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=e=>{var o;if(e.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const s=Lr();if(this.previousFocus=s,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;e.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const i=Fo(this.element);let r=i.findIndex(c=>c===s);this.previousFocus=this.currentFocus;const a=this.tabDirection==="forward"?1:-1;for(;;){r+a>=i.length?r=0:r+a<0?r=i.length-1:r+=a,this.previousFocus=this.currentFocus;const c=i[r];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||c&&this.possiblyHasTabbableChildren(c))return;e.preventDefault(),this.currentFocus=c,(o=this.currentFocus)==null||o.focus({preventScroll:!1});const d=[...po()];if(d.includes(this.currentFocus)||!d.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t,this.elementsWithTabbableControls=["iframe"]}activate(){Ht.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Ht=Ht.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Ht[Ht.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const t=Fo(this.element);if(!this.element.matches(":focus-within")){const e=t[0],o=t[t.length-1],s=this.tabDirection==="forward"?e:o;typeof s?.focus=="function"&&(this.currentFocus=s,s.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}};function So(t){return t.charAt(0).toUpperCase()+t.slice(1)}var K=class extends J{constructor(){super(...arguments),this.hasSlotController=new Xt(this,"footer"),this.localize=new $t(this),this.modal=new Rr(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=t=>{this.contained||t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),Pe(this)))}disconnectedCallback(){var t;super.disconnectedCallback(),Te(this),(t=this.closeWatcher)==null||t.destroy()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const o=vt(this,"drawer.denyClose",{dir:this.localize.dir()});yt(this.panel,o.keyframes,o.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;document.removeEventListener("keydown",this.handleDocumentKeyDown),(t=this.closeWatcher)==null||t.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),Pe(this));const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([Ot(this.drawer),Ot(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=vt(this,`drawer.show${So(this.placement)}`,{dir:this.localize.dir()}),o=vt(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([yt(this.panel,e.keyframes,e.options),yt(this.overlay,o.keyframes,o.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),Te(this)),await Promise.all([Ot(this.drawer),Ot(this.overlay)]);const t=vt(this,`drawer.hide${So(this.placement)}`,{dir:this.localize.dir()}),e=vt(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([yt(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),yt(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const o=this.originalTrigger;typeof o?.focus=="function"&&setTimeout(()=>o.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),Pe(this)),this.open&&this.contained&&(this.modal.deactivate(),Te(this))}async show(){if(!this.open)return this.open=!0,pe(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,pe(this,"sl-after-hide")}render(){return h`
      <div
        part="base"
        class=${R({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${S(this.noHeader?this.label:void 0)}
          aria-labelledby=${S(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":h`
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
    `}};K.styles=[X,Tr];K.dependencies={"sl-icon-button":B};l([z(".drawer")],K.prototype,"drawer",2);l([z(".drawer__panel")],K.prototype,"panel",2);l([z(".drawer__overlay")],K.prototype,"overlay",2);l([n({type:Boolean,reflect:!0})],K.prototype,"open",2);l([n({reflect:!0})],K.prototype,"label",2);l([n({reflect:!0})],K.prototype,"placement",2);l([n({type:Boolean,reflect:!0})],K.prototype,"contained",2);l([n({attribute:"no-header",type:Boolean,reflect:!0})],K.prototype,"noHeader",2);l([N("open",{waitUntilFirstUpdate:!0})],K.prototype,"handleOpenChange",1);l([N("contained",{waitUntilFirstUpdate:!0})],K.prototype,"handleNoModalChange",1);G("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});G("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});G("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});G("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});G("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});G("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});G("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});G("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});G("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});G("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});G("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});K.define("sl-drawer");var Br=Object.defineProperty,Vr=Object.getOwnPropertyDescriptor,tt=(t,e,o,s)=>{for(var i=s>1?void 0:s?Vr(e,o):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(i=(s?a(e,o,i):a(i))||i);return s&&i&&Br(e,o,i),i};let V=class extends E{constructor(){super(...arguments),this.activeFood=null,this.activeFoodEntry=null,this._drawerSize="25rem",this._creatingNew=!1,this.fullForm=!1,this.formToShow="nothing",this.slDrawerClassMap={hideOverlay:!0},this.onSaveFood=this.ShowSelection,this.onSaveEntry=()=>{},this.onSelectFoodEntry=()=>{}}async firstUpdated(){this.AddListeners()}AddListeners(){}ResetProps(){this.onSaveEntry=this.CloseDrawer,this.onSaveFood=this.ShowSelection,this.activeFood=null,this.activeFoodEntry=null}ShowSelection(t){this.fullForm=!0,this.formToShow="selection",this.ExpandDrawer(),this.drawer.show()}EditFoodFromSelection(t){this.activeFood=t.detail.food,this._creatingNew=!1,this.fullForm=!0,this.formToShow="food"}ShowFoodEntryForm(t){if(t.stopPropagation(),!t.detail?.foodEntry?.Food&&!this.activeFood&&!t.detail.food){this.ShowSelection(t);return}this.activeFood=t.detail.food??this.activeFood,this.activeFoodEntry=t.detail.foodEntry??new Jt(this.activeFood,t.detail.date??this.currentDate,t.detail.hour??this.currentTime),this.fullForm=!0,this.formToShow="entry",this._creatingNew=!1,this.slDrawerClassMap.hideOverlay=!0,this.ExpandDrawer(),this.drawer.show()}ShowFoodForm(t){this.activeFood=t.detail.food?t.detail.food:new Ye,this._creatingNew=(this.activeFood?.Name?.length??0)===0,this.fullForm=this._creatingNew,this.formToShow="food",this.fullForm?this.ExpandDrawer():this.CondenseDrawer(),this.onSaveFood=this.ShowSelection,this.drawer.show()}async SaveEntry(t){await Mi(t.detail),this.onSaveEntry(t),this.ResetProps()}async SaveFood(t){await mi(t.detail),this.onSaveFood(t),this.ResetProps()}async DeleteFood(t){await gi(t.detail),this.onSaveFood(t),this.ResetProps()}ExpandDrawer(t=!0){this.fullForm=!0,this._drawerSize=t?"calc(100% - 3.5rem)":"calc(100% - 8.5rem)"}CondenseDrawer(){this.fullForm=!1,this._drawerSize="30%;"}CloseDrawer(){this.CondenseDrawer(),this.drawer.hide(),this.ResetProps()}render(){let t=null;return this.formToShow==="entry"?t=h`<food-entry-form
        @on-back-food-drawer=${this.ShowSelection}
        @on-close-food-drawer=${this.CloseDrawer}
        .entry=${this.activeFoodEntry}
      ></food-entry-form>`:this.formToShow=="food"?t=h`<food-form
        .food="${this.activeFood}"
        .fullForm=${this.fullForm}
        .creatingNew=${this._creatingNew}
        @food-changed=${this.SaveFood}
        @delete-food=${this.DeleteFood}
        @on-back-food-drawer=${this.ShowSelection}
        @on-close-food-drawer=${this.CloseDrawer}
        @on-full-form=${this.ExpandDrawer}
        @on-condensed=${this.CondenseDrawer}
      ></food-form>`:this.formToShow=="selection"&&(t=h`<food-selection
        @on-food-selected="${this.ShowFoodEntryForm}"
        @create-food="${this.ShowFoodForm}"
        @edit-food="${this.EditFoodFromSelection}"
        @on-close-entry-form=${this.CloseDrawer}
      ></food-selection>`),h`
      <sl-drawer
        placement="bottom"
        no-header
        style="--size: ${this._drawerSize}"
        class="${R(this.slDrawerClassMap)}"
      >
        ${t}
      </sl-drawer>
    `}};V.styles=[x`
      sl-drawer.hideOverlay::part(overlay) {
        display: none;
      }

      sl-drawer::part(body) {
        padding-bottom: 0;
      }

      sl-drawer::part(panel) {
        transition: height 0.5s;
      }
    `];tt([z("sl-drawer")],V.prototype,"drawer",2);tt([z("#add-food")],V.prototype,"addFoodBtn",2);tt([v()],V.prototype,"activeFood",2);tt([v()],V.prototype,"activeFoodEntry",2);tt([v()],V.prototype,"_drawerSize",2);tt([v()],V.prototype,"_creatingNew",2);tt([v()],V.prototype,"fullForm",2);tt([v()],V.prototype,"formToShow",2);tt([v()],V.prototype,"slDrawerClassMap",2);tt([at({context:Zt,subscribe:!0}),v()],V.prototype,"currentDate",2);tt([at({context:Ce,subscribe:!0}),v()],V.prototype,"currentTime",2);V=tt([D("food-drawer")],V);var Nr=Object.defineProperty,jr=Object.getOwnPropertyDescriptor,Ft=(t,e,o,s)=>{for(var i=s>1?void 0:s?jr(e,o):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(i=(s?a(e,o,i):a(i))||i);return s&&i&&Nr(e,o,i),i};class St extends E{constructor(){super(...arguments),this._selectedDate=L.Now.plainDateISO(),this._selectedTime=L.Now.plainTimeISO(),this._showCalendar=!0,this._showAddBtn=!0}static{this.styles=[bi,Li,vi]}render(){return h`
      <diet-page-header .showCalendar=${this._showCalendar}></diet-page-header>
      ${this.RenderContent()}
      <diet-page-footer .showAddBtn=${this._showAddBtn} .activePage="${this.activePage}"></diet-page-footer>
      <food-drawer></food-drawer>
    `}}Ft([Je({context:$e}),v()],St.prototype,"_dailyEntries",2);Ft([Je({context:Zt}),v()],St.prototype,"_selectedDate",2);Ft([Je({context:Ce}),v()],St.prototype,"_selectedTime",2);Ft([z("food-drawer")],St.prototype,"foodDrawer",2);Ft([n()],St.prototype,"activePage",2);Ft([v()],St.prototype,"_showCalendar",2);Ft([v()],St.prototype,"_showAddBtn",2);export{St as D,Yr as G,Hr as a,Ot as b,yt as c,To as d,Xr as e,Xe as f,vt as g,pe as h,xi as l,G as s,Wr as w};
