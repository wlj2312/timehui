import request from '@/utils/request'

export function getAddressList(data) {
	return request({
		url: '/api/address/list',
		method: 'get',
		data
	});
}
export function addressEdit(data) {
	return request({
		url: '/api/address/edit',
		method: 'post',
		data
	});
}
// 删除地址
export function addressDel(data) {
	return request({
		url: '/api/address/del',
		method: 'post',
		data
	});
}
