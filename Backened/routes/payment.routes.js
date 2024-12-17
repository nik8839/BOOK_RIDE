const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');
const paymentController=require('../controllers/payment.controller')

router.post('/payment',
    
    paymentController.getpayment

)



router.get('/success',
    
    paymentController.getsuccess
    

)


router.get('/failed', 
    
    paymentController.getfailed
)
module.exports=router