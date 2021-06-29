<template>
  <view>
    <view
      class="goods-category"
      v-for="(category, categoryIndex) in goodsList"
      :key="categoryIndex"
    >
      <view
        class="goods-category-title"
        :id="'category' + categoryIndex"
      >{{category.category}}</view>
      <view
        class="goods-item flex"
        v-for="(good, goodIndex) in category.goods"
        :key="goodIndex"
      >
        <image
          class="goods-img"
          :src="good.goodsImg"
        ></image>
        <view class="goods-info flex-content flex-c">
          <view class="goods-title">{{good.title}}</view>
          <view class="goods-desc">{{good.desc}}</view>
          <view class="goods-price flex flex-between">
            <text>¥{{good.price}}</text>
            <view class="operationNum flex">
              <button
                type="default"
                size="mini"
                class="icon-btn btn-jian"
                v-show="changeNum(good.goodsId)"
                @click="subCart(category.category, good)"
              >
                <text class="iconfont icon-jian"></text>
              </button>
              <view
                class="num"
                v-show="changeNum(good.goodsId)"
              >{{changeNum(good.goodsId) ? changeNum(good.goodsId).goods.length : 0}}</view>
              <button
                type="default"
                size="mini"
                class="icon-btn"
                @click="addCart(category.category, good)"
              >
                <text class="iconfont icon-jiahao"></text>
              </button>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  props: {
    goodsList: {
      tyep: Array,
      default: []
    },
    heyteaCart: {
      tyep: Array,
      default: []
    },
    menuList: {
      tyep: Array,
      default: []
    }
  },
  data () {
    return {

    }
  },
  methods: {
    setMenuCategoryNum (categoryName, count) {
			const newMenuList = this.menuList.map(menu => {
				if (categoryName === menu.name) {
					menu.cartNum += count
				}
				return menu
			})
      this.$emit('setMenuList', newMenuList)
		},
    addCart (category, good) {
			this.setMenuCategoryNum(category, 1)
			const obj = {
				category,
				goods: [good]
			}
			if (this.heyteaCart.length) {
				let isFind = false
				let index
				this.heyteaCart.forEach((goodAry, goodAryIndex) => {
					if (goodAry.goods[0].goodsId === good.goodsId) {
						isFind = true
						index = goodAryIndex
					}
				})
				if (isFind) {
					this.heyteaCart[index].goods.push(good)
				} else {
					this.heyteaCart.push(obj)
				}
			} else {
				this.heyteaCart.push(obj)
			}
			uni.setStorageSync('heytea_cart', JSON.stringify(this.heyteaCart))
		},
		subCart (category, good) {
			this.setMenuCategoryNum(category, -1)
			this.heyteaCart.forEach((item, index) => {
				if (item.goods[0].goodsId === good.goodsId) {
					item.goods.pop()
				}
				if (item.goods.length === 0) {
					this.heyteaCart.splice(index, 1)
				}
			})
			uni.setStorageSync('heytea_cart', JSON.stringify(this.heyteaCart))
		},
    changeNum (goodsId) {
			return this.heyteaCart.find(item => {
				if (item.goods.length > 0) {
					return item.goods[0].goodsId === goodsId
				}
			})
		}
  }
}
</script>
<style scoped lang="scss">
.goods-category {
  &:last-child:after {
    content: "";
    display: block;
    width: 100%;
    height: 96rpx;
  }
  .goods-category-title {
    color: $themeTitleColor;
    padding: 30rpx 0;
  }
  .goods-item {
    margin-bottom: 30rpx;
    .goods-img {
      width: 160rpx;
      height: 160rpx;
      margin-right: 20rpx;
      border-radius: 8rpx;
    }
    .goods-info {
      flex: 1;
      padding-right: 14rpx;
      height: 160rpx;
      .goods-title {
        margin-bottom: 10rpx;
      }
      .goods-desc {
        color: $themeTextColor;
        font-size: 24rpx;
        margin-bottom: 10rpx;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .goods-price {
        font-weight: 600;
        .icon-btn {
          width: 44rpx;
          line-height: 44rpx;
          padding: 0;
          margin: 0;
          color: #ffffff;
          font-size: 32rpx;
          border-radius: 50%;
          background-color: $themeColor;
        }
        .btn-jian {
          width: 44rpx;
          line-height: 40rpx;
          background-color: transparent;
          color: $themeTextColor;
          border: 1rpx solid $themeTextColor;
          box-sizing: border-box;
          &::after {
            border: none;
          }
        }
        .num {
          width: 44rpx;
          line-height: 44rpx;
          text-align: center;
          font-weight: 0 !important;
        }
      }
    }
  }
}
</style>