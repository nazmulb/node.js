var Koa = require('koa');
var Router = require('koa-router');
const bodyParser = require('koa-body');

var app = new Koa();
app.use(bodyParser());

var router = new Router({
    prefix: '/users'
});

router
    .get('/', (ctx, next) => {
        ctx.body = {msg: 'Welcome!'}
    })
    .post('/', (ctx, next) => {
        ctx.body = JSON.stringify(ctx.request.body);   
    })
    .put('/', (ctx, next) => {
        ctx.body = JSON.stringify(ctx.request.body);   
    })
    .get('user', '/:id', (ctx, next) => {
        ctx.body = {msg: `user id: ${ctx.params.id}`}
    })
    .del('/:id', (ctx, next) => {
        ctx.body = JSON.stringify(ctx.params);   
    });

console.log(router.url('user', 3));
    
app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);