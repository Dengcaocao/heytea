<template>
  <view class="sign">
    <!-- 导航栏 -->
    <!-- ifdef H5 -->
    <selfNav>
      <view slot="left" class="left">
        <button type="default" class="flex">
          <text class="iconfont icon-jiantou"></text>
        </button>
      </view>
      <view slot="center" class="title">每日签到</view>
    </selfNav>
    <!-- endif -->
    <view class="bg flex flex-c">
      <view class="sign-num">4</view>
      <view class="tips flex-align">已连续签到</view>
      <view class="my-integral">我的积分: {{1012}}</view>
    </view>
    <view class="content">
      <view class="attendance" ref="attendance">
        <!-- 周签到:class="[activeN]" -->
        <view class="title">连续签到赚积分</view>
        <view class="sign-pregress flex">
          <view class="sing-item flex flex-c" v-for="day in 7" :key="day" :class="{'active': weekDay === 0 ? true : day <= weekDay}">
            <view>+{{3 * day}}</view>
            <view class="icon" :class="{'active': weekDay === 0 ? true : day <= weekDay}">
              <text class="iconfont" :class="{'icon-gou': weekDay === 0 ? true : day <= weekDay}"></text>
            </view>
            <view>{{day}}天</view>
          </view>
        </view>
        <view class="btn-box">
          <button type="default" size="mini">签到</button>
          <view class="txt" @click="signRecord">查看签到记录</view>
        </view>
      </view>
      <Ad imgUrl="https://images.qmai.cn/s23107/2020/04/30/aed6cdb1db4712f87e.png" />
      <view class="category">
        <view class="category-item" v-for="(item, index) in category" :key="index">
          <view class="head flex flex-between">
            <text class="title">{{item.title}}</text>
            <text class="iconfont icon-youjiantou_huaban"></text>
          </view>
          <view class="item-content flex-content">
            <view class="item" v-for="(good, index) in item.list" :key="good.name + index">
              <image :src="good.imgUrl" mode="widthFix"></image>
              <view class="item-title text-hide">{{good.name}}</view>
              <view class="need-integral flex-align">
                <view>{{good.integral}}<text>积分</text></view>
                <view v-show="good.price">&nbsp;+ {{good.price}}<text>元</text></view>
              </view>
              <view class="surplus-num">剩余{{good.surplusNum}}件</view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
