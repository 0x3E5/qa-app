<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">添加班级</block>
		</cu-custom>
		<form>
			<view class="cu-form-group margin-top">
				<view class="title">班级名称</view>
				<input placeholder="请输入班级名称" v-model="classname" name="input"></input>
			</view>
			<view class="padding flex flex-direction">
				<button class="cu-btn bg-blue margin-tb-sm lg" @click="add">添加</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				classname: ''
			};
		},
		methods: {
			add() {
				this.httpApi({
						url: '/insertClass',
						method: 'post',
						data: {
							id: '',
							classname: this.classname
						}
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
										uni.navigateBack()
										const pages = getCurrentPages()
										pages.forEach(item => {
											if (item.route === 'pages/classManage/classManage'){
												item.getList()
											}
										})
									}, 1500)
								}
							})
						}
					})
			}
		}
	}
</script>

<style lang="scss">

</style>
