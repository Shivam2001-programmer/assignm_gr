const user = require("./user");
const bcrypt = require('bcryptjs');

const router =express.Router();

router.post("/register", async(req,res)=>{
    const {username, email, password} = req.body;

    try {
        const existinguser = await user.findOne({email});
        if (existinguser) return res.status(400).json({message:"User exist"});

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new user({username,email, password:hashedPassword });
        await user.save();

        res.status(201).json({
            message: "User created successfully",
            user: user._id
        })
        
    } catch (error) {
        res.status(500).json({message:"Something wrong",error})
    }
})

moduke.exports = router