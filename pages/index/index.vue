<template>
	<view class="all">
		<view class="banner">
			<image v-if="ismembers" class="img" src="../../static/img/certifiedmember.png"></image>
			<image v-else class="img" src="../../static/img/banner2.png"></image>
			<view class="select flex-center">
				<view :class="ismembers ? 'select-1': 'select-2' " @click="ismember()">认证会员</view>
				<view :class="ismembers ? 'select-2': 'select-1' " @click="ismember()">团长</view>
			</view>
		</view>
		<view v-if="ismembers">
			<view class="content">
				<!-- <view class="title-1">{{Membership}}</view> -->
				<image class="image1" src="../../static/img/img23.png"></image>
				<view class="title-2">会员权益</view>
				<view class="welfare">
					<view class="welfare-module " v-for="item in list" >
						<view class="welfare-1">认证会员</view>
						<view class="welfare-2">{{item.title}}</view>
						<view class="welfare-3">{{item.content1}}</view>
						<view class="welfare-4">{{item.content2}}</view>
					</view>
				</view>
			</view>
			<view class="content">
				<image class="image2" src="../../static/img/img22.png"></image>
				<!-- <view class="title-1">{{ember}}</view> -->
				<view class="title-2">会员收益</view>
				<view class="question">
					<view class="question-1">会员有那些收益吗</view>
					<view class="question-2">成为会员后可邀请好友加入会员，好友加入即可领取收益</view>
					<view class="question-1">邀请好友之后，好友的消费行为与自己有关吗</view>
					<view class="question-2">成为会员后可享受福利街区的收益，当好友消费后，即可领取分润</view>
				</view>
			</view>
			<view class="money flex-center" @click="pay(199,2)">
				<view class="money1">
					<view class="money-1 flex-center-end">
						<view >立刻开通￥</view>
						<view style="font-size:48rpx ;"> 199</view>
						<view style="font-size: 30rpx;">（一年）</view>
					</view>
				</view>
			</view>
		</view>
		<view v-else>
			<view class='first'>
				<view class="titles flex-left">
					<view class="grey"></view>
					<view class='title'>产品解读</view>
				</view>
				<image class="image3" src="../../static/img/img24.png"></image>
				<!-- <view class='e-title'>{{Product}}</view> -->
			</view>
			<view class="two-title">专属权益</view>
			<view class="two">
				<view>
					<view class="two-content">
						团长可邀请自己的好友认证团长或认证会员，当好友进行认证后，团长即刻得到相应的收益。
					</view>
					<view class="two-content">
						 团长拥有同认证会员的所有权益，认证团长后即可获得76盒面膜，同时享受一年面膜礼盒免费领（每周可领取一盒，只需邮费）
					</view>
				</view>
			</view>
			<view class='first'>
				<view class="titles flex-left">
					<view class="grey"></view>
					<view class='title'>团长权益</view>
				</view>
				<!-- <view class='e-title'>{{Head}}</view> -->
				<image class="image3" src="../../static/img/img25.png"></image>
			</view>
			<view class="rights flex-space-between">
				<view v-for="item in rightslist">
					<view class="rights-model" >
						<view class="rights-title">{{item.title}}</view>
						<view class="rights-content">{{item.content}}</view>
						<view class="kuan"></view>
					</view>
				</view>
			</view>
			<view class="money flex-center" >
				<view class="money1"   @click="pay(14999,3)">
					<view class="money-1 flex-center-end">
						<view >立刻开通￥</view>
						<view style="font-size:48rpx;"> 14999</view>
						<view style="font-size:30rpx;">（永久）</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { mapState } from 'vuex';

