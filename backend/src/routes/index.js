const { Router } = require("express")

const router = Router()
const User = require("../models/user")
const jwt = require("jsonwebtoken")

router.get("/", (req, res) => res.send("hello world"))

router.post("/signup", async (req, res) => {
    const { email, password} = req.body
    const newUser = new User({email, password});
    await newUser.save();

    const token = jwt.sign({_id: newUser._id}, "secretKey")
    res.status(200).json({token})

})

router.post("/signin", async (req, res) => {

    const {email , password} = req.body
    const user = await User.findOne({email})

    if (!user) return res.status(401).send("the email no existe");
    if (user.password !== password ) return res.status(401).send("the email contraseña no existe");
    const token = jwt.sign({_id : user._id}, "secretKey");
    return res.status(200).json({token})
})

router.get("/task", (req, res) =>{
    res.json([
        {
            _id: 1,
            name: "task One",
            description : "lorem iptsum",
            date: "2022-12-06"
        },
        {
            _id: 2,
            name: "task One",
            description : "lorem iptsum",
            date: "2022-12-06"
        },
        {
            _id: 3,
            name: "task One",
            description : "lorem iptsum",
            date: "2022-12-06"
        }
    ])
})

router.get("/private-task",verifyToken, (req, res) =>{
    res.json([
        {
            _id: 1,
            name: "task One",
            description : "lorem iptsum",
            date: "2022-12-06"
        },
        {
            _id: 2,
            name: "task One",
            description : "lorem iptsum",
            date: "2022-12-06"
        },
        {
            _id: 3,
            name: "task One",
            description : "lorem iptsum",
            date: "2022-12-06"
        }
    ])
})

module.exports = router

function verifyToken(req, res, next){

    if(!req.headers.authorization) {
        return res.status(401).send("Acceso no autorizado")
        
    }
    token = req.headers.authorization.split(" ")[1]
    if(token === "null"){
        return res.status(401).send("Acceso no autorizado")

    }

    const payload = jwt.verify(token, "secretKey");
    req.userId = payload._id;
    next();
}