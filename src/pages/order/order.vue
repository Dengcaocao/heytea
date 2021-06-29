<template>
	<view class="order">
		<!-- 定位 -->
		<view class="head flex flex-between">
			<view class="location">
				<view class="address">
					<text>卓悦中心ONE AVENUE店</text>
					<text class="iconfont icon-jiantou"></text>
				</view>
				<view class="distance">
					<text class="iconfont icon-04"></text>
					<text>距离您 896m</text>
				</view>
			</view>
			<view class="way flex">
				<view :class="{'active': way === index}" v-for="(item, index) in wayList" :key="index" @click="cutWay(index)">{{item}}</view>
			</view>
		</view>
		<!-- 优惠活动 -->
		<view class="coupon flex flex-between">
			<text class="desc">"霸气mini卡"超级购券活动，赶紧去购买</text>
			<text class="iconfont icon-jiantou"></text>
		</view>
		<!-- 菜单内容 -->
		<view class="content flex" :style="{height: scrollHeight}">
			<!-- 菜单 -->
			<view class="menus">
				<scroll-view class="scroll-menu" :scroll-y="true">
					<view
						class="menu-item"
						:class="{'active': index === currentMenu}"
						v-for="(item, index) in menuList"
						:key="index"
						@click="chooseMenu(index)"
					>
						<view>{{item.name}}</view>
						<view class="tag" v-show="item.cartNum > 0">{{item.cartNum}}</view>
					</view>
				</scroll-view>
			</view>
			<!-- 商品列表 -->
			<view class="goods-list">
				<scroll-view class="scroll-goods" :scroll-y="true" :scroll-into-view="scrollToView">
					<view class="warp">
						<!-- swiper -->
						<swiper class="swiper" :indicator-dots="true" :autoplay="true">
							<swiper-item v-for="(item, index) in swiperData" :key="index">
								<image :src="item"></image>
							</swiper-item>
						</swiper>
						<!-- goods -->
						<view class="goods-warp">
							<view class="goods-category" v-for="(category, categoryIndex) in goodsList" :key="categoryIndex">
								<view class="goods-category-title" :id="'category' + categoryIndex">{{category.category}}</view>
								<view class="goods-item flex" v-for="(good, goodIndex) in category.goods" :key="goodIndex">
									<image class="goods-img" :src="good.goodsImg"></image>
									<view class="goods-info flex-content flex-c">
										<view class="goods-title">{{good.title}}</view>
										<view class="goods-desc">{{good.desc}}</view>
										<view class="goods-price flex flex-between">
											<text>¥{{good.price}}</text>
											<view class="operationNum flex">
												<button type="default" size="mini" class="icon-btn btn-jian" v-show="changeNum(good.goodsId)" @click="subCart(category.category, good)">
													<text class="iconfont icon-jian"></text>
												</button>
												<view class="num" v-show="changeNum(good.goodsId)">{{changeNum(good.goodsId) ? changeNum(good.goodsId).goods.length : 0}}</view>
												<button type="default" size="mini" class="icon-btn" @click="addCart(category.category, good)">
													<text class="iconfont icon-jiahao"></text>
												</button>
											</view>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
			<!-- 选购商品栏 -->
			<view class="cart-warp flex" v-show="heyteaCart.length">
				<view class="imgIcon">
					<image src="@/assets/images/menu/cart.png"></image>
					<view class="tag">{{totalCart.num}}</view>
				</view>
				<view class="totalPrice">{{totalCart.price}}</view>
				<button type="default" size="mini">去结算</button>
			</view>
		</view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			wayList: ['自取', '外卖'],
			way: 0,
			scrollHeight: '',
			menuList: [
				{
					id: 0,
					name: '奈雪早餐',
					cartNum: 0
				},
				{
					id: 1,
					name: '新品推荐',
					cartNum: 0
				},
				{
					id: 2,
					name: '招牌热卖',
					cartNum: 0
				},
				{
					id: 3,
					name: '软欧包',
					cartNum: 0
				},
				{
					id: 4,
					name: '手作烘焙',
					cartNum: 0
				},
				{
					id: 5,
					name: '芝士茗优茶',
					cartNum: 0
				},
				{
					id: 6,
					name: '无糖茶铺',
					cartNum: 0
				},
				{
					id: 7,
					name: '咖啡',
					cartNum: 0
				},
				{
					id: 8,
					name: '保温加购',
					cartNum: 0
				},
				{
					id: 9,
					name: '共同防疫',
					cartNum: 0
				},
				{
					id: 10,
					name: '企业团餐',
					cartNum: 0
				},
				{
					id: 11,
					name: '三明治',
					cartNum: 0
				},
				{
					id: 12,
					name: '霸气芝士鲜果茶',
					cartNum: 0
				},
				{
					id: 13,
					name: '霸气鲜果茶',
					cartNum: 0
				},
				{
					id: 14,
					name: '霸气冰淇淋鲜果茶',
					cartNum: 0
				},
				{
					id: 15,
					name: '宝藏鲜奶茶',
					cartNum: 0
				},
				{
					id: 16,
					name: '热饮推荐',
					cartNum: 0
				},
				{
					id: 17,
					name: '美好甜品',
					cartNum: 0
				}
			],
			currentMenu: 0,
			swiperData: [
				'https://img-shop.qmimg.cn/s23107/2020/04/27/4ebdb582a5185358c4.jpg?imageView2/2/w/600/h/600',
				'https://images.qmai.cn/s23107/2020/05/08/c25de6ef72d2890630.png?imageView2/2/w/600/h/600',
				'https://img-shop.qmimg.cn/s23107/2020/04/10/add546c1b1561f880d.jpg?imageView2/2/w/600/h/600',
				'https://images.qmai.cn/s23107/2020/04/30/b3af19e0de8ed42f61.jpg?imageView2/2/w/600/h/600',
				'https://img-shop.qmimg.cn/s23107/2020/04/17/8aeb78516d63864420.jpg?imageView2/2/w/600/h/600'
			],
			goodsList: [
				{
					category: '奈雪早餐',
					goods: [
						{
							goodsId: 4,
							goodsImg: 'https://img-shop.qmimg.cn/s23107/2020/04/19/fda6dd99c83af02353.jpg?imageView2/2/w/400/h/400',
							title: '奈雪早餐',
							desc: '购买三明治,享早餐指定饮品半价',
							price: 18.5
						}
					]
				},
				{
					category: '新品推荐',
					goods: [
						{
							goodsId: 1,
							goodsImg: 'https://img-shop.qmimg.cn/s23107/2020/04/19/fda6dd99c83af02353.jpg?imageView2/2/w/400/h/400',
							title: '新品推荐',
							desc: '购买三明治,享早餐指定饮品半价',
							price: 18.5
						},
						{
							goodsId: 8,
							goodsImg: 'https://img-shop.qmimg.cn/s23107/2020/04/19/fda6dd99c83af02353.jpg?imageView2/2/w/400/h/400',
							title: '新品推荐',
							desc: '购买三明治,享早餐指定饮品半价',
							price: 18.5
						},
						{
							goodsId: 10,
							goodsImg: 'https://img-shop.qmimg.cn/s23107/2020/04/19/fda6dd99c83af02353.jpg?imageView2/2/w/400/h/400',
							title: '新品推荐',
							desc: '购买三明治,享早餐指定饮品半价',
							price: 18.5
						},
						{
							goodsId: 12,
							goodsImg: 'https://img-shop.qmimg.cn/s23107/2020/04/19/fda6dd99c83af02353.jpg?imageView2/2/w/400/h/400',
							title: '新品推荐',
							desc: '购买三明治,享早餐指定饮品半价',
							price: 18.5
						}
					]
				}
			],
			scrollToView: 'category0',
			heyteaCart: []
		}
	},
	computed: {
		totalCart () {
			let total = {
				num: 0,
				price: 0
			}
			this.heyteaCart.forEach(goodArr => {
				total.num += goodArr.goods.length
				goodArr.goods.forEach(goodItem => {
					total.price += goodItem.price
				})
			})
			total.price = '¥ ' + total.price
			return total
		}
	},
	onLoad () {
		/**
		 * 从本地获取购物车数据
		 */
		this.heyteaCart = (uni.getStorageSync('heytea_cart') && JSON.parse(uni.getStorageSync('heytea_cart'))) || []
		this.heyteaCart.forEach(cartCategory => {
			this.setMenuCategoryNum(cartCategory.category, cartCategory.goods.length)
		})
	},
	onReady () {
		this.getHeight()
	},
	methods: {
		cutWay (index) {
			this.way = index
		},
		/**
		 * 获取节点
		 */
		getDom (dom) {
			return uni.createSelectorQuery().in(this).select(dom)
		},
		/**
		 * 获取纵向滚动高度
		 */
		getHeight () {
			// 屏幕可使用高度
			const { windowHeight } = uni.getSystemInfoSync()
			new Promise(resolve => {
				// 获取头部高度
				this.getDom('.head').boundingClientRect(headInfo => {
					resolve(headInfo.height)
				}).exec()
			}).then(headHeight => {
				// 获取活动高度
				this.getDom('.coupon').boundingClientRect(couponInfo => {
					this.scrollHeight = windowHeight - headHeight - couponInfo.height + 'px'
				}).exec()
			})
		},
		chooseMenu (index) {
			this.currentMenu = index
			this.scrollToView = 'category' + index
		},
		setMenuCategoryNum (categoryName, count) {
			this.menuList = this.menuList.map(menu => {
				if (categoryName === menu.name) {
					menu.cartNum += count
				}
				return menu
			})
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
.head{
	padding: 20rpx;
	background-color: #FFFFFF;
	.location{
		flex: 1;
		.address{
			font-size: 32rpx;
			margin-bottom: 10rpx;
			.iconfont{
				margin-left: 10rpx;
			}
		}
		.distance{
			font-size: 24rpx;
			color: $themeTextColor;
			.iconfont{
				margin-right: 10rpx;
				color: $themeColor;
			}
		}
	}
	.way{
		font-size: 24rpx;
		color: $themeTextColor;
		border-radius: 100rpx;
		background-color: $themeBgColor-gray;
		view{
			padding: 14rpx 34rpx;
		}
		.active{
			color: #FFFFFF;
			border-radius: inherit;
			background-color: $themeColor;
		}
	}
}
.coupon{
	height: 72rpx;
	padding: 0 20rpx;
	color: $themeColor;
	background-color: $themeBgColor;
	.desc{
		margin-left: 10rpx;
	}
}
.content{
	.menus,
	.goods-list,
	.scroll-menu,
	.scroll-goods{
		height: 100%;
	}
	.menus{
		flex: 2;
		font-size: 26rpx;
		color: $themeTextColor;
		background-color: $themeBgColor-gray;
		.menu-item{
			position: relative;
			padding: 30rpx 20rpx;
			.tag{
				position: absolute;
				top: 16rpx;
				right: 10rpx;
				width: 34rpx;
				height: 34rpx;
				line-height: 34rpx;
				text-align: center;
				color: #FFFFFF;
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
		.active{
			color: $themeTitleColor;
			background-color: #FFFFFF;
		}
	}
	.goods-list{
		flex: 6;
		background-color: #FFFFFF;
		.scroll-goods{
			.warp{
				box-sizing: border-box;
				padding: 20rpx;
				.swiper{
					width: 100%;
					height: 306rpx;
					image{
						width: 100%;
						height: 100%;
						border-radius: 8rpx;
					}
				}
			}
		}
	}
}
.goods-category{
	&:last-child:after{
			content: "";
			display: block;
			width: 100%;
			height: 96rpx;
		}
	.goods-category-title{
		color: $themeTitleColor;
		padding: 30rpx 0;
	}
	.goods-item{
		margin-bottom: 30rpx;
		.goods-img{
			width: 160rpx;
			height: 160rpx;
			margin-right: 20rpx;
			border-radius: 8rpx;
		}
		.goods-info{
			flex: 1;
			padding-right: 14rpx;
			height: 160rpx;
			.goods-title{
				margin-bottom: 10rpx;
			}
			.goods-desc{
				color: $themeTextColor;
				font-size: 24rpx;
				margin-bottom: 10rpx;
				text-overflow: ellipsis;
				overflow: hidden;
				white-space: nowrap;
			}
			.goods-price{
				font-weight: 600;
				.icon-btn{
					width: 44rpx;
					line-height: 44rpx;
					padding: 0;
					margin: 0;
					color: #FFFFFF;
					font-size: 32rpx;
					border-radius: 50%;
					background-color: $themeColor;
				}
				.btn-jian{
					width: 44rpx;
					line-height: 40rpx;
					background-color: transparent;
					color: $themeTextColor;
					border: 1rpx solid $themeTextColor;
					box-sizing: border-box;
					&::after{
						border: none;
					}
				}
				.num{
					width: 44rpx;
					line-height: 44rpx;
					text-align: center;
					font-weight: 0 !important;
				}
			}
		}
	}
}
.cart-warp{
	position: absolute;
	left: 30rpx;
	right: 30rpx;
	bottom: 30rpx;
	height: 96rpx;
	border-radius: 96rpx;
	box-shadow: $box-shadow2;
	background-color: #FFFFFF;
	.imgIcon{
		position: relative;
		margin: 0 30rpx 0 46rpx;
		image{
			width: 96rpx;
			height: 96rpx;
			display: block;
			margin-top: -48rpx;
		}
		.tag{
			position: absolute;
			top: -56rpx;
			right: -8rpx;
			width: 40rpx;
			height: 40rpx;
			border-radius: 50%;
			color: #FFFFFF;
			text-align: center;
			line-height: 40rpx;
			font-size: 24rpx;
			opacity: .9;
			background-color: #FAB714;
		}
	}
	.totalPrice{
		flex: 1;
		color: $themeTitleColor;
		font-size: 32rpx;
	}
	button{
		height: 100%;
		padding: 0 30rpx;
		color: #FFFFFF;
		font-size: 28rpx;
		line-height: 96rpx;
		border-radius: 0 96rpx 96rpx 0;
		background-color: $themeColor;
		&::after{
			border: none;
		}
	}
}
</style>