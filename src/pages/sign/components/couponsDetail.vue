<template>
  <view class="coupons-detail">
    <view class="coupons-box">
      <view class="coupons flex-align">
        <image src="http://localhost:8081/static/images/integrals/ticket.png" mode="center"></image>
        <view class="info">
          <view class="title">软欧包免费券</view>
          <view class="date">有效期：领券当日开始90天内有效</view>
        </view>
      </view>
    </view>
    <view class="goods-info flex-align flex-between">
      <view class="integral"><text>{{800}}</text>积分</view>
      <view class="surplus-num">剩余<text>{{456789}}</text>件</view>
    </view>
    <view class="content">
      <view class="item">
        <view class="title">兑换须知</view>
        <view class="text rule">
          兑换规则：会员可凭800积分兑换“任意软欧包免费券”1件，菜单上标有红色雪花产品除外。
          售后服务：虚拟券不支持退换货服务，请先确认后兑换。
        </view>
      </view>
      <view class="item">
        <view class="title">使用须知</view>
        <view class="text use">
          <view>使用条件：<text>无门槛</text></view>
          <view>优惠形式：<text>免最高1件</text></view>
          <view>有效期：<text>领券当日开始90天内有效</text></view>
          <view>使用时段：<text>00:00:00~23:59:59</text></view>
          <view>使用限制：<text>不限制</text></view>
          <view>兑换限制：<text>不限制</text></view>
          <view>活动商品：<text>限部分商品</text></view>
          <view>是否与其他优惠共享：<text>否</text></view>
          <view>使用场景：<text>仅外卖、堂食可用</text></view>
        </view>
      </view>
    </view>
    <view class="btn-box">
      <button type="default" class="btn-button">积分不足</button>
    </view>
  </view>
</template>
<style scoped lang="scss">
.coupons-box{
  padding: 30rpx 50rpx;
  .coupons{
    position: relative;
    padding: 40rpx;
    border-radius: $border-radius;
    background-color: #FFFFFF;
    &::before,
    &::after{
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-50%) translateX(-50%);
      width: 40rpx;
      height: 40rpx;
      background-color: #F1F8FA;
      border-radius: 50%;
    }
    &::before{
      left: 0;
    }
    &::after{
      right: -40rpx;
    }
    image{
      width: 180rpx;
      height: 120rpx;
      margin-right: 30rpx;
    }
    .info{
      .title{
        font-size: 32rpx;
        color: $themeTitleColor;
        margin-bottom: 10rpx;
      }
      .date{
        font-size: 22rpx;
        color: $themeTextColor;
      }
    }
  }
}
.goods-info{
  margin-bottom: $margin-bottom;
  padding: 0 50rpx;
  font-size: 24rpx;
  color: $themeTitleColor;
  .integral{
    text{
      font-size: 32rpx;
      color: $themeColor;
      margin-right: 10rpx;
    }
  }
  .surplus-num{
    text{
      color: $themeColor;
    }
  }
}
.content{
  padding: 30rpx;
  background-color: #FFFFFF;
  .item{
    .title{
      font-size: 32rpx;
      font-weight: 700;
      line-height: 2em;
    }
    .rule{
      color: $themeTextColor;
      white-space: pre-line;
    }
    .use{
      color: $themeTitleColor;
      view{
        line-height: 2em;
      }
      text{
        font-weight: 700;
      }
    }
  }
  &::after{
    content: "";
    display: block;
    width: 100%;
    height: 150rpx;
  }
}
.btn-box{
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 150rpx;
  padding: 30rpx;
  background-color: #FFFFFF;
  box-shadow: 0 0 10px rgba(0, 0, 0 / 10%, 0.1);
  .btn-button{
    height: 100%;
    line-height: 90rpx;
    border-radius: 100rpx;
    background-color: $themeColor;
    font-size: 28rpx;
    color: #FFFFFF;
    &::after{
      border: none;
    }
  }
}
</style>