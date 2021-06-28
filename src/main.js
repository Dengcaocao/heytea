import Vue from 'vue'
import App from './App'
import store from './store'
Vue.prototype.$store = store

Vue.config.productionTip = false

App.mpType = 'app'

// 初始化设备信息
store.dispatch('device/getDeviceInfo')
console.log(store.state.device.device.platform)

const app = new Vue({
  ...App,
  store
})
app.$mount()
