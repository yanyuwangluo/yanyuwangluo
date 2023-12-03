let username = "";
let password = "";
let weburl = "http://101.35.82.50:8024/";
//后台设置对接api密钥
let apisecret = "UCFiLaw8N5eBpV80SPMQYxxMpFLhoRP2";


GetCookie();
function GetCookie() {
		var CV = $response.headers['Set-Cookie'] || $response.headers['set-cookie'];;
		var ELMCK = CV && CV.includes("x5sec=")  && CV;
		if (CV && ELMCK) {
			  let x5sec = CV.match(/x5sec=.+?;/)[0] ;
              $notify(`x5sec`, "", x5sec);  
              console.log(x5sec+"\n\n");
              $prefs.setValueForKey(x5sec, "x5sec");
              updatex5sec(x5sec);
        }
        //$done();
}


//批量更新x5sec
function updatex5sec(x5sec){
    let url = weburl+`/api/v1/cookies/x5sec?token=`+apisecret;
    const method = `POST`;
    const headers = {
    };
    const body = x5sec.replace(';','');
    const myRequest = {
        url: url,
        method: method,
        headers: headers,
        body: body
    };
    $task.fetch(myRequest).then(response => {
        console.log("======批量更新x5sec======\n" );
        console.log(response.statusCode + "\n\n" +response.body);
        $notify(`x5sec`, "批量更新x5sec", response.body);  
        $done();
    }, reason => {
        console.log(reason.error);
        $done();
    });
}




//登录获取token
function weblogin(x5sec){
    let url = weburl+`/api/v1/login`;
    const method = `POST`;
    const headers = {
    };
    const body = `username=`+username+`&password=`+password;

    const myRequest = {
        url: url,
        method: method,
        headers: headers,
        body: body
    };
    $task.fetch(myRequest).then(response => {
        //console.log(response.statusCode + "\n\n" +response.body);
        let token = JSON.parse(response.body).data.token;
        console.log("======获取token======\n" + token);
        $done();
    }, reason => {
        console.log(reason.error);
        $done();
    });
}




