
/*************************************

项目名称：彩云天气-净化/SVIP
脚本作者：佚名
使用声明：⚠️仅供参考，🈲售卖！

**************************************

[rewrite_local]
^https?:\/\/(biz|wrapper)\.cyapi\.cn\/(.+\/(user.+|visitors|activity)|p\/v\d\/vip_info) url script-response-body https://raw.githubusercontent.com/yanyuwangluo/yanyuwangluo/main/caiyun.js
^http:\/\/adx\.sogaha\.cn\/sdk\/ad\/get url reject-200

[mitm]
hostname = *.cyapi.cn, adx.sogaha.cn

*************************************/


var chxm1023 = JSON.parse($response.body);
const urls = ['/vip_info', '/activity', 'user'];

urls.forEach(url => {
  if ($request.url.includes(url)){
    switch(url) {
      case '/vip_info':
        chxm1023 = {
          ...chxm1023, 
          vip: {
            "expires_time" : "4092599349",
            "is_auto_renewal" : true
          },
          svip: {
            "expires_time" : "4092599349",
            "is_auto_renewal" : true
          }
        }
        break;
      case '/activity':
        chxm1023.activities = [];
        break;
      case 'user':
        chxm1023.result = {
          ...chxm1023.result,
          ranking_above: 99,
          is_vip: true,
          vip_expired_at: 4092599349,
          svip_given: 9999,
          is_xy_vip: true,
          xy_svip_expire: 4092599349,
          wt: {
            ...chxm1023.result.wt,
            vip: {
              "auto_renewal_type" : "",
              "expired_at" : 0,
              "enabled" : true,
              "svip_apple_expired_at" : 4092599349,
              "is_auto_renewal" : true,
              "svip_expired_at" : 4092599349,
              "svip_auto_renewal_type" : ""
            },
            svip_given: 9999,
            ranking_above: 99,
          },
          is_phone_verified: true,
          phone_num: "13145200000",
          vip_take_effect: 1,
          is_primary: true,
          xy_vip_expire: 4092599349,
          svip_expired_at: 4092599349,
          svip_take_effect: 1,
          vip_type: "s",
          name: "烟雨",
          avatar: "https://tu.yanyuwangluo.cn/2021/12/21/fe0632cfd5b47.png",
          token: "eyJkYXRhIjoiYTM1YjlkNTkwZWY3NGI4YzFkM2Q1YzE4MGVjNDdlZjAxZGJhZjc3NjU1OTkzMzUzYTM3OWY4YWVkMTgzY2IxNTMwODRjZTk1NDkzY2FiMWRkOWJjNDRiNTc0MjQwYWNjMWNlM2NlNjU3NTkyODZhZWQ4YTkyNmY4YjdiNjZmMmM5ZDg1OWY1MzUzNmVjNmQ5MjEwODg4MzIyZmRlMDE0NmZlMDgwY2U2YWEwMWNjNzc0OWEwZDgwZWU4MTI4YWEyNGI3ZDg2MTEzM2Q3Nzc4ZWMyMWZlNjliMTdiMjY2MTRkYzEzNGVjMjMyZmYzMmU2MWMwNmY1M2ZkZGYzMzIxM2I2YjRjNzg4NGQzZWY0YWFlY2JhOTcwMTk0OTgxYTVmMDI1YjM0NDJiNGM3MzNkYmMwMDIyZjYyZDc3YzQ1YjVhNzBlMWVkOGQxMDM1Yzg4Mzc4ZTEzNjAzNDMwZDYwNDg1MDk4NTY5MTM2N2U5MmM0Y2VmNWJkNTc4ZjFjYzY2YWY1OTljNjE2MTE1OTVkMDdhNjgxOTA5YWEwZmEzOWM5N2M1N2VlNzdkZDlhMjQyOGZkZjUyM2VmNWQ1YjU1YWU2ZGU1N2I5Zjg2YmJjMDQ1ZjgxMTI1MTRiMGYxZmMyMTE0NmFhOGUyZTRkMDBjMTRjNmQzMzFlMDcyYjc3MmRkMTAyZTdkNzIwNWQ2NGQ5YjQ0NDM3MmVhYzI3NjRiNmY1NTljZGViNzY2OTY1Mzc0NWExNGI4YTc1ZDU2NzcwMTY4Y2EwZmI1YWJjMjFkZGFjMWE4YzQzMzAzMDFjOGYyNjEzOTBjZjcxNDc1YmY4ZjViYTlhZmUwYzYzZTVhOTgyMDgzZWJjZWRhMTA4ZmYyMDA0Y2ZkNWVhMTRiMTJlMzZjOWFhMWUyY2NhNGZkNGI5ZGZiMTA1ZDkwMjAxMmU2YTI1OTcwNTAwOTdlZjBjNDZjOWNhYzA5Zjc1ODVjNyIsImtleV9pZCI6MTh9"
        }
        break;
    }
  }
})

$done({ body: JSON.stringify(chxm1023)});
