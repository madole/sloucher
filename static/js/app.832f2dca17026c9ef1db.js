webpackJsonp([0],{"/Ao7":function(t,n){},"7Otq":function(t,n,e){t.exports=e.p+"static/img/logo.413bc71.png"},"E5Q+":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h1",[t._v(t._s(t.timeDisplay))]),t._v(" "),e("router-link",{staticClass:"link-local link",attrs:{to:"/"}},[t._v("Stop")])],1)},o=[],a={render:i,staticRenderFns:o};n.a=a},Fs8J:function(t,n,e){"use strict";var i=e("pOWt");n.a={name:"Home",components:{"time-chooser":i.a},data:function(){return{}}}},"Gp+1":function(t,n,e){"use strict";var i=e("NYxO");n.a={data:function(){return{time:60*this.$store.state.countdownTime,interval:null}},computed:{timeDisplay:function(){var t=Math.floor(this.time/60),n=this.time%60;return 0===t?n+"s":t+"m "+n+"s"}},created:function(){var t=this;this.interval=setInterval(function(){t.time=t.time-1,0===t.time&&(t.$router.push({path:"sit-up"}),t.toggleSlouch())},1e3)},methods:Object(i.b)(["toggleSlouch"]),beforeRouteLeave:function(t,n,e){clearInterval(this.interval),e()}}},M93x:function(t,n,e){"use strict";function i(t){e("zrJy")}var o=e("xJD8"),a=e("c95W"),c=e("VU/8"),s=i,r=c(o.a,a.a,!1,s,null,null);n.a=r.exports},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("7+uW"),o=e("M93x"),a=e("YaEn"),c=e("olkN");i.a.config.productionTip=!1,new i.a({el:"#app",router:a.a,template:"<App/>",components:{App:o.a},store:c.a})},QxU9:function(t,n,e){"use strict";n.a=function(){var t=new AudioContext,n=t.createOscillator();n.frequency.value=660;var e=t.createGain();e.gain.value=40,e.gain.setTargetAtTime(0,t.currentTime,.2),n.connect(e),e.connect(t.destination),n.start(t.currentTime+1),n.stop(t.currentTime+1+12*.2)}},"WHl/":function(t,n){},Wa61:function(t,n){},WiUj:function(t,n){},YaEn:function(t,n,e){"use strict";var i=e("7+uW"),o=e("/ocq"),a=e("lO7g"),c=e("ZqlF"),s=e("d83u");i.a.use(o.a),n.a=new o.a({routes:[{path:"/",name:"Home",component:a.a},{path:"/timer",name:"Timer",component:c.a},{path:"/sit-up",name:"SitUp",component:s.a}]})},ZqlF:function(t,n,e){"use strict";function i(t){e("WHl/")}var o=e("Gp+1"),a=e("E5Q+"),c=e("VU/8"),s=i,r=c(o.a,a.a,!1,s,"data-v-968158d2",null);n.a=r.exports},c95W:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("img",{attrs:{src:t.imageSrc,height:"300px"}}),t._v(" "),e("router-view")],1)},o=[],a={render:i,staticRenderFns:o};n.a=a},d83u:function(t,n,e){"use strict";function i(t){e("Wa61")}var o=e("svlv"),a=e("lKKA"),c=e("VU/8"),s=i,r=c(o.a,a.a,!1,s,"data-v-775cca6b",null);n.a=r.exports},e1Wg:function(t,n){},lKKA:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h1",[t._v("Sit up")]),t._v(" "),e("div",{staticClass:"link-container"},[e("router-link",{staticClass:"link",attrs:{to:"/timer"}},[t._v("Restart timer")]),t._v(" "),e("div",{staticClass:"divider"},[t._v("|")]),t._v(" "),e("router-link",{staticClass:"link",attrs:{to:"/"}},[t._v("Back to start")])],1)])},o=[],a={render:i,staticRenderFns:o};n.a=a},lLLf:function(t,n,e){t.exports=e.p+"static/img/non-slouch-logo.44b5c83.png"},lO7g:function(t,n,e){"use strict";function i(t){e("WiUj"),e("/Ao7")}var o=e("Fs8J"),a=e("pXvv"),c=e("VU/8"),s=i,r=c(o.a,a.a,!1,s,"data-v-5409ec7d",null);n.a=r.exports},olkN:function(t,n,e){"use strict";var i=e("7+uW"),o=e("NYxO");i.a.use(o.a);var a={countdownTime:15,slouching:!0},c={setCountdownTime:function(t,n){t.countdownTime=n},toggleSlouch:function(t){t.slouching=!t.slouching}},s={setCountdownTime:function(t,n){return(0,t.commit)("setCountdownTime",n)},toggleSlouch:function(t){return(0,t.commit)("toggleSlouch")}},r={getCountdownTime:function(t){return t.countdownTime}};n.a=new o.a.Store({state:a,getters:r,actions:s,mutations:c})},pOWt:function(t,n,e){"use strict";function i(t){e("e1Wg")}var o=e("x9Tf"),a=e("u4JI"),c=e("VU/8"),s=i,r=c(o.a,a.a,!1,s,"data-v-415ec400",null);n.a=r.exports},pXvv:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h1",[t._v("Welcome to Sloucher!")]),t._v(" "),e("div",[t._v("Set the timer to get a reminder to sit up straight. ")]),t._v(" "),e("time-chooser"),t._v(" "),e("router-link",{staticClass:"link",attrs:{to:"/timer"}},[t._v("Start")])],1)},o=[],a={render:i,staticRenderFns:o};n.a=a},svlv:function(t,n,e){"use strict";var i=e("NYxO"),o=e("QxU9");n.a={methods:Object(i.b)(["toggleSlouch"]),beforeRouteLeave:function(t,n,e){this.toggleSlouch(),e()},created:function(){Object(o.a)()}}},u4JI:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"container"},[e("div",{staticClass:"button",class:{active:5===t.$store.state.countdownTime},on:{click:function(n){t.setCountdownTime(5)}}},[t._v("5mins")]),t._v(" "),e("div",{staticClass:"button",class:{active:10===t.$store.state.countdownTime},on:{click:function(n){t.setCountdownTime(10)}}},[t._v("10mins")]),t._v(" "),e("div",{staticClass:"button",class:{active:15===t.$store.state.countdownTime},on:{click:function(n){t.setCountdownTime(15)}}},[t._v("15mins")]),t._v(" "),e("div",{staticClass:"button",class:{active:20===t.$store.state.countdownTime},on:{click:function(n){t.setCountdownTime(20)}}},[t._v("20mins")]),t._v(" "),e("div",{staticClass:"button",class:{active:30===t.$store.state.countdownTime},on:{click:function(n){t.setCountdownTime(30)}}},[t._v("30mins")])])])},o=[],a={render:i,staticRenderFns:o};n.a=a},x9Tf:function(t,n,e){"use strict";var i=e("NYxO");n.a={data:function(){return{}},methods:Object(i.b)(["setCountdownTime"])}},xJD8:function(t,n,e){"use strict";var i=e("7Otq"),o=e.n(i),a=e("lLLf"),c=e.n(a);n.a={name:"app",data:function(){return{}},computed:{imageSrc:function(){return this.$store.state.slouching?o.a:c.a}}}},zrJy:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.832f2dca17026c9ef1db.js.map