import Vue from 'vue'
import App from './App'
import store from './store'
Vue.prototype.$store = store

Vue.config.productionTip = false

App.mpType = 'app'

console.log(store.state.count, store.state.device.platform)

const app = new Vue({
  ...App,
  store
})
app.$mount()
