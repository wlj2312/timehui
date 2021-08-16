<template>
	<view class="contair">
		<view class="header">
			<!-- <view class="header-title flex-left">
				<image  src="../../static/img/img12.png"></image>
				<view class="header-title1">FS时光会</view>
			</view> -->
			<view class="header-content flex-right">
				<view class="left"> 
					<view class="left-1 flex-left">
						<view>{{userinfo.nickname}}</view>
						<!-- <image src="../../static/img/img13.png"></image> -->
					</view>
					<view class="left-2 flex-left">
						<view v-if="userinfo.grade_id  == 2">认证会员</view>
						<view v-if="userinfo.grade_id  == 3">团长</view>
						<!-- <view v-if=" 1== 1" class="left-2-1">身份已认证</view> -->
					</view>
				</view>
				<view class="right">
					<image v-if="userinfo.avatar" :src="userinfo.avatar"></image>
					<image v-else src="../../static/img/img14.png"></image>
				</view>
			</view>
		</view>
		<view class="moneylists-1">
			<view class="list-model ">
				<view class="list-model-1 flex-space-between">
					<view class="list-model-left flex-left">
						<view>余额</view>
						<view class="gray">{{userinfo.amount}}</view>
					</view>
					<!-- <image src="../../static/img/img12.png"></image> -->
				</view>
				<view class="list-model-1 flex-space-between"  @click="tixian()">
					<view class="list-model-left flex-left">
						<view>提现</view>
					</view>
					<image src="../../static/img/img12.png"></image>
				</view>
			</view>
		</view>
		<view class="moneylists-2">
			<view class="list-model ">
				<view class="list-model-1 flex-space-between">
					<view class="">性别</view>
					<view class="sex flex-right">
						<view v-if="userinfo.sex == 1">男</view>
						<view v-if="userinfo.sex == 2">女</view>
						<image src="../../static/img/img12.png"></image>
					</view>
				</view>
				<!-- <view class="list-model-1 flex-space-between">
					<view class="list-model-left flex-left">
						<view>生日</view>
					</view>
					<image src="../../static/img/img12.png"></image>
				</view> -->
				<!-- <view class="list-model-1 flex-left">
					<view>微信号</view>
					<input class=" list-model-input" placeholder="请填写微信号" placeholder-style="font-size: 13rpx*2;font-weight: 400;color: #999999;"/>
				</view> -->
				<view class="list-model-1 flex-space-between" @click="fengxiang()">
					<view class="list-model-left flex-left">
						<view>分享</view>
					</view>
					<image src="../../static/img/img12.png"></image>
				</view>
				<view class="list-model-1 flex-space-between">
					<view class="list-model-left flex-left">
						<view>推荐人</view>
						<view class="grays m-l18">{{userinfo.pname}}</view>
					</view>
					<image src="../../static/img/img12.png"></image>
				</view>
				<view class="list-model-1 flex-space-between">
					<view class="list-model-left flex-left">
						<view>我的邀请码</view>
						<view class="grays m-l18">{{userinfo.code}}</view>
					</view>
					<image src="../../static/img/img12.png"></image>
				</view>
				<view class="list-model-1 flex-space-between" @click="address()">
					<view class="list-model-left flex-left">
						<view>收货地址管理</view>
					</view>
					<image src="../../static/img/img12.png"></image>
				</view>
				<view class="list-model-1 flex-space-between" @click="linqu()">
					<view class="list-model-left flex-left">
						<view>领取面膜记录</view>
					</view>
					<image src="../../static/img/img12.png"></image>
				</view>
				<view class="list-model-1 flex-space-between" @click="team()">
					<view class="list-model-left flex-left">
						<view>我的团队</view>
					</view>
					<image src="../../static/img/img12.png"></image>
				</view>
				
				
			</view>
		</view>
		<!-- <view class="anniu flex-center">
			<view>保存</view>
		</view> -->
		
		
		
	</view>
</template>

