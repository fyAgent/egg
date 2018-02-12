const {Service} =require("egg")

class addService extends Service{
    async addName(name){
        const {app} =this;
        return await app.mysql.insert("test",{name,class:2});
    }
}
module.exports=addService;