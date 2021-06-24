module.exports = {
	css: {
    loaderOptions: {
      scss: {
        // 设置全局scss文件入口
        prependData: `@import "~@/assets/scss/common.scss";`
      }  
    }  
	}  
}