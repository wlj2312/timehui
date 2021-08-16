<template>
	<view class="content">
		<view class="list" v-for="(item, index) in addressList" :key="index" @click="checkAddress(item)">
			<view class="wrapper">
				<view class="address-box">
					<text class="name">{{ item.name }}</text>
					<view >
						
						<view class="flex-center" v-if="item.is_default != 1"  @click.stop="defaultUp(item, index,1)">
							<image class="img3" src="../../static/img/img18.png"></image>
							<text class="text" >设为默认</text>
						</view>
						<view class="flex-center" v-else @click.stop="defaultUp(item, index,0)">
							<image class="img3"  src="../../static/img/img17.png"></image>
							<text class="text green"  >默认地址</text>
						</view>
					</view>
				</view>
				<text class="mobile">{{ item.mobile }}</text>
				<view class="u-box">
					<text class="address">{{ item.province }}{{ item.city }}{{ item.county }} {{ item.street }}</text>
				</view>
			</view>
			<view class="buttom flex-right">
				<view class="operation">
					<view @click.stop="addAddress(item,true)">
						<image class="img1" src="../../static/img/img15.png"></image>
						<text class="text">编辑</text>
					</view>
					<view class="blank"></view>
					<view @click.stop="delAddress(item)">
						<image class="img2" src="../../static/img/img16.png"></image>
						<text class="text">删除</text>
					</view>
				</view>
			</view>
		</view>
		<view class="anniu flex-center" @click="addAddress('add',false)">
			<view>添加新地址</view>
		</view>
	</view>
</template>
<script>
// import { getAddressList, addressDel ,defaultset} from '@/api/address.js';
// import { mapState } from 'vuex';
// import { wechatConfig } from '@/api/wx';
export default {
	data() {
		return {
			source: 0,
			addressList: [
				// {
				// 	real_name:"吴亦凡",
				// 	phone:'13823532943',
				// 	province:"浙江省杭州市余杭区欧美金融城T4美国中心5楼"
				// }
			],
			isShow:false
		};
	},
	onLoad(option) {
		console.log(option,1)
		this.source = option.source || 0;
		this.loadAddress();
	},
	onShow(){
		this.loadAddress();
	},
	methods:{
		//加载数据
		loadAddress(){
			uni.request({
			    url: this.$store.state.baseURL + '/api/address/getlist', //仅为示例，并非真实接口地址。
			    method: 'GET',
				data: {
			    },
			    success: (res) => {
			        console.log(res.data,res.data.data,'res.data');
					this.addressList = res.data.data;
			    }
			});
		},
		defaultUp(data,ind,isdefault){
			let obj = this;
			if(isdefault == 1){
				obj.addressList = obj.addressList.map(e => {
					e.is_default = 0;
					return e;
				});
				obj.addressList[ind].is_default = 1;
				
				uni.request({
				    url: obj.$store.state.baseURL + '/api/address/update', //仅为示例，并非真实接口地址。
				    method: 'POST',
					data: {
						id:data.id,
						is_default:1
				    },
					header: {
					    'content-type': 'application/x-www-form-urlencoded',  
					  }, 
				    success: (res) => {
						if(res.data.error_code == 0){
							uni.showToast({
								title: '设置成功',
								duration: 2000
							});
							obj.loadAddress();
						}else{
							uni.showToast({
								title: '设置失败',
								duration: 2000
							});
						}
				    },
					fail(err) {
						console.log(err)
					}
				});
			}else{
				obj.addressList = obj.addressList.map(e => {
					e.is_default = 0;
					return e;
				});
				
				uni.request({
				    url: obj.$store.state.baseURL + '/api/address/update', //仅为示例，并非真实接口地址。
				    method: 'POST',
					data: {
						id:data.id,
						is_default:0
				    },
					header: {
					    'content-type': 'application/x-www-form-urlencoded',  
					  }, 
				    success: (res) => {
						if(res.data.error_code == 0){
							uni.showToast({
								title: '取消成功',
								duration: 2000
							});
							obj.loadAddress();
						}else{
							uni.showToast({
								title: '取消失败',
								duration: 2000
							});
						}
				    },
					fail(err) {
						console.log(err)
					}
				});
			}
			
		},
		//选择地址
		checkAddress(item) {
			// if (this.source == 1) {
			// 	//this.$api.prePage()获取上一页实例，在App.vue定义
			// 	this.$api.prePage().addressData = item;
			// 	uni.navigateBack();
			// 	console.log(121)
			// }
		},
		addAddress(item,isxiugai){
			if(isxiugai){
				uni.setStorage({
				    key: 'item',
				    data: item,
				    success: function () {
						console.log('保存item成功')
				       uni.navigateTo({
				       	url:"addressage?isxiugai=true"
				       })
				    }
				});
			}else{
				uni.navigateTo({
					url:"addressage"
				})
			}
		},
		delAddress(item){
			uni.showModal({
				content: '确认是否删除收货地址',
				confirmText: '确认删除',
				success: (res) => {
					if (res.confirm) {
						uni.request({
						    url: this.$store.state.baseURL + '/api/address/delete', //仅为示例，并非真实接口地址。
						    method: 'GET',
							data: {
								id:item.id
						    },
							header: {
							    'content-type': 'application/x-www-form-urlencoded',  
							  }, 
						    success: (res) => {
								if(res.data.error_code == 0){
									uni.showToast({
										title: '删除成功',
										duration: 2000
									});
									uni.navigateTo({
									    url: 'address'
									});
								}else{
									uni.showToast({
										title: '删除失败',
										duration: 2000
									});
								}
						        console.log(res.data,res.data.data,'/api/address/delete');
						    }
						});
					} else if (res.cancel) {
						
					}
				}
			});
		}
	},
};
</script>

