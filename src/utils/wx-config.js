import jwx from 'weixin-js-sdk'

export function wxConfig(configData) {
  jwx.config({
    debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: configData.appId, // 必填，公众号的唯一标识
    timestamp: configData.timestamp, // 必填，生成签名的时间戳
    nonceStr: configData.nonceStr, // 必填，生成签名的随机串
    signature: configData.signature,// 必填，签名
    jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData', 'onMenuShareWeibo'] // 必填，需要使用的JS接口列表
  })
}

export function wxShare(shareData) {
  jwx.ready(function () {   //需在用户可能点击分享按钮前就先调用
    // 自定义“分享给朋友”及“分享到QQ”按钮的分享内容
    jwx.updateAppMessageShareData({ 
      title: shareData.title, // 分享标题
      desc: shareData.desc, // 分享描述
      link: shareData.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: shareData.imgUrl, // 分享图标
      success: function () {
        // 设置成功
      }
    })

    // 自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容
    jwx.updateTimelineShareData({ 
      title: shareData.title, // 分享标题
      link: shareData.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: shareData.imgUrl, // 分享图标
      success: function () {
        // 设置成功
      }
    })

    // 分享到腾讯微博
    jwx.onMenuShareWeibo({
      title: shareData.title, // 分享标题
      desc: shareData.desc, // 分享描述
      link: shareData.link, // 分享链接
      imgUrl: shareData.imgUrl, // 分享图标
      success: function () {
      // 用户确认分享后执行的回调函数
      },
      cancel: function () {
      // 用户取消分享后执行的回调函数
      }
    })    
  })  
}
