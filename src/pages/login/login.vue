<template>
  <view class="login flex flex-c">
    <view class="intro flex flex-c">
      <image src="@/assets/images/logo.png" class="logo" mode="widthFix"></image>
      <view class="tips">
        <view>一杯好茶，一口软欧包</view>
        <view>在奈雪遇见两种美好</view>
      </view>
    </view>
    <view class="content flex flex-c">
      <button type="default" class="login-btn">登录</button>
      <view class="tips">新用户登录即加入会员，享会员权益</view>
      <MemberCategory widthVal="60rpx" />
      <view class="desc">会员权益说明</view>
    </view>
  </view>
</template>
<script>
import MemberCategory from '@/components/memberCategory.vue'
export default {
  components: {
    MemberCategory
  }
}
</script>
<style scoped lang="scss">
page,
.login{
  height: 100%;
}
.login{
  justify-content: space-evenly;
}
.intro{
  .logo{
    width: 164rpx;
    margin-bottom: 160rpx;
    margin-top: -42rpx;
  }
  .tips{
    line-height: 72rpx;
    color: $themeTextColor;
    text-align: center;
  }
}
.content{
  width: 100%;
  padding: 0 40rpx;
  box-sizing: border-box;
  justify-content: space-evenly;
  margin-top: 20rpx;
  .login-btn{
    width: 100%;
    font-size: 28rpx;
    color: #FFFFFF;
    padding: 10rpx 0;
    border-radius: 100rpx;
    margin-bottom: 100rpx;
    background-color: $themeColor;
    &::after{
      border: none;
    }
  }
  .tips{
    color: $themeTextColor;
    margin-bottom: $margin-bottom;
  }
  .desc{
    color: $themeColor;
    margin-top: $margin-bottom;
  }
}
</style>