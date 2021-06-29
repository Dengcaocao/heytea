<template>
  <view class="menus">
    <scroll-view
      class="scroll-menu"
      :scroll-y="true"
    >
      <view
        class="menu-item"
        :class="{'active': index === currentMenu}"
        v-for="(item, index) in menuList"
        :key="index"
        @click="chooseMenu(index)"
      >
        <view>{{item.name}}</view>
        <view
          class="tag"
          v-show="item.cartNum > 0"
        >{{item.cartNum}}</view>
      </view>
    </scroll-view>
  </view>
</template>
<script>
export default {
  props: {
    menuList: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
      currentMenu: 0
    }
  },
  methods: {
    chooseMenu (index) {
      this.currentMenu = index
      const val = 'category' + index
      this.$emit('setScrollToView', val)
    }
  }
}
</script>
<style scoped lang="scss">
.menus,
.scroll-menu{
	height: 100%;
}
.menus {
  flex: 2;
  font-size: 26rpx;
  color: $themeTextColor;
  background-color: $themeBgColor-gray;
  .menu-item {
    position: relative;
    padding: 30rpx 20rpx;
    .tag {
      position: absolute;
      top: 16rpx;
      right: 10rpx;
      width: 34rpx;
      height: 34rpx;
      line-height: 34rpx;
      text-align: center;
      color: #ffffff;
      border-radius: 50%;
      font-size: 22rpx;
      background-color: $themeColor;
    }
  }
  .menu-item:last-child::after {
    content: "";
    padding-top: 30rpx;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 96rpx;
    background-color: $themeBgColor-gray;
  }
  .active {
    color: $themeTitleColor;
    background-color: #ffffff;
  }
}
</style>