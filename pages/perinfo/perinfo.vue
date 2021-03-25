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
					<view class="content">
						<text class="cuIcon-circlefill text-grey"></text>
						<text class="text-grey">图标 + 标题</text>
					</view>
				</view>
				<view class="cu-item arrow">
					<view class="content">
						<image src="/static/logo.png" class="png" mode="aspectFit"></image>
						<text class="text-grey">图片 + 标题</text>
					</view>
				</view>
				<view class="cu-item arrow">
					<button class="cu-btn content" open-type="contact">
						<text class="cuIcon-btn text-olive"></text>
						<text class="text-grey">Open-type 按钮</text>
					</button>
				</view>
				<view class="cu-item arrow">
					<navigator class="content" hover-class="none" url="../list/list" open-type="redirect">
						<text class="cuIcon-discoverfill text-orange"></text>
						<text class="text-grey">Navigator 跳转</text>
					</navigator>
				</view>
				<view class="cu-item arrow">
					<view class="content">
						<text class="cuIcon-emojiflashfill text-pink"></text>
						<text class="text-grey">头像组</text>
					</view>
					<view class="action">
						<view class="cu-avatar-group">
							<view class="cu-avatar round sm" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>
							<view class="cu-avatar round sm" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg);"></view>
							<view class="cu-avatar round sm" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg);"></view>
							<view class="cu-avatar round sm" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg);"></view>
						</view>
						<text class="text-grey text-sm">4 人</text>
					</view>
				</view>
				<view class="cu-item arrow">
					<view class="content">
						<text class="cuIcon-btn text-green"></text>
						<text class="text-grey">按钮</text>
					</view>
					<view class="action">
						<button class="cu-btn round bg-green shadow">
							<text class="cuIcon-upload"></text> 上传</button>
					</view>
				</view>
				<view class="cu-item arrow">
					<view class="content">
						<text class="cuIcon-tagfill text-red  margin-right-xs"></text>
						<text class="text-grey">标签</text>
					</view>
					<view class="action">
						<view class="cu-tag round bg-orange light">音乐</view>
						<view class="cu-tag round bg-olive light">电影</view>
						<view class="cu-tag round bg-blue light">旅行</view>
					</view>
				</view>
				<view class="cu-item arrow">
					<view class="content">
						<text class="cuIcon-warn text-green"></text>
						<text class="text-grey">文本</text>
					</view>
					<view class="action">
						<text class="text-grey text-sm">小目标还没有实现！</text>
					</view>
				</view>
				<view class="cu-item">
					<view class="content padding-tb-sm">
						<view>
							<text class="cuIcon-clothesfill text-blue margin-right-xs"></text> 多行Item</view>
						<view class="text-gray text-sm">
							<text class="cuIcon-infofill margin-right-xs"></text> 小目标还没有实现！</view>
					</view>
<!-- 					<view class="action">
						<switch class="switch-sex" @change="SwitchSex" :class="skin?'checked':''" :checked="skin?true:false"></switch>
					</view> -->
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
