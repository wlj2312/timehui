<template>
	<view class="contair">
		<view v-if="list.length <= 0" class="template1">
			<view class="kong-img flex-center"><image class="img" src="../../static/img/img28.png"></image></view>
			<view class="tips-text">当前没有任何提现记录哦</view>
		</view>
		<view v-else class="template" v-for="(item, index) in list" :key="index">
			<view class="template-time">{{item.create_time}}</view>
			<view class="template-state flex-space-between">
				<view class="template-state-money">提现&nbsp;{{ item.amount }}&nbsp;元</view>
				<view v-if="item.status == 1" class="template-state-1">申请中</view>
				<view v-if="item.status == 2" class="template-state-2">已到账</view>
				<view v-if="item.status == 3" class="template-state-3 flex-left">
					<view>已驳回</view>
					<image src="../../static/img/img27.png" @click="reject(item)"></image>
				</view>
				<!-- <view v-if="item.status == 4" class="template-state-4">已到账</view> -->
			</view>
		</view>
		<uni-load-more v-if="list.length > 0" :status="loadingType"></uni-load-more>
	</view>
</template>

<script>
import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
export default {
	data() {
		return {
			page: 1,
			limit: 10,
			aa: 1, //记录的转态
			time:'',//时间
			withdrawalamount: 300, //提现金额
			loadingType: 'nomore', //加载更多状态
			list: [
				// {
				// 	withdrawalamount: 300,
				// 	state: 1,
				// 	time: '2021.7.16 13:28:50'
				// },
				// {
				// 	withdrawalamount: 200,
				// 	state: 2,
				// 	time: '2021.7.16 13:28:50'
				// },
				// {
				// 	withdrawalamount: 300,
				// 	state: 3,
				// 	time: '2021.7.16 13:28:50'
				// },
				// {
				// 	withdrawalamount: 300,
				// 	state: 4,
				// 	time: '2021.7.16 13:28:50'
				// }
			]
		};
	},
	components: {
		uniLoadMore
	},
	//下拉刷新
	onReachBottom() {
		this.loadDatalist();
		console.log(2);
	},
	onLoad() {
		console.log('1');
	},
	onShow() {
		this.list = [];
		this.loadDatalist();
	},
	methods: {
		datatime(data) {
			var time = new Date(data * 1000);
			let year = time.getFullYear();
			console.log(year, 'year');
			let mouth = time.getMonth() + 1;
			let day = time.getDate();
			let hours = time.getHours();
			let minutes = time.getMinutes();
			let seconds = time.getSeconds();
			if (mouth < 10) {
				mouth = '0' + mouth;
			}
			if (day < 10) {
				day = '0' + day;
			}
			if (hours < 10) {
				hours = '0' + hours;
			}
			if (minutes < 10) {
				minutes = '0' + minutes;
			}
			if (seconds < 10) {
				seconds = '0' + seconds;
			}
			
			console.log(year + '-' + mouth + '-' + day + hours + ':' + minutes + ':' + seconds);
		},
		loadDatalist() {
			let obj = this;
			uni.request({
				url: obj.$store.state.baseURL + '/api/withdraw/getlist', //提现记录
				method: 'POST',
				data: {
					page: obj.page,
					limit: obj.limit
				},
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: res => {
					console.log(res.data, 'getlist');
					obj.list = res.data.data;
					console.log(obj.list, 'obj.list');
					if (obj.limit == res.data.data.length) {
						obj.page++;
						obj.loadingType = 'more';
					} else {
						obj.loadingType = 'nomore';
					}
				},
				fail(err) {
					console.log(err);
				}
			});
		},
		reject(items) {
			items = JSON.stringify(items);
			uni.navigateTo({
				url: 'reject?items=' + items
			});
		}
	}
};
</script>

<style lang="less" scoped>
.contair {
	padding: 0 30rpx;
	line-height: 1;
	.template1 {
		.kong-img {
			padding-top: 150rpx;
			.img {
				width: 332rpx;
				height: 335rpx;
			}
		}
		.tips-text {
			font-size: 28rpx;
			color: #666666;
			text-align: center;
			margin-top: 25rpx;
		}
	}
	.template {
		font-size: 28rpx;
		color: #333333;
		border-bottom: 2rpx solid #eaeaea;
		padding: 40rpx 0rpx 25rpx 25rpx;
		.template-time {
			color: #999999;
		}
		.template-state {
			color: #333333;
			margin-top: 30rpx;
			.template-state-money {
			}
			.template-state-1 {
				width: 120rpx;
			}
			.template-state-2 {
				width: 120rpx;
			}
			.template-state-3 {
				color: #9c0e0e;
				image {
					width: 27rpx;
					height: 28rpx;
					margin-left: 10rpx;
				}
			}
			.template-state-4 {
				color: #109d9b;
				width: 120rpx;
			}
		}
	}
}
</style>
