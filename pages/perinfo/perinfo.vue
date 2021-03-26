<template name="perinfo">
	<view class="info-container">
		<view class="info">
			<view class="margin-top text-center">
				<view class="cu-avatar xl round bg-blue">
					<text class="avatar-text">{{ (info.name ? info.name : '').substr(0,1) }}</text>
				</view>
			</view>
			<view class="tag-conainer margin-top text-center">
				<view class="cu-capsule round">
					<view class='cu-tag bg-cyan shadow'>
						<text class='cuIcon-friendfamous'></text>
					</view>
					<view class="cu-tag bg-cyan shadow">
						{{ info.name }}
					</view>
				</view>
			</view>
			<view class="cu-list menu sm-border card-menu margin-top">
				<view class="cu-item arrow">
					<navigator class="content" hover-class="none" url="../classManage/classManage" open-type="navigate">
						<text class="cuIcon-creative text-yellow"></text>
						<text class="text-grey">班级管理</text>
					</navigator>
				</view>
				<view class="cu-item arrow">
					<view class="content">
						<image src="/static/logo.png" class="png" mode="aspectFit"></image>
						<text class="text-grey">课程管理</text>
					</view>
				</view>
				<view class="cu-item arrow">
					<button class="cu-btn content" open-type="contact">
						<text class="cuIcon-btn text-olive"></text>
						<text class="text-grey">做题分析</text>
					</button>
				</view>
				<view class="cu-item arrow">
					<navigator class="content" hover-class="none" url="../list/list" open-type="redirect">
						<text class="cuIcon-copy text-orange"></text>
						<text class="text-grey">试题管理</text>
					</navigator>
				</view>
				<view class="cu-item arrow">
					<view class="content">
						<text class="cuIcon-new text-green"></text>
						<text class="text-grey">学生留言</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			info: {
				type: Object,
				default: () => {
					return {
						name: 'Anonymouse'
					}
				}
			}
		},
		data() {
			return {
			};
		}
	}
</script>

<style lang="scss">
	.info-container{
		height: 100vh;
		width: 100%;
		.info{
			width: 100%;
			background-image: url(../../static/mine/mine_bg.jpeg);
			background-repeat: no-repeat;
			background-size: 100% 100%;
			height: calc(100% - 50px);
			overflow: auto;
		}
	}
</style>
