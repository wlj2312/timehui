<template>
	<view class="contair">
		<view class="header p-15-25 flex-between-end">
			<view class="header-text header-text-1">身份明细</view>
			<view class="header-text" @click="head()">
				<view class='header-text-1'>团长
				</view>
				<image src="../../static/img/img29.png"></image>
			</view>
			<view class="header-text header-text-1">认证会员</view>
			<view class="header-text header-text-1">普通用户</view>
		</view>
		<view class="header p-45-25 flex-space-between">
			<view class="header-text">数量</view>
			<view class="header-text1">{{data.tz}}</view>
			<view class="header-text1">{{data.rz}}</view>
			<view class="header-text1">{{data.no}}</view>
		</view>
		<view class="header p-45-25 flex-space-between">
			<view class="header-text">今日新增</view>
			<view class="header-text1">{{data.today_inc_tz}}</view>
			<view class="header-text1">{{data.today_inc_rz}}</view>
			<view class="header-text1">{{data.today_inc_no}}</view>
		</view>
		<view class="header p-45-25 flex-space-between">
			<view class="header-text">上月新增</view>
			<view class="header-text1">{{data.month_inc_tz}}</view>
			<view class="header-text1">{{data.month_inc_rz}}</view>
			<view class="header-text1">{{data.month_inc_no}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data:'',
				tz_ids:[3,9]
			};
		},
		onNavigationBarButtonTap(e) {
		   uni.navigateTo({
		       url: 'directlyteam'
		   });
		},
		onShow() {
			uni.request({
			    url: this.$store.state.baseURL + '/api/group/team', //我的团队
			    method: 'GET',
				data: {
			    },
				header: {
				    'content-type': 'application/x-www-form-urlencoded',  
				}, 
			    success: (res) => {
			        console.log(res.data.data,'res.data.data');
					if(res.data.error_code == 0){
						let obj = this;
						obj.data = res.data.data;
					}else{
						uni.showToast({
							title:res.data.error_msg,
							duration:1000
						})
					}
					uni.setStorage({
						key: 'tz_ids',
						data: res.data.data.tz_ids,
						success: function () {
							console.log('本地保存tz_ids成功');
						}
					})
			    },
				fail(err) {
					console.log(err)
				}
			});
		},
		methods:{
			head(){
				let obj = this;
				if(obj.data.tz > 0){
					uni.navigateTo({
						url: 'head'
					});
				}else{
					uni.showToast({
						title: "没有数据"
					})
				}
				
			}
		}
	}
</script>

<style lang="less" scoped>
page{
		background-color:  #f7f7f7;
	}
.contair{
	padding: 0rpx 30rpx;
	.p-45-25{
		padding: 45rpx 25rpx;
	}
	.p-15-25{
		padding: 15rpx 25rpx;
	}
	.header{
		border-bottom: 2rpx solid #efefef;
		.header-text-1{
			line-height: 70rpx;
		}
		.header-text{
			font-size: 28rpx;
			color: #999999;
			width: 120rpx;
			position: relative;
			
			image{
				width: 27rpx;
				height: 28rpx;
				z-index: 1000;
				position: absolute;
				top: 0rpx;
				left:55rpx;
				
			}
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
