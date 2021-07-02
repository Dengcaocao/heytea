import Vue from 'vue'
import App from './App'
import store from './store'
import { wxShare } from '@/utils/wx-config'

// 引入ui库
import uView from 'uview-ui'
Vue.use(uView)

Vue.prototype.$store = store

Vue.config.productionTip = false

App.mpType = 'app'

// 初始化设备信息
store.dispatch('device/getDeviceInfo')
console.log(store.state.device.device.platform)

// 初始化微信jssdk
console.log(store.getters['device/isWeixin'])
if (store.getters['device/isWeixin']) {
  store.dispatch('device/wxJssdkInit').then(() => {
    console.log('dispatch返回的是promiss对象')
    const shareData = {
      title: '', // 分享标题
      desc: '', // 分享描述
      link: '', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: '', // 分享图标
    }
    wxShare(shareData)
  })
}

const app = new Vue({
  ...App,
  store
})
app.$mount()
