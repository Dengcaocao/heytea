<template>
  <view class="activity">
    <!-- bg -->
    <image
      src="https://img-shop.qmimg.cn/s16/images/2020/04/27/7ba54456f16f48df.jpeg"
      mode="widthFix"
    ></image>
    <view class="content">
      <!-- 助力 -->
      <view class="help">
        <view class="pregress-warp">
          <view class="text"><text>0</text>/3</view>
          <progress
            class="pregress"
            percent="80"
            border-radius="30"
            backgroundColor="rgb(254, 235, 213)"
            activeColor="rgb(254, 220, 95)"
            active
            stroke-width="30"
          />
        </view>
        <view class="tips">
          <view class="tips1">每邀3位新用户点亮，得买茶送包劵1张</view>
          <view class="tips2">新用户可得30元权益劵包</view>
        </view>
        <view class="btn">
          <image
            src="https://img-shop.qmimg.cn//s16/images/2020/04/21/a45e8244188a5ea0.png"
            mode="widthFix"
          ></image>
          <view class="btn-text flex-align">
            <text>立即找好友助力</text>
            <text class="iconfont icon-jiantou"></text>
          </view>
        </view>
      </view>
      <view class="reward flex">
        <image src="https://img-shop.qmimg.cn/s16/images/2020/04/21/7a7cde7fb0259f0d.png" class="title"></image>
        <view class="reward-item">
          <view class="count">0</view>
          <view class="name">已成功邀请(位)</view>
        </view>
        <view class="reward-item">
          <view class="count">0</view>
          <view class="name">已获得奖励(次)</view>
        </view>
      </view>
      <view class="friend-reward">
        <image src="https://img-shop.qmimg.cn/s16/images/2020/04/27/ca59f6bbbb830a16.png" mode="widthFix"></image>
      </view>
    </view>
  </view>
</template>
<style scoped lang="scss">
.activity {
  image {
    width: 100%;
    display: block;
  }
  .content {
    position: absolute;
    top: 576rpx;
    left: 0;
    width: 100%;
    padding: 0 30rpx;
    .help {
      padding: 40rpx 70rpx;
      border-radius: $border-radius;
      background-color: #ffffff;
      margin-bottom: $margin-bottom;
      .pregress-warp {
        font-size: 24rpx;
        .text {
          text-align: right;
          color: $themeTextColor;
          text {
            font-size: 32rpx;
            color: #d12e32;
          }
        }
        .pregress {
          margin: 20rpx 0;
        }
      }
      .tips {
        text-align: center;
        color: $themeTextRedC;
        margin-bottom: 40rpx;
        font-size: 24rpx;
      }
      .btn {
        position: relative;
        width: 90%;
        margin: 0 auto;
        opacity: 0.8;
        image {
          width: 100%;
        }
        .btn-text {
          position: absolute;
          top: 30rpx;
          left: 50%;
          transform: translateX(-50%);
          color: $themeTextRedC;
          font-size: 32rpx;
          white-space: nowrap;
          .iconfont {
            font-weight: 700;
            font-size: 36rpx;
          }
        }
      }
    }
    .reward{
      position: relative;
      border-radius: $border-radius;
      padding: 60rpx 0;
      background-color: #ffffff;
      margin-bottom: $margin-bottom;
      .title{
        position: absolute;
        top: -14rpx;
        left: 50%;
        transform: translateX(-50%);
        width: 290rpx;
        height: 92rpx;
      }
      .reward-item{
        position: relative;
        flex: 1;
        text-align: center;
        &:nth-of-type(1)::after{
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 1rpx;
          height: 100%;
          background-color: #ccc;
          transform: scale(0.8, 0.5);
        }
        .count{
          color: $themeTextRedC;
          font-size: 32rpx;
        }
        .name{
          color: $themeTextColor;
          font-size: 24rpx;
        }
      }
    }
    .friend-reward{
      image{
        width: 100%;
        display: block;
      }
    }
  }
}
</style>