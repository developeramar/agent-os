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
        default: "free"
    },

    emailUsage: {
        type: Number,
        default: 0
    },

    emailLimit: {
        type: Number,
        default: 20
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
