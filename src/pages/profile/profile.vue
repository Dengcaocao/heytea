<template>
	<view class="profile">
		<!-- bg -->
		<view class="bg">
			<image src="https://img-shop.qmimg.cn/s16/images/2020/01/20/9a82219bedcae5c2.jpeg"></image>
			<button type="default" size="mini" class="member-code flex">
				<image class="code" src="@/assets/images/profile/hym.png"></image>
				<text class="txt">会员码</text>
			</button>
		</view>
		<!-- content -->
		<view class="content">
			<!-- 用户信息 -->
			<view class="info-warp">
				<view class="user-info flex">
					<view class="avatar">
						<image src="@/assets/images/profile/default.png" mode="widthFix"></image>
					</view>
					<view class="warp">
						<view class="name">请点击授权登录</view>
						<view class="growth-value">当前成长值0/0</view>
						<view class="pregress"></view>
					</view>
					<view class="privilege flex-align">
						<text>会员权益</text>
						<text class="iconfont icon-jiantou"></text>
					</view>
				</view>
				<Account itemPadding="30rpx" countMarginBottom="20rpx" />
			</view>
			<!-- 新会员 -->
			<view class="new-member">
				<view class="tips flex-align flex-between">
					<text>新用户加入会员，享会员权益</text>
					<text>立即加入</text>
				</view>
				<MemberCategory widthVal="80rpx" />
			</view>
			<!-- ad -->
			<view class="ad">
				<image src="@/assets/images/profile/banner.png"></image>
			</view>
		</view>
		<!-- service -->
		<view class="service">
			<view class="title">我的服务</view>
			<view class="service-category flex">
				<view class="service-item flex flex-c" v-for="(serviceItem, index) in serviceCategory" :key="index" @click="toSignPage(serviceItem.pageUrl)">
					<view class="imgBox">
						<image :src="serviceItem.imgUrl"></image>
					</view>
					<view class="name">{{serviceItem.name}}</view>
				</view>
			</view>
		</view>
		<view class="foot">会员卡适用于奈雪的茶和奈雪酒屋指定范围</view>
	</view>
</template>
<script>
import MemberCategory from '@/components/memberCategory.vue'
import Account from '@/components/account.vue'
export default {
	data () {
		return {
			serviceCategory: [
				{
					imgUrl: require('@/assets/images/profile/jfqd.png'),
					name: '积分签到',
					pageUrl: '/pages/sign/sign'
				},
				{
					imgUrl: require('@/assets/images/profile/stxy.png'),
					name: '送她心愿'
				},
				{
					imgUrl: require('@/assets/images/profile/nxsc.png'),
					name: '奈雪商城'
				},
				{
					imgUrl: require('@/assets/images/profile/lxkf.png'),
					name: '联系客服'
				},
				{
					imgUrl: require('@/assets/images/profile/wddd.png'),
					name: '我的订单'
				},
				{
					imgUrl: require('@/assets/images/profile/wdzl.png'),
					name: '我的资料'
				},
				{
					imgUrl: require('@/assets/images/profile/shdz.png'),
					name: '收货地址'
				},
				{
					imgUrl: require('@/assets/images/profile/gdfw.png'),
					name: '更多服务'
				}
			]
		}
	},
	components: {
		MemberCategory,
		Account
	},
	methods: {
		toSignPage (url) {
			uni.navigateTo({
				url
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
		height: 516rpx;
		display: block;
	}
	.member-code{
		position: absolute;
		top: 40rpx;
		right: 40rpx;
		border-radius: 100rpx;
		color: $themeColor;
		font-size: 24rpx;
		background-color: #f8f8f8;
		&::after{
			border: none;
		}
		.code{
			width: 30rpx;
			height: 30rpx;
			margin-right: 10rpx;
		}
	}
}
.content{
	padding: 0 30rpx;
}
.info-warp{
	position: relative;
	z-index: 99;
	margin-top: -114rpx;
	border-radius: $border-radius;
	background-color: #FFFFFF;
	box-shadow: $box-shadow;
	margin-bottom: $margin-bottom;
	.user-info{
		.avatar{
			width: 160rpx;
			height: 160rpx;
			padding: 10rpx;
			box-sizing: border-box;
			border-radius: 50%;
			margin: -34rpx 34rpx 0 34rpx;
			box-shadow: 0 0 20rpx rgba(39, 37, 37, 0.2);
			background-color: #FFFFFF;
			image{
				width: 100%;
				border-radius: inherit;
			}
		}
		.warp{
			flex: 1;
			margin-top: 20rpx;
			.name{
				font-weight: 700;
				font-size: 32rpx;
			}
			.growth-value{
				font-size: 24rpx;
				color: $themeTextColor;
			}
			.pregress{
				width: 100%;
				height: 12rpx;
				background-color: rgb(235, 235, 235);
			}
		}
		.privilege{
			color: #FFFFFF;
			font-size: 24rpx;
			margin-left: 34rpx;
    	padding: 10rpx 0 10rpx 30rpx;
			box-sizing: border-box;
			border-radius: 100rpx 0 0 100rpx;
			background-color: #FAB714;
		}
	}
	.account{
		.account-item{
			flex: 1;
			text-align: center;
			padding: 30rpx;
			.count{
				font-weight: 700;
				color: $themeTitleColor;
				margin-bottom: 20rpx;
				font-size: 40rpx;
			}
			.name{
				font-size: 24rpx;
				color: $themeTextColor;
			}
		}
	}
}
.new-member{
	padding: 30rpx;
	margin-bottom: $margin-bottom;
	border-radius: $border-radius;
	background-color: #FFFFFF;
	box-shadow: $box-shadow;
	.tips{
		text:nth-child(1){
			color: $themeTitleColor;
		}
		text:nth-child(2){
			color: $themeColor;
		}
	}
}
.ad{
	height: 160rpx;
	margin-bottom: $margin-bottom;
	image{
		width: 100%;
		height: 100%;
		border-radius: $border-radius;
	}
}
.service{
	padding: 32rpx 30rpx 10rpx;
	box-shadow: $box-shadow;
	background-color: #FFFFFF;
	.title{
		font-size: 32rpx;
		font-weight: 700;
		color: $themeTitleColor;
		margin-bottom: 20rpx;
	}
	.service-category{
		flex-wrap: wrap;
		.service-item{
			width: 25%;
			margin-bottom: 40rpx;
			.imgBox{
				image{
					width: 80rpx;
					height: 80rpx;
					display: block;
					margin-bottom: 20rpx;
				}
			}
			.name{
				font-size: 24rpx;
				color: $themeTextColor;
			}
		}
	}
}
.foot{
	font-size: 22rpx;
	color: $themeTextColor;
	padding: 30rpx 0;
	text-align: center;
}
</style>