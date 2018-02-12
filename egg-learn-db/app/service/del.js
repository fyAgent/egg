const {Service} =require("egg");

class delService extends Service{
    async del (id,name){
        
        const {ctx,app}=this;
        let response;
        if(id){
            
            response = await app.mysql.delete("test",{
                id
            })
           

        }else if (name){

            response = await app.mysql.delete("test", {

                name

            })

        }else{
            response="请输入要删除的条件"
        }
     
        return response
    };
    async multiplyDel(id) {

        const { ctx, app } = this;
        let response;
       
        response = await this.app.mysql.query(`DELETE FROM test WHERE id in (${id})`);
        return response
    }
}
module.exports=delService