import App from './app.vue'

// export { App as Plugin1 }

window.Plugin1 =  {
  install: (app, options) => {
    // Plugin code goes here
    console.log(app)
    app.component('PluginOne', App);
  }
}
