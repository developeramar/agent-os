const mongoose = require("mongoose");

const userSchema =
    new mongoose.Schema({


        name: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },

        password: {
            type: String,
            required: true
        },

        plan: {
            type: String,
            enum: ["free", "pro"],
            default: "free"
        },

        planStatus: {
            type: String,
            enum: ["active", "expired"],
            default: "active"
        },

        planStartDate: {
            type: Date,
            default: null
        },

        planExpiryDate: {
            type: Date,
            default: null
        },

        emailUsage: {
            type: Number,
            default: 0
        },

        emailLimit: {
            type: Number,
            default: 20
        },

        credits: {
            type: Number,
            default: 20
        },

        reminderCredits: {
            type: Number,
            default: 20
        },

        aiCredits: {
            type: Number,
            default: 50
        },

        gmailConnected: {
            type: Boolean,
            default: false
        },

        gmailEmail: {
            type: String,
            default: ""
        },

        googleRefreshToken: {
            type: String,
            default: ""
        },

        paymentHistory: [
            {
                paymentId: String,
                orderId: String,
                amount: Number,
                currency: String,
                status: String,
                paidAt: Date
            }
        ],
        onboardingCompleted: {
            type: Boolean,
            default: false
        },

        createdAt: {
            type: Date,
            default: Date.now
        }

    });


module.exports =
    mongoose.model(
        "User",
        userSchema
    );
