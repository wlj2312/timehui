<template>
	<view class="contair">
		<view class="header flex-space-between">
			<view class="header-text">团长昵称</view>
			<view class="header-text">团长</view>
			<view class="header-text">认证会员</view>
			<view class="header-text">普通用户</view>
		</view>
		<view class="header flex-space-between" v-for="item in headlist">
			<view class="header-text">{{item.nickname}}</view>
			<view class="header-text1">{{item.tz}}</view>
			<view class="header-text1">{{item.rz}}</view>
			<view class="header-text1">{{item.no}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// tz_ids:[],//子团长id集合
				headlist:[
					// {
					// 	name:'柠檬不酸呀',
					// 	number1:1
					// },
					// {
					// 	name:'柠檬不酸呀',
					// 	number1:1
					// }
				]
			};
		},
		onLoad(optionds) {
			// this.tz_ids = JSON.parse(optionds.tz_ids)
			// console.log(optionds.tz_ids,this.tz_ids,'this.tz_ids')
		},
		onShow() {
			let obj = this;
			var tz_ids1  =  [];
			uni.getStorage({
				key: 'tz_ids',
				success: function (res) {
					tz_ids1 = res.data
					console.log(tz_ids1,res.data,'本地取tz_ids')
				}
			})
			console.log(tz_ids1,'tz_ids1')
			uni.request({
			    url: obj.$store.state.baseURL + '/api/group/sonTeam', //子团队
			    method: 'POST',
				data: {
					ids: tz_ids1
			    },
				header: {
				    'content-type': 'application/x-www-form-urlencoded',  
				}, 
			    success: (res) => {
			        console.log(res,res.data,'sonTeam');
					obj.headlist = res.data;
					
			    },
				fail(err) {
					console.log(err)
				}
			});
		},
		methods:{
			
		}
	}
</script>

<style lang="less" scoped>
page{
		background-color:  #f7f7f7;
	}
.contair{
	padding: 0rpx 30rpx;
	.header{
		padding: 45rpx 25rpx;
		border-bottom: 2rpx solid #efefef;
		.header-text{
			font-size: 28rpx;
			color: #999999;
			width: 120rpx;
			text-align: center;
		}
		.header-text1{
			font-size: 28rpx;
			color: #333333;
			width: 120rpx;
			text-align: center;
		}
	}
}
</style>
