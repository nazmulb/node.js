const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    ctx.body = 'Hello Nazmul!';
});

app.listen(3000);