export default {
	computed: {
		...mapState(['baseURL'])
	},
	data() {
		return {
			aa:'1',
			userinfo:'',
			grade_id:'',
			rightslist:[
				{
					title:"团长优享",
					content:'拥有同认证会员的权益'
				},
				{
					title:"专属折扣",
					content:'心选商城享受最低团长专属折扣，所有商品成本价'
				},
				{
					title:"线下沙龙",
					content:'定期邀请团长参加形体、插花、国学、等线下聚会'
				}
			],
			ismembers:true,
			Membership:'Membership rights',
			ember:'ember income',
			Product:'Product interpretation',
			Head:"Head of the delegation",
			list:[
				{
					title:'会员认证',
					content1:'认证当天即可领取会员礼盒',
					content2:'（价值199元面膜2盒）'
				},
				{
					title:'面膜免费领',
					content1:'一年面膜大礼盒免费领',
					content2:'（每周领取一盒，只需邮费）'
				},
				{
					title:'心选商城',
					content1:'可享受商城商品成本价格',
					content2:'最低1折购买'
				},
				{
					title:'福利街区',
					content1:'福利街区的会员专属优惠',
					content2:'购物返券，话费充值等'
				}
			] 
		}
	},
	onLoad() {
		
	},
	onShow() {
		this.Membership = this.Membership.toUpperCase();
		this.ember = this.ember.toUpperCase();
		this.Product = this.Product.toUpperCase();
		this.Head = this.Head.toUpperCase();
		let obj = this;
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
				obj.userinfo = res.data.data;
		    },
			fail(err) {
				console.log(err,'index.xinxi');
			}
		});
		
	},
	methods: {
		ismember(){
			this.ismembers = !this.ismembers;
			console.log(this.ismembers)
		},
		pay(money,types){
			uni.request({
			    url: this.$store.state.baseURL + '/api/recharge/pay', //仅为示例，并非真实接口地址。
			    method: 'POST',
				data: {
					amount:money,
					scene:types
				},
				header: {  
				    'content-type': 'application/x-www-form-urlencoded',  
				  }, 
			    success: (res) => {
			        console.log(res.data,'res.data');
					console.log(res.error_code,'res.error_code');
					console.log(res.data.error_code,'res.data.error_code');
					if(res.data.error_code == 0){
						WeixinJSBridge.invoke(
						    'getBrandWCPayRequest', res.data.data,
						    function(res){
						        if(res.err_msg == "get_brand_wcpay_request:ok" ) {
									// alert(types)
									if(types == 2){
										uni.navigateTo({
										    url: 'tips?state=2'
										});
									}
									if(types == 3){
										uni.navigateTo({
										    url: 'tips?state=4'
										});
									}
						        } else  {
						            alert('支付失败');
						        }
								
						    }
						);
					}else{
						console.log( res.error_msg,res.data.error_msg,' res.error_msg')
						uni.showToast({
						    title: res.data.error_msg,
						    duration: 1000
						});
					}
					
			    },
				fail: (err) => {
					 console.log(err);
				}
			});
		}
	}
}
</script>

