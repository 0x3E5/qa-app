<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">用户注册</block>
		</cu-custom>
		<form>
			<view class="cu-form-group margin-top">
				<view class="title">用户名</view>
				<input placeholder="请输入用户名" v-model="form.username" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">密码</view>
				<input type="password" placeholder="请输入密码" v-model="form.password" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">姓名</view>
				<input type="text" placeholder="请输入姓名" v-model="form.name" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">性别</view>
				<radio-group @change="setSex">
					<label class="margin-left-sm">
						<radio class="blue radio" value="1" checked></radio>
						<text class="margin-left-sm"> 男</text>
					</label>
					<label class="margin-left-sm">
						<radio class="blue radio" value="0"></radio>
						<text class="margin-left-sm"> 女</text>
					</label>
				</radio-group>
			</view>
			<view class="cu-form-group">
				<view class="title">角色</view>
				<radio-group @change="setRole">
					<label class="margin-left-sm">
						<radio class="blue radio" value="0" checked></radio>
						<text class="margin-left-sm"> 学生</text>
					</label>
					<label class="margin-left-sm">
						<radio class="blue radio" value="1"></radio>
						<text class="margin-left-sm"> 教师</text>
					</label>
				</radio-group>
			</view>
			<view v-if="form.role === '0'" class="cu-form-group margin-top">
				<view class="title">班级选择</view>
				<picker @change="PickerChange" :value="form.classname" :range="picker" range-key="classname">
					<view class="picker">
						{{form.classname !== ''?form.classname:'请选择班级'}}
					</view>
				</picker>
			</view>
		</form>
		<view class="padding flex flex-direction">
			<button class="cu-btn bg-green lg" @click="register">注册</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					username: '',
					password: '',
					name: '',
					classname: '',
					role: '0',
					sex: '1'
				},
				index: -1,
				picker: []
			}
		},
		created() {
			this.getList()
		},
		methods: {
			PickerChange(e) {
				this.form.classname = this.picker[e.detail.value].classname
			},
			setRole(val) {
				this.form.role = val.detail.value
			},
			setSex(val) {
				console.log(val)
				this.form.sex = val.detail.value
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
							// console.log(data)
							this.picker = data
						}
					})
			},
			register() {
				console.log(this.form)
				if (this.form.role === '1') {
					this.form.classname = ''
				}
				this.httpApi({
						url: '/user/register',
						method: 'post',
						data: this.form
					})
					.then(res => {
						// console.log(res)
						const {
							status,
							msg
						} = res
						if (status === 10000) {
							uni.showToast({
								title: '注册成功',
								complete: () => {
									setTimeout(() => {
										uni.navigateBack()
									}, 1500)
								}
							})
						}
					})
					.catch(err => {
						// console.log(err)
					})
			}
		}
	}
</script>

<style>

</style>
