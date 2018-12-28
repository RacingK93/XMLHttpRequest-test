# XMLHttpRequest-test
XMLHttpRequest demo

这是一个简单的demo：利用XMLHttpRequest技术，向服务器端发送一个请求，然后拿到返回数据。

 1. 判断当前运行环境(浏览器)是否支持XMLHttpRequest，如果支持实例化XMLHttpRequest对象。
 2. 如果不支持 则判断是否支持ActiveXObject(IE)，如果支持实例化ActiveXObject对象。
 3. XMLHttpRequest.open() 方法初始化一个请求。
 4. XMLHttpRequest.setRequestHeader() 是设置HTTP请求头部的方法。此方法必须在  open() 方法和 send()   之间调用。
 5. XMLHttpRequest.send() 方法用于发送 HTTP 请求。如果是异步请求（默认为异步请求），则此方法会在请求发送后立即返回；如果是同步请求，则此方法直到响应到达后才会返回。XMLHttpRequest.send() 方法接受一个可选的参数，其作为请求主体；如果请求方法是 GET 或者 HEAD，则应将请求主体设置为 null。
 6. XMLHttpRequest.onreadystatechange 会在 XMLHttpRequest 的readyState 属性发生改变时触发 readystatechange 事件的时候被调用。警告：这个方法不该用于同步的requests对象,并且不能在内部(C++)代码中使用.