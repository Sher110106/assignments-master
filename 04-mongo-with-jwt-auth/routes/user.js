const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const jwt = require("jsonwebtoken");
const secret = require("../index");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const {username,password}=req.body;
    const check=await User.findOne({
        username:username
    })
    if(check){
        const value= await User.create({
            username,
            password
        })
        if(value){
            res.status(200).json({msg:"User created successfully"})
        }
        else{
            res.status(400).json({msg:"User created failed"})
        }



    }
    else{
        res.status(400).json({msg:"User created failed"})
    }


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
    // Implement admin signup logic

router.get('/courses', async (req, res) => {
    const response=await Course.find({

    })
    res.json(response);
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic

    const username=req.username;
    await User.updateOne({
        username:username
    },{
        "$push":{
            purchasedCourses:courseId
        }

    })
    res.json({msg:"Message complete"})







});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username=req.username;
    const user=await User.findOne({
        username

    });
    console.log(user.purchasedCourses);
    const courses=await Course.find({
        _id:{
            $in: user.purchasedCourses
        }
    })
    res.json({courses:courses});
});


module.exports = router