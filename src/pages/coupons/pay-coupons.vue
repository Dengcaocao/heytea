<template>
  <view class="pay-coupons">
    <image src="https://img-shop.qmimg.cn/s23107/2020/02/29/8b6ffdfb8c8d7ab0e3.jpg" class="img"></image>
    <view class="content">
      <view class="coupons-info">
        <view class="title">霸气mini卡</view>
        <view class="total">共6张优惠券</view>
        <view class="coupons-list">
          <view class="coupons-item" v-for="(item, index) in detailCouponsList" :key="index">
            <view class="info flex">
              <view class="img-warp">
                <image :src="item.imgUrl" mode="widthFix"></image>
              </view>
              <view class="msg">
                <view class="count">x{{item.num}}</view>
                <view class="name text-hide">{{item.name}}</view>
                <view class="tips">{{item.tips}}</view>
              </view>
            </view>
            <view class="time flex flex-between">
              <view class="range">使用时段：{{item.timeRange}}</view>
              <view class="detail">查看详情</view>
            </view>
          </view>
        </view>
      </view>
      <view class="rule">
        <view class="title">购买须知</view>
        <view class="be-careful">
          <view class="transaction-time">售卖时间：2020-03-30~2020-05-15</view>
          <view class="limit">购买限制：无限制</view>
        </view>
        <view class="rule-content">
          【基本规则】
          1、成功购买后，优惠券可在奈雪点单小程序内使用或线下门店出示会员码使用。
          2、优惠券规则以优惠券使用详情为准。
          3、单笔订单仅限使用一张优惠券，且不与其他活动共享。
          4、用户购买券包使用的手机号需和小程序登录的会员手机号保持一致。
          5、如逾期未使用优惠券，优惠券将自动失效，请在有效期内使用。
          【注意】
          1、奈雪会员卡包为奈雪的茶公开售卖的一种付费卡包，成功购买，不可转赠、不可退换、不可兑换现金。
          2、此券包有效期30天。
        </view>
      </view>
    </view>
    <view class="pay-btn">
      <button type="default">¥20.00购买</button>
    </view>
  </view>
</template>
<script>
export default {
  data () {
    return {
      detailCouponsList: [
        {
          imgUrl: 'https://img-shop.qmimg.cn/s23107/2019/10/09/ea5b8ed493c0cc310d.jpg',
          num: 4,
          name: '第2件半价券(mini卡)',
          tips: '领券当日开始30天内有效',
          timeRange: '00:00:00-23:59:59'
        },
        {
          imgUrl: 'https://img-shop.qmimg.cn/s23107/2019/10/09/ea5b8ed493c0cc310d.jpg',
          num: 1,
          name: '满58元减现金券6元元券',
          tips: '领券当日开始30天内有效',
          timeRange: '00:00:00-23:59:59'
        },
        {
          imgUrl: 'https://img-shop.qmimg.cn/s23107/2019/10/09/ea5b8ed493c0cc310d.jpg',
          num: 8,
          name: '满108元减现金券10元元券',
          tips: '领券当日开始30天内有效',
          timeRange: '00:00:00-23:59:59'
        }
      ]
    }
  },
  onLoad (e) {
    const id = e.id
  }
}
</script>
<style scoped lang="scss">
.img{
  width: 100%;
  height: 50vh;
  display: block;
}
.content{
  padding: 30rpx 40rpx 100rpx;
  .title{
    font-size: 32rpx;
    margin-bottom: 20rpx;
  }
  .coupons-info{
    .total{
      font-size: 24rpx;
      color: $themeTextColor;
      margin-bottom: 20rpx;
    }
  }
  .coupons-item{
    margin-bottom: $margin-bottom;
    padding: 20rpx 40rpx;
    border-radius: $border-radius;
    box-shadow: $box-shadow;
    background-color: #FFFFFF;
    .info{
      position: relative;
      &::before,
      &::after{
        content: "";
        position: absolute;
        bottom: -20rpx;
        width: 30rpx; 
        height: 30rpx;
        border-radius: 50%;
        background-color: #F1F8FA;
      }
       &::before{
         left: -40rpx;
         transform: translateY(50%) translateX(-50%);
       }
      &::after{
        right: -40rpx;
        transform: translateY(50%) translateX(50%);
      }
      margin-bottom: 20rpx;
      .img-warp{
        width: 150rpx;
        height: 150rpx;
        line-height: 150rpx;
        margin-right: 40rpx;
        image{
          width: 100%;
        }
      }
      .msg{
        flex: 1;
        .count{
          text-align: right;
          font-size: 32rpx;
          color: $themeTextColor;
        }
        .name{
          width: 80%;
          font-size: 40rpx;
          color: $themeTitleColor;
        }
        .tips{
          font-size: 24rpx;
          color: $themeTextColor;
        }
      }
    }
    .time{
      position: relative;
      height: 70rpx;
      font-size: 24rpx;
      &::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 1rpx;
        border-top: 1px dashed #E2E2E2;
        transform: scaleY(0.5);
      }
      .range{
        color: $themeTextColor;
      }
      .detail{
        color: $themeColor;
      }
    }
  }
  .rule{
    .be-careful{
      color: $themeTitleColor;
      margin-top: 40rpx;
      margin-bottom: $margin-bottom;
    }
    .rule-content{
      font-size: 24rpx;
      color: $themeTextColor;
      white-space: pre-line;
    }
  }
}
.pay-btn{
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100rpx;
  padding: 10rpx 0;
  background-color: #FFFFFF;
  button{
    width: 90%;
    height: 100%;
    color: #FFFFFF;
    border-radius: 80rpx;
    font-size: 28rpx;
    line-height: 80rpx;
    background-color: $themeColor;
    &::after{
      border: none;
    }
  }
}
</style>