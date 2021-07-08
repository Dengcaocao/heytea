<template>
  <view class="coupons">
    <scroll-view :scroll-y="true" class="scroll-Y">
      <view class="coupons-list">
        <view class="coupons-item flex" v-for="(item, index) in couponsList" :key="index" @click="jumpPage('/pages/coupons/pay-coupons?id=' + item.price)">
          <view class="img-warp">
            <image :src="item.imgUrl" mode="widthFix"></image>
          </view>
          <view class="coupons-info flex-content flex-c">
            <view class="name">{{item.name}}</view>
            <view class="price flex-content flex-align">
              <text>¥{{/\./.test(String(item.price)) ? item.price.toFixed(2) : item.price + '.00'}}</text>
              <button class="mini-btn" plain type="default" size="mini">去购买</button>
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
    <view class="record">购买记录</view>
  </view>
</template>
<script>
export default {
  data () {
    return {
      couponsList: [
        {
          imgUrl: 'https://img-shop.qmimg.cn/s23107/2020/02/29/8b6ffdfb8c8d7ab0e3.jpg',
          name: '霸气mini卡',
          price: 20
        },
        {
          imgUrl: 'https://img-shop.qmimg.cn/s23107/2020/02/29/16c61aad4a84e7c2b5.jpg',
          name: '霸气心享卡',
          price: 58
        },
        {
          imgUrl: 'https://img-shop.qmimg.cn/s23107/2020/02/29/73065efbbe87e00753.jpg',
          name: '霸气分享卡',
          price: 108
        },
        {
          imgUrl: 'https://img-shop.qmimg.cn/s23107/2020/02/28/e74279ce48190fd1c7.jpg',
          name: '霸气欢聚卡',
          price: 198
        }
      ]
    }
  },
  methods: {
    jumpPage (url) {
      uni.navigateTo({
        url
      })
    }
  }
}
</script>
<style scoped lang="scss">
.coupons{
  .scroll-Y{
    padding: 30rpx;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 100rpx;
    left: 0;
    box-sizing: border-box;
  }
  .record{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100rpx;
    text-align: center;
    line-height: 100rpx;
    color: $themeColor;
  }
}
.coupons-item{
  height: 220rpx;
  padding: 30rpx;
  background-color: #ffffff;
  border-radius: $border-radius;
  margin-bottom: $margin-bottom;
  .img-warp{
    margin-right: 20rpx;
    image{
      width: 200rpx;
    }
  }
  .coupons-info{
    flex: 1;
    height: 100%;
    .name{
      font-size: 32rpx;
      color: $themeTitleColor;
    }
    .price{
      font-size: 24rpx;
      color: #000000;
      button{
        width: 120rpx;
        height: 50rpx;
        margin: 0;
        padding: 0;
        font-size: 24rpx;
        color: $themeColor;
        border-radius: 50rpx;
        border-color: $themeColor;
        line-height: 50rpx;
      }
    }
  } 
}
</style>