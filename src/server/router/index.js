import makeRouter from 'koa-router';

const router = makeRouter();

router.get('/*', async(ctx, next) => {
  console.log("Getting messages");

  await ctx.state.mobx.MessageStore.getMessages();

  await next();
});

export default router;
