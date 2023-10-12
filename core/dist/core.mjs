import { reactive as i, openBlock as s, createElementBlock as r, createBlock as u, resolveDynamicComponent as p, unref as l, ref as a, createElementVNode as o, toDisplayString as _, createVNode as d, createApp as v } from "vue";
const c = i({
  events: {},
  subscribe: function(t, e) {
    this.events[t] || (this.events[t] = []), this.events[t].push(e);
  },
  publish: function(t, e) {
    !this.events[t] || this.events[t].length < 1 || this.events[t].forEach((n) => {
      n(e || {});
    });
  }
}), h = { style: { border: "1px solid", padding: "10px" } }, m = {
  __name: "modules-container",
  setup(t) {
    return (e, n) => (s(), r("div", h, [
      (s(), u(p("PluginOne"), { "event-bus": l(c) }, null, 8, ["event-bus"]))
    ]));
  }
}, f = { style: { border: "1px solid", padding: "10px" } }, b = /* @__PURE__ */ o("p", null, "I'm core.", -1), g = {
  __name: "app",
  setup(t) {
    const e = a(0);
    function n() {
      e.value++, c.publish("test", e.value);
    }
    return (C, y) => (s(), r("main", null, [
      o("div", f, [
        b,
        o("p", null, "Count: " + _(e.value), 1),
        o("button", {
          onClick: n,
          style: { "margin-bottom": "10px" }
        }, "Increment"),
        d(m)
      ])
    ]));
  }
}, x = i({
  config: null
});
window.AppCore = function(e = {}) {
  x.config = e;
  const n = e.modules[0];
  v(g).use(n).mount("#app");
};
const w = window.AppCore;
export {
  w as default
};