import selfNav from '@/components/selfHeadNav.vue'
import Ad from '@/components/ad.vue'
export default {
  data () {
    return {
      weekDay: 0,
      scorllHeight: '',
      category: [
        {
          title: '奈雪好券',
          list: [
            {
              imgUrl: require('@/assets/images/integrals/ticket.png'),
              name: '软欧包免费券',
              integral: 800,
              surplusNum: 99665
            },
            {
              imgUrl: require('@/assets/images/integrals/ticket.png'),
              name: '买一送一券',
              integral: 800,
              surplusNum: 97377
            },
            {
              imgUrl: require('@/assets/images/integrals/ticket.png'),
              name: '茶饮免费券',
              integral: 1000,
              surplusNum: 99111
            }
          ]
        },
        {
          title: '奈雪好物',
          list: [
            {
              imgUrl: 'https://images.qmai.cn/s23107/2020/04/30/1399a8bee03f3dd13a.jpg',
              name: '夏日宝藏挂画',
              integral: 100,
              price: 99,
              surplusNum: 29
            },
            {
              imgUrl: 'https://img-shop.qmimg.cn/s23107/2020/04/26/df31e1d42cc4242327.jpg',
              name: '梅你不行挂画',
              integral: 100,
              price: 99,
              surplusNum: 12
            },
            {
              imgUrl: 'https://images.qmai.cn/s23107/2020/04/30/e41bb7b1489ec044f7.jpg',
              name: '霸气橙子公仔',
              integral: 500,
              price: 45,
              surplusNum: 30
            },
            {
              imgUrl: 'https://images.qmai.cn/s23107/2020/04/30/e41bb7b1489ec044f7.jpg',
              name: '霸气橙子公仔',
              integral: 2000,
              surplusNum: 4
            },
            {
              imgUrl: 'https://images.qmai.cn/s23107/2020/04/30/6ada410b2d50636859.jpg',
              name: '霸气草莓公仔',
              integral: 500,
              price: 45,
              surplusNum: 28
            },
            {
              imgUrl: 'https://images.qmai.cn/s23107/2020/04/30/6ada410b2d50636859.jpg',
              name: '霸气草莓公仔',
              integral: 2000,
              surplusNum: 3
            },
            {
              imgUrl: 'https://images.qmai.cn/s23107/2020/04/30/c3e522084d9706a96e.jpg',
              name: '霸气杨梅T恤XXL',
              integral: 2000,
              surplusNum: 15
            }
          ]
        },
        {
          title: '奈雪联名',
          list: [
            {
              imgUrl: 'https://images.qmai.cn/s23107/2020/04/30/b360279d3a9f58d668.jpg',
              name: '特仑苏奶茶礼盒',
              integral: 100,
              price: 105,
              surplusNum: 3
            },
            {
              imgUrl: 'https://images.qmai.cn/s23107/2020/04/30/b360279d3a9f58d668.jpg',
              name: '特仑苏奶茶礼盒',
              integral: 2800,
              surplusNum: 2
            },
            {
              imgUrl: 'https://images.qmai.cn/s23107/2020/04/30/8d862b032568414c99.jpg',
              name: '人民日报保温杯',
              integral: 2000,
              surplusNum: 20
            },
            {
              imgUrl: 'https://images.qmai.cn/s23107/2020/04/30/85f06751236939431b.jpg',
              name: '人民日报水壶',
              integral: 1500,
              surplusNum: 11
            },
            {
              imgUrl: 'https://images.qmai.cn/s23107/2020/04/30/2a24bda6e1791c00a0.jpg',
              name: '人民日报搪瓷缸',
              integral: 1000,
              surplusNum: 37
            },
            {
              imgUrl: 'https://images.qmai.cn/s23107/2020/04/30/4c81b4d86db88e8f87.jpg',
              name: '生日手机壳 78P',
              integral: 500,
              surplusNum: 5
            },
            {
              imgUrl: 'https://images.qmai.cn/s23107/2020/04/30/064fd765371de1d8b0.jpg',
              name: '奈雪冻顶乌龙',
              integral: 2500,
              surplusNum: 23
            },
            {
              imgUrl: 'https://images.qmai.cn/s23107/2020/04/30/0b32c3249b8388a403.jpg',
              name: '奈雪青心乌龙',
              integral: 1800,
              surplusNum: 16
            },
            {
              imgUrl: 'https://images.qmai.cn/s23107/2020/04/30/1e5e034a3c61bb9ccd.jpg',
              name: '奈雪白鸡冠',
              integral: 1200,
              surplusNum: 6
            }
          ]
        }
      ]
    }
  },
  components: {
    selfNav,
    Ad
  },
  onLoad () {
    /**
     * 获取一周中的地几天
     */
    this.weekDay = new Date().getDay()
  },
  onReady () {
    this.setHeight()
  },
  methods: {
    getDom (dom) {
      return uni.createSelectorQuery().in(this).select(dom)
    },
    setHeight () {
      const { windowHeight } = uni.getSystemInfoSync()
      new Promise(resolve => {
        this.getDom('.bg').boundingClientRect(bgdata => {
          resolve(bgdata)
        }).exec()
      }).then(res => {
        this.getDom('.attendance').boundingClientRect(data => {
          // 获取元素外边距
          const computedStyle = getComputedStyle(this.$refs.attendance.$el)
          const marginTotal = Math.abs(parseInt(computedStyle.marginTop)) - Math.abs(parseInt(computedStyle.marginBottom))
          this.scorllHeight = windowHeight - (data.height + res.height) + marginTotal + 'px'
        }).exec()
      })
    },
    signRecord () {
      uni.navigateTo({
        url: '/pages/sign/record'
      })
    }
  }
}
</script>
<style scoped lang="scss">
.sign{
  .left{
    width: 100%;
    height: 100%;
    button{
      width: 100%;
      height: 100%;
      border-radius: 50%;
      color: #FFFFFF;
      background-color: rgba(0, 0, 0, .2);
      &::after{
        border: none;
      }
      text{
        transform: rotate(180deg);
        font-size: 44rpx;
      }
    }
  }
  .title{
    color: #FFFFFF;
    font-weight: 400;
  }
}
.bg{
  height: 444rpx;
  background-image: url('@/assets/images/attendance/bg.png');
  background-position: center;
  background-size: cover;
  color: #FFFFFF;
  .sign-num{
    margin-top: 20rpx;
    font-size: 120rpx;
  }
  .tips{
    &::after,
    &::before{
      content: "";
      display: block;
      width: 80rpx;
      height: 1rpx;
      border-bottom: 1rpx dotted #FFFFFF;
    }
    &::after{
      margin-left: 20rpx;
    }
    &::before{
      margin-right: 20rpx;
    }
  }
  .my-integral{
    margin-top: 30rpx;
  }
}
.content{
  padding: 0 30rpx;
  .attendance{
    border-radius: $border-radius;
    padding: 20rpx;
    background-color: #FFFFFF;
    box-shadow: $box-shadow;
    margin-top: -60rpx;
    margin-bottom: $margin-bottom;
    .title{
      margin: 20rpx 0;
      font-weight: 700;
      color: $themeTitleColor;
      font-size: 16px;
    }
    .sign-pregress{
      .sing-item{
        position: relative;
        flex: 1;
        color: rgb(204, 204, 204);
        // 激活样式
        &.active{
          color: rgb(250, 183, 20);
        }
        &.active::before,
        &.active::after{
          background-color: rgb(250, 183, 20);
        }
        // end
        &::before,
        &::after{
          content: "";
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 20rpx;
          height: 1rpx;
          background-color: rgb(204, 204, 204);
        }
        &::after{
          right: 0;
        }
        &::before{
          left: 0;
        }
        &:first-child::before,
        &:last-child::after{
          display: none;
        }
        .icon{
          position: relative;
          z-index: 99;
          width: 14rpx;
          height: 14rpx;
          border-radius: 50%;
          margin: 20rpx 0;
          background-color: rgb(204, 204, 204);
          &.active{
            width: 22rpx;
            height: 22rpx;
            line-height: 22rpx;
            text-align: center;
            color: #FFFFFF;
            background-color: rgb(250, 183, 20);
            .iconfont{
              font-size: 20rpx;
              font-weight: 700;
            }
          }
        }
      }
    }
    .btn-box{
      text-align: center;
      button{
        width: 50%;
        height: 70rpx;
        line-height: 70rpx;
        border-radius: 100rpx;
        color: #FFFFFF;
        margin-top: 30rpx;
        background-color: $themeColor;
        &::after{
          border: none;
        }
      }
      .txt{
        margin-top: 20rpx;
        color: $themeColor;
      }
    }
    
  }
  .category{
    .category-item{
      .head{
        .title{
          font-size: 32rpx;
          font-weight: bold;
          padding: 20rpx 0;
          color: $themeTextColor;
        }
        .iconfont{
          font-size: 40rpx;
          font-weight: 500;
          color: $themeTextColor;
        }
      }
      .item-content{
        flex-wrap: wrap;
        .item{
          width: 49%;
          padding: 20rpx;
          margin-bottom: $margin-bottom;
          border-radius: $border-radius;
          background-color: #FFFFFF;
          image{
            display: block;
            width: 100%;
          }
          .item-title{
            font-size: 32rpx;
            color: $themeTitleColor;
            font-weight: 700;
            margin-bottom: 10rpx;
          }
          .need-integral{
            color: $themeColor;
            text{
              margin-left: 10rpx;
              color: $themeTextColor;
              font-size: 24rpx;
            }
          }
          .surplus-num{
            color: $themeTextColor;
            font-size: 24rpx;
          }
        }
      }
    }
  }
}
</style>
