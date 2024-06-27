const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const jwt=require("jsonwebtoken");
const secret=require("../index")

// Admin Routes
router.post('/signup',  async function(req, res) {
    const username=req.body.username;
    const password=req.body.password;
    const check=Admin.findOne({
        username:username
    })
    if(check) {
        const value = Admin.create({
            username: username,
            password: password

        })
        if(value){
            res.status(200).json({"msg":"Admin created successfully"})
        }
        else{
            res.status(400).json({"msg":"Admin created failed"})
        }

    }
    else{
        res.status(400).json({"msg":"Admin created failed as another user exists with this name"})
    }

    // Implement admin signup logic
});

router.post('/signin', async (req, res) => {
   const username=req.body.username;
   const password=req.body.password;
   const user=await User.find({
       username,
       password
   })
if(user) {
    const token = jwt.sign({username}, secret);
    res.json({token})
}
else{
    res.status(400).json({"msg":"Admin created failed"})
}
    // Implement admin signup logic
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title=req.body.title;
    const description=req.body.description;
    const imageLink=req.body.imageLink;
    const price=req.body.price;
    const value=await Course.create({
        title,
        description,
        imageLink,
        price

    })
    if(value){
        res.status(200).json({msg:"Course created successfully",courseID:value._id})
    }
    else{
        res.status(400).json({msg:"Course created failed"})
    }



});

router.get('/courses', adminMiddleware, (req, res) => {
    Course.find({}).then(function(response){
        res.json({
            courses:response
        })
    })



    // Implement fetching all courses logic
});

module.exports = router;