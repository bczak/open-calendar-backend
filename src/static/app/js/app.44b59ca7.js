(function(e){function t(t){for(var a,i,o=t[0],c=t[1],l=t[2],u=0,v=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&v.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(v.length)v.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},s=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var d=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("8a23"),r=n.n(a);r.a},"090b":function(e,t){e.exports={title:"Open Calendar",app:{saved:"Saved!",dark:"Dark Theme",event:"Event",today:"Today",menu:{day:"Day",week:"Week",month:"Month"},months:["January","February","March","April","May","June","July","August","September","October","November","December"]},drawer:{updates:"Updates",search:"Search",account:"Account",settings:"Settings"}}},"1f05":function(e,t,n){},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=s,e.exports=r,r.id="4678"},5620:function(e,t){e.exports={title:"Open Calendar",app:{today:"Dnes",menu:["Den","Týden","Měsíc"]}}},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:"",elevation:"0",dark:e.dark,"clipped-left":""}},[n("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!e.drawer}}}),n("v-btn",{attrs:{icon:""},on:{click:function(t){return e.add(-1)}}},[n("v-icon",[e._v("mdi-arrow-left")])],1),n("v-btn",{attrs:{outlined:""},on:{click:function(t){return e.changeView("month")}}},[e._v(" "+e._s(e.$t("app.months["+Number(e.now.substr(5,2)-1)+"]"))+" ")]),n("v-btn",{attrs:{icon:""},on:{click:function(t){return e.add(1)}}},[n("v-icon",[e._v("mdi-arrow-right")])],1),n("v-spacer"),n("v-btn",{attrs:{depressed:"",dark:e.dark,icon:""},on:{click:e.today}},[n("v-icon",[e._v("mdi-calendar")])],1),n("v-menu",{scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-btn",e._g({attrs:{dark:e.dark,depressed:"",icon:""}},a),[n("v-icon",[e._v(e._s(e.views[e.active]))])],1)]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[n("v-list",[n("v-list-item",{on:{click:function(t){return e.changeView("day")}}},[n("v-list-item-title",[e._v(e._s(e.$t("app.menu.day")))])],1),n("v-list-item",{on:{click:function(t){return e.changeView("week")}}},[n("v-list-item-title",[e._v(e._s(e.$t("app.menu.week")))])],1),n("v-list-item",{on:{click:function(t){return e.changeView("month")}}},[n("v-list-item-title",[e._v(e._s(e.$t("app.menu.month")))])],1)],1)],1)],1),n("v-navigation-drawer",{attrs:{app:"",clipped:"",dark:e.dark},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"title"},[e._v(" "+e._s(e.calendar.title)+" ")]),n("v-list-item-subtitle",[e._v(" "+e._s(e.user.mail)+" ")])],1)],1),n("v-divider"),n("v-list",{attrs:{dense:"",nav:""}},[n("v-list-item",{attrs:{link:""}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-bell")])],1),n("v-list-item-content",[e._v(" "+e._s(e.$t("drawer.updates"))+" ")])],1),n("v-list-item",{attrs:{link:""}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-magnify")])],1),n("v-list-item-content",[e._v(" "+e._s(e.$t("drawer.search"))+" ")])],1),n("v-list-item",{attrs:{link:""}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-account-circle")])],1),n("v-list-item-content",[e._v(" "+e._s(e.$t("drawer.account"))+" ")])],1),n("v-list-item",{attrs:{link:""}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-cog")])],1),n("v-list-item-content",{on:{click:e.showSettings}},[e._v(" "+e._s(e.$t("drawer.settings"))+" ")])],1)],1),n("v-divider"),n("v-list-item",[n("v-list-item-content",[e._v(" "+e._s(e.$t("app.dark"))+" ")]),n("v-switch",{attrs:{inset:"",color:"primary"},model:{value:e.dark,callback:function(t){e.dark=t},expression:"dark"}})],1)],1),n("v-content",[n("router-view",{key:e.$route.fullPath,ref:"calendar",attrs:{date:e.now,dark:e.dark,weekdays:e.weekdays,events:e.events},on:{changeDate:function(t){return e.changeDate(t)}}}),n("NewDialog",{attrs:{active:e.dialog,user:e.user},on:{close:function(t){e.dialog=!1}}}),n("Settings",{attrs:{active:e.settings_link,cal:e.calendar._id,dark:e.dark},on:{close:function(t){e.settings_link=!1},update:function(t){return e.updateCal()}}}),n("NewEvent",{attrs:{dark:e.dark,active:e.new_event,cal:e.calendar._id},on:{update:function(t){return e.updateCal()},close:function(t){e.new_event=!1}}}),e.help?n("v-btn",{staticClass:"help-icon",attrs:{fab:"",icon:"",dark:""}},[n("v-icon",[e._v("mdi-help")])],1):e._e(),n("v-btn",{staticClass:"plus-icon",attrs:{fab:"",icon:"",dark:""},on:{click:function(t){return e.showNewEvent()}}},[n("v-icon",[e._v("mdi-plus")])],1)],1)],1)},s=[],i=(n("99af"),n("d3b7"),n("ac1f"),n("1276"),n("b85c")),o=n("5530"),c=(n("96cf"),n("1da1")),l=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-calendar",{attrs:{type:"month",start:e.date,dark:e.dark,weekdays:e.weekdays,events:e.events,"event-color":e.getColor},on:{"click:date":e.toDate}})},u=[],v={name:"Calendar",props:{events:Array,date:String,dark:Boolean,weekdays:Array},methods:{getColor:function(e){return e.color},toDate:function(e){this.$emit("changeDate",e.date)}},data:function(){return{}}},p=v,f=n("2877"),m=n("6544"),b=n.n(m),h=n("a4f6"),k=Object(f["a"])(p,d,u,!1,null,"31f245b7",null),j=k.exports;b()(k,{VCalendar:h["a"]});var w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-calendar",{attrs:{type:"day",start:e.date,dark:e.dark,events:e.events,"event-color":e.getColor}})},y=[];window.moment=n("c1df");var g={name:"Day",methods:{getColor:function(e){return e.color}},props:{events:Array,date:String,dark:Boolean,weekdays:Array},data:function(){return{}}},_=g,C=Object(f["a"])(_,w,y,!1,null,"fd503422",null),T=C.exports;b()(C,{VCalendar:h["a"]});var x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-calendar",{attrs:{type:"week",weekdays:e.weekdays,start:e.date,dark:e.dark,events:e.events,"event-color":e.getColor},on:{"click:date":e.toDate}})},U=[];window.moment=n("c1df");var D={name:"Week",props:{date:String,dark:Boolean,weekdays:Array,events:Array},data:function(){return{}},methods:{getColor:function(e){return e.color},toDate:function(e){this.$emit("changeDate",e.date)}}},V=D,S=Object(f["a"])(V,x,U,!1,null,"3bf1b780",null),$=S.exports;b()(S,{VCalendar:h["a"]}),a["a"].use(l["a"]);var O=[{path:"/",alias:"/month",name:"Calendar",component:j},{path:"/day",name:"Day",component:T},{path:"/week",name:"Week",component:$}],z=new l["a"]({routes:O}),E=z,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.active?n("v-dialog",{attrs:{persistent:"","max-width":"500"},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[e._v("Create New Calendar")]),n("v-card-subtitle",[e._v("Create and share your events or reminders")]),n("v-card-text",[n("v-label",[e._v("Information")]),n("v-row",[n("v-col",[n("v-text-field",{attrs:{label:"Title",placeholder:"Choose a title for your new calendar",outlined:"","prepend-icon":"mdi-calendar-today"},model:{value:e.calendar_title,callback:function(t){e.calendar_title=t},expression:"calendar_title"}}),n("v-select",{attrs:{items:e.zones,"menu-props":"auto",label:"Time Zone",outlined:"","prepend-icon":"mdi-clock-outline"},model:{value:e.calendar_tz,callback:function(t){e.calendar_tz=t},expression:"calendar_tz"}}),n("v-select",{attrs:{items:["Public","Private"],"menu-props":"auto",label:"Type",outlined:"","prepend-icon":"Private"===e.calendar_type?"mdi-lock":"mdi-earth"},model:{value:e.calendar_type,callback:function(t){e.calendar_type=t},expression:"calendar_type"}}),"Private"!==e.calendar_type||e.user.signed?e._e():n("v-alert",{attrs:{type:"error"}},[e._v(" Only registered users can create private calendars ")]),e.error.length>0?n("v-alert",{attrs:{type:"error"}},[e._v(" "+e._s(e.error)+" ")]):e._e()],1)],1)],1),n("v-card-actions",[e.user.signed?e._e():n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:e.join}},[e._v("Sign In")]),n("v-spacer"),n("v-btn",{attrs:{color:"green darken-1",text:"",loading:e.submit,disabled:"Private"===e.calendar_type&&!e.user.signed},on:{click:e.create}},[e._v("Create ")])],1)],1)],1):e._e()},A=[],M=(n("5319"),"http://localhost:8080"),R={props:{active:Boolean,user:Object},data:function(){return{error:"",valid:!1,password:"",calendar_type:"Public",show:!1,submit:!1,calendar_title:"Open Calendar",calendar_tz:"",zones:["UTC-12:00","UTC-11:00","UTC-10:00","UTC-09:30","UTC-09:00","UTC-08:00","UTC-07:00","UTC-06:00","UTC-05:00","UTC-04:30","UTC-04:00","UTC-03:30","UTC-03:00","UTC-02:00","UTC-01:00","UTC+00:00","UTC+01:00","UTC+02:00","UTC+03:00","UTC+03:30","UTC+04:00","UTC+04:30","UTC+05:00","UTC+05:30","UTC+05:45","UTC+06:00","UTC+06:30","UTC+07:00","UTC+08:00","UTC+08:45","UTC+09:00","UTC+09:30","UTC+10:00","UTC+10:30","UTC+11:00","UTC+11:30","UTC+12:00","UTC+12:45","UTC+13:00","UTC+14:00"]}},mounted:function(){"/"!==E.currentRoute.path&&E.push("/");var e=(new Date).toTimeString().split(" ")[1];e=e.substr(e.length-4);var t,n=Object(i["a"])(this.zones);try{for(n.s();!(t=n.n()).done;){var a=t.value;a.substr(a.length-5).replace(":","")===e&&(this.calendar_tz=a)}}catch(r){n.e(r)}finally{n.f()}},methods:{apiCreateCalendar:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={title:this.calendar_title,timezone:this.calendar_tz,type:"Public"===this.calendar_type},e.next=3,fetch(M+"/api/calendar",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)});case 3:return a=e.sent,e.next=6,a.json();case 6:a=e.sent,console.log(a),a.error?(this.error=a.error,this.submit=!1):window.location=M+"/app:"+a._id;case 9:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),create:function(){this.error="";var e={type:this.calendar_type,title:this.calendar_title,zone:this.calendar_tz};this.submit=!0,this.apiCreateCalendar(e)},join:function(){window.location=M+"/auth/mail/login"},close:function(){this.$emit("close")}},name:"NewDialog"},N=R,Y=(n("888c"),n("0798")),I=n("8336"),B=n("b0af"),F=n("99d9"),L=n("62ad"),J=n("169a"),q=n("24c9"),Z=n("0fd9"),W=n("b974"),H=n("2fa4"),K=n("8654"),G=Object(f["a"])(N,P,A,!1,null,"f1895a22",null),Q=G.exports;b()(G,{VAlert:Y["a"],VBtn:I["a"],VCard:B["a"],VCardActions:F["a"],VCardSubtitle:F["b"],VCardText:F["c"],VCardTitle:F["d"],VCol:L["a"],VDialog:J["a"],VLabel:q["a"],VRow:Z["a"],VSelect:W["a"],VSpacer:H["a"],VTextField:K["a"]});var X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{"max-width":"500"},on:{"click:outside":e.close},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[n("v-tabs",{staticClass:"elevation-2",attrs:{dark:e.dark,centered:"",grow:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[n("v-tabs-slider"),n("v-tab",[e._v(" "+e._s(e.$t("app.event"))+" ")]),n("v-tab-item",[n("TypeEvent",{attrs:{cal:e.cal},on:{update:function(t){return e.update()},close:e.close}})],1)],1)],1)},ee=[],te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"card",attrs:{flat:"",tile:""}},[e.error.length>0?n("v-alert",{attrs:{type:"error"}},[e._v(" "+e._s(e.error)+" ")]):e._e(),n("v-btn",{attrs:{text:"",disabled:""}},[e._v("Create New Event")]),n("v-row",[n("v-col",[n("v-text-field",{attrs:{placeholder:"Title",label:"Title",outlined:"",rules:e.text_rule},model:{value:e.event.title,callback:function(t){e.$set(e.event,"title",t)},expression:"event.title"}}),n("v-row",[n("v-col",{attrs:{cols:"3"}},[n("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":e.date,transition:"scale-transition","offset-y":"","min-width":"290px"},on:{"update:returnValue":function(t){e.date=t},"update:return-value":function(t){e.date=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-text-field",e._g({attrs:{label:"Start Date",readonly:""},model:{value:e.event.startDate,callback:function(t){e.$set(e.event,"startDate",t)},expression:"event.startDate"}},a))]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[n("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:e.event.startDate,callback:function(t){e.$set(e.event,"startDate",t)},expression:"event.startDate"}},[n("v-spacer"),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.menu=!1}}},[e._v("Cancel")]),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.menu.save(e.date)}}},[e._v("OK")])],1)],1)],1),n("v-col",{attrs:{cols:"3"}},[n("v-menu",{ref:"menu2",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.event.startTime,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(t){return e.$set(e.event,"startTime",t)},"update:return-value":function(t){return e.$set(e.event,"startTime",t)}},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-text-field",e._g({attrs:{label:"Start Time",readonly:""},model:{value:e.event.startTime,callback:function(t){e.$set(e.event,"startTime",t)},expression:"event.startTime"}},a))]}}]),model:{value:e.menu2,callback:function(t){e.menu2=t},expression:"menu2"}},[e.menu2?n("v-time-picker",{attrs:{format:"24h","full-width":""},on:{"click:minute":function(t){return e.$refs.menu2.save(e.event.startTime)}},model:{value:e.event.startTime,callback:function(t){e.$set(e.event,"startTime",t)},expression:"event.startTime"}}):e._e()],1)],1),n("v-col",{attrs:{cols:"3"}},[n("v-menu",{ref:"menu3",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.event.endTime,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(t){return e.$set(e.event,"endTime",t)},"update:return-value":function(t){return e.$set(e.event,"endTime",t)}},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-text-field",e._g({attrs:{label:"End Time",readonly:""},model:{value:e.event.endTime,callback:function(t){e.$set(e.event,"endTime",t)},expression:"event.endTime"}},a))]}}]),model:{value:e.menu3,callback:function(t){e.menu3=t},expression:"menu3"}},[e.menu3?n("v-time-picker",{attrs:{format:"24h","full-width":""},on:{"click:minute":function(t){return e.$refs.menu3.save(e.event.endTime)}},model:{value:e.event.endTime,callback:function(t){e.$set(e.event,"endTime",t)},expression:"event.endTime"}}):e._e()],1)],1),n("v-col",{attrs:{cols:"3"}},[n("v-menu",{ref:"menu4",attrs:{"close-on-content-click":!1,"return-value":e.date,transition:"scale-transition","offset-y":"","min-width":"290px"},on:{"update:returnValue":function(t){e.date=t},"update:return-value":function(t){e.date=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-text-field",e._g({attrs:{label:"End Date",readonly:""},model:{value:e.event.endDate,callback:function(t){e.$set(e.event,"endDate",t)},expression:"event.endDate"}},a))]}}]),model:{value:e.menu4,callback:function(t){e.menu4=t},expression:"menu4"}},[n("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:e.event.endDate,callback:function(t){e.$set(e.event,"endDate",t)},expression:"event.endDate"}},[n("v-spacer"),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.menu4=!1}}},[e._v("Cancel")]),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.menu4.save(e.event.endDate)}}},[e._v("OK")])],1)],1)],1)],1),n("v-text-field",{attrs:{outlined:"",placeholder:"Location",label:"Location","prepend-icon":"mdi-map"},model:{value:e.event.location,callback:function(t){e.$set(e.event,"location",t)},expression:"event.location"}}),n("div",{staticClass:"notes"},[n("v-btn",{attrs:{text:"",disabled:""}},[e._v("Notes")]),n("v-textarea",{attrs:{outlined:"",label:"Note","no-resize":""},model:{value:e.event.notes,callback:function(t){e.$set(e.event,"notes",t)},expression:"event.notes"}})],1),n("v-btn",{attrs:{text:"",disabled:""}},[e._v("Color")]),n("v-color-picker",{staticClass:"ma-auto",attrs:{"hide-canvas":""},model:{value:e.event.color,callback:function(t){e.$set(e.event,"color",t)},expression:"event.color"}}),n("v-card-actions",[n("v-btn",{attrs:{depressed:"",color:"primary"},on:{click:function(t){return e.close()}}},[e._v("Close")]),n("v-spacer"),n("v-btn",{attrs:{depressed:"",color:"primary"},on:{click:function(t){return e.save()}}},[e._v("Save")])],1)],1)],1)],1)},ne=[],ae={name:"TypeEvent",props:{cal:String},data:function(){return{text_rule:[function(e){return!!e||"Name is required"}],error:"",menu:!1,menu2:!1,menu3:!1,menu4:!1,event:{color:"",title:"My Event",startDate:(new Date).toISOString().substr(0,10),endDate:(new Date).toISOString().substr(0,10),startTime:(new Date).toISOString().substr(11,5),endTime:(new Date).toISOString().substr(11,5),location:"",notes:""}}},methods:{save:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t={color:this.event.color,title:this.event.title,location:this.event.location,notes:[this.event.notes],startDate:this.event.startDate+"T"+this.event.startTime+":00.000Z",endDate:this.event.endDate+"T"+this.event.endTime+":00.000Z"},!(new Date(t.endDate)<new Date(t.startDate))){e.next=4;break}return this.error="Start Date cannot be later than End Date",e.abrupt("return");case 4:return e.prev=4,e.next=7,fetch(M+"/api/event/"+this.cal,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)});case 7:n=e.sent,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](4),console.log(e.t0);case 13:return e.next=15,n.json();case 15:if(n=e.sent,!n.error){e.next=19;break}return this.error=n.error,e.abrupt("return");case 19:this.$emit("update"),this.$emit("close");case 21:case"end":return e.stop()}}),e,this,[[4,10]])})));function t(){return e.apply(this,arguments)}return t}(),close:function(){this.$emit("close")}}},re=ae,se=(n("9f13"),n("03a4")),ie=n("2e4b"),oe=n("e449"),ce=n("a844"),le=n("c964"),de=Object(f["a"])(re,te,ne,!1,null,"e5785566",null),ue=de.exports;b()(de,{VAlert:Y["a"],VBtn:I["a"],VCard:B["a"],VCardActions:F["a"],VCol:L["a"],VColorPicker:se["a"],VDatePicker:ie["a"],VMenu:oe["a"],VRow:Z["a"],VSpacer:H["a"],VTextField:K["a"],VTextarea:ce["a"],VTimePicker:le["a"]});var ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{flat:"",tile:""}},[n("v-card-text",[e._v("reminder")])],1)},pe=[],fe={name:"TypeReminder"},me=fe,be=Object(f["a"])(me,ve,pe,!1,null,"5de35272",null),he=be.exports;b()(be,{VCard:B["a"],VCardText:F["c"]});var ke={name:"NewEvent",components:{TypeReminder:he,TypeEvent:ue},props:{cal:String,dark:Boolean,active:Boolean},data:function(){return{tab:null,tabs:["Event","Reminder","Task"]}},methods:{close:function(){this.$emit("close")},update:function(){console.log("update d"),this.$emit("update")}}},je=ke,we=n("71a3"),ye=n("c671"),ge=n("fe57"),_e=n("9a96"),Ce=Object(f["a"])(je,X,ee,!1,null,"e497f658",null),Te=Ce.exports;b()(Ce,{VDialog:J["a"],VTab:we["a"],VTabItem:ye["a"],VTabs:ge["a"],VTabsSlider:_e["a"]});var xe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{"max-width":"500",persistent:""},on:{"click:outside":function(t){return e.close()}},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[n("v-card",{attrs:{dark:e.dark}},[n("v-card-title",{staticClass:"headline"},[e._v("Edit Calendar")]),n("v-card-text",[n("v-label",[e._v("Information")]),n("v-row",[n("v-col",[n("v-text-field",{attrs:{label:"Title",placeholder:"Choose a title for your new calendar",outlined:"","prepend-icon":"mdi-calendar-today"},model:{value:e.calendar.title,callback:function(t){e.$set(e.calendar,"title",t)},expression:"calendar.title"}}),n("v-select",{attrs:{items:e.zones,"menu-props":"auto",label:"Time Zone",outlined:"","prepend-icon":"mdi-clock-outline"},model:{value:e.calendar.timezone,callback:function(t){e.$set(e.calendar,"timezone",t)},expression:"calendar.timezone"}}),n("v-select",{attrs:{items:["Public","Private"],"menu-props":"auto",label:"Type",outlined:"","prepend-icon":e.calendar.type?"mdi-earth":"mdi-lock"},model:{value:e.calendar_type,callback:function(t){e.calendar_type=t},expression:"calendar_type"}}),e.error.length>0?n("v-alert",{attrs:{type:"error"}},[e._v(" "+e._s(e.error)+" ")]):e._e(),e.success?n("v-alert",{attrs:{type:"success"}},[e._v(" "+e._s(e.$t("app.saved"))+" ")]):e._e()],1)],1)],1),n("v-card-actions",[n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){return e.$emit("close")}}},[e._v("Close")]),n("v-spacer"),n("v-btn",{attrs:{color:"green darken-1",text:"",loading:e.deleting},on:{click:e.deleteCal}},[e._v("Delete Calendar")]),n("v-spacer"),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:e.save}},[e._v("Save ")])],1)],1)],1)},Ue=[],De={name:"Settings",props:{active:Boolean,cal:String,dark:Boolean},mounted:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=window.location.pathname.split(":")[1],t.next=3,fetch(M+"/api/calendar/"+n);case 3:return t.next=5,t.sent.json();case 5:e.calendar=t.sent,e.calendar_type=e.calendar.type?"Public":"Private";case 7:case"end":return t.stop()}}),t)})))()},data:function(){return{deleting:!1,error:"",success:!1,calendar:{},calendar_type:"Private",zones:["UTC-12:00","UTC-11:00","UTC-10:00","UTC-09:30","UTC-09:00","UTC-08:00","UTC-07:00","UTC-06:00","UTC-05:00","UTC-04:30","UTC-04:00","UTC-03:30","UTC-03:00","UTC-02:00","UTC-01:00","UTC+00:00","UTC+01:00","UTC+02:00","UTC+03:00","UTC+03:30","UTC+04:00","UTC+04:30","UTC+05:00","UTC+05:30","UTC+05:45","UTC+06:00","UTC+06:30","UTC+07:00","UTC+08:00","UTC+08:45","UTC+09:00","UTC+09:30","UTC+10:00","UTC+10:30","UTC+11:00","UTC+11:30","UTC+12:00","UTC+12:45","UTC+13:00","UTC+14:00"]}},methods:{deleteCal:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.deleting=!0,this.success=!1,this.error="",e.next=5,fetch(M+"/api/calendar/"+this.calendar._id,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}});case 5:return t=e.sent,e.next=8,t.json();case 8:t=e.sent,console.log(t),t.error?(this.error=t.error,this.submit=!1):window.location=M+"/app";case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),close:function(){this.$emit("close")},save:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.success=!1,this.error="",this.calendar.type="Public"===this.calendar_type,e.next=5,fetch(M+"/api/calendar/"+this.calendar._id,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(this.calendar)});case 5:return t=e.sent,console.log(1),e.next=9,t.json();case 9:t=e.sent,t.error?this.error=t.error:(this.calendar=t,this.$emit("update"),this.success=!0);case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},Ve=De,Se=Object(f["a"])(Ve,xe,Ue,!1,null,"59134b50",null),$e=Se.exports;b()(Se,{VAlert:Y["a"],VBtn:I["a"],VCard:B["a"],VCardActions:F["a"],VCardText:F["c"],VCardTitle:F["d"],VCol:L["a"],VDialog:J["a"],VLabel:q["a"],VRow:Z["a"],VSelect:W["a"],VSpacer:H["a"],VTextField:K["a"]}),window.moment=n("7f45");var Oe={settings_link:!1,new_event:!1,user:{signed:!1,mail:"anonymous"},help:!1,title:"Open Calendar",dark:!1,drawer:!1,menu:!1,active:window.location.href.split("#/")[1].split("?")[0]||"month",views:{month:"mdi-view-module",week:"mdi-view-carousel",day:"mdi-view-agenda"},now:moment().format("YYYY-MM-DD"),weekdays:[1,2,3,4,5,6,0],calendar:{},dialog:!0,events:[]},ze={name:"App",components:{NewDialog:Q,NewEvent:Te,Settings:$e},data:function(){return Oe},mounted:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,a,r,s,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(M+"/api/user");case 2:return t.next=4,t.sent.json();case 4:if(n=t.sent,"anonymous"!==n.user.mail&&(Oe.user=Object(o["a"])(Object(o["a"])({},n.user),{},{signed:!0})),a=window.location.pathname.split(":")[1],!a){t.next=19;break}return e.dialog=!1,e.calendar={_id:a},t.next=12,fetch(M+"/api/calendar/"+a);case 12:return t.next=14,t.sent.json();case 14:e.calendar=t.sent,e.calendar.error&&(window.location=M+"/app"),e.events=[],r=Object(i["a"])(e.calendar.events);try{for(r.s();!(s=r.n()).done;)c=s.value,e.events.push({name:c.title,color:c.color,start:e.formatDate(new Date(c.start),!0),end:e.formatDate(new Date(c.end),!0)})}catch(l){r.e(l)}finally{r.f()}case 19:e.now=E.currentRoute.query.date||moment().format("YYYY-MM-DD");case 20:case"end":return t.stop()}}),t)})))()},methods:{formatDate:function(e,t){return t?"".concat(e.getFullYear(),"-").concat(e.getMonth()+1,"-").concat(e.getDate()," ").concat(e.getHours(),":").concat(e.getMinutes()):"".concat(e.getFullYear(),"-").concat(e.getMonth()+1,"-").concat(e.getDate())},showNewEvent:function(){this.new_event=!0},updateCal:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var n,a,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=window.location.pathname.split(":")[1],!n){e.next=15;break}return this.dialog=!1,this.calendar={_id:n},e.next=6,fetch(M+"/api/calendar/"+n);case 6:return e.next=8,e.sent.json();case 8:this.calendar=e.sent,this.calendar.error&&(window.location=M+"/app"),this.events=[],a=Object(i["a"])(this.calendar.events);try{for(a.s();!(r=a.n()).done;)s=r.value,this.events.push({name:s.title,color:s.color,start:this.formatDate(new Date(s.start),!0),end:this.formatDate(new Date(s.end),!0)})}catch(t){a.e(t)}finally{a.f()}e.next=16;break;case 15:window.location=M+"/auth/mail/login";case 16:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),changeDate:function(e){this.now=e,this.changeView("day")},today:function(){this.now=moment().format("YYYY-MM-DD"),E.currentRoute.fullPath!=="/"+this.active+"?date="+this.now&&E.push("/"+this.active+"?date="+this.now)},add:function(e){this.now=moment(this.now,"YYYY-MM-DD").add(e,"m"===this.active[0]?this.active[0].toUpperCase():this.active[0]).format("YYYY-MM-DD"),E.currentRoute.fullPath!=="/"+this.active+"?date="+this.now&&E.push("/"+this.active+"?date="+this.now)},showSettings:function(){this.settings_link=!0},changeView:function(e){this.active=e,E.currentRoute.path.split("/")[1]!==e&&E.push(e+"?date="+this.now)}}},Ee=ze,Pe=(n("034f"),n("7496")),Ae=n("40dc"),Me=n("5bc1"),Re=n("a75b"),Ne=n("ce7e"),Ye=n("132d"),Ie=n("8860"),Be=n("da13"),Fe=n("5d23"),Le=n("34c3"),Je=n("f774"),qe=n("b73d"),Ze=Object(f["a"])(Ee,r,s,!1,null,null,null),We=Ze.exports;b()(Ze,{VApp:Pe["a"],VAppBar:Ae["a"],VAppBarNavIcon:Me["a"],VBtn:I["a"],VContent:Re["a"],VDivider:Ne["a"],VIcon:Ye["a"],VList:Ie["a"],VListItem:Be["a"],VListItemContent:Fe["a"],VListItemIcon:Le["a"],VListItemSubtitle:Fe["b"],VListItemTitle:Fe["c"],VMenu:oe["a"],VNavigationDrawer:Je["a"],VSpacer:H["a"],VSwitch:qe["a"]});var He=n("f309");a["a"].use(He["a"]);var Ke=new He["a"]({theme:{themes:{light:{primary:"#009688",secondary:"#673ab7",accent:"#795548",error:"#f44336",warning:"#ffc107",info:"#607d8b",success:"#4caf50"},dark:{primary:"#1976D2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}}),Ge=n("a925"),Qe=n("090b"),Xe=n("5620");a["a"].use(n("2ead")),a["a"].use(Ge["a"]);var et={en:Qe,cz:Xe},tt=new Ge["a"]({locale:"en",messages:et}),nt="The .native modifier for v-on is only valid on components but it was used on <div>.";a["a"].config.warnHandler=function(e,t,n){e===nt&&(e=null,null,null)},window.App=new a["a"]({i18n:tt,router:E,vuetify:Ke,render:function(e){return e(We)}}).$mount("#app")},"888c":function(e,t,n){"use strict";var a=n("a22c"),r=n.n(a);r.a},"8a23":function(e,t,n){},"9f13":function(e,t,n){"use strict";var a=n("1f05"),r=n.n(a);r.a},a22c:function(e,t,n){}});
//# sourceMappingURL=app.44b59ca7.js.map