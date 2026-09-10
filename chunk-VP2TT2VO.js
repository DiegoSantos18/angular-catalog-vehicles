import{$a as be,A as te,Ab as Z,Ac as M,Bb as $,Cc as Te,Da as p,Dc as ze,Ea as V,Eb as R,Ec as Ae,Fa as H,Fc as Ve,Gc as Be,Hb as ye,Hc as Re,Ic as je,Jb as Ce,Jc as Le,K as ne,Kb as Se,Kc as Ge,M as z,Ma as Q,Mc as Ue,Na as se,Nb as Ne,Nc as qe,O as A,Oa as he,Ob as f,Oc as Xe,Pa as W,Pb as Me,Pc as He,Q as b,Qa as D,Qc as Qe,Ra as F,Sa as l,Sc as We,Ta as i,Tc as Ze,U as q,Ua as r,Ub as Ie,V as X,Va as h,Vb as N,W as ae,Wc as $e,X as ce,Xc as Ke,Yc as Ye,Zc as Je,_c as et,a as P,aa as E,ab as pe,b as w,ba as ie,bb as u,db as B,ea as v,eb as C,fb as S,fc as Pe,ga as re,ha as oe,hb as ue,ib as ke,jb as ge,ka as de,ma as me,mb as fe,mc as we,ob as g,pb as xe,qa as d,qb as o,rb as O,rc as Ee,sb as k,tb as ve,tc as De,ua as _,uc as Fe,va as y,vc as Oe,wa as le,xb as _e,xc as j,y as ee,zc as L}from"./chunk-HILXC5S3.js";var mt=["*"],tt=(()=>{class a{labelPosition="after";static \u0275fac=function(t){return new(t||a)};static \u0275cmp=p({type:a,selectors:[["","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(t,n){t&2&&g("mdc-form-field--align-end",n.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},ngContentSelectors:mt,decls:1,vars:0,template:function(t,n){t&1&&(C(),S(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label, .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label, [dir=rtl] .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label, .mdc-form-field--align-end > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label, [dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2})}return a})();var lt=["input"],st=["*"],K={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},ht=new A("mat-checkbox-default-options",{providedIn:"root",factory:()=>K}),s=(function(a){return a[a.Init=0]="Init",a[a.Checked=1]="Checked",a[a.Unchecked=2]="Unchecked",a[a.Indeterminate=3]="Indeterminate",a})(s||{}),Y=class{source;checked},J=(()=>{class a{_elementRef=b(de);_changeDetectorRef=b(Ne);_ngZone=b(ie);_animationsDisabled=Ee();_options=b(ht,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let t=new Y;return t.source=this,t.checked=e,t}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new E;indeterminateChange=new E;value;disableRipple=!1;_inputElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=s.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){b(Pe).load(Fe);let e=b(new ye("tabindex"),{optional:!0});this._options=this._options||K,this.color=this._options.color||K.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=b(we).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let t=e!=this._indeterminate();this._indeterminate.set(e),t&&(e?this._transitionCheckState(s.Indeterminate):this._transitionCheckState(this.checked?s.Checked:s.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=v(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let t=this._currentCheckState,n=this._getAnimationTargetElement();if(!(t===e||!n)&&(this._currentAnimationClass&&n.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){n.classList.add(this._currentAnimationClass);let m=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{n.classList.remove(m)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?s.Checked:s.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,t){if(this._animationsDisabled)return"";switch(e){case s.Init:if(t===s.Checked)return this._animationClasses.uncheckedToChecked;if(t==s.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case s.Unchecked:return t===s.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case s.Checked:return t===s.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case s.Indeterminate:return t===s.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let t=this._inputElement;t&&(t.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_preventBubblingFromLabel(e){e.target&&this._inputElement&&e.target!==this._inputElement.nativeElement&&e.stopPropagation()}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=p({type:a,selectors:[["mat-checkbox"]],viewQuery:function(t,n){if(t&1&&ue(lt,5),t&2){let m;ke(m=ge())&&(n._inputElement=m.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(t,n){t&2&&(pe("id",n.id),Q("tabindex",null)("aria-label",null)("aria-labelledby",null),xe(n.color?"mat-"+n.color:"mat-accent"),g("_mat-animation-noopable",n._animationsDisabled)("mdc-checkbox--disabled",n.disabled)("mat-mdc-checkbox-disabled",n.disabled)("mat-mdc-checkbox-checked",n.checked)("mat-mdc-checkbox-disabled-interactive",n.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",f],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",f],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",f],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:Me(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",f],checked:[2,"checked","checked",f],disabled:[2,"disabled","disabled",f],indeterminate:[2,"indeterminate","indeterminate",f]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[_e([{provide:Ve,useExisting:ne(()=>a),multi:!0},{provide:Re,useExisting:a,multi:!0}]),oe],ngContentSelectors:st,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition","for"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mat-internal-form-field-label","mdc-label"]],template:function(t,n){if(t&1&&(C(),i(0,"label",3),u("click",function(I){return n._preventBubblingFromLabel(I)}),i(1,"span",4,0),h(3,"span",5),i(4,"input",6,1),u("blur",function(){return n._onBlur()})("click",function(){return n._onInputClick()})("change",function(I){return n._onInteractionEvent(I)}),r(),h(6,"span",7),i(7,"span",8),ae(),i(8,"svg",9),h(9,"path",10),r(),ce(),h(10,"span",11),r(),h(11,"span",12),r(),i(12,"span",13,2),S(14),r()()),t&2){let m=fe(2);l("labelPosition",n.labelPosition)("for",n.inputId),d(4),g("mdc-checkbox--selected",n.checked),l("checked",n.checked)("indeterminate",n.indeterminate)("disabled",n.disabled&&!n.disabledInteractive)("id",n.inputId)("required",n.required)("tabIndex",n.disabled&&!n.disabledInteractive?-1:n.tabIndex),Q("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby)("aria-describedby",n.ariaDescribedby)("aria-checked",n.indeterminate?"mixed":null)("aria-controls",n.ariaControls)("aria-disabled",n.disabled&&n.disabledInteractive?!0:null)("aria-expanded",n.ariaExpanded)("aria-owns",n.ariaOwns)("name",n.name)("value",n.value),d(7),l("matRippleTrigger",m)("matRippleDisabled",n.disableRipple||n.disabled)("matRippleCentered",!0)}},dependencies:[De,tt],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--%NS%mat-checkbox-state-layer-size, 40px);
  height: var(--%NS%mat-checkbox-state-layer-size, 40px);
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--%NS%mat-checkbox-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-hover-icon-color, var(--%NS%mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-focus-icon-color, var(--%NS%mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--%NS%mat-checkbox-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-checkbox-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-checkbox-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-checkbox-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-checkbox-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-checkbox-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled .mat-internal-form-field-label {
  color: var(--%NS%mat-checkbox-disabled-label-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled .mat-internal-form-field-label {
    color: GrayText;
  }
}
.mat-mdc-checkbox .mat-internal-form-field-label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-checkbox-touch-target-size, 48px);
  width: var(--%NS%mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return a})(),nt=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=V({type:a});static \u0275inj=z({imports:[J,j]})}return a})();function pt(a,c){if(a&1&&(i(0,"mat-checkbox",13),o(1),r(),_()),a&2){let e=c.$implicit;l("formControlName",e),y(),d(),k(" ",e," ")}}function ut(a,c){if(a&1&&(i(0,"mat-checkbox",13),o(1),r(),_()),a&2){let e=c.$implicit;l("formControlName",e),y(),d(),k(" ",e," ")}}var G=class a{constructor(c){this.fb=c}fb;filterChanged=new E;filterForm;brands=["Audi","BMW","BYD","Chevrolet","Ford","Hyundai","Polestar","Porsche","Tesla","Volvo"];conditions=["Boa Oferta","Certificado","Novo na Loja","\xD3tima Oferta"];ngOnInit(){this.filterForm=this.fb.group({search:[""],minPrice:[null],maxPrice:[null],brands:this.fb.group(this.brands.reduce((c,e)=>w(P({},c),{[e]:[!1]}),{})),conditions:this.fb.group(this.conditions.reduce((c,e)=>w(P({},c),{[e]:[!1]}),{}))}),this.filterForm.valueChanges.pipe(ee(300),te()).subscribe(c=>{this.emitCleanFilters(c)})}emitCleanFilters(c){let e=Object.keys(c.brands).filter(m=>c.brands[m]),t=Object.keys(c.conditions).filter(m=>c.conditions[m]),n={search:c.search,minPrice:c.minPrice,maxPrice:c.maxPrice,brands:e,conditions:t};this.filterChanged.emit(n)}clearFilters(){this.filterForm.reset()}static \u0275fac=function(e){return new(e||a)(le(Qe))};static \u0275cmp=p({type:a,selectors:[["v-filter"]],outputs:{filterChanged:"filterChanged"},decls:34,vars:1,consts:[[1,"v-filter-container",3,"formGroup"],[1,"v-filter-header"],["appearance","outline",1,"v-search-field"],["matInput","","type","text","formControlName","search"],["mat-button","","type","button",1,"v-clear-btn",3,"click"],[1,"v-filter-section"],[1,"v-price-inputs"],["appearance","outline",1,"v-small-input"],["matInput","","type","number","placeholder","20000","formControlName","minPrice"],[1,"v-dash"],["matInput","","type","number","placeholder","60000","formControlName","maxPrice"],["formGroupName","brands",1,"v-filter-section"],[1,"v-checkbox-list"],[3,"formControlName"],["formGroupName","conditions",1,"v-filter-section"]],template:function(e,t){e&1&&(i(0,"form",0)(1,"div",1)(2,"mat-form-field",2)(3,"mat-label"),o(4,"Pesquisar..."),r(),h(5,"input",3),_(),r(),i(6,"button",4),u("click",function(){return t.clearFilters()}),o(7,"Limpar"),r()(),i(8,"div",5)(9,"h4"),o(10,"Faixa de Pre\xE7o"),r(),i(11,"div",6)(12,"mat-form-field",7)(13,"mat-label"),o(14,"M\xEDn"),r(),h(15,"input",8),_(),r(),i(16,"span",9),o(17,"-"),r(),i(18,"mat-form-field",7)(19,"mat-label"),o(20,"M\xE1x"),r(),h(21,"input",10),_(),r()()(),i(22,"div",11)(23,"h4"),o(24,"Marcas"),r(),i(25,"div",12),D(26,pt,2,2,"mat-checkbox",13,W),r()(),i(28,"div",14)(29,"h4"),o(30,"Condi\xE7\xE3o"),r(),i(31,"div",12),D(32,ut,2,2,"mat-checkbox",13,W),r()()()),e&2&&(l("formGroup",t.filterForm),d(5),y(),d(10),y(),d(6),y(),d(5),F(t.brands),d(6),F(t.conditions))},dependencies:[N,We,Ue,Be,qe,je,Le,Ge,He,Xe,Ke,$e,Ze,Je,Ye,nt,J,M,L],styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%}.v-filter-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px;padding:16px;box-sizing:border-box;color:var(--%NS%mat-sys-on-surface)}.v-filter-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--%NS%mat-sys-outline-variant);padding-bottom:12px}.v-filter-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:1rem;font-weight:600}.v-filter-header[_ngcontent-%COMP%]   .v-clear-btn[_ngcontent-%COMP%]{font-size:.8rem;color:var(--%NS%mat-sys-primary)}.v-filter-section[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}.v-filter-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0 0 4px;font-size:.85rem;font-weight:600;opacity:.9}.v-price-inputs[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.v-price-inputs[_ngcontent-%COMP%]   .v-small-input[_ngcontent-%COMP%]{flex:1}.v-price-inputs[_ngcontent-%COMP%]   .v-dash[_ngcontent-%COMP%]{opacity:.6}.v-checkbox-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}"]})};var kt=["*"];var gt=new A("MAT_CARD_CONFIG"),it=(()=>{class a{appearance;constructor(){let e=b(gt,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=p({type:a,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(t,n){t&2&&g("mat-mdc-card-outlined",n.appearance==="outlined")("mdc-card--outlined",n.appearance==="outlined")("mat-mdc-card-filled",n.appearance==="filled")("mdc-card--filled",n.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:kt,decls:1,vars:0,template:function(t,n){t&1&&(C(),S(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-elevated-container-elevation, var(--%NS%mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--%NS%mat-card-outlined-container-color, var(--%NS%mat-sys-surface));
  border-radius: var(--%NS%mat-card-outlined-container-shape, var(--%NS%mat-sys-corner-medium));
  border-width: var(--%NS%mat-card-outlined-outline-width, 1px);
  border-color: var(--%NS%mat-card-outlined-outline-color, var(--%NS%mat-sys-outline-variant));
  box-shadow: var(--%NS%mat-card-outlined-container-elevation, var(--%NS%mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--%NS%mat-card-filled-container-color, var(--%NS%mat-sys-surface-container-highest));
  border-radius: var(--%NS%mat-card-filled-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-filled-container-elevation, var(--%NS%mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--%NS%mat-card-title-text-font, var(--%NS%mat-sys-title-large-font));
  line-height: var(--%NS%mat-card-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));
  font-size: var(--%NS%mat-card-title-text-size, var(--%NS%mat-sys-title-large-size));
  letter-spacing: var(--%NS%mat-card-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));
  font-weight: var(--%NS%mat-card-title-text-weight, var(--%NS%mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--%NS%mat-card-subtitle-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-card-subtitle-text-font, var(--%NS%mat-sys-title-medium-font));
  line-height: var(--%NS%mat-card-subtitle-text-line-height, var(--%NS%mat-sys-title-medium-line-height));
  font-size: var(--%NS%mat-card-subtitle-text-size, var(--%NS%mat-sys-title-medium-size));
  letter-spacing: var(--%NS%mat-card-subtitle-text-tracking, var(--%NS%mat-sys-title-medium-tracking));
  font-weight: var(--%NS%mat-card-subtitle-text-weight, var(--%NS%mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2})}return a})();var rt=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275dir=H({type:a,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return a})();var ot=(()=>{class a{align="start";static \u0275fac=function(t){return new(t||a)};static \u0275dir=H({type:a,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(t,n){t&2&&g("mat-mdc-card-actions-align-end",n.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return a})();var dt=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=V({type:a});static \u0275inj=z({imports:[j]})}return a})();var U=class a{item=Se.required();viewDetails=Ce();onViewDetails(){this.viewDetails.emit(this.item())}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=p({type:a,selectors:[["v-catalog-card"]],inputs:{item:[1,"item"]},outputs:{viewDetails:"viewDetails"},decls:40,vars:20,consts:[[1,"v-product-card"],[1,"v-card-image-container"],[3,"src","alt"],[1,"v-badge"],["mat-icon-button","","title","Favoritar",1,"v-favorite-btn"],[1,"v-card-body"],[1,"v-subtext"],[1,"v-price-row"],[1,"v-price"],[1,"v-est-monthly"],[1,"v-specs-row"],[1,"v-card-footer"],[1,"v-location-info"],[1,"v-brand-badge"],[3,"svgIcon"],[1,"v-details-link",3,"click"]],template:function(e,t){e&1&&(i(0,"mat-card",0)(1,"div",1),h(2,"img",2),i(3,"span",3),o(4),r(),i(5,"button",4)(6,"mat-icon"),o(7,"favorite_border"),r()()(),i(8,"mat-card-content",5)(9,"h3"),o(10),r(),i(11,"p",6),o(12),r(),i(13,"div",7)(14,"span",8),o(15),Z(16,"currency"),r(),i(17,"span",9),o(18),Z(19,"currency"),r()(),i(20,"div",10)(21,"span"),o(22),i(23,"small"),o(24,"Autonomia "),r()(),i(25,"span"),o(26),i(27,"small"),o(28," Bateria "),r()(),i(29,"span"),o(30),i(31,"small"),o(32,"0-100 km/h"),r()()()(),i(33,"mat-card-actions",11)(34,"span",12)(35,"div",13),h(36,"mat-icon",14),r(),o(37),r(),i(38,"a",15),u("click",function(){return t.onViewDetails()}),o(39,"Ver detalhes"),r()()()),e&2&&(d(2),l("src",t.item().imageUrl,me)("alt",t.item().title),d(2),O(t.item().badge),d(6),O(t.item().title),d(2),O(t.item().subtitle),d(3),O($(16,12,t.item().price,"BRL","symbol")),d(3),k(" Est. ",$(19,16,t.item().monthlyEst,"BRL","symbol")," / m\xEAs"),d(4),k("",t.item().range," km "),d(4),k("",t.item().battery," kW/h "),d(4),k("",t.item().acceleration," s "),d(6),l("svgIcon",t.item().brandIcon),d(),k(" ",t.item().location," "))},dependencies:[N,dt,it,ot,rt,M,Oe,ze,Te,Ie],styles:[".v-product-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;box-sizing:border-box}.v-card-body[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;justify-content:space-between;padding:16px}.v-card-image-container[_ngcontent-%COMP%]{position:relative;width:100%;height:180px;background-color:var(--%NS%mat-sys-surface-container);overflow:hidden}.v-card-image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;transition:transform .3s ease}.v-card-image-container[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{transform:scale(1.03)}.v-card-image-container[_ngcontent-%COMP%]   .v-badge[_ngcontent-%COMP%]{position:absolute;top:12px;left:12px;background-color:var(--%NS%mat-sys-primary);color:var(--%NS%mat-sys-on-primary);font-size:.75rem;font-weight:600;padding:4px 8px;border-radius:4px;z-index:1}.v-card-image-container[_ngcontent-%COMP%]   .v-favorite-btn[_ngcontent-%COMP%]{position:absolute;top:8px;right:8px;background-color:#0006;color:#fff;z-index:1}.v-card-image-container[_ngcontent-%COMP%]   .v-favorite-btn[_ngcontent-%COMP%]:hover{background-color:#0009}.v-card-footer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-top:1px solid var(--%NS%mat-sys-outline-variant);margin:0;width:100%;box-sizing:border-box}.v-card-footer[_ngcontent-%COMP%]   .v-location-info[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.v-card-footer[_ngcontent-%COMP%]   .v-location-info[_ngcontent-%COMP%]   .v-brand-badge[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:32px;height:32px;background-color:var(--%NS%mat-sys-surface-container-high);border:1px solid var(--%NS%mat-sys-outline-variant);border-radius:50%}.v-card-footer[_ngcontent-%COMP%]   .v-location-info[_ngcontent-%COMP%]   .v-brand-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:18px;height:18px}.v-card-footer[_ngcontent-%COMP%]   .v-details-link[_ngcontent-%COMP%]{font-size:.85rem;font-weight:600;color:var(--%NS%mat-sys-primary);cursor:pointer;background:none;border:none;padding:0}.v-card-footer[_ngcontent-%COMP%]   .v-details-link[_ngcontent-%COMP%]:hover{text-decoration:underline}"]})};var xt=(a,c)=>c.id;function vt(a,c){if(a&1&&h(0,"v-catalog-card",9),a&2){let e=c.$implicit;l("item",e)}}function _t(a,c){a&1&&(i(0,"div",10),o(1,"Nenhum ve\xEDculo encontrado."),r())}function yt(a,c){if(a&1){let e=be();i(0,"div",11)(1,"button",12),u("click",function(){q(e);let n=B();return X(n.prevPage())}),o(2," Anterior "),r(),i(3,"span",13),o(4),r(),i(5,"button",12),u("click",function(){q(e);let n=B();return X(n.nextPage())}),o(6," Pr\xF3xima "),r()()}if(a&2){let e=B();d(),l("disabled",e.currentPage()===1),d(3),ve(" P\xE1gina ",e.currentPage()," de ",e.totalPages()," "),d(),l("disabled",e.currentPage()===e.totalPages())}}var x=class a{globalSearch=b(et);allItens=v([{id:1,title:"Polestar 2 Pilot Plus AWD 2020",subtitle:"54.900 km \xB7 Caxias do Sul, RS",price:139900,monthlyEst:2450,range:375,battery:78,acceleration:4.5,badge:"\xD3tima Oferta",brandIcon:"polestar",location:"Centro",imageUrl:"https://cdn.motor1.com/images/mgl/kpWNN/s1/2021-polestar-2-exterior.jpg"},{id:2,title:"Hyundai IONIQ 5 SEL AWD 2022",subtitle:"35.000 km \xB7 Caxias do Sul, RS",price:159900,monthlyEst:2790,range:412,battery:77,acceleration:5.1,badge:"\xD3tima Oferta",brandIcon:"hyundai",location:"Exposi\xE7\xE3o",imageUrl:"https://cdn.motor1.com/images/mgl/XxBp6/s1/2022-hyundai-ioniq-5.jpg"},{id:3,title:"Tesla Model 3 Long Range 2024",subtitle:"19.900 km \xB7 Caxias do Sul, RS",price:199900,monthlyEst:3490,range:548,battery:79,acceleration:4.2,badge:"Boa Oferta",brandIcon:"tesla",location:"Lourdes",imageUrl:"https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=800&q=80"},{id:4,title:"Porsche Taycan 4S Performance 2023",subtitle:"24.300 km \xB7 Caxias do Sul, RS",price:489900,monthlyEst:8550,range:365,battery:89,acceleration:3.8,badge:"Certificado",brandIcon:"porsche",location:"Rio Branco",imageUrl:"https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=800&q=80"},{id:5,title:"Audi Q4 e-tron Premium Plus 2023",subtitle:"29.700 km \xB7 Caxias do Sul, RS",price:249900,monthlyEst:4360,range:426,battery:82,acceleration:5.8,badge:"\xD3tima Oferta",brandIcon:"audi",location:"Exposi\xE7\xE3o",imageUrl:"https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80"},{id:6,title:"Ford Mustang Mach-E Premium 2022",subtitle:"47.300 km \xB7 Caxias do Sul, RS",price:189900,monthlyEst:3310,range:466,battery:88,acceleration:4.8,badge:"Boa Oferta",brandIcon:"ford",location:"Centro",imageUrl:"https://www.edmunds.com/assets/m/ford/mustang-mach-e/2021/oem/2021_ford_mustang-mach-e_4dr-hatchback_gt_fq_oem_1_600.jpg"},{id:7,title:"BYD Seal Excellence AWD 2024",subtitle:"6.600 km \xB7 Caxias do Sul, RS",price:229900,monthlyEst:4010,range:515,battery:82,acceleration:3.8,badge:"Novo na Loja",brandIcon:"byd",location:"Lourdes",imageUrl:"https://cdn.motor1.com/images/mgl/2NZ8Bg/s3/byd-seal.jpg"},{id:8,title:"Volvo XC40 Recharge Ultimate 2023",subtitle:"31.200 km \xB7 Caxias do Sul, RS",price:269900,monthlyEst:4710,range:418,battery:78,acceleration:4.8,badge:"Certificado",brandIcon:"volvo",location:"Rio Branco",imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgeB-hb_y8k51t39BXisIXVEfHIIZqYMKVb1BcgwKElI1O-JfdmIRIakA&s=10"},{id:9,title:"BMW i4 M50 Gran Coup\xE9 2023",subtitle:"15.400 km \xB7 Caxias do Sul, RS",price:419900,monthlyEst:7330,range:484,battery:83,acceleration:3.9,badge:"\xD3tima Oferta",brandIcon:"bmw",location:"Centro",imageUrl:"https://hips.hearstapps.com/hmg-prod/images/2022-bmw-i4-m50-101-1657136321.jpeg?crop=0.881xw:0.743xh;0.0651xw,0.198xh&resize=1200:*"},{id:10,title:"Chevrolet Blazer EV RS 2024",subtitle:"8.200 km \xB7 Caxias do Sul, RS",price:349900,monthlyEst:6110,range:520,battery:85,acceleration:5.3,badge:"Novo na Loja",brandIcon:"chevrolet",location:"Exposi\xE7\xE3o",imageUrl:"https://blog.usezapay.com.br/wp-content/uploads/2023/09/Blazer-chevrolet.jpg"}]);currentFilters=v({search:"",minPrice:null,maxPrice:null,brands:[],conditions:[]});currentPage=v(1);pageSize=v(6);constructor(){re(()=>{let c=this.globalSearch.globalSearchQuery();this.currentFilters.update(e=>w(P({},e),{search:c})),this.currentPage.set(1)})}filteredItens=R(()=>{let c=this.currentFilters();return this.allItens().filter(t=>{if(c.search){let n=c.search.toLowerCase(),m=t.title.toLowerCase().includes(n),I=t.location.toLowerCase().includes(n);if(!m&&!I)return!1}return!(c.minPrice!==null&&c.minPrice!==""&&t.price<Number(c.minPrice)||c.maxPrice!==null&&c.maxPrice!==""&&t.price>Number(c.maxPrice)||c.brands&&c.brands.length>0&&!c.brands.some(m=>t.title.toLowerCase().includes(m.toLowerCase()))||c.conditions&&c.conditions.length>0&&!c.conditions.includes(t.badge))})});totalPages=R(()=>{let c=this.filteredItens().length;return Math.ceil(c/this.pageSize())||1});paginatedItens=R(()=>{let c=this.filteredItens(),e=this.currentPage(),t=this.pageSize(),n=(e-1)*t;return c.slice(n,n+t)});onFilterChanged(c){this.currentFilters.set(c),this.currentPage.set(1),c.search||this.globalSearch.setQuery("")}nextPage(){this.currentPage()<this.totalPages()&&this.currentPage.update(c=>c+1)}prevPage(){this.currentPage()>1&&this.currentPage.update(c=>c-1)}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=p({type:a,selectors:[["v-catalog-page"]],decls:14,vars:3,consts:[[1,"v-catalog-page-layout"],[1,"v-filters-sidebar"],["title","Filtros","icon","filter_alt","position","left",3,"collapseToButton"],[3,"filterChanged"],[1,"v-main-content-wrapper"],[1,"v-content-header"],[2,"padding","15px 0"],[1,"v-cards-content-area"],[1,"v-cards-grid"],[3,"item"],[1,"no-results-msg"],[1,"v-pagination-container"],["mat-stroked-button","",3,"click","disabled"],[1,"page-indicator"]],template:function(e,t){e&1&&(i(0,"div",0)(1,"aside",1)(2,"v-aside-panel",2)(3,"v-filter",3),u("filterChanged",function(m){return t.onFilterChanged(m)}),r()()(),i(4,"div",4)(5,"div",5)(6,"h2",6),o(7,"\u{1F697}\u{1F4A8} Ve\xEDculos el\xE9tricos, inspecionados e prontos"),r()(),i(8,"main",7)(9,"div",8),D(10,vt,1,1,"v-catalog-card",9,xt,!1,_t,2,0,"div",10),r(),se(13,yt,7,4,"div",11),r()()()),e&2&&(d(2),l("collapseToButton",!0),d(8),F(t.paginatedItens()),d(3),he(t.totalPages()>1?13:-1))},dependencies:[N,M,L,Ae,G,U],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;flex:1;width:100%;height:100%;min-height:0;overflow:hidden}.v-catalog-page-layout[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:100%;height:100%;gap:24px;box-sizing:border-box;align-items:stretch;overflow:hidden}.v-filters-sidebar[_ngcontent-%COMP%]{flex-shrink:0;height:100%;display:flex;flex-direction:column}.v-filters-sidebar[_ngcontent-%COMP%]     v-aside-panel, .v-filters-sidebar[_ngcontent-%COMP%]     .v-aside-container{height:100%;display:flex;flex-direction:column}.v-main-content-wrapper[_ngcontent-%COMP%]{flex:1;min-width:0;height:100%;display:flex;flex-direction:column;overflow:hidden;padding-right:4px;box-sizing:border-box}.v-content-header[_ngcontent-%COMP%]{padding-bottom:16px;flex-shrink:0}.v-content-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:1.25rem;font-weight:600}.v-cards-content-area[_ngcontent-%COMP%]{flex:1;min-height:0;overflow-y:auto;box-sizing:border-box}.v-pagination-container[_ngcontent-%COMP%]{float:right}.v-cards-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px;width:100%;box-sizing:border-box;padding-bottom:24px;align-items:stretch}@media(max-width:1200px){.v-cards-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:768px){.v-cards-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}"]})};var On=[{path:"",component:x,data:{breadcrumb:"Cat\xE1logo"}},{path:"catalogo/veiculos",component:x,data:{breadcrumb:"Ve\xEDculos"}},{path:"catalogo/marcas",component:x,data:{breadcrumb:"Marcas"}},{path:"sobre",component:x,data:{breadcrumb:"Sobre"}},{path:"contato",component:x,data:{breadcrumb:"Contato"}}];export{On as V_CATALOG_ROUTES};