<style lang="less" scoped>
page {
	padding-top: 20rpx*2;
}
.green{
	color: #15A09D;
}
.content {
	position: relative;
	padding-bottom: 100rpx*2;
	font-size:13rpx*2;
	color: #333333;
}
.anniu{
	position: fixed;
	bottom:30rpx*2;
	margin: 5rpx*2 7rpx*2 0rpx*2;
	width: 360rpx*2;
	height: 35rpx*2;
	background: linear-gradient(90deg, #79D4BD 0%, #099999 99%);
	border-radius: 5rpx*2;
	font-size: 15rpx*2;
	color: #FFFFFF;
}
.list {
	background: #FFFFFF;
	border: 1rpx*2 solid #ECECEC;
	box-shadow: 0rpx*2 2rpx*2 3rpx*2 0rpx*2 rgba(31, 91, 93, 0.1);
	border-radius: 5rpx*2;
	
	align-items: center;
	padding:12rpx*2;
	margin-top: 0;
	.mobile {
		font-size:13rpx*2;
		font-weight:400;
		color:#333333;
	}
	.wrapper {
		border-bottom: 1rpx*2 solid #f0f0f0;
		.address-box {
			display: flex;
			align-items: center;
			justify-content: space-between;
			.name {
				margin-right: 15rpx*2;
				font-size:13rpx*2;
				font-weight:500;
				color:#333333;
			}
			
			
		}
		.u-box {
			margin-bottom:10rpx*2;
			.address {
				font-size:13rpx*2;
				font-weight:500;
				color:#333333;
			}
		}
		
	}
	.img3{
		width: 16rpx*2;
		height: 16rpx*2;
	}
	.text1{
		font-size: 13rpx*2;
		color: #15A09D;
	}
	.text {
		font-size: 13rpx*2;
		margin-left: 10rpx*2;
	}
	.buttom {
		padding-top: 10rpx*2;
		.operation {
			display: flex;
			align-items: center;
			.img1{
				width: 14rpx*2;
				height: 14rpx*2;
			}
			.img2{
				width: 12rpx*2;
				height: 13rpx*2;
			}
			.blank {
				width: 15rpx*2;
			}
		}
		
		
	}
}



.icon-bianji {
	display: flex;
	align-items: center;
	height: 40rpx*2;
	font-size: 20rpx*2;
	// color: $font-color-light;
	padding-left: 15rpx*2;
}

.add-btn {
	z-index: 95;
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	bottom: 20rpx*2;
	width: 100%;
}
.btn {
	width: 40%;
	height: 40rpx*2;
	// font-size: $font-lg;
	// background-color: $base-color;
	background:linear-gradient(0deg,rgba(250,39,64,1),rgba(254,85,68,1));
	border-radius: 5rpx*2;
}
</style>