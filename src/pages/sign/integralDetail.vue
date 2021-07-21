<template>
  <view class="integralDetail">
    <couponsDetail v-if="isCoupons" />
    <goodDetail v-else />
  </view>
</template>
<script>
import couponsDetail from './components/couponsDetail.vue'
import goodDetail from './components/goodDetail.vue'
export default {
  data () {
    return {
      isCoupons: false
    }
  },
  components: {
    couponsDetail,
    goodDetail
  },
  onLoad (e) {
    this.isCoupons = e.cate === '奈雪好券'
  }
}
</script>