import { getDevice } from '@/utils/utils'

export default {
  namespaced: true,
  state: {
    device: {
      system: '', // Ios、Android
      channel: '', // 打开h5的系统与浏览器。微信浏览器、qq浏览器、抖音浏览器、微博浏览器、支付宝浏览器
      platform: '', // 平台,默认web
    }
  },
  getters: {},
  mutations: {
    setDevice(state, data) {
      state.device = data
    }
  },
  actions: {
    getDeviceInfo ({ commit }) {
      commit('setDevice', getDevice())
    }
  },
}
