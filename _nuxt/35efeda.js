(window.webpackJsonp=window.webpackJsonp||[]).push([[21,11,20],{334:function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));r(145);var n,o=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.reduce((function(e,t){return function(r){var n=e(r);return!0===n?t(r):n}}),(function(){return!0}))},c=function(e){return Boolean(e)||"入力してください。"},l=function(e){return/^[a-z0-9]*$/.test(e)||"半角の小文字アルファベット・数字のみで入力してください。"},d=function(e){return function(t){return t.length<=e||"".concat(e,"文字以内で入力してください。")}},f=o(c,l,d(32)),v=o(c,(n=8,function(e){return e.length>=n||"".concat(n,"文字以上で入力してください。")}),d(1024)),m=Object.freeze({required:c,lowerAlphaNumerical:l,maxLength:d,isUserName:f,isPassword:v})},335:function(e,t,r){"use strict";r.r(t);var n=r(0).a.extend({props:{message:{type:String,default:null}}}),o=r(30),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"text-caption text-right font-weight-light red--text"},[e._v("\n  "+e._s(e.message)+"\n")])}),[],!1,null,null,null);t.default=component.exports},337:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=function(e){var t,r,n;if(console.error(e),function(e){return Boolean(e.isAxiosError)}(e)){var o=null===(t=e.response)||void 0===t?void 0:t.status;if(400===o){var c=null===(n=null===(r=e.response)||void 0===r?void 0:r.data)||void 0===n?void 0:n.errorMessage;return"string"==typeof c?c:"入力が間違っています。"}return 403===o?"権限がありません。":500===o?"サーバーエラーが発生。":"通信エラーが発生。"}return"予期せぬエラーが発生。"}},338:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=function(e){return null!=e&&"function"==typeof e.validate&&"function"==typeof e.reset&&"function"==typeof e.resetValidation}},348:function(e,t,r){"use strict";r.r(t);var n=r(0).a.extend({name:"DeleteUser",props:{value:{type:Boolean,required:!0,default:!1},what:{type:String,required:!0,default:""},error:{type:String,required:!0,default:""},loading:{type:Boolean,default:null},challengeText:{type:String,default:null}},data:function(){return{confirm:""}},computed:{fullChallengeText:function(){return this.challengeText?"delete ".concat(this.challengeText):"delete"},disabled:function(){return this.fullChallengeText!==this.confirm}},watch:{value:function(){this.confirm=""}},methods:{submit:function(){this.$emit("confirm")}}}),o=r(30),c=r(39),l=r.n(c),d=r(135),f=r(367),v=r(333),m=r(461),h=r(349),w=r(346),x=r(326),_=r(355),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-dialog",{attrs:{value:e.value,width:"500"},on:{input:function(t){return e.$emit("input",t)}}},[r("v-card",{attrs:{loading:e.loading,disabled:e.loading}},[r("v-form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[r("v-card-title",[e._v("本当に "+e._s(e.what)+" を削除しますか？")]),e._v(" "),r("v-divider"),e._v(" "),r("v-card-text",[e._v("\n        削除する場合は、"),r("i",[e._v(e._s(e.fullChallengeText))]),e._v(" と入力してください。\n        "),r("form-error",{attrs:{message:e.error}}),e._v(" "),r("v-text-field",{attrs:{autocomplete:"off"},model:{value:e.confirm,callback:function(t){e.confirm=t},expression:"confirm"}})],1),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{on:{click:function(t){e.$emit("input",!1),e.$emit("cancel")}}},[e._v("キャンセル")]),e._v(" "),r("v-btn",{attrs:{color:"error",type:"submit",disabled:e.disabled}},[e._v("削除する")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{FormError:r(335).default}),l()(component,{VBtn:d.a,VCard:f.a,VCardActions:v.a,VCardText:v.b,VCardTitle:v.c,VDialog:m.a,VDivider:h.a,VForm:w.a,VSpacer:x.a,VTextField:_.a})},361:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r(334),c=n.a.extend({props:{value:{type:String,default:null},label:{type:String,default:"パスワード"},requiredOnly:{type:Boolean,default:!1}},data:function(){return{rules:o.a,showPassword:!1}}}),l=r(30),d=r(39),f=r.n(d),v=r(135),m=r(134),h=r(355),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-text-field",{attrs:{value:e.value,label:e.label,rules:[e.requiredOnly?e.rules.required:e.rules.isPassword],type:e.showPassword?"text":"password","hide-details":"auto"},on:{input:function(t){return e.$emit("input",t)}},scopedSlots:e._u([{key:"append",fn:function(){return[r("v-btn",{attrs:{tabindex:"-1",icon:""},on:{mousedown:function(t){e.showPassword=!0},mouseup:function(t){e.showPassword=!1},mouseleave:function(t){e.showPassword=!1}}},[r("v-icon",[e._v("\n        "+e._s(e.showPassword?"mdi-eye-off":"mdi-eye")+"\n      ")])],1)]},proxy:!0}])})}),[],!1,null,null,null);t.default=component.exports;f()(component,{VBtn:v.a,VIcon:m.a,VTextField:h.a})},404:function(e,t,r){"use strict";r.r(t);r(23),r(65);var n=r(14),o=(r(26),r(0)),c=r(334),l=r(338),d=r(337),f=o.a.extend({props:{value:{type:Boolean,required:!0,default:!1},targetUserId:{type:Number,default:null}},data:function(){return{rules:c.a,resultError:"",sending:!1,isAdmin:!1,userName:"",password:"",newPassword:""}},fetch:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.creating){t.next=6;break}return t.next=3,e.$api.admin.user._userId(e.targetUserId).$get({});case 3:r=t.sent,e.userName=r.name,e.isAdmin=r.isAdmin;case 6:case"end":return t.stop()}}),t)})))()},computed:{creating:function(){return null===this.targetUserId||void 0===this.targetUserId},loading:function(){return this.$fetchState.pending||this.sending}},watch:{value:function(){this.resultError="",this.newPassword="",this.password="",this.creating&&(this.isAdmin=!1,this.userName=""),Object(l.a)(this.$refs.createOrUpdateForm)&&this.$refs.createOrUpdateForm.resetValidation()}},methods:{onClose:function(e){this.loading||this.$emit("input",e)},submitCreateOrUpdate:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!!Object(l.a)(e.$refs.createOrUpdateForm)&&e.$refs.createOrUpdateForm.validate()){t.next=3;break}return t.abrupt("return");case 3:if(!e.creating){t.next=8;break}return t.next=6,e.create();case 6:t.next=10;break;case 8:return t.next=10,e.update();case 10:case"end":return t.stop()}}),t)})))()},submitPasswordChange:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!!Object(l.a)(e.$refs.createOrUpdateForm)&&e.$refs.createOrUpdateForm.validate()){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,e.updatePassword();case 5:case"end":return t.stop()}}),t)})))()},create:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.resultError="",e.sending=!0,t.prev=2,t.next=5,e.$api.admin.user.$post({body:{isAdmin:e.isAdmin,userName:e.userName,password:e.password}});case 5:r=t.sent,e.$emit("create",r),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),e.resultError=Object(d.a)(t.t0);case 12:return t.prev=12,e.sending=!1,t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[2,9,12,15]])})))()},update:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.resultError="",e.sending=!0,t.prev=2,t.next=5,e.$api.admin.user._userId(e.targetUserId).$patch({body:{userId:e.targetUserId,isAdmin:e.isAdmin,userName:e.userName}});case 5:r=t.sent,e.$emit("update",r),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),e.resultError=Object(d.a)(t.t0);case 12:return t.prev=12,e.sending=!1,t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[2,9,12,15]])})))()},updatePassword:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.resultError="",e.sending=!0,t.prev=2,t.next=5,e.$api.admin.user._userId(e.targetUserId).$patch({body:{userId:e.targetUserId,password:e.password}});case 5:r=t.sent,e.$emit("updatePassword",r),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),e.resultError=Object(d.a)(t.t0);case 12:return t.prev=12,e.sending=!1,t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[2,9,12,15]])})))()}}}),v=r(30),m=r(39),h=r.n(m),w=r(135),x=r(367),_=r(333),U=r(454),k=r(458),y=r(461),$=r(349),V=r(346),O=r(459),C=r(326),E=r(355),component=Object(v.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-dialog",{attrs:{value:e.value,width:"500"},on:{input:e.onClose}},[r("v-card",{attrs:{loading:e.loading,disabled:e.loading}},[r("v-card-title",[e._v("ユーザ"+e._s(e.creating?"作成":"情報変更"))]),e._v(" "),r("v-card-text",[r("v-form",{ref:"createOrUpdateForm",on:{submit:function(t){return t.preventDefault(),e.submitCreateOrUpdate(t)}}},[r("v-text-field",{attrs:{label:"ID (変更不可)",readonly:"",value:e.creating?"自動で割り当てられます":e.targetUserId}}),e._v(" "),r("v-text-field",{attrs:{label:"ユーザ名 (ログイン時に使います)",rules:[e.rules.isUserName]},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}}),e._v(" "),e.creating?r("password-field",{model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}):e._e(),e._v(" "),r("v-checkbox",{attrs:{label:"管理者権限"},model:{value:e.isAdmin,callback:function(t){e.isAdmin=t},expression:"isAdmin"}}),e._v(" "),r("v-row",[r("v-col",[r("form-error",{attrs:{message:e.resultError}})],1)],1),e._v(" "),r("v-row",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"primary",type:"submit"}},[e._v(e._s(e.creating?"作成":"変更"))])],1)],1),e._v(" "),e.creating?e._e():r("div",[r("v-divider",{staticClass:"mx-4 my-4"}),e._v(" "),r("v-form",{ref:"passwordChangeForm",on:{submit:function(t){return t.preventDefault(),e.submitPasswordChange(t)}}},[r("v-row",[r("v-col",[r("password-field",{attrs:{label:"新しいパスワード"},model:{value:e.newPassword,callback:function(t){e.newPassword=t},expression:"newPassword"}})],1)],1),e._v(" "),r("v-row",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"error",type:"submit"}},[e._v("パスワード変更")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;h()(component,{PasswordField:r(361).default,FormError:r(335).default}),h()(component,{VBtn:w.a,VCard:x.a,VCardText:_.b,VCardTitle:_.c,VCheckbox:U.a,VCol:k.a,VDialog:y.a,VDivider:$.a,VForm:V.a,VRow:O.a,VSpacer:C.a,VTextField:E.a})},464:function(e,t,r){"use strict";r.r(t);r(65);var n=r(14),o=r(362),c=r.n(o),l=r(0),d=r(337),f=l.a.extend({data:function(){return{loadError:"",users:[],targetUser:null,editingUser:!1,deletingUser:!1,deleteResultError:"",deleteLoading:!1}},fetch:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.refetch();case 2:case"end":return t.stop()}}),t)})))()},methods:{refresh:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.editingUser=!1,e.deletingUser=!1,t.next=4,e.refetch();case 4:case"end":return t.stop()}}),t)})))()},startCreateUser:function(){this.targetUser=null,this.editingUser=!0},startUpdateUser:function(e){this.targetUser=e,this.editingUser=!0},startDeleteUser:function(e){this.targetUser=e,this.deletingUser=!0},continueDeleteUser:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.deleteResultError="",e.deleteLoading=!0,t.prev=2,c()(e.targetUser),t.next=6,e.$api.admin.user._userId(e.targetUser.id).$delete({body:{userId:e.targetUser.id}});case 6:return e.$snackbar.open("ユーザを削除しました"),t.next=9,e.refresh();case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(2),e.deleteResultError=Object(d.a)(t.t0);case 14:return t.prev=14,e.deleteLoading=!1,t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[2,11,14,17]])})))()},refetch:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loadError="",t.prev=1,t.next=4,e.$api.admin.user.$get();case 4:e.users=t.sent,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),e.loadError=Object(d.a)(t.t0);case 10:case"end":return t.stop()}}),t,null,[[1,7]])})))()}}}),v=r(30),m=r(39),h=r.n(m),w=r(135),x=r(367),_=r(333),U=r(454),k=r(458),y=r(388),$=r(459),V=r(51),O=r(326),C=r(355),component=Object(v.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticClass:"py-12"},[e.loadError?r("v-sheet",[e._v(" エラー: "+e._s(e.loadError)+" ")]):r("div",[e.users.length?e._e():r("div",[e._v("ユーザが作成されていません。")]),e._v(" "),r("v-row",[r("v-spacer"),e._v(" "),r("v-btn",{on:{click:e.startCreateUser}},[e._v("新しいユーザを作成")]),e._v(" "),r("v-spacer")],1),e._v(" "),e._l(e.users,(function(t){return r("v-row",{key:"user-"+t.id},[r("v-col",[r("v-card",{attrs:{loading:e.$fetchState.pending,disabled:e.$fetchState.pending}},[r("v-card-title",[e._v("\n            "+e._s(t.name)+"\n          ")]),e._v(" "),r("v-card-text",[r("v-row",[r("v-col",[r("v-text-field",{attrs:{label:"ID (内部管理用)",value:t.id,readonly:""}}),e._v(" "),r("v-text-field",{attrs:{label:"ユーザネーム (ログイン用)",value:t.name,readonly:""}}),e._v(" "),r("v-checkbox",{attrs:{label:"管理者権限",value:"user.isAdmin",readonly:""}})],1)],1),e._v(" "),r("v-card-actions",[r("v-btn",{attrs:{text:"",color:"success"},on:{click:function(r){return e.startUpdateUser(t)}}},[e._v("編集")]),e._v(" "),r("v-btn",{attrs:{text:"",color:"error"},on:{click:function(r){return e.startDeleteUser(t)}}},[e._v("削除")])],1)],1)],1)],1)],1)})),e._v(" "),e.users.length>=4?r("v-row",[r("v-spacer"),e._v(" "),r("v-btn",{on:{click:e.startCreateUser}},[e._v("新しいユーザを作成")]),e._v(" "),r("v-spacer")],1):e._e(),e._v(" "),r("input-user",{key:"user-input-"+(e.targetUser?e.targetUser.id:"new"),attrs:{"target-user-id":e.targetUser&&e.targetUser.id},on:{create:function(t){e.$snackbar.open("ユーザを作成しました"),e.refresh()},update:function(t){e.$snackbar.open("ユーザ情報を更新しました"),e.refetch()},updatePassword:function(t){e.$snackbar.open("ユーザパスワードを更新しました"),e.refetch()}},model:{value:e.editingUser,callback:function(t){e.editingUser=t},expression:"editingUser"}})],2),e._v(" "),e.targetUser?r("confirm-delete",{key:"delete"+e.targetUser.id,attrs:{what:"ユーザ "+e.targetUser.name+" (id: "+e.targetUser.id+")",loading:e.deleteLoading,error:e.deleteResultError,"challenge-text":e.targetUser.name},on:{confirm:e.continueDeleteUser,cancel:e.refresh},model:{value:e.deletingUser,callback:function(t){e.deletingUser=t},expression:"deletingUser"}}):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;h()(component,{InputUser:r(404).default,ConfirmDelete:r(348).default}),h()(component,{VBtn:w.a,VCard:x.a,VCardActions:_.a,VCardText:_.b,VCardTitle:_.c,VCheckbox:U.a,VCol:k.a,VContainer:y.a,VRow:$.a,VSheet:V.a,VSpacer:O.a,VTextField:C.a})}}]);