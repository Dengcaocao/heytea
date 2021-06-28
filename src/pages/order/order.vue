<template>
	<view class="order">
		<!-- 定位 -->
		<view class="head flex flex-between">
			<view class="location">
				<view class="address">
					<text>卓悦中心ONE AVENUE店</text>
					<text class="iconfont">></text>
				</view>
				<view class="distance">
					<text class="iconfont">></text>
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
			<text class="iconfont">></text>
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
					>{{item}}</view>
				</scroll-view>
			</view>
			<!-- 商品列表 -->
			<view class="goods-list">
				<scroll-view class="scroll-goods" :scroll-y="true">
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
								<view class="goods-category-title">{{category.category}}</view>
								<view class="goods-item flex" v-for="(good, goodIndex) in category.goods" :key="goodIndex">
									<image class="goods-img" :src="good.goodsImg"></image>
									<view class="goods-info flex-content flex-c">
										<view class="goods-title">{{good.title}}</view>
										<view class="goods-desc">{{good.desc}}</view>
										<view class="goods-price flex flex-between">
											<text>¥{{good.price}}</text>
											<text class="iconfont">+</text>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
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
				'奈雪早餐',
				'新品推荐',
				'招牌热卖',
				'软欧包',
				'手作烘焙',
				'芝士茗优茶',
				'无糖茶铺',
				'咖啡',
				'保温加购',
				'共同防疫',
				'企业团餐',
				'三明治',
				'霸气芝士鲜果茶',
				'霸气鲜果茶',
				'霸气冰淇淋鲜果茶',
				'宝藏鲜奶茶',
				'热饮推荐',
				'美好甜品'
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
							goodsImg: 'https://img-shop.qmimg.cn/s23107/2020/04/19/fda6dd99c83af02353.jpg?imageView2/2/w/400/h/400',
							title: '奈雪早餐',
							desc: '购买三明治,享早餐指定饮品半价',
							price: 18.5
						}
					]
				},
				{
					category: '奈雪早餐',
					goods: [
						{
							goodsImg: 'https://img-shop.qmimg.cn/s23107/2020/04/19/fda6dd99c83af02353.jpg?imageView2/2/w/400/h/400',
							title: '奈雪早餐',
							desc: '购买三明治,享早餐指定饮品半价',
							price: 18.5
						},
						{
							goodsImg: 'https://img-shop.qmimg.cn/s23107/2020/04/19/fda6dd99c83af02353.jpg?imageView2/2/w/400/h/400',
							title: '奈雪早餐',
							desc: '购买三明治,享早餐指定饮品半价',
							price: 18.5
						},
						{
							goodsImg: 'https://img-shop.qmimg.cn/s23107/2020/04/19/fda6dd99c83af02353.jpg?imageView2/2/w/400/h/400',
							title: '奈雪早餐',
							desc: '购买三明治,享早餐指定饮品半价',
							price: 18.5
						},
						{
							goodsImg: 'https://img-shop.qmimg.cn/s23107/2020/04/19/fda6dd99c83af02353.jpg?imageView2/2/w/400/h/400',
							title: '奈雪早餐',
							desc: '购买三明治,享早餐指定饮品半价',
							price: 18.5
						}
					]
				}
			]
		}
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
		}
		.distance{
			font-size: 24rpx;
			color: $themeTextColor;
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
			padding: 30rpx 20rpx;
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
			}
		}
	}
}
</style>