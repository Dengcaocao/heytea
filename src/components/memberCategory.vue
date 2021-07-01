<template>
  <view class="category flex">
    <view
      class="category-item"
      v-for="(item, index) in newMemberCategory"
      :key="index"
    >
      <!-- <view class="imgIcon"> -->
      <image
        class="imgIcon"
        mode="widthFix"
        :src="item.imgUrl"
        :style="{width: widthVal}"
      ></image>
      <!-- </view> -->
      <view class="name">{{item.name}}</view>
    </view>
  </view>
</template>
<script>
export default {
  props: {
    widthVal: {
      type: '',
      default: '80rpx'
    }
  },
  data () {
    return {
      newMemberCategory: [
				{
					imgUrl: require('@/assets/images/profile/rhyl.png'),
					name: '入会有礼'
				},
				{
					imgUrl: require('@/assets/images/profile/jfdh.png'),
					name: '积分兑换'
				},
				{
					imgUrl: require('@/assets/images/profile/sjtq.png'),
					name: '升级特权'
				},
				{
					imgUrl: require('@/assets/images/profile/srtq.png'),
					name: '生日特权'
				},
				{
					imgUrl: require('@/assets/images/profile/nxbz.png'),
					name: '奈雪宝藏'
				}
			]
    }
  }
}
</script>
<style scoped lang="scss">
.category {
  width: 100%;
  padding: 30rpx 0 20rpx;
  .category-item {
    flex: 1;
    text-align: center;
    .imgIcon {
      // width: 80rpx;
      // height: 80rpx;
      margin-bottom: 10rpx;
    }
    .name {
      font-size: 24rpx;
      color: $themeTextColor;
    }
  }
}
</style>