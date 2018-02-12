const {Service} = require("egg");
class ResetService extends Service {
    async reset(id,name) {
        const { ctx,app } = this;
        return app.mysql.update("test",{
            id,
            name,
            class:3
        })
    }
}

module.exports = ResetService