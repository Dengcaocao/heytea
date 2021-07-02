<template>
  <view class="member-code">
    <view class="info">
      <view class="user flex flex-c">
        <view class="avatar">
          <image src="@/assets/images/profile/default.png" mode="widthFix"></image>
          <view class="member-tag flex">
            <image src="@/assets/images/profile/level.png" mode="widthFix"></image>
            <view class="level">2</view>
          </view>
        </view>
        <view class="name">xww</view>
      </view>
      <Account :border="true" />
      <view class="code">
        <image src="@/assets/images/profile/default.png" mode="widthFix"></image>
      </view>
      <view class="tips">支付前出示可累计积分，会员码每30秒更新</view>
    </view>
    <Ad imgUrl="https://img-shop.qmimg.cn/s16/images/2020/04/26/4a36d33657677787.png"></Ad>
  </view>
</template>
<script>
import Account from '@/components/account.vue'
import Ad from '@/components/ad.vue'
export default {
  components: {
		Account,
    Ad
	}
}
</script>
<style scoped lang="scss">
.member-code{
  padding: 20rpx 30rpx;
}
.info{
  background-color: #FFFFFF;
  border-radius: $border-radius;
  box-shadow: $box-shadow2;
  padding-bottom: 64rpx;
  margin-bottom: $margin-bottom;
  .user{
    margin-top: 75rpx;
		.avatar{
      position: relative;
			width: 150rpx;
			height: 150rpx;
			padding: 10rpx;
			box-sizing: border-box;
			border-radius: 50%;
			margin-top: -75rpx;
			box-shadow: $box-shadow2;
			background-color: #FFFFFF;
			image{
				width: 100%;
				border-radius: inherit;
			}
      .member-tag{
        position: absolute;
        right: -30rpx;
        bottom: -6rpx;
        padding: 6rpx 16rpx;
        font-size: 22rpx;
        color: #FAB714;
        background-color: #FFFFFF;
        border-radius: 100rpx;
        box-shadow: $box-shadow2;
        image{
          width: 26rpx;
        }
      }
		}
    .name{
      color: $themeTextColor;
      font-weight: 700;
      margin-bottom: $margin-bottom;
      padding-top: 28rpx;
    }
  }
  .code{
    margin-top: $margin-bottom;
    image{
      width: 350rpx;
      display: block;
      margin: 0 auto;
    }
  }
  .tips{
    color: $themeTextColor;
    font-size: 24rpx;
    text-align: center;
    margin-bottom: 50rpx;
  }
}
</style>