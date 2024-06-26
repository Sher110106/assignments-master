const express=require("express")
const app=express();
const z=require("zod")

app.use(express.json());
app.post("/health-checkup",function(req,res){
    //kidneys=[1,2]
    const kidneys=req.body.kidneys;
    const kidneyLength=kidneys.length;
    res.status(200).send("Your kidney is " + kidneyLength);

});
//global catch
//takes 4 inputs 
app.use(function(err,req,res,next){
    res.json({
        msg:"sorry something is wrong with our server"
    })
})
app.listen(3000);
