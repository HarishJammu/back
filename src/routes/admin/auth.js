const express=require('express');
const {signup, signout,}=require("../../controllers/admin/auth");
const { validateSignUpRequest,validateSignInRequest, isRequestValidated } = require('../../validator/auth');
const { signin } = require('../../controllers/admin/auth');
const { requireSignIn } = require('../../common-middleware');
const router=express.Router();



router.post('/admin/signin', validateSignInRequest,isRequestValidated , signin );
router.post('/admin/signup',validateSignUpRequest, isRequestValidated , signup);
router.post('/admin/signout', signout);


/*router.post('/profile',requireSignIn,(req,res)=>{
    res.status(200).json({user:"Profile"})
})*/




module.exports=router;
