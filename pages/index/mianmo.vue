<template>
	<view class="contair">
		<!-- 导航栏 -->
		<!-- <view class="header flex-center">
			<view>FS时光会</view>
		</view> -->
		<image  v-if="userinfo.grade_id == 1" class="img1" src="../../static/img/mianfeiling.png"></image>
		<image v-if="userinfo.grade_id == 2" class="img1" src="../../static/img/img20.png"></image>
		<image v-if="userinfo.grade_id == 3" class="img1" src="../../static/img/img21.png"></image>
		<view v-if="userinfo.grade_id == 1">
			<view class="text">品牌故事</view>
			<view class="introduction flex-center">
				<view>
					<view class="introduction-2">FS时光会是专为广大女性朋友们量身定制,专业团队用心搭建的一个创业交流的平台，是女性的创业伴侣。</view>
					<view class="introduction-2">在FS时光会这里你可以学习到顶尖成功女性的创业秘诀，可以改变自己的固有思维、可以和一群有趣的人共同成长，在这里你可以寻找到更美好的未来。</view>
				</view>
			</view>
			<view class='mianmo flex-space-between'>
				<view class="left">
					<view class="left-1">苏莱曼婴儿肌面膜</view>
					<view class="left-2">保湿水润 让肌肤“喝”饱水</view>
					<view class="left-3 m-t10">由内而外唤醒肌肤</view>
					<view class="left-3">深层补水保湿滋润</view>
					<view class="left-4 flex-center-end">
						<view class="left-4-1">新人礼</view>
						<view class="left-4-2">¥</view>
						<view class="left-4-3">0</view>
						<view class="left-4-4">¥199</view>
					</view>
				</view>
				<image src="../../static/img/miammo.png"></image>
			</view>
			<view class="rules">
				<view class="rules-1">新人领取面膜</view>
				<view class=" m-b17">{{face}}</view>
				<view class="suo-2">
					<text>所有FS时光会的</text>
					<text class="green">新用户</text>
					<text>都可以获取价值199元的苏莱</text>
					<text>曼婴儿肌面膜一盒！ </text>
				</view>
				<view> 只需运费即可。</view>
				<view class="suo-2">
					<text>领取完成后</text>
					<text class="green">跳转页面填写详细的收货地址</text>
					<text>，即可坐等收货</text>
				</view>
			</view>
		</view>
		<view v-if="userinfo.grade_id == 2">
			<view class="text">品牌故事</view>
			<view class="introduction flex-center">
				<view>
					<view class="introduction-2">FS时光会是专为广大女性朋友们量身定制,专业团队用心搭建的一个创业交流的平台，是女性的创业伴侣。</view>
					<view class="introduction-2">在FS时光会这里你可以学习到顶尖成功女性的创业秘诀，可以改变自己的固有思维、可以和一群有趣的人共同成长，在这里你可以寻找到更美好的未来。</view>
				</view>
			</view>
			<view class='mianmo flex-space-between'>
				<view class="left">
					<view class="left-1">苏莱曼婴儿肌面膜</view>
					<view class="left-2">保湿水润 让肌肤“喝”饱水</view>
					<view class="left-3 m-t10">由内而外唤醒肌肤</view>
					<view class="left-3">深层补水保湿滋润</view>
					<view class="left-4 flex-center-end">
						<view class="left-4-1">每周领</view>
						<view class="left-4-2">¥</view>
						<view class="left-4-3">0</view>
						<view class="left-4-4">¥199</view>
					</view>
				</view>
				<image src="../../static/img/miammo.png"></image>
			</view>
			<view class="rules">
				<view class="rules-1">面膜礼盒领取</view>
				<view class=" m-b17">{{face1}}</view>
				<view class="rules1 suo-2">
					<text>所有FS时光会的</text>
					<text class="green">认证会员</text>
					<text>可以</text>
					<text class="green">每周免费领取</text>
					<text>价值199元</text>
					<text>的苏莱曼婴儿肌面膜一盒！连续领一年！</text>
				</view>
				<view class="rules1"> 只需运费即可。</view>
				<view class="rules1 suo-2">
					<text >领取完成后</text>
					<text class="green">填写详细的收货地址</text>
					<text >（已经填写过地址的可</text>
					<text>忽略，需修改地址可前往个人中心），即可坐等收货</text>
				</view>
			</view>
		</view>
		<view v-if="userinfo.grade_id == 3">
			<view class="text">品牌故事</view>
			<view class="introduction flex-center">
				<view>
					<view class="introduction-2">FS时光会是专为广大女性朋友们量身定制,专业团队用心搭建的一个创业交流的平台，是女性的创业伴侣。</view>
					<view class="introduction-2">在FS时光会这里你可以学习到顶尖成功女性的创业秘诀，可以改变自己的固有思维、可以和一群有趣的人共同成长，在这里你可以寻找到更美好的未来。</view>
				</view>
			</view>
			<view class='mianmo flex-space-between'>
				<view class="left">
					<view class="left-1">苏莱曼婴儿肌面膜</view>
					<view class="left-2">保湿水润 让肌肤“喝”饱水</view>
					<view class="left-3 m-t10">由内而外唤醒肌肤</view>
					<view class="left-3">深层补水保湿滋润</view>
					<view class="left-4 flex-center-end">
						<view class="left-4-1">每周领</view>
						<view class="left-4-2">¥</view>
						<view class="left-4-3">0</view>
						<view class="left-4-4">¥199</view>
					</view>
				</view>
				<image src="../../static/img/miammo.png"></image>
			</view>
			<view class="rules">
				<view class="rules-1">面膜礼盒领取</view>
				<view class=" m-b17">{{face1}}</view>
				<view class="rules1 suo-2">
					<text>所有FS时光会的</text>
					<text class="green">团长</text>
					<text>可以</text>
					<text class="green">每周免费领取</text>
					<text>价值199元</text>
					<text>的苏莱曼婴儿肌面膜一盒！连续领一年！</text>
				</view>
				<view class="rules1"> 只需运费即可。</view>
				<view class="rules1 suo-2">
					<text>领取完成后</text>
					<text class="green">填写详细的收货地址</text>
					<text >（已经填写过地址的可</text>
					<text>忽略，需修改地址可前往个人中心），即可坐等收货</text>
				</view>
			</view>
		</view>
		<view v-if="userinfo.grade_id == 1" class="spendmoney flex-center" @click="linqu()">
			<view class="spendmoney-img">立刻领取（10元运费）</view>
		</view>
		<view v-else class="spendmoney flex-center" @click="linqu()">
			<view class="spendmoney-img">本周领取（10元运费）</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				aa:1,
				money:'10',
				face:'New face mask',
				face1:'Mask gift box collection',
				userinfo:''
			};
		},
		onShow() {
			this.face = this.face.toUpperCase();
			this.face1 = this.face1.toUpperCase();
			uni.request({
			    url: this.$store.state.baseURL + '/api/user/getinfo', //仅为示例，并非真实接口地址。
			    method: 'GET',
				data: {
			    },
			    success: (res) => {
			        console.log(res.data.data);
					uni.setStorage({
					    key: 'userinfo',
					    data: res.data,
					    success: function () {
					        console.log('保存身份信息成功');
					    }
					});
					this.userinfo = res.data.data;
			    },
				fail(err) {
					uni.showToast({
					    title: err,
					    duration: 2000
					});
				}
			});
		},
		methods:{
			linqu(){
				uni.request({
				    url: this.$store.state.baseURL + '/api/recharge/pay', //调用付钱的接口
				    method: 'POST',
					data: {
						amount:10,
						scene:1
					},
					header: {  
					    'content-type': 'application/x-www-form-urlencoded',  
					  }, 
				    success: (res) => {
				        console.log(res.data,'api/recharge/pay成功');
						if(res.data.error_code == 0){
							WeixinJSBridge.invoke(
							    'getBrandWCPayRequest', res.data.data,
							    function(res){
							        if(res.err_msg == "get_brand_wcpay_request:ok" ) {
										alert('支付成功');
										uni.navigateTo({
										    url: 'tips?state=3'
										});
							        } else  {
							            alert('支付失败');
							        }
							    }
							);
						}else{
							uni.showToast({
							    title: res.data.error_msg,
							    duration: 1000
							});
						}
						
				    },
					fail: (err) => {
						 console.log(err,'api/recharge/pay失败');
						 uni.showToast({
						     title: err,
						     duration: 2000
						 });
					}
				});
			}
		},
		mounted() {
			
			
		}
	}
