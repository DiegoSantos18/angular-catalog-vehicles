import{$a as xe,Ab as ee,Ac as Be,B as me,Bc as Re,Cb as B,Cc as je,Dc as Ge,Ea as p,Ec as qe,Fa as L,Fb as Ie,Fc as Ue,Ga as W,Gc as Xe,Hb as F,Hc as He,Ib as R,Ic as $e,Jc as Qe,L as le,Lb as Pe,Lc as Ze,Ma as K,Mb as _,Mc as Je,N as z,Na as C,Nb as Fe,Nc as We,Oa as S,Oc as Ke,P as A,Qa as ke,Qc as Ye,R as b,Ra as N,Rb as De,Rc as et,Sa as w,Sb as D,Ta as l,Ua as c,Uc as tt,V as Q,Va as o,Vc as nt,W as Z,Wa as s,Wc as at,X as se,Xc as it,Y as he,Yc as ct,Zc as ot,a as oe,ab as ve,b as re,ba as J,bb as u,ca as be,db as M,dc as Ee,eb as I,fa as k,fb as P,ha as pe,hb as _e,ia as ue,ib as ye,jb as Ce,kc as Oe,la as ge,mb as Se,na as fe,nb as x,ob as Me,oc as Te,pb as m,qb as g,qc as Ve,ra as r,rb as v,rc as ze,sb as Ne,sc as Ae,uc as j,va as T,wa as V,wb as we,wc as G,xc as E,y as de,zb as Y,zc as Le}from"./chunk-ST3GI2U4.js";var gt=["*"];var ft=new A("MAT_CARD_CONFIG"),rt=(()=>{class n{appearance;constructor(){let e=b(ft,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=p({type:n,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(t,a){t&2&&x("mat-mdc-card-outlined",a.appearance==="outlined")("mdc-card--outlined",a.appearance==="outlined")("mat-mdc-card-filled",a.appearance==="filled")("mdc-card--filled",a.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:gt,decls:1,vars:0,template:function(t,a){t&1&&(I(),P(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2})}return n})();var dt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=W({type:n,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return n})();var mt=(()=>{class n{align="start";static \u0275fac=function(t){return new(t||n)};static \u0275dir=W({type:n,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(t,a){t&2&&x("mat-mdc-card-actions-align-end",a.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return n})();var lt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=L({type:n});static \u0275inj=z({imports:[j]})}return n})();var q=class n{item=R.required();viewDetails=F();onViewDetails(){this.viewDetails.emit(this.item())}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["v-catalog-card"]],inputs:{item:[1,"item"]},outputs:{viewDetails:"viewDetails"},decls:40,vars:20,consts:[[1,"v-product-card"],[1,"v-card-image-container"],[3,"src","alt"],[1,"v-badge"],["mat-icon-button","","title","Favoritar",1,"v-favorite-btn"],[1,"v-card-body"],[1,"v-subtext"],[1,"v-price-row"],[1,"v-price"],[1,"v-est-monthly"],[1,"v-specs-row"],[1,"v-card-footer"],[1,"v-location-info"],[1,"v-brand-badge"],[3,"svgIcon"],[1,"v-details-link",3,"click"]],template:function(e,t){e&1&&(c(0,"mat-card",0)(1,"div",1),s(2,"img",2),c(3,"span",3),m(4),o(),c(5,"button",4)(6,"mat-icon"),m(7,"favorite_border"),o()()(),c(8,"mat-card-content",5)(9,"h3"),m(10),o(),c(11,"p",6),m(12),o(),c(13,"div",7)(14,"span",8),m(15),Y(16,"currency"),o(),c(17,"span",9),m(18),Y(19,"currency"),o()(),c(20,"div",10)(21,"span"),m(22),c(23,"small"),m(24,"Autonomia "),o()(),c(25,"span"),m(26),c(27,"small"),m(28," Bateria "),o()(),c(29,"span"),m(30),c(31,"small"),m(32,"0-100 km/h"),o()()()(),c(33,"mat-card-actions",11)(34,"span",12)(35,"div",13),s(36,"mat-icon",14),o(),m(37),o(),c(38,"a",15),u("click",function(){return t.onViewDetails()}),m(39,"Ver detalhes"),o()()()),e&2&&(r(2),l("src",t.item().imageUrl,fe)("alt",t.item().title),r(2),g(t.item().badge),r(6),g(t.item().title),r(2),g(t.item().subtitle),r(3),g(ee(16,12,t.item().price,"BRL","symbol")),r(3),v(" Est. ",ee(19,16,t.item().monthlyEst,"BRL","symbol")," / m\xEAs"),r(4),v("",t.item().range," km "),r(4),v("",t.item().battery," kW/h "),r(4),v("",t.item().acceleration," s "),r(6),l("svgIcon",t.item().brandIcon),r(),v(" ",t.item().location," "))},dependencies:[D,lt,rt,mt,dt,E,Ae,Be,Le,De],styles:[".v-product-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;box-sizing:border-box}.v-card-body[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;justify-content:space-between;padding:16px}.v-card-image-container[_ngcontent-%COMP%]{position:relative;width:100%;height:180px;background-color:var(--%NS%mat-sys-surface-container);overflow:hidden}.v-card-image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;transition:transform .3s ease}.v-card-image-container[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{transform:scale(1.03)}.v-card-image-container[_ngcontent-%COMP%]   .v-badge[_ngcontent-%COMP%]{position:absolute;top:12px;left:12px;background-color:var(--%NS%mat-sys-primary);color:var(--%NS%mat-sys-on-primary);font-size:.75rem;font-weight:600;padding:4px 8px;border-radius:4px;z-index:1}.v-card-image-container[_ngcontent-%COMP%]   .v-favorite-btn[_ngcontent-%COMP%]{position:absolute;top:8px;right:8px;background-color:#0006;color:#fff;z-index:1}.v-card-image-container[_ngcontent-%COMP%]   .v-favorite-btn[_ngcontent-%COMP%]:hover{background-color:#0009}.v-card-footer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-top:1px solid var(--%NS%mat-sys-outline-variant);margin:0;width:100%;box-sizing:border-box}.v-card-footer[_ngcontent-%COMP%]   .v-location-info[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.v-card-footer[_ngcontent-%COMP%]   .v-location-info[_ngcontent-%COMP%]   .v-brand-badge[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:32px;height:32px;background-color:var(--%NS%mat-sys-surface-container-high);border:1px solid var(--%NS%mat-sys-outline-variant);border-radius:50%}.v-card-footer[_ngcontent-%COMP%]   .v-location-info[_ngcontent-%COMP%]   .v-brand-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:18px;height:18px}.v-card-footer[_ngcontent-%COMP%]   .v-details-link[_ngcontent-%COMP%]{font-size:.85rem;font-weight:600;color:var(--%NS%mat-sys-primary);cursor:pointer;background:none;border:none;padding:0}.v-card-footer[_ngcontent-%COMP%]   .v-details-link[_ngcontent-%COMP%]:hover{text-decoration:underline}"]})};var xt=["*"],ht=(()=>{class n{labelPosition="after";static \u0275fac=function(t){return new(t||n)};static \u0275cmp=p({type:n,selectors:[["","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(t,a){t&2&&x("mdc-form-field--align-end",a.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},ngContentSelectors:xt,decls:1,vars:0,template:function(t,a){t&1&&(I(),P(0))},styles:[`.mat-internal-form-field {
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
`],encapsulation:2})}return n})();var vt=["input"],_t=["*"],ne={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},yt=new A("mat-checkbox-default-options",{providedIn:"root",factory:()=>ne}),h=(function(n){return n[n.Init=0]="Init",n[n.Checked=1]="Checked",n[n.Unchecked=2]="Unchecked",n[n.Indeterminate=3]="Indeterminate",n})(h||{}),ae=class{source;checked},ie=(()=>{class n{_elementRef=b(ge);_changeDetectorRef=b(Pe);_ngZone=b(be);_animationsDisabled=Te();_options=b(yt,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let t=new ae;return t.source=this,t.checked=e,t}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new J;indeterminateChange=new J;value;disableRipple=!1;_inputElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=h.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){b(Ee).load(ze);let e=b(new Ie("tabindex"),{optional:!0});this._options=this._options||ne,this.color=this._options.color||ne.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=b(Oe).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let t=e!=this._indeterminate();this._indeterminate.set(e),t&&(e?this._transitionCheckState(h.Indeterminate):this._transitionCheckState(this.checked?h.Checked:h.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=k(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let t=this._currentCheckState,a=this._getAnimationTargetElement();if(!(t===e||!a)&&(this._currentAnimationClass&&a.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){a.classList.add(this._currentAnimationClass);let d=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{a.classList.remove(d)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?h.Checked:h.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,t){if(this._animationsDisabled)return"";switch(e){case h.Init:if(t===h.Checked)return this._animationClasses.uncheckedToChecked;if(t==h.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case h.Unchecked:return t===h.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case h.Checked:return t===h.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case h.Indeterminate:return t===h.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let t=this._inputElement;t&&(t.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_preventBubblingFromLabel(e){e.target&&this._inputElement&&e.target!==this._inputElement.nativeElement&&e.stopPropagation()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=p({type:n,selectors:[["mat-checkbox"]],viewQuery:function(t,a){if(t&1&&_e(vt,5),t&2){let d;ye(d=Ce())&&(a._inputElement=d.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(t,a){t&2&&(ve("id",a.id),K("tabindex",null)("aria-label",null)("aria-labelledby",null),Me(a.color?"mat-"+a.color:"mat-accent"),x("_mat-animation-noopable",a._animationsDisabled)("mdc-checkbox--disabled",a.disabled)("mat-mdc-checkbox-disabled",a.disabled)("mat-mdc-checkbox-checked",a.checked)("mat-mdc-checkbox-disabled-interactive",a.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",_],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",_],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",_],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:Fe(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",_],checked:[2,"checked","checked",_],disabled:[2,"disabled","disabled",_],indeterminate:[2,"indeterminate","indeterminate",_]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[we([{provide:qe,useExisting:le(()=>n),multi:!0},{provide:Xe,useExisting:n,multi:!0}]),ue],ngContentSelectors:_t,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition","for"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mat-internal-form-field-label","mdc-label"]],template:function(t,a){if(t&1&&(I(),c(0,"label",3),u("click",function(f){return a._preventBubblingFromLabel(f)}),c(1,"span",4,0),s(3,"span",5),c(4,"input",6,1),u("blur",function(){return a._onBlur()})("click",function(){return a._onInputClick()})("change",function(f){return a._onInteractionEvent(f)}),o(),s(6,"span",7),c(7,"span",8),se(),c(8,"svg",9),s(9,"path",10),o(),he(),s(10,"span",11),o(),s(11,"span",12),o(),c(12,"span",13,2),P(14),o()()),t&2){let d=Se(2);l("labelPosition",a.labelPosition)("for",a.inputId),r(4),x("mdc-checkbox--selected",a.checked),l("checked",a.checked)("indeterminate",a.indeterminate)("disabled",a.disabled&&!a.disabledInteractive)("id",a.inputId)("required",a.required)("tabIndex",a.disabled&&!a.disabledInteractive?-1:a.tabIndex),K("aria-label",a.ariaLabel||null)("aria-labelledby",a.ariaLabelledby)("aria-describedby",a.ariaDescribedby)("aria-checked",a.indeterminate?"mixed":null)("aria-controls",a.ariaControls)("aria-disabled",a.disabled&&a.disabledInteractive?!0:null)("aria-expanded",a.ariaExpanded)("aria-owns",a.ariaOwns)("name",a.name)("value",a.value),r(7),l("matRippleTrigger",d)("matRippleDisabled",a.disableRipple||a.disabled)("matRippleCentered",!0)}},dependencies:[Ve,ht],styles:[`.mdc-checkbox {
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
`],encapsulation:2})}return n})(),bt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=L({type:n});static \u0275inj=z({imports:[ie,j]})}return n})();var pt=(n,i)=>i.key;function St(n,i){if(n&1&&(c(0,"div",1)(1,"mat-form-field",6)(2,"mat-label"),m(3),o(),s(4,"input",7),T(),o()()),n&2){let e=M();r(3),g(e.schema().searchLabel||"Buscar..."),r(),V()}}function Mt(n,i){if(n&1&&(c(0,"div",8)(1,"mat-form-field",9)(2,"mat-label"),m(3),o(),s(4,"input",10),T(),o(),c(5,"mat-form-field",9)(6,"mat-label"),m(7),o(),s(8,"input",11),T(),o()()),n&2){let e=i.$implicit;l("formGroupName",e.key),r(3),g(e.labelMin),r(),V(),r(3),g(e.labelMax),r(),V()}}function Nt(n,i){n&1&&(c(0,"div",2),N(1,Mt,9,3,"div",8,pt),o()),n&2&&(r(),w(i))}function wt(n,i){if(n&1&&(c(0,"mat-checkbox",15),m(1),o(),T()),n&2){let e=i.$implicit;l("formControlName",e),V(),r(),v(" ",e," ")}}function It(n,i){if(n&1&&(c(0,"div",12)(1,"h3",13),m(2),o(),c(3,"div",14),N(4,wt,2,2,"mat-checkbox",15,ke),o()()),n&2){let e=i.$implicit;r(2),g(e.title),r(),l("formGroupName",e.key),r(),w(e.options)}}function Pt(n,i){n&1&&(c(0,"div",3),N(1,It,6,2,"div",12,pt),o()),n&2&&(r(),w(i))}var U=class n{fb=b(Ke);schema=R.required();filterChanged=F();filterForm;ngOnInit(){this.buildForm(),this.filterForm.valueChanges.pipe(de(300),me((i,e)=>JSON.stringify(i)===JSON.stringify(e))).subscribe(i=>this.emitCleanFilters(i))}buildForm(){let i=this.schema(),e={search:[""]};if(i.ranges){let t=this.fb.group({});i.ranges.forEach(a=>t.addControl(a.key,this.fb.group({min:[null],max:[null]}))),e.ranges=t}if(i.multiSelects){let t=this.fb.group({});i.multiSelects.forEach(a=>{let d=this.fb.group({});a.options.forEach(f=>d.addControl(f,this.fb.control(!1))),t.addControl(a.key,d)}),e.multiSelects=t}this.filterForm=this.fb.group(e)}emitCleanFilters(i){let e=this.schema(),t={search:i.search||"",ranges:i.ranges||{},multiSelects:{}};e.multiSelects&&i.multiSelects&&e.multiSelects.forEach(a=>{t.multiSelects[a.key]=Object.keys(i.multiSelects[a.key]||{}).filter(d=>i.multiSelects[a.key][d])}),this.filterChanged.emit(t)}clearFilters(){this.filterForm.reset()}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["v-filter"]],inputs:{schema:[1,"schema"]},outputs:{filterChanged:"filterChanged"},decls:7,vars:4,consts:[[1,"v-filter-container",3,"formGroup"],[1,"v-filter-section","search-section"],["formGroupName","ranges",1,"v-filter-section","ranges-section"],["formGroupName","multiSelects",1,"v-filter-section","multis-section"],[1,"v-filter-actions"],["mat-stroked-button","","color","warn","type","button",1,"v-full-width",3,"click"],["appearance","outline",1,"v-full-width"],["matInput","","formControlName","search","placeholder","Digite um termo para pesquisar..."],[1,"v-range-row",3,"formGroupName"],["appearance","outline"],["matInput","","type","number","formControlName","min","placeholder","M\xEDn"],["matInput","","type","number","formControlName","max","placeholder","M\xE1x"],[1,"v-filter-group"],[1,"v-group-title"],[1,"v-checkbox-grid",3,"formGroupName"],["color","primary",3,"formControlName"]],template:function(e,t){if(e&1&&(c(0,"div",0),C(1,St,5,1,"div",1),C(2,Nt,3,0,"div",2),C(3,Pt,3,0,"div",3),c(4,"div",4)(5,"button",5),u("click",function(){return t.clearFilters()}),m(6," Limpar Filtros "),o()()()),e&2){let a,d;l("formGroup",t.filterForm),r(),S(t.schema().showSearch!==!1?1:-1),r(),S((a=t.schema().ranges)?2:-1,a),r(),S((d=t.schema().multiSelects)?3:-1,d)}},dependencies:[D,Ye,Ue,Ze,He,$e,Qe,We,Je,nt,tt,et,it,at,bt,ie,E,G],styles:[".v-filter-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px;padding:16px;background-color:#fff;border-radius:8px;border:1px solid #e0e0e0;box-sizing:border-box;width:100%}.v-filter-section[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.v-full-width[_ngcontent-%COMP%]{width:100%}.v-range-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:12px;width:100%}.v-range-row[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}.v-filter-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.v-filter-group[_ngcontent-%COMP%]   .v-group-title[_ngcontent-%COMP%]{margin:0;font-size:14px;font-weight:600;color:#424242;text-transform:uppercase;letter-spacing:.5px;border-bottom:1px solid #eeeeee;padding-bottom:6px}.v-checkbox-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:8px}.v-checkbox-grid[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{font-size:14px;color:#616161}.v-filter-actions[_ngcontent-%COMP%]{margin-top:8px;width:100%}.v-filter-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:44px;font-weight:500}"]})};var X=class n{catalogFilterChanged=F();catalogSchema={showSearch:!0,searchLabel:"Buscar ve\xEDculo por modelo ou marca...",ranges:[{key:"price",labelMin:"Pre\xE7o M\xEDnimo (R$)",labelMax:"Pre\xE7o M\xE1ximo (R$)"},{key:"year",labelMin:"Ano M\xEDnimo",labelMax:"Ano M\xE1ximo"}],multiSelects:[{key:"brands",title:"Fabricantes",options:["Audi","BMW","BYD","Chevrolet","Ford","Hyundai","Polestar","Porsche","Tesla","Volvo"]},{key:"conditions",title:"Estado / Classifica\xE7\xE3o",options:["Boa Oferta","Certificado","Novo na Loja","\xD3tima Oferta"]}]};onFilterChanged(i){this.catalogFilterChanged.emit(i)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["v-catalog-filter"]],outputs:{catalogFilterChanged:"catalogFilterChanged"},decls:1,vars:1,consts:[[3,"filterChanged","schema"]],template:function(e,t){e&1&&(c(0,"v-filter",0),u("filterChanged",function(d){return t.onFilterChanged(d)}),o()),e&2&&l("schema",t.catalogSchema)},dependencies:[U],styles:["[_nghost-%COMP%]{display:block;width:100%;max-width:360px;box-sizing:border-box}.v-catalog-filter-title[_ngcontent-%COMP%]{margin-bottom:16px;font-size:18px;font-weight:700;color:#212121}"]})};var Ft=(n,i)=>i.id;function Dt(n,i){n&1&&(c(0,"div",8),s(1,"mat-spinner",9),c(2,"p"),m(3,"Buscando os melhores ve\xEDculos el\xE9tricos..."),o()())}function Et(n,i){if(n&1&&s(0,"v-catalog-card",11),n&2){let e=i.$implicit;l("item",e)}}function Ot(n,i){n&1&&(c(0,"div",12),m(1,"Nenhum ve\xEDculo encontrado."),o())}function Tt(n,i){if(n&1){let e=xe();c(0,"div",13)(1,"button",14),u("click",function(){Q(e);let a=M(2);return Z(a.prevPage())}),m(2," Anterior "),o(),c(3,"span",15),m(4),o(),c(5,"button",14),u("click",function(){Q(e);let a=M(2);return Z(a.nextPage())}),m(6," Pr\xF3xima "),o()()}if(n&2){let e=M(2);r(),l("disabled",e.currentPage()===1),r(3),Ne(" P\xE1gina ",e.currentPage()," de ",e.totalPages()," "),r(),l("disabled",e.currentPage()===e.totalPages())}}function Vt(n,i){if(n&1&&(c(0,"div",10),N(1,Et,1,1,"v-catalog-card",11,Ft,!1,Ot,2,0,"div",12),o(),C(4,Tt,7,4,"div",13)),n&2){let e=M();r(),w(e.paginatedItens()),r(3),S(e.totalPages()>1?4:-1)}}var y=class n{vCatalogApi=b(Ge);globalSearch=b(je);allItens=k([]);isLoading=k(!0);currentFilters=k({search:"",ranges:{price:{min:null,max:null},year:{min:null,max:null}},multiSelects:{brands:[],conditions:[]}});currentPage=k(1);pageSize=k(6);constructor(){pe(()=>{let i=this.globalSearch.globalSearchQuery();this.currentFilters.update(e=>re(oe({},e),{search:i})),this.currentPage.set(1)})}ngOnInit(){this.loadCatalogData()}loadCatalogData(){this.isLoading.set(!0),this.vCatalogApi.getVCatalog().subscribe({next:i=>{this.allItens.set(i)},error:i=>{console.error("Erro ao buscar o cat\xE1logo:",i)},complete:()=>{this.isLoading.set(!1)}})}filteredItens=B(()=>{let i=this.currentFilters();return this.allItens().filter(t=>{if(i.search){let H=i.search.toLowerCase(),$=t.title?.toLowerCase().includes(H),ut=t.location?.toLowerCase().includes(H);if(!$&&!ut)return!1}let a=i.ranges?.price;if(a&&(a.min!==null&&a.min!==void 0&&t.price<a.min||a.max!==null&&a.max!==void 0&&t.price>a.max))return!1;let d=i.ranges?.year;if(d&&(d.min!==null&&d.min!==void 0&&t.range<d.min||d.max!==null&&d.max!==void 0&&t.range>d.max))return!1;let f=i.multiSelects?.brands||[];if(f.length>0&&!f.some($=>t.title?.toLowerCase().includes($.toLowerCase())))return!1;let ce=i.multiSelects?.conditions||[];return!(ce.length>0&&!ce.includes(t.badge))})});totalPages=B(()=>{let i=this.filteredItens().length;return Math.ceil(i/this.pageSize())||1});paginatedItens=B(()=>{let i=this.filteredItens(),e=this.currentPage(),t=this.pageSize(),a=(e-1)*t;return i.slice(a,a+t)});onFilterChanged(i){this.currentFilters.set(i),this.currentPage.set(1),i.search||this.globalSearch.setQuery("")}nextPage(){this.currentPage()<this.totalPages()&&this.currentPage.update(i=>i+1)}prevPage(){this.currentPage()>1&&this.currentPage.update(i=>i-1)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["v-catalog-page"]],decls:11,vars:2,consts:[[1,"v-catalog-page-layout"],[1,"v-filters-sidebar"],["title","Filtros","icon","filter_alt","position","left",3,"collapseToButton"],[3,"catalogFilterChanged"],[1,"v-main-content-wrapper"],[1,"v-content-header"],[2,"padding","15px 0"],[1,"v-cards-content-area"],[1,"v-loading-container"],["diameter","48","color","primary"],[1,"v-cards-grid"],[3,"item"],[1,"no-results-msg"],[1,"v-pagination-container"],["mat-stroked-button","",3,"click","disabled"],[1,"page-indicator"]],template:function(e,t){e&1&&(c(0,"div",0)(1,"aside",1)(2,"v-aside-panel",2)(3,"v-catalog-filter",3),u("catalogFilterChanged",function(d){return t.onFilterChanged(d)}),o()()(),c(4,"div",4)(5,"div",5)(6,"h2",6),m(7,"\u{1F697}\u{1F4A8} Ve\xEDculos el\xE9tricos, inspecionados e prontos"),o()(),c(8,"main",7),C(9,Dt,4,0,"div",8)(10,Vt,5,2),o()()()),e&2&&(r(2),l("collapseToButton",!0),r(7),S(t.isLoading()?9:10))},dependencies:[D,E,G,ot,ct,Re,X,q],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;flex:1;width:100%;height:100%;min-height:0;overflow:hidden}.v-catalog-page-layout[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:100%;height:100%;gap:24px;box-sizing:border-box;align-items:stretch;overflow:hidden}.v-filters-sidebar[_ngcontent-%COMP%]{flex-shrink:0;height:100%;display:flex;flex-direction:column}.v-filters-sidebar[_ngcontent-%COMP%]     v-aside-panel, .v-filters-sidebar[_ngcontent-%COMP%]     .v-aside-container{height:100%;display:flex;flex-direction:column}.v-main-content-wrapper[_ngcontent-%COMP%]{flex:1;min-width:0;height:100%;display:flex;flex-direction:column;overflow:hidden;padding-right:4px;box-sizing:border-box}.v-content-header[_ngcontent-%COMP%]{padding-bottom:16px;flex-shrink:0}.v-content-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:1.25rem;font-weight:600}.v-cards-content-area[_ngcontent-%COMP%]{flex:1;min-height:0;overflow-y:auto;box-sizing:border-box;display:flex;flex-direction:column}.v-cards-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px;width:100%;box-sizing:border-box;padding-bottom:24px;align-items:stretch}@media(max-width:1200px){.v-cards-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:768px){.v-cards-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}.v-pagination-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end;gap:16px;margin-top:auto;padding:16px 0 24px;box-sizing:border-box}.v-pagination-container[_ngcontent-%COMP%]   .page-indicator[_ngcontent-%COMP%]{font-size:.875rem;color:#616161;font-weight:500}.v-loading-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;flex:1;width:100%;min-height:250px;color:#757575;font-size:.9rem;font-weight:500}.no-results-msg[_ngcontent-%COMP%]{padding:40px 0;text-align:center;color:#9e9e9e;font-size:1rem;width:100%}"]})};var Jn=[{path:"",component:y,data:{breadcrumb:"Cat\xE1logo"}},{path:"catalogo/veiculos",component:y,data:{breadcrumb:"Ve\xEDculos"}},{path:"catalogo/marcas",component:y,data:{breadcrumb:"Marcas"}},{path:"sobre",component:y,data:{breadcrumb:"Sobre"}},{path:"contato",component:y,data:{breadcrumb:"Contato"}}];export{Jn as V_CATALOG_ROUTES};
