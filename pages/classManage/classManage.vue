<template name="home">
	<view class="home-container">
		<view class="home">
			<scroll-view scroll-y class="page">
				<cu-custom bgColor="bg-gradual-blue" :isBack="true" :isCustom="true">
					<block slot="backText">返回</block>
					<block slot="content">班级管理</block>
					<block slot="right">
						<text class="add-btn" @tap="add">+</text>
					</block>
				</cu-custom>
				<!-- <view class="cu-card">
					<view class="cu-item bg-img shadow-blur" :style="[{backgroundImage:'url('+item.img+')'}]"
						v-for="(item,index) in list" :key="index">
						<view class="cardTitle">
							{{item.title}}
						</view>
					</view>
				</view> -->
				<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg">
					<view class="cu-item" v-for="(item,index) in list" :key="index">
						<view class="content">
							<text class="cuIcon-github text-grey"></text>
							<text class="text-grey">{{item.classname}}</text>
							<button class="cu-btn bg-red round sm shadow" style="float: right;"
								@click="del(item.id)">删除</button>
						</view>
					</view>
				</view>
				<view class="cu-tabbar-height"></view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					// {
					// 	title: '索引列表',
					// 	img: 'https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg',
					// },
					// {
					// 	title: '微动画',
					// 	img: 'https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg',
					// },
					// {
					// 	title: '全屏抽屉',
					// 	img: 'https://image.weilanwl.com/color2.0/plugin/qpct2148.jpg',
					// },
					// {
					// 	title: '垂直导航',
					// 	img: 'https://image.weilanwl.com/color2.0/plugin/qpczdh2307.jpg',
					// },
					// {
					// 	title: '垂直导航',
					// 	img: 'https://image.weilanwl.com/color2.0/plugin/qpczdh2307.jpg',
					// 	url: '../plugin/verticalnav'
					// },
					// {
					// 	title: '垂直导航',
					// 	img: 'https://image.weilanwl.com/color2.0/plugin/qpczdh2307.jpg',
					// 	url: '../plugin/verticalnav'
					// },
					// {
					// 	title: '垂直导航',
					// 	img: 'https://image.weilanwl.com/color2.0/plugin/qpczdh2307.jpg',
					// 	url: '../plugin/verticalnav'
					// },
					// {
					// 	title: '垂直导航',
					// 	img: 'https://image.weilanwl.com/color2.0/plugin/qpczdh2307.jpg',
					// 	url: '../plugin/verticalnav'
					// }
				]
			}
		},
		onShow() {
			this.getList()
		},
		methods: {
			// 添加
			add() {
				// console.log('addBtn-tap')
				uni.navigateTo({
					url: './addClass'
				})
			},
			getList() {
				this.httpApi({
						url: '/findAllClass',
						method: 'get'
					})
					.then(res => {
						// console.log(res)
						const {
							status,
							data
						} = res
						if (status === 10000) {
							console.log(data)
							this.list = data
						}
					})
			},
			del(id) {
				uni.showModal({
					title: '提示',
					content: '确定要删除吗？',
					success:(res) => {
						if (res.confirm) {
							this.httpApi({
									url: '/deleteClass/' + id,
									method: 'get'
								})
								.then(res => {
									// console.log(res)
									const {
										status,
										msg
									} = res
									if (status === 10000) {
										uni.showToast({
											title: msg,
											complete: () => {
												setTimeout(() => {
													this.getList()
												}, 1500)
											}
										})
									}
								})
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.home-container {
		height: 100vh;
		width: 100%;

		.add-btn {
			margin-right: 30rpx;
			font-size: 40rpx;
			cursor: pointer;
		}

		.home {
			width: 100%;
			height: calc(100% - 50px);

			.title {
				font-size: 40rpx;
				font-weight: 600;
			}

			.cardTitle {
				color: #fff;
				padding: 90upx 60upx;
				font-size: 40upx;
				font-weight: 300;
				transform: skew(-10deg, 0deg);
				position: relative;
				text-shadow: 0px 0px 6upx rgba(0, 0, 0, 0.3)
			}

			.cardTitle::before {
				content: "";
				position: absolute;
				width: 60upx;
				height: 6upx;
				border-radius: 20upx;
				background-color: #fff;
				display: block;
				top: 60upx;
				left: 50upx;
				transform: skew(10deg, 0deg);
			}

			.cardTitle::after {
				content: "";
				position: absolute;
				width: 140upx;
				border-radius: 6upx;
				height: 24upx;
				background-color: #fff;
				display: block;
				bottom: 76upx;
				left: 90upx;
				transform: skew(10deg, 0deg);
				opacity: 0.1;
			}
		}
	}
</style>
