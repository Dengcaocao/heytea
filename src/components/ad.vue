<template>
  <view class="ad">
    <image :src="imgUrl"></image>
  </view>
</template>
<script>
export default {
  props: {
    imgUrl: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped lang="scss">
.ad{
	height: 160rpx;
	margin-bottom: $margin-bottom;
	image{
		width: 100%;
		height: 100%;
		border-radius: $border-radius;
	}
}
</style>