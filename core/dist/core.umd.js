(function(e,o){typeof exports=="object"&&typeof module<"u"?module.exports=o(require("vue")):typeof define=="function"&&define.amd?define(["vue"],o):(e=typeof globalThis<"u"?globalThis:e||self,e.Core=o(e.Vue))})(this,function(e){"use strict";const o=e.reactive({events:{},subscribe:function(n,t){this.events[n]||(this.events[n]=[]),this.events[n].push(t)},publish:function(n,t){!this.events[n]||this.events[n].length<1||this.events[n].forEach(s=>{s(t||{})})}}),i={style:{border:"1px solid",padding:"10px"}},c={__name:"modules-container",setup(n){return(t,s)=>(e.openBlock(),e.createElementBlock("div",i,[(e.openBlock(),e.createBlock(e.resolveDynamicComponent("PluginOne"),{"event-bus":e.unref(o)},null,8,["event-bus"]))]))}},r={style:{border:"1px solid",padding:"10px"}},p=e.createElementVNode("p",null,"I'm core.",-1),l={__name:"app",setup(n){const t=e.ref(0);function s(){t.value++,o.publish("test",t.value)}return(a,f)=>(e.openBlock(),e.createElementBlock("main",null,[e.createElementVNode("div",r,[p,e.createElementVNode("p",null,"Count: "+e.toDisplayString(t.value),1),e.createElementVNode("button",{onClick:s,style:{"margin-bottom":"10px"}},"Increment"),e.createVNode(c)])]))}},d=e.reactive({config:null});return window.AppCore=function(t={}){d.config=t;const s=t.modules[0];e.createApp(l).use(s).mount("#app")},window.AppCore});
