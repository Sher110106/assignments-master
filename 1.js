const users = [{
    name: "john",
    kidneys: [{
        healthy: false
    }, {
        healthy: true
    }]
}];

const express = require('express');
const app = express();

app.get("/", function(req, res) {
    const jokidney=users[0].kidneys;
    const num = jokidney.length;
    const healthyKidneys = users[0].kidneys.filter(kidney => kidney.healthy);
    res.send(`John has ${num} kidneys, ${healthyKidneys.length} of them are healthy`);
});
app.use(express.json());
app.post("/",function(req,res){
    const isHealthy=req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg:"done"
    })


})
app.put("/",function(req,res){
    let johnkid=users[0].kidneys;
    
    console.log(johnkid);
    res.json({
        msg:"done"
    
    })
    for(let i=0;i<johnkid.length;++i){
       johnkid[i].healthy=true;

    }

})
app.delete("/",function(req,res){
    let johnkid=users[0].kidneys;
    //for(let i=0;i<johnkid.length;++i){
      //  if(johnkid[i].healthy==false){
        //    johnkid.splice(i,1);
        //}
        
    //}
    const newKidneys=johnkid.filter(kidney=>kidney.healthy);
    console.log(newKidneys);
    users[0].kidneys=newKidneys;
    res.json({
        msg:"done"
    })

})

app.listen(3100, () => {
    console.log('Server is running on port 3100');
});
