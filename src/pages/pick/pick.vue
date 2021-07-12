<template>
  <view class="pick">
		<!-- 无订单 -->
    <view class="empty flex flex-c">
      <image
				class="loading"
        src="@/assets/images/loading.gif"
        mode="widthFix"
      ></image>
      <view class="tips">
        <view>您还没有点单</view>
        <view>快去犒劳一下自己吧~</view>
      </view>
      <button
        type="default"
				size="mini"
        class="order"
				@click="toPage('/pages/login/login')"
      >去点餐</button>
      <view class="findOrder" @click="toPage('/pages/historyOrder/order')">查看历史订单</view>
    </view>
  </view>
</template>
<script>
export default {
	methods: {
		toPage (url) {
			uni.navigateTo({
				url
			})
		}
	}
}
</script>
<style scoped lang="scss">
page,
.pick,
.empty{
	height: 100%;
}
.empty{
	.loading{
		width: 260rpx;
	}
	.tips{
		font-size: 28rpx;
		color: $themeTextColor;
		margin: 60rpx 0 80rpx;
		line-height: 24px;
		view{
			text-align: center;
		}
	}
	.order{
		width: 320rpx;
		font-size: 28rpx;
		line-height: 3;
		color: #fff;
		border-radius: 100rpx;
		margin-bottom: 40rpx;
		background-color: $themeColor;
		&::after{
			border: none;
		}
	}
	.findOrder{
		font-size: 24rpx;
		color: $themeColor;
	}
}
</style>