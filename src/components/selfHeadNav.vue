<template>
  <view class="head flex">
    <view class="left" @click="back">
      <slot name="left"></slot>
    </view>
    <view class="center">
      <slot name="center"></slot>
    </view>
    <view class="right">
      <slot name="right"></slot>
    </view>
  </view>
</template>
<script>
export default {
  methods: {
    back () {
      uni.navigateBack()
    }
  }
}
</script>
<style scoped>
.head{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 88rpx;
}
.left,
.right{
  width: 60rpx;
  height: 60rpx;
  line-height: 60rpx;
  text-align: center;
  padding: 0 10rpx;
}
.center{
  flex: 1;
  text-align: center;
  font-size: 32rpx;
  font-weight: 700;
  color: #000000;
}
</style>