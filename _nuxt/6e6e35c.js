(window.webpackJsonp=window.webpackJsonp||[]).push([[10,9,11,12,15,16],{334:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));r(145);var n,o=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.reduce((function(e,t){return function(r){var n=e(r);return!0===n?t(r):n}}),(function(){return!0}))},l=function(e){return Boolean(e)||"入力してください。"},c=function(e){return/^[a-z0-9]*$/.test(e)||"半角の小文字アルファベット・数字のみで入力してください。"},d=function(e){return function(t){return t.length<=e||"".concat(e,"文字以内で入力してください。")}},v=o(l,c,d(32)),f=o(l,(n=8,function(e){return e.length>=n||"".concat(n,"文字以上で入力してください。")}),d(1024)),h=Object.freeze({required:l,lowerAlphaNumerical:c,maxLength:d,isUserName:v,isPassword:f})},335:function(e,t,r){"use strict";r.r(t);var n=r(0).a.extend({props:{message:{type:String,default:null}}}),o=r(30),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"text-caption text-right font-weight-light red--text"},[e._v("\n  "+e._s(e.message)+"\n")])}),[],!1,null,null,null);t.default=component.exports},337:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=function(e){var t,r,n;if(console.error(e),function(e){return Boolean(e.isAxiosError)}(e)){var o=null===(t=e.response)||void 0===t?void 0:t.status;if(400===o){var l=null===(n=null===(r=e.response)||void 0===r?void 0:r.data)||void 0===n?void 0:n.errorMessage;return"string"==typeof l?l:"入力が間違っています。"}return 403===o?"権限がありません。":500===o?"サーバーエラーが発生。":"通信エラーが発生。"}return"予期せぬエラーが発生。"}},338:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=function(e){return null!=e&&"function"==typeof e.validate&&"function"==typeof e.reset&&"function"==typeof e.resetValidation}},341:function(e,t,r){var content=r(342);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("7132a15d",content,!0,{sourceMap:!1})},342:function(e,t,r){var n=r(15)(!1);n.push([e.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),e.exports=n},343:function(e,t,r){var content=r(344);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("5c8fbe94",content,!0,{sourceMap:!1})},344:function(e,t,r){var n=r(15)(!1);n.push([e.i,".v-textarea textarea{align-self:stretch;flex:1 1 auto;line-height:1.75rem;max-width:100%;min-height:32px;outline:none;padding:0;width:100%}.v-textarea .v-text-field__prefix,.v-textarea .v-text-field__suffix{padding-top:2px;align-self:start}.v-textarea.v-text-field--box .v-text-field__prefix,.v-textarea.v-text-field--box textarea,.v-textarea.v-text-field--enclosed .v-text-field__prefix,.v-textarea.v-text-field--enclosed textarea{margin-top:24px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) textarea{margin-top:10px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-label{top:18px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense textarea{margin-top:6px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-outer{align-self:flex-start;margin-top:8px}.v-textarea.v-text-field--solo{align-items:flex-start}.v-textarea.v-text-field--solo .v-input__append-inner,.v-textarea.v-text-field--solo .v-input__append-outer,.v-textarea.v-text-field--solo .v-input__prepend-inner,.v-textarea.v-text-field--solo .v-input__prepend-outer{align-self:flex-start;margin-top:12px}.v-application--is-ltr .v-textarea.v-text-field--solo .v-input__append-inner{padding-left:12px}.v-application--is-rtl .v-textarea.v-text-field--solo .v-input__append-inner{padding-right:12px}.v-textarea--auto-grow textarea{overflow:hidden}.v-textarea--no-resize textarea{resize:none}.v-textarea.v-text-field--enclosed .v-text-field__slot{align-self:stretch}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-right:-12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-left:-12px}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-right:12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-left:12px}",""]),e.exports=n},346:function(e,t,r){"use strict";r(13),r(7),r(11);var n=r(2),o=(r(77),r(10),r(6),r(4),r(146),r(42),r(43),r(8)),l=r(92),c=r(144);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var e=this,t=function(input){return input.$watch("hasError",(function(t){e.$set(e.errorBag,input._uid,t)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(e.errorBag.hasOwnProperty(input._uid)||(r.valid=t(input)))})):r.valid=t(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var e=this.inputs.find((function(i){return i._uid===input._uid}));if(e){var t=this.watchers.find((function(i){return i._uid===e._uid}));t&&(t.valid(),t.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==e._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:v({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},347:function(e,t,r){var content=r(351);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("22ef6e20",content,!0,{sourceMap:!1})},348:function(e,t,r){"use strict";r.r(t);var n=r(0).a.extend({name:"DeleteUser",props:{value:{type:Boolean,required:!0,default:!1},what:{type:String,required:!0,default:""},error:{type:String,required:!0,default:""},loading:{type:Boolean,default:null},challengeText:{type:String,default:null}},data:function(){return{confirm:""}},computed:{fullChallengeText:function(){return this.challengeText?"delete ".concat(this.challengeText):"delete"},disabled:function(){return this.fullChallengeText!==this.confirm}},watch:{value:function(){this.confirm=""}},methods:{submit:function(){this.$emit("confirm")}}}),o=r(30),l=r(39),c=r.n(l),d=r(135),v=r(367),f=r(333),h=r(461),x=r(349),m=r(346),_=r(326),y=r(355),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-dialog",{attrs:{value:e.value,width:"500"},on:{input:function(t){return e.$emit("input",t)}}},[r("v-card",{attrs:{loading:e.loading,disabled:e.loading}},[r("v-form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[r("v-card-title",[e._v("本当に "+e._s(e.what)+" を削除しますか？")]),e._v(" "),r("v-divider"),e._v(" "),r("v-card-text",[e._v("\n        削除する場合は、"),r("i",[e._v(e._s(e.fullChallengeText))]),e._v(" と入力してください。\n        "),r("form-error",{attrs:{message:e.error}}),e._v(" "),r("v-text-field",{attrs:{autocomplete:"off"},model:{value:e.confirm,callback:function(t){e.confirm=t},expression:"confirm"}})],1),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{on:{click:function(t){e.$emit("input",!1),e.$emit("cancel")}}},[e._v("キャンセル")]),e._v(" "),r("v-btn",{attrs:{color:"error",type:"submit",disabled:e.disabled}},[e._v("削除する")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{FormError:r(335).default}),c()(component,{VBtn:d.a,VCard:v.a,VCardActions:f.a,VCardText:f.b,VCardTitle:f.c,VDialog:h.a,VDivider:x.a,VForm:m.a,VSpacer:_.a,VTextField:y.a})},349:function(e,t,r){"use strict";r(13),r(10),r(7),r(6),r(4),r(11);var n=r(2),o=(r(341),r(22));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=o.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(e){var t;return this.$attrs.role&&"separator"!==this.$attrs.role||(t=this.vertical?"vertical":"horizontal"),e("hr",{class:c({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:c({role:"separator","aria-orientation":t},this.$attrs),on:this.$listeners})}})},350:function(e,t,r){"use strict";r(347)},351:function(e,t,r){var n=r(15)(!1);n.push([e.i,".text{white-space:pre-wrap}",""]),e.exports=n},352:function(e,t,r){var content=r(353);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("197fcea4",content,!0,{sourceMap:!1})},353:function(e,t,r){var n=r(15)(!1);n.push([e.i,'.v-chip:not(.v-chip--outlined).accent,.v-chip:not(.v-chip--outlined).error,.v-chip:not(.v-chip--outlined).info,.v-chip:not(.v-chip--outlined).primary,.v-chip:not(.v-chip--outlined).secondary,.v-chip:not(.v-chip--outlined).success,.v-chip:not(.v-chip--outlined).warning{color:#fff}.theme--light.v-chip{border-color:rgba(0,0,0,.12);color:rgba(0,0,0,.87)}.theme--light.v-chip:not(.v-chip--active){background:#e0e0e0}.theme--light.v-chip:hover:before{opacity:.04}.theme--light.v-chip--active:before,.theme--light.v-chip--active:hover:before,.theme--light.v-chip:focus:before{opacity:.12}.theme--light.v-chip--active:focus:before{opacity:.16}.theme--dark.v-chip{border-color:hsla(0,0%,100%,.12);color:#fff}.theme--dark.v-chip:not(.v-chip--active){background:#555}.theme--dark.v-chip:hover:before{opacity:.08}.theme--dark.v-chip--active:before,.theme--dark.v-chip--active:hover:before,.theme--dark.v-chip:focus:before{opacity:.24}.theme--dark.v-chip--active:focus:before{opacity:.32}.v-chip{align-items:center;cursor:default;display:inline-flex;line-height:20px;max-width:100%;outline:none;overflow:hidden;padding:0 12px;position:relative;text-decoration:none;transition-duration:.28s;transition-property:box-shadow,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);vertical-align:middle;white-space:nowrap}.v-chip:before{background-color:currentColor;bottom:0;border-radius:inherit;content:"";left:0;opacity:0;position:absolute;pointer-events:none;right:0;top:0}.v-chip .v-avatar{height:24px!important;min-width:24px!important;width:24px!important}.v-chip .v-icon{font-size:24px}.v-application--is-ltr .v-chip .v-avatar--left,.v-application--is-ltr .v-chip .v-icon--left{margin-left:-6px;margin-right:6px}.v-application--is-ltr .v-chip .v-avatar--right,.v-application--is-ltr .v-chip .v-icon--right,.v-application--is-rtl .v-chip .v-avatar--left,.v-application--is-rtl .v-chip .v-icon--left{margin-left:6px;margin-right:-6px}.v-application--is-rtl .v-chip .v-avatar--right,.v-application--is-rtl .v-chip .v-icon--right{margin-left:-6px;margin-right:6px}.v-chip:not(.v-chip--no-color) .v-icon{color:inherit}.v-chip .v-chip__close.v-icon{font-size:18px;max-height:18px;max-width:18px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-application--is-ltr .v-chip .v-chip__close.v-icon.v-icon--right{margin-right:-4px}.v-application--is-rtl .v-chip .v-chip__close.v-icon.v-icon--right{margin-left:-4px}.v-chip .v-chip__close.v-icon:active,.v-chip .v-chip__close.v-icon:focus,.v-chip .v-chip__close.v-icon:hover{opacity:.72}.v-chip .v-chip__content{align-items:center;display:inline-flex;height:100%;max-width:100%}.v-chip--active .v-icon{color:inherit}.v-chip--link:before{transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-chip--link:focus:before{opacity:.32}.v-chip--clickable{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip--clickable:active{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-chip--disabled{opacity:.4;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip__filter{max-width:24px}.v-chip__filter.v-icon{color:inherit}.v-chip__filter.expand-x-transition-enter,.v-chip__filter.expand-x-transition-leave-active{margin:0}.v-chip--pill .v-chip__filter{margin-right:0 16px 0 0}.v-chip--pill .v-avatar{height:32px!important;width:32px!important}.v-application--is-ltr .v-chip--pill .v-avatar--left{margin-left:-12px}.v-application--is-ltr .v-chip--pill .v-avatar--right,.v-application--is-rtl .v-chip--pill .v-avatar--left{margin-right:-12px}.v-application--is-rtl .v-chip--pill .v-avatar--right{margin-left:-12px}.v-chip--label{border-radius:4px!important}.v-chip.v-chip--outlined{border-width:thin;border-style:solid}.v-chip.v-chip--outlined.v-chip--active:before{opacity:.08}.v-chip.v-chip--outlined .v-icon{color:inherit}.v-chip.v-chip--outlined.v-chip.v-chip{background-color:transparent!important}.v-chip.v-chip--selected{background:transparent}.v-chip.v-chip--selected:after{opacity:.28}.v-chip.v-size--x-small{border-radius:8px;font-size:10px;height:16px}.v-chip.v-size--small{border-radius:12px;font-size:12px;height:24px}.v-chip.v-size--default{border-radius:16px;font-size:14px;height:32px}.v-chip.v-size--large{border-radius:27px;font-size:16px;height:54px}.v-chip.v-size--x-large{border-radius:33px;font-size:18px;height:66px}',""]),e.exports=n},354:function(e,t,r){"use strict";r.r(t);r(65);var n=r(14),o=(r(26),r(0)),l=r(334),c=r(338),d=r(337),v=o.a.extend({props:{value:{type:Boolean,default:!1},targetFaqId:{type:Number,default:null},groupId:{type:Number,required:!0}},data:function(){return{rules:l.a,resultError:"",sending:!1,question:"",answer:""}},fetch:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.creating){t.next=6;break}return t.next=3,e.$api.normal.faq._faqId(e.targetFaqId).$get();case 3:r=t.sent,e.question=r.question,e.answer=r.answer;case 6:case"end":return t.stop()}}),t)})))()},computed:{creating:function(){return null===this.targetFaqId||void 0===this.targetFaqId},loading:function(){return this.$fetchState.pending||this.sending}},watch:{value:function(){null===this.targetFaqId&&this.referesh()}},methods:{onClose:function(e){Object(c.a)(this.$refs.createOrUpdateForm)&&this.$refs.createOrUpdateForm.resetValidation(),this.$emit("input",e)},referesh:function(){this.answer="",this.question="",Object(c.a)(this.$refs.createOrUpdateForm)&&this.$refs.createOrUpdateForm.resetValidation()},submitCreateOrUpdate:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null===(n=(r=e.$refs.createOrUpdateForm).validate)||void 0===n?void 0:n.call(r)){t.next=3;break}return t.abrupt("return");case 3:if(!e.creating){t.next=8;break}return t.next=6,e.create();case 6:t.next=10;break;case 8:return t.next=10,e.update();case 10:case"end":return t.stop()}}),t)})))()},create:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.resultError="",e.sending=!0,t.prev=2,t.next=5,e.$api.normal.faq.$post({body:{groupId:e.groupId,question:e.question,answer:e.answer}});case 5:r=t.sent,e.$emit("create",r),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),e.resultError=Object(d.a)(t.t0);case 12:return t.prev=12,e.sending=!1,t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[2,9,12,15]])})))()},update:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.resultError="",e.sending=!0,t.prev=2,t.next=5,e.$api.normal.faq._faqId(e.targetFaqId).$patch({body:{question:e.question,answer:e.answer}});case 5:r=t.sent,e.$emit("update",r),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),e.resultError=Object(d.a)(t.t0);case 12:return t.prev=12,e.sending=!1,t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[2,9,12,15]])})))()}}}),f=r(30),h=r(39),x=r.n(h),m=r(135),_=r(367),y=r(333),w=r(458),O=r(461),j=r(346),k=r(459),$=r(326),C=r(355),V=r(358),component=Object(f.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-dialog",{attrs:{value:e.value,width:"600"},on:{input:e.onClose}},[r("v-card",{attrs:{loading:e.loading,disabled:e.loading}},[r("v-card-title",[e._v("FAQ "+e._s(e.creating?"作成":"変更"))]),e._v(" "),r("v-card-text",[r("v-form",{ref:"createOrUpdateForm",on:{submit:function(t){return t.preventDefault(),e.submitCreateOrUpdate(t)}}},[r("v-text-field",{attrs:{label:"ID (変更不可)",readonly:"",value:e.creating?"自動で割り当てられます":e.targetFaqId}}),e._v(" "),r("v-textarea",{attrs:{label:"質問",rules:[]},model:{value:e.question,callback:function(t){e.question=t},expression:"question"}}),e._v(" "),r("v-textarea",{attrs:{label:"答え",rules:[]},model:{value:e.answer,callback:function(t){e.answer=t},expression:"answer"}}),e._v(" "),r("v-row",[r("v-col",[r("form-error",{attrs:{message:e.resultError}})],1)],1),e._v(" "),r("v-row",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"primary",type:"submit"}},[e._v(e._s(e.creating?"作成":"変更"))])],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;x()(component,{FormError:r(335).default}),x()(component,{VBtn:m.a,VCard:_.a,VCardText:y.b,VCardTitle:y.c,VCol:w.a,VDialog:O.a,VForm:j.a,VRow:k.a,VSpacer:$.a,VTextField:C.a,VTextarea:V.a})},358:function(e,t,r){"use strict";r(13),r(10),r(7),r(6),r(4),r(11);var n=r(2),o=(r(26),r(343),r(355)),l=r(8);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var d=Object(l.a)(o.a);t.a=d.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(e){return!isNaN(parseFloat(e))}},rows:{type:[Number,String],default:5,validator:function(e){return!isNaN(parseInt(e,10))}}},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},o.a.options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var e=this;setTimeout((function(){e.autoGrow&&e.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var input=this.$refs.input;if(input){input.style.height="0";var e=input.scrollHeight,t=parseInt(this.rows,10)*parseFloat(this.rowHeight);input.style.height=Math.max(t,e)+"px"}},genInput:function(){var input=o.a.options.methods.genInput.call(this);return input.tag="textarea",delete input.data.attrs.type,input.data.attrs.rows=this.rows,input},onInput:function(e){o.a.options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}})},359:function(e,t,r){"use strict";r.r(t);r(66);var n=r(0).a.extend({props:{keyword:{type:String,required:!0},close:{type:Boolean,default:!1}},computed:{color:function(){if(!this.keyword.startsWith("###"))return this.keyword.startsWith("##")?"secondary":this.keyword.startsWith("#")?"primary":void 0}}}),o=r(30),l=r(39),c=r.n(l),d=(r(13),r(7),r(6),r(4),r(11),r(10),r(9)),v=r(2),f=(r(352),r(8)),h=r(148),x=r(93),m=r(40),_=r(94),y=r(22),w=r(69),O=r(71),j=r(95),k=r(5);function $(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function C(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?$(Object(source),!0).forEach((function(t){Object(v.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):$(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var V=Object(f.a)(m.a,j.a,O.a,y.a,Object(_.a)("chipGroup"),Object(w.b)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return C(C(C(C({"v-chip":!0},O.a.options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(O.a.options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var e=this;[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]].forEach((function(t){var r=Object(d.a)(t,2),n=r[0],o=r[1];e.$attrs.hasOwnProperty(n)&&Object(k.a)(n,o,e)}))},methods:{click:function(e){this.$emit("click",e),this.chipGroup&&this.toggle()},genFilter:function(){var e=[];return this.isActive&&e.push(this.$createElement(x.a,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(h.b,e)},genClose:function(){var e=this;return this.$createElement(x.a,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(t){t.stopPropagation(),t.preventDefault(),e.$emit("click:close"),e.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(e){var t=[this.genContent()],r=this.generateRouteLink(),n=r.tag,data=r.data;data.attrs=C(C({},data.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:data.attrs.tabindex}),data.directives.push({name:"show",value:this.active}),data=this.setBackgroundColor(this.color,data);var o=this.textColor||this.outlined&&this.color;return e(n,this.setTextColor(o,data),t)}}),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("v-chip",{attrs:{color:e.color,close:e.close,nuxt:"",to:"/"},on:{"click:close":function(t){return e.$emit("delete")}}},[e._v("\n  "+e._s(e.keyword)+"\n")])}),[],!1,null,null,null);t.default=component.exports;c()(component,{VChip:V})},360:function(e,t,r){"use strict";r.r(t);r(209);var n=r(0),o=r(372),l=n.a.extend({props:{text:{type:String,default:null}},computed:{textDisplay:function(){var e;return o.a.link(null!==(e=this.text)&&void 0!==e?e:"",{sanitizeHtml:!0})}}}),c=(r(350),r(30)),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("pre",{staticClass:"text",domProps:{innerHTML:e._s(e.textDisplay)}})}),[],!1,null,null,null);t.default=component.exports},374:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r(334),l=r(338),c=n.a.extend({props:{value:{type:String,default:""},isAdmin:{type:Boolean,default:!1},list:{type:Array,default:[]},loading:{type:Boolean,default:null},disabled:{type:Boolean,default:null}},data:function(){return{rules:o.a}},watch:{value:function(){var form=this.$refs.form;Object(l.a)(form)&&form.resetValidation()}},methods:{submit:function(){var form=this.$refs.form;Object(l.a)(form)&&form.validate()&&this.$emit("add",this.value)}}}),d=r(30),v=r(39),f=r.n(v),h=r(135),x=r(346),m=r(355),component=Object(d.a)(c,(function(){var e=this,t=this,r=t.$createElement,n=t._self._c||r;return n("div",[n("div",t._l(t.list,(function(e){return n("keyword-chip",{key:e,staticClass:"mb-2 mr-2",attrs:{keyword:e,close:t.isAdmin},on:{delete:function(r){return t.$emit("delete",e)}}})})),1),t._v(" "),n("div",{staticClass:"mt-2"},[n("v-form",{ref:"form",staticClass:"d-flex align-center",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[n("v-text-field",{attrs:{value:t.value,loading:t.loading,rules:[t.rules.required],disabled:t.disabled,label:"新しいキーワードを追加"},on:{input:function(t){return e.$emit("input",t)}}}),t._v(" "),n("v-btn",{attrs:{color:"primary",text:"",type:"submit"}},[t._v("追加")])],1)],1)])}),[],!1,null,null,null);t.default=component.exports;f()(component,{KeywordChip:r(359).default}),f()(component,{VBtn:h.a,VForm:x.a,VTextField:m.a})},385:function(e,t,r){var content=r(386);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("e8b41e5e",content,!0,{sourceMap:!1})},386:function(e,t,r){var n=r(15)(!1);n.push([e.i,".theme--light.v-subheader{color:rgba(0,0,0,.6)}.theme--dark.v-subheader{color:hsla(0,0%,100%,.7)}.v-subheader{align-items:center;display:flex;height:48px;font-size:.875rem;font-weight:400;padding:0 16px}.v-subheader--inset{margin-left:56px}",""]),e.exports=n},402:function(e,t,r){"use strict";r.r(t);r(65);var n=r(14),o=r(0),l=r(337),c=o.a.extend({props:{value:{type:Boolean,default:!1},isAdmin:{type:Boolean,default:!1},faq:{type:Object,required:!0}},data:function(){return{editing:!1,sending:!1,deleting:!1,deleteResultError:"",deleteLoading:!1,showingFaqDetails:!1,newKeyword:""}},methods:{startUpdateFaq:function(){this.editing=!0},startDeleteFaq:function(){this.deleting=!0},continueDeleteFaq:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.deleteLoading=!0,e.deleteResultError="",t.prev=2,r=e.faq.id,t.next=6,e.$api.normal.faq._faqId(r).$delete();case 6:e.$emit("delete",e.faq),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),e.deleteResultError=Object(l.a)(t.t0);case 12:return t.prev=12,e.deleteLoading=!1,t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[2,9,12,15]])})))()},addKeyword:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.sending=!0,r.prev=1,r.next=4,t.$api.normal.faq._faqId(e.id).keyword.$post({body:{keyword:t.newKeyword}});case 4:e.keywords=r.sent.keywords,t.$snackbar.open("キーワードを追加しました"),t.newKeyword="",r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),t.$snackbar.open("キーワードの追加中にエラー: ".concat(Object(l.a)(r.t0)));case 12:return r.prev=12,t.sending=!1,r.finish(12);case 15:case"end":return r.stop()}}),r,null,[[1,9,12,15]])})))()},deleteKeyword:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.sending=!0,n.prev=1,n.next=4,r.$api.normal.faq._faqId(e.id).keyword.$delete({body:{keyword:t}});case 4:e.keywords=n.sent.keywords,r.$snackbar.open("キーワードを削除しました"),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(1),r.$snackbar.open("キーワードの削除中にエラー: ".concat(Object(l.a)(n.t0))),r.sending=!1;case 12:return n.prev=12,r.sending=!1,n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[1,8,12,15]])})))()}}}),d=r(30),v=r(39),f=r.n(v),h=r(135),x=r(367),m=r(333),_=r(461),y=r(349),w=r(326),O=(r(13),r(10),r(7),r(6),r(4),r(11),r(2)),j=(r(385),r(22)),k=r(8);function $(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function C(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?$(Object(source),!0).forEach((function(t){Object(O.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):$(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var V=Object(k.a)(j.a).extend({name:"v-subheader",props:{inset:Boolean},render:function(e){return e("div",{staticClass:"v-subheader",class:C({"v-subheader--inset":this.inset},this.themeClasses),attrs:this.$attrs,on:this.$listeners},this.$slots.default)}}),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-dialog",{attrs:{value:e.value,width:"800"},on:{input:function(t){return e.$emit("input")}}},[r("v-card",{attrs:{elevation:"1"}},[r("v-card-text",[r("div",{staticClass:"text-body-1 d-flex"},[r("div",{staticClass:"text"},[r("v-subheader",[e._v("質問")]),e._v(" "),r("easy-text",{attrs:{text:e.faq.question}})],1),e._v(" "),r("v-divider",{staticClass:"mx-2",attrs:{vertical:""}}),e._v(" "),r("div",{staticClass:"text"},[r("v-subheader",[e._v("回答")]),e._v(" "),r("easy-text",{staticClass:"text",attrs:{text:e.faq.answer}})],1)],1)]),e._v(" "),e.isAdmin?r("v-card-actions",[r("v-btn",{attrs:{color:"success",large:"",text:""},on:{click:function(t){return e.startUpdateFaq()}}},[e._v("編集")]),e._v(" "),r("v-btn",{attrs:{color:"error",large:"",text:""},on:{click:function(t){return e.startDeleteFaq()}}},[e._v("削除")]),e._v(" "),r("v-spacer")],1):e._e(),e._v(" "),r("v-divider",{staticClass:"mb-2"}),e._v(" "),r("v-card-text",[r("keyword-list",{attrs:{list:e.faq.keywords,"is-admin":e.isAdmin},on:{add:function(t){return e.addKeyword(e.faq)},delete:function(t){return e.deleteKeyword(e.faq,t)}},model:{value:e.newKeyword,callback:function(t){e.newKeyword=t},expression:"newKeyword"}})],1)],1)],1),e._v(" "),r("input-faq",{attrs:{"group-id":e.faq.groupId,"target-faq-id":e.faq.id},on:{update:function(t){return e.$emit("update")}},model:{value:e.editing,callback:function(t){e.editing=t},expression:"editing"}}),e._v(" "),r("confirm-delete",{attrs:{what:"FAQ (id = "+e.faq.id+")",loading:e.deleteLoading,error:e.deleteResultError},on:{confirm:e.continueDeleteFaq,cancel:e.refresh},model:{value:e.deleting,callback:function(t){e.deleting=t},expression:"deleting"}})],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{EasyText:r(360).default,KeywordList:r(374).default,InputFaq:r(354).default,ConfirmDelete:r(348).default}),f()(component,{VBtn:h.a,VCard:x.a,VCardActions:m.a,VCardText:m.b,VDialog:_.a,VDivider:y.a,VSpacer:w.a,VSubheader:V})}}]);