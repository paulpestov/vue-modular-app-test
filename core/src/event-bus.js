import {reactive} from "vue";

export const EventBus = reactive({
  events: {},

  subscribe: function(name, listener) {
    // create the name if not yet created
    if(!this.events[name]) this.events[name] = [];

    // add the listener
    this.events[name].push(listener);
  },

  publish: function(name, data) {
    // return if the name doesn't exist, or there are no listeners
    if(!this.events[name] || this.events[name].length < 1) return;

    // send the event to all listeners
    this.events[name].forEach((listener) => {
      listener(data || {});
    });
  }
});
