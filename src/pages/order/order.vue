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
			currentMenu: 0
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
	}
}
</style>