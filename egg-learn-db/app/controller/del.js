const {Controller} =require("egg");
class DelController extends Controller{
    async del(){
        const {ctx}=this;
       
        const response =await ctx.service.del.del(ctx.request.body.id,ctx.request.body.name);
       
        ctx.body=response;
    };
    async multiplyDel(){
        const { ctx } = this;

        const response = await ctx.service.del.multiplyDel(ctx.request.body.id);

        ctx.body = response;
    }
    
}

module.exports=DelController