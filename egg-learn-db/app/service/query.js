const {Service} =require("egg");
class queryService extends Service{
    async queryId(id){
       
        const {ctx,app} =this;
        if(id){
            return await app.mysql.get("test", { id })
        }else{
           const res =  await app.mysql.query(`SELECT id FROM test`);
            if(res.length>0){
                res.map((val,idx)=>{
                    val.id=parseInt(val.id)
                })
                return res;
            }
        }
        
    }
}

module.exports=queryService