<style lang="less" scoped>
html,body{-webkit-text-size-adjust:none;}
.all {
	position: relative;
	letter-spacing: 1rpx*2;
	color: #333333;
	.banner{
		.img{
			width: 750rpx;
			height: 480rpx;
		}
		.select{
			position: absolute;
			top: 10rpx*2;
			left: 87rpx*2;
			background: rgba(255, 255, 255, 0);
			border: 1rpx*2 solid #099999;
			border-radius: 3rpx*2;
			box-shadow: 0rpx*2 0rpx*2 9rpx*2 0rpx*2 rgba(16, 70, 70, 0.61);
			font-size: 18rpx*2;
			font-weight: 500;
			line-height: 35rpx*2;
			color: #FFFFFF;
			.select-1{
				width: 100rpx*2;
				background: #099999;
				text-align: center;
			}
			.select-2{
				width: 100rpx*2;
				text-align: center;
			}
		}
	}
	.content{
		padding: 20rpx*2 15rpx*2 0rpx*2;
		.image1{
			width: 460rpx;
			height: 36rpx;
			margin: 0 145rpx;
		}
		.image2{
			width: 373rpx;
			height: 36rpx;
			margin: 0 189rpx;
		}
		// .title-1{
		// 	text-align: center;
		// 	font-size: 20rpx*2;
		// 	color: #999999;
		// }
		.title-2{
			text-align: center;
			font-size: 32rpx;
			color: #099999;
			margin-bottom: 30rpx;
		}
		.welfare{
			color: #333333;
			display: flex;
			flex-wrap:wrap;
			.welfare-module{
				width: 340rpx;
				height: 144rpx;
				background-image: url(../../static/img/img01.png);
				background-repeat: no-repeat;
				background-size: 340rpx 144rpx;
				margin:0rpx*2  10rpx 12rpx*2 0;
				text-align: center;
				.welfare-1{
					font-size: 18rpx;
					margin: 15rpx 0 0 6rpx;
					text-align: left;
				}
				.welfare-2{
					
					font-size: 24rpx;
					font-weight: 500;
					
				}
				.welfare-3{
					font-size: 20rpx;
					color: #666666;
				}
				.welfare-4{
					font-size: 20rpx;
					color: #666666;
				}
			}
			.welfare-module:nth-child(2n)
			{
				margin:0rpx*2  0rpx*2 12rpx*2 0;
			}
			.welfare-module:nth-child(3),.welfare-module:nth-child(4)
			{
				margin-bottom:0rpx*2;	
			}
		}
		.question{
			.question-1{
				font-size: 22rpx;
				font-weight: 500;
				color:#333333;
				padding: 5rpx*2 10rpx*2;
				line-height: 1;
				background: #e9e9e8;
			}
			.question-2{
				font-size: 20rpx;
				color:#666666;
				font-weight: 400;
				margin:0 0 10rpx*2  15rpx*2 ;
				
			}
		}
	}
	.money{
		margin: 0 auto;
		padding: 0 0 74rpx;
		.money1{
			width: 628rpx;
			height: 130rpx;
			background-image: url(../../static/img/img02.png);
			background-repeat: no-repeat;
			background-size: 628rpx 130rpx;
			
		}
		.money2{
			width: 260rpx*2;
			height: 46rpx*2;
			background-color: #999999;
			border-radius: 5rpx*2;
		}
		.money-1{
			font-size: 36rpx;
			font-weight: 500;
			color: #FFFFFF;
			line-height: 105rpx;
		}
	}
	
	.grey{
		width: 5rpx*2;
		height: 15rpx*2;
		background:#099999;
	}
	.title{
		font-size: 16rpx*2;
		margin-left: 6rpx*2;
		color: #099999;
	}
	.e-title{
		font-size: 8rpx*2;
		font-weight: 400;
		color: #666666;
		letter-spacing: 0rpx*2;
	}
	.first{
		padding: 20rpx*2 25rpx*2 17rpx*2 20rpx*2;
		.image3{
			width: 275rpx;
			height: 20rpx;
		}
		.image4{
			width: 260rpx;
			height: 20rpx;
		}
		.titles{
			
		}
	}
	.two-title{
		margin:0 0 0 65rpx;
		font-size: 26rpx;
		position: relative;
		top: 20rpx;
	}
	.two{
		width: 660rpx ;
		height: 180rpx;
		margin: 0 auto;
		padding: 30rpx 20rpx 20rpx ;
		background-image: url(../../static/img/img26.png);
		background-size: 660rpx 180rpx;
		background-repeat: no-repeat;
		
		.two-content{
			width: 620rpx ;
			font-size: 20rpx;
			font-weight: 400;
			color: #666666;
			text-indent: 2em; 
		}
	}
	.rights{
		padding: 0rpx*2 25rpx*2 25rpx*2 20rpx*2;
		.rights-model{
			padding: 17rpx*2 19rpx*2 26rpx*2 10rpx*2;
			background: #f8f8f8;
			position: relative;
			.rights-title{
				text-align: center;
				font-size: 12rpx*2;
				margin-bottom: 10rpx*2;
			}
			.rights-content{
				width: 67rpx*2;
				height: 100rpx;
				font-size: 18rpx;
				color: #666666;
				margin: 0 auto;
			}
		}
		.kuan{
			width: 95rpx*2;
			height: 220rpx;
			border:2rpx*2 solid #999999;
			opacity: 0.2;
			position: absolute;
			top: -5rpx*2;
			left: -5px;
			z-index: -1;
		}
	}
}

</style>
