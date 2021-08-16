<template>
	<view class="content">
		<view class="row b-b center">
			<text class="tit">联系人</text>
			<input class="input" type="text" v-model="name" placeholder="姓名" placeholder-class="placeholder" />
		</view>
		<view class="row b-b center">
			<text class="tit">电话</text>
			<input class="input" type="number" maxlength="11" v-model="mobile" placeholder="手机号码" placeholder-class="placeholder" />
		</view>
		<view class="row b-b flex-left">
			<text class="tit">地址</text>
			<AddressPicker v-if="planLocate == '请选择地址'" style="font-size: 30rpx;color: grey;" @change="change"
				:level="3">请选择地址 </AddressPicker>
			<AddressPicker v-if="planLocate != '请选择地址'" style="font-size: 30rpx;color: #333333;" @change="change"
				:level="3">{{planLocate}} </AddressPicker>
		</view>
		<!-- <view class="row b-b">
			<text class="tit">街道</text>
			<input class="input" type="text" style="text-align: right;" v-model="addressData.area" placeholder="所在街道" placeholder-class="placeholder" />
			<text class="iconfont iconenter"></text>
		</view> -->
		<view class="row b-b">
			<input class="input" type="text" v-model="street" placeholder-style="font-size: 30rpx;color: grey;"
				placeholder="详细地址" placeholder-class="placeholder" />
		</view>

		<!-- <linkAddress ref="linkAddress" :height="height" @confirmCallback="confirmCallback()">
		</linkAddress> -->

		<button class="add-btn flex-center" @click="confirm">确认添加</button>
	</view>
</template>

<script>
	import AddressPicker from "@/components/lingdang-AddressPicker/AddressPicker.vue"
	export default {
		components: {
			AddressPicker
		},
		data() {
			return {
				planLocate: '请选择地址',
				id: '',
				addressDetail: '',
				name: '', //收件人
				mobile: '', //收件号码
				province: '', //省
				city: 0, //市
				county: '', //区
				street: '', //详细地址
				content: '',
				isxiugai:false//是不是修改
			};
		},
		onLoad(option) {
			console.log(option, 'option')
			this.isxiugai = option.isxiugai;
		},
		onShow() {
			let obj = this;
			if(obj.isxiugai){
				uni.getStorage({
					key: 'item',
					success: function(res) {
						console.log(res.data, res.data.name, 'res.data-getStorage')
						obj.name = res.data.name;
						obj.mobile = res.data.mobile;
						obj.province = res.data.province;
						obj.city = res.data.city;
						obj.county = res.data.county;
						obj.street = res.data.street;
						obj.id = res.data.id;
						obj.planLocate = obj.province + '-' + obj.city + '-' + obj.county;
						
					},
					fail(err) {
						console.log(err, 'getStorage-err')
					}
				});
			}
		},
		methods: {
			change(result) {
				console.log(JSON.stringify(result.data));
				this.planLocate = '';
				result.data.forEach((item, index) => {
					if (index === 0) {
						this.planLocate += item.name
					} else {
						this.planLocate += '-' + item.name
					}
				});
				let arr = this.planLocate.split('-');
				this.province = arr[0];
				this.city = arr[1];
				this.county = arr[2];
				console.log(this, 'this')
				console.log(arr)
			},
			// 设置是否为默认地址
			switchChange(e) {
				console.log(e, 1111)
				this.addressData.default = e.value;
			},
			//提交
			confirm() {
				let obj = this;
				if(obj.isxiugai){
					if(obj.city == obj.county){
						uni.showToast({
							title: '地址有误',
							duration: 2000
						})
					}else{
						uni.request({
						    url: obj.$store.state.baseURL + '/api/address/update', //仅为示例，并非真实接口地址。
						    method: 'POST',
							data: {
								id:obj.id,
								mobile: obj.mobile,
								name: obj.name,
								province: obj.province,
								city: obj.city,
								county: obj.county,
								street: obj.street
						    },
							header: {
							    'content-type': 'application/x-www-form-urlencoded',  
							  }, 
						    success: (res) => {
								if(res.data.error_code == 0){
									uni.showToast({
										title: '修改成功',
										duration: 2000
									});
									uni.navigateBack({
									    delta: 1
									});
								}else{
									uni.showToast({
										title: '修改失败',
										duration: 2000
									});
								}
						    },
							fail(err) {
								console.log(err)
							}
						});
					}
				}else
				{
					if (!obj.name) {
						uni.showToast({
							title: '请填写收货人姓名',
							duration: 2000
						});
						return;
					}
					if (obj.mobile.length != 11) {
						uni.showToast({
							title: '请输入正确的手机号码',
							duration: 2000
						});
						return;
					}
					if (!obj.province || !obj.city || !obj.county) {
						uni.showToast({
							title: '请选择地址',
							duration: 2000
						});
						return;
					}
					if (!obj.street) {
						uni.showToast({
							title: '请填写详细地址',
							duration: 2000
						});
						return;
					}
					if(obj.city == obj.county){
						uni.showToast({
							title: '地址有误',
							duration: 2000
						})
					}else{
						uni.request({
							url: this.$store.state.baseURL + '/api/address/add', //仅为示例，并非真实接口地址。
							method: 'POST',
							data: {
								mobile: obj.mobile,
								name: obj.name,
								province: obj.province,
								city: obj.city,
								county: obj.county,
								street: obj.street
							},
							header: {
								'content-type': 'application/x-www-form-urlencoded',
							},
							success: (res) => {
								console.log(res, res.data, res.data.data, '/api/address/add');
								if (res.data.error_code == 0) {
									uni.showToast({
										title: '提交成功',
										duration: 2000
									});
									uni.navigateBack({
										delta: 1
									});
								} else {
									uni.showToast({
										title: res.data.error_msg,
										duration: 2000
									});
								}
							}
						});
					}
				}
			}
		}
	}
</script>

<style lang="less">
	page {
		// background: $page-color-base;
		padding-top: 8rpx*2;
	}

	.center {
		display: flex;
		align-items: center;
	}

	.row {
		position: relative;
		padding: 0 15rpx*2;
		height: 55rpx*2;
		background: #fff;
		font-size: 30rpx;

		.tit {
			flex-shrink: 0;
			width: 60rpx*2;
			font-size: 15rpx*2;
			// color: $font-color-dark;
			margin-right: 5rpx*2;
		}

		.input {
			flex: 1;
			font-size: 15rpx*2;
			// color: $font-color-dark;
		}

		.iconenter {
			font-size: 18rpx*2;
			color: #cccccc;
		}
	}

	.default-row {
		margin-top: 8rpx*2;

		.tit {
			flex: 1;
		}

		switch {
			transform: translateX(8rpx*2) scale(0.9);
		}
	}

	.delete {
		display: flex;
		align-items: center;
		position: relative;
		padding: 0 15rpx*2;
		height: 55rpx*2;
		background: #fff;
		margin-top: 14rpx*2;
		font-size: 15rpx*2;
		font-weight: 500;
		color: rgba(250, 39, 64, 1);
	}

	.add-btn {
		margin: 0 7rpx*2;
		background: linear-gradient(90deg, #79D4BD 0%, #099999 99%);
		border-radius: 5rpx*2;
		color: #fff;
	}

	.alert-box {
		background-color: #ffffff;
	}

	.margin-t-20 {
		margin-top: 10rpx*2 !important;
	}
</style>
