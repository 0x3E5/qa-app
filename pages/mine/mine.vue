<template>
	<view>
		<home v-if="PageCur==='home'"></home>
		<perinfo v-if="PageCur === 'mine'" :info="info"></perinfo>
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="home">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/basics' + [PageCur=='home'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='basics'?'text-green':'text-gray'">答题</view>
			</view>
			<view class="action" @click="NavChange" data-cur="mine">
				<view class="cuIcon-cu-image">
					<image :src="'/static/tabbar/about'+ [PageCur == 'mine'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='mine'?'text-green':'text-gray'">我的</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				PageCur: 'home',
				info: null
			}
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			}
		},
		onShow() {
			try{
				this.info = JSON.parse(uni.getStorageSync('info'))
			}catch (e) {
				this.info = {
					name: 'Anonymouse'
				}
			}
		}
	}
</script>

<style>

</style>
