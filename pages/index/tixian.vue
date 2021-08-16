<template>
	<view class="contair">
		<view class="one"></view>
		<view class="two ">
			<view class="two-1 flex-left">
				<view class="two-1-title">余额</view>
				<view>{{userinfo.amount}}</view>
			</view>
			<view class="two-1 flex-left">
				<view class="two-1-title">可提现金额</view>
				<view>{{userinfo.amount}}</view>
			</view>
			<view class="two-1 flex-left">
				<view class="two-1-title">提现金额</view>
				<input type="number" v-model="money" placeholder="请输入提现金额" />
			</view>
			<view class="two-1 flex-left">
				<view class="two-1-title">手机号</view>
				<input type="number"  v-model="mobile" placeholder="请输入手机号" maxlength="11" />
			</view>
			<view class="two-1 flex-left">
				<view class="two-1-title">验证码</view>
				<input  type="number" v-model="code" placeholder="请输入验证码" style="color:#999999;width: 300rpx;" maxlength="8"/>
				<view class="send" @click="Sendyan()" >{{codeMsg}}</view>
			</view>
			<view class="two-1 flex-left">
				<view class="two-1-title">支付宝账号</view>
				<input  type="text" v-model="alipay_account" placeholder="请填写支付宝账号"   placeholder-class="shuru"/>
			</view>
			<view class="two-1 flex-left">
				<view class="two-1-title">支付宝姓名</view>
				<input  type="text" v-model="alipay_name" placeholder="请填写支付宝姓名"   placeholder-class="shuru"/>
			</view>
		</view>
		<view class="tips flex-start-start">
			<view class="red">
				注:
			</view>
			<view class="gray">
				<view>提现金额需大于等于100元</view>
				<view>提现金额不能大于可提现金额</view>
				<view>提现到账日期为每月9日/19日/29日</view>
			</view>
		</view>
		<view class="anniu" @click="tixian()">
			<view class="anniu-modle">
				提交
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// balance:8200,//余额
				// amount:8200,//可提现金额
				codeMsg:'',//发送验证码的内容
				mobile:'',//手机号
				money:"",//需要提现金额
				code:"",//验证码
				alipay_name:'',//支付宝姓名
				alipay_account:'',//支付宝账号
				userinfo:"",//身份信息
				timer:null
			};
		},
		onShow() {
			this.codeMsg = '发送验证码';
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
		onUnload() {
			if(this.timer) {  
				clearTimeout(this.timer);  
				this.timer = null;  
			}  
		},
		onNavigationBarButtonTap(e) {
		   uni.navigateTo({
		       url: 'tixianlist'
		   });
		},
		methods:{
			//发送验证码
			Sendyan(){
				uni.request({
				    url: this.$store.state.baseURL + '/api/user/sendcode', //发送信息
				    method: 'POST',
					data: {
						mobile:this.mobile,
					},
					header: {  
					    'content-type': 'application/x-www-form-urlencoded',  
					  }, 
				    success: (res) => {
						if(res.data.error_code == 0){
							uni.showToast({
							    title: '验证码发送成功',
							    duration: 1000
							});
							let obj = this;
							var curCount = 60;
							var InterValObj = window.setInterval(function () {
							    if (curCount == 0) {
							        window.clearInterval(InterValObj); //停止计时器
							        obj.codeMsg = '重新发送';
							        obj.codeDisabled = false;
							    } else {
							        curCount--;
							        obj.codeMsg = '重新发送 '+ curCount + 's';
									console.log(obj.codeMsg,'obj.codeMsg1')
							    }
							}, 1000);
						}else{
							uni.showToast({
							    title: res.data.error_msg,
							    duration: 1000
							});
						}
						console.log(res.data.error_msg,'验证码发送成功')
					},
					fail(err) {
						console.log(err,'err111')
					}
				});
			},
			//提现
			tixian(){
				var obj = this;
				var way =1;//判断支付方式是微信还是支付宝
				if(obj.alipay_account){
					way = 2;
				}
				console.log(way,obj.alipay_account,'obj.alipay_account')
				uni.request({
				    url: obj.$store.state.baseURL + '/api/withdraw/index', //发送信息
				    method: 'POST',
					data: {
						amount:obj.money,//提现金额
						way:way,//1：微信 2：支付宝
						alipay_account:obj.alipay_account,//支付宝账号
						alipay_name:obj.alipay_name//支付宝姓名
					},
					header: {  
					    'content-type': 'application/x-www-form-urlencoded',  
					  }, 
				    success: (res) => {
						console.log(res.data,'/api/withdraw/index')
						if(res.data.error_code == 0){
							uni.showToast({
								title:res.data.error_msg,
								duration:1000
							})
							obj.timer = setTimeout( () => {
								uni.navigateTo({
									url:'tixianlist'
								})	
							}, 1000)
							
						}else{
							uni.showToast({
								title:res.data.error_msg,
								duration:1000
							})
						}
					},
					fail(err) {
						console.log(err,"/api/withdraw/index+fail")
					}
				});
			}
		}
	}
</script>

<style lang="less" scoped>
.one{
	width: 750rpx;
	height: 3rpx;
	background: #999999;
	opacity: 0.2;
}
.two{
	font-size: 28rpx;
	color: #999999;
	padding: 0 30rpx;
	.two-1{
		padding: 30rpx 0 30rpx 25rpx;
		border-bottom: 2rpx solid #EAEAEA;
		.two-1-title{
			color: #666666;
			width: 140rpx;
			margin-right: 30rpx;
		}
	}
}
.send{
	color: #999999;
	padding: 10rpx;
	border: 1rpx solid #999999;
	opacity: 0.3;
	border-radius: 6rpx;
}
.tips{
	padding: 30rpx 55rpx 120rpx;
	.red{
		font-size: 26rpx;
		color: #9B0D0D;
		opacity: 0.77;
		margin-right: 10rpx;
	}
	.gray{
		font-size: 22rpx;
		color: #999999;
		letter-spacing: 2rpx;
	}
}
.anniu{
	margin: 0 14rpx;
	.anniu-modle{
		padding: 20rpx 330rpx;
		background: linear-gradient(90deg, #79D4BD 0%, #099999 99%);
		font-size: 30rpx;
		color: #FFFFFF;
		border-radius: 10rpx;
	}
}


</style>
