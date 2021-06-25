export function getDevice() {
  let device = {}
  const ua = window.navigator.userAgent.toLowerCase()
  // 判断system
  if (/iphone/.test(ua)) {
    device.system = 'IOS'
  } else {
    device.system = 'ANDROID'
  }

  // 判断打开h5的浏览器
  // #ifdef H5
  switch (true) {
    case /micromessenger/.test(ua):
      device.channel = 'WEIXIN'
      break;
    
    case /mqqbrowser/.test(ua):
      device.channel = 'QQ'
      break;

    case /aweme/.test(ua):
      device.channel = 'DOUYIN'
      break;

    case /weibo/.test(ua):
      device.channel = 'WEIBO'
      break;

    case /alipay/.test(ua):
      device.channel = 'ALIPAY'
      break;

    default:
      device.channel = 'MOBILE'
      break;
  }
  // #endif
  // #ifdef MP

  // #endif
}