<script>
export default{
	data(){
		return{
			userinfo:"",
			amount:"",//余额
			sex:'',//性别
			nickname:'',//名字
			grade_id:'',//等级
			avatar:'',
			code:""
		}
	},
	onLoad() {
		
	},
	onShow() {
		uni.request({
		    url: this.$store.state.baseURL + '/api/user/getinfo', //仅为示例，并非真实接口地址。
		    method: 'GET',
			data: {
		    },
			header: {
			    'content-type': 'application/x-www-form-urlencoded',  
			}, 
		    success: (res) => {
		        console.log(res.data.data);
				if(res.data.error_code == 0){
					uni.setStorage({
					    key: 'userinfo',
					    data: res.data,
					    success: function () {
					        console.log('保存身份信息成功');
					    }
					});
					this.userinfo = res.data.data;
				}else{
					uni.showToast({
						title:res.data.error_msg,
						duration:1000
					})
				}
				
		    },
			fail(err) {
				console.log(err,'获取信息失败user.vue')
			}
		});
	},
	methods:{
		linqu(){
			uni.navigateTo({
			    url: 'record'
			});
		},
		team(){
			// 跳转我的团队界面
			uni.navigateTo({
			    url: 'team'
			});
		},
		fengxiang(){
			console.log(this.userinfo.code,'this.userinfo.code')
			uni.navigateTo({
			    url: 'share?code='+ this.userinfo.code
			});
		},
		address(){
			uni.navigateTo({
			    url: 'address'
			});
		},
		tixian(){
			// 跳转提现界面
			uni.navigateTo({
			    url: 'tixian'
			});
		}
	},
	mounted() {
		
	}
}

</script>
<style lang="less" scoped>
.contair{
	font-size: 15rpx*2;
	color: #090C09;
	letter-spacing: 1rpx*2;
	padding-bottom: 30rpx*2;
}
.header{
	width: 375rpx*2;
	height: 250rpx*2;
	background-image: url(../../static/img/bj.png);
	background-repeat: no-repeat;
	background-size: 375rpx*2 250rpx*2;
	.header-title{
		height: 44rpx*2;
		padding:  0 16rpx*2 ;
		image{
			width: 10rpx*2;
			height: 18rpx*2;
		}
		.header-title1{
			font-size: 18rpx*2;
			font-weight: 500;
			color: #333333;
			margin-left: 124rpx*2;
		}
	}
	.header-content{
		padding:30rpx*2 40rpx*2 0 0;
		.left{
			color: #FFFFFF;
			.left-1{
				font-size: 21rpx*2;
				font-weight: 400;
				
				image{
					width: 15rpx*2;
					height: 15rpx*2;
					margin-left: 5rpx*2;
				}
			}
			.left-2{
				font-size:15rpx*2;
				font-weight: 400;
				margin-top: 16rpx*2;
				.left-2-1{
					padding: 3rpx*2 5rpx*2;
					border-radius: 10rpx*2;
					border: 1rpx*2 solid #FFFFFF;
					font-size: 12rpx*2;
					font-weight: 400;
					margin-left: 15rpx*2;
				}
			}
		}
		.right{
			margin-left: 50rpx*2;
			image{
				width: 100rpx;
				height: 100rpx;
				border-radius: 50rpx;
			}
		}
	}
}

.moneylists-1{
	margin: -57rpx*2 7rpx*2 9rpx*2;
	.list-model{
		padding: 0rpx*2 20rpx*2 22rpx*2;
		background: #FFFFFF;
		box-shadow: 0rpx*2 0rpx*2 5rpx*2 0rpx*2 rgba(16, 70, 70, 0.32);
		border-radius: 10rpx*2;
		.list-model-1{
			border-bottom: 1rpx*2 solid #EAEAEA;
			padding :16rpx*2 0 15rpx*2;
	
			.list-model-left{
				.gray{
					font-size:14rpx*2;
					color: #666666;
					margin-left: 20rpx*2;
				}
			}
			image{
				width: 7rpx*2;
				height: 12rpx*2;
			}
		}
		
	}
}
.moneylists-2{
	margin: 0rpx*2 7rpx*2 9rpx*2;
	font-size: 14rpx*2;
	color: #666666;
	.list-model{
		padding: 0rpx*2 20rpx*2 22rpx*2;
		background: #FFFFFF;
		
		box-shadow: 0rpx*2 0rpx*2 5rpx*2 0rpx*2 rgba(16, 70, 70, 0.32);
		border-radius: 10rpx*2;
		.list-model-1{
			border-bottom: 1rpx*2 solid #EAEAEA;
			padding :16rpx*2 0 15rpx*2;
			.grays{
				font-size: 13rpx*2;
				font-weight: 400;
				color: #999999;
			}
			.m-l18{
				margin-left: 18rpx*2;
			}
			.list-model-input{
				margin-left: 18rpx*2;
			}
			.sex{
				color: #999999;
			}
			.list-model-left{
				.gray{
					font-size:14rpx*2;
					color: #666666;
					margin-left: 20rpx*2;
				}
			}
			image{
				width: 7rpx*2;
				height: 12rpx*2;
				margin-left: 5rpx*2;
			}
		}
		
	}
}
.anniu{
	margin: 5rpx*2 7rpx*2 0rpx*2;
	width: 360rpx*2;
	height: 35rpx*2;
	background: linear-gradient(90deg, #79D4BD 0%, #099999 99%);
	border-radius: 5rpx*2;
	font-size: 15rpx*2;
	color: #FFFFFF;
}

</style>