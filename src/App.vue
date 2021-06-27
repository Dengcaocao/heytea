<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import './assets/scss/common.scss';
	page{
		/**解决page设置100%时，tabBar遮挡内容的问题 */
		height: auto;
    min-height: 100%;
		font-size: 28rpx;
		background-color: #F1F8FA;
	}
</style>
