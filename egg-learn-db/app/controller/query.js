'use strict';
const Controller = require("egg").Controller;
class queryController extends Controller {
    async queryId() {
        const {
            ctx,
            app
        } = this;

        const response = await ctx.service.query.queryId(ctx.request.body.id)
        ctx.body = response

    }

}

module.exports = queryController