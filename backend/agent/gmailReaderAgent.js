const { google } = require("googleapis");
const User = require("../models/User");
const oauth2Client = require("../config/googleOAuth");

async function getEmails(userId) {

    const user = await User.findById(userId);

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

    // Sirf Inbox + Unread mails
    const response = await gmail.users.messages.list({
        userId: "me",
        labelIds: ["INBOX", "UNREAD"],
        maxResults: 10
    });

    console.log(JSON.stringify(response.data, null, 2));

    if (!response.data.messages) {
        return [];
    }

    const messages = response.data.messages;

    const emailDetails = await Promise.all(

        messages.map(async (message) => {

            const email = await gmail.users.messages.get({
                userId: "me",
                id: message.id
            });

            const headers = email.data.payload.headers || [];

            const subject =
                headers.find(h => h.name === "Subject")?.value || "";

            const from =
                headers.find(h => h.name === "From")?.value || "";


            console.log("------------");
            console.log("Subject:", subject);
            console.log("Labels:", email.data.labelIds);

            const date =
                headers.find(h => h.name === "Date")?.value || "";

            let body = "";

            if (email.data.payload?.parts) {

                const textPart =
                    email.data.payload.parts.find(
                        part => part.mimeType === "text/plain"
                    );

                if (textPart?.body?.data) {

                    body = Buffer.from(
                        textPart.body.data,
                        "base64"
                    ).toString("utf8");
                }

            } else if (email.data.payload?.body?.data) {

                body = Buffer.from(
                    email.data.payload.body.data,
                    "base64"
                ).toString("utf8");
            }

            return {

                id: message.id,
                from,
                subject,
                date,
                snippet: email.data.snippet || "",
                body,
                receivedTime: Number(email.data.internalDate),
                unread: email.data.labelIds.includes("UNREAD")

            };

        })

    );

    emailDetails.sort(
        (a, b) => b.receivedTime - a.receivedTime
    );

    return emailDetails;

}

module.exports = {
    getEmails
};