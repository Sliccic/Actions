/***********************************

> 应用名称：Bilibili大会员通用破解模板
> 软件版本：7.8.2
> 脚本作者：Cuttlefish
> 微信账号：墨鱼手记
> 解锁说明：解锁VIP番剧和影视
> 更新时间：2022-12-03
> 通知频道：https://t.me/ddgksf2021
> 贡献投稿：https://t.me/ddgksf2013_bot
> 问题反馈：ddgksf2013@163.com
> 特别提醒：如需转载请注明出处，谢谢合作！
> 特别说明：⚠️⚠️⚠️
          本脚本仅供学习交流使用，禁止转载售卖
          ⚠️⚠️⚠️


[rewrite_local]
  
# ～ Bilibili大会员（2022-12-05）@ddgksf2013
^http[s]?:\/\/((app|api)\.(\w{2,15})?\.(com|cn)).*player\.(v3|v2|v1).Play(URL|View).*$ url script-request-header bilica.js


[mitm] 

hostname=app.bilibili.com, grpc.biliapi.net,*.biliapi.net,app.bilibili.com,api.bilibili.com,api.live.bilibili.com,api.vc.bilibili.com,dataflow.biliapi.com,124.239.240.*,101.89.57.66, 218.94.210.66,240e:b1:9801:206:11:0:0:*

***********************************/

 


var modifiedHeaders = $request['headers'];
modifiedHeaders['Cookie'] = '_uuid=BB9288C9-E545-8465-2F50-47A7719B060A31435infoc; buvid3=C425FF52-3C9A-4925-85D5-21EBA63D9AE9167613infoc; buvid4=7421EB27-74EC-BFCC-468A-B1604F6314E181256-123022412-qeZ1MXNZxeScB2mBHvxCMg%3D%3D; buvid_fp=c8ac2edc8c6105e01095dc1d019038c8; Buvid=Y2473926487C8DEE4E918E5A3C761D5F22FB; SESSDATA=855622f6%2C1693630581%2C7162c631; DedeUserID=39643112; DedeUserID__ckMd5=2b0e529b89c3f1ff; bili_jct=1aa7ebaa514d3e6e0394f4d7bb47ab70; sid=qimby2bh';
modifiedHeaders['x-bili-device-bin'] = 'CAEQxIKMIhokWTI0NzM5MjY0ODdDOERFRTRFOTE4RTVBM0M3NjFENUYyMkZCIgZpcGhvbmUqA2lvczIFcGhvbmU6BWFwcGxlQgVBcHBsZUoJaVBob25lIDEyUgQxNi4xagY3LjE1LjByQEJBMEU0NTNDNzZBNzhBMENFMzhDMUNGMzRGRDlCNzUyMjAyMTA2MjIxNzQ0MzY0QzgwRDU2RTQ1MDZCNEU5OUN4kIyjjOgw';
modifiedHeaders['Authorization'] = 'identify_v1 51661b8900015b9a61e29b910536e431';
modifiedHeaders['User-Agent'] = 'bili-universal/71500100 os/ios model/iPhone 12 mobi_app/iphone osVer/16.1 network/1';
modifiedHeaders['buvid'] = 'Y2473926487C8DEE4E918E5A3C761D5F22FB';
modifiedHeaders['x-bili-metadata-bin'] = 'CiA1MTY2MWI4OTAwMDE1YjlhNjFlMjliOTEwNTM2ZTQzMRIGaXBob25lGgVwaG9uZSDEgowiKgVhcHBsZTIkWTI0NzM5MjY0ODdDOERFRTRFOTE4RTVBM0M3NjFENUYyMkZCOgNpb3M=';
modifiedHeaders['x-bili-locale-bin'] = 'Eg4KAnpoEgRIYW5zGgJDTg==';
modifiedHeaders['x-bili-network-bin'] = 'CAIaB3RlbGVjb20=';
modifiedHeaders['x-bili-fawkes-req-bin'] = 'CgZpcGhvbmUSBHByb2QaCGU5MjdmMzcx';
modifiedHeaders['x-bili-trace-id'] = '9f33c838c8368644bb976455b2207294:bb976455b2207294:0:0';
modifiedHeaders['x-bili-exps-bin'] = 'CgIIAQ==';
modifiedHeaders['x-bili-network-bin'] = 'CAIaB3RlbGVjb20=';
$done({'headers': modifiedHeaders});
