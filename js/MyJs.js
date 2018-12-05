var baseUrl = "http://localhost:31567/api/";
//var baseUrl = "http://10.4.231.208:801/api/";
//var baseUrl = "http://134.175.29.174/TOPIC/api/";
var AppVirtualUrl = "";
var baseData = function (action,fields) {
    var userId = "111";
    return {
        "userId": userId,
        "requestKey": action,
        "terminalResolution": "Html页面无法获取分辨率*",
        "terminalName": "Html页面无法获取设备名称",
        "terminalKey": "123456",
        "terminalType": "3",
        "terminalCode": "",
        "systemCode": "",
        "fields": fields
    }
}
 // ajax 对象
 function ajaxObject() {
     var xmlHttp;
     try {
         // Firefox, Opera 8.0+, Safari
         xmlHttp = new XMLHttpRequest();
     }
     catch (e) {
         // Internet Explorer
         try {
             xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
         } catch (e) {
             try {
                 xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
             } catch (e) {
                 alert("您的浏览器不支持AJAX！");
                 return false;
             }
         }
     }
     return xmlHttp;
 }
//改造ajax，减少参数,原生函数在楼下
 function AjaxPost(apiName, paradata, fnSucceed) {
     data = "=" + json2str(paradata);
     var url = baseUrl + apiName
     var ajax = ajaxObject();
     ajax.open("post", url, true);
     ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
     ajax.onreadystatechange = function () {
         if (ajax.readyState == 4) {
             if (ajax.status == 200) {
                 fnSucceed(ajax.responseText);
             }
             else {
                 //alert("HTTP请求错误！错误码：" + ajax.status);
             }
         }
         else {
             //fnLoading();
         }
     }
     ajax.send(data);

 }
 var fnFail = function (responseText) {
     alert(responseText)
 };
 var fnLoading = function (status) {
 };


 ////0: 请求未初始化
 ////1: 服务器连接已建立
 ////2: 请求已接收
 ////3: 请求处理中
 ////4: 请求已完成，且响应已就绪
 //// ajax post请求： 原生ajax方法
 //function AjaxPost(apiName, paradata, fnSucceed, fnFail, fnLoading) {
 //    data = "=" + json2str(paradata);
 //    var url = baseUrl + apiName
 //    var ajax = ajaxObject();
 //    ajax.open("post", url, true);
 //    ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
 //    ajax.onreadystatechange = function () {
 //        if (ajax.readyState == 4) {
 //            if (ajax.status == 200) {
 //                fnSucceed(ajax.responseText);
 //            }
 //            else {
 //                fnFail("HTTP请求错误！错误码：" + ajax.status);
 //            }
 //        }
 //        else {
 //            fnLoading();
 //        }
 //    }
 //    ajax.send(data);

 //}
 //var fnFail = function (responseText) {
 //    alert(responseText)
 //};
 //var fnLoading = function (status) {
 //};
 /** 
 * json对象转字符串形式 
 */
 function json2str(o) {
     var arr = [];
     var fmt = function (s) {
         if (typeof s == 'object' && s != null) return json2str(s);
         return /^(string|number)$/.test(typeof s) ? "'" + s + "'" : s;
     }
     for (var i in o) arr.push("'" + i + "':" + fmt(o[i]));
     return '{' + arr.join(',') + '}';
 }
/**
*获取Url地址参数
*/
 function GetUrlString(name) {
     var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if (r != null) return unescape(r[2]); return null;
 }
