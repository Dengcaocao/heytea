<template>
  <view class="account flex">
    <view
      class="account-item"
      v-for="(account, index) in accountList"
      :key="index"
      :class="{'addborder': index < accountList.length - 1 && border}"
      :style="{padding: itemPadding}"
      @click="toPage(account.path)"
    >
      <view class="count" :style="{'margin-bottom': countMarginBottom}">{{account.count}}</view>
      <view class="name">{{account.name}}</view>
    </view>
  </view>
</template>
<script>
export default {
  props: {
    itemPadding: {
      type: String,
      default: ''
    },
    countMarginBottom: {
      type: String,
      default: ''
    },
    border: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      accountList: [
				{
					count: '***',
					name: '奈雪券'
				},
				{
					count: '***',
					name: '积分商城'
				},
				{
					count: '***',
					name: '余额',
          path: '/pages/recharge/recharge'
				},
				{
					count: '***',
					name: '礼品卡'
				}
			]
    }
  },
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
.account {
  .account-item {
    position: relative;
    flex: 1;
    text-align: center;
    .count {
      font-weight: 700;
      color: $themeTitleColor;
      font-size: 40rpx;
    }
    .name {
      font-size: 24rpx;
      color: $themeTextColor;
    }
    &.addborder::after{
      content: "";
      position: absolute;
      right: 0;
      top: 0;
      width: 1rpx;
      height: 100%;
      background-color: $themeTextColor;
      transform: scale(0.4);
      opacity: .6;
    }
  }
}
</style>