let baseUrl = ''
let LoadingNum = 0
// #ifdef MP
baseUrl = 'https://www.baidu.com/api/'
// #endif
// #ifdef H5
baseUrl = '/api/'
// #endif

function request(params) {
  if (LoadingNum === 0) {
    uni.showLoading()
  }
  LoadingNum ++
  return new Promise((resolve, reject) => {
    uni.request({
      url: baseUrl + params.url,
      method: params.method,
      data: params.data.data,
      success (res) {
        // TODO 判断返回状态码和内容是否存在
        resolve(res)
      },
      fail (err) {
        reject(err)
      },
      complete () {
        LoadingNum --
        if (LoadingNum <= 0) {
          uni.hideLoading()
        }
      }
    })
  })
}

export default request
