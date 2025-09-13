require('dotenv').config()
const express =require('express')
const cors =require('cors')
const db = require('./db.js')
const app=express();
const userRouts =require('./routs/users.js')
const authRouts =require('./routs/auth.js')
const{User}=require('./model/user.js')
const authh =require('./middle/authh.js')
app.use(cors());
app.use(express.json());

app.use('/api/users',userRouts)
app.use('/api/auth',authRouts)

// connect to db
db()

app.get('/',(_req,res)=>{
    res.send("API is running ")
})
// jwt token verify
app.get('/api/me',authh,async(req,res)=>{
    const me =await  User.findById(req.user.id).select('-passwordHash');
    if(!me) return  res.status(404).send("user not found")
        res.send(me)
}) 

const port =process.env.PORT || 5000
app.listen(port,()=>console.log(`Listing on port ${port}`))