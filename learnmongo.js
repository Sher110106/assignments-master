const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://admin:tesbiq-xEskuf-7dygco@cluster0.a6eeksn.mongodb.net/")
const User=mongoose.model('Users',{name:String,email:String,password:String});
const user=new User({
    name:"harkirat",
    email:"a@mail.com",
    password:"bnck"
})
user.save();