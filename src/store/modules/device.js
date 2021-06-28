import { getDevice } from '@/utils/utils'
import { wxConfig } from '@/utils/wx-config'

export default {
  namespaced: true,
  state: {
    device: {
      system: '', // Ios、Android
      channel: '', // 打开h5的系统与浏览器。微信浏览器、qq浏览器、抖音浏览器、微博浏览器、支付宝浏览器
      platform: '', // 平台,默认web
    }
  },
  getters: {
    device: state => state.device,
    // system
    system: state => state.device.system,
    channel: state => state.device.channel,
    // 浏览器
    isWeixin: state => state.device.channel === 'WEIXIN',
    isQQ: state => state.device.channel === 'QQ',
    isDouyin: state => state.device.channel === 'DOUYIN',
    isWeibo: state => state.device.channel === 'WEIBO',
    isAlipay: state => state.device.channel === 'ALIPAY',
    // 小程序
    isWeixinMP: state => state.device.channel === 'WEIXINMP',
    isAlipayMP: state => state.device.channel === 'ALIPAYMP'
  },
  mutations: {
    setDevice(state, data) {
      state.device = data
    }
  },
  actions: {
    getDeviceInfo ({ commit }) {
      commit('setDevice', getDevice())
    },
    // 设置微信签名信息
    wxJssdkInit ({}) {
      // #ifdef
      /**
       * TODO 调用接口获取签名信息，将签名信息传给wxConfig
       * wxConfig(data)
       */
      // #endif
    }
  },
}
