import{i as u,c as P,_ as a,e as c,r as g,n as h,w as v,S as F,F as V,H as U,L as T,x as d,b as y,o as f,t as b,s as x,G as H,d as L,f as E,g as I,h as N,a as R}from"./index-DcatTtSZ.js";import{f as W,d as j,l as q,a as M,w as B,s as O,b as C,g as $,c as k,e as z,h as S,D as K}from"./diet-page-DsUEyJ7J.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function J(t){return(e,r)=>{const o=typeof e=="function"?e:e[r];Object.assign(o,t)}}var Q=u`
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
`,s=class extends F{constructor(){super(...arguments),this.formControlController=new V(this),this.hasSlotController=new U(this,"help-text","label"),this.localize=new T(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=t=>t.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(t){this.input.style.setProperty("--percent",`${t*100}%`)}syncTooltip(t){if(this.output!==null){const e=this.input.offsetWidth,r=this.output.offsetWidth,o=getComputedStyle(this.input).getPropertyValue("--thumb-size"),i=this.localize.dir()==="rtl",n=e*t;if(i){const l=`${e-n}px + ${t} * ${o}`;this.output.style.translate=`calc((${l} - ${r/2}px - ${o} / 2))`}else{const l=`${n}px - ${t} * ${o}`;this.output.style.translate=`calc(${l} - ${r/2}px + ${o} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const t=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(t),this.tooltip!=="none"&&this.syncTooltip(t)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}focus(t){this.input.focus(t)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),r=this.label?!0:!!t,o=this.helpText?!0:!!e;return d`
      <div
        part="form-control"
        class=${y({"form-control":!0,"form-control--medium":!0,"form-control--has-label":r,"form-control--has-help-text":o})}
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
            class=${y({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
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
              name=${f(this.name)}
              ?disabled=${this.disabled}
              min=${f(this.min)}
              max=${f(this.max)}
              step=${f(this.step)}
              .value=${q(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?d`
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
    `}};s.styles=[P,W,Q];a([c(".range__control")],s.prototype,"input",2);a([c(".range__tooltip")],s.prototype,"output",2);a([g()],s.prototype,"hasFocus",2);a([g()],s.prototype,"hasTooltip",2);a([h()],s.prototype,"title",2);a([h()],s.prototype,"name",2);a([h({type:Number})],s.prototype,"value",2);a([h()],s.prototype,"label",2);a([h({attribute:"help-text"})],s.prototype,"helpText",2);a([h({type:Boolean,reflect:!0})],s.prototype,"disabled",2);a([h({type:Number})],s.prototype,"min",2);a([h({type:Number})],s.prototype,"max",2);a([h({type:Number})],s.prototype,"step",2);a([h()],s.prototype,"tooltip",2);a([h({attribute:!1})],s.prototype,"tooltipFormatter",2);a([h({reflect:!0})],s.prototype,"form",2);a([j()],s.prototype,"defaultValue",2);a([J({passive:!0})],s.prototype,"handleThumbDragStart",1);a([v("value",{waitUntilFirstUpdate:!0})],s.prototype,"handleValueChange",1);a([v("disabled",{waitUntilFirstUpdate:!0})],s.prototype,"handleDisabledChange",1);a([v("hasTooltip",{waitUntilFirstUpdate:!0})],s.prototype,"syncRange",1);s.define("sl-range");var X=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,G=(t,e,r,o)=>{for(var i=o>1?void 0:o?Y(e,r):e,n=t.length-1,l;n>=0;n--)(l=t[n])&&(i=(o?l(e,r,i):l(i))||i);return o&&i&&X(e,r,i),i};let _=class extends x{constructor(){super(),this.getTextDisplayText=t=>t.replace("_"," "),this.getOptions=t=>t.map(e=>d`<sl-option value="${e}">${this.getTextDisplayText(e)}</sl-option>`)}async firstUpdated(){this._goals=await H(),this.addEventListener("diet-profile-changed",async t=>{await L(t.detail)})}NotifyChange(){this.dispatchEvent(new CustomEvent("diet-profile-changed",{bubbles:!0,composed:!0,detail:this._goals}))}GoalsChanged(t,e){this._goals={...this._goals,[e]:t.target.value},this.NotifyChange()}render(){return this._goals?d`
          <form class="input-validation-required">
            <br />
            <sl-select hoist
              size="small"
              id="activityLevelSelect"
              label="Activity Level"
              .value="${this._goals.ActivityLevel}"
              @sl-change="${t=>this.GoalsChanged(t,"ActivityLevel")}"
              required
            >
              ${this.getOptions(M)}
            </sl-select>
            <br />
            <sl-select hoist
              size="small"
              id="weightGoalSelect"
              .value="${this._goals.WeightGoal}"
              @sl-change="${t=>this.GoalsChanged(t,"WeightGoal")}"
              label="Goal"
              required
            >
              ${this.getOptions(B)}
            </sl-select>
            <br />
            <sl-input
              size="small"
              id="fatCarbSplitInput"
              .value="${this._goals.FatCarbSplit.toString()}"
              @sl-change="${t=>this.GoalsChanged(t,"FatCarbSplit")}"
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
              @sl-input="${t=>this.GoalsChanged(t,"FatCarbSplit")}"
              .value="${this._goals.FatCarbSplit}"
              name="FatCarbSplit"
              min="0"
              max="100"
            ></sl-range>
            <br />
          </form>
        `:d``}};G([g()],_.prototype,"_goals",2);_=G([b("diet-profile-form")],_);var Z=Object.defineProperty,tt=Object.getOwnPropertyDescriptor,A=(t,e,r,o)=>{for(var i=o>1?void 0:o?tt(e,r):e,n=t.length-1,l;n>=0;n--)(l=t[n])&&(i=(o?l(e,r,i):l(i))||i);return o&&i&&Z(e,r,i),i};let m=class extends x{constructor(){super()}async firstUpdated(){this._profile=await E(),await new Promise(t=>setTimeout(t,0)),this.addEventListener("profile-changed",async t=>{await I(t.detail)})}NotifyChange(){this.dispatchEvent(new CustomEvent("profile-changed",{bubbles:!0,composed:!0,detail:this._profile}))}ProfileChanged(t,e){this._profile={...this._profile,[e]:t.target.value},this.NotifyChange()}render(){return this._profile?d`
          <form class="input-validation-required">
            <div style="display: flex; gap: 1rem;">
              <sl-select
                size="small"
                id="genderSelect"
                .value="${this._profile.Gender}"
                @sl-change="${t=>this.ProfileChanged(t,"Gender")}"
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
                @sl-input="${t=>this.ProfileChanged(t,"Age")}"
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
                @sl-input="${t=>this.ProfileChanged(t,"Height")}"
                name="Height"
                label="Height"
                required
              ></sl-input>
              <sl-input
                size="small"
                id="weightInput"
                .value="${this._profile.Weight.toString()}"
                @sl-input="${t=>this.ProfileChanged(t,"Weight")}"
                name="Weight"
                label="Weight"
                type="number"
                required
              ></sl-input>
            </div>
          </form>
        `:d``}};m.styles=u`
    sl-input {
      min-width: 0;
      flex: 1 1 auto;
    }
  `;A([g()],m.prototype,"_profile",2);m=A([b("personal-profile-form")],m);var et=u`
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
`,p=class extends F{constructor(){super(...arguments),this.localize=new T(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(t=>{for(const e of t)e.type==="attributes"&&e.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){super.disconnectedCallback(),this.detailsObserver.disconnect()}handleSummaryClick(t){t.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.open?this.hide():this.show()),(t.key==="ArrowUp"||t.key==="ArrowLeft")&&(t.preventDefault(),this.hide()),(t.key==="ArrowDown"||t.key==="ArrowRight")&&(t.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await C(this.body);const{keyframes:e,options:r}=$(this,"details.show",{dir:this.localize.dir()});await k(this.body,z(e,this.body.scrollHeight),r),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await C(this.body);const{keyframes:e,options:r}=$(this,"details.hide",{dir:this.localize.dir()});await k(this.body,z(e,this.body.scrollHeight),r),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,S(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,S(this,"sl-after-hide")}render(){const t=this.localize.dir()==="rtl";return d`
      <details
        part="base"
        class=${y({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":t})}
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
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};p.styles=[P,et];p.dependencies={"sl-icon":N};a([c(".details")],p.prototype,"details",2);a([c(".details__header")],p.prototype,"header",2);a([c(".details__body")],p.prototype,"body",2);a([c(".details__expand-icon-slot")],p.prototype,"expandIconSlot",2);a([h({type:Boolean,reflect:!0})],p.prototype,"open",2);a([h()],p.prototype,"summary",2);a([h({type:Boolean,reflect:!0})],p.prototype,"disabled",2);a([v("open",{waitUntilFirstUpdate:!0})],p.prototype,"handleOpenChange",1);O("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});O("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});p.define("sl-details");var it=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,at=(t,e,r,o)=>{for(var i=o>1?void 0:o?ot(e,r):e,n=t.length-1,l;n>=0;n--)(l=t[n])&&(i=(o?l(e,r,i):l(i))||i);return o&&i&&it(e,r,i),i};let D=class extends x{static get styles(){return[u`
        .container {
          display: flex;
          flex-direction: column;
          gap: var(--sl-spacing-small);
          padding: var(--sl-spacing-small);
        }
      `]}render(){return d`
      <div class="container">
        <personal-profile-form></personal-profile-form>
        <diet-profile-form></diet-profile-form>
      </div>
    `}};D=at([b("diet-profile")],D);var rt=Object.defineProperty,st=Object.getOwnPropertyDescriptor,lt=(t,e,r,o)=>{for(var i=o>1?void 0:o?st(e,r):e,n=t.length-1,l;n>=0;n--)(l=t[n])&&(i=(o?l(e,r,i):l(i))||i);return o&&i&&rt(e,r,i),i};let w=class extends K{constructor(){super(...arguments),this._showAddBtn=!1,this._showCalendar=!1}RenderContent(){return d`
      <diet-profile></diet-profile>
      <p>
        Using the standard diet and protein settings from
        <a target="_blank"
          href="https://www.musclehacking.com/calorie-calculator/">
          Muscle Hacking Calorie Calculator
        </a>
      </p>
      <p></p>
      <p></p>
    `}};w.styles=[R,u`
      :host {
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        justify-content: space-between;
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
    `];w=lt([b("diet-profile-page")],w);export{w as DietProfilePage};
