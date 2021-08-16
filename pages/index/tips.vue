<template>
	<view class="contair">
		<!-- 1成为认证会员并填写资料 2-->
		<image class="img" src="../../static/img/img04.png"></image>
		<view :class="state == 3 ? 'member2' : 'member1' " >
			<view class="p-t245" >
				<view class="tips-text1"  v-if="state == 2 && isdizhi == 0">
					<view>恭喜您已成为认证会员！</view>
					<view>请填写相关资料领取会员专享礼盒</view>
				</view>
				<view class="tips-text1"  v-if="state == 2 && isdizhi == 1">
					<view>恭喜您升级为认证会员！</view>
					<view>信息提交已完成</view>
					<view>您可立即享受认证会员的专享福利</view>
				</view>
				<view class="tips-text1"  v-if="state == 4 && isdizhi == 0">
					<view>恭喜您已成为团长！</view>
					<view>请填写相关资料领取会员专享礼盒</view>
				</view>
				<view class="tips-text1"  v-if="state == 4 && isdizhi == 1">
					<view>恭喜您已成为团长！</view>
					<view>面膜专享礼盒已备好，请您坐等发货</view>
				</view>
				<view class="tips-text2"  v-if="state == 3">
					<view>面膜专享礼盒已备好，请您坐等发货</view>
				</view>
				<view class="yes"  v-if="state == 2 && isdizhi == 0" @click="tiaozhuan(2)">确定</view>
				<view class="yes"  v-if="state == 2 && isdizhi == 1" @click="tiaozhuan(3)">确定</view>
				<view class="yes" v-if="state == 3 " @click="tiaozhuan(3)">确定</view>
				<view class="yes" v-if="state == 4 && isdizhi == 0" @click="tiaozhuan(2)">确定</view>
				<view class="yes" v-if="state == 4 && isdizhi == 1" @click="tiaozhuan(3)">确定</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				state:3	,//2成为认证会员要去填写信息 3填写信息完成跳转 4成为团长跳转填写信息
				isdizhi:0,
			}
		},
		onLoad(options) {
			this.state = options.state;
			console.log(this.state,'tips-state')
		},
		onShow(){
			this.weizhi();
		},
		methods: {
			weizhi(){
				let obj = this;
				uni.request({
				    url: this.$store.state.baseURL + '/api/address/getdefault', //发送信息
				    method: 'GET',
					data: {},
					header: {  
					    'content-type': 'application/x-www-form-urlencoded',  
					}, 
				    success: (res) => {
						obj.isdizhi = res.data;
						console.log(res.data,'res.data')
					},
					fail(err) {
						uni.showToast({
						    title: err,
						    duration: 2000
						});
					}
				});
			},
			tiaozhuan(item){
				console.log(1111)
				console.log(item,'item') //2 
				if(item == 2){
					uni.navigateTo({
					    url: 'xinxi'
					});
				}else{
					WeixinJSBridge.call('closeWindow');
				}
			}
		}
	}
</script>

<style lang="less" scoped>
.contair{
	position: relative;
	margin-top: -2rpx*2;
	.img{
		position: absolute;
		top: 305rpx*2;
		left: 67rpx*2;
		width: 240rpx*2;
		height: 120rpx*2;
		z-index: -10;
	}
	.member1{
		width: 375rpx*2;
		height: 812rpx*2;
		background-image: url(../../static/img/tishi.png);
		background-repeat: no-repeat;
		background-size: 375rpx*2 812rpx*2;
		.tips-text1{
			margin:0rpx*2 16rpx*2;
			border: 1rpx*2 solid #FFFFFF;
			box-shadow: 0rpx*2 0rpx*2 9rpx*2 0rpx*2 rgba(16, 70, 70, 0.61);
			border-radius: 5rpx*2;
			padding: 25rpx*2 24rpx*2 20rpx*2 16rpx*2 ;
			font-size: 18rpx*2;
			color: #FFFFFF;
			line-height: 24rpx*2;
			letter-spacing: 2rpx*2;
		}
		
	}
	.member2{
		width: 375rpx*2;
		height: 812rpx*2;
		background-image: url(../../static/img/yitianxiexinxi.png);
		background-repeat: no-repeat;
		background-size: 375rpx*2 812rpx*2;
		.tips-text2{
			margin:0rpx*2 16rpx*2;
			border: 1rpx*2 solid #FFFFFF;
			border-radius: 5rpx*2;
			padding: 25rpx*2 24rpx*2 20rpx*2 16rpx*2 ;
			font-size: 18rpx*2;
			color: #FFFFFF;
			line-height: 24rpx*2;
			letter-spacing: 2rpx*2;
		}
	}
	.yes{
		text-align: center;
		margin-top: 20rpx*2;
		font-size: 18rpx*2;
		color: #FFFFFF;
		line-height:24rpx*2;
		text-shadow: 0rpx*2 0rpx*2 9rpx*2 rgba(16, 70, 70, 0.61);
		z-index:1000 ;
	}
}

</style>
