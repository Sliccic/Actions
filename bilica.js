[rewrite_local]
  
^http[s]?:\/\/((app|api)\.(\w{2,15})?\.(com|cn)).*player\.(v3|v2|v1).Play(URL|View).*$ url script-request-header https://raw.githubusercontent.com/Sliccic/Actions/main/bilica.js


[mitm] 

hostname=app.bilibili.com, grpc.biliapi.net,*.biliapi.net,app.bilibili.com,api.bilibili.com,api.live.bilibili.com,api.vc.bilibili.com,dataflow.biliapi.com,124.239.240.*,101.89.57.66, 218.94.210.66,240e:b1:9801:206:11:0:0:*

***********************************/

 


var modifiedHeaders = $request['headers'];
modifiedHeaders['Cookie'] = '_uuid=BB9288C9-E545-8465-2F50-47A7719B060A31435infoc; buvid3=C425FF52-3C9A-4925-85D5-21EBA63D9AE9167613infoc; buvid4=7421EB27-74EC-BFCC-468A-B1604F6314E181256-123022412-qeZ1MXNZxeScB2mBHvxCMg%3D%3D; buvid_fp=c8ac2edc8c6105e01095dc1d019038c8; Buvid=Y2473926487C8DEE4E918E5A3C761D5F22FB; SESSDATA=eba35d4e%2C1694417686%2C055f0a31; DedeUserID=39643112; DedeUserID__ckMd5=2b0e529b89c3f1ff; bili_jct=84896218291dc055097b195fbcf9a9e1; sid=qf869vrb';
modifiedHeaders['x-bili-device-bin'] = 'CAEQyMWqIhokWTI0NzM5MjY0ODdDOERFRTRFOTE4RTVBM0M3NjFENUYyMkZCIgZpcGhvbmUqA2lvczIFcGhvbmU6BWFwcGxlQgVBcHBsZUoJaVBob25lIDEyUgQxNi4xagY3LjIwLjByQDVCNzkyOTUxMTI4OEQ0Mzk5NDU3OEJGMjM3NzU0RUVEMjAyMTA0MDcxOTA0NTRFMkVEMUVDQjhCODExQkY1RDV4kIyjjOgw';
modifiedHeaders['Authorization'] = 'identify_v1 6d8ccec3420a0b90859b4060749bd131';
modifiedHeaders['User-Agent'] = 'bili-universal/72000200 os/ios model/iPhone 12 mobi_app/iphone osVer/16.1 network/1';
modifiedHeaders['buvid'] = 'Y2473926487C8DEE4E918E5A3C761D5F22FB';
modifiedHeaders['x-bili-metadata-bin'] = 'CiA2ZDhjY2VjMzQyMGEwYjkwODU5YjQwNjA3NDliZDEzMRIGaXBob25lGgVwaG9uZSDIxaoiKgVhcHBsZTIkWTI0NzM5MjY0ODdDOERFRTRFOTE4RTVBM0M3NjFENUYyMkZCOgNpb3M=';
modifiedHeaders['x-bili-locale-bin'] = 'Eg4KAnpoEgRIYW5zGgJDTg==';
modifiedHeaders['x-bili-network-bin'] = 'CAIaB3RlbGVjb20=';
modifiedHeaders['x-bili-fawkes-req-bin'] = 'CgZpcGhvbmUSBHByb2QaBzMwOGEwOWM=';
modifiedHeaders['x-bili-trace-id'] = '0d93440f65b6ebfdf538bee0d76412e6:f538bee0d76412e6:0:0';
modifiedHeaders['x-bili-exps-bin'] = 'CgIIAQ==';
modifiedHeaders['x-bili-network-bin'] = 'CAIaB3RlbGVjb20=';
$done({'headers': modifiedHeaders});
