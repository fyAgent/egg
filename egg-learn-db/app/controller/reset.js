const {Controller}=require("egg");


class ResetController extends Controller{
    async reset(){
        const {ctx}=this;
        const response = await ctx.service.reset.reset(ctx.request.body.id,ctx.request.body.name)
        ctx.body=response;
    }
}

module.exports = ResetController;