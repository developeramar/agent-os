const { google } = require("googleapis");
const mongoose = require("mongoose");

const User = require("../models/User");
const oauth2Client = require("../config/googleOAuth");

async function sendEmail(
    userIdentifier,
    to,
    subject,
    body
) {

    let user;

    // Agar MongoDB ObjectId hai
    if (mongoose.Types.ObjectId.isValid(userIdentifier)) {

        user = await User.findById(userIdentifier);

    } else {

        // Warna email maan lo
        user = await User.findOne({
            email: userIdentifier
        });

    }

    if (!user) {
        throw new Error("User not found");
    }

    if (!user.googleRefreshToken) {
        throw new Error("Gmail not connected");
    }

    oauth2Client.setCredentials({
        refresh_token: user.googleRefreshToken
    });

    const gmail = google.gmail({
        version: "v1",
        auth: oauth2Client
    });

    const message = [
        `To: ${to}`,
        `Subject: ${subject}`,
        "",
        body
    ].join("\n");

    const encodedMessage = Buffer.from(message)
        .toString("base64")
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");

    const result = await gmail.users.messages.send({
        userId: "me",
        requestBody: {
            raw: encodedMessage
        }
    });

    return result.data;
}

module.exports = {
    sendEmail
};