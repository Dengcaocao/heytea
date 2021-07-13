<template>
  <view class="recharge">
    <view class="account flex">
      <view class="left">
        <view class="name">账户余额（元）</view>
        <view class="money">10000</view>
        <view class="record">交易记录</view>
      </view>
      <view class="right">
        <image src="@/assets/images/balance.png" mode="widthFix"></image>
      </view>
    </view>
    <view class="item amount">
      <view class="title">储值金额</view>
      <view class="amount-list">
        <view class="amount-item" v-for="(item,index) in amount" :key="item" :class="{'active': checkedAmount === index}" @click="choose(index)">{{item}}<text>元</text></view>
      </view>
    </view>
    <view class="item rule">
      <view class="title">使用说明</view>
      <view class="rule-content">
        1. 储值成功后，不可退款，请根据自己的消费情况充值。
        2. 储值余额不可提现，不可转移、转赠。
        3. 储值金额按国家法律、法规开具符合规定的发票，后续凭储值余额消费时，不再开具发票。如需发票请至奈雪点单小程序个人中心联系客服。
        4. 储值不累计会员成长值、积分与宝石，订单消费时以实际订单支付金额累计会员成长值、积分与宝石。
        5. 储值余额可在奈雪的茶内地线下门店、奈雪酒屋全国门店、奈雪点单小程序在线支付使用。
      </view>
    </view>
    <view class="bottom">
      <view class="agreement" @click="isAgree === '' ? isAgree = 'true' : isAgree = ''">
        <u-radio-group v-model="isAgree" :size="24">
          <u-radio shape="circle" :label-disabled="true" active-color="#ADB838" name="true">我已阅读并同意<text>《储值协议》</text></u-radio>
        </u-radio-group>
      </view>
      <u-button shape="circle" hover-class="none" class="btn">购买</u-button>
    </view>
  </view>
</template>
<script>
export default {
  data () {
    return {
      amount: [100, 200, 300, 400, 600, 800],
      checkedAmount: '',
      isAgree: 'true'
    }
  },
  methods: {
    choose (index) {
      this.checkedAmount = index
    }
  }
}
</script>
<style scoped lang="scss">
page{
  background-color: #ffffff;
}
.recharge{
  padding: 0 40rpx;
  padding-bottom: 220rpx;
}
.account{
  padding: 50rpx 10rpx;
  .left{
    flex: 1;
    view{
      padding: 10rpx 0;
      font-size: 24rpx;
    }
    .name{
      color: $themeTitleColor;
    }
    .money{
      font-size: 40rpx;
      font-weight: 700;
      color: $themeTitleColor;
    }
    .record{
      color: $themeColor;
    }
  }
  .right{
    width: 340rpx;
    image{
      width: 100%;
    }
  }
}
.item{
  .title{
    font-size: 32rpx;
    color: $themeTitleColor;
    font-weight: 700;
    margin-bottom: 20rpx;
  }
  .amount-list{
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(3, 1fr);
    gap: 20rpx;
    color: $themeTitleColor;
    margin-bottom: 40rpx;
    .amount-item{
      padding: 50rpx 0;
      font-size: 40rpx;
      font-weight: 700;
      text-align: center;
      background-color: #F1F8FA;
      border-radius: $border-radius;
      text{
        font-size: 24rpx;
        font-weight: 300;
      }
    }
    .active{
      background-color: $themeColor;
      color: #ffffff;
    }
  }
  .rule-content{
    white-space: pre-line;
    font-size: 24rpx;
    color: $themeTextColor;
  }
}
.bottom{
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 0 40rpx;
  box-shadow: 0 0 10px rgba(6, 6, 6 / 10%, 0.1);
  background-color: #ffffff;
  .agreement{
    height: 100rpx;
    text{
      color: $themeColor;
    }
  }
  .btn{
    height: 70rpx;
    background-color: #ADB838;
    color: #ffffff;
    margin-bottom: 30rpx;
  }
}
.agreement /deep/ .u-radio__label{
  font-size: 24rpx;
  padding: 36rpx 0;
  box-sizing: border-box;
}
</style>