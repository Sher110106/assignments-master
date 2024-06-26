
const express = require('express')
const app=express()
const bodyParser=require('body-parser')
const port = 3000
app.use(bodyParser.json());
app.get('/', function(req, res){
  res.send('Hello World!')
})
app.post('/',(req,res)=>{
    console.log(req.body);
    console.log(req.headers);
    res.send(
        {
            msg:"2+2=4"
        }
    )
    
}
)
//try to create a http serve from scratch in c
//create a todo app that lets users store todos on the server

app.listen(port)