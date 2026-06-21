const User =
require("../models/User");

const bcrypt =
require("bcryptjs");

const jwt =
require("jsonwebtoken");

exports.register =
async (req, res) => {


    try {

        const {

            name,

            email,

            password

        } = req.body;

        const existingUser =
            await User.findOne({

                email

            });

        if (existingUser) {

            return res.status(400).json({

                success: false,

                message:
                    "User already exists"

            });

        }

        const hashedPassword =
            await bcrypt.hash(

                password,

                10

            );

        const user =
            await User.create({

                name,

                email,

                password:
                    hashedPassword,

                plan:
                    "free",

                emailUsage:
                    0,

                emailLimit:
                    20,

                gmailConnected:
                    false,

                onboardingCompleted:
                    false

            });

        return res.status(201).json({

            success: true,

            message:
                "User Registered Successfully"

        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({

            success: false,

            message:
                error.message

        });

    }

};


exports.login =
async (req, res) => {


    try {

        const {

            email,

            password

        } = req.body;

        const user =
            await User.findOne({

                email

            });

        if (!user) {

            return res.status(404).json({

                success: false,

                message:
                    "User not found"

            });

        }

        const isMatch =
            await bcrypt.compare(

                password,

                user.password

            );

        if (!isMatch) {

            return res.status(400).json({

                success: false,

                message:
                    "Invalid Password"

            });

        }

        const token =
            jwt.sign(

                {

                    userId:
                        user._id

                },

                "agentos_secret",

                {

                    expiresIn:
                        "7d"

                }

            );

        return res.status(200).json({

            success: true,

            token,

            user: {

                id:
                    user._id,

                name:
                    user.name,

                email:
                    user.email,

                plan:
                    user.plan,

                gmailConnected:
                    user.gmailConnected,

                gmailEmail:
                    user.gmailEmail,

                onboardingCompleted:
                    user.onboardingCompleted,

                emailUsage:
                    user.emailUsage,

                emailLimit:
                    user.emailLimit

            }

        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({

            success: false,

            message:
                error.message

        });

    }

};

