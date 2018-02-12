const {
    Controller
} = require("egg");

class addController extends Controller {
    async addName() {
        const {
            ctx
        } = this;
        const response = await ctx.service.add.addName(ctx.request.body.name);
        if (response.affectedRows === 1) { //加入成功
            ctx.body = {
                msg: "success",
                res: ctx.request.body.name
            };
        }

    }
}
module.exports = addController;