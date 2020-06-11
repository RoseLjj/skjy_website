var nowHost = window.location.host
var baseUrl = ''; // 域名
if (nowHost == '127.0.0.1:5562' || nowHost == '192.168.23.117:5562') { // 测试域名
    baseUrl = 'http://192.168.32.95';
} else { // 正式
    baseUrl = window.location.protocol + '//' + window.location.host // 正式
}

var loginUrl = "http://foslink.cn/developLogin.html";

// 接口信息
var ajaxUrl = baseUrl + '/website/show/product/'
var getProductCategoryList = ajaxUrl + 'getProductCategoryList'; //获取产品分类列表GET

/**
 * get请求
 * @param {*} paramObj
 */
function getAjax(paramObj) {
    document.cookie = "TOKEN=" + sessionStorage.getItem("token")
    $.ajax({
        type: 'GET',
        url: paramObj.url,
        data: paramObj.data,
        dataType: paramObj.dataType || "json",
        contentType: "application/json;charset=utf-8",
        xhrFields: {
            withCredentials: true
        },
        success: function (res) {
            console.log('success', res)
            if (res.code == '000000') { //成功
                if (paramObj.success) {
                    paramObj.success(res.data)
                }
            } else {
                alert(res.message)
            }

        },
        complete: function (XMLHttpRequest, textStatus) {
            console.log('complete', XMLHttpRequest, textStatus)
            if (paramObj.complete) {
                paramObj.complete()
            }
            //XMLHttpRequest 对象和一个描述成功请求类型的字符串
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log('error', XMLHttpRequest, textStatus, errorThrown)
            if (paramObj.error) {
                paramObj.error()
            }
        }
    });
}

/**
 * post请求
 * @param {*} paramObj 
 */
function postAjax(paramObj) {
    $.ajax({
        type: 'POST',
        url: paramObj.url,
        data: JSON.stringify(paramObj.data),
        dataType: paramObj.dataType || "json",
        contentType: "application/json;charset=utf-8",
        xhrFields: {
            withCredentials: true
        },
        success: function (res) {
            console.log('success', res)
            if (res.code == '000000') { //成功
                if (paramObj.success) {
                    paramObj.success(res.data)
                }
            } else {
                alert(res.message)
            }
        },
        complete: function (XMLHttpRequest, textStatus) {
            console.log('complete', XMLHttpRequest, textStatus)
            if (paramObj.complete) {
                paramObj.complete()
            }
            //XMLHttpRequest 对象和一个描述成功请求类型的字符串
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log('error', XMLHttpRequest, textStatus, errorThrown)
            if (paramObj.error) {
                paramObj.error()
            }
        }
    });
}

/**
 * 获取当前URL参数
 */
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配
    var context = "";
    if (r != null)
        context = r[2];
    reg = null;
    r = null;
    return context == null || context == "" || context == "undefined" ? "" : context;
}