</script>

<style lang="less" scoped>
.contair{
	letter-spacing: 1rpx*2;
	padding-bottom: 44rpx*2;
}
.suo-2{
	text-indent:2em;
}
.header{
	width: 375rpx*2;
	height: 44rpx*2;
	font-size: 18rpx*2;
	font-weight: 500;
	color: #333333;
}
.img1{
	width: 375rpx*2;
	height: 133rpx*2;
}
.text{
	font-size: 15rpx*2;
	font-weight: 500;
	color: #323232;
	margin: 25rpx*2 35rpx*2 0;
	
}
.introduction{
	width: 330rpx*2;
	height: 122rpx*2;
	margin:-10rpx*2 23rpx*2 0;
	background-image: url(../../static/img/img11.png);
	background-repeat: no-repeat;
	background-size: 330rpx*2 122rpx*2;
	.introduction-2{
		font-size: 12rpx*2;
		font-weight: 400;
		color: #999999;
		width: 310rpx*2;
		text-indent:2em;
	}
}
.mianmo{
	position: relative;
	top: -13rpx*2;
	.left{
		width: 140rpx*2;
		text-align: center;
		padding-left:28rpx*2 ;
		.left-1{
			font-size: 15rpx*2;
			color: #0D9B9B;
			letter-spacing: 1rpx*2;
		}
		.left-2{
			font-size: 10rpx*2;
			font-weight: 400;
			color: #333333;
		}
		.left-3{
			font-size: 9rpx*2;
			font-weight: 400;
			color: #3D9D91;
		}
		.left-4{
			margin-top: 10rpx*2;
			text-align: left;
			.left-4-1{
				padding: 3rpx*2 4rpx*2;
				width: 38rpx*2;
				background-color: #0E9B9B;
				border-radius: 5rpx*2;
				font-size: 11rpx*2;
				font-weight: 400;
				color: #FFFFFF;
			}
			.left-4-2{
				font-size: 18rpx*2;
				color: #0E9B9B;
				margin-left:5rpx*2;
			}
			.left-4-3{
				font-size:30rpx*2;
				color: #0B9A9A;
				line-height: 1;
			}
			.left-4-4{
				margin-left: 7rpx*2;
				font-size: 10rpx*2;
				font-weight: normal;
				text-decoration: line-through;
				color: #999999;
			}
			
		}
	}
	image{
		width: 252rpx*2;
		height: 238rpx*2;
		margin-left: -20rpx*2;
	}
}
.rules{
	font-size: 12rpx*2;
	font-weight: 400;
	color: #999999;
	padding: 0 17rpx*2 30rpx*2 23rpx*2;
	.rules1{
		line-height: 36rpx;
	}
	.rules-1{
		font-size: 15rpx*2;
		color: #333333;
	}
	.green{
		color: #0D9B9B;
	}
}
.spendmoney{
	width: 345rpx*2;
	height:45rpx*2;
	margin: 0 auto;
	background-image: url(../../static/img/img02.png);
	background-repeat: no-repeat;
	background-size: 345rpx*2 49rpx*2;
	.spendmoney-img{
		font-size: 18rpx*2;
		font-weight: 500;
		color: #FFFFFF;
		line-height: 49rpx*2;
	}
}
</style>
