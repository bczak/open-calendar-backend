(function(e){function t(t){for(var a,s,o=t[0],c=t[1],l=t[2],u=0,v=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&v.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(v.length)v.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},i=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var d=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("8a23"),r=n.n(a);r.a},"0622":function(e,t,n){},"090b":function(e,t){e.exports={title:"Open Calendar",app:{add:"Invite",collaborators:"Collaborators",saved:"Saved!",dark:"Dark Theme",event:"Event",today:"Today",menu:{day:"Day",week:"Week",month:"Month"},months:["January","February","March","April","May","June","July","August","September","October","November","December"]},drawer:{updates:"Updates",search:"Search",account:"Account",settings:"Settings",login:"Sign In",logout:"Log Out"}}},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id="4678"},5620:function(e,t){e.exports={title:"Open Calendar",app:{today:"Dnes",menu:["Den","Týden","Měsíc"]}}},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:"",elevation:"0",dark:e.dark,"clipped-left":""}},[n("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!e.drawer}}}),n("v-btn",{attrs:{icon:""},on:{click:function(t){return e.add(-1)}}},[n("v-icon",[e._v("mdi-arrow-left")])],1),n("v-btn",{attrs:{outlined:""},on:{click:function(t){return e.changeView("month")}}},[e._v(" "+e._s(e.$t("app.months["+Number(e.now.substr(5,2)-1)+"]"))+" ")]),n("v-btn",{attrs:{icon:""},on:{click:function(t){return e.add(1)}}},[n("v-icon",[e._v("mdi-arrow-right")])],1),n("v-spacer"),n("v-btn",{attrs:{depressed:"",dark:e.dark,icon:""},on:{click:e.today}},[n("v-icon",[e._v("mdi-calendar")])],1),n("v-menu",{scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-btn",e._g({attrs:{dark:e.dark,depressed:"",icon:""}},a),[n("v-icon",[e._v(e._s(e.views[e.active]))])],1)]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[n("v-list",[n("v-list-item",{on:{click:function(t){return e.changeView("day")}}},[n("v-list-item-title",[e._v(e._s(e.$t("app.menu.day")))])],1),n("v-list-item",{on:{click:function(t){return e.changeView("week")}}},[n("v-list-item-title",[e._v(e._s(e.$t("app.menu.week")))])],1),n("v-list-item",{on:{click:function(t){return e.changeView("month")}}},[n("v-list-item-title",[e._v(e._s(e.$t("app.menu.month")))])],1)],1)],1)],1),n("v-navigation-drawer",{attrs:{app:"",clipped:"",dark:e.dark},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"title"},[e._v(" "+e._s(e.calendar.title)+" ")]),n("v-list-item-subtitle",[e._v(" "+e._s(e.user.google_mail||e.user.mail)+" ")])],1)],1),n("v-divider"),n("v-list",{attrs:{dense:"",nav:""}},[n("v-list-item",{attrs:{link:""}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-cog")])],1),n("v-list-item-content",{on:{click:e.showSettings}},[e._v(" "+e._s(e.$t("drawer.settings"))+" ")])],1),e.user.signed?e._e():n("v-list-item",{attrs:{link:"",href:e.API+"/auth/mail/login"}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-logout")])],1),n("v-list-item-content",[e._v(" "+e._s(e.$t("drawer.login"))+" ")])],1),e.user.signed?n("v-list-item",{attrs:{link:"",href:e.API+"/auth/logout"}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-logout")])],1),n("v-list-item-content",[e._v(" "+e._s(e.$t("drawer.logout"))+" ")])],1):e._e()],1),n("v-divider"),n("v-list-item",[n("v-list-item-content",[e._v(" "+e._s(e.$t("app.dark"))+" ")]),n("v-switch",{attrs:{inset:"",color:"primary"},model:{value:e.dark,callback:function(t){e.dark=t},expression:"dark"}})],1),n("v-divider"),n("v-list",[n("v-list-item",[n("v-list-item-icon",[n("v-icon",[e._v("mdi-account")])],1),n("v-list-item-content",[e._v(" "+e._s(e.$t("app.collaborators"))+" ")])],1),e._l(e.people,(function(t){return n("v-list-item",{key:t._id,attrs:{link:""}},[n("v-list-item-content",[e._v(" "+e._s(t.google_mail||t.mail)+" ")])],1)}))],2),n("v-list-item",{attrs:{link:""},on:{click:function(t){e.invite=!0}}},[n("v-list-item-icon",[n("v-icon",[e._v(" mdi-plus ")])],1),n("v-list-item-content",[e._v(" "+e._s(e.$t("app.add"))+" ")])],1)],1),n("v-content",[n("router-view",{key:e.$route.fullPath,ref:"calendar",attrs:{date:e.now,dark:e.dark,weekdays:e.weekdays,events:e.events},on:{changeDate:function(t){return e.changeDate(t)},openEvent:function(t){return e.openEvent(t)}}}),n("Invite",{attrs:{active:e.invite,app:e.calendar._id},on:{close:function(t){e.invite=!1}}}),n("NewDialog",{attrs:{active:e.dialog,user:e.user},on:{close:function(t){e.dialog=!1}}}),n("Settings",{attrs:{active:e.settings_link,cal:e.calendar._id,dark:e.dark},on:{close:function(t){e.settings_link=!1},update:function(t){return e.updateCal()}}}),n("NewEvent",{key:e.activeEvent._id,attrs:{dark:e.dark,active:e.new_event,cal:e.calendar._id,event:e.activeEvent},on:{update:function(t){return e.updateCal()},close:function(t){e.new_event=!1}}}),e.help?n("v-btn",{staticClass:"help-icon",attrs:{fab:"",icon:"",dark:""}},[n("v-icon",[e._v("mdi-help")])],1):e._e(),n("v-btn",{staticClass:"plus-icon",attrs:{fab:"",icon:"",dark:""},on:{click:function(t){return e.showNewEvent()}}},[n("v-icon",[e._v("mdi-plus")])],1)],1)],1)},i=[],s=(n("99af"),n("4de4"),n("a15b"),n("d81d"),n("d3b7"),n("ac1f"),n("1276"),n("b85c")),o=n("5530"),c=(n("96cf"),n("1da1")),l=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-calendar",{attrs:{type:"month",start:e.date,dark:e.dark,weekdays:e.weekdays,events:e.events,"event-color":e.getColor},on:{"click:date":e.toDate,"click:event":e.openEvent}})},u=[],v={name:"Calendar",props:{events:Array,date:String,dark:Boolean,weekdays:Array},methods:{getColor:function(e){return e.color},openEvent:function(e){this.$emit("openEvent",e.event.key)},toDate:function(e){this.$emit("changeDate",e.date)}},data:function(){return{}}},p=v,m=n("2877"),f=n("6544"),h=n.n(f),b=n("a4f6"),k=Object(m["a"])(p,d,u,!1,null,"67738b4c",null),j=k.exports;h()(k,{VCalendar:b["a"]});var w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-calendar",{attrs:{type:"day",start:e.date,dark:e.dark,events:e.events,"event-color":e.getColor}})},g=[];window.moment=n("c1df");var _={name:"Day",methods:{getColor:function(e){return e.color}},props:{events:Array,date:String,dark:Boolean,weekdays:Array},data:function(){return{}}},y=_,T=Object(m["a"])(y,w,g,!1,null,"fd503422",null),C=T.exports;h()(T,{VCalendar:b["a"]});var x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-calendar",{attrs:{type:"week",weekdays:e.weekdays,start:e.date,dark:e.dark,events:e.events,"event-color":e.getColor},on:{"click:date":e.toDate}})},D=[];window.moment=n("c1df");var U={name:"Week",props:{date:String,dark:Boolean,weekdays:Array,events:Array},data:function(){return{}},methods:{getColor:function(e){return e.color},toDate:function(e){this.$emit("changeDate",e.date)}}},V=U,O=Object(m["a"])(V,x,D,!1,null,"3bf1b780",null),S=O.exports;h()(O,{VCalendar:b["a"]}),a["a"].use(l["a"]);var $=[{path:"/",alias:"/month",name:"Calendar",component:j},{path:"/day",name:"Day",component:C},{path:"/week",name:"Week",component:S}],E=new l["a"]({routes:$}),z=E,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.active?n("v-dialog",{attrs:{persistent:"","max-width":"500"},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[e._v("Create New Calendar")]),n("v-card-subtitle",[e._v("Create and share your events or reminders")]),n("v-card-text",[n("v-label",[e._v("Information")]),n("v-row",[n("v-col",[n("v-text-field",{attrs:{label:"Title",placeholder:"Choose a title for your new calendar",outlined:"","prepend-icon":"mdi-calendar-today"},model:{value:e.calendar_title,callback:function(t){e.calendar_title=t},expression:"calendar_title"}}),n("v-select",{attrs:{items:e.zones,"menu-props":"auto",label:"Time Zone",outlined:"","prepend-icon":"mdi-clock-outline"},model:{value:e.calendar_tz,callback:function(t){e.calendar_tz=t},expression:"calendar_tz"}}),n("v-select",{attrs:{items:["Public","Private"],"menu-props":"auto",label:"Type",outlined:"","prepend-icon":"Private"===e.calendar_type?"mdi-lock":"mdi-earth"},model:{value:e.calendar_type,callback:function(t){e.calendar_type=t},expression:"calendar_type"}}),"Private"!==e.calendar_type||e.user.signed?e._e():n("v-alert",{attrs:{type:"error"}},[e._v(" Only registered users can create private calendars ")]),e.error.length>0?n("v-alert",{attrs:{type:"error"}},[e._v(" "+e._s(e.error)+" ")]):e._e()],1)],1)],1),n("v-card-actions",[e.user.signed?e._e():n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:e.join}},[e._v("Sign In")]),n("v-spacer"),n("v-btn",{attrs:{color:"green darken-1",text:"",loading:e.submit,disabled:"Private"===e.calendar_type&&!e.user.signed},on:{click:e.create}},[e._v("Create ")])],1)],1)],1):e._e()},M=[],A=(n("5319"),"https://tash.wtf"),Y={props:{active:Boolean,user:Object},data:function(){return{error:"",valid:!1,password:"",calendar_type:"Public",show:!1,submit:!1,calendar_title:"Open Calendar",calendar_tz:"",zones:["UTC-12:00","UTC-11:00","UTC-10:00","UTC-09:30","UTC-09:00","UTC-08:00","UTC-07:00","UTC-06:00","UTC-05:00","UTC-04:30","UTC-04:00","UTC-03:30","UTC-03:00","UTC-02:00","UTC-01:00","UTC+00:00","UTC+01:00","UTC+02:00","UTC+03:00","UTC+03:30","UTC+04:00","UTC+04:30","UTC+05:00","UTC+05:30","UTC+05:45","UTC+06:00","UTC+06:30","UTC+07:00","UTC+08:00","UTC+08:45","UTC+09:00","UTC+09:30","UTC+10:00","UTC+10:30","UTC+11:00","UTC+11:30","UTC+12:00","UTC+12:45","UTC+13:00","UTC+14:00"]}},mounted:function(){"/"!==z.currentRoute.path&&z.push("/");var e=(new Date).toTimeString().split(" ")[1];e=e.substr(e.length-4);var t,n=Object(s["a"])(this.zones);try{for(n.s();!(t=n.n()).done;){var a=t.value;a.substr(a.length-5).replace(":","")===e&&(this.calendar_tz=a)}}catch(r){n.e(r)}finally{n.f()}},methods:{apiCreateCalendar:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={title:this.calendar_title,timezone:this.calendar_tz,type:"Public"===this.calendar_type},e.next=3,fetch(A+"/api/calendar",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)});case 3:return a=e.sent,e.next=6,a.json();case 6:a=e.sent,console.log(a),a.error?(this.error=a.error,this.submit=!1):window.location=A+"/app:"+a._id;case 9:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),create:function(){this.error="";var e={type:this.calendar_type,title:this.calendar_title,zone:this.calendar_tz};this.submit=!0,this.apiCreateCalendar(e)},join:function(){window.location=A+"/auth/mail/login"},close:function(){this.$emit("close")}},name:"NewDialog"},I=Y,R=(n("888c"),n("0798")),N=n("8336"),B=n("b0af"),F=n("99d9"),L=n("62ad"),J=n("169a"),Z=n("24c9"),q=n("0fd9"),W=n("b974"),H=n("2fa4"),K=n("8654"),G=Object(m["a"])(I,P,M,!1,null,"f1895a22",null),Q=G.exports;h()(G,{VAlert:R["a"],VBtn:N["a"],VCard:B["a"],VCardActions:F["a"],VCardSubtitle:F["b"],VCardText:F["c"],VCardTitle:F["d"],VCol:L["a"],VDialog:J["a"],VLabel:Z["a"],VRow:q["a"],VSelect:W["a"],VSpacer:H["a"],VTextField:K["a"]});var X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{"max-width":"500"},on:{"click:outside":e.close},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[n("v-tabs",{staticClass:"elevation-2",attrs:{dark:e.dark,centered:"",grow:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[n("v-tabs-slider"),n("v-tab",[e._v(" "+e._s(e.$t("app.event"))+" ")]),n("v-tab-item",[n("TypeEvent",{attrs:{cal:e.cal,type:void 0===e.event._id?"new":"edit",eventOld:e.event},on:{update:function(t){return e.update()},close:e.close}})],1)],1)],1)},ee=[],te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"card",attrs:{flat:"",tile:""}},[e.error.length>0?n("v-alert",{attrs:{type:"error"}},[e._v(" "+e._s(e.error)+" ")]):e._e(),"new"===e.type?n("v-btn",{attrs:{text:"",disabled:""}},[e._v("Create New Event")]):e._e(),"edit"===e.type?n("v-btn",{attrs:{text:"",disabled:""}},[e._v("Edit Event")]):e._e(),n("v-row",[n("v-col",[n("v-text-field",{attrs:{placeholder:"Title",label:"Title",outlined:"",rules:e.text_rule},model:{value:e.event.title,callback:function(t){e.$set(e.event,"title",t)},expression:"event.title"}}),n("v-row",[n("v-col",{attrs:{cols:"3"}},[n("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":e.date,transition:"scale-transition","offset-y":"","min-width":"290px"},on:{"update:returnValue":function(t){e.date=t},"update:return-value":function(t){e.date=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-text-field",e._g({attrs:{label:"Start Date",readonly:""},model:{value:e.event.startDate,callback:function(t){e.$set(e.event,"startDate",t)},expression:"event.startDate"}},a))]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[n("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:e.event.startDate,callback:function(t){e.$set(e.event,"startDate",t)},expression:"event.startDate"}},[n("v-spacer"),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.menu=!1}}},[e._v("Cancel")]),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.menu.save(e.date)}}},[e._v("OK")])],1)],1)],1),n("v-col",{attrs:{cols:"3"}},[n("v-menu",{ref:"menu2",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.event.startTime,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(t){return e.$set(e.event,"startTime",t)},"update:return-value":function(t){return e.$set(e.event,"startTime",t)}},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-text-field",e._g({attrs:{label:"Start Time",readonly:""},model:{value:e.event.startTime,callback:function(t){e.$set(e.event,"startTime",t)},expression:"event.startTime"}},a))]}}]),model:{value:e.menu2,callback:function(t){e.menu2=t},expression:"menu2"}},[e.menu2?n("v-time-picker",{attrs:{format:"24h","full-width":""},on:{"click:minute":function(t){return e.$refs.menu2.save(e.event.startTime)}},model:{value:e.event.startTime,callback:function(t){e.$set(e.event,"startTime",t)},expression:"event.startTime"}}):e._e()],1)],1),n("v-col",{attrs:{cols:"3"}},[n("v-menu",{ref:"menu3",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.event.endTime,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(t){return e.$set(e.event,"endTime",t)},"update:return-value":function(t){return e.$set(e.event,"endTime",t)}},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-text-field",e._g({attrs:{label:"End Time",readonly:""},model:{value:e.event.endTime,callback:function(t){e.$set(e.event,"endTime",t)},expression:"event.endTime"}},a))]}}]),model:{value:e.menu3,callback:function(t){e.menu3=t},expression:"menu3"}},[e.menu3?n("v-time-picker",{attrs:{format:"24h","full-width":""},on:{"click:minute":function(t){return e.$refs.menu3.save(e.event.endTime)}},model:{value:e.event.endTime,callback:function(t){e.$set(e.event,"endTime",t)},expression:"event.endTime"}}):e._e()],1)],1),n("v-col",{attrs:{cols:"3"}},[n("v-menu",{ref:"menu4",attrs:{"close-on-content-click":!1,"return-value":e.date,transition:"scale-transition","offset-y":"","min-width":"290px"},on:{"update:returnValue":function(t){e.date=t},"update:return-value":function(t){e.date=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-text-field",e._g({attrs:{label:"End Date",readonly:""},model:{value:e.event.endDate,callback:function(t){e.$set(e.event,"endDate",t)},expression:"event.endDate"}},a))]}}]),model:{value:e.menu4,callback:function(t){e.menu4=t},expression:"menu4"}},[n("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:e.event.endDate,callback:function(t){e.$set(e.event,"endDate",t)},expression:"event.endDate"}},[n("v-spacer"),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.menu4=!1}}},[e._v("Cancel")]),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.menu4.save(e.event.endDate)}}},[e._v("OK")])],1)],1)],1)],1),n("v-text-field",{attrs:{outlined:"",placeholder:"Location",label:"Location","prepend-icon":"mdi-map"},model:{value:e.event.location,callback:function(t){e.$set(e.event,"location",t)},expression:"event.location"}}),n("div",{staticClass:"notes"},[n("v-btn",{attrs:{text:"",disabled:""}},[e._v("Notes")]),n("v-textarea",{attrs:{outlined:"",label:"Note","no-resize":""},model:{value:e.event.notes,callback:function(t){e.$set(e.event,"notes",t)},expression:"event.notes"}})],1),n("v-btn",{attrs:{text:"",disabled:""}},[e._v("Color")]),n("v-color-picker",{staticClass:"ma-auto",attrs:{width:"100%","hide-canvas":""},model:{value:e.event.color,callback:function(t){e.$set(e.event,"color",t)},expression:"event.color"}}),n("v-card-actions",[n("v-btn",{attrs:{depressed:"",color:"primary"},on:{click:function(t){return e.close()}}},[e._v("Close")]),n("v-spacer"),n("v-btn",{attrs:{depressed:"",color:"primary"},on:{click:function(t){return e.save()}}},[e._v("Save")])],1)],1)],1)],1)},ne=[],ae={name:"TypeEvent",props:{cal:String,type:String,eventOld:Object},data:function(){return{text_rule:[function(e){return!!e||"Name is required"}],error:"",menu:!1,menu2:!1,menu3:!1,menu4:!1,event:{color:"",title:"My Event",startDate:(new Date).toISOString().substr(0,10),endDate:(new Date).toISOString().substr(0,10),startTime:(new Date).toISOString().substr(11,5),endTime:(new Date).toISOString().substr(11,5),location:"",notes:""}}},mounted:function(){void 0!==this.eventOld.color&&(this.event.color=this.eventOld.color),void 0!==this.eventOld.title&&(this.event.title=this.eventOld.title),void 0!==this.eventOld.startDate&&(this.event.startDate=this.eventOld.startDate),void 0!==this.eventOld.endDate&&(this.event.endDate=this.eventOld.endDate),void 0!==this.eventOld.startTime&&(this.event.startTime=this.eventOld.startTime),void 0!==this.eventOld.endTime&&(this.event.endTime=this.eventOld.endTime),void 0!==this.eventOld.location&&(this.event.location=this.eventOld.location),void 0!==this.eventOld.notes&&(this.event.notes=this.eventOld.notes)},methods:{save:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t,n,a,r,i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("edit"!==this.type){e.next=12;break}return t={color:this.event.color,title:this.event.title,location:this.event.location,notes:[this.event.notes],start:this.event.startDate+"T"+this.event.startTime+":00.000Z",end:this.event.endDate+"T"+this.event.endTime+":00.000Z"},n=window.location.pathname.split(":")[1],e.next=5,fetch(A+"/api/event/"+n+this.eventOld._id,{method:"PUT",mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)});case 5:return a=e.sent,e.next=8,a.json();case 8:return a=e.sent,console.log(a),a.error?this.error=a.error||"":this.$emit("close"),e.abrupt("return");case 12:if(r={color:this.event.color,title:this.event.title,location:this.event.location,notes:[this.event.notes],start:this.event.startDate+"T"+this.event.startTime+":00.000Z",end:this.event.endDate+"T"+this.event.endTime+":00.000Z"},!(new Date(r.end)<new Date(r.start))){e.next=16;break}return this.error="Start Date cannot be later than End Date",e.abrupt("return");case 16:console.log(r),fetch(A+"/api/event/"+this.cal,{method:"POST",mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(r)}).then((function(e){return e.ok,e.json()})).then((function(e){e.error&&(i.error=e.error)})),this.$emit("update"),this.$emit("close");case 20:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),close:function(){this.$emit("close")}}},re=ae,ie=(n("6a63"),n("03a4")),se=n("2e4b"),oe=n("e449"),ce=n("a844"),le=n("c964"),de=Object(m["a"])(re,te,ne,!1,null,"a79f5f66",null),ue=de.exports;h()(de,{VAlert:R["a"],VBtn:N["a"],VCard:B["a"],VCardActions:F["a"],VCol:L["a"],VColorPicker:ie["a"],VDatePicker:se["a"],VMenu:oe["a"],VRow:q["a"],VSpacer:H["a"],VTextField:K["a"],VTextarea:ce["a"],VTimePicker:le["a"]});var ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{flat:"",tile:""}},[n("v-card-text",[e._v("reminder")])],1)},pe=[],me={name:"TypeReminder"},fe=me,he=Object(m["a"])(fe,ve,pe,!1,null,"5de35272",null),be=he.exports;h()(he,{VCard:B["a"],VCardText:F["c"]});var ke={name:"NewEvent",components:{TypeReminder:be,TypeEvent:ue},props:{cal:String,dark:Boolean,active:Boolean,event:Object},data:function(){return{tab:null,tabs:["Event","Reminder","Task"]}},methods:{close:function(){this.$emit("update"),this.$emit("close")},update:function(){return this.$emit("update")}}},je=ke,we=n("71a3"),ge=n("c671"),_e=n("fe57"),ye=n("9a96"),Te=Object(m["a"])(je,X,ee,!1,null,"faa32868",null),Ce=Te.exports;h()(Te,{VDialog:J["a"],VTab:we["a"],VTabItem:ge["a"],VTabs:_e["a"],VTabsSlider:ye["a"]});var xe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{"max-width":"500",persistent:""},on:{"click:outside":function(t){return e.close()}},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[n("v-card",{attrs:{dark:e.dark}},[n("v-card-title",{staticClass:"headline"},[e._v("Edit Calendar")]),n("v-card-text",[n("v-label",[e._v("Information")]),n("v-row",[n("v-col",[n("v-text-field",{attrs:{label:"Title",placeholder:"Choose a title for your new calendar",outlined:"","prepend-icon":"mdi-calendar-today"},model:{value:e.calendar.title,callback:function(t){e.$set(e.calendar,"title",t)},expression:"calendar.title"}}),n("v-select",{attrs:{items:e.zones,"menu-props":"auto",label:"Time Zone",outlined:"","prepend-icon":"mdi-clock-outline"},model:{value:e.calendar.timezone,callback:function(t){e.$set(e.calendar,"timezone",t)},expression:"calendar.timezone"}}),n("v-select",{attrs:{items:["Public","Private"],"menu-props":"auto",label:"Type",outlined:"","prepend-icon":e.calendar.type?"mdi-earth":"mdi-lock"},model:{value:e.calendar_type,callback:function(t){e.calendar_type=t},expression:"calendar_type"}}),e.error.length>0?n("v-alert",{attrs:{type:"error"}},[e._v(" "+e._s(e.error)+" ")]):e._e(),e.success?n("v-alert",{attrs:{type:"success"}},[e._v(" "+e._s(e.$t("app.saved"))+" ")]):e._e()],1)],1)],1),n("v-card-actions",[n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){return e.$emit("close")}}},[e._v("Close")]),n("v-spacer"),n("v-btn",{attrs:{color:"green darken-1",text:"",loading:e.deleting},on:{click:e.deleteCal}},[e._v("Delete Calendar")]),n("v-spacer"),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:e.save}},[e._v("Save ")])],1)],1)],1)},De=[],Ue={name:"Settings",props:{active:Boolean,cal:String,dark:Boolean},mounted:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=window.location.pathname.split(":")[1],void 0!=n){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,fetch(A+"/api/calendar/"+n);case 5:return t.next=7,t.sent.json();case 7:e.calendar=t.sent,e.calendar_type=e.calendar.type?"Public":"Private";case 9:case"end":return t.stop()}}),t)})))()},data:function(){return{deleting:!1,error:"",success:!1,calendar:{},calendar_type:"Private",zones:["UTC-12:00","UTC-11:00","UTC-10:00","UTC-09:30","UTC-09:00","UTC-08:00","UTC-07:00","UTC-06:00","UTC-05:00","UTC-04:30","UTC-04:00","UTC-03:30","UTC-03:00","UTC-02:00","UTC-01:00","UTC+00:00","UTC+01:00","UTC+02:00","UTC+03:00","UTC+03:30","UTC+04:00","UTC+04:30","UTC+05:00","UTC+05:30","UTC+05:45","UTC+06:00","UTC+06:30","UTC+07:00","UTC+08:00","UTC+08:45","UTC+09:00","UTC+09:30","UTC+10:00","UTC+10:30","UTC+11:00","UTC+11:30","UTC+12:00","UTC+12:45","UTC+13:00","UTC+14:00"]}},methods:{deleteCal:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.deleting=!0,this.success=!1,this.error="",e.next=5,fetch(A+"/api/calendar/"+this.calendar._id,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}});case 5:return t=e.sent,e.next=8,t.json();case 8:t=e.sent,console.log(t),t.error?(this.error=t.error,this.submit=!1):window.location=A+"/app";case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),close:function(){this.$emit("close")},save:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.success=!1,this.error="",this.calendar.type="Public"===this.calendar_type,e.next=5,fetch(A+"/api/calendar/"+this.calendar._id,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(this.calendar)});case 5:return t=e.sent,console.log(1),e.next=9,t.json();case 9:t=e.sent,t.error?this.error=t.error:(this.calendar=t,this.$emit("update"),this.success=!0);case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},Ve=Ue,Oe=Object(m["a"])(Ve,xe,De,!1,null,"ce85c0aa",null),Se=Oe.exports;h()(Oe,{VAlert:R["a"],VBtn:N["a"],VCard:B["a"],VCardActions:F["a"],VCardText:F["c"],VCardTitle:F["d"],VCol:L["a"],VDialog:J["a"],VLabel:Z["a"],VRow:q["a"],VSelect:W["a"],VSpacer:H["a"],VTextField:K["a"]});var $e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.active?n("v-dialog",{attrs:{persistent:"","max-width":"500"},on:{"click:outside":e.close},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[e._v("Invite people to calendar")]),n("v-card-subtitle",[e._v("Type e-mail to invite people. This action does not send e-mail, but just adds mail to list of members. ")]),n("v-card-text",[e.error.length>0?n("v-alert",{attrs:{type:"error"}},[e._v(" "+e._s(e.error)+" ")]):e._e(),n("v-text-field",{attrs:{"menu-props":"auto",label:"E-mail",placeholder:"E-mail",outlined:"","prepend-icon":"mdi-email"},model:{value:e.mail,callback:function(t){e.mail=t},expression:"mail"}}),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:e.invite}},[e._v("Invite")])],1)],1)],1):e._e()},Ee=[],ze={name:"Invite",props:{active:Boolean,app:String},data:function(){return{mail:"",error:""}},methods:{invite:function(){var e=this;fetch(A+"/api/invite/"+this.app+"/"+this.mail,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.ok,e.json()})).then((function(t){console.log(t),e.error=t.error||""}))},close:function(){this.$emit("close")}}},Pe=ze,Me=Object(m["a"])(Pe,$e,Ee,!1,null,"9290bde2",null),Ae=Me.exports;h()(Me,{VAlert:R["a"],VBtn:N["a"],VCard:B["a"],VCardSubtitle:F["b"],VCardText:F["c"],VCardTitle:F["d"],VDialog:J["a"],VTextField:K["a"]}),window.moment=n("7f45");var Ye={API:A,invite:!1,settings_link:!1,new_event:!1,user:{signed:!1,mail:"anonymous"},help:!1,people:[],title:"Open Calendar",dark:!1,drawer:!1,menu:!1,active:window.location.href.split("#/")[1].split("?")[0]||"month",views:{month:"mdi-view-module",week:"mdi-view-carousel",day:"mdi-view-agenda"},now:moment().format("YYYY-MM-DD"),weekdays:[1,2,3,4,5,6,0],calendar:{},dialog:!1,events:[],activeEvent:{}},Ie={name:"App",components:{NewDialog:Q,NewEvent:Ce,Settings:Se,Invite:Ae},data:function(){return Ye},mounted:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,a,r,i,c,l,d,u,v,p;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(A+"/api/user",{cache:"no-cache"});case 2:return t.next=4,t.sent.json();case 4:if(n=t.sent,a=n.user.google_mail||n.user.mail,"anonymous"!==a&&(Ye.user=Object(o["a"])(Object(o["a"])({},n.user),{},{signed:!0})),r=window.location.pathname.split(":")[1],!r){t.next=47;break}return e.dialog=!1,e.calendar={_id:r},t.next=13,fetch(A+"/api/calendar/"+r);case 13:return t.next=15,t.sent.json();case 15:e.calendar=t.sent,e.now=z.currentRoute.query.date||moment().format("YYYY-MM-DD"),e.calendar.error&&(window.location=A+"/app"),e.events=[],i=[],c=Object(s["a"])(e.calendar.members),t.prev=21,c.s();case 23:if((l=c.n()).done){t.next=34;break}return d=l.value,t.t0=i,t.next=28,fetch(A+"/api/user/"+d.user);case 28:return t.next=30,t.sent.json();case 30:t.t1=t.sent.user,t.t0.push.call(t.t0,t.t1);case 32:t.next=23;break;case 34:t.next=39;break;case 36:t.prev=36,t.t2=t["catch"](21),c.e(t.t2);case 39:return t.prev=39,c.f(),t.finish(39);case 42:e.people=i,u=Object(s["a"])(e.calendar.events);try{for(u.s();!(v=u.n()).done;)p=v.value,e.events.push({key:p._id,name:p.title,color:p.color,location:p.location,title:p.title,notes:p.notes,start:e.formatDate(new Date(p.start),!0),end:e.formatDate(new Date(p.end),!0)})}catch(m){u.e(m)}finally{u.f()}t.next=48;break;case 47:e.dialog=!0;case 48:case"end":return t.stop()}}),t,null,[[21,36,39,42]])})))()},methods:{formatDate:function(e,t){return t?"".concat(e.getFullYear(),"-").concat(e.getMonth()<10?"0"+(e.getMonth()+1):e.getMonth()+1,"-").concat(e.getDate()," ").concat(e.getHours(),":").concat(e.getMinutes()):"".concat(e.getFullYear(),"-").concat(e.getMonth()<10?"0"+(e.getMonth()+1):e.getMonth()+1,"-").concat(e.getDate())},showNewEvent:function(){this.activeEvent={},this.new_event=!0},updateCal:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var n,a,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=window.location.pathname.split(":")[1],!n){e.next=15;break}return this.dialog=!1,this.calendar={_id:n},e.next=6,fetch(A+"/api/calendar/"+n);case 6:return e.next=8,e.sent.json();case 8:this.calendar=e.sent,this.calendar.error&&(window.location=A+"/app"),this.events=[],a=Object(s["a"])(this.calendar.events);try{for(a.s();!(r=a.n()).done;)i=r.value,this.events.push({key:i._id,name:i.title,color:i.color,location:i.location,title:i.title,notes:i.notes,start:this.formatDate(new Date(i.start),!0),end:this.formatDate(new Date(i.end),!0)})}catch(t){a.e(t)}finally{a.f()}e.next=16;break;case 15:window.location=A+"/auth/mail/login";case 16:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),changeDate:function(e){this.now=e,this.changeView("day")},today:function(){this.now=moment().format("YYYY-MM-DD"),z.currentRoute.fullPath!=="/"+this.active+"?date="+this.now&&z.push("/"+this.active+"?date="+this.now)},openEvent:function(e){var t=this.calendar.events.filter((function(t){return t._id===e}))[0];void 0!==t&&(this.new_event=!0,t.notes=t.notes.map((function(e){return e.text})).join("\n"),t.startDate=moment(new Date(t.start)).format("YYYY-MM-DD"),t.endDate=moment(new Date(t.end)).format("YYYY-MM-DD"),t.startTime=moment(new Date(t.start)).format("hh:mm"),t.endTime=moment(new Date(t.end)).format("hh:mm"),console.log(t),this.activeEvent=t)},add:function(e){this.now=moment(this.now,"YYYY-MM-DD").add(e,"m"===this.active[0]?this.active[0].toUpperCase():this.active[0]).format("YYYY-MM-DD"),z.currentRoute.fullPath!=="/"+this.active+"?date="+this.now&&z.push("/"+this.active+"?date="+this.now)},showSettings:function(){this.settings_link=!0},changeView:function(e){this.active=e,z.currentRoute.path.split("/")[1]!==e&&z.push(e+"?date="+this.now)}}},Re=Ie,Ne=(n("034f"),n("7496")),Be=n("40dc"),Fe=n("5bc1"),Le=n("a75b"),Je=n("ce7e"),Ze=n("132d"),qe=n("8860"),We=n("da13"),He=n("5d23"),Ke=n("34c3"),Ge=n("f774"),Qe=n("b73d"),Xe=Object(m["a"])(Re,r,i,!1,null,null,null),et=Xe.exports;h()(Xe,{VApp:Ne["a"],VAppBar:Be["a"],VAppBarNavIcon:Fe["a"],VBtn:N["a"],VContent:Le["a"],VDivider:Je["a"],VIcon:Ze["a"],VList:qe["a"],VListItem:We["a"],VListItemContent:He["a"],VListItemIcon:Ke["a"],VListItemSubtitle:He["b"],VListItemTitle:He["c"],VMenu:oe["a"],VNavigationDrawer:Ge["a"],VSpacer:H["a"],VSwitch:Qe["a"]});var tt=n("f309");a["a"].use(tt["a"]);var nt=new tt["a"]({theme:{themes:{light:{primary:"#009688",secondary:"#673ab7",accent:"#795548",error:"#f44336",warning:"#ffc107",info:"#607d8b",success:"#4caf50"},dark:{primary:"#1976D2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}}),at=n("a925"),rt=n("090b"),it=n("5620");a["a"].use(n("2ead")),a["a"].use(at["a"]);var st={en:rt,cz:it},ot=new at["a"]({locale:"en",messages:st}),ct="The .native modifier for v-on is only valid on components but it was used on <div>.";a["a"].config.warnHandler=function(e,t,n){e===ct&&(e=null,null,null)},window.App=new a["a"]({i18n:ot,router:z,vuetify:nt,render:function(e){return e(et)}}).$mount("#app")},"6a63":function(e,t,n){"use strict";var a=n("0622"),r=n.n(a);r.a},"888c":function(e,t,n){"use strict";var a=n("a22c"),r=n.n(a);r.a},"8a23":function(e,t,n){},a22c:function(e,t,n){}});
//# sourceMappingURL=app.cddbaa95.js.map