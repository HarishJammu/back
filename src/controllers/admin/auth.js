const User=require('../../models/user')
const jwt=require("jsonwebtoken")
const bcrypt=require('bcrypt');
const shortid = require('shortid');

exports.signup =(req,res)=>{
    User.findOne({email:req.body.email})
    .exec(async(error,user)=>{
        if(user) return res.status(400).json({
            message:"Admin already registered"
        })
        const {
            firstName,
            secondName,
            email,
            password,
        }=req.body
        const hash_password=await bcrypt.hash(password,10);
        const _user= new User({
                    firstName,
                    secondName,
                    email,
                    hash_password,
                    username:shortid.generate(),
                    role:"admin"
                })
         _user.save((error,data)=>{
            if(error){
                return res.status(400).json({
                    message:"Something Went Wrong"
                })
            }
            if(data){
                return res.status(201).json({
                    message:"Admin created successfully"
                })
            }
         })   
    })
}

exports.signin=(req,res)=>{
    User.findOne({email:req.body.email})
    .exec((error,user)=>{
        if(error) return res.status(400).json({error})
        if(user){
            if(user.authenticate(req.body.password) && user.role==="admin"){
                const token=jwt.sign({_id:user._id,role:user.role},("MERNSECRETE"),{expiresIn:"1d"})

                const {_id,firstName,secondName,email,role,fullName}=user;
                res.cookie('token', token,{expiresIn:'1d'});
                res.status(200).json({
                    token,
                    user:{
                        _id,firstName,secondName,email,role,fullName
                    }
                })
            }else{
                return res.status(400).json({
                    message:"Invalid Password"
                })
            }

        }else{
            return res.status(400).json({message:"Something Went Wrong"})
        }

    })
    
}


exports.signout=(req,res)=>{
    res.clearCookie('token');
    res.status(200).json({
        message:'SignOut successfully...!'
    });
}
