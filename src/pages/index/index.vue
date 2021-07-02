<template>
	<view class="index">
		<!-- bg -->
		<view class="bg">
			<image src="https://img-shop.qmimg.cn/s23107/2020/04/26/3eb7808bf105262604.jpg"></image>
			<view class="info">
				<view class="username">您好，游客</view>
				<view class="slogan">一杯奶茶，一口软欧包，在奈雪遇见两种美好</view>
			</view>
		</view>
		<!-- content -->
		<view class="content">
			<!-- way -->
			<view class="way flex">
				<view class="invite item flex flex-c">
					<image src="@/assets/images/index/zq.png" class="icon"></image>
					<text class="title">自取</text>
				</view>
				<view class="take-out item flex flex-c">
					<image src="@/assets/images/index/wm.png" class="icon"></image>
					<text class="title">外卖</text>
				</view>
			</view>
			<!-- member -->
			<view class="member flex">
				<view class="integral-info">
					<view class="integral flex-align">
						<text class="title">我的积分</text>
						<text class="value">{{1012}}</text>
					</view>
					<view class="conversion">
						<text>进入积分商城兑换奈雪券及周边好礼</text>
						<text class="iconfont icon-jiantou"></text>
					</view>
				</view>
				<view class="member-code flex flex-c" @click="toPage">
					<image src="@/assets/images/index/qrcode.png" mode="widthFix"></image>
					<text>会员码</text>
				</view>
			</view>
			<!-- category -->
			<view class="category">
				<view class="store">
					<image src="@/assets/images/index/csc.png" class="icon" mode="widthFix"></image>
					<view class="store-desc">
						<view class="title">奈雪的茶商城</view>
						<view class="desc">优质茶礼盒，网红零食</view>
					</view>
					<image src="@/assets/images/index/yzclh.png" class="bg" mode="widthFix"></image>
				</view>
				<view class="activity flex-align category-item">
					<image src="@/assets/images/index/mcsb.png" class="icon" mode="widthFix"></image>
					<text>买茶送包</text>
					<image  src="@/assets/images/index/mcsb_bg.png" class="bg" mode="widthFix"></image>
				</view>
				<view class="card-bag flex-align category-item">
					<image src="@/assets/images/index/hyjb.png" class="icon" mode="widthFix"></image>
					<text>会员劵包</text>
					<image  src="@/assets/images/index/hyjb_bg.png" class="bg" mode="widthFix"></image>
				</view>
			</view>
			<!-- noveity -->
			<view class="noveity">
				<view class="noveity-head flex flex-between">
					<text class="title">会员新鲜事</text>
					<text class="iconfont icon-youjiantou_huaban"></text>
				</view>
				<view class="banner">
					<view class="banner-item">
						<image src="https://img-shop.qmimg.cn/s23107/2020/04/27/0039bf41c9ebd50a2c.jpg"></image>
						<text>"梅"你不行 | 霸气杨梅清爽回归</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		computed: {
			...mapState({
				platform: state => state.device.device.platform
			})
		},
		onLoad() {

		},
		methods: {
			toPage () {
				uni.navigateTo({
					url: '/pages/member-code/member-code'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.bg{
		position: relative;
		image{
			width: 100%;
			height: 600rpx;
		}
		.info{
			position: absolute;
			top: calc(50rpx + var(--status-bar-height));
			left: 40rpx;
			color: #fff;
			.username{
				font-size: 32rpx;
				margin-bottom: 10rpx;
			}
			.slogan{
				font-size: 24rpx;
			}
		}
	}
	.content{
		padding: 0 30rpx;
	}
	.way{
		position: relative;
		z-index: 99;
		padding: 30rpx 0;
		border-radius: 10rpx;
		margin-top: -112rpx;
		margin-bottom: 30rpx;
		background-color: #fff;
		box-shadow: $box-shadow;
		.item{
			flex: 1;
			position: relative;
			&:nth-child(1)::after{
				content: "";
				position: absolute;
				right: 0;
				width: 1rpx;
				height: 100%;
				background-color: #ddd;
				transform: scaleX(0.5) scaleY(0.8);
			}
			.icon{
				width: 84rpx;
				height: 84rpx;
				margin: 20rpx;
			}
			.title{
				font-size: 30rpx;
				color: #5A5B5C;
				font-weight: 600;
			}
		}
	}
	.member{
		border-radius: 10rpx;
		padding: 30rpx;
		margin-bottom: 30rpx;
		background-color: #fff;
		box-shadow: $box-shadow;
		.integral-info{
			flex: 1;
			.integral{
				color: $themeTitleColor;
				.value{
					color: #000;
					font-size: 44rpx;
					font-weight: bold;
				}
			}
			.conversion{
				display: flex;
				align-items: center;
				font-size: 24rpx;
				color: $themeTextColor;
			}
		}
		.member-code{
			font-size: 24rpx;
			color: $themeColor;
			image{
				width: 40rpx;
				height: 40rpx;
				margin-bottom: 10rpx;
			}
		}
	}
	.category{
		display: grid;
		grid-template-rows: repeat(2, 1fr);
		grid-template-columns: repeat(2, 1fr);
		grid-template-areas: 
            "a b"
            "a c";
		gap: 20rpx;
		padding: 20rpx;
		border-radius: 10rpx;
		margin-bottom: 30rpx;
		background-color: #fff;
		box-shadow: $box-shadow;
		.store{
			position: relative;
			display: flex;
			grid-area: a;
			padding: 20rpx;
			border-radius: 6rpx;
			justify-content: flex-start;
			background-color: #F2F2E6;
			.icon{
				width: 30rpx;
				margin-right: 10rpx;
			}
			.store-desc{
				font-size: 24rpx;
				.title{
					color: $themeTitleColor;
				}
				.desc{
					color: $themeTextColor;
					font-size: 20rpx;
				}
			}
			.bg{
				position: absolute;
				right: 0;
				bottom: 0;
				height: 122rpx;
    		width: 214rpx;
			}
		}
		.activity{
			background-color: #FDF3F2;
		}
		.card-bag{
			background-color: #FCF6D4;
		}
		.category-item{
			position: relative;
			height: 84rpx;
			font-size: 24rpx;
			padding: 20rpx;
			border-radius: 6rpx;
			color: $themeTitleColor;
			box-sizing: content-box;
			.icon{
				width: 30rpx;
				margin-right: 10rpx;
			}
			.bg{
				position: absolute;
				right: 0;
				bottom: 0;
				width: 120rpx;
			}
		}
	}
	.noveity{
		margin-bottom: 30rpx;
		.title{
			font-size: 32rpx;
    	font-weight: bold;
			padding: 20rpx 0;
		}
		.iconfont{
			font-size: 40rpx;
			font-weight: 500;
			color: $themeTextColor;
		}
		.banner{
			.banner-item{
				position: relative;
				height: 240rpx;
				image{
					width: 100%;
					height: 100%;
					border-radius: 8rpx;
					display: block;
				}
				text{
					position: absolute;
					left: 16rpx;
					bottom: 30rpx;
					font-size: 32rpx;
					color: #fff;
				}
			}
		}
	}
</style>
