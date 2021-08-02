const register = (router) => {
    router.get('/health', async (ctx) => {
        ctx.status = 200;
        ctx.body = { status: 'OK' };
    });
};
export default { register };
//# sourceMappingURL=index.js.map