const http = require('http');
const https = require('https');
const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    ctx.body = 'Hello Nazmul!';
    // ctx.throw(400, 'name required');
});

app.on('error', err => {
    console.error('server error', err);
});

http.createServer(app.callback()).listen(3000);
https.createServer(app.callback()).listen(3001);