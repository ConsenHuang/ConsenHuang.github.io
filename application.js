'use strict';

const express = require('express');
const app = express();
app.use( '/www', express.static('./www') );
app.listen(8888, function() {
    console.log('服务器开启成功');
    console.log("输入"+'\n\n\nhttp://localhost:8888/www\n\n\n访问主页桌面!~');
});