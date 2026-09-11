const Koa = require("koa");
const Router = require("@koa/router");

function createApp() {
  const app = new Koa();
  const router = new Router();
  router.get("/healthz", ctx => { ctx.body = { status: "ok" }; });
  router.post("/submissions", ctx => { ctx.status = 501; ctx.body = { error: "资格规则尚未配置" }; });
  app.use(router.routes()).use(router.allowedMethods());
  return app;
}

if (require.main === module) createApp().listen(process.env.PORT || 8080);
module.exports = { createApp };
