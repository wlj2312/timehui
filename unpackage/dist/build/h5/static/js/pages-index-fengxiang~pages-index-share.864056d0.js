(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-fengxiang~pages-index-share"],{3347:function(e,n,i){i("c975"),i("ac1f"),i("466d"),i("5319"),i("1276");var t=i("9523");!function(n,i){e.exports=i(n)}(window,(function(e,n){function i(n,i,t){e.WeixinJSBridge?WeixinJSBridge.invoke(n,r(i),(function(e){c(n,e,t)})):d(n,t)}function o(n,i,t){e.WeixinJSBridge?WeixinJSBridge.on(n,(function(e){t&&t.trigger&&t.trigger(e),c(n,e,i)})):d(n,t||i)}function r(e){return(e=e||{}).appId=x.appId,e.verifyAppId=x.appId,e.verifySignType="sha1",e.verifyTimestamp=x.timestamp+"",e.verifyNonceStr=x.nonceStr,e.verifySignature=x.signature,e}function a(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function c(e,n,i){"openEnterpriseChat"==e&&(n.errCode=n.err_code),delete n.err_code,delete n.err_desc,delete n.err_detail;var t=n.errMsg;t||(t=n.err_msg,delete n.err_msg,t=function(e,n){var i=e,t=m[i];t&&(i=t);var o="ok";if(n){var r=n.indexOf(":");"confirm"==(o=n.substring(r+1))&&(o="ok"),"failed"==o&&(o="fail"),-1!=o.indexOf("failed_")&&(o=o.substring(7)),-1!=o.indexOf("fail_")&&(o=o.substring(5)),"access denied"!=(o=(o=o.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=o||(o="permission denied"),"config"==i&&"function not exist"==o&&(o="ok"),""==o&&(o="fail")}return i+":"+o}(e,t),n.errMsg=t),(i=i||{})._complete&&(i._complete(n),delete i._complete),t=n.errMsg||"",x.debug&&!i.isInnerInvoke&&alert(JSON.stringify(n));var o=t.indexOf(":");switch(t.substring(o+1)){case"ok":i.success&&i.success(n);break;case"cancel":i.cancel&&i.cancel(n);break;default:i.fail&&i.fail(n)}i.complete&&i.complete(n)}function s(e){if(e){for(var n=0,i=e.length;n<i;++n){var t=e[n],o=f[t];o&&(e[n]=o)}return e}}function d(e,n){if(!(!x.debug||n&&n.isInnerInvoke)){var i=m[e];i&&(e=i),n&&n._complete&&delete n._complete,console.log('"'+e+'",',n||"")}}function l(){return(new Date).getTime()}function u(n){_&&(e.WeixinJSBridge?n():g.addEventListener&&g.addEventListener("WeixinJSBridgeReady",n,!1))}if(!e.jWeixin){var p,f={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},m=function(){var e={};for(var n in f)e[f[n]]=n;return e}(),g=e.document,h=g.title,v=navigator.userAgent.toLowerCase(),S=navigator.platform.toLowerCase(),I=!(!S.match("mac")&&!S.match("win")),y=-1!=v.indexOf("wxdebugger"),_=-1!=v.indexOf("micromessenger"),w=-1!=v.indexOf("android"),k=-1!=v.indexOf("iphone")||-1!=v.indexOf("ipad"),T=(E=v.match(/micromessenger\/(\d+\.\d+\.\d+)/)||v.match(/micromessenger\/(\d+\.\d+)/))?E[1]:"",M={initStartTime:l(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},P={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:k?1:w?2:-1,clientVersion:T,url:encodeURIComponent(location.href)},x={},A={_completes:[]},V={state:0,data:{}};u((function(){M.initEndTime=l()}));var C=!1,L=[],B=(p={config:function(n){d("config",x=n);var t=!1!==x.check;u((function(){if(t)i(f.config,{verifyJsApiList:s(x.jsApiList)},function(){A._complete=function(e){M.preVerifyEndTime=l(),V.state=1,V.data=e},A.success=function(e){P.isPreVerifyOk=0},A.fail=function(e){A._fail?A._fail(e):V.state=-1};var e=A._completes;return e.push((function(){!function(e){if(!(I||y||x.debug||T<"6.0.2"||P.systemType<0)){var n=new Image;P.appId=x.appId,P.initTime=M.initEndTime-M.initStartTime,P.preVerifyTime=M.preVerifyEndTime-M.preVerifyStartTime,B.getNetworkType({isInnerInvoke:!0,success:function(e){P.networkType=e.networkType;var i="https://open.weixin.qq.com/sdk/report?v="+P.version+"&o="+P.isPreVerifyOk+"&s="+P.systemType+"&c="+P.clientVersion+"&a="+P.appId+"&n="+P.networkType+"&i="+P.initTime+"&p="+P.preVerifyTime+"&u="+P.url;n.src=i}})}}()})),A.complete=function(n){for(var i=0,t=e.length;i<t;++i)e[i]();A._completes=[]},A}()),M.preVerifyStartTime=l();else{V.state=1;for(var e=A._completes,n=0,o=e.length;n<o;++n)e[n]();A._completes=[]}})),B.invoke||(B.invoke=function(n,i,t){e.WeixinJSBridge&&WeixinJSBridge.invoke(n,r(i),t)},B.on=function(n,i){e.WeixinJSBridge&&WeixinJSBridge.on(n,i)})},ready:function(e){0!=V.state?e():(A._completes.push(e),!_&&x.debug&&e())},error:function(e){T<"6.0.2"||(-1==V.state?e(V.data):A._fail=e)},checkJsApi:function(e){i("checkJsApi",{jsApiList:s(e.jsApiList)},(e._complete=function(e){if(w){var n=e.checkResult;n&&(e.checkResult=JSON.parse(n))}e=function(e){var n=e.checkResult;for(var i in n){var t=m[i];t&&(n[t]=n[i],delete n[i])}return e}(e)},e))},onMenuShareTimeline:function(e){o(f.onMenuShareTimeline,{complete:function(){i("shareTimeline",{title:e.title||h,desc:e.title||h,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){o(f.onMenuShareAppMessage,{complete:function(n){"favorite"===n.scene?i("sendAppMessage",{title:e.title||h,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):i("sendAppMessage",{title:e.title||h,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){o(f.onMenuShareQQ,{complete:function(){i("shareQQ",{title:e.title||h,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){o(f.onMenuShareWeibo,{complete:function(){i("shareWeiboApp",{title:e.title||h,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){o(f.onMenuShareQZone,{complete:function(){i("shareQZone",{title:e.title||h,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){i("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){i("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){i("startRecord",{},e)},stopRecord:function(e){i("stopRecord",{},e)},onVoiceRecordEnd:function(e){o("onVoiceRecordEnd",e)},playVoice:function(e){i("playVoice",{localId:e.localId},e)},pauseVoice:function(e){i("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){i("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){o("onVoicePlayEnd",e)},uploadVoice:function(e){i("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){i("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){i("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){i("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(w){var n=e.localIds;try{n&&(e.localIds=JSON.parse(n))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){i(f.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){i("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){i("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===C?(C=!0,i("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(C=!1,0<L.length){var n=L.shift();wx.getLocalImgData(n)}},e))):L.push(e)},getNetworkType:function(e){i("getNetworkType",{},(e._complete=function(e){e=function(e){var n=e.errMsg;e.errMsg="getNetworkType:ok";var i=e.subtype;if(delete e.subtype,i)e.networkType=i;else{var t=n.indexOf(":"),o=n.substring(t+1);switch(o){case"wifi":case"edge":case"wwan":e.networkType=o;break;default:e.errMsg="getNetworkType:fail"}}return e}(e)},e))},openLocation:function(e){i("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)}},t(p,"getLocation",(function(e){i(f.getLocation,{type:(e=e||{}).type||"wgs84"},(e._complete=function(e){delete e.type},e))})),t(p,"hideOptionMenu",(function(e){i("hideOptionMenu",{},e)})),t(p,"showOptionMenu",(function(e){i("showOptionMenu",{},e)})),t(p,"closeWindow",(function(e){i("closeWindow",{},e=e||{})})),t(p,"hideMenuItems",(function(e){i("hideMenuItems",{menuList:e.menuList},e)})),t(p,"showMenuItems",(function(e){i("showMenuItems",{menuList:e.menuList},e)})),t(p,"hideAllNonBaseMenuItem",(function(e){i("hideAllNonBaseMenuItem",{},e)})),t(p,"showAllNonBaseMenuItem",(function(e){i("showAllNonBaseMenuItem",{},e)})),t(p,"scanQRCode",(function(e){i("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(k){var n=e.resultStr;if(n){var i=JSON.parse(n);e.resultStr=i&&i.scan_code&&i.scan_code.scan_result}}},e))})),t(p,"openAddress",(function(e){i(f.openAddress,{},(e._complete=function(e){var n;(n=e).postalCode=n.addressPostalCode,delete n.addressPostalCode,n.provinceName=n.proviceFirstStageName,delete n.proviceFirstStageName,n.cityName=n.addressCitySecondStageName,delete n.addressCitySecondStageName,n.countryName=n.addressCountiesThirdStageName,delete n.addressCountiesThirdStageName,n.detailInfo=n.addressDetailInfo,delete n.addressDetailInfo,e=n},e))})),t(p,"openProductSpecificView",(function(e){i(f.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)})),t(p,"addCard",(function(e){for(var n=e.cardList,t=[],o=0,r=n.length;o<r;++o){var a=n[o],c={card_id:a.cardId,card_ext:a.cardExt};t.push(c)}i(f.addCard,{card_list:t},(e._complete=function(e){var n=e.card_list;if(n){for(var i=0,t=(n=JSON.parse(n)).length;i<t;++i){var o=n[i];o.cardId=o.card_id,o.cardExt=o.card_ext,o.isSuccess=!!o.is_succ,delete o.card_id,delete o.card_ext,delete o.is_succ}e.cardList=n,delete e.card_list}},e))})),t(p,"chooseCard",(function(e){i("chooseCard",{app_id:x.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))})),t(p,"openCard",(function(e){for(var n=e.cardList,t=[],o=0,r=n.length;o<r;++o){var a=n[o],c={card_id:a.cardId,code:a.code};t.push(c)}i(f.openCard,{card_list:t},e)})),t(p,"consumeAndShareCard",(function(e){i(f.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)})),t(p,"chooseWXPay",(function(e){i(f.chooseWXPay,a(e),e)})),t(p,"openEnterpriseRedPacket",(function(e){i(f.openEnterpriseRedPacket,a(e),e)})),t(p,"startSearchBeacons",(function(e){i(f.startSearchBeacons,{ticket:e.ticket},e)})),t(p,"stopSearchBeacons",(function(e){i(f.stopSearchBeacons,{},e)})),t(p,"onSearchBeacons",(function(e){o(f.onSearchBeacons,e)})),t(p,"openEnterpriseChat",(function(e){i("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)})),t(p,"launchMiniProgram",(function(e){i("launchMiniProgram",{targetAppId:e.targetAppId,path:function(e){if("string"==typeof e&&0<e.length){var n=e.split("?")[0],i=e.split("?")[1];return n+=".html",void 0!==i?n+"?"+i:n}}(e.path),envVersion:e.envVersion},e)})),t(p,"miniProgram",{navigateBack:function(e){e=e||{},u((function(){i("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)}))},navigateTo:function(e){u((function(){i("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)}))},redirectTo:function(e){u((function(){i("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)}))},switchTab:function(e){u((function(){i("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)}))},reLaunch:function(e){u((function(){i("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)}))},postMessage:function(e){u((function(){i("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)}))},getEnv:function(n){u((function(){n({miniprogram:"miniprogram"===e.__wxjs_environment})}))}}),p),O=1,b={};return g.addEventListener("error",(function(e){if(!w){var n=e.target,i=n.tagName,t=n.src;if(("IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i)&&-1!=t.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var o=n["wx-id"];if(o||(o=O++,n["wx-id"]=o),b[o])return;b[o]=!0,wx.ready((function(){wx.getLocalImgData({localId:t,success:function(e){n.src=e.localData}})}))}}}),!0),g.addEventListener("load",(function(e){if(!w){var n=e.target,i=n.tagName;if(n.src,"IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){var t=n["wx-id"];t&&(b[t]=!1)}}}),!0),n&&(e.wx=e.jWeixin=B),B}var E})),function(n,i){e.exports=i(n)}(window,(function(e,n){function i(n,i,t){e.WeixinJSBridge?WeixinJSBridge.invoke(n,r(i),(function(e){c(n,e,t)})):d(n,t)}function o(n,i,t){e.WeixinJSBridge?WeixinJSBridge.on(n,(function(e){t&&t.trigger&&t.trigger(e),c(n,e,i)})):d(n,t||i)}function r(e){return(e=e||{}).appId=x.appId,e.verifyAppId=x.appId,e.verifySignType="sha1",e.verifyTimestamp=x.timestamp+"",e.verifyNonceStr=x.nonceStr,e.verifySignature=x.signature,e}function a(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function c(e,n,i){"openEnterpriseChat"==e&&(n.errCode=n.err_code),delete n.err_code,delete n.err_desc,delete n.err_detail;var t=n.errMsg;t||(t=n.err_msg,delete n.err_msg,t=function(e,n){var i=e,t=m[i];t&&(i=t);var o="ok";if(n){var r=n.indexOf(":");"confirm"==(o=n.substring(r+1))&&(o="ok"),"failed"==o&&(o="fail"),-1!=o.indexOf("failed_")&&(o=o.substring(7)),-1!=o.indexOf("fail_")&&(o=o.substring(5)),"access denied"!=(o=(o=o.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=o||(o="permission denied"),"config"==i&&"function not exist"==o&&(o="ok"),""==o&&(o="fail")}return i+":"+o}(e,t),n.errMsg=t),(i=i||{})._complete&&(i._complete(n),delete i._complete),t=n.errMsg||"",x.debug&&!i.isInnerInvoke&&alert(JSON.stringify(n));var o=t.indexOf(":");switch(t.substring(o+1)){case"ok":i.success&&i.success(n);break;case"cancel":i.cancel&&i.cancel(n);break;default:i.fail&&i.fail(n)}i.complete&&i.complete(n)}function s(e){if(e){for(var n=0,i=e.length;n<i;++n){var t=e[n],o=f[t];o&&(e[n]=o)}return e}}function d(e,n){if(!(!x.debug||n&&n.isInnerInvoke)){var i=m[e];i&&(e=i),n&&n._complete&&delete n._complete,console.log('"'+e+'",',n||"")}}function l(){return(new Date).getTime()}function u(n){_&&(e.WeixinJSBridge?n():g.addEventListener&&g.addEventListener("WeixinJSBridgeReady",n,!1))}if(!e.jWeixin){var p,f={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},m=function(){var e={};for(var n in f)e[f[n]]=n;return e}(),g=e.document,h=g.title,v=navigator.userAgent.toLowerCase(),S=navigator.platform.toLowerCase(),I=!(!S.match("mac")&&!S.match("win")),y=-1!=v.indexOf("wxdebugger"),_=-1!=v.indexOf("micromessenger"),w=-1!=v.indexOf("android"),k=-1!=v.indexOf("iphone")||-1!=v.indexOf("ipad"),T=(E=v.match(/micromessenger\/(\d+\.\d+\.\d+)/)||v.match(/micromessenger\/(\d+\.\d+)/))?E[1]:"",M={initStartTime:l(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},P={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:k?1:w?2:-1,clientVersion:T,url:encodeURIComponent(location.href)},x={},A={_completes:[]},V={state:0,data:{}};u((function(){M.initEndTime=l()}));var C=!1,L=[],B=(p={config:function(n){d("config",x=n);var t=!1!==x.check;u((function(){if(t)i(f.config,{verifyJsApiList:s(x.jsApiList)},function(){A._complete=function(e){M.preVerifyEndTime=l(),V.state=1,V.data=e},A.success=function(e){P.isPreVerifyOk=0},A.fail=function(e){A._fail?A._fail(e):V.state=-1};var e=A._completes;return e.push((function(){!function(e){if(!(I||y||x.debug||T<"6.0.2"||P.systemType<0)){var n=new Image;P.appId=x.appId,P.initTime=M.initEndTime-M.initStartTime,P.preVerifyTime=M.preVerifyEndTime-M.preVerifyStartTime,B.getNetworkType({isInnerInvoke:!0,success:function(e){P.networkType=e.networkType;var i="https://open.weixin.qq.com/sdk/report?v="+P.version+"&o="+P.isPreVerifyOk+"&s="+P.systemType+"&c="+P.clientVersion+"&a="+P.appId+"&n="+P.networkType+"&i="+P.initTime+"&p="+P.preVerifyTime+"&u="+P.url;n.src=i}})}}()})),A.complete=function(n){for(var i=0,t=e.length;i<t;++i)e[i]();A._completes=[]},A}()),M.preVerifyStartTime=l();else{V.state=1;for(var e=A._completes,n=0,o=e.length;n<o;++n)e[n]();A._completes=[]}})),B.invoke||(B.invoke=function(n,i,t){e.WeixinJSBridge&&WeixinJSBridge.invoke(n,r(i),t)},B.on=function(n,i){e.WeixinJSBridge&&WeixinJSBridge.on(n,i)})},ready:function(e){0!=V.state?e():(A._completes.push(e),!_&&x.debug&&e())},error:function(e){T<"6.0.2"||(-1==V.state?e(V.data):A._fail=e)},checkJsApi:function(e){i("checkJsApi",{jsApiList:s(e.jsApiList)},(e._complete=function(e){if(w){var n=e.checkResult;n&&(e.checkResult=JSON.parse(n))}e=function(e){var n=e.checkResult;for(var i in n){var t=m[i];t&&(n[t]=n[i],delete n[i])}return e}(e)},e))},onMenuShareTimeline:function(e){o(f.onMenuShareTimeline,{complete:function(){i("shareTimeline",{title:e.title||h,desc:e.title||h,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){o(f.onMenuShareAppMessage,{complete:function(n){"favorite"===n.scene?i("sendAppMessage",{title:e.title||h,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):i("sendAppMessage",{title:e.title||h,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){o(f.onMenuShareQQ,{complete:function(){i("shareQQ",{title:e.title||h,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){o(f.onMenuShareWeibo,{complete:function(){i("shareWeiboApp",{title:e.title||h,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){o(f.onMenuShareQZone,{complete:function(){i("shareQZone",{title:e.title||h,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){i("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){i("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){i("startRecord",{},e)},stopRecord:function(e){i("stopRecord",{},e)},onVoiceRecordEnd:function(e){o("onVoiceRecordEnd",e)},playVoice:function(e){i("playVoice",{localId:e.localId},e)},pauseVoice:function(e){i("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){i("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){o("onVoicePlayEnd",e)},uploadVoice:function(e){i("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){i("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){i("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){i("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(w){var n=e.localIds;try{n&&(e.localIds=JSON.parse(n))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){i(f.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){i("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){i("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===C?(C=!0,i("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(C=!1,0<L.length){var n=L.shift();wx.getLocalImgData(n)}},e))):L.push(e)},getNetworkType:function(e){i("getNetworkType",{},(e._complete=function(e){e=function(e){var n=e.errMsg;e.errMsg="getNetworkType:ok";var i=e.subtype;if(delete e.subtype,i)e.networkType=i;else{var t=n.indexOf(":"),o=n.substring(t+1);switch(o){case"wifi":case"edge":case"wwan":e.networkType=o;break;default:e.errMsg="getNetworkType:fail"}}return e}(e)},e))},openLocation:function(e){i("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)}},t(p,"getLocation",(function(e){i(f.getLocation,{type:(e=e||{}).type||"wgs84"},(e._complete=function(e){delete e.type},e))})),t(p,"hideOptionMenu",(function(e){i("hideOptionMenu",{},e)})),t(p,"showOptionMenu",(function(e){i("showOptionMenu",{},e)})),t(p,"closeWindow",(function(e){i("closeWindow",{},e=e||{})})),t(p,"hideMenuItems",(function(e){i("hideMenuItems",{menuList:e.menuList},e)})),t(p,"showMenuItems",(function(e){i("showMenuItems",{menuList:e.menuList},e)})),t(p,"hideAllNonBaseMenuItem",(function(e){i("hideAllNonBaseMenuItem",{},e)})),t(p,"showAllNonBaseMenuItem",(function(e){i("showAllNonBaseMenuItem",{},e)})),t(p,"scanQRCode",(function(e){i("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(k){var n=e.resultStr;if(n){var i=JSON.parse(n);e.resultStr=i&&i.scan_code&&i.scan_code.scan_result}}},e))})),t(p,"openAddress",(function(e){i(f.openAddress,{},(e._complete=function(e){var n;(n=e).postalCode=n.addressPostalCode,delete n.addressPostalCode,n.provinceName=n.proviceFirstStageName,delete n.proviceFirstStageName,n.cityName=n.addressCitySecondStageName,delete n.addressCitySecondStageName,n.countryName=n.addressCountiesThirdStageName,delete n.addressCountiesThirdStageName,n.detailInfo=n.addressDetailInfo,delete n.addressDetailInfo,e=n},e))})),t(p,"openProductSpecificView",(function(e){i(f.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)})),t(p,"addCard",(function(e){for(var n=e.cardList,t=[],o=0,r=n.length;o<r;++o){var a=n[o],c={card_id:a.cardId,card_ext:a.cardExt};t.push(c)}i(f.addCard,{card_list:t},(e._complete=function(e){var n=e.card_list;if(n){for(var i=0,t=(n=JSON.parse(n)).length;i<t;++i){var o=n[i];o.cardId=o.card_id,o.cardExt=o.card_ext,o.isSuccess=!!o.is_succ,delete o.card_id,delete o.card_ext,delete o.is_succ}e.cardList=n,delete e.card_list}},e))})),t(p,"chooseCard",(function(e){i("chooseCard",{app_id:x.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))})),t(p,"openCard",(function(e){for(var n=e.cardList,t=[],o=0,r=n.length;o<r;++o){var a=n[o],c={card_id:a.cardId,code:a.code};t.push(c)}i(f.openCard,{card_list:t},e)})),t(p,"consumeAndShareCard",(function(e){i(f.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)})),t(p,"chooseWXPay",(function(e){i(f.chooseWXPay,a(e),e)})),t(p,"openEnterpriseRedPacket",(function(e){i(f.openEnterpriseRedPacket,a(e),e)})),t(p,"startSearchBeacons",(function(e){i(f.startSearchBeacons,{ticket:e.ticket},e)})),t(p,"stopSearchBeacons",(function(e){i(f.stopSearchBeacons,{},e)})),t(p,"onSearchBeacons",(function(e){o(f.onSearchBeacons,e)})),t(p,"openEnterpriseChat",(function(e){i("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)})),t(p,"launchMiniProgram",(function(e){i("launchMiniProgram",{targetAppId:e.targetAppId,path:function(e){if("string"==typeof e&&0<e.length){var n=e.split("?")[0],i=e.split("?")[1];return n+=".html",void 0!==i?n+"?"+i:n}}(e.path),envVersion:e.envVersion},e)})),t(p,"miniProgram",{navigateBack:function(e){e=e||{},u((function(){i("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)}))},navigateTo:function(e){u((function(){i("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)}))},redirectTo:function(e){u((function(){i("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)}))},switchTab:function(e){u((function(){i("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)}))},reLaunch:function(e){u((function(){i("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)}))},postMessage:function(e){u((function(){i("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)}))},getEnv:function(n){u((function(){n({miniprogram:"miniprogram"===e.__wxjs_environment})}))}}),p),O=1,b={};return g.addEventListener("error",(function(e){if(!w){var n=e.target,i=n.tagName,t=n.src;if(("IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i)&&-1!=t.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var o=n["wx-id"];if(o||(o=O++,n["wx-id"]=o),b[o])return;b[o]=!0,wx.ready((function(){wx.getLocalImgData({localId:t,success:function(e){n.src=e.localData}})}))}}}),!0),g.addEventListener("load",(function(e){if(!w){var n=e.target,i=n.tagName;if(n.src,"IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){var t=n["wx-id"];t&&(b[t]=!1)}}}),!0),n&&(e.wx=e.jWeixin=B),B}var E})),function(n,i){e.exports=i(n)}(window,(function(e,n){function i(n,i,t){e.WeixinJSBridge?WeixinJSBridge.invoke(n,r(i),(function(e){c(n,e,t)})):d(n,t)}function o(n,i,t){e.WeixinJSBridge?WeixinJSBridge.on(n,(function(e){t&&t.trigger&&t.trigger(e),c(n,e,i)})):d(n,t||i)}function r(e){return(e=e||{}).appId=x.appId,e.verifyAppId=x.appId,e.verifySignType="sha1",e.verifyTimestamp=x.timestamp+"",e.verifyNonceStr=x.nonceStr,e.verifySignature=x.signature,e}function a(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function c(e,n,i){"openEnterpriseChat"==e&&(n.errCode=n.err_code),delete n.err_code,delete n.err_desc,delete n.err_detail;var t=n.errMsg;t||(t=n.err_msg,delete n.err_msg,t=function(e,n){var i=e,t=m[i];t&&(i=t);var o="ok";if(n){var r=n.indexOf(":");"confirm"==(o=n.substring(r+1))&&(o="ok"),"failed"==o&&(o="fail"),-1!=o.indexOf("failed_")&&(o=o.substring(7)),-1!=o.indexOf("fail_")&&(o=o.substring(5)),"access denied"!=(o=(o=o.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=o||(o="permission denied"),"config"==i&&"function not exist"==o&&(o="ok"),""==o&&(o="fail")}return i+":"+o}(e,t),n.errMsg=t),(i=i||{})._complete&&(i._complete(n),delete i._complete),t=n.errMsg||"",x.debug&&!i.isInnerInvoke&&alert(JSON.stringify(n));var o=t.indexOf(":");switch(t.substring(o+1)){case"ok":i.success&&i.success(n);break;case"cancel":i.cancel&&i.cancel(n);break;default:i.fail&&i.fail(n)}i.complete&&i.complete(n)}function s(e){if(e){for(var n=0,i=e.length;n<i;++n){var t=e[n],o=f[t];o&&(e[n]=o)}return e}}function d(e,n){if(!(!x.debug||n&&n.isInnerInvoke)){var i=m[e];i&&(e=i),n&&n._complete&&delete n._complete,console.log('"'+e+'",',n||"")}}function l(){return(new Date).getTime()}function u(n){_&&(e.WeixinJSBridge?n():g.addEventListener&&g.addEventListener("WeixinJSBridgeReady",n,!1))}if(!e.jWeixin){var p,f={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},m=function(){var e={};for(var n in f)e[f[n]]=n;return e}(),g=e.document,h=g.title,v=navigator.userAgent.toLowerCase(),S=navigator.platform.toLowerCase(),I=!(!S.match("mac")&&!S.match("win")),y=-1!=v.indexOf("wxdebugger"),_=-1!=v.indexOf("micromessenger"),w=-1!=v.indexOf("android"),k=-1!=v.indexOf("iphone")||-1!=v.indexOf("ipad"),T=(E=v.match(/micromessenger\/(\d+\.\d+\.\d+)/)||v.match(/micromessenger\/(\d+\.\d+)/))?E[1]:"",M={initStartTime:l(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},P={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:k?1:w?2:-1,clientVersion:T,url:encodeURIComponent(location.href)},x={},A={_completes:[]},V={state:0,data:{}};u((function(){M.initEndTime=l()}));var C=!1,L=[],B=(p={config:function(n){d("config",x=n);var t=!1!==x.check;u((function(){if(t)i(f.config,{verifyJsApiList:s(x.jsApiList)},function(){A._complete=function(e){M.preVerifyEndTime=l(),V.state=1,V.data=e},A.success=function(e){P.isPreVerifyOk=0},A.fail=function(e){A._fail?A._fail(e):V.state=-1};var e=A._completes;return e.push((function(){!function(e){if(!(I||y||x.debug||T<"6.0.2"||P.systemType<0)){var n=new Image;P.appId=x.appId,P.initTime=M.initEndTime-M.initStartTime,P.preVerifyTime=M.preVerifyEndTime-M.preVerifyStartTime,B.getNetworkType({isInnerInvoke:!0,success:function(e){P.networkType=e.networkType;var i="https://open.weixin.qq.com/sdk/report?v="+P.version+"&o="+P.isPreVerifyOk+"&s="+P.systemType+"&c="+P.clientVersion+"&a="+P.appId+"&n="+P.networkType+"&i="+P.initTime+"&p="+P.preVerifyTime+"&u="+P.url;n.src=i}})}}()})),A.complete=function(n){for(var i=0,t=e.length;i<t;++i)e[i]();A._completes=[]},A}()),M.preVerifyStartTime=l();else{V.state=1;for(var e=A._completes,n=0,o=e.length;n<o;++n)e[n]();A._completes=[]}})),B.invoke||(B.invoke=function(n,i,t){e.WeixinJSBridge&&WeixinJSBridge.invoke(n,r(i),t)},B.on=function(n,i){e.WeixinJSBridge&&WeixinJSBridge.on(n,i)})},ready:function(e){0!=V.state?e():(A._completes.push(e),!_&&x.debug&&e())},error:function(e){T<"6.0.2"||(-1==V.state?e(V.data):A._fail=e)},checkJsApi:function(e){i("checkJsApi",{jsApiList:s(e.jsApiList)},(e._complete=function(e){if(w){var n=e.checkResult;n&&(e.checkResult=JSON.parse(n))}e=function(e){var n=e.checkResult;for(var i in n){var t=m[i];t&&(n[t]=n[i],delete n[i])}return e}(e)},e))},onMenuShareTimeline:function(e){o(f.onMenuShareTimeline,{complete:function(){i("shareTimeline",{title:e.title||h,desc:e.title||h,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){o(f.onMenuShareAppMessage,{complete:function(n){"favorite"===n.scene?i("sendAppMessage",{title:e.title||h,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):i("sendAppMessage",{title:e.title||h,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){o(f.onMenuShareQQ,{complete:function(){i("shareQQ",{title:e.title||h,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){o(f.onMenuShareWeibo,{complete:function(){i("shareWeiboApp",{title:e.title||h,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){o(f.onMenuShareQZone,{complete:function(){i("shareQZone",{title:e.title||h,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){i("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){i("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){i("startRecord",{},e)},stopRecord:function(e){i("stopRecord",{},e)},onVoiceRecordEnd:function(e){o("onVoiceRecordEnd",e)},playVoice:function(e){i("playVoice",{localId:e.localId},e)},pauseVoice:function(e){i("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){i("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){o("onVoicePlayEnd",e)},uploadVoice:function(e){i("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){i("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){i("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){i("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(w){var n=e.localIds;try{n&&(e.localIds=JSON.parse(n))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){i(f.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){i("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){i("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===C?(C=!0,i("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(C=!1,0<L.length){var n=L.shift();wx.getLocalImgData(n)}},e))):L.push(e)},getNetworkType:function(e){i("getNetworkType",{},(e._complete=function(e){e=function(e){var n=e.errMsg;e.errMsg="getNetworkType:ok";var i=e.subtype;if(delete e.subtype,i)e.networkType=i;else{var t=n.indexOf(":"),o=n.substring(t+1);switch(o){case"wifi":case"edge":case"wwan":e.networkType=o;break;default:e.errMsg="getNetworkType:fail"}}return e}(e)},e))},openLocation:function(e){i("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)}},t(p,"getLocation",(function(e){i(f.getLocation,{type:(e=e||{}).type||"wgs84"},(e._complete=function(e){delete e.type},e))})),t(p,"hideOptionMenu",(function(e){i("hideOptionMenu",{},e)})),t(p,"showOptionMenu",(function(e){i("showOptionMenu",{},e)})),t(p,"closeWindow",(function(e){i("closeWindow",{},e=e||{})})),t(p,"hideMenuItems",(function(e){i("hideMenuItems",{menuList:e.menuList},e)})),t(p,"showMenuItems",(function(e){i("showMenuItems",{menuList:e.menuList},e)})),t(p,"hideAllNonBaseMenuItem",(function(e){i("hideAllNonBaseMenuItem",{},e)})),t(p,"showAllNonBaseMenuItem",(function(e){i("showAllNonBaseMenuItem",{},e)})),t(p,"scanQRCode",(function(e){i("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(k){var n=e.resultStr;if(n){var i=JSON.parse(n);e.resultStr=i&&i.scan_code&&i.scan_code.scan_result}}},e))})),t(p,"openAddress",(function(e){i(f.openAddress,{},(e._complete=function(e){var n;(n=e).postalCode=n.addressPostalCode,delete n.addressPostalCode,n.provinceName=n.proviceFirstStageName,delete n.proviceFirstStageName,n.cityName=n.addressCitySecondStageName,delete n.addressCitySecondStageName,n.countryName=n.addressCountiesThirdStageName,delete n.addressCountiesThirdStageName,n.detailInfo=n.addressDetailInfo,delete n.addressDetailInfo,e=n},e))})),t(p,"openProductSpecificView",(function(e){i(f.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)})),t(p,"addCard",(function(e){for(var n=e.cardList,t=[],o=0,r=n.length;o<r;++o){var a=n[o],c={card_id:a.cardId,card_ext:a.cardExt};t.push(c)}i(f.addCard,{card_list:t},(e._complete=function(e){var n=e.card_list;if(n){for(var i=0,t=(n=JSON.parse(n)).length;i<t;++i){var o=n[i];o.cardId=o.card_id,o.cardExt=o.card_ext,o.isSuccess=!!o.is_succ,delete o.card_id,delete o.card_ext,delete o.is_succ}e.cardList=n,delete e.card_list}},e))})),t(p,"chooseCard",(function(e){i("chooseCard",{app_id:x.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))})),t(p,"openCard",(function(e){for(var n=e.cardList,t=[],o=0,r=n.length;o<r;++o){var a=n[o],c={card_id:a.cardId,code:a.code};t.push(c)}i(f.openCard,{card_list:t},e)})),t(p,"consumeAndShareCard",(function(e){i(f.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)})),t(p,"chooseWXPay",(function(e){i(f.chooseWXPay,a(e),e)})),t(p,"openEnterpriseRedPacket",(function(e){i(f.openEnterpriseRedPacket,a(e),e)})),t(p,"startSearchBeacons",(function(e){i(f.startSearchBeacons,{ticket:e.ticket},e)})),t(p,"stopSearchBeacons",(function(e){i(f.stopSearchBeacons,{},e)})),t(p,"onSearchBeacons",(function(e){o(f.onSearchBeacons,e)})),t(p,"openEnterpriseChat",(function(e){i("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)})),t(p,"launchMiniProgram",(function(e){i("launchMiniProgram",{targetAppId:e.targetAppId,path:function(e){if("string"==typeof e&&0<e.length){var n=e.split("?")[0],i=e.split("?")[1];return n+=".html",void 0!==i?n+"?"+i:n}}(e.path),envVersion:e.envVersion},e)})),t(p,"miniProgram",{navigateBack:function(e){e=e||{},u((function(){i("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)}))},navigateTo:function(e){u((function(){i("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)}))},redirectTo:function(e){u((function(){i("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)}))},switchTab:function(e){u((function(){i("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)}))},reLaunch:function(e){u((function(){i("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)}))},postMessage:function(e){u((function(){i("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)}))},getEnv:function(n){u((function(){n({miniprogram:"miniprogram"===e.__wxjs_environment})}))}}),p),O=1,b={};return g.addEventListener("error",(function(e){if(!w){var n=e.target,i=n.tagName,t=n.src;if(("IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i)&&-1!=t.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var o=n["wx-id"];if(o||(o=O++,n["wx-id"]=o),b[o])return;b[o]=!0,wx.ready((function(){wx.getLocalImgData({localId:t,success:function(e){n.src=e.localData}})}))}}}),!0),g.addEventListener("load",(function(e){if(!w){var n=e.target,i=n.tagName;if(n.src,"IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){var t=n["wx-id"];t&&(b[t]=!1)}}}),!0),n&&(e.wx=e.jWeixin=B),B}var E}))},9523:function(e,n){function i(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}e.exports=i}}]);