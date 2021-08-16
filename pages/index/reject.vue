<template>
	<view class="contair">
		<view class="tips-tem">
			<view class="tips-tem-1">提现金额（¥）: {{items.amount}}</view>
			<view class="tips-tem-1">提现机构：杭州元载科技有限公司</view>
			<view class="tips-tem-1">提现状态：已驳回</view>
			<view class="tips-tem-2">驳回提示：{{items.reject_reason}}</view>
			
			<view class="tips-tem-1">
				<text class="tips-tem-1-1">提现时间：</text>
				<text class="tips-tem-time">{{items.create_time}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				items:''
			};
		},
		onLoad(options) {
			this.items = JSON.parse(options.items);
			console.log(options,'options-reject')
			
		},
		methods:{
			
		}
	}
</script>

<style lang="less" scoped>
.contair{
	border-top: 3rpx solid #cfcfcf;
	font-size: 26rpx;
	color: #999999;
	padding:  0 30rpx;
	line-height: 1;
	.tips-tem{
		padding: 40rpx 40rpx 35rpx 25rpx;
		border-bottom: 2rpx solid #c2c2c2;
		.tips-tem-1{
			margin-bottom: 20rpx;
			.tips-tem-1-1{
				
			}
			.tips-tem-time{
				font-size: 28rpx;
			}
		}
		.tips-tem-2{
			margin-bottom: 15rpx;
			color: #333333;
			line-height: 36rpx;
		}
		
	}
}
</style>
