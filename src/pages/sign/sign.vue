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
        <!-- 周签到 -->
        <view class="sign-pregress flex-align" :class="[activeN]">
          <view class="sing-item flex flex-c" v-for="day in 7" :key="day">
            <view>+{{3 * day}}</view>
            <view class="icon" :class="{'active': weekDay === 0 ? true : day <= weekDay}"></view>
            <view>{{day}}天</view>
          </view>
        </view>
        <button type="default" size="mini">签到</button>
      </view>
      <!-- 记录 -->
      <view class="record" :style="{height: scorllHeight}">
        <!-- <u-cell-group>
          <u-cell-item icon="setting-fill" title="个人设置"></u-cell-item>
          <u-cell-item icon="integral-fill" title="会员等级" value="新版本"></u-cell-item>
        </u-cell-group> -->
      </view>
    </view>
  </view>
</template>
<script>
import selfNav from '@/components/selfHeadNav.vue'
export default {
  data () {
    return {
      weekDay: 0,
      scorllHeight: ''
    }
  },
  computed: {
    activeN () {
      return 'active' + this.weekDay
      // return {
      //   width: `calc(100% / 7 * ${this.weekDay === 0 ? 7 : this.weekDay})`
      // }
    }
  },
  components: {
    selfNav
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
    padding: 30rpx;
    text-align: right;
    background-color: #FFFFFF;
    box-shadow: $box-shadow;
    margin-top: -60rpx;
    margin-bottom: $margin-bottom;
    .sign-pregress{
      position: relative;
      width: 100%;
      &::before,
      &::after{
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 100%;
        height: 6rpx;
      }
      &::before{
        background-color: $themeBgColor-gray;
      }
      &::after{
        width: 0;
        transition: 3s;
        background-color: $themeColor;
      }
      .sing-item{
        flex: 1;
        font-size: 20rpx;
        align-items: flex-end;
        view{
          white-space: nowrap;
          color: $themeTitleColor;
        }
        .icon{
          position: relative;
          z-index: 99;
          width: 16rpx;
          height: 16rpx;
          border-radius: 50%;
          background-color: $themeBgColor-gray;
          &.active{
            background-color: $themeColor;
          }
        }
      }
    }
    button{
      color: #FFFFFF;
      margin-top: 30rpx;
      background-color: $themeColor;
      &::after{
        border: none;
      }
    }
  }
  .record{
    background-color: royalblue;
  }
}
.sign-pregress.active1::after{
  width: calc(100% / 7 * 1) !important;
}
.sign-pregress.active2::after{
  width: calc(100% / 7 * 2) !important;
}
.sign-pregress.active3::after{
  width: calc(100% / 7 * 3) !important;
}
.sign-pregress.active4::after{
  width: calc(100% / 7 * 4) !important;
}
.sign-pregress.active5::after{
  width: calc(100% / 7 * 5) !important;
}
.sign-pregress.active6::after{
  width: calc(100% / 7 * 6) !important;
}
.sign-pregress.active0::after{
  width: calc(100% / 7 * 7) !important;
}
</style>
