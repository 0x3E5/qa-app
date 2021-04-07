<template name="home">
	<view class="home-container">
		<view class="home">
			<scroll-view scroll-y class="page">
				<cu-custom bgColor="bg-gradual-blue" :isBack="true" :isCustom="true">
					<block slot="backText">返回</block>
					<block slot="content">试题管理</block>
					<block slot="right">
						<text class="add-btn" @tap="add">+</text>
					</block>
				</cu-custom>
				<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg">
					<view class="cu-item" v-for="(item,index) in list" :key="index">
						<view class="content" @click="goWor(item)">
							<text class="cuIcon-edit text-grey"></text>
							<text class="text-grey">{{item.name}}</text>
							<button class="cu-btn bg-red round sm shadow" style="float: right;"
								@click.stop="del(item.id)">删除</button>
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
					{
						id: 1,
						name: '单元测试1',
					}
				]
			}
		},
		onShow() {
			// this.getList()
		},
		methods: {
			// 添加
			add() {
				// console.log('addBtn-tap')
				uni.navigateTo({
					url: './addWor'
				})
			},
			getList() {
				this.httpApi({
						url: '/Classify/findAll',
						method: 'get'
					})
					.then(res => {
						console.log(res)
						const {
							status,
							data
						} = res
						if (status === 10000) {
							// console.log(data)
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
									url: '/Classify/delete?id=' + id,
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
			},
			goWor(item) {
				// console.log(id)
				uni.setStorageSync('curCid',item.id)
				uni.navigateTo({
					url:`./worList?id=${item.id}&name=${item.name}`
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
