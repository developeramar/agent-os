const razorpay = require("../config/razorpay");

exports.createOrder = async (req, res) => {
    try {

        const { amount } = req.body;

        if (!amount) {
            return res.status(400).json({
                success: false,
                message: "Amount is required"
            });
        }

        const options = {
            amount: amount * 100, // Razorpay works in paise
            currency: "INR",
            receipt: `receipt_${Date.now()}`
        };

        const order = await razorpay.orders.create(options);

        return res.status(200).json({
            success: true,
            order
        });

    } catch (error) {

        console.error("Razorpay Order Error:", error);

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }
};






const crypto = require("crypto");

exports.verifyPayment = async (req, res) => {
    try {

        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
        } = req.body;

        const body =
            razorpay_order_id + "|" + razorpay_payment_id;

        const expectedSignature =
            crypto
                .createHmac(
                    "sha256",
                    process.env.RAZORPAY_KEY_SECRET
                )
                .update(body.toString())
                .digest("hex");

        if (expectedSignature === razorpay_signature) {

            return res.status(200).json({
                success: true,
                message: "Payment verified successfully"
            });

        }

        return res.status(400).json({
            success: false,
            message: "Invalid payment signature"
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }
};