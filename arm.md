Arm安装说明
提示
由于我自己的环境是 Ubuntu 20.04.3 LTS
Arm安装教程
1拉源码 国内
git clone https://ghproxy.com/https://github.com/NNNNolan/Ark.git /root/Ark
国外
git clone https://github.com/NNNNolan/Ark.git /root/Ark
2 拉取基础镜像
sudo docker pull nolanhzy/nvjdccaptcha:arm   
3 执行启动基础镜像
sudo docker run   --name nvjdccaptcha -p 5703:5000  --restart=always  -d   -it --privileged=true  nolanhzy/nvjdccaptcha:arm   
4 执行命令安装浏览器
sudo apt-get install  chromium-browser
5创建一个目录放配置
 cd /root/Ark
mkdir -p  Config && cd Config
6手动建立Config.json 配置文件 注意ARM多一个配置 Captchaurl
{
  ///浏览器最多几个网页
  "MaxTab": "4",
  //网站标题
  "Title": "Ark",
  //回收时间分钟 不填默认3分钟
  "Closetime": "5",
  //网站公告
  "Announcement": "为提高账户的安全性，请关闭免密支付。",
   //Proxy 支持不带密码的socks5 以及http 
  ///http  Proxy 只需要填写 ip:端口
  /// Socks5 需要填写socks5://ip:端口 不能填写下方账户密码
  "Proxy": "",
  //Proxy帐号
  "ProxyUser": "",
  //Proxy密码
  "ProxyPass": "",
  //Opencv镜像地址  刚刚镜像的地址
  "Captchaurl": "http://127.0.0.1:5703",
  ///开启打印等待日志卡短信验证登陆 可开启 拿到日志群里回复 默认不要填写
  "Debug": "",
  ///自动滑块次数5次 5次后手动滑块 可设置为0默认手动滑块
  "AutoCaptchaCount": "0",
  ///XDD PLUS Url  http://IP地址:端口/api/login/smslogin
  "XDDurl": "",
  ///xddToken
  "XDDToken": "",
  ///登陆预警 0 0 12 * * ?  每天中午十二点 https://www.bejson.com/othertools/cron/ 表达式在线生成网址
  "ExpirationCron": " 0 0 12 * * ?",
  ///个人资产 0 0 10,20 * * ?  早十点晚上八点
  "BeanCron": "0 0 10,20 * * ?",
  // ======================================= WxPusher 通知设置区域 ===========================================
  // 此处填你申请的 appToken. 官方文档：https://wxpusher.zjiecode.com/docs
  // WP_APP_TOKEN 可在管理台查看: https://wxpusher.zjiecode.com/admin/main/app/appToken
  // MainWP_UID 填你自己uid
  ///这里的通知只用于用户登陆 删除 是给你的通知
  "WP_APP_TOKEN": "",
  "MainWP_UID": "",
  // ======================================= pushplus 通知设置区域 ===========================================
  ///Push Plus官方网站：http: //www.pushplus.plus  只有青龙模式有用
  ///下方填写您的Token，微信扫码登录后一对一推送或一对多推送下面的token，只填" "PUSH_PLUS_TOKEN",
  "PUSH_PLUS_TOKEN": "",
  //下方填写您的一对多推送的 "群组编码" ，（一对多推送下面->您的群组(如无则新建)->群组编码）
  "PUSH_PLUS_USER": "",
  ///青龙配置  注意对接XDD 对接芝士 设置为"Config":[]
  "Config": [
    {
      //序号必填从1 开始
      "QLkey": 1,
      //服务器名称
      "QLName": "阿里云",
      //青龙地址
      "QLurl": "http://ip:5700",
      //青龙2,9 OpenApi Client ID
      "QL_CLIENTID": "",
      //青龙2,9 OpenApi Client Secret
      "QL_SECRET": "",
      //CK最大数量
      "QL_CAPACITY": 99,
      ///建议一个青龙一个WxPusher 应用
      "WP_APP_TOKEN": ""
    }
  ]
​
}
7 安装Gdip
apt install libgdiplus -y && ln -s /usr/lib/libgdiplus.so /usr/lib/gdiplus.dll
8 回到的目录 下载NET5.sh
 cd /root/Ark
wget https://dot.net/v1/dotnet-install.sh
9 设置权限
chmod 777 dotnet-install.sh
10 下载NET5
./dotnet-install.sh -c 5.0
11 设置 path
export PATH="$PATH:$HOME/.dotnet"
12 启动
nohup dotnet NETJDC.dll --urls=http://*:5701 1>"$(pwd)"/log 2>&1 & #ARM64
12 由于多了定时任务 根据自己的环境设置时区 这里就不多说了 自己百度设置成北京时间即可
更新
查询占用5701的端口进程 如果你的nvjdc是5701就查询 5701
netstat -lnp|grep 5701
假如显示如下内容 tcp6 0 0 :::5701 :::* LISTEN 680536/dotnet
杀死进程
kill -9 680536
cd /root/Ark
git pull
export PATH="$PATH:$HOME/.dotnet"
nohup dotnet NETJDC.dll --urls=http://*:5701 1>"$(pwd)"/log 2>&1 & #ARM64
