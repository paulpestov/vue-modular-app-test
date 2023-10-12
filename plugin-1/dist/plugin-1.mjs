import { ref as s, openBlock as c, createElementBlock as u, createElementVNode as l, toDisplayString as i } from "vue";
const r = /* @__PURE__ */ l("div", null, "I'm a plugin.", -1), p = {
  __name: "app",
  props: ["eventBus"],
  setup(n) {
    const e = n, t = s(0);
    return e.eventBus.subscribe("test", (o) => {
      t.value = o;
    }), (o, a) => (c(), u("div", null, [
      r,
      l("p", null, "Count: " + i(t.value), 1)
    ]));
  }
};
window.Plugin1 = {
  install: (n, e) => {
    console.log(n), n.component("PluginOne", p);
  }
};
