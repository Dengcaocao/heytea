<template>
  <view class="sign-record">
    <u-cell-group>
      <u-cell-item  title="夕阳无限好" label="夕阳无限好" :arrow="false">
        <!-- left -->
        <view class="avatar" slot="icon">
          <image src="@/assets/images/profile/default.png"></image>
        </view>
        <!-- right -->
        <view class="timeAt" slot="right-icon">
          <view class="integral">{{1012}}<text>签</text></view>
          <view class="time">{{new Date().toLocaleDateString()}}</view>
        </view>
      </u-cell-item>
    </u-cell-group>
  </view>
</template>
<style scoped lang="scss">
.sign-record{
  background-color: #FFFFFF;
  .avatar{
    width: 80rpx;
    height: 80rpx;
    margin-right: 20rpx;
    image{
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .timeAt{
    text-align: right;
    .integral{
      font-size: 56rpx;
      color: $themeColor;
      text{
        font-size: 28rpx;
        margin-left: 10rpx;
      }
    }
    .time{
      color: $themeTextColor;
      margin-top: 10rpx;
    }
  }
}
</style>