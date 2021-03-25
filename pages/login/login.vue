<template>
	<view class="container">
		<!-- <cu-custom bgColor="bg-gradual-blue" :isBack="false"><block slot="backText">返回</block><block slot="content">登录</block></cu-custom> -->
		<view class="login-title">用户登录</view>
		<view class="input">
			帐号：<input v-model="username" type="text" placeholder-style="color:rgba(255,255,255,0.6)" placeholder="请输入" />
		</view>
		<view class="input">
			密码：<input v-model="password" type="password" placeholder-style="color:rgba(255,255,255,0.6)" placeholder="请输入" />
		</view>
		<view class="login">
			<button class="login-btn" @click="login" type="default">登录</button>
		</view>
		<view class="register">
			<navigator url="../register/register">新用户注册</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username: '',
				password: ''
			};
		},
		methods: {
			login() {
				// console.log(this.username, this.password)
				this.httpApi({
					url: '/user/login',
					method: 'post',
					data: {
						username: this.username,
						password: this.password
					}
				})
				.then(res => {
					console.log(res)
				})
			}
		}
	}
</script>

<style lang="scss">
	.container {
		width: 100%;
		height: 100vh;
		background-image: url(../../static/login/login_bg.jpg);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		overflow: hidden;

		.login-title {
			font-size: 80rpx;
			color: #FFFFFF;
			text-shadow: 0px 0px 1px #333333;
			text-align: center;
			margin-top: 200rpx;
			margin-bottom: 400rpx;
		}

		.input {
			font-weight: 600;
			margin: 40rpx 0;
			display: flex;
			justify-content: center;
			color: #fff;
			font-size: 40rpx;

			input {
				border: 1rpx solid #fff;
				border-radius: 8rpx;
				height: 60rpx;
				padding: 5rpx 10rpx;
				background: rgba(255, 255, 255, 0.3);
			}
		}

		.login-btn {
			width: 75%;
			background: rgba(255, 255, 255, 0.8);
			color: #333;
			font-weight: 600;
		}

		.register {
			color: rgba(255, 255, 255, 0.6);
			text-align: center;
			padding: 10rpx;
		}
	}
</style>
