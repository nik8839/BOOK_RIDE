const paypal = require('paypal-rest-sdk');
module.exports.getpayment = async (req, res,next) => {
    let data
    try {

        let create_payment_json = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "redirect_urls": {
                "return_url": "http://localhost:4000/paymentgateway/success",
                "cancel_url": "http://localhost:4000/paymentgateway/failed"
            },
            "transactions": [{
                "item_list": {
                    "items": [{
                        "name": "item",
                        "sku": "item",
                        "price": "1.00",
                        "currency": "USD",
                        "quantity": 1
                    }]
                },
                "amount": {
                    "currency": "USD",
                    "total": "1.00"
                },
                "description": "This is the payment description."
            }]
        };


        await paypal.payment.create(create_payment_json, function (error, payment) {
            if (error) {
                throw error;
            } else {
               // console.log("Create Payment Response");
                // console.log(payment);
                data = payment;
                res.json(data);

            }
        });


    } catch (error) {
        console.log(error);
    }
}

module.exports.getsuccess= async (req, res,next) => {

    try {

        const payerId = req.query.PayerID;
        const paymentId = req.query.paymentId;

        const execute_payment_json = {
            "payer_id": payerId,
            "transactions": [{
                "amount": {
                    "currency": "USD",
                    "total": "1.00"
                }
            }]
        }


        paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
            if (error) {
                console.log(error)
                return res.redirect("http://localhost:4000/paymentgateway/failed");
            } else {
                console.log("Execute Payment Response");
                // console.log(payment);
                const response = JSON.stringify(payment);
                const parsedResponse = JSON.parse(response);

                const transactions = parsedResponse.transactions[0];

                console.log("transactions", transactions);

                return res.redirect("http://localhost:4000/paymentgateway/success");
            }
        })


    } catch (error) {
        console.log(error);
    }

}
module.exports.getfailed=async (req, res,next) => {

    return res.redirect("http://localhost:4000/paymentgateway/failed");
}