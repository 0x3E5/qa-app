<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">添加题目</block>
		</cu-custom>
		<form>
			<view class="cu-form-group align-start">
				<view class="title">题目</view>
				<textarea maxlength="200" v-model="question.question"
					placeholder="请输入题目内容"></textarea>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">选项A</view>
				<input placeholder="请输入选项A" v-model="optionArr[0]" name="input"></input>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">选项B</view>
				<input placeholder="请输入选项B" v-model="optionArr[1]" name="input"></input>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">选项C</view>
				<input placeholder="请输入选项C" v-model="optionArr[2]" name="input"></input>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">选项D</view>
				<input placeholder="请输入选项D" v-model="optionArr[3]" name="input"></input>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">答案</view>
				<input placeholder="请输入题目答案" v-model="question.answer" name="input"></input>
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
				cid: null,
				optionArr:[
					'',
					'',
					'',
					''
				],
				question: {
					cid: '',
					uid: '',
					question: '',
					option: '',
					answer: '',
				}
			};
		},
		methods: {
			add() {
				this.question.uid = JSON.parse(uni.getStorageSync('info')).id
				this.question.cid = uni.getStorageSync('curCid')
				this.question.option = this.optionArr.join(';|;')
				// console.log(this.question)
				this.httpApi({
						url: '/Problem/add',
						method: 'post',
						data: this.question
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
											if (item.route === 'pages/wor/worList') {
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
