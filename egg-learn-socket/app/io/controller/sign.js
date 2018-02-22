const Controller  =require("egg").Controller;
class Sign extends Controller{
    async in(){

        const {app,ctx}=this;

        const { name} =ctx.args[0];
        

    }
}
module.exports = Sign