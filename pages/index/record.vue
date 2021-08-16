<template>
	<view class="contair">
		<view class="record-model flex-left">
			<view class="record-1">
				<view class="record-1-1">2021.7.16  13:28:50</view>
				<view >林三</view>
			</view>
			<view class="record-2">
				新人有礼
			</view>
			<view class="record-3" v-if="state">
				已发货
			</view>
			<view class="record-3" v-if="!state">
				待发货
			</view>
			<view class="record-4" v-if="state">
				<button @click="copy(123)">查询</button>
			</view>
		</view>
		<!-- <view @click="copy('123xxxxxxxxxxxxx')">000</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				state:true//是否发货
			}
		},
		methods: {
			// navto(){
			// 	uni.navigateTo({
			// 		url:'wuliu'
			// 	})
			// },
			copy(value){
			  //提示模板
			  uni.showModal({
				title: '顺丰',
			    content:'快递单号：'+value,//模板中提示的内容
			    confirmText:'复制单号',
				cancelText:'返回',
			    success:(res)=>{//点击复制内容的后调函数
					if (res.confirm) {
						//uni.setClipboardData方法就是讲内容复制到粘贴板
						uni.setClipboardData({
						  data:value,//要被复制的内容
						  success:()=>{//复制成功的回调函数
						    uni.showToast({//提示
						      title:'复制成功'
						    })
						  }
						});
					} else if (res.cancel) {
					  console.log('用户点击取消');
					}
			      
			    }
			  });
			}
		}
	}
</script>

<style lang="less" scoped>
page{
	background-color: #f8f8f8;
}
.contair{
	.record-model{
		padding: 20rpx 40rpx;
		font-size: 28rpx;
		color: #666666;
		background-color: #FFFFFF;
		margin-top: 10rpx;
		.record-1{
			margin-right: 40rpx;
			.record-1-1{
				font-size: 26rpx;
				color: #999999;
			}
		}
		.record-2{
			margin-right: 40rpx;
		}
		.record-3{
			margin-right: 30rpx;
		}
		.record-4{
			button{
				border: none;
				background-color: #aaaaaa;
				color: #FFFFFF;
				border-radius: 0rpx;
				font-size: 26rpx;
			}
		}
	}
}
</style>
