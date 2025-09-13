const router =require('express').Router()
const bcrypt =require('bcrypt');
const jwt =require('jsonwebtoken');
const{User,loginSchema}=require('../model/user');

// post /api/auth
router.post('/',async(req,res)=>{
    // input validation 
    const{error,value} =loginSchema.validate(req.body);
    if(error) return res.status(400).send(error.details[0].message)
        // find  user email
    const user =await User.findOne({email:value.email.toLowerCase()}) 
    if(!user)res.status(401).send('Invalid email or password')

        // check password
        const ok= await bcrypt.compare(value.password,user.passwordHash)
        if(!ok)res.status(401).send('Invalid email or Password')

            // create jwt token 
            const token =jwt.sign(
                    {
                        id:user._id,email:user.email,name:user.firstName
                    }, 

                    process.env.JWT_SECRET ||"jasminpeer005",
                    // expire time set
                    {expiresIn:process.env.JWT_EXPIRES_IN || '3h'}


            )

            // return token+user info
            res.send({
                message:"Logged in Successfully",
                token,
                id:user._id,
                firstName:user.firstName,
                lastName:user.lastName,
                email:user.email
            })

})
module.exports=router;
