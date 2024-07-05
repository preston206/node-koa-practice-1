const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');

const router = new Router();

// this is a route that will always output the same thing
// '/' and '/test/random/123' would both output the same
// this doesn't require the use of 'koa-router'
// app.use(async ctx => ctx.body = "Hello, World.");

// 'koa-router' is used to create actual routes
router.get('/hello', ctx => ctx.body = "Hello");
router.get('/bye', ctx => ctx.body = "Bye");

app.use(router.routes());

app.listen(5500, () => console.log("we're listening..."));