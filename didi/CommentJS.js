function requestMethod(par1,par2,par3,callback) {
    var xhr = new XMLHttpRequest();
    <!--连接服务器,连接方式，地址，接口-->
    xhr.open(par1, 'https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/'+par2);
    <!--设置请求，以表单方式-->
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    <!--向服务器传参-->
    xhr.send(par3);
    <!--接收服务器返回的数据-->
    xhr.onreadystatechange = function () {
        <!--（=4）数据请求完成（200）数据成功返回-->
        if (xhr.readyState == 4 && xhr.status == 200) {
            <!--responseText包含了服务端返回的数据-->
            var responseData = JSON.parse(xhr.responseText);
            var obj = responseData.data;
           callback(obj,xhr.responseText);
        }
    }
}