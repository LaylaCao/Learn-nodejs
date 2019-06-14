var http = require('http');

// 调用 http 模块提供的函数： createServer 。
// 这个函数会返回 一个对象，这个对象有一个叫做 listen 的方法，这个方法有一个数值参数， 指定这个 HTTP 服务器监听的端口号。

http.createServer(function(request, response) {

    // 发送HTTP头部
    // HTTP状态值： 200:OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据： ‘hello world'
    response.end('hello world\n');
}).listen(8888);

console.log('Server running at http://127.0.0.1:8000/');