<template>
	<view class="contair">
		<view class="bk-img flex-center">
			<image :src="img"></image>
		</view>
		<view class="tips">
			<view class="center">邀请规则</view>
			<view>1.专属海报中的二维码已包含您的邀请码信息</view>
			<view>2 好友扫描您的二维码海报后即可成为您 团队的一员（团长除外）</view>
		</view>
		<!-- <view class="anniu flex-space-between">
			<view class="anniu-1" @click="baocun()">保存</view>
			<view class="anniu-1">分享</view>
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				img: "",
				code:''
			}
		},
		onLoad(options) {
			this.code = options.code;
			console.log(this.code,options.code,'options.code')
		},
		onShow() {
			var obj = this;
			uni.request({
				url: this.$store.state.baseURL + '/api/code/getcode', //仅为示例，并非真实接口地址。
				method: 'GET',
				data: {},
				success: (res) => {
					this.img = res.data.data;
					var config = "";
					var data = {"url":window.location.href.split('#')[0]};
					console.log(data,'window.data')
					uni.request({
						url: this.$store.state.baseURL + '/api/share/getconfig', //仅为示例，并非真实接口地址。
						method: 'GET',
						data: data,
						success: (res) => {
							config = res;
							var wx = require('jweixin-module/index.js');
							
							config = JSON.parse(config.data);
							console.log(config, 'config')
							wx.config(config);
							wx.checkJsApi({
								jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'],
								success: function(res) {
									console.log(res);
									console.log('checkJsApi');
					
								}
							});
							wx.ready(function() { //需在用户可能点击分享按钮前就先调用
								console.log(obj.code,'obj.code')
								wx.updateAppMessageShareData({
									title: '关注公众号', // 分享标题
									desc: '免费领取面膜', // 分享描述
									link: 'https://admin.yuanzai1999.com/index/index/share?code=' + obj.code,
									imgUrl: 'https://sanyijiu.oss-cn-beijing.aliyuncs.com/app/4707385ac82aa7494f8a96d83ce8138.png', // 分享图标
									success: function() {
										// 设置成功
									},
									cancel: function() {
										// 用户取消分享后执行的回调函数
									}
								})
								wx.updateTimelineShareData({
									title: '关注公众号', // 分享标题
									link: '免费领取面膜', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
									imgUrl: 'https://sanyijiu.oss-cn-beijing.aliyuncs.com/app/4707385ac82aa7494f8a96d83ce8138.png', // 分享图标
									success: function() {
									},
									cancel: function() {
										// 用户取消分享后执行的回调函数
									}
								})
							});
					
							wx.error(function(res) {
								console.log('error');
							});
						},
						fail(err) {
							console.log(err)
						}
					});
				},
				fail(err) {
					uni.showToast({
						title: err,
						duration: 2000
					});
				}
			});
			
			// this.fx();
		},
		methods: {
			fx() {



			},
			baocun() {

			}
		}
	}
</script>

<style lang="less" scoped>
	.contair {
		padding-bottom: 48rpx*2;

		.bk-img {
			padding: 40rpx*2 0 27rpx*2;

			image {
				width: 255rpx*2;
				height: 450rpx*2;
			}
		}

		.tips {
			font-size: 15rpx*2;
			color: #666666;
			line-height: 22rpx*2;
			margin: 0 25rpx*2;
			padding: 10rpx*2 23rpx*2 10rpx*2 15rpx*2;
			background-color: #f7f7f7;
			border-radius: 5rpx*2;

			.center {
				font-size: 16rpx*2;
				color: #333333;
				text-align: center;
			}
		}

		.anniu {
			font-size: 16rpx*2;
			color: #FFFFFF;
			line-height: 38rpx*2;
			text-align: center;
			margin: 15rpx*2 25rpx*2 0rpx*2;

			.anniu-1 {
				width: 125rpx*2;
				height: 38rpx*2;
				background: linear-gradient(90deg, #79D4BD 0%, #099999 99%);
				border-radius: 5rpx*2;
			}
		}
	}
</style>
