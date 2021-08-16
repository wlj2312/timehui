<template>
	<view class="contair">
		<view class="dire-header">
			<view class="dire-first flex-left">
				<view class="dire-first-left">
					<image :src="userinfo.avatar"></image>
				</view>
				<view class="dire-first-right">
					<view class="title flex-left">
						<view class="title-left">{{userinfo.nickname}}</view>
						<view class="title-right" v-if="userinfo.grade_id == 1">会员</view>
						<view class="title-right" v-if="userinfo.grade_id == 2">认证会员</view>
						<view class="title-right" v-if="userinfo.grade_id == 3">团长</view>
					</view>
					<view>我的邀请码：{{userinfo.code}}</view>
				</view>
			</view>
			<view class="dire-two flex-space-between">
				<view class="dire-two-1 flex-center">
					<view class="dire-two-11">
						<view class="dire-two-1-1">团队总数</view>
						<view>{{allcount}}</view>
					</view>
				</view>
				<view class="dire-two-2 " @click="xuanzhe(3)">
					<view :class="istrue == 3 ? 'dire-two-2-1 flex-center' : 'dire-two-2-2 flex-center'">
						<view class="dire-two-11">
							<view class="dire-two-1-1">团长</view>
							<view>{{allist.tz.count}}</view>
						</view>
					</view>
				</view>
				<view class="dire-two-2 " @click="xuanzhe(2)">
					<view :class="istrue == 2 ? 'dire-two-2-1 flex-center' : 'dire-two-2-2 flex-center'">
						<view class="dire-two-11">
							<view class="dire-two-1-1">认证会员</view>
							<view>{{allist.rz.count}}</view>
						</view>
					</view>
				</view>
				<view class="dire-two-2 " @click="xuanzhe(1)">
					<view :class="istrue == 1 ? 'dire-two-2-1 flex-center' : 'dire-two-2-2 flex-center'">
						<view class="">
							<view class="dire-two-1-1">普通用户</view>
							<view>{{allist.no.count}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="dire-list">
			<view v-for="item in list" class="dire-list-item flex-between-start" >
				<view class="dire-list-item-left flex-left">
					<image v-if="item.avatar" :src="item.avatar"></image>
					<image v-else  src="../../static/img/img31.png"></image>
					<view class="right">
						<view class="right-text flex-left">
							<view class="right-text-1 clamp" v-if="item.nickname">{{item.nickname}}</view>
							<view class="right-text-1 clamp" v-else>游客</view>
							<view class="right-text-2" v-if="item.grade_id == 1">会员</view>
							<view class="right-text-2" v-if="item.grade_id == 2">认证会员</view>
							<view class="right-text-2" v-if="item.grade_id == 3">团长</view>
						</view>
						<view>加入时间：{{item.create_time}}</view>
					</view>
				</view>
				<view class="dire-list-item-right">
					直推会员：{{item.sons}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			userinfo:"",
			istrue: 3, //是否选择
			allist:{},
			allcount:'',//团队总数
			list:[
				// {
				// 	nickname:'大草莓大草莓大草莓',
				// 	grade_id:1,
				// 	create_time:'2021.07.29 15:32',
				// 	sons:10
				// },
				// {
				// 	nickname:'大草莓大草莓大',
				// 	grade_id:2,
				// 	create_time:'2021.07.29 15:32',
				// 	sons:10
				// },
				// {
				// 	nickname:'大草莓',
				// 	grade_id:3,
				// 	create_time:'2021.07.29 15:32',
				// 	sons:10
				// },
			],
			
		};
	},
	onShow() {
		this.user();//获取自身属性
		this.lists();//获取直推粉丝数据
		
	},
	computed:{
		
	},
	methods: {
		kh_score(){
			let obj = this;
			obj.allcount = obj.allist.no.count + obj.allist.rz.count + obj.allist.tz.count;
			console.log(obj.allcount,'obj.allcount')
		},
		user(){
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
		lists(){
			let obj = this;
			uni.request({
			    url: obj.$store.state.baseURL + '/api/group/directTeamInfo', //直推粉丝
			    method: 'GET',
				data: {
			    },
				header: {
				    'content-type': 'application/x-www-form-urlencoded',  
				}, 
			    success: (res) => {
			        console.log(res.data,'直推粉丝');
					obj.allist = res.data; //总数据
					obj.list =obj.allist.tz.list; //团长下的数据
					obj.kh_score();
					console.log(obj.allist.tz.list,'obj.allist.tz.list')
					console.log(obj.list,'obj.list')
			    },
				fail(err) {
					console.log(err)
				}
			});
		},
		xuanzhe(state) {
			let obj = this;
			console.log(state,'state')
			obj.istrue = state;
			if(state == 3){
				obj.list = obj.allist.tz.list;
			}else if(state == 2){
				obj.list = obj.allist.rz.list;
			}else if(state == 1){
				obj.list = obj.allist.no.list;
			}
			console.log(obj.list,'obj.list')
		}
	}
}
</script>

