const express=require('express');
const { addItemToCart, getCartItems } = require('../controllers/cart');
const { requireSignIn, userMiddleware } = require('../common-middleware');

const router=express.Router();






//router.post('/user/cart/addtocart', requireSignIn , userMiddleware ,addItemToCart)
router.post("/user/cart/addtocart",requireSignIn,userMiddleware,addItemToCart);

//router.get('/user/cart/getCartItems',requireSignIn , userMiddleware,getCartItems);


module.exports=router;