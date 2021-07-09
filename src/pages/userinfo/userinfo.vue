<template>
	<view class="wrap">
		<u-form :model="form" :rules="rules" ref="uForm" :errorType="errorType">
			<u-form-item label-width="150" :label-position="labelPosition" label="昵称" prop="nick">
				<u-input :border="border" placeholder="请输入昵称" v-model="form.nick"></u-input>
			</u-form-item>
			<u-form-item label-width="150" :label-position="labelPosition" label="手机号码" prop="phone">
				<u-input :border="border" placeholder="请输入手机号" v-model="form.phone"></u-input>
			</u-form-item>
			<u-form-item label-width="150" :label-position="labelPosition" label="性别" prop="sex">
				<u-input :border="border" type="select" :select-open="actionSheetShow" v-model="form.sex" placeholder="请选择性别" @click="actionSheetShow = true"></u-input>
			</u-form-item>
			<u-form-item label-width="150" :label-position="labelPosition" label="生日" prop="birthday">
				<u-input :border="border" placeholder="生日当天有惊喜" v-model="form.birthday" @click="pickerShow = true"></u-input>
			</u-form-item>
			<u-form-item label-width="150" :label-position="labelPosition" label="入会时间" prop="memberTime">
				<u-input :border="border" disabled v-model="form.memberTime"></u-input>
			</u-form-item>
		</u-form>
		<u-button @click="submit" class="submit" hover-class="none">保存</u-button>
		<u-action-sheet :list="actionSheetList" v-model="actionSheetShow" @click="actionSheetCallback"></u-action-sheet>
		<u-picker mode="time" v-model="pickerShow" @confirm="regionConfirm"></u-picker>
	</view>
</template>

<script>
export default {
	data() {
		let that = this;
		return {
			form: {
				nick: '',
				phone: '',
				sex: '',
				birthday: '',
				memberTime: new Date().toISOString()
			},
			rules: {
				nick: [
					{
						required: true,
						message: '请输入昵称',
						trigger: 'blur' ,
					},
					{
						min: 3,
						max: 5,
						message: '昵称长度在3到5个字符',
						trigger: ['change','blur'],
					}
					// 异步验证，用途：比如用户注册时输入完账号，后端检查账号是否已存在
					// {
					// 	trigger: ['blur'],
					// 	// 异步验证需要通过调用callback()，并且在里面抛出new Error()
					// 	// 抛出的内容为需要提示的信息，和其他方式的message属性的提示一样
					// 	asyncValidator: (rule, value, callback) => {
					// 		this.$u.post('/ebapi/public_api/index').then(res => {
					// 			// 如果验证出错，需要在callback()抛出new Error('错误提示信息')
					// 			if(res.error) {
					// 				callback(new Error('姓名重复'));
					// 			} else {
					// 				// 如果没有错误，也要执行callback()回调
					// 				callback();
					// 			}
					// 		})
					// 	},
					// }
				],
				sex: [
					{
						required: true,
						message: '请选择性别',
						trigger: 'change'
					}
				],
				phone: [
					{
						required: true,
						message: '请输入手机号',
						trigger: ['change','blur'],
					},
					{
						validator: (rule, value, callback) => {
							// 调用uView自带的js验证规则，详见：https://www.uviewui.com/js/test.html
							return this.$u.test.mobile(value);
						},
						message: '手机号码不正确',
						// 触发器可以同时用blur和change，二者之间用英文逗号隔开
						trigger: ['change','blur'],
					}
				],
				birthday: [
					{
						required: true,
						message: '请选择出生日期',
						trigger: 'change'
					}
				]
			},
			border: false,
			actionSheetList: [
				{
					text: '男'
				},
				{
					text: '女'
				},
				{
					text: '保密'
				}
			],
			actionSheetShow: false,
			pickerShow: false,
			labelPosition: 'left',
			errorType: ['toast']
		};
	},
	onLoad() {

	},
	onReady() {
		this.$refs.uForm.setRules(this.rules);
	},
	methods: {
		submit() {
			this.$refs.uForm.validate(valid => {
				if (valid) {
					if(!this.model.agreement) return this.$u.toast('请勾选协议');
					console.log('验证通过');
				} else {
					console.log('验证失败');
				}
			});
		},
		// 点击actionSheet回调
		actionSheetCallback(index) {
			// uni.hideKeyboard();
			this.form.sex = this.actionSheetList[index].text
		},
		// 选择日期回调
		regionConfirm(e) {
			this.form.birthday = e.year + '-' + e.month + '-' + e.day
		},
		borderChange(index) {
			this.border = !index;
		},
		radioCheckboxChange(index) {
			if(index == 0) {
				this.radioCheckWrap = false;
				this.radioCheckWidth = 'auto';
			} else if(index == 1) {
				this.radioCheckWrap = true;
				this.radioCheckWidth = 'auto';
			} else if(index == 2) {
				this.radioCheckWrap = false;
				this.radioCheckWidth = '50%';
			}
		},
		labelPositionChange(index) {
			this.labelPosition = index == 0 ? 'left' : 'top';
		},
		codeChange(text) {
			this.codeTips = text;
		},
		errorChange(index) {
			if(index == 0) this.errorType = ['message'];
			if(index == 1) this.errorType = ['toast'];
			if(index == 2) this.errorType = ['border-bottom'];
			if(index == 3) this.errorType = ['border'];
		}
	}
};
</script>

<style scoped lang="scss">
.wrap {
	padding: 20rpx 30rpx;
	.u-form{
		background-color: #FFFFFF;
		.u-form-item{
			font-size: 14px;
			color: $themeTitleColor;
			padding: 12rpx 30rpx;
		}
	}
	.submit{
		width: 90%;
		margin-top: 360rpx;
		color: #FFFFFF;
		border-radius: 100rpx;
		background-color: $themeColor;
		opacity: 0.8;
		&::after{
			border: none;
		}
	}
}
</style>
