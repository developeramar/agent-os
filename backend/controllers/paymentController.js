const razorpay = require("../config/razorpay");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
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



    const token = req.headers.authorization;

    if (!token) {

        return res.status(401).json({
            success: false,
            message: "Unauthorized"
        });

    }

    const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET
    );

    const user = await User.findById(decoded.userId);

    if (!user) {

        return res.status(404).json({
            success: false,
            message: "User not found"
        });

    }



    try {

        console.log("✅ VERIFY API HIT");
        console.log(req.body);

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

            user.plan = "pro";

            user.planStatus = "active";

            user.planStartDate = new Date();

            user.planExpiryDate = new Date(
                Date.now() + 30 * 24 * 60 * 60 * 1000
            );

            user.emailLimit = 999999;

            user.credits = 999999;

            user.reminderCredits = 999999;

            user.aiCredits = 999999;

            user.paymentHistory.push({

                paymentId: razorpay_payment_id,

                orderId: razorpay_order_id,

                amount: 199,

                currency: "INR",

                status: "Success",

                paidAt: new Date()

            });

            await user.save();

            console.log("✅ USER UPGRADED TO PRO");

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