<style lang="less" scoped>
page {
	background-color: #f7f7f7;
}
.contair {
	line-height: 1;
	.dire-header {
		margin: 10rpx 5rpx;
		padding: 20rpx 28rpx 5rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		.dire-first {
			.dire-first-left {
				margin-right: 60rpx;
				image {
					width: 90rpx;
					height: 90rpx;
					border-radius: 50%;
				}
			}
			.dire-first-right {
				font-size: 28rpx;
				color: #999999;

				.title {
					margin-bottom: 25rpx;

					.title-left {
						font-size: 32rpx;
						font-weight: bold;
						color: #333333;
						margin-right: 25rpx;
					}

					.title-right {
						font-size: 24rpx;
						color: #FFFFFF;
						padding: 8rpx 15rpx;
						background-color: #109D9B;
						border-radius: 5rpx;
					}
				}
			}
		}

		.dire-two {
			margin-top: 35rpx;

			.dire-two-1 {
				padding: 0 27rpx;
				width: 127rpx;
				height: 105rpx;
				font-size: 24rpx;
				color: #999999;
				text-align: center;
				position: relative;

				.dire-two-1-1 {
					font-size: 20rpx;
					margin-bottom: 20rpx;
				}

				.dire-two-11:after {
					content: '';
					position: absolute;
					left: auto;
					top: auto;
					bottom: 5px;
					right: 0;
					height: 72rpx;
					width: 2rpx;
					background-color: #999999;
				}
			}

			.dire-two-2 {
				padding: 0 27rpx;
				font-size: 24rpx;
				text-align: center;
				position: relative;
				letter-spacing: 2rpx;
				.dire-two-2-1 {
					width: 127rpx;
					height: 105rpx;
					color: #333333;
					background-image: url(../../static/img/img30.png);
					background-repeat: no-repeat;
					background-size: 127rpx 105rpx;
				}
				.dire-two-2-2 {
					width: 127rpx;
					height: 105rpx;
					color: #999999;
				}
				.dire-two-1-1 {
					font-size: 20rpx;
					margin-bottom: 20rpx;
				}

				.dire-two-11:after {
					content: '';
					position: absolute;
					left: auto;
					top: auto;
					bottom: 5px;
					right: 0;
					height: 72rpx;
					width: 2rpx;
					background-color: #999999;
				}
			}
		}
	}
	.dire-list{
		color: #666666;
		.dire-list-item{
			padding: 20rpx 30rpx ;
			margin: 10rpx  5rpx 0;
			background: #FFFFFF;
			border-radius: 20rpx;
			.dire-list-item-left{
				image{
					width: 90rpx;
					height: 90rpx;
				}
				.right{
					margin-left: 35rpx;
					font-size: 24rpx;
					color: #999999;
					.right-text{
						margin-bottom: 25rpx;
						font-size: 28rpx;
						font-weight: bold;
						color: #666666;
						.right-text-1{
							width: 270rpx;
						}
						.right-text-2{
							font-size: 24rpx;
							color: #FFFFFF;
							padding: 5rpx 12rpx;
							background-color: #109D9B;
							border-radius: 4rpx;
						}
					}
				}
			}
			.dire-list-item-right{
				font-size: 24rpx;
			}
		}
	}
}
</style>
