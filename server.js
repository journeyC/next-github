const Koa = require("koa")
const next = require("next")
const Router = require("koa-router")
const dev = process.env.NODE_WNV!="production"
const app = next({ dev });
const handle = app.getRequestHandler()
app.prepare().then(()=>{

    const server = new Koa()

    server.use(async (ctx,next)=>{
        await handle(ctx.req,ctx.res)
        ctx.respond=false;
    })

    server.listen(3000,()=>{
        console.log("koa server 3000")
    })
    
})


    // const router=new Router()
    // router.get('/test/:id',(ctx)=>{
    //     ctx.body = {success:true}
    //     ctx.set('Content-Type','application/json')
    // })
   // server.use(router.routes())



